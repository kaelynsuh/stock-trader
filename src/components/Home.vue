<template lang="pug">
  div
    h1 Trade or View your Portfolio
    h6 You may Save & Load your Data
    h6 Click on 'End Day' to begin a New Day!
    p Your Funds: {{ funds | currency }}
</template>

<script>
  export default {
    computed: {
      funds() {
        return this.$store.getters.funds;
      }
    }
  }
</script>

<style>
</style>
