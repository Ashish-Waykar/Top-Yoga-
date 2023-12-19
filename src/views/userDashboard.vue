<template>
    <a-modal v-model:open="open_showModalPurchasePlan" title="Select Batch & Iniciate Your Plan" @ok="handleOk_showModalPurchasePlan">
      
        <div class="flex container">
      <div class="upcoming-classes-box">
        <strong>NEXT</strong>
        <h4>Upcoming Classes</h4>
        <a-radio-group v-model:value="selected_purchase">

    <a-radio :style="radioStyle" value="Hatha-Yoga"> <tr>
            <td><img src="https://onclickwebdesign.com/wp-content/uploads/stopwatch.png" alt="Stopwatch" /></td>
            <td>Hatha Yoga</td>
            <td>6:00 AM - 7:00 AM</td>
          </tr></a-radio>
    <a-radio :style="radioStyle" value="Vinyasa-Yoga"><tr>
            <td><img src="https://onclickwebdesign.com/wp-content/uploads/stopwatch.png" alt="Stopwatch" /></td>
            <td>Vinyasa Yoga</td>
        <td>7:00 AM - 8:00 AM</td>
          </tr></a-radio>
    <a-radio :style="radioStyle" value="Power-Yoga"> <tr>
            <td><img src="https://onclickwebdesign.com/wp-content/uploads/stopwatch.png" alt="Stopwatch" /></td>
            <td>Power Yoga</td>
        <td>8:00 AM - 9:00 AM</td>
          </tr>
</a-radio>
    <a-radio :style="radioStyle" value="Evening-Yoga"><tr>
            <td><img src="https://onclickwebdesign.com/wp-content/uploads/stopwatch.png" alt="Stopwatch" /></td>
            <td>Evening Yoga</td>
        <td>5:00 PM - 6:00 PM</td>
          </tr>
      <!-- <a-input v-if="value === 4" style="width: 100px; margin-left: 10px" /> -->
    </a-radio>
  </a-radio-group>
        <table>
        </table>
        
    <br>
    <br>
    <br>
        <p>Note: You Change your classes for anytime online but, your chenges will applied from next month. </p>
      </div>

    </div>


    </a-modal>
    <a-row style="height:100vh;">
        <a-col :xs="24" :sm="24" :md="6" :lg="6" style="background:rgba(220, 226, 255, 0.442); height:100%">
            <br><br><br><br><br><br><br><br><br><br>
            <userProfileCard v-if="user_details.length" v-bind:ud="user_details" />
        </a-col>
        <a-col :xs="24" :sm="24" :md="18" :lg="18" style="background:rgb(255, 235, 235);height:100%">
            <br><br><br><br><br><br><br>
            <a-row>
                <a-col :xs="4" :sm="4" :md="4" :lg="4" style="background:rgb(255, 213, 213)">
                    <a-card class="card-planings"  @click="showModalPurchasePlan">
                        +
                        <h1> Purchase plan </h1>
                    </a-card>

                </a-col>
                <!-- <a-col :xs="4" :sm="4" :md="4" :lg="4" style="background:rgb(255, 213, 213)">
                    <a-card class="card-planings">
                        +
                        <h1> Change Timings </h1>
                    </a-card>

                </a-col>
                <a-col :xs="4" :sm="4" :md="4" :lg="4" style="background:rgb(255, 213, 213)">
                    <a-card class="card-planings">
                        +
                        <h1> View Planings</h1>
                    </a-card>

                </a-col>
                <a-col :xs="4" :sm="4" :md="4" :lg="4" style="background:rgb(255, 213, 213)">
                    <a-card class="card-planings">
                        +
                        <h1> Upcoming Events </h1>
                    </a-card>

                </a-col> -->
            </a-row>

        </a-col>
    </a-row>
</template>
<script>
import axios from 'axios'

import userProfileCard from '@/components/cards/userProfileCard.vue'
export default {
    name: "UserDashboard",
    data() {
        return {
            selected_purchase:'Hatha-Yoga',
            user_details: [],
            open_showModalPurchasePlan:false,
        }
    }, created() {
        document.head.title = "My Profile"
    },
    components: {
        userProfileCard
    },
    mounted() {
        this.fetchUserProfileDetails()


    },
    methods: {

        showModalPurchasePlan (){
  this.open_showModalPurchasePlan = true;

},
 handleOk_showModalPurchasePlan () {
    console.log(this.selected_purchase)

  this.open_showModalPurchasePlan = false;
  const toPath = this.$route.query.to || '/purchase-yoga/'+this.selected_purchase // home path
                        this.$router.push(toPath)
},


        async fetchUserProfileDetails() {
            this.$store.commit('setIsLoading', true)

            axios.defaults.headers.common['Authorization'] = "token " + localStorage.getItem('token');

            // console.log(localStorage.getItem('token'))
            await axios
                .post("https://api.crekaa.com/v1/api/user-details/")
                .then((response) => {
                    this.user_details = response.data
                    this.$store.commit('addUserDetails', response.data);

                    // console.log("=============-------------============-====-=-===-=-=-=-=-")
                    // console.log(this.user_details)

                }).catch((error) => {
                    console.log("error Occured while fetching User Data ")
                })
            this.$store.commit('setIsLoading', false)

        }
    }
}
</script>
<style scoped >
.card-planings:hover {
    background-color: rgb(167, 167, 167);
    cursor: pointer;
}
</style>