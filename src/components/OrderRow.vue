<template>
   <div class="my-2 text-sm p-2">
            <b>{{ nazwa }}</b> : {{ cena }}/zł
            <button class="float-right ml-4 w-16" @click="removeItem">Usuń</button>
   </div>
</template>

<script>
export default {
    props: ['nazwa','cena','id'],
    methods: {
        removeItem() {        
           this.$store.dispatch('actionRemove', this.id);                      
        }
    }
}
</script>

<style scoped>
button,
a {
    
	background-color:#c43a03;
	border-radius:6px;	
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:10px;
	font-weight:bold;
	text-decoration:none;	
    
   
}
button:hover, 
a:hover {
	background:linear-gradient(to bottom, #77a809 5%, #89c403 100%);
	background-color:#77a809;
}
button:active,
a:active {
	position:relative;
	top:3px;
}
</style>