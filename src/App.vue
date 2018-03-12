<template lang="pug">
  .container
    app-header
    .row
      .col
        router-view
</template>

<script>
  import Header from './components/Header.vue';

  export default {
    components: {
      appHeader: Header
    },
    created() {
      this.$store.dispatch('initStocks');
    }
  }
</script>

<style>
  body {
    padding: 2rem;
  }
</style>
