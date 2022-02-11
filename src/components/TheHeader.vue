<template>
<!-- navbar -->
<nav class="relative flex">
    <div class="w-1/12 h-28"></div>

    <div class="flex -ml-10 sm:-ml-10 md:-ml-12 lg:ml-6 2xl:ml-2 gap-10 p-2 text-white font-lato"> 
        <div class="flex justify-between gap-5">
            <div class="flex space-x-10">
                <!-- logo -->    
                <div class="flex items-center py-2">                    
                    <span class="font-lato text-white text-xl font-bold ml-2">
                        <router-link to="/pizze">Nasza Pizza</router-link>
                    </span>
                    <img src="../images/medal.png" class="w-12 h-12 rounded-full ml-2">
                </div>
                <!-- Filter -->
                <div class="flex items-center py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                     <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                    </svg>                    
                    <span class="font-lato text-lg font-medium ml-2">
                        <router-link to="/status">Status zamówień ({{ordersNumber}})</router-link>
                    </span>  
                </div>

                 <!-- Own Pizza -->
                <div class="flex items-center py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clip-rule="evenodd" />
                    </svg>
                    <span class="bottom font-lato text-lg font-medium ml-2">
                        <router-link to="/createpizza">Własna Pizza</router-link>
                    </span>  
                </div>
            
              
                
                                
            </div>
        </div>
    </div>
    <div class="absolute hidden md:flex items-center inset-y-0 right-0 w-36 p-2">        
        <div class="text-center text-base text-white font-lato ml-2">     
            {{teraz}}
        </div>
    </div>   
</nav>
 
</template>

<script>
const moment= require('moment')
export default {
    data() {
       return{
            teraz: ""
       }
    },
    methods: {
        getNow() {
            const czas = moment().format('h:mm:ss a');
            this.teraz = czas;
        }
    },
    computed: {
        ordersNumber() {           
            return this.$store.getters.ordersNumberGetter;
        } 
    },    
    created() {                   
            setInterval(this.getNow, 1000);
        }
    }
</script>

<style scoped>
nav {
    background:linear-gradient(to bottom, #2e2f2cb9 90%, #6992086b 100%);
}

</style>