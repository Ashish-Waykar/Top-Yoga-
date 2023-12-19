<template>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <h1>Complete Payment of ₹500 For Get Enroll In Class  </h1>
    <a-row>
        <a-col :xs="24" :sm="24" :md="12" :lg="12" >
            <div class="container">
  <form>
    <div class="row">
        <p style="color:red">Note: Do Not Input Actual Confedentials, its only for demo purpose </p>
        <br>
      <h4>Account</h4>
      <div class="input-group input-group-icon" >
        <input type="text" placeholder="Full Name" v-model="full_name"/>
        <div class="input-icon"><i class="fa fa-user"></i></div>
      </div><br>
      
      <div class="input-group input-group-icon" >
        <input type="email" placeholder="Email Adress" v-model="email"/>
        <div class="input-icon"><i class="fa fa-envelope"></i></div>
      </div><br>
      
      
    </div>
    <br>

    <div class="row">
      <div class="col-half">
        <h4>Date of Birth</h4>
        <div class="input-group">
          <div class="col-third">
            <input type="text" placeholder="DD" v-model="DD"/>
          </div>
          <div class="col-third">
            <input type="text" placeholder="MM" v-model="MM"/>
          </div>
          <div class="col-third">
            <input type="text" placeholder="YYYY" v-model="YYYY"/>
          </div>
        </div>
      </div>
      
      <div class="col-half">
        <h4>Gender</h4>
        <div class="input-group" >
          <input id="gender-male" type="radio" name="gender" value="male" v-model="gender_male"/>
          <label for="gender-male">Male</label>
          <input id="gender-female" type="radio" name="gender" value="female" v-model="gender_female"/>
          <label for="gender-female">Female</label>
        </div>
      </div>
    </div>
    <br>

    <div class="row">
      <h4>Payment Details</h4>
       <br>
      <div class="input-group input-group-icon">
        <input type="text" placeholder="Card Number"  v-model="card_number"/>
        <div class="input-icon"><i class="fa fa-credit-card"></i></div>
      </div>
       <br>
      <div class="col-half">
        <div class="input-group input-group-icon">
          <input type="text" placeholder="Card CVC"  v-model="card_cvc"/>
          <div class="input-icon"><i class="fa fa-user"></i></div>
        </div>
      </div>
      <div class="col-half">
        <div class="input-group">
          <select v-model="expiry_month">
            <option value="Jan" >Jan</option>
            <option value="Feb">Feb</option>
            <option value="May">May</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="Jun">Jun</option>
            <option value="July">July</option>
            <option value="Aug">Aug</option>
            <option value="Sept">Sept</option>
            <option value="Oct">Oct</option>
            <option value="Nov">Nov</option>
            <option value="Dec">Dec</option>
          </select>
          <select v-model="expiry_year">
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
            <option value="2029">2029</option>
            <option value="2030">2030</option>
          </select>
        </div>
      </div>
    </div>
    <br>

    <div class="row">
      <h4>Terms and Conditions</h4>
      <div class="input-group">
        <input id="terms" type="checkbox"/>
        <label for="terms">I accept the terms and conditions for signing up to this service, and hereby confirm I have read the privacy policy.</label>
      </div>
    </div>

    <br>
    <a-button @click="onSubmit" type="primary" block style="color: white;background-color: orangered;height:50px;margin-bottom:40px"> Complete Payment</a-button>
    <br>
    <br>
    <p style="color:red">Note: Do Not Input Actual Confedentials, its only for demo purpose </p>

  </form>
</div>
                    </a-col>
                    <a-col :xs="24" :sm="24" :md="12" :lg="12" >
                        <br><br>
                        <div style="height: 100%; width: 100%; overflow: hidden;object-fit: cover;">
                            <!-- <img style="height: 100%;  object-fit: cover;" src="https://cdn.shopify.com/s/files/1/0077/7587/9266/files/lotuscrafts-hatha-yoga-uebungen_1024x1024.jpg?v=1576668676" alt="Hatha Yoga Image"> -->
    <!-- <img src="https://images.ganeshaspeaks.com/yoga/vinyasa-yoga.webp"  style="object-fit: fill;height: 100%;" alt="Vinyasa Yoga Image"> -->
    <!-- <img src="https://images.onlymyhealth.com/imported/images/2021/October/18_Oct_2021/power_Large.jpg"  style="width:100%;object-fit: fill;height: 100%;" alt="Vinyasa Yoga Image"> -->
    <img src="https://sleepiverse.com/assets/images/pexels-cliff-booth-4057839.webp"  style="object-fit: fill;height: 100%;" alt="Vinyasa Yoga Image">
</div>

                    </a-col>

    </a-row>

<br>
<br>

</template>
    <script>
import axios from 'axios';

