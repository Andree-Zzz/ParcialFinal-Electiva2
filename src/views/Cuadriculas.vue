<template>
    <!-- Conatenedor general -->
    <div class="container-fluid lg d-flex justify-content-center align-items-center">
        <div class="d-flex justify-content-center mt-5">
            <!-- Columna cuadricula 1 -->
            <div class="d-flex flex-column mr-3">
                <button type="button" @click="cuadri(3, 2)" class="btn btn-danger mb-3">
                    <div class="d-flex align-items-center">
                        <img src="@/assets/iconos/cuadricula.png" class="imgCa rounded mr-1" draggable="false">
                        <span class="font-weight-bolder">3x2</span>
                    </div>
                </button>
                <button type="button" @click="cuadri(5, 4)" class="btn btn-danger mb-3">
                    <div class="d-flex align-items-center">
                        <img src="@/assets/iconos/cuadricula.png" class="imgCa rounded mr-1" draggable="false">
                        <span class="font-weight-bolder">5x4</span>
                    </div>
                </button>
                <button type="button" @click="cuadri(8, 7)" class="btn btn-danger mb-3">
                    <div class="d-flex align-items-center">
                        <img src="@/assets/iconos/cuadricula.png" class="imgCa rounded mr-1" draggable="false">
                        <span class="font-weight-bolder">8x7</span>
                    </div>
                </button>

                <!-- Boton de inicio -->
                <Inicio />
                <!-- End Boton de inicio -->
            </div>
            <!-- End Columna cuadricula 1 -->
            <!-- Columna cuadricula 2 -->
            <div class="d-flex flex-column">
                <button type="button" @click="cuadri(4, 3)" class="btn btn-danger mb-3">
                    <div class="d-flex align-items-center">
                        <img src="@/assets/iconos/cuadricula.png" class="imgCa rounded mr-1" draggable="false">
                        <span class="font-weight-bolder">4x3</span>
                    </div>
                </button>
                <button type="button" @click="cuadri(6, 5)" class="btn btn-danger">
                    <div class="d-flex align-items-center">
                        <img src="@/assets/iconos/cuadricula.png" class="imgCa rounded mr-1" draggable="false">
                        <span class="font-weight-bolder">6x5</span>
                    </div>
                </button>
            </div>
            <!-- End Columna cuadricula 2 -->
        </div>
    </div>
    <!-- End Conatenedor general -->

</template>
<script>
    import Inicio from '@/components/inicio.vue'
    export default {
        name: 'Cuadricula',
        components: { Inicio, },
        methods: {
            cuadri(num1, num2) {
                
                localStorage.setItem('filas', num1);
                localStorage.setItem('columnas', num2);
                this.$router.push("/juego");
            }
        }
    }
</script>