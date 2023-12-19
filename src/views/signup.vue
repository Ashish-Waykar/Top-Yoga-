<template>
    <br>
    <br>
    <br>
    <br>
    <a-row type="flex" justify="center" style="text-align: start;">
        <a-col :sm="24" :xs="24" :md="24" :lg="24" style="margin-top:40px;margin-bottom:40px;">
            <section class="justify-center px-4 md:px-0 md:flex md:w-2/3 md:border-r">
                <div class="w-full max-w-sm py-4 mx-auto my-auto min-w-min md:py-9 md:w-7/12">
                    <h1 class="text-xl font-semibold md:text-2xl">Sign up</h1>
                    <p class="text-secondary">Already have an account?
                        <a class="font-medium" href="/signin/" style="color:var(--primary)">Sign in</a>.
                    </p>
<!-- <h1>{{ dob }}</h1> -->
                    <div class="my-4">
                        <a-form class="new_user" id="new_user" autocomplete="off" @submit.prevent="SubmitForm">
                            <div class="flex flex-col md:flex-row-reverse mb-3">
                                <div>
                                    <label for="user_last_name">Last name</label>
                                    <input  v-model="last_name"
                                        style=" z-index:0;border:1px solid grey;height:35px;width: 100%;font-size:var(--fa-12); border-radius: 7px; background: var(--card-color);"
                                        autofocus="autofocus" required="required" type="text"  name="last_name"
                                        id="last_name" />
                                </div>
                                <div>&nbsp;&nbsp;</div>
                                <div>
                                    <label for="user_first_name">First name</label>
                                    <input  v-model="first_name"
                                        style=" z-index:0;border:1px solid grey;height:35px;width: 100%;font-size:var(--fa-12); border-radius: 7px; background: var(--card-color);"
                                        autofocus="autofocus" required="required" type="text"  name="first_name"
                                        id="first_name" />
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="phone_number">Phone Number</label>
                                <input
                                    v-model="phone_number"
                                    style="z-index: 0; border: 1px solid grey; height: 35px; width: 100%; font-size: var(--fa-12); border-radius: 7px; background: var(--card-color);"
                                    required="required"
                                    type="number"
                                    name="phone_number"
                                    id="phone_number"
                                    @input="validatePhoneNumber"
                                    />
                            </div>
                            <div class="mb-3">
                                <label for="user_email">Email</label>
                                <input  v-model="email"
                                    style=" z-index:0;border:1px solid grey;height:35px;width: 100%;font-size:var(--fa-12); border-radius: 7px; background: var(--card-color);"
                                    autofocus="autofocus" autocomplete="email" required="required" type="email" 
                                    name="email" id="user_email" />
                            </div>
                            <div class="mb-3">
                                <label for="dob">Date Of Birth</label>
                                <a-date-picker
    autofocus="autofocus"
    required="required"
    type="date"
    name="dob"
    id="user_email"
    format="YYYY/MM/DD"
    v-model:value="dob"
    style="z-index:0;border:1px solid grey;height:35px;width: 100%;font-size:var(--fa-12);border-radius: 7px;"
  /></div>
                            <div class="mb-1">
                                <auto-check
                                    csrf="vvwb-Vp8bhyvasBIQ-eoiaJScYzVWtb6vNhsPAJrzoKhdB48sN8E2f-YCh3rXRGRGVG1QQCJH_IP2teEwaMLrw"
                                    src="/users/password-strength" required="">
                                    <div class="flex items-center justify-between leading-none mb-1.5">
                                        <label class="mb-0" for="user_password">Password</label>
                                        <div class="js-password-strength-container" aria-live="polite">
                                            <span class="flex items-center text-sm password-strength-group"
                                                :data-strength=strength>
                                                <div class="">
                                                    <div class="password-strength-message mb-2">
                                                        <div class="message-item">
                                                            <div class="flex items-center text-sm">
                                                                <p>Weak </p>&nbsp;
                                                                <svg width="14" height="14" viewBox="0 0 100 100">
                                                                    <circle cx="50" cy="50" r="40"
                                                                        stroke="var(--border-action)" stroke-width="15"
                                                                        fill="transparent"></circle>
                                                                    <circle cx="50" cy="50" r="40" stroke="var(--red-600)"
                                                                        stroke-width="15" fill="var(--red-600)"></circle>
                                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                                        d="M72.3156 38.0312C73.6824 36.6644 73.6824 34.4483 72.3156 33.0815C70.9488 31.7146 68.7327 31.7146 67.3659 33.0815L41.5565 58.8909L33.4247 50.7591C32.0579 49.3923 29.8418 49.3923 28.475 50.7591C27.1082 52.126 27.1082 54.3421 28.475 55.7089L39.0816 66.3155C40.4484 67.6823 42.6645 67.6823 44.0313 66.3155C44.1514 66.1955 44.2609 66.0689 44.3598 65.9369C44.4918 65.8379 44.6184 65.7284 44.7384 65.6084L72.3156 38.0312Z"
                                                                        fill="white"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div class="message-item">
                                                            <div class="flex items-center text-sm">
                                                                <p>Okay </p>&nbsp;
                                                                <svg width="14" height="14" viewBox="0 0 100 100">
                                                                    <circle cx="50" cy="50" r="40"
                                                                        stroke="var(--border-action)" stroke-width="15"
                                                                        fill="transparent"></circle>
                                                                    <circle cx="50" cy="50" r="40"
                                                                        stroke="var(--yellow-600)" stroke-width="15"
                                                                        fill="var(--yellow-600)"></circle>
                                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                                        d="M72.3156 38.0312C73.6824 36.6644 73.6824 34.4483 72.3156 33.0815C70.9488 31.7146 68.7327 31.7146 67.3659 33.0815L41.5565 58.8909L33.4247 50.7591C32.0579 49.3923 29.8418 49.3923 28.475 50.7591C27.1082 52.126 27.1082 54.3421 28.475 55.7089L39.0816 66.3155C40.4484 67.6823 42.6645 67.6823 44.0313 66.3155C44.1514 66.1955 44.2609 66.0689 44.3598 65.9369C44.4918 65.8379 44.6184 65.7284 44.7384 65.6084L72.3156 38.0312Z"
                                                                        fill="white"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div class="message-item">
                                                            <div class="flex items-center text-sm">
                                                                Strong&nbsp;
                                                                <svg width="14" height="14" viewBox="0 0 100 100">
                                                                    <circle cx="50" cy="50" r="40"
                                                                        stroke="var(--border-action)" stroke-width="15"
                                                                        fill="transparent"></circle>
                                                                    <circle cx="50" cy="50" r="40" stroke="var(--green-600)"
                                                                        stroke-width="15" fill="var(--green-600)"></circle>
                                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                                        d="M72.3156 38.0312C73.6824 36.6644 73.6824 34.4483 72.3156 33.0815C70.9488 31.7146 68.7327 31.7146 67.3659 33.0815L41.5565 58.8909L33.4247 50.7591C32.0579 49.3923 29.8418 49.3923 28.475 50.7591C27.1082 52.126 27.1082 54.3421 28.475 55.7089L39.0816 66.3155C40.4484 67.6823 42.6645 67.6823 44.0313 66.3155C44.1514 66.1955 44.2609 66.0689 44.3598 65.9369C44.4918 65.8379 44.6184 65.7284 44.7384 65.6084L72.3156 38.0312Z"
                                                                        fill="white"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div class="message-item">
                                                            <div class="flex items-center text-sm">
                                                                <p>Very_Strong!</p>&nbsp;
                                                                <svg width="14" height="14" viewBox="0 0 100 100">
                                                                    <circle cx="50" cy="50" r="40"
                                                                        stroke="var(--border-action)" stroke-width="15"
                                                                        fill="transparent"></circle>
                                                                    <circle cx="50" cy="50" r="40" stroke="var(--blue-600)"
                                                                        stroke-width="15" fill="var(--blue-600)"></circle>
                                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                                        d="M72.3156 38.0312C73.6824 36.6644 73.6824 34.4483 72.3156 33.0815C70.9488 31.7146 68.7327 31.7146 67.3659 33.0815L41.5565 58.8909L33.4247 50.7591C32.0579 49.3923 29.8418 49.3923 28.475 50.7591C27.1082 52.126 27.1082 54.3421 28.475 55.7089L39.0816 66.3155C40.4484 67.6823 42.6645 67.6823 44.0313 66.3155C44.1514 66.1955 44.2609 66.0689 44.3598 65.9369C44.4918 65.8379 44.6184 65.7284 44.7384 65.6084L72.3156 38.0312Z"
                                                                        fill="white"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                    <input class="mb-2 js-password-strength" autocomplete="off" required=""
                                        type="password" name="password" id="signupInputPassword1" spellcheck="false"
                                        v-model="password" v-bind:password="password"
                                        style="border:1px solid grey;height:35px;width: 100%;font-size:var(--fa-12); border-radius: 7px; "
                                        @input="checkPasswordStrength" />
                                </auto-check>
                            </div>
                            <div class="mb-4">
                                <label for="user_password_confirmation">Password confirmation</label>
                                <a-input-password autocomplete="new-password" required="required" type="password"
                                    name="confirm_password" id="signupInputPassword2" 
                                    v-model:value="password2"
                                    style="border:1px solid grey;height:35px;width: 100%;font-size:var(--fa-12); border-radius: 7px; " />
                            </div>
                            <p class="mb-3 text-sm text-secondary">
                                By registering, you agree to the processing of your personal data by TOP YOGA as described in
                                the <a  target="_blank" style="color:var(--primary)">Privacy Policy</a>.
                            </p>
                            <br>
                            <div class="flex items-center mb-4">
                                <input class="mr-1" type="checkbox" value="1" name="tos" id="tos" required="">
                                <label style="margin-top: 9px" class="mb-0 font-normal" for="tos">&nbsp; I've read and agree
                                    to the <a style="color:blue">Terms of Service</a></label>
                            </div>
                            <br>
                            
                            
                            <a-button block size="large" style="border-radius:5px;background-color: blueviolet;" type="primary"
                            html-type="submit">Sign Up</a-button>
                            

                        </a-form>
                    </div>
                   
                <div style="width: 100%;text-align: center;background-color: var(--card-color);padding:5px;border-radius:10px">
    
