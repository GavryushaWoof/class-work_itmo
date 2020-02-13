<template>
<v-app v-cloak>
    <div>
        <v-app-bar
            color="white"
            clipped-left
            app
        >
            <v-app-bar-nav-icon @click.stop="showDrawer = !showDrawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="deep-purple--text text--darken-4">{{sitename}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon link :to="{name:'checkout'}">
                <v-badge
                    color="deep-purple"
                    left bottom
                >
                    <template v-slot:badge>
                      <span>{{cartItemCount}}</span>
                    </template>
                    <v-icon>mdi-cart</v-icon>
                </v-badge>
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer
            v-model="showDrawer"
            app
            clipped>
            <v-list dense>
                <v-subheader>Меню</v-subheader>
                <v-list-item link :to="{name:'main'}" exact>
                    <v-list-item-icon>
                        <v-icon>mdi-book-open-variant</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        Книги
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link :to="{name:'checkout'}">
                    <v-list-item-icon>
                        <v-icon>mdi-cart</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        Корзина
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-content app>
            <v-container fluid>                            
                <transition name="fade" mode="out-in" appear>
                    <router-view></router-view>
                </transition>
            </v-container>
        </v-content>
    </div>
</v-app>
</template>

<script>
    import { mapState, mapGetters } from 'vuex';

    export default {
      data: function () {
        return {
          showDrawer: false
        }
      },
      computed:{
        ...mapState(['sitename']),
        ...mapGetters(['cartItemCount']),
      },
      created() {
        this.$store.dispatch('loadData');
      }
    }
</script>

<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s ease;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>