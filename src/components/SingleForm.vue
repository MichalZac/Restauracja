<template>    
    <li>
     <div class="w-full font-lato font-bold text-xl border-b-4 border-gray-600 p-2 h-24 relative">
        <div class="absolute inset-0 flex justify-center items-center">           
              <div v-if="time>0"><h4>#{{id}}</h4></div>           
              <div v-else><h4 class="blink">#{{id}}</h4></div>           
        </div>
       <!--
       <p>{{name}}</p>
       <p>{{phone}}</p>
       <p>{{street}}</p>
       <p>{{city}}</p>
       <p>{{home}}</p>          
       <p>{{timer}}</p>
       -->
     </div>   
    </li>

</template>

<script>
export default {  
    props: ['id','name','phone','street','city','home','time'],
    
}   
</script>

<style scoped>
.card {  
    border-radius: 15px;
    box-shadow: 0 2px 8px black;
    height:200px;   
    }
.blink {
  animation: blink-animation 2s steps(5, start) infinite;
  -webkit-animation: blink-animation 2s steps(5, start) infinite;
}
@keyframes blink-animation {
  to {
    visibility: hidden;
  }
}
@-webkit-keyframes blink-animation {
  to {
    visibility: hidden;
  }
}

</style>