</div>
                
                </div>
                
            </section>
            
        </a-col>
       
    </a-row>

    <br>
    <br>
    <br>
</template>
  
<script>
import axios from 'axios'
import { notification } from 'ant-design-vue';

import dayjs from 'dayjs';

export default {
    name: "signup",
    
created(){
    document.title = "Signin / Login - Crekaa";
  },
    data() {
        return {
            password: '',
            password2: '',
            first_name: '',
            last_name: '',
            phone_number: '',
            dob: '',
            email: '',
            strength: 0,
            
            errors: [],
            remember: false,

            // google login
            credentials:null,

           
        }
    },
    mounted(){
                // this.$store.commit('setIsLoading',true)
        
// console.log("========================================================================")
// console.log(dayjs("2023-11-22T14:24:36.811Z").format("YYYY-MM-DD"))
    },
    methods: {
        
        // Strong password suggester  
        passwordCheck(password) {
            this.strength = 0;
            if (password.length >= 8) {
                this.strength += 25;
            }
            if (password.match(/(?=.*[0-9])/)) {
                this.strength += 25;
            }
            if (password.match(/(?=.*[!,%,&,@,#,$,^,*,?,_,~,<,>,])/)) {
                this.strength += 25;
            }
            if (password.match(/(?=.*[a-z])/)) {
                this.strength += 25;
            }
            // console.log(this.strength)
        },

        checkPasswordStrength() {
            const password = this.password;
            this.passwordCheck(password);
        },

        // End Strong Password Suggester

        validatePhoneNumber() {
    // Get the input element
    const inputElement = document.getElementById('phone_number');
    
    // Ensure it's a valid number
    if (isNaN(this.phone_number)) {
      this.phone_number = ''; // Clear the input if it's not a valid number
    }
    
    // Limit the number of digits to 10
    if (this.phone_number.length > 10) {
      this.phone_number = this.phone_number.slice(0, 10); // Truncate to 10 digits
    }
},
        async SubmitForm() {
            
            // this.$store.commit('setIsLoading',true)
            
            this.errors = []

            if (this.first_name === '') {
                notification['error']({
                    message: 'First Name Is Empty!',
                    description:
                        `The first name Is missing !`,
                    placement: 'bottomRight',
                });



                // this.errors.push('The first name Is missing !')
            }
            if (this.last_name === '') {
                notification['error']({
                    message: 'Last Name Is Empty!',
                    description:
                        `The last name Is missing !`,
                    placement: 'bottomRight',
                });



                // this.errors.push('The last name Is missing !')
            }
            if (this.email === '') {
                notification['error']({
                    message: 'Email Is Empty!',
                    description:
                        'The email Is missing !',
                    placement: 'bottomRight',
                });



                // this.errors.push('The email Is missing !')
            }
            if (this.dob === '') {
                notification['error']({
                    message: 'Date Of Birth Is Empty ',
                    description:
                        "The Date Of Birth Is missing !",
                    placement: 'bottomRight',
                });



                // this.errors.push('The Date Of Birth Is missing !')
            }

            if (this.phone_number === '') {
                notification['error']({
                    message: 'Phone Number Is Empty ',
                    description:
                        'The phone number Is missing !',
                    placement: 'bottomRight',
                });



                // this.errors.push('The phone number Is missing !')
            }

            if (this.password === '') {
                notification['error']({
                    message: 'Password Is Empty ',
                    description:
                        'The password Is missing !',
                    placement: 'bottomRight',
                });



                // this.errors.push('The password Is missing !')
            }

            if (this.password !== this.password2) {
                notification['error']({
                    message: 'Both Password Is Not Matching ',
                    description:
                        'The Both Password Is Not Matching !',
                    placement: 'bottomRight',
                });



                // this.errors.push('The Both Password Is Not Matching !')
            }

            if (!this.errors.length) {
                const formData = {
                    first_name: this.first_name,
                    last_name: this.last_name,
                    phone_number: this.phone_number,
                    email: this.email,
                    dob: dayjs(this.dob).format("YYYY-MM-DD").toString(), // convert the date to needed format as "YYYY-MM-DD"
                    password: this.password2
                }
                // console.log(formData)

               await axios
                    .post("https://api.crekaa.com/yoga-app/api/v1/registeryoga-user/", formData)
                    .then(response => {
                        console.log(response)
                        if (response.data['error'] === false) {
                            // console.log("Registration success ")

                            notification['success']({
                                message: 'Registration Successfull ',
                                description:
                                    `we have sent an email on ${this.email} to activate your account please check your email, & verify your account for login.`,
                                placement: 'bottomRight',
                            });

                            this.$router.push('/signin')
                        } else {
                            notification['error']({
                                message: 'Registration Un-Successfull ',
                                description:
                                   "Check your input it might seems when this field email is alredy registered...",
                                placement: 'bottomRight',
                            });
                            // console.log(response.data['statement'])
                            // console.log("error encountered for registration")
                        }
                    })
                    .catch(error => {
                        if (error.response) {
                            for (const property in error.response.data) {
                                this.errors.push(`${property}:${error.response.data[property]}`)
                            }
                            console.log(JSON.stringify(error.response.data))

                        } else if (error.message) {
                            this.errors.push('Something went wrong. Please Try Again ')
                            console.log(JSON.stringify(error))

                        }
                    })
                // this.$store.commit('setIsLoading',false)

            }
        }

    }
}
</script>
<style scoped >
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
}

*,
:after,
:before {
    border-color: var(--border-primary);
    border-style: solid;
    border-width: 0;
    box-sizing: border-box
}


h1,
h2,
h3,
h4,
h5,
h6 {
    font-size: inherit;
    font-weight: inherit
}

a {
    color: inherit;
    text-decoration: inherit
}


input,
optgroup,
select,
textarea {
    color: inherit;
    font-family: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    margin: 0;
   
    padding: 0
}

select {
    text-transform: none
}

/* Pass Validator */

.password-strength-group .password-strength-message {
    font-weight: 20px;
    /* height: 1em; */
    text-align: right;
    transition: all 0.5s;

    position: relative;
}

.password-strength-group .password-strength-message .message-item {
    font-size: 12px;
    position: absolute;
    right: 0;
    opacity: 0;
    transition: opacity 0.2s;
}

.password-strength-group[data-strength="25"] .meter-block:nth-child(-n+1) {
    background: #cc3d04;
}

.password-strength-group[data-strength="25"] .message-item:nth-child(1) {
    opacity: 1;
}

.password-strength-group[data-strength="50"] .meter-block:nth-child(-n+2) {
    background: #ffc43b;
}

.password-strength-group[data-strength="50"] .message-item:nth-child(2) {
    opacity: 1;
}

.password-strength-group[data-strength="75"] .meter-block:nth-child(-n+3) {
    background: #9ea60a;
}

.password-strength-group[data-strength="75"] .message-item:nth-child(3) {
    opacity: 1;
}

.password-strength-group[data-strength="100"] .meter-block:nth-child(-n+4) {
    background: #289116;
}

.password-strength-group[data-strength="100"] .message-item:nth-child(4) {
    opacity: 1;
}

/* Pass Validator */
[type=reset],
[type=submit] {
    -webkit-appearance: button;
    background-color: transparent;
    background-image: none
}

blockquote,
dd,
dl,
figure,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
pre {
    margin: 0
}

/* [role=button],button {
            cursor: pointer
        } */

audio,
canvas,
embed,
iframe,
img,
object,
svg,
video {
    display: block;
    vertical-align: middle
}

[multiple],
[type=date],
[type=datetime-local],
[type=email],
[type=month],
[type=number],
[type=password],
[type=search],
[type=tel],
[type=text],
[type=time],
[type=url],
[type=week],
select,
textarea {
    --tw-shadow: 0 0 #0000;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: #fff;
    border-color: #818181;
    border-color: var(--gray-500);
    border-radius: 0;
    border-width: 1px;
    font-size: 1rem;
    line-height: 1.5rem;
    padding: .5rem .75rem
}



*,
:after,
:before {
    --tw-border-spacing-x: 0;
    --tw-border-spacing-y: 0;
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    --tw-pan-x: ;
    --tw-pan-y: ;
    --tw-pinch-zoom: ;
    --tw-scroll-snap-strictness: proximity;
    --tw-ordinal: ;
    --tw-slashed-zero: ;
    --tw-numeric-figure: ;
    --tw-numeric-spacing: ;
    --tw-numeric-fraction: ;
    --tw-ring-inset: ;
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-color: #fff;
    --tw-ring-color: rgba(147, 197, 253, .5);
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-ring-shadow: 0 0 #0000;
    --tw-shadow: 0 0 #0000;
    --tw-shadow-colored: 0 0 #0000;
    --tw-blur: ;
    --tw-brightness: ;
    --tw-contrast: ;
    --tw-grayscale: ;
    --tw-hue-rotate: ;
    --tw-invert: ;
    --tw-saturate: ;
    --tw-sepia: ;
    --tw-drop-shadow: ;
    --tw-backdrop-blur: ;
    --tw-backdrop-brightness: ;
    --tw-backdrop-contrast: ;
    --tw-backdrop-grayscale: ;
    --tw-backdrop-hue-rotate: ;
    --tw-backdrop-invert: ;
    --tw-backdrop-opacity: ;
    --tw-backdrop-saturate: ;
    --tw-backdrop-sepia:
}

.relative {
    position: relative
}

.mx-auto {
    margin-left: auto;
    margin-right: auto
}

.my-4 {
    margin-bottom: 32px;
    margin-top: 32px
}

.my-auto {
    margin-bottom: auto;
    margin-top: auto
}

.-mt-1 {
    margin-top: -8px
}

.mb-2 {
    margin-bottom: 16px
}

.mb-3 {
    margin-bottom: 24px
}

.mb-4 {
    margin-bottom: 32px
}

.mt-sm {
    margin-top: 4px
}

.block {
    display: block
}

.flex {
    display: flex
}

.grid {
    display: grid
}

.h-0 {
    height: 0
}

.w-full {
    width: 100%
}

.min-w-min {
    min-width: -moz-min-content;
    min-width: min-content
}

.max-w-sm {
    max-width: 24rem
}

.origin-left {
    transform-origin: left
}

.scale-75,
.transform {
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}

.grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr))
}

