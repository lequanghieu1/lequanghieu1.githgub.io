import Vue from 'vue'
import Vuex from 'vuex'
import users from './module/user'
import vali from './module/validate'
Vue.use(Vuex)

const storeData = {
   modules: { users, vali }
}
const store = new Vuex.Store(storeData)

export default store
