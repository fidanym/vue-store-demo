<template>
  <div class="tile product">
    <div>
      <h5>{{product.name}}</h5>
    </div>
    <div>
      <div class="product-price">{{product.price | currency}}</div>
    </div>
    <div @click="deleteProduct" class="delete"><font-awesome-icon icon="minus-square"/> Remove</div>
  </div>
</template>

<script>
  export default {
    name: 'ProductListItem',
    props: {
      product: Object,
      customer_id: String
    },
    methods: {
      deleteProduct() {
        if (typeof this.customer_id !== 'undefined') {
          this.$store.dispatch('deleteCustomerProduct', {customer_id: this.customer_id, product_id: this.product.id})
        } else {
          this.$store.dispatch('deleteProduct', this.product.id)
        }
      }
    }
  }
</script>

<style scoped>
  .tile {
    flex-shrink: 0;
    cursor: default;
  }

  .product {
    width: 21%;
    min-width: 21%;
    max-width: 21%;
  }

  .delete {
    position: relative;
    bottom: -50px;
    padding: 5px;
    width: 100%;
    border-top: 1px solid #c53d43;
    cursor: pointer;
    transition: .3s;
    color: #865656;
    background: linear-gradient(rgba(255, 0, 0, 0.03), rgba(255, 0, 0, 0));
    border-radius: 5px;
  }

  .delete:hover {
    color: #c53d43;
    background: linear-gradient(rgba(255, 0, 0, 0.03), rgba(255, 0, 0, 0.1));
  }

  @media (max-width: 500px) {
    .product {
      width: initial;
      min-width: initial;
      max-width: initial;
    }

    .delete {
      color: #c53d43;
      border-radius: 0;
      background: linear-gradient(rgba(255, 0, 0, 0.04), rgba(255, 0, 0, 0.09));
    }
  }
</style>