.flex-row {
    flex-direction: row
}

.flex-col {
    flex-direction: column
}

.items-start {
    align-items: flex-start
}

.items-center {
    align-items: center
}

.justify-center {
    justify-content: center
}

.justify-between {
    justify-content: space-between
}


.gap-2 {
    gap: 16px
}

.space-x-1>:not([hidden])~:not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-left: 8px;
    margin-left: calc(8px*(1 - var(--tw-space-x-reverse)));
    margin-right: 0;
    margin-right: calc(8px*var(--tw-space-x-reverse))
}

.border-t {
    border-top-width: 1px
}

.bg-primary {
    background-color: var(--bg-primary)
}

.px-2 {
    padding-left: 16px;
    padding-right: 16px
}

.px-4 {
    padding-left: 32px;
    padding-right: 32px
}

.py-4 {
    padding-bottom: 32px;
    padding-top: 32px
}

.pt-4 {
    padding-top: 32px
}

.text-center {
    text-align: center
}

.text-sm {
    font-size: 12px
}

.text-xl {
    font-size: 18px
}

.font-medium {
    font-weight: 500
}

.font-semibold {
    font-weight: 600
}

.text-primary {
    color: var(--text-primary)
}

.text-secondary {
    color: var(--text-secondary)
}

.transition-colors {
    transition-duration: .15s;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(.4, 0, .2, 1)
}

