<template>
  <div>
    <h1>Dashboard</h1>
    <div class="long-text description">
      Welcome to your dashboard, here you can manage your customers and your product inventory<br>
      Just click on the right tile to get started<br><br>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non purus sed libero aliquam fringilla.
      Nam rhoncus viverra elit et laoreet. Sed id orci mollis, viverra est id, varius mauris. Integer nec turpis eu
      ante elementum volutpat. Duis vel neque nisl. Sed lectus odio, tristique nec pellentesque eget, pretium fringilla
      lectus. Ut in nibh eget eros pretium mollis. Suspendisse sed iaculis quam. Cras ullamcorper turpis quis velit
      porttitor malesuada. Sed sed molestie lorem.
    </div>
    <div class="tiles">
      <router-link class="tile" to="/customers">
        <div>
          <font-awesome-icon class="tile-icon" icon="users"/>
          <h4>Customers</h4>
        </div>
      </router-link>
      <router-link class="tile" to="/products">
        <font-awesome-icon class="tile-icon" icon="box"/>
        <h4>Products</h4>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'dash'
  }
</script>

<style scoped>
  .description {
    margin: 20px 0;
  }

  .tiles {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
  }

  .tile {
    flex: 1;
    text-align: center;
    padding: 60px 30px;
    margin: 0 20px;
    border-radius: 5px;
    cursor: pointer;
    max-width: 300px;
    background: #fffafb;
    background: linear-gradient(45deg, rgb(255, 228, 222) -30%, rgb(247, 246, 190) 120%);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    transition: 0.5s;
  }

  .tile:hover {
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2);
    background: #ffe4ea;
    background: linear-gradient(45deg, rgb(249, 196, 183) -30%, rgb(255, 254, 157) 120%);
  }

  .tile-icon {
    font-size: 2em;
  }

  @media (max-width: 500px) {
    .tiles {
      flex-direction: column;
    }

    .tile {
      margin-top: 20px;
    }
  }
</style>
