import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import BaseButton from './components/BaseButton.vue';
import BaseIngredients from './components/BaseIngredients';
import OrderCard from './components/OrderCard';
import BaseModal from './components/BaseModal.vue';


const store = createStore({
    state() {
        return {
            licznik: 60,            
            ordered: [],
            choosenIngredients: [],
            completeforms: [
                {
                    id: 1,
                    name: "Janusz",
                    phone: "5553213221",                 
                    street: "Warszawska",
                    city: "Gdynia",
                    home: "A10",
                    timer: 30,                    
                },
                {
                    id: 21,
                    name: "Zenek",
                    phone: "555-333-222",                 
                    street: "Grunwaldzka",
                    city: "Gdańsk",
                    home: "69C",
                    timer: 40,
                }
            ],
            pizze: [
                {
                    id: "p1",
                    nazwa: "Salamiiiii",
                    cena: 20,
                    skladniki: ['ser','salami', 'sos'],
                    fotka: require("./images/salami.jpg") 
                    
                },
                {
                    id: "p2",
                    nazwa: "Hawajska",
                    cena: 25,
                    skladniki: ['ser','ananas', 'sos',],
                    fotka: require("./images/pizza2.jpg") 
                },
                {
                    id: "p3",
                    nazwa: "Wiejska",
                    cena: 26,
                    skladniki: ['ser','kielbasa', 'sos', 'pieczarki'],
                    fotka: require("./images/pizza3.jpg") 
                },
                {
                    id: "p4",
                    nazwa: "Szef",
                    cena: 29,
                    skladniki: ['ser','kielbasa', 'sos', 'pieczarki','salami'],
                    fotka: require("./images/pizza2.jpg") 
                },
                {
                    id: "p5",
                    nazwa: "Szef2",
                    cena: 29,
                    skladniki: ['ser','kielbasa', 'sos', 'pieczarki','salami'],
                    fotka: require("./images/pizza2.jpg") 
                },
                {
                    id: "p6",
                    nazwa: "Szef3",
                    cena: 29,
                    skladniki: ['ser','kielbasa', 'sos', 'pieczarki','salami'],
                    fotka: require("./images/pizza2.jpg") 
                },
                
            ],
            burgers: [
                {
                    id: "p7",
                    nazwa: "Classic",
                    cena: 29,
                    skladniki: ['ser','kielbasa', 'sos', 'pieczarki','salami'],
                    fotka: require("./images/burger.jpg"),               
                },
                {
                    id: "p8",
                    nazwa: "Double-Cheese",
                    cena: 29,
                    skladniki: ['ser','ser', 'sos','salami'],
                    fotka: require("./images/burger2.jpg") 
                },
                {
                    id: "p9",
                    nazwa: "Burger-Drwala",
                    cena: 29,
                    skladniki: ['ser','ser', 'sos','salami'],
                    fotka: require("./images/burger3.jpg") 
                },
                {
                    id: "p10",
                    nazwa: "Królewski",
                    cena: 49,
                    skladniki: ['ser','kielbasa', 'sos', 'pieczarki','salami'],
                    fotka: require("./images/burger4.jpg") 
                },
            ],
            salads: [
                {
                    id: "p11",
                    nazwa: "Gyros",
                    cena: 29,
                    skladniki: ['ser','kielbasa', 'sos', 'pieczarki','salami'],
                    fotka: require("./images/gyros.jpg"),               
                },
                {
                    id: "p12",
                    nazwa: "Kurczak",
                    cena: 29,
                    skladniki: ['ser','ser', 'sos','salami'],
                    fotka: require("./images/chicken.jpg") 
                },
                {
                    id: "p13",
                    nazwa: "Tuńczyk",
                    cena: 29,
                    skladniki: ['ser','ser', 'sos','salami'],
                    fotka: require("./images/tuna.jpg") 
                },
                {
                    id: "p14",
                    nazwa: "Cezar",
                    cena: 49,
                    skladniki: ['ser','kielbasa', 'sos', 'pieczarki','salami'],
                    fotka: require("./images/cezar.jpg") 
                },
            ],
            drinks: [
                {
                    id: "p15",
                    nazwa: "Kawa",
                    cena: 10,
                    skladniki: ['Do wyboru: Biała, Czarna, Cappuccino'],
                    fotka: require("./images/kawa.jpg"),               
                },
                {
                    id: "p16",
                    nazwa: "Soki",
                    cena: 6,
                    skladniki: ['Świeżo wyciskane z najlepszych owoców'],
                    fotka: require("./images/sok.jpg") 
                },
                {
                    id: "p17",
                    nazwa: "Herbata",
                    cena: 5,
                    skladniki: ['Z wierzchołka krzewów herbacianych'],
                    fotka: require("./images/herbata.jpg") 
                },
                {
                    id: "p18",
                    nazwa: "Piwo",
                    cena: 12,
                    skladniki: ['Do wyboru: Lager, Przeniczne'],
                    fotka: require("./images/piwo.jpg") 
                },
            ],
            ingredients: [
                {
                    id: 1,
                    nazwa: "salami",
                    cena: 2
                },
                {
                    id: 2,
                    nazwa: "ser",
                    cena: 3
                },
                {
                    id: 3,
                    nazwa: "sos",
                    cena: 1
                },
                {
                    id: 4,
                    nazwa: "pieczarki",
                    cena: 3
                },
                {
                    id: 5,
                    nazwa: "kielbasa",
                    cena: 5
                },
                {
                    id: 6,
                    nazwa: "ananas",
                    cena: 6
                },
            ],                          

        };
    },    
    getters: {
        menuGetter(state) {
            return state.pizze;
        },
        orderedGetter(state) {
            return state.ordered
        },
        ordersNumberGetter(state) {
            return state.completeforms.length
        },
        orderedLengthGetter(state) {
            return state.ordered.length;
        },
        sumGetter(state) {
            return state.ordered.reduce((acc, item) => acc + item.cena, 0);          
        },
        completeformGetter(state) {
            return state.completeforms
        },
        burgersGetter(state) {
            return state.burgers;
        },
        saladsGetter(state) {
            return state.salads;
        },
        drinksGetter(state) {
            return state.drinks;
        },
        ingredientsGetter(state) {
            return state.ingredients;
        },
        chosenIngredientsGetterLength(state) {
            return state.choosenIngredients.length;
        },
        pickedIngredientsGetter(state) {
            return state.choosenIngredients;
        },
        sumIngredientsGetter(state) {
            return state.choosenIngredients.reduce((acc, item) => acc + item.cena, 0) + 10;  
        },       
    },
    actions: {
        actionAddOrder(context, object) {
            context.commit('mutationAddOrder',object);
        },
        actionCompletedOrder(context, object) {
            context.commit('mutationCompletedOrder',object);
        },
        actionRemove(context, nr) {
            context.commit('mutationRemove', nr);
        },
        actionAddIngredient(context, object) {
            context.commit('mutationAddIngredient', object);
        },
        actionRemoveIngredient(context, nr) {
            context.commit('removeIngredient', nr)
        },
        actionReduceTimer(context, nr) {
            context.commit('mutationTimer', nr)
        }
    },
    mutations: {
        mutationAddOrder (state, order) {
            state.ordered.push(order);
        },
        mutationCompletedOrder (state, order) {
            state.completeforms.push(order);
        },
        mutationRemove(state, nr) {
            var index = state.ordered.findIndex(c => c.id == nr)
            state.ordered.splice(index,1);
        },
        mutationAddIngredient(state, ingredient) {
            state.choosenIngredients.push(ingredient)
        },
        removeIngredient(state, nr) {
            var index = state.choosenIngredients.findIndex(c => c.id == nr)
            state.choosenIngredients.splice(index,1);
        },
        mutationTimer(state, nr) {
            var index = state.completeforms.findIndex(c => c.id == nr)
            state.completeforms[index].timer--;
        }
    }
});



const app = createApp(App)
var VueScrollTo = require('vue-scrollto')


app.use(store); // vuex
app.use(router);
app.use(VueScrollTo, {
    container: "#test",
    duration: 300,
    easing: "ease",
    offset: -88,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
})


app.mount('#app');
app.component('base-button',BaseButton);
app.component('base-intedients', BaseIngredients);
app.component('order-card', OrderCard);
app.component('base-modal', BaseModal);

