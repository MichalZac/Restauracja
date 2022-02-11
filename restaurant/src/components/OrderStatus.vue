<template>
<div class="test flex w-full h-screen">
     <!--LEFT -->
     <div class="w-1/8 md:w-1/4">
     </div>
         <div class="w-1/2 md:w-1/4 mt-16">
            <div class="grid place-items-center">
                <div class="card w-full bg-white">
                    <div class="bottom flex w-full h-20 items-center">                   
                            <div class="mx-auto font-lato text-xl text-white font-bold">Zamówienie:</div>
                    </div>

                    <div>
                            <ul>                                               
                            <single-form v-for="order in menu"
                            :key="order.id"                                                          
                            :id="order.id"
                            :name="order.name"
                            :phone="order.phone"
                            :street="order.street"
                            :city="order.city"
                            :home="order.home"
                            :time="order.timer">
                            </single-form>
                            </ul> 
                    </div>
                    
                </div>
            </div>
         </div> 

       <!--RIGHT -->
      <div class="w-1/2 md:w-1/4">    
            <div class="grid place-items-center mt-16 ml-2 bg-white">
                <div class="card w-full">
                    <div class="bottom2 flex w-full h-20 items-center">                   
                            <div class="mx-auto font-lato text-xl text-white font-bold">Status:</div>
                    </div>
                     <div class="bg-white">
                         <div class="font-mono text-xl font-bold">
                            <div>
                             <ul>
                                <form-status v-for="order in menu"
                                :key="order.id"
                                :time="order.timer"
                                :id="order.id"                                >                                   
                                </form-status>
                             </ul>
                            </div>                                                
                        </div>                                      
                    </div>
                </div>
            </div>         
      </div>
    
     <div class="w-1/8 md:w-1/4">
     </div>
 </div>
</template>
<script>
import SingleForm from './SingleForm.vue';
import formStatus from './formStatus.vue';

export default { 
components: { SingleForm, formStatus },
computed: {
menu() {
     return this.$store.getters.completeformGetter;            
},
}
}
</script>




<style scoped>
.card {   
    box-shadow: 0 2px 8px black;
    padding: 0px;    
    text-align: center;   
    }
.bottom {
        background:linear-gradient(to bottom, #77a809 95%, #ffffff 100%);
       
}
.bottom2 {
         background:linear-gradient(to bottom, #d86a6f 95%, #ffffff 100%);
}
</style>