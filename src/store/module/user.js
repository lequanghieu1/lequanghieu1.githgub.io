import { HTTP } from "../../API/http_common";
const state = {
    users: [],
    acc_present: {},
    spinner: false,
    is_login: false,
    login: [
        {
            id: 1,
            username: "user1",
            pass: "123",
            fullname: "Nguyễn Văn A",
            birthday: " 08 03 2001",
            email: "user1@gmail.com",
            role: "Admin",
        },
        {
            id: 2,
            username: "user2",
            pass: "123",
            fullname: "Nguyễn Văn B",
            birthday: "Mar 04 2000",
            email: "b@gmail.com",
            role: "User",
        },
    ],
}
const getters = {
    loading: state => state.spinner
}
const actions = {
    async loadUsers({ commit }) {
        await HTTP.get(`users`)
            .then((res) => { commit('SET_MANAGERS', res.data) });
    },
    usernameLogin({ commit }, data) {
        commit('LOGIN_USERNAME', data)
    },
    resetState({ commit }) {
        commit('RESET')
    },
}
const mutations = {
    SET_MANAGERS(state, users) {
        state.users = users
        state.is_login = false
    },
    LOADING(state, status) {
        state.users = status
    },
    RESET(state) {
        state.is_login = false
    },
    LOGIN_USERNAME(state, data) {
        let account;
        if (data.name) {
            account = state.login.filter(
                (element) =>
                    element.username === data.name && element.pass === data.pass
            );
        }
        else if (data.email) {
            account = state.login.filter(
                (element) =>
                    element.email === data.email && element.pass === data.pass
            );
        }
        if (account.length !== 0) {
            state.acc_present = account[0];
            state.is_login = true;
            localStorage.setItem("dataUser", JSON.stringify(state.acc_present));
        } else {
            alert("Sai tên đăng nhập hoặc mật khẩu");
            state.is_login = false;
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
