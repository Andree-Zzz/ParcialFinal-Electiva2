<template>
  <div class="container-fluid lg d-flex flex-column justify-content-center align-items-center">
    <div>
      <p class="h1 text-white">Memo Macth</p>
    </div>
    <button type="button" @click="this.$router.push('/categorias')" class="btn btn-primary border border-light rounded font-weight-bolder">
      JUEGO RAPIDO
    </button>
  </div>
</template>

<script>
  export default {
    name: 'Home',
  }
</script>

<style>

</style>