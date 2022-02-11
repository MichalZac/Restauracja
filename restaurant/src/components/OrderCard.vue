<template>
    <div class="bg-white h-3/4 rounded-xl w-5/6 p-2 mt-6 relative">
        
        <!-- EMPTY CART -->
        <div v-if="pickedItems.length == 0">
            <div class="text-sm font-bold text-center text-gray-400 h-16 flex items-center justify-center">
            Moje zamówienie
            </div> 
            <div class="flex h-96 items-center justify-center">                                        
                <img class="h-24 w-24 opacity-30" src="../images/cart5.png">                                          
            </div>
            <!-- bug fix -->
            <div class="opacity-0">1</div>
            <!-- disable button -->
            <div class="text-sm font-bold text-center text-white flex items-center justify-center">
                <div class="bottom absolute w-full h-16 rounded-b-lg bottom-0">
                <div class="mt-5">Zamawiam {{total}} zł</div>
                </div>
            </div> 
        </div>

        <!-- FULL CART -->
        <div v-else>
            <div class="text-sm font-bold text-center text-gray-600 h-16 flex items-center justify-center">
             Moje zamówienie
            </div> 
            <div class="flex-row">
                <transition-group tag="ul" name="lista">
                <order-row v-for="pizza in pickedItems"
                                :key="pizza.id"
                                :nazwa="pizza.nazwa"
                                :cena="pizza.cena"
                                :id="pizza.id">             
                </order-row>
                </transition-group> 
            </div>
            <!-- bug fix -->
            <div class="opacity-0">1</div>
            <!-- button -->
            <div class="text-base font-lato font-bold text-center text-white flex items-center justify-center">
                    <button @click="makeOrder" class="bottom2 absolute w-full font-bold h-16 rounded-b-lg bottom-0">Zamawiam {{total}} zł</button>
            </div> 
        </div>
    </div>
</template>

<script>
import OrderRow from './OrderRow.vue'
export default {        
    components: { OrderRow },
    methods: {
        makeOrder() {
            this.$emit('ordering');
        }
    },   
    computed: {
        pickedItems() {
            return this.$store.getters.orderedGetter;           
        },
        total() {
            return this.$store.getters.sumGetter;
        }        
    }
}
</script>

<style scoped>
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
        
        background:linear-gradient(to bottom, #d86a6f 60%, #cd212a 100%);
}
.bottom2 {
   background:linear-gradient(to bottom, #77a809 50%, #6992086b 100%);      
}

</style>