:root {
    --white: #fff;
    --black: #000;
    --gray-050: #fafafa;
    --gray-100: #ebebeb;
    --gray-200: #e1e1e1;
    --gray-300: #c1c1c1;
    --gray-400: #a1a1a1;
    --gray-500: #818181;
    --gray-600: #616161;
    --gray-700: #414141;
    --gray-800: #2b2b2b;
    --gray-850: #1a1a1a;
    --gray-900: #111;
    --red-050: snow;
    --red-100: #ffe5e9;
    --red-200: #fbbfc7;
    --red-300: #ff909f;
    --red-400: #ff7082;
    --red-500: #ff455d;
    --red-600: #dd243c;
    --red-700: #c11027;
    --red-800: #8f0718;
    --red-900: #51050e;
    --orange-050: #fff8f3;
    --orange-100: #ffe8d8;
    --orange-200: #ffc59b;
    --orange-300: #fc9c66;
    --orange-400: #fd812d;
    --orange-500: #f35815;
    --orange-600: #c43c02;
    --orange-700: #962d00;
    --orange-800: #672002;
    --orange-900: #391303;
    --yellow-050: #fffbe4;
    --yellow-100: #fff1a8;
    --yellow-200: #fed54a;
    --yellow-300: #f2b600;
    --yellow-400: #d19f03;
    --yellow-500: #a78103;
    --yellow-600: #835c01;
    --yellow-700: #5c4716;
    --yellow-800: #41320c;
    --yellow-900: #261c02;
    --green-050: #effff3;
    --green-100: #d7fbdf;
    --green-200: #a9ecb8;
    --green-300: #75db8c;
    --green-400: #40d763;
    --green-500: #27b648;
    --green-600: #13862e;
    --green-700: #19652a;
    --green-800: #10481d;
    --green-900: #0a2912;
    --blue-050: #f3fbff;
    --blue-100: #ddf2ff;
    --blue-200: #a9dffe;
    --blue-300: #73c7f9;
    --blue-400: #47b7f8;
    --blue-500: #1e9de7;
    --blue-600: #0e73cc;
    --blue-700: #144eb6;
    --blue-800: #0e3682;
    --blue-900: #071f4d;
    --purple-050: #f9f8ff;
    --purple-100: #eeeaff;
    --purple-200: #d4c9fe;
    --purple-300: #b7a5fb;
    --purple-400: #a18bf5;
    --purple-500: #8467f3;
    --purple-600: #624bbb;
    --purple-700: #4b3990;
    --purple-800: #3e1f75;
    --purple-900: #261149
}

