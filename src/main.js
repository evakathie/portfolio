import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/index.scss'


const app = createApp(App)

const modules = import.meta.glob('./components/ui/*.vue', { eager: true })

Object.entries(modules).forEach(([path, module]) => {
  const component = module.default
  app.component(component.name, component)
})

app.use(router)

app.mount('#app')