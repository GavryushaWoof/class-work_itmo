<template>
<v-row>
    <product 
        v-for="product in sortedProducts"
        :key="product.id"
        :product = "product"
    ></product>
</v-row>
</template>

<script>
    import { mapState } from 'vuex';
    import Product from './Product.vue';
    
    function compare(a, b){
        let titleA = a.title.toLowerCase(),
            titleB = b.title.toLowerCase()
        if(titleA > titleB)
            return 1;
        if (titleA < titleB) {
            return -1; 
        }
        return 0;
    }
    
    export default {
      computed: {
            ...mapState(['products']),
            sortedProducts: function(){
                if(this.products.length > 0) {
                    let productsArray = this.products.slice(0);
                    
                    
                    
                    return productsArray.sort(compare);
                } else {
                    return [];
                }                
            }
        },
        components: {
            'product': Product
        }
    }
</script>