<template lang="pug">
  div.col-md-4.col-sm-6
      div.card.mb-3
        .card-header.text-white.bg-success NAME
          small  (Price: PRICE)
        .card-body
          .card-text
            .float-left
              input.form-control(type="number", placeholder="Quantity")
            .float-right
              button.btn.btn-success Buy
</template>

<script>
  export default {
  }
</script>

<style>
</style>
