<template> 
        <div @click="addIngredient()">
            <button class="salami">{{nazwa}}</button>
        </div>
</template>


<script>
export default { 
    props: ['nazwa','cena','id'],
    data() {
        return {
                   
        }
    },
    methods: {
        addIngredient() {                    
                                                      
             const pickedIngredient = {
                 id :  Math.floor(Math.random() *100),
                 nazwa : this.nazwa,
                 cena : this.cena, 
             }             
             return this.$store.dispatch('actionAddIngredient', pickedIngredient)            
        },
      
         
    }
}
</script>

<style scoped>
li {
    list-style: none;
}
.salami {   

   border-radius: 20px;
   color: #FFFFFF;
   font-family: Tahoma;
   font-size: 14px;
   font-weight: 100;
   padding: 5px;
   background-color: #F6463D; 
   border: Solid rgb(23, 134, 28) 5px;
   text-decoration: none;
   display: inline-block;
   cursor: pointer;
   text-align: center;
   width:90px;
   margin-top:5px;
   margin-bottom:5px;
   
}


@keyframes przesun-prawo {
    0% {
        transform: translateX(0x) scale(1);
    }
    50% {
        transform: translateX(250px) scale(2);
        opacity: 0%;
    }
    100% {
        transform: translateX(0x) scale(1);
        opacity: 0%;
    } 
  
}


</style>