<template>
  <div class="about">
    <div class="about-container">
      <div class="about-title">Despre noi</div>
      <div class="about-content">
        Nostrud deserunt nostrud reprehenderit mollit quis qui tempor ad sit.
        Nisi aute non consectetur dolore et irure. Fugiat in aute do
        reprehenderit ipsum exercitation commodo reprehenderit commodo minim
        amet minim id. Laboris exercitation sunt eiusmod mollit magna sunt
        incididunt.
      </div>
    </div>
    <div class="about-container">
      <div class="about-title">Cu ce ne ocupam</div>
      <div class="about-content">
        Nostrud deserunt nostrud reprehenderit mollit quis qui tempor ad sit.
        Nisi aute non consectetur dolore et irure. Fugiat in aute do
        reprehenderit ipsum exercitation commodo reprehenderit commodo minim
        amet minim id. Laboris exercitation sunt eiusmod mollit magna sunt
        incididunt.
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
export default {};
</script>
<style lang="scss">
@import "@/assets/scss/imports";
.about {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}

.about-container {
  width: 40%;
  height: fit-content;
  margin: 8vh 1vh;
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


@media screen  and(max-width: 854px) and(orientation: landscape){

  .about{
    margin-bottom: 5em;
  }

  .about-container{
    margin-top: 1em;
  }

  .about-img-container{
    width: 150px;
  }

  .about-title{
    font-size: 1.3em;
  }

  .about-content{
    font-size: 1.1em;
  }

  .about-small{
    width: 90%;
  }

  .about-container{
    margin-bottom: 1em;
  }

  .about-small-title{
    font-size: 1.3em;
  }
}

@media screen and(max-width:414px) and(orientation: portrait){
  .about{
    flex-flow: column;
    margin-bottom: 2em;
  }
  .about-container{
    width: 90%;
    margin: 2vh auto 0vh auto;
  }
  .about-title{
    font-size: 1.4em;
  }

  .about-content{
    font-size: 1.1em;
  }

  .about-small{
    margin: auto;
  }

  .about-small-title{
    font-size: 1.2em;
  }

  .about-firm-container{
    width: 65%;
    display: flex;
    justify-content: center;
  }

  .about-img-container{
    width: 120px;
    height: fit-content;
  }
}
</style>