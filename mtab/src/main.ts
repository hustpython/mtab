import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import Directive from '@/directive'

const app = createApp(App)
app.use(Directive)
app.mount('#app')
