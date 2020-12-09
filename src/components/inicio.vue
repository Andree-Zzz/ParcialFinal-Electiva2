<template>
    <div class="d-flex justify-content-start mt-4">
        <button type="button" @click="inicio()" class="btn btn-light">
            <img src="@/assets/iconos/home.png" class="home" alt="Boton de inicio">
        </button>
    </div>
</template>

<script>
    export default {
        name: "Inicio",
        methods: {
            inicio() {
                localStorage.removeItem("categoria");
                localStorage.removeItem("filas");
                localStorage.removeItem("columnas");
                this.$router.push('/');
            }
        }
    }
</script>
<style>
    .home {
        widows: 25px;
        height: 25px;
    }
</style>