@media (prefers-color-scheme: dark) {
    :root {
        --bg-primary: var(--gray-900);
        --bg-secondary: var(--gray-800);
        --bg-tertiary: var(--gray-700);
        --border-primary: var(--gray-800);
        --border-secondary: var(--gray-700);
        --border-action: var(--gray-600);
        --text-primary: var(--gray-050);
        --text-secondary: var(--gray-400);
        --text-blue: var(--blue-400);
        --text-green: var(--green-500);
        --text-orange: var(--orange-300);
        --text-red: var(--red-500);
        --text-red-disabled: var(--red-500);
        --text-purple: var(--purple-400);
        --graph-border: var(--gray-600);
        --graph-blue-gradient-start: var(--blue-900);
        --graph-blue-gradient-stop: var(--blue-900);
        --graph-blue-light: var(--blue-700);
        --graph-blue-dark: var(--blue-400);
        --graph-orange-light: var(--orange-700);
        --graph-orange-dark: var(--orange-400);
        --graph-green-light: var(--green-700);
        --graph-green-dark: var(--green-400)
    }
}

body {
    color: #111;
    color: var(--gray-900);
    font-size: 14px
}

@media (prefers-color-scheme: dark) {
    body {
        background-color: #111;
        background-color: var(--gray-900);
        color: #fafafa;
        color: var(--gray-050)
    }
}

