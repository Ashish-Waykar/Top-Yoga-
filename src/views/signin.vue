<template>
    <div class="signin" style="padding:10px">
        <br>
        <br>           
         <!-- <a-col :sm="24" :xs="24" :md="0" :lg="0" style="margin-top:40px;margin-bottom:20px;">
        <router-link to="/"
                        style="text-align:start;font-size:40px;font-weight:bold;margin-left:-20px;color:var(--text-color)">
                        <a-label>Crekaa</a-label>
                    </router-link>
                                </a-col> -->
        <a-row style="height:90vh">
           
            <a-col :sm="24" :md="20" :lg="20" :xs="24"
                style="margin:auto; max-width:400px;margin-top:50px;background-color: var(--hover-slide-button);padding:20px;border-radius:10px">
            
                <h1 class="text-xl font-semibold md:text-2xl" style="text-align: start;">Sign in</h1>
                    <p class="text-secondary" style="text-align: start;"> Don't have account ? <router-link to="/signup">Click Here</router-link> to SignUp.
                    </p>

                <a-form @submit.prevent="SubmitForm">

                    <label style="text-align:start">
                        <h3> Email</h3>
                    </label>
                    <a-input v-model:value="username" style="height:45px;font-size:var(--fa-16)" required />
                    <br>
                    <br><label style="text-align:start">
                        <h3> Password</h3>
                    </label>
                    <a-input-password v-model:value="password" style="height:45px;font-size:var(--fa-16)" required/>
                    <br>
                    <br>
                    <!-- <a-form-item name="remember" >
                        <a-checkbox v-model="remember">Remember me</a-checkbox>
                    </a-form-item> -->

                   
                    <a-form-item>
                        <a-button block size="large" style="border-radius:5px" type="primary"
                            html-type="submit">Submit</a-button>
                    </a-form-item>


                    <a-form-item v-if="errors.length">
                        <p v-for=" error in errors " v-bind:key="error">{{ error }}</p>
                    </a-form-item>


                    <!-- <a-button type="submit" class="btn" block style="
            height:45px;border-radius:5px;background-color: rgb(104, 115, 237);">
            <a-row>


                <a-col :sm="4" :md="4">
                    <svg width="37px" height="37px" viewBox="0 0 46 46" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
                        <defs>
                            <filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox"
                                id="filter-1">
                                <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                                <feGaussianBlur stdDeviation="0.5" in="shadowOffsetOuter1" result="shadowBlurOuter1">
                                </feGaussianBlur>
                                <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.168 0"
                                    in="shadowBlurOuter1" type="matrix" result="shadowMatrixOuter1"></feColorMatrix>
                                <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter2"></feOffset>
                                <feGaussianBlur stdDeviation="0.5" in="shadowOffsetOuter2" result="shadowBlurOuter2">
                                </feGaussianBlur>
                                <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.084 0"
                                    in="shadowBlurOuter2" type="matrix" result="shadowMatrixOuter2"></feColorMatrix>
                                <feMerge>
                                    <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                                    <feMergeNode in="shadowMatrixOuter2"></feMergeNode>
                                    <feMergeNode in="SourceGraphic"></feMergeNode>
                                </feMerge>
                            </filter>
                            <rect id="path-2" x="0" y="0" width="40" height="40" rx="2"></rect>
                            <rect id="path-3" x="5" y="5" width="38" height="38" rx="1"></rect>
                        </defs>
                        <g id="Google-Button" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"
                            sketch:type="MSPage">
                            <g id="9-PATCH" sketch:type="MSArtboardGroup" transform="translate(-728.000000, -219.000000)">
                            </g>
                            <g id="btn_google_dark_pressed" sketch:type="MSArtboardGroup"
                                transform="translate(-1.000000, -1.000000)">
                                <g id="button" sketch:type="MSLayerGroup" transform="translate(4.000000, 4.000000)"
                                    filter="url(#filter-1)">
                                    <g id="button-bg">
                                        <use fill="#3367D6" fill-rule="evenodd" sketch:type="MSShapeGroup"
                                            xlink:href="#path-2"></use>
                                        <use fill="none" xlink:href="#path-2"></use>
                                        <use fill="none" xlink:href="#path-2"></use>
                                        <use fill="none" xlink:href="#path-2"></use>
                                    </g>
                                </g>
                                <g id="handles_square" sketch:type="MSLayerGroup"></g>
                                <g id="button-bg-copy">
                                    <use fill="#EEEEEE" fill-rule="evenodd" sketch:type="MSShapeGroup" xlink:href="#path-3">
                                    </use>
                                    <use fill="none" xlink:href="#path-3"></use>
                                    <use fill="none" xlink:href="#path-3"></use>
                                    <use fill="none" xlink:href="#path-3"></use>
                                </g>
                                <g id="logo_googleg_48dp" sketch:type="MSLayerGroup"
                                    transform="translate(15.000000, 15.000000)">
                                    <path
                                        d="M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z"
                                        id="Shape" fill="#4285F4" sketch:type="MSShapeGroup"></path>
                                    <path
                                        d="M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z"
                                        id="Shape" fill="#34A853" sketch:type="MSShapeGroup"></path>
                                    <path
                                        d="M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z"
                                        id="Shape" fill="#FBBC05" sketch:type="MSShapeGroup"></path>
                                    <path
                                        d="M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z"
                                        id="Shape" fill="#EA4335" sketch:type="MSShapeGroup"></path>
                                    <path d="M0,0 L18,0 L18,18 L0,18 L0,0 Z" id="Shape" sketch:type="MSShapeGroup"></path>
                                </g>
                            </g>
                        </g>
                    </svg></a-col>
                <a-col :sm="20" :md="20" style="text-align:center;">
                    <div style="margin-top:3px;text-align:center;">
                        <h6 style="margin-top: 8px;color:white;font-size: var(--fa-12);font-weight:bold">&nbsp;&nbsp;&nbsp;Sign
                            in with Google</h6>
                    </div>
                </a-col>
            </a-row>
        </a-button> -->


                </a-form>
            </a-col>
            <a-col :sm="0"  :lg="5" :md="5" :xs="0" style="height:100%;">
                <div class="divider-container">
                    <a-divider type="vertical"
                        style="border-color:var(--devide-color);height:100%;width:1px"></a-divider>
                        
                        <br>
                    <router-link to="/"
                        style="font-size:var(--fa-22);font-weight:bold;text-align:start;margin-left:-20px;color:var(--text-color)">
                        <a-label>Top Yoga</a-label>
                    </router-link>
                    <br>

                    <a-divider type="vertical" style="border-color:var(--devide-color);height:100%;width:1px"></a-divider>
                </div>

            </a-col>
        </a-row>




    </div>
