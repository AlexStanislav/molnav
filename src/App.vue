<template>
  <div id="app">
    <div id="nav">
      <div id="nav-container">
        <div class="logo-container">
          <img :src="require('@/assets/img/Molnav Logo 1.png')" />
        </div>
        <!-- <div class="phone-number">Telelefon<br> {{$store.state.whatsapp}} </div> -->
        <router-link to="/">Acasă</router-link>
        <router-link to="/despre">Despre noi</router-link>
        <router-link to="/partereri">Parteneri</router-link>
        <router-link to="/lucrari">Lucrari</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </div>
    <main>
      <router-view />
    </main>
    <footer>
      <div class="footer-title">Contact</div>
      <div class="footer-contact-container">
        <div class="footer-contact" @click="goToLink($store.state.fb)">
          <div class="footer-img-container">
            <img
              :src="require('@/assets/img/facebook.svg')"
              alt="Facebook Icon"
            />
          </div>
          <div class="footer-contact-text">Molnav Conprest SRL</div>
        </div>
        <div class="footer-contact" @click="openWapp($store.state.whatsapp)">
          <div class="footer-img-container">
            <img
              :src="require('@/assets/img/whatsapp.svg')"
              alt="Whatsapp Icon"
            />
          </div>
          <div class="footer-contact-text">{{ $store.state.whatsapp }}</div>
        </div>
        <div class="footer-contact">
          <div class="footer-img-container">
            <img
              :src="require('@/assets/img/mail-message.svg')"
              alt="Email Icon"
            />
          </div>
          <div class="footer-contact-text">
            <a href="mailto:molnav2022@gmail.com">{{ $store.state.mail }}</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  methods: {
    goToLink(link) {
      window.open(link, "_blank");
    },
    openWapp(number) {
      window.open(`https://wa.me/${number}`, "_blank");
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/imports";
body {
  margin: 0;
  padding: 0;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

.logo-container {
  width: 150px;
  height: 100px;
  position: absolute;
  left: 1em;
  top: 0.5em;
  img {
    width: 100%;
    height: auto;
  }
}

#nav {
  background: $mainLightShade;
  box-shadow: 0px 1px 5px 1px rgba($color: #000000, $alpha: 0.4);
}

a {
  text-decoration: none;
  color: white;
}

a:hover{
  border-bottom: 1px solid white;
}

#nav-container {
  width: 60%;
  height: 100px;
  margin: auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    color: $mainColor;
    padding: 0.5em 1em 0.2em 1em;
    text-decoration: none;
    font-size: 1.3em;
    margin: 0.5em;
    transition: all 0.3s ease-in-out;
    border-bottom: 1px solid $mainColor;
  }
  a:hover {
    color: $mainLightShade;
    background: $mainColor;
  }
}

.phone-number {
  position: absolute;
  left: 15%;
  color: $mainDarkShade;
  font-weight: bold;
  text-align: center;
  font-size: 2em;
}

main {
  width: 60%;
  margin: auto;
  height: calc(100vh - 140px);
  box-sizing: border-box;
  overflow-x: auto;
}

footer {
  width: 100%;
  background: $mainColor;
  padding: 1em 0;
}

.footer-title {
  width: fit-content;
  margin: 0 auto 0.5em auto;
  font-size: 1.5em;
  color: white;
}

.footer-contact-container {
  width: fit-content;
  margin: auto;
  display: flex;
  flex-flow: row wrap;
}

.footer-contact {
  display: flex;
  margin: 0 0.5em;
  cursor: pointer;
}

.footer-contact-text {
  font-size: 1.2em;
  height: 30px;
  color: white;
  margin-left: 0.5em;
  display: flex;
  align-items: center;
}

.footer-img-container {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  img {
    width: 100%;
    height: auto;
  }
}

@media screen and(max-width: 1366px) {
  #nav-container,
  main {
    width: 100%;
  }
  main {
    padding: 0 2em;
    height: fit-content;
  }
}

@media screen and(max-width:1024px) {
  main {
    padding: 0 0.5em;
  }
  #nav-container {
    width: 90%;
    margin: 0 0 0 10%;
    position: initial;
  }
}
</style>
