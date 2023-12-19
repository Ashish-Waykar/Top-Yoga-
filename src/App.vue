<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> | 
     <router-link to="/about">About</router-link>
  </nav> -->
  <div v-show=" this.$store.state.isLoading" style="z-index:2"> 
    loading 
  </div>
  <navbar_comp style="position: absolute;
  width: 100%;
  margin:auto;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  padding: 1rem 0;
  z-index: 7;"/>

  <router-view/>
</template>

<script>
import axios from 'axios'
import navbar_comp from '@/components/navbar.vue'
export default{
   components: {
    navbar_comp
  },
  mounted(){

this.$store.commit('initializeStore');

const token = localStorage.getItem('token');

if (token) {
    axios.defaults.headers.common['Authorization'] = "token " + token;
    this.fetchUserProfileDetails()
} else {
    axios.defaults.headers.common['Authorization'] = "";
}

},
methods: {
    async fetchUserProfileDetails(){
    this.$store.commit('setIsLoading', true)

    axios.defaults.headers.common['Authorization'] = "token "+ localStorage.getItem('token');
    
    // console.log(localStorage.getItem('token'))
    await axios
        .post("https://api.crekaa.com/v1/api/user-details/")
        .then((response)=>{
            this.user_details=response.data
            this.$store.commit('addUserDetails', response.data);

            console.log("=============-------------============-====-=-===-=-=-=-=-")
            console.log(this.user_details)

        }).catch((error)=>{
            console.log("error Occured while fetching User Data ")
        })
    this.$store.commit('setIsLoading', false)

    }
} 
}
</script>

<style lang="scss">
* { margin: auto !important; }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0
}
html{
  padding:0
}

// nav {
//   // padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
