import { createStore } from 'vuex'

export default createStore({
  state: {
    // screen mode 
    isDarkModeActivated: false,
    // Authentication
    isAuthenticated: false,
    token: '',
    isLoading: false,
    userDetils:[],
    primary_color:'',
  },
  getters: {
  },
  mutations: {
    // change Main THeme Color
    changeMainThemeColor(state,color_code) {
      state.primary_color = color_code;
    },

    
    
    // change mode from light to dark
    toggleDarkModeTrue(state) {
      state.isDarkModeActivated = true;
    },
    // change mode from dark to light
    toggleDarkModeFalse(state) {
      state.isDarkModeActivated = false;
    },
    // Authentication
    initializeStore(state) {
      if(localStorage.getItem('token')){
        state.token= localStorage.getItem('token')
        state.isAuthenticated=true
      }else{
        state.token=''
        state.isAuthenticated=false
      }
    },
    removeUserDetails(state) {
      state.userDetils.pop(0)
    },  
    addUserDetails(state, details_logged_user) {
      state.userDetils.push(details_logged_user)
      // state.isAuthenticated = true
    },  
    setIsLoading(state, status) {
      state.isLoading = status
    },
    setToken(state, token) {
        state.token = token
        state.isAuthenticated = true
    },  
    removeToken(state) {
        state.token = ''
        state.isAuthenticated = false
    },
  },
  actions: {
  },
  modules: {
  }
})