body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif
}

.btn {
    align-items: center;
    box-sizing: border-box;
    display: inline-flex;
    font-weight: 600;
    height: 34px;
    justify-content: center;
    line-height: 1;
    padding-left: 16px;
    padding-right: 16px;
    position: relative;
    text-align: center;
    text-decoration-line: none;
    white-space: nowrap
}

.btn {
    border-radius: 6px;
    flex-shrink: 0;
    overflow: hidden;
    padding-bottom: 12px;
    padding-top: 12px;
    transition-duration: .15s;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
    transition-timing-function: cubic-bezier(.4, 0, .2, 1);
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none
}

.btn-primary {
    background-color: #2b2b2b;
    background-color: var(--gray-800)
}

@media (prefers-color-scheme: dark) {
    .btn-primary {
        background-color: #fafafa;
        background-color: var(--gray-050)
    }
}

.btn-primary {
    color: #fafafa;
    color: var(--gray-050)
}

@media (prefers-color-scheme: dark) {
    .btn-primary {
        color: #2b2b2b;
        color: var(--gray-800)
    }

    .btn-primary:hover {
        --tw-bg-opacity: 1;
        background-color: #fff;
        background-color: rgb(255 255 255/var(--tw-bg-opacity));
        color: #111;
        color: var(--gray-900)
    }
}

