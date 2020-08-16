import Vue from 'vue';
import Meta from 'vue-meta';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';

Vue.config.productionTip = false;

Vue.filter('dateFormat', (date) => {
  const inFormat = /(\d{4})-(\d{2})/;
  const matches = inFormat.exec(date);
  if (!matches) {
    return '';
  }

  const year = matches[1];
  const month = matches[2];
  let monthString = '';
  switch (month) {
    default:
      break;
    case '01':
      monthString = 'Jan';
      break;
    case '02':
      monthString = 'Feb';
      break;
    case '03':
      monthString = 'Mar';
      break;
    case '04':
      monthString = 'Apr';
      break;
    case '05':
      monthString = 'May';
      break;
    case '06':
      monthString = 'Jun';
      break;
    case '07':
      monthString = 'Jul';
      break;
    case '08':
      monthString = 'Aug';
      break;
    case '09':
      monthString = 'Sep';
      break;
    case '10':
      monthString = 'Oct';
      break;
    case '11':
      monthString = 'Nov';
      break;
    case '12':
      monthString = 'Dec';
      break;
  }
  return `${monthString} ${year}`;
});
Vue.use(Meta);

window.eventBus = new Vue();

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
