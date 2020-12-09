<template>
    <div class="container-fluid lg d-flex flex-column justify-content-center">
        <!-- Boton pausa -->
        <div class="d-flex">
            <button type="button" class="btn btn-light" data-toggle="modal" data-target="#ModalPause">
                <img class="pause" src="@/assets/iconos/pausee.png" alt="pause">
            </button>
            <div class="d-flex text-white ml-3">
                <h5 class="mr-1">Intentos: {{ this.intentos }}</h5>
                <h5>Aciertos: {{ this.aciertos }}</h5>
            </div>
        </div>
        <!-- End, Boton pausa -->

        <!-- Imagenes -->
        <div v-for="(fila, indiceFila) in memo" :key="indiceFila" class="d-flex justify-content-center">
            <div class="d-flex flex-column m-1" v-for="(imagen, indiceImagen) in fila" :key="indiceFila+''+indiceImagen" >
                <img class="img" @click="voltear(indiceFila, indiceImagen)" :src="(imagen.mostrar ? imagen.ruta : quest)">
            </div>
        </div>
        <!-- End, Imagenes -->

        <!-- Modal pause -->
        <div class="modal fade" id="ModalPause" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-sm">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Pausa</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body d-flex justify-content-center">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <Inicio />
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- end, Modal pause -->
    </div>
</template>
<script>
    import Inicio from '@/components/inicio.vue';
    import Logo from '@/assets/iconos/logo.png';
    import Quest from '@/assets/iconos/Que.png';

    export default {
        name: 'Juego',
        components: { Inicio, },
        data() {
            return {
                categoria: localStorage.getItem('categoria'),
                filas: parseInt(localStorage.getItem('filas')),
                columnas: parseInt(localStorage.getItem('columnas')),
                click: false,
                image: Logo,
                quest: Quest,
                imagenes: [],
                memo:[],
                intentos: 0,
                aciertos: 0,
                timeout: false,
                ultimasCoordenadas: {
                    indiceFila: null,
                    indiceImagen: null
                },
                sgVoltearImg: 1,
                numImg: (parseInt(localStorage.getItem('filas'))*parseInt(localStorage.getItem('columnas')))
            }
        },
        mounted() {
            
            this.imagenes = [
                'https://upload.wikimedia.org/wikipedia/commons/7/79/Burger_King_logo.svg',
                'https://i.blogs.es/01113a/logo_apple_arco_iris_vintage/1366_2000.png',
                'https://www.marketingdirecto.com/wp-content/uploads/2014/01/nike-logo.jpg',
                'https://do1pouckcwxot.cloudfront.net/argentina/uploads/2017/04/21191317/adidas-logo.jpg',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/1280px-Playstation_logo_colour.svg.png',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1224px-NASA_logo.svg.png',
                'https://logos-marcas.com/wp-content/uploads/2020/04/McDonalds-Logo.png',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png',
                'https://c0.klipartz.com/pngpicture/217/591/gratis-png-iconos-de-la-computadora-de-youtube-logo-de-youtube-thumbnail.png',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Android_robot.svg/872px-Android_robot.svg.png'
            ];
            this.juego();
        },
        methods: {
            prueba(data) {
                if(this.click) {
                    this.click = false;
                }else {
                    this.click = true;
                }
            },
            juego() {
                let memo = [];
                let inicial = [];
                this.imagenes.forEach((imagen, indice) => {
                    let imagenDeMemo = {
                        ruta: imagen,
                        mostrar: false, 
                        acertada: false, 
                    };
                    
                    inicial.push(imagenDeMemo, Object.assign({}, imagenDeMemo));
                });

                for(let i = 0; i<(this.numImg); i++){
                    memo[i] = inicial[i]
                }

                this.mezclar(memo)
                let memoDividido = [];
                for (let i = 0; i < (this.numImg); i += this.columnas) {
                    memoDividido.push(memo.slice(i, i + this.columnas));
                }

                this.intentos = 0;
                this.aciertos = 0;
                this.memo = memoDividido;
            },
            voltear(indiceFila, indiceImagen) {
                if (this.timeout) {
                    return;
                }
                if (this.memo[indiceFila][indiceImagen].acertada) {
                    return;
                }
                
                if (this.ultimasCoordenadas.indiceFila === null && this.ultimasCoordenadas.indiceImagen === null) {
                    this.memo[indiceFila][indiceImagen].mostrar = true;
                    this.ultimasCoordenadas.indiceFila = indiceFila;
                    this.ultimasCoordenadas.indiceImagen = indiceImagen;
                    return;
                }

                if(this.ultimasCoordenadas.indiceFila === indiceFila && this.ultimasCoordenadas.indiceImagen === indiceImagen){
                    return
                }

                let imagenSeleccionada = this.memo[indiceFila][indiceImagen];
                let ultimaImagenSeleccionada = this.memo[this.ultimasCoordenadas.indiceFila][this.ultimasCoordenadas.indiceImagen];
                if (indiceFila === this.ultimasCoordenadas.indiceFila && indiceImagen === this.ultimasCoordenadas.indiceImagen) {
                    this.memo[indiceFila][indiceImagen].mostrar = false;
                    this.ultimasCoordenadas.indiceFila = null;
                    this.ultimasCoordenadas.indiceImagen = null;
                    this.intentos++;
                    return;
                }
            
                this.memo[indiceFila][indiceImagen].mostrar = true;
                if (imagenSeleccionada.ruta === ultimaImagenSeleccionada.ruta) {
                    this.aciertos++;
                    this.memo[indiceFila][indiceImagen].acertada = true;
                    this.memo[this.ultimasCoordenadas.indiceFila][this.ultimasCoordenadas.indiceImagen].acertada = true;
                    this.ultimasCoordenadas.indiceFila = null;
                    this.ultimasCoordenadas.indiceImagen = null;
                    if (this.ganar()) {
                        this.victoria();
                    }
                } else {
                    this.timeout = true;
                    setTimeout(() => {
                        this.memo[indiceFila][indiceImagen].mostrar = false;
                        this.memo[indiceFila][indiceImagen].animacion = false;
                        this.memo[this.ultimasCoordenadas.indiceFila][this.ultimasCoordenadas.indiceImagen].mostrar = false;
                        this.ultimasCoordenadas.indiceFila = null;
                        this.ultimasCoordenadas.indiceImagen = null;
                        this.timeout = false;
                    }, this.sgVoltearImg * 1000);
                    this.intentos++;
                }
            },
            ganar() {
                return this.memo.every(arreglo => arreglo.every(imagen => imagen.acertada));
            },
            victoria() {
                localStorage.removeItem("categoria");
                localStorage.removeItem("filas");
                localStorage.removeItem("columnas");
                this.$router.push('/gameOver');
            },
            mezclar(data){
                var i, j, x; 
                for(i = data.length - 1; i > 0; i--){
                    j = Math.floor(Math.random() * (i+1));
                    x = data[i];
                    data[i] = data[j];
                    data[j] = x;
                }
                return data
            }
        },
    }
</script>
<style>
    .img {
        width: 55px;
    }
    .pause {
        width: 20px;
    }
</style>