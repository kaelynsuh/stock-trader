<template lang="pug">
  nav.navbar.navbar-expand-lg.navbar-light.bg-light.mb-3
    router-link.navbar-brand(to='/') Stock Trader

    .collapse.navbar-collapse
      ul.navbar-nav.mr-auto
        li.nav-item
          router-link.nav-link(to='/portfolio') Portfolio
        li.nav-item
          router-link.nav-link(to='/stocks') Stocks
      
      ul.navbar-nav
        li.nav-item
          a.nav-link(href="#", @click="endDay") End Day
        li.nav-item.dropdown
          a.nav-link.dropdown-toggle(href='#', role='button', data-toggle='dropdown', aria-haspopup='true', aria-expanded='false') Save & Load
          .dropdown-menu(aria-labelledby='navbarDropdown')
            a.dropdown-item(href='#', @click="saveData") Save Data
            a.dropdown-item(href='#', @click="loadData") Load Data
        strong.navbar-text Funds: {{ funds | currency }}
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    computed: {
      funds() {
        return this.$store.getters.funds;
      }
    },
    methods: {
      ...mapActions({
        randomizeStocks: 'randomizeStocks',
        fetchData: 'loadData'
      }),
      endDay() {
        this.randomizeStocks();
      },
      saveData() {
        const data = {
          funds: this.$store.getters.funds,
          stockPortfolio: this.$store.getters.stockPortfolio,
          stocks: this.$store.getters.stocks
        };
        this.$http.put('data.json', data);
      },
      loadData() {
        this.fetchData();
      }
    }
  }
</script>

<style>
</style>
