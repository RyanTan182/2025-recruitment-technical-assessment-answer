<script setup>
defineProps({
  name: String,
  roomsAvailable: Number,
  imageSrc: String
});
</script>

<template>
  <div class="card">
    <div class="card-content">
      <div class="room_availability_div">
        <div class="color_availability"></div>
        <p class="room_availability">{{ roomsAvailable }} Rooms Available</p>
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
  z-index: 2; 
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

.color_availability {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgb(255, 152, 0);
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
    bottom: -73px;
    width:100px;
    justify-items: center;
    background: transparent;
  } 
  .room_name {
    font-weight:900;
  }
}

</style>
