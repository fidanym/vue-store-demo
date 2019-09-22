<template>
  <div class="row product custom-list-item">
    <div class="col-7 col-md-4">
      <h5>{{product.name}}</h5>
    </div>
    <div class="col col-md-7">
      <div class="product-price">{{product.price | currency}}</div>
    </div>
    <div class="col">
      <font-awesome-icon @click="deleteProduct" class="tile-icon" icon="minus-square"/>
    </div>
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
  .custom-list-item {
    cursor: default;
  }

  .tile-icon {
    font-size: 1.5em;
    cursor: pointer;
    color: #f59ca0;
    transition: 0.5s;
  }

  .tile-icon:hover {
    color: #c53d43;
  }

  @media (max-width: 500px) {
    .tile-icon {
      color: #c53d43;
    }
  }
</style>
