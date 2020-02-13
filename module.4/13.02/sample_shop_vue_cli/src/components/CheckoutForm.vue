<template>
<v-row>
    <v-col cols="12">
        <h2>Оформление заказа</h2>
    </v-col>
    <v-col cols="6">
        <v-text-field label="Имя:" v-model.trim="order.firstname"></v-text-field>
    </v-col>
    <v-col cols="6">
        <v-text-field label="Фамилия:" v-model.trim="order.lastname"></v-text-field>
    </v-col>
    <v-col cols="9">
        <v-text-field label="Адрес:" v-model.trim="order.address"></v-text-field>
    </v-col>
    <v-col cols="3">
        <v-radio-group v-model="order.type_address" row>
            <v-radio label="Дом" value="домашний адрес"></v-radio>
            <v-radio label="Работа" value="рабочий адрес"></v-radio>
        </v-radio-group>
    </v-col>
    <v-col cols="6">
        <v-text-field label="Город:" v-model.trim="order.city"></v-text-field>
    </v-col>
    <v-col cols="6">
        <v-select label="Страна:" v-model.trim="order.country" :items="order.countries"></v-select>
    </v-col>
    <v-col cols="4">
        <v-text-field label="Почтовый индекс:" v-model.number="order.zip"></v-text-field>
    </v-col>
    <v-col cols="4">
        <v-checkbox label="Подарочная упаковка" v-model="order.gift" true-value="да" false-value="нет"></v-checkbox>                        
    </v-col>
    <v-col cols="12">
        <v-btn 
            v-on:click="submitForm" 
            class="ma-2" outlined 
            color="deep-purple darken-4"
        >Заказать</v-btn>                       
    </v-col>
    <v-col cols="12" class="elevation-2 white">
        <pre>
            Имя: {{order.firstname}}
            Фамилия: {{order.lastname}}
            Адрес: {{order.address}}
            Город: {{order.city}}
            Страна: {{order.country}}
            Почтовый индекс: {{order.zip}}
            Подарочная упаковка: {{order.gift}}
            Тип адрес: {{order.type_address}}</pre>
    </v-col>
</v-row>
</template>

<script>    
    export default {
        data: function(){
            return {
                order: {
                    firstname: '',
                    lastname: '',
                    address: '',
                    city: '',
                    country: '',
                    gift: 'нет',
                    type_address: 'домашний адрес',
                    countries: ['Россия', 'Белоруссия', 'Казахстан']
                }
            };
        },
        methods: {
            submitForm: function(){
                alert("Заказ оформлен");
            }
        }
    }
</script>