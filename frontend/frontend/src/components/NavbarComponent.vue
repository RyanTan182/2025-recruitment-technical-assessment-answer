<script setup>
import { ref } from 'vue';

const onClickOpen = ref(true);

const toggleLogo = () => {
    onClickOpen.value = !onClickOpen.value;
};
</script>

<template>
<div class="navbar">
    <div class="logo" @click="toggleLogo">
        <img v-if="onClickOpen" src="../assets/freeRoomsLogo.png" alt="freeRooms_Logo_Open">
        <img v-else src="../assets/freeroomsDoorClosed.png" alt="freeRooms_Logo_Closed">
        <div id="text-logo">
            FreeRooms
        </div>
    </div>
    <div class="buttons">
        <button id="search_button">
            <img src="../assets/search.svg" alt="Search icon">
        </button>
        <button id="grid_button">
            <img src="../assets/grid.svg" alt="Grid icon">
        </button>
        <button id="map_button">
            <img src="../assets/map.svg" alt="Map icon">
        </button>
        <button id="dark_mode_button">
            <img src="../assets/dark_mode.svg" alt="Dark Mode icon">
        </button>
    </div>
</div>  
</template>

<style scoped>
.navbar {
    top:0;
    width: 100%;
    display:flex;
    position:fixed;
    color: darkorange;
    background-color: white;
    padding: 4px 16px ;
    padding-right: 16px;
    align-items: center;
    z-index: 100; 
}
.logo {
    display: grid;
    width: 20px;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    
}
.logo img {
    height: 50px;
    width: 50px;
    color: orange;
}

#text-logo {
    font-size:20px;
    font-weight: bold;
}
.buttons {
    position: inherit;
  right: 0;
  margin-left: auto; 
    display: flex;
    gap: 10px; 
    padding-right: 16px; 
}

.buttons button {
    background: none;
    border: 2px solid orange;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.2s;
}

.buttons button:hover {
    background: orange;
}

.buttons #grid_button {
    background: orange;
}

@media screen and (max-width: 600px) {
    #text-logo {
        opacity: 0;
    }
}
</style>
