<template>
    <div class="partners">
        <div class="partners-title">Partenerii nostri</div>
        <div class="partners-content">
            <div class="partner-container">
                <div class="partner-img">
                    <img :src="require('../assets/img/logo-viking.png')" alt="">
                </div>
                <div class="partner-text">
                    SC Viking Profil SRL este compania românească ce face parte din grupul Blachy Pruszyński
                </div>
            </div>
            <div class="partner-container">
                <div class="partner-img bl-img">
                    <img :src="require('../assets/img/logo BL.svg')" alt="">
                </div>
                <div class="partner-text">
                    Producător modern de învelitori pentru acoperiș și fațade
                </div>
            </div>
            <div class="partner-container">
                <div class="partner-img">
                    <img :src="require('../assets/img/Arkada.png')" alt="">
                </div>
                <div class="partner-text">
                    Producător acoperisuri tip tigla metalica si garduri metalice din Brasov.
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
@import "@/assets/scss/imports";
.partners-title{
    font-size: 2em;
    color: $mainColor;
    border-bottom: 1px solid $mainDarkAccent;
    text-align: center;
    width: 50%;
    margin: 5vh auto 0 auto;
} 

.partners-content{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    margin-top: 5em;
}

.partner-container{
    display: flex;
    flex-flow: column;
    align-items: center;
}

.partner-img{
    width: 300px;
    height: 129px;
    display: flex;
    align-items: center;
    img{
        width: 100%;
        height: auto;
    }
}

.bl-img{
    width: 400px;
}

.partner-text{
    width: 50%;
    font-size: 1.3em;
    text-align: center;
    color: $mainColor;
    font-weight: bold;
}

@media screen and(max-width:414px) and(orientation: portrait){
    .partners-title{
        width: 70%;
        font-size: 1.4em;
    }

    .partner-img{
        width: 200px;
        height: 100px;
    }

    .partner-text{
        font-size: 1.2em;
    }
    .partners-content{
        margin-top: 1em;
        margin-bottom: 5em;
    }
}

</style>