import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import router from './router'
import ErabbitUI from 'erabbit-ui'
import 'erabbit-ui/packages/theme/index.less'
const pinia = createPinia()
pinia.use(piniaPersist)
createApp(App).use(pinia).use(router).use(ErabbitUI).mount('#app')
