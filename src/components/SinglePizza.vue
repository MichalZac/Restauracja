<template>
    
    <li>
        <div class="rounded w-full shadow-xl bg-white font-Lato transform transition duration-500 hover:scale-110 hover:border-2">
          
            <img class="h-44 w-full mx-auto rounded-lg" :src=fota>

                <div class="font-bold text-md mb-2 mt-3 flex justify-center items-center font-serif">
                  {{nazwa}}: {{cena}} zł
                </div>

            <div class="flex justify-center text-center items-center font-serif italic">
                <base-ingredients v-for="skladnik in skladniki"
                        :key="skladnik"
                        :rodzaj="skladnik"
                        :nazwa="skladnik">
                </base-ingredients>        
            </div>

            <div class="flex justify-center items-center p-2">
                <!-- Order limit-->
                <div v-if="limitOrder < 6">
                    <base-button @click="wybrano">Dodaj</base-button>
                </div>
                <div v-else>
                    <base-button>Too much!</base-button>
                </div>
            </div>  
        </div>
    </li>

</template>

<script>
import BaseButton from './BaseButton.vue'
import BaseIngredients from './BaseIngredients.vue'

export default {
  components: { BaseButton, BaseIngredients },
    props: ['nazwa','cena','skladniki','fota','id'],
    methods: {       
        wybrano() {           
             const chosenPizza = {
                 id : Math.floor(Math.random() *100),
                 nazwa : this.nazwa,
                 cena : this.cena 
             }
             return this.$store.dispatch('actionAddOrder', chosenPizza)            
                       
        }      
    },
    computed: {
         limitOrder() {
            return this.$store.getters.orderedLengthGetter;
        }
    }
}
</script>

