<template>
<div class="flex h-screen">
  <div class="flex-1 flex flex-col overflow-hidden">
    
    <header class="flex w-full">
      <div class="w-1/12"></div>
      <div class="flex -ml-10 sm:-ml-12 md:-ml-14 lg:ml-0 2xl:ml-0 gap-10 p-4 text-white font-lato font-bold">
          <bottom-header></bottom-header> 
       </div>
    </header>

               
    
    
      <div class="flex h-full justify-center"> 
      <!-- center -->
      <main id="test" class="flex h-full flex-col w-3/5 overflow-x-hidden overflow-y-auto mb-14">    
          <!-- Pizzas -->
          
          <section id = "pizze">
          <ul>
          <div class="grid rounded-xl sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-10 p-5">
            <single-pizza v-for="pizza in menu"
              :key="pizza.id"
              :nazwa="pizza.nazwa"
              :cena="pizza.cena"
              :skladniki="pizza.skladniki"
              :fota="pizza.fotka"
              :id="pizza.id">
            </single-pizza>            
          </div>
          </ul>
          </section>
          <!--burgers -->                                             
                <section id="burgery">
                    <ul>
                        <div class="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10 p-10">                                    
                        <single-pizza v-for="burger in menuBurgers"
                        :key="burger.id"
                        :nazwa="burger.nazwa"
                        :cena="burger.cena"
                        :skladniki="burger.skladniki"
                        :fota="burger.fotka"
                        :id="burger.id">
                        </single-pizza>
                        </div>                
                    </ul>                 
           </section>
           
          <!--salads -->                                             
                <section id="salatki">
                    <ul>
                        <div class="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10 p-10">                                    
                        <single-pizza v-for="burger in menuSalads"
                        :key="burger.id"
                        :nazwa="burger.nazwa"
                        :cena="burger.cena"
                        :skladniki="burger.skladniki"
                        :fota="burger.fotka"
                        :id="burger.id">
                        </single-pizza>
                        </div>                
                    </ul>                 
           </section>

           <!--drinks -->                                             
                <section id="napoje">
                    <ul>
                        <div class="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10 p-10 mb-20">                                    
                        <single-pizza v-for="burger in menuDrinks"
                        :key="burger.id"
                        :nazwa="burger.nazwa"
                        :cena="burger.cena"
                        :skladniki="burger.skladniki"
                        :fota="burger.fotka"
                        :id="burger.id">
                        </single-pizza>
                        </div>                
                    </ul>                 
           </section> 
 
                   
      </main>
      <!-- right sidebar-->
      <nav class="right flex w-1/2 sm:w-1/2 md:w-2/5 lg:w-1/4 h-full shadow-2xl">
        <div class="w-full flex mx-auto px-2 py-8">
          <div class="w-full h-full flex justify-center mx-auto text-gray-900 text-xl">
              <order-card @ordering="openModal"></order-card>
          </div>
        </div>
      </nav>
      </div>
  </div>
  <!-- modal -->
  <transition name = "pop">
      <base-modal :oModal="modalVisible" @close-event="closeModal"></base-modal>
  </transition>
</div>
</template>

<script>
import SinglePizza from './SinglePizza.vue';
import BottomHeader from './BottomHeader.vue';


export default { 
    components: { SinglePizza, BottomHeader },
    data() {
      return {
        modalVisible: false,
      }
    },   
    computed: {
        menu() {
           return this.$store.getters.menuGetter;            
        },
         menuBurgers() {
            return this.$store.getters.burgersGetter;
        },
         menuSalads() {
            return this.$store.getters.saladsGetter;
        },
         menuDrinks() {
            return this.$store.getters.drinksGetter;
        },
    },
    methods: {
      openModal() {
          this.modalVisible = true;
        },
        closeModal() {
          this.modalVisible = false;
        }
    }
        

}
</script>


<style scoped>
.left {
    height: 850px;
}
.right {
    height: 850px;
}

a:hover {   
    cursor: pointer;    
}
.pop-enter-from {
    opacity: 0;
}
.pop-enter-active {
    transition: all 1s ease-in;
}
.pop-enter-to {
    opacity: 1;
}
.pop-leave-from {
    opacity: 1;
}
.pop-leave-active {
    transition: all 1s ease-out;
}
.pop-leave-to {
    opacity: 0;
}

</style>