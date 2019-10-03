<template>
  <div class="products">
    <div class="header">
      <h1>
        <slot>Products</slot>
      </h1>
      <div @click="toggleGrid" class="toggle">
        <div :class="{ active: !gridToggle }">List</div>
        <div :class="{ active: gridToggle }">Grid</div>
      </div>
    </div>
    <div class="product-list">
      <list-view v-if="!gridToggle" :customer_id="customer_id" :products="products" />
      <grid-view v-if="gridToggle" :customer_id="customer_id" :products="products" />
    </div>
  </div>
</template>

<script>
  import ProductList from './ListView/ProductList'
  import ProductGrid from './GridView/ProductGrid'

  export default {
    name: 'Products',
    data()  {
      return {
        gridToggle: false
      }
    },
    props: {
      products: Array,
      customer_id: String
    },
    components: {
      listView: ProductList,
      gridView: ProductGrid
    },
    methods: {
      toggleGrid () {
        this.gridToggle = !this.gridToggle
      }
    }
  }
</script>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .toggle {
    background: #f5e36d;
    padding: 0;
    border-radius: 5px;
    color: #823257;
    box-sizing: border-box;
    cursor: pointer;
  }

  .toggle > div {
    display: inline-block;
    padding: 5px 10px;
    background: #f5e36d;
    border-radius: 5px;
    width: 47%;
  }

  .toggle > .active {
    background: #c45e57;
    color: white;
  }

  .toggle > .active:first-child {
    border-radius: 5px 0 0 5px;
  }

  .toggle > .active:last-child {
    border-radius: 0 5px 5px 0;
  }

  .product-list {
    margin-top: 20px;
  }

  @media (max-width: 500px) {
    .header {
      display: block;
    }

    .toggle {
      display: inline-block;
      width: 100%;
    }

    .toggle > div {
      width: 49%;
    }
  }
</style>
