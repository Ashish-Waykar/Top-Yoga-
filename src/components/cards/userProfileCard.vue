<template>
    <a-row>
        <a-col :sm=24 :xs="24" :md="24" :lg="24" style="padding:20px">
        
            <!-- {{ud[0]}} -->
        <div class="card" style="width: 100%;">
            <div style="display: flex;justify-content: center;">

                <img :src="ud[0].profile_background" style="width:100%;border-radius:10px;height:150px;object-fit: cover;" alt="">
                <img :src="ud[0].profile_picture" class="card-img-top" alt="...">
            </div>
            <br>
            <br>
            <br>
  <div class="card-body">
    <h5 class="card-title"> {{ ud[0].user.first_name }} {{ ud[0].user.last_name }} </h5>
    <div style="text-align: start;">

        <a-space>
            <ion-icon name="mail-open-outline"></ion-icon>
            <h4>{{ ud[0].user.email }}</h4>
        </a-space>
        <br>
        <a-space>
            <ion-icon name="call-outline"></ion-icon>
            <h4>{{ ud[0].user.phone_number }}</h4>
        </a-space>
    <br>
    <a-space>
        <ion-icon name="id-card-outline"></ion-icon>
        <h4>{{ ud[0].user.username }}</h4>
    </a-space>
    <br>
    <a-space>
        <ion-icon name="location-outline"></ion-icon>
        <h4>{{ ud[0].country }}</h4>
    </a-space>
</div>
    <br>
    <a-button type="primary" @click="logout" >Logout</a-button>
  </div>
</div>
        
        </a-col>
        <a-col :sm=24 :xs="24" :md="16" :lg="18">
        <!-- get the use job details here -->
        </a-col>
    </a-row>

</template>
<script>
import axios from 'axios'
// import VueCookies from 'vue-cookies';

export default {
    name:"userProfileCard",
    created(){
        // document.head.title="Admin Boulotman Create Job Opportunity "
    },
    mounted(){
        // this.fetchUserProfileDetails()
    },
    methods: {
        // logout the user
        logout() {
            axios.defaults.headers.common["Authorization"] = ""

            localStorage.removeItem("token")
            localStorage.removeItem("username")
            localStorage.removeItem("userid")

            this.$store.commit('removeToken')

            this.$router.push('/')
            this.$store.commit('removeUserDetails')
            // console.log("removal of userDetails")
            // console.log(this.$store.state.userDetils)
        },
            // async fetchUserProfileDetails(){
            //     this.$store.commit('setIsLoading', true)
            //     await axios
            //     .post("URL_here",data)
            //     .then((response)=>{
            //         console.log(response.data)
            //     }).catch((error)=>{
            //         console.log("error Occured ")
            //     })
            //     this.$store.commit('setIsLoading', false)
            // }
    },
    props:{
        ud:Object
    }
} 

</script>
<style scoped>

.card-img-top {
    width: 80px;
height: 80px;
position: absolute;
/* left: 110%; */
align-self: center;
top:150px;

  border-radius: 100%;
  /* margin: auto; */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
.card {
  padding: 1.5em 0.5em 0.5em;
  width:100%;
  text-align: center;
  border-radius: 2em;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}
.card-title {
  font-weight: bold;
  font-size: 1.5em;
}


</style>

           