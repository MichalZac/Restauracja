<template>
<button v-if="!link" :class="mode">
	<slot></slot>
</button>
<router-link v-else :to="to" :class="mode">
	<slot></slot>
</router-link>
</template>

<script>
export default {
	props: {
		link: { // mowi nam czy renderowac button czy link
			type: Boolean, 
			required: false,
			default: false // domyslnie bedzie button nie link
		},
		to: {
			type: String,
			required: false,
			default: '/'
		},
		mode: {
			type: String,
			required: false,
			default: null
		} 
	}
}
</script>

<style scoped>
button,
a {
	box-shadow:inset 0px 1px 0px 0px #a4e271;
	background:linear-gradient(to bottom, #89c403 5%, #77a809 100%);
	background-color:#89c403;
	border-radius:6px;
	border:1px solid #74b807;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:10px;
	font-weight:bold;
	padding:12px 45px;
	text-decoration:none;
	text-shadow:0px 1px 0px #528009;
    margin-top:5px;	
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
.klasa1 {
	background-color: blue;
	
}
.klasa2 {	
	font-size:12px;
}

       
</style>