<template>
  <div>
    <div class="contact-title">
      Intrati in contact cu noi pentru a stabili detaliile lucrari dumneavoastra
    </div>
    <div class="contact-container">
      <div class="left-container">
        <div class="container-title">Puteti lua legatura cu noi pe</div>
        <div class="contact-wrapper" @click="$parent.goToLink($store.state.fb)">
          <div class="footer-img-container">
            <img
              :src="require('../assets/img/facebookColor.svg')"
              alt="Facebook Icon"
            />
          </div>
          <div class="contact-text">Molnav Conprest SRL</div>
        </div>
        <div
          class="contact-wrapper"
          @click="$parent.openWapp($store.state.whatsapp)"
        >
          <div class="footer-img-container">
            <img
              :src="require('../assets/img/whatsappColor.svg')"
              alt="Whatsapp Icon"
            />
          </div>
          <div class="contact-text">{{ $store.state.whatsapp }}</div>
        </div>
        <div class="contact-wrapper">
          <div class="footer-img-container">
            <img
              :src="require('../assets/img/mail-message-color.svg')"
              alt="Email Icon"
            />
          </div>
          <div class="contact-text">
            <a href="mailto:molnav2022@gmail.com">{{ $store.state.mail }}</a>
          </div>
        </div>
        <div class="contact-wrapper">
          <div class="footer-img-container">
            <img
              :src="require('../assets/img/mail-message-color.svg')"
              alt="Email Icon"
            />
          </div>
          <div class="contact-text">
            <a href="mailto:c.mitrusciak@molnavconprest.ro">{{ $store.state.mail1 }}</a>
          </div>
        </div>
        <div class="contact-wrapper">
          <div class="footer-img-container">
            <img
              :src="require('../assets/img/mail-message-color.svg')"
              alt="Email Icon"
            />
          </div>
          <div class="contact-text">
            <a href="mailto:m.maioru@molnavconprest.ro">{{ $store.state.mail2 }}</a>
          </div>
        </div>
      </div>
      <div class="right-container">
        <div class="container-title">
          Sau ne puteti vizita la locatia fizica
        </div>
        <iframe
          width="600"
          height="450"
          style="border: 0"
          loading="lazy"
          allowfullscreen
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJIVeh4IWqs0ARfcRj3ED5CbQ&key=AIzaSyDmuLaYtURsJMu4kz3jxtHgWiGhD_syA60"
        ></iframe>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
@import "@/assets/scss/imports";
.contact-title {
  font-size: 2em;
  color: $mainColor;
  text-align: center;
  margin-top: 5vh;
  border-bottom: 1px solid $mainDarkAccent;
}

.contact-container {
  display: flex;
}

.contact-text {
  color: $mainColor;
  display: flex;
  align-items: center;
  margin-left: 0.5em;
  font-weight: bold;
  cursor: pointer;
  a {
    color: $mainColor;
  }
}

.left-container {
  display: flex;
  flex-flow: column wrap;
  padding: 1em 2em;
  margin-top: 4vh;
}

.right-container {
  padding: 1em 2em;
  margin-top: 4vh;
  iframe {
    border: 2px solid $mainColor !important;
  }
}

.container-title {
  color: $mainColor;
  font-size: 1.5em;
  margin-bottom: 3vh;
  border-bottom: 1px solid $mainDarkAccent;
}

.contact-wrapper {
  display: flex;
  margin: 0.5vh 0;
}

@media screen and(max-width:414px) and(orientation: portrait) {

  .contact-title{
    font-size: 1.4em;
  }

  .contact-container {
    flex-flow: column wrap;
  }

  .container-title{
    font-size: 1.2em;
    text-align: center;
  }

  .right-container {
    iframe {
      width: 320px;
      height: 320px;
    }
  }
}

@media screen and(max-width: 854px) and(orientation: landscape) {
  .right-container {
    iframe {
      width: 400px;
      height: 400px;
    }
  }
}
</style>