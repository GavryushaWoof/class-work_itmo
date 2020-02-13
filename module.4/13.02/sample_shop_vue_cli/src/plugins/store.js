import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let config = {
    state: {
        sitename: 'Магазин 404 - найдётся всё для IT-шников!',
        cart: [],
        products: []                    
    },
    getters: {
        cartItemCount(state){
            return state.cart.length;
        }
    },
    mutations:{
        addToCart(state, id){
            state.cart.push(id);
        },
        addProducts(state, arrProducts){
            for(let i = 0; i < arrProducts.length; i++){
                state.products.push(arrProducts[i]);
            }
        }
    },
    actions:{
        loadData({commit}){
            let xhr = new XMLHttpRequest();
            xhr.open("GET", "/data/products.json", true);
            xhr.send();
            xhr.onload = function() {
              if (xhr.status != 200) { 
                console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`); 
              } else { 
                console.log(`Готово, получили ${xhr.response.length} байт`);
                commit('addProducts', JSON.parse(xhr.response));
              }
            };
        }
    }
};

export default new Vuex.Store(config);