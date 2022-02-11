<template>
  <the-header></the-header>

 <router-view></router-view>
</template>

  

<script>
import TheHeader from './components/TheHeader.vue';
export default {
  components: {
    TheHeader,
  } 
}

</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap');
html, body{
  font-family: 'Lato', sans-serif;
  background-image: url('./images/wood2.jpg');
  background-size: 900px 1200px; 
 
}

</style>

