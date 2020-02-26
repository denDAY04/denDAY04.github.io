import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

const myThemes = {
  neon: {
    dark: {
      primary: '#0e0b16',
      secondary: '#a239ca',
      accent: '#4717f6',
      info: '#e7dfdd',
    },
    light: {
      primary: '#97618e',
      secondary: '#49274a',
      accent: '#f4dec8',
      info: '#f8eee7',
    },
  },
  warm: {
    dark: {
      primary: '#18121e',
      secondary: '#233237',
      accent: '#984b43',
      info: '#eac67a',
    },
    light: {
      primary: '#d7cec7',
      secondary: '#565656',
      accent: '#76323f',
      info: '#c09f80',
    },
  },
};

export default new Vuetify({
  theme: {
    dark: false,
    themes: myThemes.neon,
  },
});