</template>
<script>
import axios from 'axios'
import { notification } from 'ant-design-vue';
export default {
    name: "sign",
    
created(){
    document.title = "Signup / Register - Crekaa";
  },

    data() {
        return {
            username: '',
            password: '',
            password2: '',
            errors: [],
            remember: false,

            credentials:null,

        }
    },
    beforeCreate() {
        this.$store.commit('initializeStore');

        const token = localStorage.getItem('token');

        if (token) {
            axios.defaults.headers.common['Authorization'] = "token " + token;
        } else {
            axios.defaults.headers.common['Authorization'] = "";
        }
    },

    mouted() {
        document.title = "Signin | Crekaa"
    },
    methods: {

         
        async SubmitForm() {
            this.$store.commit('setIsLoading',true)

            axios.defaults.headers.common['Authorization'] = ""
            localStorage.removeItem('token')

            this.errors = []

            if (this.username === '') {
                // this.errors.push('The username Is missing !')
                notification['error']({
                    message: 'Email Is Empty!',
                    description:
                        `The Email Is missing !`,
                    placement: 'bottomRight',
                });
                this.$store.commit('setIsLoading',false)
            }

            if (this.password === '') {
                // this.errors.push('The password Is missing !')
                notification['error']({
                    message: 'Password Is Empty!',
                    description:
                        `The password Is missing !`,
                    placement: 'bottomRight',
                });
                this.$store.commit('setIsLoading',false)
            }

            if (!this.errors.length) {
                const formData = {
                    username: this.username,
                    password: this.password,
                }

                await axios
                    .post("https://api.crekaa.com/v1/api/login/", formData)
                    .then(response => {
                        const token = response.data['token']
                        // console.log("login success ")
                        // console.log(token)

                        this.$store.commit('setToken', token)
                        axios.defaults.headers.common["Authorization"] = "Token " + token

                        localStorage.setItem("token", token)
                        // console.log("settled token localstorage success ")
                        // window.location.reload();
                        //    const  toPath =this.$route.query.to || '/' // home path
                        const toPath = this.$route.query.to || '/my-dashboard' // home path
                        this.$router.push(toPath)
                    })
                    .catch(error => {
                        if (error.response) {
                            for (const property in error.response.data) {
                                this.errors.push(`${property}:${error.response.data[property]}`)
                            }
                            // console.log(JSON.stringify(error.response.data))
                        } else if (error.message) {
                            this.errors.push('Something went wrong. Please Try Again ')
                            // console.log(JSON.stringify(error))
                        }
                    })

                   await axios
                    .post("https://api.crekaa.com/v1/api/user-details/")
                    .then(response => {
                        // console.log(response);
                        // console.log(response.data);

                        const discription = response.data['0']['discription'];
                        const city = response.data['0']['city'];
                        const state = response.data['0']['state'];
                        const country = response.data['0']['country'];
                        const profile_picture = response.data['0']['profile_picture'];
                        const profile_background = response.data['0']['profile_background'];
                        const user = response.data['0']['user'];
                        const userData = {
                            discription:discription,
                            city:city,
                            state:state,
                            country:country,
                            profile_picture:profile_picture,
                            profile_background:profile_background,
                            user:user,
                        };

                        // console.log("------------------------------------userData------------------------------------", userData);
                        this.$store.commit('addUserDetails', userData);
                        // console.log("--------------------------------------Done---------------------------------");
                        // console.log("the stored data : ",this.$store.state.userDetils)
                        // console.log("the stored User data : ",this.$store.state.userDetils['0']['user'])
                        // console.log("the stored User data : ",this.$store.state.userDetils[0].user.first_name);
                        
                    })
                    .catch(error => {
                            notification['error']({
                                message: 'Signup Failed',
                                description:'Unable To Login With Provided Credentials...',
                                placement: 'bottomRight',
                            });

                            // console.log("===========error at user details")                        
                            // console.log(JSON.stringify(error.response.data))
                            //     console.log(JSON.stringify(error))
                    })


            this.$store.commit('setIsLoading',false)

            }
        }

    }
}
</script>
<style scoped>
.divider-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    /* Make sure the container takes full height */
}

.centered-label {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    /* Make sure the label container takes full height */
}</style>