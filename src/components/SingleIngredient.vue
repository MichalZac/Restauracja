<template>
    <div @click="removeIngredient">
            <button class="salami">{{nazwa}}</button>
    </div>
</template>

<script>
export default {
    props: ['nazwa','cena','id'],
    methods: {
        removeIngredient() {               
           this.$store.dispatch('actionRemoveIngredient', this.id);
        }
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



</style>