<template>
  <div class="product-container">
    <div
      class="product-wrapper"
      v-for="(product, index) of products"
      :key="index"
    @click="$router.push('/contact')">
      <div class="product-image">
        <img :src="require(`../assets/img/${product.image}`)" />
      </div>
      <div class="product-content">
        {{product.name}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    products: {
      type: Array,
      default: function(){
        return []
      }
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/imports";
.product-container{
  width: 18vw;
  margin: 2em 0;
}
.product-wrapper{
  border-bottom: 1px solid $mainDarkAccent;
  padding: 0.5em 0;
  display: flex;
  cursor: pointer;
}
.product-image{
  width: 10em;
  height: 8em;
  display: flex;
  align-items: center;
  background: $mainLightAccent;
  img{
    width: 100%;
    height: auto;
  }
}

.product-content{
  width: 50%;
  margin: 0 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  text-align: center;
  color: $mainColor;
}

@media screen  and(max-width: 1366px){
  .product-container{
    width: 25vw;
  }
}

@media screen and(max-width:1024px) {
  .product-container{
    width: 30vw;
  }
  .product-content{
    font-size: 1.3em;
  }
}

@media screen  and(max-width: 854px) and(orientation: landscape){
  .product-content{
    font-size: 1.1em;
  }
}

@media screen and(max-width:414px) and(orientation: portrait){
  .product-container{
    width: 100%;
  }
  .product-content{
    font-size: 1.1em;
  }
}
</style>
