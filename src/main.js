import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// antdesign
import Antd from 'ant-design-vue';
// use css from antjs 
import 'ant-design-vue/dist/reset.css';
import axios from 'axios'

createApp(App).use(store).use(Antd).use(router,axios).mount('#app')
