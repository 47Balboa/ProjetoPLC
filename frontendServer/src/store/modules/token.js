const state = {
    token: localStorage.getItem('access_token') || null , 
}

const getters = {
    getToken: state => state.token,
    loggedIn: state => {
        return state.token != null
    },
}



const mutations = {
    setToken: (state, token) => {state.token = token;localStorage.setItem('access_token',token)},
    removeToken: (state) => {state.token = null;localStorage.removeItem('access_token')}
}

export default {
    state,
    getters,
    mutations
}