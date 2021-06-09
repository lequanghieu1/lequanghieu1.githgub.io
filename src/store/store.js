import Vue from 'vue'
import Vuex from 'vuex'
import users from './module/user'
Vue.use(Vuex)

const storeData = {
   modules: { users }
}
const store = new Vuex.Store(storeData)

export default store
