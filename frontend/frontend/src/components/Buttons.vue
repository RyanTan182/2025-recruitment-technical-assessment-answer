<script setup>
</script>

<template>
<div class="freeRoom-page">
    <div class="buttons">
        <div class="filter-button">
            <button>
                <img src="../assets/filter.svg" alt="Filter Icon"/>
                <h3> Filters</h3>
            </button>
            
        </div>
    <div class="search-bar">
        <form action="">
            <div class="search-input-container">
                <img src="../assets/search.svg" alt="Search Icon" class="search-icon"/>
                <input type="text" placeholder="Search for a building..."/>
      </div>
        </form>
    </div>
    <div class="sort-button">
        <button>
            <img src="../assets/sort.svg" alt="Filter Icon"/>
            <h3> Sort</h3>
        </button>
    </div>
    </div>  
</div>

</template> 

<style scoped>
.freeRoom-page {
    padding-top: 65px;
    padding-left: 2rem;
    padding-right: 2rem;
    
    width: auto;
}
.buttons {
    margin-top: 10px;
    display: flex;
    align-items: center;  
    justify-content: space-between;
    flex-wrap: wrap; /* Ensures items wrap in smaller screens */
    gap: 10px; /* Adds spacing */
    width: 100%;
}
.filter-button {
    height: 40px;
    width: 0px;
}
.filter-button button {
    display: flex;
    align-items: center;  /* Aligns text and icon */
    justify-content: center;
    background: none;
    border: 2px solid orange;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    gap: 5px;
    height: 40px;
    width: 140px;
    transition: 0.2s;
    color: orange;
}
.filter-button button img {
    width: 20px;  /* Ensures icon size */
    height: 20px;
}

.filter-button button h3 {
    margin: 0;  /* Removes default spacing */
    font-size: 16px;
    font-weight: bold;
}

.search-bar {
  width: 50%;
  
  max-width: 800px; /* Adjust width as needed */
  margin-left: 100px;
}

.search-input-container {
  display: flex;
  align-items: center;
  border: 1px solid #ccc; /* Light gray border */
  border-radius: 8px;
  padding: 10px;
  width: 100%;
  background: white;
}

.search-input-container input {
  flex: 1;
  border: none;
  outline: none;
  color: black;
  font-size: 16px;
  padding-left: 10px;
  background: transparent;
}

.search-icon {
  width: 18px;
  height: 18px;
  opacity: 0.6; /* Light gray effect */
}

.sort-button button {
    display: flex;
    align-items: center;  /* Aligns text and icon */
    justify-content: center;
    background: none;
    border: 2px solid orange;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    gap: 5px;
    height: 40px;
    width: 140px;
    transition: 0.2s;
    color: orange;
}
.sort-button button img {
    width: 20px;  /* Ensures icon size */
    height: 20px;
}

.sort-button button h3 {
    margin: 0;  /* Removes default spacing */
    font-size: 16px;
    font-weight: bold;
}

@media (min-width: 600px) {
  .buttons {
        flex-wrap: nowrap;
    }
}

@media screen and (max-width: 600px) {
  .buttons {
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Align buttons to the left */
    width: 95%;
    padding-top:-20px;
    margin-bottom: 10px;
    flex-wrap: wrap;
    overflow-x: inherit;
    }

    .search-bar {
        width: 100%;
        margin-bottom: 10px;
        margin-left: 0px;
    }

    .filter-button,
    .sort-button {
        width: 100%;
        position: absolute;
        top:120px;
    }
    .sort-button button {
        float:right;
        margin-right: 60px;
    }
}



</style>
