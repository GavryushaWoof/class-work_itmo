import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from '../components/Products.vue';
import ProductCard from '../components/ProductCard.vue';
import CheckoutForm from '../components/CheckoutForm.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Products, name: 'main' },
    { path: '/productcard/:id/', component: ProductCard, name:'productcard', props:true},
    { path: '/checkout', component: CheckoutForm, name: 'checkout' }
];

export default new VueRouter({
    mode: 'history',
    routes
});