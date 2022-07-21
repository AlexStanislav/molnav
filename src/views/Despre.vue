<template>
  <div class="about">
    <div class="about-container">
      <div class="about-title">Despre noi</div>
      <div class="about-content">
        <div>
          Ne numim MOLNAV CONPREST SRL si din anul 2018 avem ca principal obiect
          de activitate principal servicii in constructii si ca obiectiv
          secundar dar la fel de important comercializarea sistemelor complete
          de acoperisuri din tabla , fabricate de firmele noastre partenere
          Viking Pruszynski, Blachotrapez si ARKADA.
        </div>
        <br />
        <div>
          Experienta in materie de acoperisuri combinata cu inalta calificare a
          angajatilor si fiabilitatea produselor si serviciilor noastre
          reprezinta garantia unui proiect pentru care nu trebuie sa va faceti
          niciun fel de griji.
        </div>
        <br />
        <div>
          Prin experienta, profesionalism si seriozitate va oferim suportul
          operational in sisteme complete de acoperis pentru a alege
          invelitoarea metalica potrivita casei dumneavoastra si a va bucura de
          achizitia, montajul si garantia unei lucrari pe termen lung, perfect
          adaptate nevoilor si bugetului pe care il alocati.
        </div>
        <br />
        Pentru cei care isi doresc o noua casa sau un nou acoperis oferim o gama
        completa si variata de sisteme complete de acoperisuri metalice, menite
        sa asigure un acoperis frumos si durabil pentru orice camin.
      </div>
    </div>
    <div class="about-container">
      <div class="about-title">Cu ce ne ocupam</div>
      <div class="about-content">
        Comercializarea sistemelor complete de acoperisuri din tabla , fabricate
        de firmele noastre partenere Viking Pruszynski, Blachotrapez si ARKADA,
        dar si depozit cu materiale necesare constructiilor precum si accesorii
        pentru acoperisuri.
      </div>
    </div>
    <div class="about-small">
      <div class="about-small-title">Firme partenere</div>
      <div class="about-firm-content">
        <div class="about-firm-container">
          <div class="about-img-container">
            <img :src="require('../assets/img/logo-viking.png')" alt="" />
          </div>
        </div>
        <div class="about-firm-container">
          <div class="about-img-container bl-container">
            <img :src="require('../assets/img/logo BL.svg')" alt="" />
          </div>
        </div>
        <div class="about-firm-container">
          <div class="about-img-container">
            <img :src="require('../assets/img/Arkada.png')" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    if(this.store.state.isMobile == false){
      window.EventBus.dispatch('aboutenter')
    }
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/imports";
.about {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
}

.about-container {
  width: 70%;
  height: fit-content;
  margin: 3vh auto 1vh auto;
  background: $mainLightShade;
  border-radius: 0.5em;
}

.about-small-title {
  font-size: 2em;
  text-align: center;
  width: 80%;
  margin: 1vh auto 0 auto;
  color: $mainColor;
  border-bottom: 1px solid $mainDarkAccent;
}
.about-small {
  width: 80%;
  height: 20vh;
  margin: auto;
}

.about-firm-content {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}

.about-firm-container {
  margin-top: 2vh;
}
.about-img-container {
  width: 200px;
  height: 87px;
  display: flex;
  align-items: center;
  padding: 0 3em;
  img {
    width: 100%;
    height: auto;
  }
}

.bl-container {
  width: 250px;
}

.about-title {
  width: 80%;
  margin: 1vh auto 0 auto;
  color: $mainColor;
  font-size: 2em;
  text-align: center;
  border-bottom: 1px solid $mainDarkAccent;
}

.about-content {
  font-size: 1.3em;
  padding: 1em 2em;
  text-align: justify;
  font-weight: 300;
  color: $mainDarkShade;
}

@media screen and(max-width: 854px) and(orientation: landscape) {
  .about {
    margin-bottom: 5em;
  }

  .about-container {
    margin-top: 1em;
  }

  .about-img-container {
    width: 150px;
  }

  .about-title {
    font-size: 1.3em;
  }

  .about-content {
    font-size: 1.1em;
  }

  .about-small {
    width: 90%;
  }

  .about-container {
    margin-bottom: 1em;
  }

  .about-small-title {
    font-size: 1.3em;
  }
}

@media screen and(max-width:414px) and(orientation: portrait) {
  .about {
    flex-flow: column;
    margin-bottom: 2em;
  }
  .about-container {
    width: 90%;
    margin: 2vh auto 0vh auto;
  }
  .about-title {
    font-size: 1.4em;
  }

  .about-content {
    font-size: 1.1em;
  }

  .about-small {
    margin: auto;
  }

  .about-small-title {
    font-size: 1.2em;
  }

  .about-firm-container {
    width: 65%;
    display: flex;
    justify-content: center;
  }

  .about-img-container {
    width: 120px;
    height: fit-content;
  }
}
</style>