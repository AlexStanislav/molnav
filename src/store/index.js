import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function detectMob() {
  const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i
  ];
  
  return toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem);
  });
}

export default new Vuex.Store({
  state: {
    isMobile: detectMob(),
    partners: [
      "https://vkp.ro/",
      "https://www.blacho.ro/",
      "https://depozitul-de-tabla-international.business.site/"
    ],
    whatsapp: '0745513497',
    fb: 'https://www.facebook.com/Molnav-Conprest-SRL-105820442195289',
    mail: 'molnav2022@gmail.com',
    mail1: 'c.mitrusciak@molnavconprest.ro',
    mail2: 'm.maioru@molnavconprest.ro',
    produse: {
      vk: [
        { name: "Țiglă Metalica Modulara", image: "VK-Tigla1.png", link: "https://vkp.ro/tigla-metalica-modulara/" },
        { name: "Țiglă Metalica", image: "VK-Tigla2.png", link: "https://vkp.ro/tigla-metalica/" },
        { name: "Sisteme Drenaj", image: "VK-Drenaj.png", link: "https://vkp.ro/sisteme-drenaj/" },
      ],
      bl: [
        { name: "Tablă similară cu șindrila", image: "BL-Tigla1.png", link: "https://www.blacho.ro/ro/produse/sindrila-metalica" },
        { name: "Țigla metalică", image: "BL-Tigla2.png", link: "https://www.blacho.ro/ro/produse/tigla-metalica" },
        { name: "Tablă trapezoidală - pentru fațade și acoperișuri", image: "BL-Tigla3.png", link: "https://www.blacho.ro/ro/produse/tabla-trapezoidala-fatade-si-acoperisuri" },
      ],
      ak: [
        { name: "Linella Smart", image: "AK-Gard1.png", link: "https://depozitul-de-tabla-international.business.site/posts/571271305613699698?hl=ro" },
        { name: "Țigla ARKADA Clasic", image: "AK-Tigla1.png", link: "https://depozitul-de-tabla-international.business.site/posts/5225695216334679007" },
        { name: "Țigla ARKADA Clasic", image: "AK-Tigla2.png", link: "https://depozitul-de-tabla-international.business.site/posts/25885621951971635" },
      ]
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