.btn-primary {
    cursor: pointer
}

.btn-secondary {
    color: var(--text-primary)
}

.btn-secondary {
    border-color: #e1e1e1;
    border-color: var(--gray-200);
    border-width: 1px
}

@media (prefers-color-scheme: dark) {
    .btn-secondary {
        border-color: #616161;
        border-color: var(--gray-600)
    }
}

.btn-secondary {
    background-color: var(--bg-primary)
}

.logo-animated .logo-load {
    animation: scale-in .5s
}

.logo-animated .wordmark-load {
    --tw-translate-x: 25px;
    animation-delay: .5s;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-name: slide-in;
    opacity: 0;
    transform: translate(25px, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}

a {
    color: var(--text-blue);
    transition-duration: .15s;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(.4, 0, .2, 1)
}

input[type=email],
input[type=number],
input[type=password],
input[type=text],
select {
    background-color: var(--bg-secondary);
    border-radius: 6px;
    font-size: 14px;
    padding: 4px 16px
}

input[type=email],
input[type=number],
input[type=password],
input[type=text],
select {
    --tw-ring-offset-width: 0px;
    --tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, .05);
    --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
    border-color: var(--border-action);
    border-width: 1px;
    box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(0, 0, 0, .05);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}

input[type=email],
input[type=password],
input[type=text],
select {
    width: 100%
}

label {
    display: inline-block;
    font-weight: 600;
    line-height: 1;
    margin-bottom: 12px
}

@media (min-width: 768px) {
    .md\:-left-2 {
        left: -16px
    }

    .md\:-left-2\.5 {
        left: -20px
    }

    .md\:mx-0 {
        margin-left: 0;
        margin-right: 0
    }

    .md\:block {
        display: block
    }

    .md\:flex {
        display: flex
    }

    .md\:h-screen {
        height: 100vh
    }

    .md\:w-1\/2 {
        width: 50%
    }

    .md\:w-1\/3 {
        width: 33.333333%
    }

    .md\:w-2\/3 {
        width: 66.666667%
    }

    .md\:w-7\/12 {
        width: 58.333333%
    }

    .md\:grid-cols-3 {
        grid-template-columns: repeat(3, minmax(0, 1fr))
    }

    .md\:flex-row-reverse {
        flex-direction: row-reverse
    }

    .md\:items-center {
        align-items: center
    }

    /* .md\:border-r {
                border-right-width: 1px
            } */

    .md\:p-8 {
        padding: 64px
    }

    .md\:px-0 {
        padding-left: 0;
        padding-right: 0
    }

    .md\:py-4 {
        padding-bottom: 32px;
        padding-top: 32px
    }

    .md\:py-9 {
        padding-bottom: 72px;
        padding-top: 72px
    }

    .md\:text-2xl {
        font-size: 22px
    }
}</style>