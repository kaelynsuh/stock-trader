<template lang="pug">
  div.col-md-4.col-sm-6
      div.card.mb-3
        .card-header.text-white.bg-info {{ stock.name }}
          small  (Price: {{ stock.price }} | Quantity: {{ stock.quantity }})
        .card-body
          .card-text.d-flex.justify-content-between
            input.form-control.mr-2(type="number", 
                              placeholder="Quantity", 
                              v-model.number="quantity",
                              :class="{danger: insufficientQuantity}")
            button.btn.btn-info(@click="sellStock", 
                                  :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)") 
                                  | {{ insufficientQuantity ? 'Not enough' : 'Sell' }}
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    props: ['stock'],
    data() {
      return {
        quantity: 0
      }
    },
    computed: {
      insufficientQuantity() {
        return this.quantity > this.stock.quantity;
      }
    },
    methods: {
      ...mapActions({
        placeSellOrder: 'sellStock'
      }),
      sellStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        };
        this.placeSellOrder(order);
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