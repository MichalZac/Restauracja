<template>
 <div class="flex w-full h-screen">
     <!--LEFT -->
     <div class="w-1/8 md:w-1/4">
     </div>
         <div class="w-1/2 md:w-1/4 mr-5">
            <div class="grid place-items-center h-2/3">
                <div class="card w-full bg-white">
                   <div class="bottom flex w-full h-20 items-center">                   
                            <div class="mx-auto font-lato text-xl text-white font-bold">Wybierz skladniki:</div>
                    </div>
                    <div class="flex bg-white w-full h-3/5 items-center mt-3">                   
                            <div class="mx-auto opacity-90">
                                <div v-if="limit < 6">
                                            <ul>
                                            <own-ingredients v-for="skladnik in avaibleIngredients"
                                            :key="skladnik.id"
                                            :nazwa="skladnik.nazwa"
                                            :cena="skladnik.cena"
                                            :id="skladnik.id">
                                            </own-ingredients>
                                            </ul>
                                </div>
                                <div v-else>
                                    Osiągnięto limit składników
                                </div> 

                            </div>
                    </div>
                    <div class="flex bg-white w-full h-1/5 rounded-b-lg items-center mt-3">                   
                            <div class="mx-auto italic font-lato text- p-3">
                                *Każda pizza pieczona jest na cieńkim cieście.                         
                            </div>
                    </div>
                </div>
            </div>
         
         </div>
    

       <!--RACHUNEK -->
      <div class="w-1/2 md:w-1/4">
      <div class="grid place-items-center h-2/3">
             <div class="card2 w-full bg-white">
                <div class="bottom2 flex w-full h-20 items-center">                   
                            <div class="mx-auto font-lato text-xl text-white font-bold">Moja Pizza:</div>
                    </div>

                <div class="flex bg-white w-full h-3/5 items-center">
                     <div class="mx-auto">

                        <transition-group tag="ul" name="lista">
                            <single-ingredient v-for="skladnik in pickedIngredients"
                            :key="skladnik.id"
                            :nazwa="skladnik.nazwa"
                            :cena="skladnik.cena"
                            :id="skladnik.id">             
                            </single-ingredient>
                         </transition-group>

                    </div>                                      
                </div>

                <div class="flex bg-white w-full items-center">                   
                        <div class="mx-auto font-Lato text-sm mt-3">
                              <b>Razem: {{toPay}} zł </b>                      
                        </div>                       
                </div>

                 <div class="flex bg-white w-full rounded-b-lg items-center">                   
                        <div class="mx-auto font-Lato text-lg p-3">
                              <base-button @click="makeOrder">Zamawiam!</base-button>                       
                        </div>
                </div>
            </div>
      </div>
     </div>
     <div class="w-1/8 md:w-1/8">
     </div>
 </div>
    <!--
    <div class="card">
        <h3>Wybierz swoje składniki:</h3>
        <transition-group name="lista"> 
        <ul>
            <wlasna-skladniki v-for="skladnik in dostepne"
            :key="skladnik.id"
            :nazwa="skladnik.nazwa"
            :cena="skladnik.cena"
            :id="skladnik.id">
            </wlasna-skladniki>
        </ul>
        </transition-group>
    </div>
    

       
      -->
     
      
</template>

<script>

 import OwnIngredients from './OwnIngredients.vue';
 import SingleIngredient from './SingleIngredient.vue'
 export default {
  components: {OwnIngredients, SingleIngredient},
    data() {
        return {
            
           
        }
    },
    methods: {
        test() {
           this.$router.push('/'); 
        },
        makeOrder(){
            const OwnPizza = {
                 id : Math.floor(Math.random() *100),
                 nazwa : "Własna Pizza",
                 cena : this.toPay 
             }
             return this.$store.dispatch('actionAddOrder', OwnPizza).then(     
             this.$router.push('/')); 
        },
       
    },
    computed: {
        avaibleIngredients() {
            return this.$store.getters.ingredientsGetter;
        },
         pickedIngredients() {
            return this.$store.getters.pickedIngredientsGetter;           
        },
        toPay() {  
             return this.$store.getters.sumIngredientsGetter;
        },
        limit() {
            return this.$store.getters.chosenIngredientsGetterLength;
        }
    }
}
</script>

<style scoped>
.lista-enter-form {
    opacity: 0;
    transform: translateX(-30px);
}
.lista-enter-active {
    transition: all 1s ease-out;
}
.lista.enter-to {
    opacity: 1;
    transform: translateX(0);
}
.card {  
    border-radius: 15px;
    box-shadow: 0 2px 8px black;        
    text-align: center;    
    height:550px;   
    }
.card2 {  
    border-radius: 15px;
    box-shadow: 0 2px 8px black;    
    height:550px;  
    }

.lista-enter-from {
    transform: translateX(-200px);
    opacity: 0;

}
.lista-enter-active {
    transition: all 1s ease-out;
}
.lista-enter-to {
      transform: translateX(0px);
      opacity: 100;

}
.lista-leave-from {
    transform: translateX(0px);
    opacity: 100;

}
.lista-leave-active {
    transition: all 1s ease-out;
}
.lista-leave-to {
      transform: translateX(-200px);
      opacity: 0;

}
.bottom {
        background:linear-gradient(to bottom, #77a809 95%, #ffffff 100%);
}
.bottom2 {
         background:linear-gradient(to bottom, #d86a6f 95%, #ffffff 100%);
}


</style>