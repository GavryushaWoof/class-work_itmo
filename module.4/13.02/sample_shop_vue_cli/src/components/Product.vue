<template>
<v-col>                    
    <v-card>
        <v-img 
            v-bind:src="product.image"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="400px"
            class="white--text align-end"
        > 
            <v-card-title 
                v-text="product.title" 
                style="word-break: normal; cursor: pointer;" 
                @click="overlay = !overlay"
            ></v-card-title>                          
        </v-img>
        <div>
            <v-card-text>
                <v-row
                   align="center"
                   class="mx-0"
                >
                    <v-rating
                        dense
                        v-model="product.rating"
                        background-color="orange lighten-3"
                        color="orange"                                        
                        readonly
                    ></v-rating>
                    <v-spacer></v-spacer>
                    <div class="grey--text mr-2 title">{{product.price | formatPrice}}</div>
                </v-row>
            </v-card-text>
            <v-divider></v-divider>
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
        </div>
        <v-overlay
            absolute
            opacity="0.5"
            :value="overlay"
            z-index="20"
            @click="overlay = false"
        >                            
            <v-btn link :to="{name:'productcard', params:{id:product.id}}"
                color="white" outlined                             
            >
                Подробнее
            </v-btn>
            <v-btn icon
                color="error"
                @click="overlay = false"
            >
                <v-icon>mdi-close</v-icon>
            </v-btn>                            
        </v-overlay>
    </v-card>
</v-col>
</template>

<script>
    import { mapState } from 'vuex';
    
    export default {
        data: function(){
            return {
                overlay: false
            }
        },
        props:['product'],
        computed:{
            ...mapState(['products', 'cart'])
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