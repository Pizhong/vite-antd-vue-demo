import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import myComponents from './components'
// import 'ant-design-vue/dist/antd.css';



import { Button } from 'ant-design-vue';

const app = createApp(App)
app.use(Button)
app.use(myComponents)
app.use(router)
app.use(store)
app.mount('#app')
