<template>
<v-row>
    <v-col cols="12" md="4" class="d-flex justify-center">
        <v-img class="flex-grow-0 elevation-2"
            v-bind:src="'/' + product.image"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            width="300px"
        >                        
        </v-img>
    </v-col>
    <v-col cols="12" md="8">
        <h1 class="ma-2" v-text="product.title"></h1>
        <v-rating
            dense
            v-model="product.rating"
            background-color="orange lighten-3"
            color="orange"                                        
            readonly
            class="ma-2"
        ></v-rating>
        <p class="ma-2" v-html="product.description"><p>
        <p class="ma-2">Автор: {{product.author}}</p>
        <p class="ma-2">Издательство: {{product.publishing}}<p>
        <p class="ma-2">Год: {{product.year}}</p>
        <p class="ma-2">Количество страниц: {{product.pages}}</p>
        <p class="ma-2">Стоимость: {{product.price | formatPrice}}</p>
        <v-btn 
            v-on:click="addToCart(product)" 
            v-if="canAddToCart(product)"
            class="ma-2" outlined 
            color="deep-purple darken-4"
        >Добавить в корзину</v-btn>
        <v-btn v-else 
            disabled
            class="ma-2" outlined 
            color="deep-purple darken-4"
        >Добавить в корзину</v-btn> 
        <transition name="bounce" mode="out-in">
            <span class="inline-block" v-if="product.availableInventory - cartCountFn(product.id) === 0" key="1">Нет в наличии</span>
            <span class="inline-block" v-else-if="product.availableInventory - cartCountFn(product.id) < 5" key="">Осталось только {{product.availableInventory - cartCountFn(product.id)}}</span>
            <span class="inline-block" v-else key="">Осталось много</span>
        </transition>
        
    </v-col>
</v-row>
</template>

<script>
    import { mapState } from 'vuex';
    
    export default {
        props:['id'],
        computed:{
            ...mapState(['products', 'cart']),
            product: function(){
                let id = this.id;
                let arr = this.products.filter(function(prod){
                    return prod.id === id;
                });
                return arr[0];
            },
            
        },
        methods:{
            addToCart: function(product){
                this.$store.commit('addToCart', product.id);
            },
            canAddToCart: function(product){
                return product.availableInventory > this.cartCountFn(product.id);
            },
            cartCountFn: function(id){
                let itemCount = 0;
                
                for(let i = 0; i < this.cart.length; i++)
                    if(this.cart[i] === id)
                        itemCount++;
                        
                return itemCount;                        
            }
        },
        filters: {
            formatPrice: function(val){
                if(!parseInt(val)) return '';
                let arr = val.toString().split("");
                let index = 3;
                while(arr.length > index){
                    arr.splice(arr.length - index, 0, " ");
                    index += 4;
                }
                return arr.join("") + ' ' + String.fromCharCode(8381);
            }
        }
    }
</script>

<style>
    .inline-block {
        display: inline-block;
    }
    
    .bounce-enter-active {
        animation: shake 0.72s cubic-bezier(.37,.07,.19,.97) both;
        transform: translate3d(0, 0, 0);
        backface-visibility: hidden;
    }

    @keyframes shake {
        10%, 90% {
            color: red;
            transform: translate3d(-1px, 0, 0);
        }

        20%, 80% {
            transform: translate3d(2px, 0, 0);
        }

        30%, 50%, 70% {
            color: red;
            transform: translate3d(-4px, 0, 0);
        }

        40%, 60% {
            transform: translate3d(4px, 0, 0);
        }
    }
</style>