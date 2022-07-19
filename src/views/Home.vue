<template>
  <div class="home">
    <div class="home-contact">
      Contactați-ne acum, pentru a stabili detaliile lucrării dumneavoastră <br>
      Tel: <span @click="$parent.openWapp($store.state.whatsapp)">{{$store.state.whatsapp}}</span>
      Mail: <a href="mailto:molnav2022@gmail.com">{{$store.state.mail}}</a>
      <div class="shine"></div>
    </div>
    <div class="home-title">Descoperiți produsele partenerilor nostri</div>
    <div class="partner-products">
      <div class="product-container">
        <div class="product-container-title">Produse Viking</div>
        <HomeProduct :products="$store.state.produse.vk" />
      </div>
      <div class="product-container">
       <div class="product-container-title">Produse Blachotrapez</div>
       <HomeProduct :products="$store.state.produse.bl"/>
      </div>
      <div class="product-container">
       <div class="product-container-title">Produse ARKADA</div>
       <HomeProduct :products="$store.state.produse.ak"/>
      </div>
    </div>
  </div>
</template>

<script>
import HomeProduct from '../components/HomeProduct.vue';
// @ is an alias to /src

export default {
    components: { HomeProduct },
}
</script>
<style lang="scss">
@import "@/assets/scss/imports";

.home-contact{
  padding: 0.5em;
  background: $mainDarkAccent;
  margin-top: 1em;
  font-size: 2em;
  border: 2px solid black;
  text-align: center;
  color: white;
  position: relative;
  span{
    cursor: pointer;
  }
  span:hover{
    border-bottom: 1px solid white;
  }
}

.shine{
  position: absolute;
  width: 100px;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(to right,rgba(255,255,255,0), rgba(255,255,255,0.3), rgba(255, 255, 255, 0));
  opacity: 0;
  // animation: shine 3s infinite ease-in-out;
}

@keyframes shine {
  0%{opacity: 1;left: 0}
  100% {opacity: 0; left: 100%;}
}

.home-title{
  width: fit-content;
  margin: 1em auto 2em auto;
  font-size: 1.7em;
  color: $mainColor;
}

.partner-products{
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}



.product-container-title{
  font-size: 1.4em;
  border-bottom: 1px solid $mainColor;
  color: $mainColor;
  padding: 0 0 0.2em 0.5em;
  span{
    cursor: pointer;
  }
  span:hover{
    border-bottom: 1px solid $mainColor;
  }
}



@media screen  and(max-width: 414px) and(orientation: portrait){
  .home-contact{
    width: 80%;
    margin: auto;
    font-size: 1.1em;
    margin-top: 1em;
  }

  .home-title{
    font-size: 1.4em;
    text-align: center;
  }

  .partner-products{
    width: 80%;
    margin: auto;
    flex-flow: column;
  }

  .product-container-title{
    text-align: center;
  }
}

</style>
