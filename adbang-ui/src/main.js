import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css'
import NavAndSide from './components/NavAndSide.vue';


const app = createApp(App);

app.component('NavAndSide', NavAndSide)

app.use(router);
app.mount('#app');
