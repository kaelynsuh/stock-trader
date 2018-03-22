<template lang="pug">
  div.col-md-4.col-sm-6
      div.card.mb-3
        .card-header.text-white.bg-success {{ stock.name }}
          small  (Price: {{ stock.price }})
        .card-body
          .card-text
            .float-left
              input.form-control(type="number", 
                                placeholder="Quantity", 
                                v-model.number="quantity",
                                :class="{danger: insufficientFunds}")
            .float-right
              button.btn.btn-success(@click="buyStock", 
                                    :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(quantity)") 
                                    | {{ insufficientFunds ? 'Insufficient Funds' : 'Buy' }}
</template>

<script>
  export default {
    props: ['stock'],
    data() {
      return {
        quantity: 0
      }
    },
    computed: {
      funds() {
        return this.$store.getters.funds;
      },
      insufficientFunds() {
        return this.quantity * this.stock.price > this.funds;
      }
    },
    methods: {
      buyStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        };
        this.$store.dispatch('buyStock', order);
        this.quantity = 0;
      }
    }
  }
</script>

<style scoped>
  .danger {
    border: 1px solid red;
  }
</style>