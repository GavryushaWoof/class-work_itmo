<template>
    <div>
        <h1>User {{$route.params.id}}</h1>
        <div>{{$route.params.test}}</div>
    </div>
</template>

<script>
   export default {
     validate ({ params }) {
// Должен быть числом
        return /^\d+$/.test(params.id)
    }
   } 
</script>