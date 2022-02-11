<template>
 <div open v-if="oModal" class="modal-backdrop">
 <div class="modal border-4 border-gray-100 shadow-lg rounded-lg">
       
  <form  @submit.prevent="send" class="w-full max-w-lg">
  <div class="flex flex-wrap -mx-3 mb-6">

    <!-- IMIE -->
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="id-imie">
        Imię
      </label>
      <input class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
             id="id-imie" type="text" placeholder="Jarosław" v-model.trim="imie" @blur="checkName">
             <p class="text-red-700 ml-1 font-Lato font-bold text-sm" v-if="imieValidate === 'invalid'">*Wprowadź Imię</p>
    </div>

    <!-- TELEFON-->
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="id-telefon">
        Numer telefonu
      </label>
      <input class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
             id="id-telefon" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" placeholder="555-555-555" v-model="telefon"  @blur="checkPhone">
             <p class="text-red-700 ml-1 font-Lato font-bold text-sm mt-3" v-if="telefonValidate === 'invalid'">*Wprowadź poprawny numer</p>
    </div>
  </div>

  <div class="flex flex-wrap -mx-3 mb-2">

    <!-- ULICA -->
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="id-ulica">
        Ulica
      </label>
      <input class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
             id="id-ulica" type="text" placeholder="Nowy Ład" v-model.trim="ulica"  @blur="checkStreet">
            <p class="text-red-700 ml-1 font-Lato font-bold text-sm mt-3" v-if="ulicaValidate === 'invalid'">*Wprowadź nazwę ulicy</p>
    </div>

    <!-- MIASTO -->
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="id-miasto">
        Miasto
      </label>
      <div class="relative">
        <select class="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                id="id-miasto" v-model="miasto">
          <option value="Gdynia">Gdynia</option>
          <option value="Gdańsk">Gdańsk</option>
          <option value="Sopot">Sopot</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>

    <!-- MIESZKANIE -->
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="id-adres">
        Nr mieszkania
      </label>
      <input class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
             id="id-adres" type="text" placeholder="69/A" v-model="adres" @blur="checkAdres">
              <p class="text-red-700 ml-1 font-Lato font-bold text-sm mt-3" v-if="adresValidate === 'invalid'">*Wprowadź adres</p>
    </div>
  </div>

   <!-- RAZEM -->
  <div class="flex flex-wrap -mx-3 font-Lato text-sm font-bold p-3 justify-between"> 
     <div>Numer zamówienia:<span class="blink text-base"> #{{ numer }}</span></div>        
     <div>Do zapłaty : {{totalBill}} zł</div>
         
  </div>

  <!-- BUTTONS -->
  <div class="flex flex-wrap -mx-3 justify-between p-1">      
       
        <base-button v-if="errorImie === false && errorAdres === false && errorTelefon === false && errorUlica === false" name="button1" class="w-3/4">Zamów</base-button>       
        <base-button v-else name="button2" class="w-3/4" @click.prevent="popraw">Wypełnij wszystkie pola</base-button>       
        <base-button name="button3" @click.prevent="close">Wyjdź</base-button>     
  </div>
  
</form>
</div>
</div>
</template>

<script>
import BaseButton from './BaseButton.vue';
export default {
    data() {
      return {
        imie: '',
        telefon: null,
        ulica: '',
        numer: Math.floor(Math.random() * (100 - 0)) + 0,
        miasto: 'Gdańsk',
        adres: '',     
        // Sprawdz
        imieValidate: 'pending',
        telefonValidate: 'pending',
        ulicaValidate: 'pending',
        adresValidate: 'pending',
        errorImie: true,
        errorTelefon: true,
        errorAdres: true,
        errorUlica: true,
      }
    },
    components: { BaseButton },       
    props: ['oModal'],
    emits: ['close-event'],
    methods: {
      close() {                
        this.$emit('close-event');
        this.numer = Math.floor(Math.random() * (100 - 0)) + 0;
        return false;        
      },
      popraw(){
        return false;
      },    
      send() {         
            const order = {
                 id : this.numer,
                 name : this.imie,
                 phone : this.telefon,
                 street: this.ulica,
                 city: this.miasto,
                 home: this.adres,
                 timer: 30 
             }
             return this.$store.dispatch('actionCompletedOrder', order).then(     
             this.$router.push('/status')); 
      },
      checkName() {
        if(this.imie === '') {
          this.imieValidate = "invalid";
          this.errorImie = true;           
        }
        else {
          this.imieValidate = "valid";
          this.errorImie = false;     
        }
      },
      checkPhone() {
        if(this.telefon === null || this.telefon.length === 0) {
          this.telefonValidate = "invalid";
          this.errorTelefon = true;           
        }
        else {
          this.telefonValidate = "valid";
          this.errorTelefon = false;        
        }
      },
       checkStreet() {
        if(this.ulica === '') {
          this.ulicaValidate = "invalid";
          this.errorUlica = true;         
        }
        else {
          this.ulicaValidate = "valid";
          this.errorUlica = false;
         
        }
      },
       checkAdres() {
        if(this.adres === '') {
          this.adresValidate = "invalid";
          this.errorAdres = true;        
        }
        else {
          this.adresValidate = "valid";
          this.errorAdres = false;
    
        }
      },
    },
    computed: {
       totalBill() {  
             return this.$store.getters.sumGetter;
        }       
    }
}
</script>

<style>
  .modal-backdrop {
    position: absolute;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.45);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
   
    padding: 15px;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
   
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
    
  }

  .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease;
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


