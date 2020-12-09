<template>
    <!-- Conatenedor general -->
    <div class="container-fluid lg d-flex justify-content-center align-items-center">
        <div class="d-flex justify-content-center">
            <!-- Columna categorias 1 -->
            <div class="d-flex flex-column mr-3">
                <button type="button" @click="next('logos')" class="btn btn-danger mb-3">
                    <div class="d-flex align-items-center">
                        <img src="@/assets/categorias/logos.jpg" class="imgCa rounded mr-1" draggable="false">
                        <span class="font-weight-bolder">Logos</span>
                    </div>
                </button>
                <button type="button" @click="next('juegos')" class="btn btn-danger mb-3">
                    <div class="d-flex align-items-center">
                        <img src="@/assets/categorias/juegos.jpg" class="imgCa rounded mr-1" draggable="false">
                        <span class="font-weight-bolder">Juegos</span>
                    </div>
                </button>
                <button type="button" @click="next('animales')" class="btn btn-danger mb-3">
                    <div class="d-flex align-items-center">
                        <img src="@/assets/categorias/animales.jpg" class="imgCa rounded mr-1" draggable="false">
                        <span class="font-weight-bolder">Animales</span>
                    </div>
                </button>
                <!-- Boton de inicio -->
                <Inicio />
                <!-- End Boton de inicio -->
            </div>
            <!-- End Columna categorias 1 -->

            <!-- Columna categorias 2 -->
            <div class="d-flex flex-column">
                <button type="button" @click="next('dibujos')" class="btn btn-danger mb-3">
                    <div class="d-flex align-items-center">
                        <img src="@/assets/categorias/dibujos.jpg" class="imgCa rounded mr-1" draggable="false">
                        <span class="font-weight-bolder">Dibujos</span>
                    </div>
                </button>
                <button type="button" @click="next('vehiculos')" class="btn btn-danger">
                    <div class="d-flex align-items-center">
                        <img src="@/assets/categorias/vehiculos.jpg" class="imgCa rounded mr-1" draggable="false">
                        <span class="font-weight-bolder">Vehiculos</span>
                    </div>
                </button>
            </div>
            <!-- End Columna categorias 2 -->
        </div>
        
    </div>
    <!-- End Conatenedor general -->

</template>
<script>
    import Inicio from '@/components/inicio.vue';
    export default {
        name: 'Categorias',
        components: { Inicio, },
        methods: {
            next(categoria) {
                localStorage.setItem('categoria', categoria);
                this.$router.push('/cuadriculas');
            }
        }
    }
</script>
<style>
    .imgCa {
        widows: 40px;
        height: 40px;
    }
</style>