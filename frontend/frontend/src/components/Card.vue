<script setup>
import { computed } from 'vue'


const props = defineProps({
  name: String,
  roomsAvailable: Number,
  imageSrc: String
});

const availabilityColor = computed(() => {
  if (props.roomsAvailable == 0) {
    return 'red';
  } else if (props.roomsAvailable > 0 && props.roomsAvailable <= 5) {
    return 'orange';
  } else {
    return 'green';
  }
});
</script>

<template>
  <div class="card">
    <div class="card-content">
      <div class="room_availability_div">
        <div class="colour_availability" :style="{ backgroundColor: availabilityColor }"></div>
          <p class="room_availability">{{ roomsAvailable }} Rooms Available</p>
          <p class="room_availability_mobile">{{ roomsAvailable }}/{{ roomsAvailable }}</p>
      </div>
      <div class="room_name_div">
        <h3 class="room_name">{{ name }}</h3>
      </div>
    </div>
    <img :src="imageSrc" :alt="name" class="card-image" />
  </div>
</template>

<style scoped>
.card {
  position: relative;
  flex: 1 1 0%;
  background-color: rgb(239, 108, 0);
  height: 385px;
  border-radius: 10px;
}

.card:hover {
  transform: scale(1.05);
  opacity: 0.7;
}

.card-image {
  position: absolute;
  height: 100%;
  width: 100%;
  inset: 0px;
  object-fit: cover;
  color: transparent;
  border-radius: 10px;
  transition: 0.1s ease-in-out;
}

.card-content {
  position: relative; 
  margin-top: 10px;
  z-index: 1;
}

.room_availability {
  margin: 0px;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  font-size: 12px;
  font-weight: bold;
  color: black;

}

.room_availability_mobile {
  opacity: 0;
  width: 0px;
  height:0px;
  margin: 0px;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  font-size: 12px;
  font-weight: bold;
  color: black;
}
.room_name {
  margin: 0px;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  font-size: 16px;
  font-weight: 500;
}

.room_name_div {
  display: flex;
  border-radius: 10px;
  position: absolute;
  bottom: -400px;
  left: 0px;
  right: 0px;
  background-color: rgb(239, 108, 0);
  color: white;
  padding: 15px 20px;
  margin: 10px;
  pointer-events: none;
}

.room_availability_div {
  display: flex;
  -moz-box-pack: center;
  justify-content: center;
  -moz-box-align: center;
  align-items: center;
  border-radius: 15px;
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 10px 15px;
  margin: 10px;
  pointer-events: none;
  background-color: rgb(255, 255, 255);
}

.colour_availability {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
}

@media screen and (max-width: 600px) {
    .card {
      position: relative;
  -moz-box-align: center;
  align-items: center;
  -moz-box-pack: center;
  justify-content: center;
  align-items: center;
  flex: 1 1 0%;
  height: 100px;
  border-radius: 10px;
  background-color: black;
  transition: 0.1s ease-in-out;
  padding: 10px;
  opacity: 0.7;
    }
  .room_name_div {
    font-weight: 700;
    flex-wrap: wrap;
    background: rgba(0, 0, 0, 0.5);
    bottom: -73px;
    width:100px;
    justify-items: center;
    transform: translate(0%, 20%);
    background: transparent;
  } 
  .room_name {
    font-weight: 900;
    color: white; 
    font-size: 16px;
    text-align: center;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7); 
  }
  .room_availability {
    width: 20px;
    height: 0px;
    opacity: 0;
  }
  .room_availability_mobile {
  opacity: 1;
  width: 0px;
  position: inherit;
  height:auto;
  margin: 0px;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  font-size: 12px;
  font-weight: bold;
  color: black;
}
}

</style>
