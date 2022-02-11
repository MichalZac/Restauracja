<template>    
    <li>
      <div class="h-24 relative">
        <span class="absolute inset-0 flex justify-center items-center border-b-4 border-gray-600 p-2">
             <div v-if="time>=20">
                 <div>Oczekiwanie na płatność</div>
                 <div class="text-sm font-medium">Pozostało: {{time}} minut </div>
             </div>
             <div v-if="time<20 && time>=1">
                 <div>W przygotowaniu</div>
                  <div class="text-sm font-medium">Pozostało: {{time}} minut </div>
             </div>
             <div v-if="time==0">                                  
                 <span class="blink">Wysłano do klienta               
                 <div class="text-sm font-medium">Życzymy smacznego! </div></span> 
             </div>
        </span>  
      </div> 
    </li>

</template>

<script>
 export default {
    props: ['time','id'],
    data(){
        return{
            timerCount: this.time
        }
    },
       
    watch: {
            time: {
                handler(value) {

                    if (value > 0) {
                        setTimeout(() => {
                            this.$store.dispatch('actionReduceTimer', this.id);
                        }, 1000);
                    }
                },
                immediate: true // This ensures the watcher is triggered upon creation
            }
        }
    }
</script>

<style scoped>
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