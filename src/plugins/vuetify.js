import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

const myTheme = {
  primary: '#5c6bc0',
  primaryLight: '#8d98f2',
  primaryDark: '#23408e',
  secondary: '#26c6da',
  secondaryLight: '#6ff9ff',
  secondaryDark: '#0095a8',
  background: '#e0e0e0',
  backgroundLight: '#f5f3f3',
  backgroundDark: '#aeaeae',
  error: '#f44336',
  warning: '#ffc107',
  info: '#03a9f4',
  success: '#8bc34a',
};

export default new Vuetify({
  theme: {
    light: true,
    themes: {
      light: myTheme,
    },
  },
});
