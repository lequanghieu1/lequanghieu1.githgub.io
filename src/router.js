import Home from './components/Home.vue'
import User from './components/User.vue'
import Index from './components/index.vue'
import Detail from './components/detail.vue'
import Vee from './components/VeeHome.vue'
import Vuetify from './components/Vuetify.vue'
export const routes = [
    { path: '/', name: 'homepage', component: Home },
    { path: '/vee', name: 'vee', component: Vee },
    { path: '/vuetify', name: 'vuetify', component: Vuetify },
    {
        path: '/user', name: 'user', component: Index, children: [
            { path: '', name: 'index', component: User },
            { path: 'info', name: 'info', component: Detail },
        ]
    }
]