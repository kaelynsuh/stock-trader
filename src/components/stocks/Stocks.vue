<template lang="pug">
  div
    .row
      app-stock(v-for="stock in stocks", :stock="stock")
</template>

<script>
  import Stock from './Stock.vue';

  export default {
    components: {
      appStock: Stock
    },
    computed: {
      stocks() {
        return this.$store.getters.stocks;
      }
    }
  }
</script>

<style>
</style>