export default{
    name: "purchase_yoga",
    data(){return {
        batchYoga:'',

        full_name:'',
        email:'',
        DD:'',
        MM:'',
        YYYY:'',
        gender_male:'',
        gender_female:'',
        card_number:'',
        card_cvc:'',
        expiry_month:'',
        expiry_year:'',

    };
},
    mounted(){
        this.batchYoga = this.$route.params.batch_yoga;
        console.log(this.batchYoga)
    },
    methods:{
       async onSubmit(){
        this.$store.commit('setIsLoading',true)

         const   formData={
                    full_name:this.full_name                ,
                    email:this.email,
                    DD:this.DD,
                    MM:this.MM,
                    YYYY:this.YYYY,
                    gender_male:this.gender_male,
                    gender_female:this.gender_female,
                    card_number:this.card_number,
                    card_cvc:this.card_cvc,
                    expiry_month:this.expiry_month,
                expiry_year:this.expiry_year
            }

            await axios
            .post("https://api.crekaa.com/yoga-app/api/v1/recive-payment/",formData)
                    .then(response => {
                        console.log(response);
                        console.log(response.data);

                        const toPath = this.$route.query.to || '/purchase-completed/'+this.batchYoga // home path
                        this.$router.push(toPath)
                    })
                    .catch(error => {
                        console.log(error)
                    })


            this.$store.commit('setIsLoading',false)
        }
    }
}
</script>
<style scoped>
/* 64ac15 */
*,
*:before,
*:after {
  box-sizing: border-box;
}
body {
  padding: 1em;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 15px;
  color: #b9b9b9;
  background-color: #e3e3e3;
}
h4 {
  color: #f0a500;
}
input,
input[type="radio"] + label,
input[type="checkbox"] + label:before,
select option,
select {
  width: 100%;
  padding: 1em;
  line-height: 1.4;
  background-color: #f9f9f9;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  -webkit-transition: 0.35s ease-in-out;
  -moz-transition: 0.35s ease-in-out;
  -o-transition: 0.35s ease-in-out;
  transition: 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;
}
input:focus {
  outline: 0;
  border-color: #bd8200;
}
input:focus + .input-icon i {
  color: #f0a500;
}
input:focus + .input-icon:after {
  border-right-color: #f0a500;
}
input[type="radio"] {
  display: none;
}
input[type="radio"] + label,
select {
  display: inline-block;
  width: 50%;
  text-align: center;
  float: left;
  border-radius: 0;
}
input[type="radio"] + label:first-of-type {
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
input[type="radio"] + label:last-of-type {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
input[type="radio"] + label i {
  padding-right: 0.4em;
}
input[type="radio"]:checked + label,
input:checked + label:before,
select:focus,
select:active {
  background-color: #f0a500;
  color: #fff;
  border-color: #bd8200;
}
input[type="checkbox"] {
  display: none;
}
input[type="checkbox"] + label {
  position: relative;
  display: block;
  padding-left: 1.6em;
}
input[type="checkbox"] + label:before {
  position: absolute;
  top: 0.2em;
  left: 0;
  display: block;
  width: 1em;
  height: 1em;
  padding: 0;
  content: "";
}
input[type="checkbox"] + label:after {
  position: absolute;
  top: 0.45em;
  left: 0.2em;
  font-size: 0.8em;
  color: #fff;
  opacity: 0;
  font-family: FontAwesome;
  content: "\f00c";
}
input:checked + label:after {
  opacity: 1;
}
select {
  height: 3.4em;
  line-height: 2;
}
select:first-of-type {
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
select:last-of-type {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
select:focus,
select:active {
  outline: 0;
}
select option {
  background-color: #f0a500;
  color: #fff;
}
.input-group {
  margin-bottom: 1em;
  zoom: 1;
}
.input-group:before,
.input-group:after {
  content: "";
  display: table;
}
.input-group:after {
  clear: both;
}
.input-group-icon {
  position: relative;
}
.input-group-icon input {
  padding-left: 4.4em;
}
.input-group-icon .input-icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 3.4em;
  height: 3.4em;
  line-height: 3.4em;
  text-align: center;
  pointer-events: none;
}
.input-group-icon .input-icon:after {
  position: absolute;
  top: 0.6em;
  bottom: 0.6em;
  left: 3.4em;
  display: block;
  border-right: 1px solid #e5e5e5;
  content: "";
  -webkit-transition: 0.35s ease-in-out;
  -moz-transition: 0.35s ease-in-out;
  -o-transition: 0.35s ease-in-out;
  transition: 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;
}
.input-group-icon .input-icon i {
  -webkit-transition: 0.35s ease-in-out;
  -moz-transition: 0.35s ease-in-out;
  -o-transition: 0.35s ease-in-out;
  transition: 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;
}
.container {
  max-width: 38em;
  padding: 1em 3em 2em 3em;
  margin: 0em auto;
  background-color: #fff;
  border-radius: 4.2px;
  box-shadow: 0px 3px 10px -2px rgba(0, 0, 0, 0.2);
}
.row {
  zoom: 1;
}
.row:before,
.row:after {
  content: "";
  display: table;
}
.row:after {
  clear: both;
}
.col-half {
  padding-right: 10px;
  float: left;
  width: 50%;
}
.col-half:last-of-type {
  padding-right: 0;
}
.col-third {
  padding-right: 10px;
  float: left;
  width: 33.33333333%;
}
.col-third:last-of-type {
  padding-right: 0;
}
@media only screen and (max-width: 540px) {
  .col-half {
    width: 100%;
    padding-right: 0;
  }
}
</style>