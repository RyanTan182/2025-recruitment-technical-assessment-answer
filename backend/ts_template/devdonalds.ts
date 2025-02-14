import express, { Request, Response } from "express";

// ==== Type Definitions, feel free to add or modify ==========================
interface cookbookEntry {
  name: string;
  type: string;
}

interface requiredItem {
  name: string;
  quantity: number;
}

interface recipe extends cookbookEntry {
  requiredItems: requiredItem[];
}

interface ingredient extends cookbookEntry {
  cookTime: number;
}

interface RecipeSummary {
  name: string;
  cookTime: number;
  ingredients: requiredItem[];
}

// =============================================================================
// ==== HTTP Endpoint Stubs ====================================================
// =============================================================================
const app = express();
app.use(express.json());

// Store your recipes here!
const cookbook: { [name: string]: recipe | ingredient } = {};

// Task 1 helper (don't touch)
app.post("/parse", (req:Request, res:Response) => {
  const { input } = req.body;

  const parsed_string = parse_handwriting(input)
  if (parsed_string == null) {
    res.status(400).send("this string is cooked");
    return;
  } 
  res.json({ msg: parsed_string });
  return;
  
});

// [TASK 1] ====================================================================
// Takes in a recipeName and returns it in a form that 
const parse_handwriting = (recipeName: string): string | null => {
  if (recipeName.length <= 0) {
    return null;
  }

  let newString = recipeName.replace(/[-_]/g, ' ');
  newString = newString.replace(/[^a-zA-Z\s]/g, ''); 

  newString = newString
    .split(' ') 
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) 
    .join(' ');
  newString = newString.replace(/\s+/g, ' ').trim();

  // TODO: implement me
  return newString
}

// [TASK 2] ====================================================================
// Endpoint that adds a CookbookEntry to your magical cookbook
app.post("/entry", (req: Request, res: Response) => {
  const { name, type, requiredItems, cookTime } = req.body;

  // Validate type
  if (type !== "recipe" && type !== "ingredient") {
    return res.status(400).send("Invalid Type");
  }

  if (name == null) {
    return res.status(400).send("Invalid Name");
  }

  if (cookbook[name]) {
    return res.status(400).send("Name must be unique!");
  }

  // Handle recipes
  if (type === "recipe") {
    if (requiredItems.length <= 0) {
      return res.status(400).send("Invalid Required Items");
    }

    const itemNames = new Set();
    for (const item of requiredItems) {
      if (!item.name || item.quantity <= 0) {
        return res.status(400).send("Invalid Required Item Entry");
      }

      if (itemNames.has(item.name)) {
        return res.status(400).send("Duplicate required item names are not allowed");
      }

      itemNames.add(item.name);
    }

    const newRecipe: recipe = { name, type, requiredItems };
    cookbook[name] = newRecipe;
    return res.status(200).json({});
  } 

  else if (type === "ingredient") {
    if (cookTime == null || cookTime <= 0) {
      return res.status(400).send("Invalid Cook Time");
    }

    const newIngredient: ingredient = { name, type, cookTime };
    cookbook[name] = newIngredient; 
    return res.status(200).json({});
  }
});

// [TASK 3] ====================================================================
// Endpoint that returns a summary of a recipe that corresponds to a query name
function isIngredient(item: recipe | ingredient): item is ingredient {
  return (item as ingredient).cookTime !== undefined;
}

const getIngredients = (item_name: string): { ingredients: requiredItem[], cookTime: number } | null => {
  const item = cookbook[item_name];

  if (!item) {
    return null; 
  }

  if (isIngredient(item)) {
    return {
      ingredients: [{ name: item.name, quantity: 1 }],
      cookTime: item.cookTime
    };
  }

  if (item.type === "recipe") {
    let totalCookTime = 0;
    let ingredients: requiredItem[] = [];

    for (const requiredItem of item.requiredItems) {
      const baseIngredients = getIngredients(requiredItem.name);
      if (!baseIngredients) {
        return null;
      } else if (baseIngredients != null) { // Ensure baseIngredients exists
        totalCookTime += baseIngredients.cookTime * requiredItem.quantity;

        for (const ing of baseIngredients.ingredients) {
          const existing = ingredients.find(i => i.name === ing.name);
          if (existing) {
            existing.quantity += ing.quantity * requiredItem.quantity;
          } else {
            ingredients.push({ name: ing.name, quantity: ing.quantity * requiredItem.quantity });
          }
        }
      }
    }

    return {
      ingredients,
      cookTime: totalCookTime
    };
  }

  return null; // Default return
};


app.get("/summary", (req: Request, res: Response) => {
  const recipeName = req.query.name as string;

  // Check if recipeName is provided
  if (!recipeName) {
    return res.status(400).send("Missing recipe name in request.");
  }

  // Check if the recipe exists in the cookbook
  const recipe = cookbook[recipeName];

  // Return 400 if the recipe is missing or if it's not a valid recipe
  if (!recipe || recipe.type !== "recipe") {
    return res.status(400).send("Recipe not found or is not a valid recipe.");
  }

  // Get the ingredients and cook time using recursion
  const summary = getIngredients(recipeName);

  if (!summary) {
    return res.status(400).send("Invalid recipe or missing ingredients.");
  }

  // Construct the response object
  const recipeSummary: RecipeSummary = {
    name: recipeName,
    cookTime: summary.cookTime,
    ingredients: summary.ingredients
  };

  res.status(200).json(recipeSummary);
});


// =============================================================================
// ==== DO NOT TOUCH ===========================================================
// =============================================================================
const port = 8080;
app.listen(port, () => {
  console.log(`Running on: http://127.0.0.1:8080`);
});
