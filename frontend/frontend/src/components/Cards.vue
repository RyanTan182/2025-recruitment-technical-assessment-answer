<script setup>
import { ref, onMounted } from "vue";
import Card from "./Card.vue"; 

const buildings = ref([]);

onMounted(async () => {
  try {
    const response = await fetch("/data.json"); 
    const data = await response.json();
    console.log(buildings);
    buildings.value = data.map(building => ({
      name: building.name,
      roomsAvailable: building.rooms_available,
      imageSrc: building.building_picture || building.building_file 
    }));
  } catch (error) {
    console.error("Error loading data:", error);
  }
});
</script>

<template>
  <div class="cards-container">
    <Card 
      v-for="(building, index) in buildings" 
      :key="index" 
      :name="building.name" 
      :roomsAvailable="building.roomsAvailable" 
      :imageSrc="building.imageSrc" 
    />
  </div>
</template>

<style scoped>
.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  position: relative;
  padding: 2rem;
}
</style>
