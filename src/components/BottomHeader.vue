<template>
   <a v-scroll-to="{ element: '#pizze', offset: -10, duration: 1000 }">
   <div class="transform transition duration-500 hover:scale-110 hover:border-2">  
      <img src="../images/salami.jpg" class="w-20 h-14 rounded-t-lg">     
      <div class="bottom text-center">Pizze</div>
   </div>
   </a>

    <a v-scroll-to="{ element: '#burgery', offset: -10, duration: 1000 }">
    <div class="transform transition duration-500 hover:scale-110 hover:border-2">
      <img src="../images/burger.jpg" class="w-20 h-14 rounded-t-lg">
      <div class="bottom text-center">Burgery</div>
   </div>
   </a>

    <a v-scroll-to="{ element: '#salatki', offset: -10, duration: 1000 }">     
    <div class="transform transition duration-500 hover:scale-110 hover:border-2">
      <img src="../images/cezar.jpg" class="w-20 h-14 rounded-t-lg">
      <div class="bottom text-center">Sałatki</div>
   </div>
   </a>

    <a v-scroll-to="{ element: '#napoje', offset: -10, duration: 1000 }">
    <div class="transform transition duration-500 hover:scale-110 hover:border-2">
      <img src="../images/herbata.jpg" class="w-20 h-14 rounded-t-lg">
      <div class="bottom text-center">Napoje</div>
   </div>
   </a>
 
</template>

<style scoped>
a {
   cursor: pointer;
}
.bottom {
    background:linear-gradient(to bottom, #d86a6f 60%, #cd212a 100%);
     border-radius:  0px 0px 5px 5px;
    
}
</style>