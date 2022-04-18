import { createApp } from 'vue'
import App from './App.vue'
import UseQuery from "../src/pages/useQuery/index.vue"
import { createWebHistory, createRouter } from "vue-router"

const routes = [
    { path: '/useQuery', name: "UseQuery", component: UseQuery },
]
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})
createApp(App).use(router).mount('#app')
