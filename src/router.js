import { createRouter, createWebHistory } from "vue-router";
import MainView from './components/MainView';
import CreatePizza from './components/CreatePizza';
import OrderStatus from './components/OrderStatus';


const router = createRouter({
    history: createWebHistory(),
    routes:[
        { path: '/', redirect: '/pizze'},
        { path: '/pizze', component: MainView },        
        { path: '/createpizza', component: CreatePizza },        
        { path: '/status', component: OrderStatus },        
    ],
});

export default router;
// exportujemy na zewnatrz