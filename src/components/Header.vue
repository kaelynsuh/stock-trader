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
          a.nav-link(href="#") Save & Load
        li.nav-item.dropdown
          a.nav-link.dropdown-toggle(href='#', role='button', data-toggle='dropdown', aria-haspopup='true', aria-expanded='false') End Day
          .dropdown-menu(aria-labelledby='navbarDropdown')
            a.dropdown-item(href='#') Save Data
            a.dropdown-item(href='#') Load Data
</template>

<script>
  export default {
  }
</script>

<style>
</style>
