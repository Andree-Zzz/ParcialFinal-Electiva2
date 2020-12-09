<template>
    <div class="d-flex flex-column justify-content-center align-items-center text-white lg">
        <h1>Game Over</h1>
        <Inicio />
    </div>
</template>
<script>
import Inicio from '@/components/inicio.vue';
    export default {
        name: "GameOver",
        components: { Inicio, },
    }
</script>