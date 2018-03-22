<template lang="pug">
  div.col-md-4.col-sm-6
      div.card.mb-3
        .card-header.text-white.bg-info {{ stock.name }}
          small  (Price: {{ stock.price }} | Quantity: {{ stock.quantity }})
        .card-body
          .card-text
            .float-left
              input.form-control(type="number", 
                                placeholder="Quantity", 
                                v-model.number="quantity")
            .float-right
              button.btn.btn-info(@click="sellStock", 
                                    :disabled="quantity <= 0 || !Number.isInteger(quantity)") 
                                    | Sell
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

<style>
</style>
