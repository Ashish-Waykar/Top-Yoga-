<template>
  <section id="hero">

      <!-- <header>
      <div class="container">
        <div id="header-logo-mobile" class="top-gym-logo">
          <a href="#">Top<br/>Yoga</a>
        </div>

        <nav>
          <ul class="flex">
            <li id="header-logo" class="top-gym-logo">
                <a href="#">Top<br/>Yoga</a>
              </li>
            <li><a href="#services">Services</a></li>
            <li><a href="#schedule-services">Classes</a></li>
            <li><a href="#trainers">Instructors</a></li>
            <li><a href="#features">Features</a></li>
            <li><router-link v-if="this.$store.state.userDetils.length ?  false : this.$store.state.isAuthenticated " to="signin">
              {{ this.$store.state.isAuthenticated }}
               </router-link>
              <router-link to="/my-dashboard" v-else>
                Welcome {{  this.$store.state.userDetils.length ? this.$store.state.userDetils[0][0].user.first_name : "" }}
              </router-link>
            </li>
          </ul>
        </nav>

        <button id="hamburger-menu">
          <span class="strip"></span>
          <span class="strip"></span>
          <span class="strip"></span>
        </button>
      </div>
    </header> -->
   
    <div id="hero-slider">
      <div class="hero-slide-item" style="background-image:url('https://onclickwebdesign.com/wp-content/uploads/main-slider-1.jpg');">
        <div class="hero-slider-marketing">
          <a href="#" class="youtube-button"><span class="fa fa-play"></span></a>
          <h2>Be Fit. Top Gym</h2>
         <a href="#schedule-services"> <button>More Info </button></a>
        </div>
      </div>

      <div class="hero-slide-item" style="background-image:url('https://onclickwebdesign.com/wp-content/uploads/main-slider-2.jpg');">
        <div class="hero-slider-marketing">
          <a href="#" class="youtube-button"><span class="fa fa-play"></span></a>
          <h2>Be Fit. Top Trainer</h2>
                   <a href="#schedule-services"> <button>More Info</button></a>

        </div>
      </div>

      <div class="hero-slide-item" style="background-image:url('https://post.healthline.com/wp-content/uploads/2020/10/Female_Yoga_1296x728-header-1296x729.jpg');">
        <div class="hero-slider-marketing">
          <a href="" class="youtube-button"><span class="fa fa-play"></span></a>
          <h2>Be Fit. Top Body</h2>
                   <a href="#schedule-services"> <button>More Info</button></a>

        </div>
      </div>
    </div>
  </section>

  <section id="features">
    <div class="flex container">
      <div class="box">
        <img src="https://onclickwebdesign.com/wp-content/uploads/feature-1.jpg" alt="Exercise Class" />
        <div class="feature-info-container">
          <div class="icon">
            <img src="https://onclickwebdesign.com/wp-content/uploads/icon-1.png" alt="Star Trophy Icon" />
          </div>
          <h4>Serene Environment  </h4>
<p>Experience tranquility in our yoga studio. Our peaceful setting provides the perfect ambiance for your practice, allowing you to escape from the hustle and bustle of daily life.</p>

        </div>
      </div>

      <div class="box">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRv1z-vjxUx2QE9e701HP8LDTgRkN5WoxZCw" alt="Man doing dumbbell rows" />
        <div class="feature-info-container">
          <div class="icon">
            <img src="https://onclickwebdesign.com/wp-content/uploads/icon-2.png" alt="Dumbbell Icon" />
          </div>
          <h4>Customized Nutrition Plans</h4>
<p>Complement your yoga practice with tailored diet plans. Our nutrition experts create personalized strategies to support your well-being, ensuring you maintain a healthy balance between mind and body.</p>

        </div>
      </div>

      <div class="box">
        <img src="https://web-back.perfectgym.com/sites/default/files/styles/460x/public/how%20to%20open%20a%20yoga%20studio.jpg?itok=iAO2Hy1i" alt="Woman doing leg press" />
        <div class="feature-info-container">
          <div class="icon">
            <img src="https://onclickwebdesign.com/wp-content/uploads/icon-3.png" alt="Smoothie Icon" />
          </div>
          <h4>Diet Plans</h4>
          <p>Pellentesque dictum nisl in nibh dictum volutpat nec a quam. Vivamus suscipit nisl quis nulla pretium, vitae ornare leo.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="services">
    <h3>Services</h3>
    <div class="flex container">
      <div class="box">
        <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-yoga-alternative-medicine-flaticons-lineal-color-flat-icons-2.png" alt="external-pilates-fitness-and-healthy-living-flaticons-lineal-color-flat-icons-3" />
        <h4>Pilates</h4>
        <p>Immerse yourself in the art of Pilates, focusing on flexibility, strength, and control. Our expert instructors guide you through tailored sessions to enhance your overall well-being.</p>
  
      </div>

      <div class="box">
        <img src="https://img.icons8.com/external-microdots-premium-microdot-graphic/64/external-pilates-sport-fitness-vol4-microdots-premium-microdot-graphic.png" alt="Bench Press Icon" />
        <h4>Meditation</h4>
        <p>Experience the tranquility of meditation, fostering mindfulness and inner peace. Let our classes help you find balance amid life's hustle and bustle.</p>
      </div>

      <div class="box">
        <img src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/external-yoga-health-vitaliy-gorbachev-flat-vitaly-gorbachev.png" alt="Stopwatch Icon" />
        <h4>Yoga</h4>
        <p>Embark on a journey of self-discovery with our Yoga classes. Cultivate harmony between mind, body, and spirit while learning various poses and breathing techniques.</p>
 
      </div>

      <div class="box">
        <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-bow-yoga-flaticons-lineal-color-flat-icons.png" alt="Mp3 Player Icon" />
        <h4>Spinning</h4>
        <p>Revitalize your cardiovascular health with Spinning sessions. Enjoy dynamic indoor cycling workouts designed to boost endurance and burn calories.</p>
  </div>
    </div>

    <a href="#schedule-services"><button >See All Services</button></a>
  </section>

  <section id="trainers">
    <h5>The Best</h5>
    <h3>Trainers</h3>
    <div class="container">
      <div id="trainers-slider">
        <div class="trainer-slider-item">
          <img src="https://onclickwebdesign.com/wp-content/uploads/trainer-1.jpg" alt="Rachel Smith Personal Trainer" />
          <h4>Rachel Smith</h4>
          <p>Aerobics Instructor</p>
        </div>

        <div class="trainer-slider-item">
          <img src="https://onclickwebdesign.com/wp-content/uploads/trainer-2.jpg" alt="Nick Andros Personal Trainer" />
          <h4>Nick Andros</h4>
          <p>Pilates Instructor</p>
        </div>

        <div class="trainer-slider-item">
          <img src="https://onclickwebdesign.com/wp-content/uploads/trainer-3.jpg" alt="Larry Underwood Personal Trainer" />
          <h4>Larry Underwood</h4>
          <p>Strength Training Coach</p>
        </div>

        <div class="trainer-slider-item">
          <img src="https://onclickwebdesign.com/wp-content/uploads/trainer-1.jpg" alt="Rachel Smith Personal Trainer" />
          <h4>Rachel Smith</h4>
          <p>Aerobics Instructor</p>
        </div>

        <div class="trainer-slider-item">
          <img src="https://onclickwebdesign.com/wp-content/uploads/trainer-2.jpg" alt="Nick Andros Personal Trainer" />
          <h4>Nick Andros</h4>
          <p>Pilates Instructor</p>
        </div>

        <div class="trainer-slider-item">
          <img src="https://onclickwebdesign.com/wp-content/uploads/trainer-3.jpg" alt="Larry Underwood Personal Trainer" />
          <h4>Larry Underwood</h4>
          <p>Strength Training Coach</p>
        </div>
      </div>
    </div>
  </section>
  
  <section id="schedule-services">
    <div class="flex container">
      <div class="upcoming-classes-box">
        <strong>NEXT</strong>
        <h4>Upcoming Classes</h4>
        <table>
          <tr>
            <td><img src="https://onclickwebdesign.com/wp-content/uploads/stopwatch.png" alt="Stopwatch" /></td>
            <td>Hatha Yoga</td>
            <td>6:00 AM - 7:00 AM</td>
          </tr>

          <tr>
            <td><img src="https://onclickwebdesign.com/wp-content/uploads/stopwatch.png" alt="Stopwatch" /></td>
            <td>Vinyasa Yoga</td>
        <td>7:00 AM - 8:00 AM</td>
          </tr>

          <tr>
            <td><img src="https://onclickwebdesign.com/wp-content/uploads/stopwatch.png" alt="Stopwatch" /></td>
            <td>Vinyasa Yoga</td>
            <td>7:00 AM - 8:00 AM</td>
          </tr>

          <tr>
            <td><img src="https://onclickwebdesign.com/wp-content/uploads/stopwatch.png" alt="Stopwatch" /></td>
            <td>Evening Yoga</td>
        <td>5:00 PM - 6:00 PM</td>
          </tr>

         

        </table>
        <p>Note: You Change your classes for anytime online but, your chenges will applied from next month. </p>
      </div>

      <div class="membership-cards-box">
        <div class="inner-container">
          <strong>NEXT</strong>
          <h4 style="background: white;text-align: center;">Membership Deals</h4>
          <h2>25% <span>Discount</span></h2>
        </div>
      </div>

      <div class="personal-trainer-box">
        <strong>BECOME A</strong>
        <h4>YOGA INSTRUCTOR</h4>
        <p>
            Pellentesque dictum nisl in nibh dictum volutpat nec a quam. Vivamus suscipit nisl quis nulla pretium. Join us to share the art and benefits of Yoga..</p>
        <button>Sign Up Now</button>
      </div>
    </div>
  </section>

  <footer>
    <div class="footer-container">
      <div id="footer-logo" class="top-gym-logo">
        <a href="#">Top<br/>Yoga</a>
      </div>

      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#schedule-services">Classes</a></li>
          <li><a href="#trainers">Instructors</a></li>
          <li><a href="#features">Features</a></li>
          
          <!-- <li><a href="#features">signin</a></li> -->
        </ul>
      </nav>

      <div class="mailing-list">
        <input type="text" placeholder="YOUR EMAIL" />
        <button>SIGN UP</button>
      </div>

      <ul class="social-icons">
        <li><a href="#"><span class="fab fa-pinterest"></span></a></li>
        <li><a href="#"><span class="fab fa-facebook"></span></a></li>
        <li><a href="#"><span class="fab fa-twitter"></span></a></li>
        <li><a href="#"><span class="fab fa-youtube"></span></a></li>
        <li><a href="#"><span class="fab fa-behance"></span></a></li>
      </ul>

      <img src="https://onclickwebdesign.com/wp-content/uploads/footer-icon.png" class="bicep" alt="Bicep flex icon" />

      <small>
        Copyright &copy;2019 All rights reserved | This template is made with <span class="fa fa-heart"></span> by <a href="https://colorlib.com">Colorlib</a>
      </small>
    </div>
  </footer>

  <div id="search-container">
    <span id="search-container-hide" class="fa fa-times"></span>
    <h3>Search</h3>
    <div class="search-container-input">
      <input type="text" name="search" placeholder="Search this site" />
      <button>Search</button>
    </div>
  </div>

  <div id="video-frame">
    <span id="video-frame-hide" class="fa fa-times"></span>
    <div class="video-frame-container">
      <div class="video-frame-scaler">
        <iframe width="420" height="315"
        src="https://www.youtube.com/embed/0et6I930LaU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>

          
      </div>
    </div>
  </div>
 
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

import axios from 'axios'
export default {
  data(){
    return{
      reloaded:true
    }
  },
  name: 'HomeView',
  created(){
    if (!this.reloaded){
      window.location.reload()
      this.reloaded= !this.reloaded
    }
  }
 

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

/* start: global styles */
* {
  outline: none;
}

*:not(.slick-track), *:not(.slick-list) {
  transition: 0.4s;
}

body {
  font-family: 'Roboto', 'Helvetica', 'Sans-serif';
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.7;
  color: #353535;
}

h1, h2, h3, h4, h5 {
  margin: 0;
  padding: 0;
  font-weight: 500;
  letter-spacing: 2px;
}

h1, h3, h4, h5 {
  text-transform: uppercase;
}

h2 {
  font-size: 8rem;
}

h3 {
  font-size: 2.85rem;
  letter-spacing: 7px;
  color: #fff;
  margin-bottom: 4rem;
}

h4 {
  font-size: 1.15rem;
}

h5 {
  color: #fff;
}

ul {
  list-style-type: none;
  padding: 0;
}

button {
  cursor: pointer;
  background: #233EDE;
  color: #fff;
  font-size: 0.9rem;
  text-align: center;
  padding: 1.25rem 3rem;
  border: none;
  text-transform: uppercase;
  font-weight: 500;
  font-family: 'Roboto', 'Helvetica', 'Sans-serif';
  letter-spacing: 2px;
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

p {
  color: #7b7b7b;
  line-height: 2;
  font-size: 0.95rem;
}

section, footer {
  padding: 6rem 0;
  text-align: center;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
}

.flex {
  display: flex;
  justify-content: space-between;
}

.box {
  text-align: center;
}
/* end: global styles */

/* start: hero section styles */
#hero {
  position: relative;
  padding: 0;
}

header {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  padding: 1rem 0;
  z-index: 1;
}

header nav {
  max-width: 950px;
  margin: 0 auto;
  position: relative;
}

header nav ul.flex {
  align-items: center;
  justify-content: space-around;
}

header nav ul li a {
  color: #fff;
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: 500;
}

.top-gym-logo {
  margin: 0 2rem;
  border: 2px solid #fff;
  padding: 15px 10px 7px;
  text-align: center;
  letter-spacing: 2px;
}

.top-gym-logo a {
  font-size: 28px;
  text-transform: uppercase;
  color: #fff;
  line-height: 20px;
}

.top-gym-logo a:hover {
  text-decoration: none;
}

#header-logo-mobile {
  display: none;
}

#search {
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -7px;
  width: auto;
  padding: 0;
  font-size: 15px;
  border: none;
  background: transparent;
  color: #fff;
}

#hamburger-menu {
  background-color: transparent;
  border: 1px solid #fff;
  padding: 3px 5px;
  width: 30px;
  cursor: pointer;
  margin: 0 1rem;
  display: none;
}

#hamburger-menu .strip {
  display: block;
  height: 1px;
  background-color: #fff;
  margin: 4px 0;
}

#hero-slider .hero-slide-item {
  position: relative;
  height: 895px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
}

#hero-slider .hero-slide-item .youtube-button {
  background: #233EDE;
  padding: 1.2rem 1.45rem;
  border-radius: 30px;
  color: #fff;
  font-size: 16px;
}

#hero-slider .hero-slider-marketing {
  position: absolute;
  z-index: 2;
  text-align: center;
  color: #fff;
  top: 50%;
  left: 0;
  right: 0;
  margin: -100px auto 0;
}

#hero-slider .slick-dots {
  bottom: 35px;
}

#hero-slider .slick-dots li button:before {
  color: #fff;
  opacity: 1;
  padding: 2px 2px 2px 3px;
  border: 3px solid transparent;
  border-radius: 20px;
}

#hero-slider .slick-dots li.slick-active button:before {
  border-color: #fff;
}
/* end: hero section styles */

/* start: features section styles */
#features .box {
  width: 31%;
}

#features .box > img {
  width: 100%;
}

#features .box .feature-info-container {
  position: relative;
}

#features .box .icon {
  position: relative;
  margin: 0 auto;
  background: #233EDE;
  border-radius: 45px;
  top: -35px;
  width: 88px;
  height: 88px;
  line-height: 83px;
  text-align: center;
}

#features .box .icon img {
  vertical-align: middle;
}
/* end: features section styles */

/* start: services section styles */
#services {
  background: #212122;
}

#services .container {
  margin-bottom: 4rem;
}

#services .box {
  width: 23.5%;
}

#services .box img {
  height: 65px;
  margin-bottom: 2rem;
}

#services .box h4 {
  color: #fff;
}
/* end: services section styles */

/* start: trainers section styles */
#trainers {
  background: url('https://onclickwebdesign.com/wp-content/uploads/trainer-bg.jpg') top center no-repeat;
  background-size: cover;
}

#trainers-slider {
  width: 90%;
  margin: 0 auto;
}

#trainers-slider .slick-slide {
  padding: 0 20px;
}

#trainers-slider .trainer-slider-item img {
  width: 100%;
}

#trainers-slider h4 {
  color: #fff;
  margin-top: 2.5rem;
}

#trainers-slider p {
  color: #fff;
  opacity: 0.6;
}

#trainers-slider .slick-prev {
  left: -30px;
}

#trainers-slider .slick-next {
  right: -10px;
}

#trainers-slider .slick-prev:before,
#trainers-slider .slick-next:before {
  font-size: 40px;
}
/* end: trainers section styles */

/* start: schedule services styles */
#schedule-services {
  text-align: left;
}

#schedule-services .flex > div {
  width: 32%;
  box-sizing: border-box;
}

#schedule-services .flex strong {
  display: block;
  color: #212122;
  font-size: 0.85rem;
  opacity: 0.6;
  letter-spacing: 4px;
}

.upcoming-classes-box {
  border: 2px solid #E5E7F3;
  padding: 4rem 2.5rem 2.5rem;
}

.upcoming-classes-box h4 {
  margin-bottom: 2rem;
}

.upcoming-classes-box table {
  width: 100%;
}

.upcoming-classes-box table tr td {
  padding: 13px 10px 13px 0;
  color: #7b7b7b;
  font-size: 0.85rem;
}

.upcoming-classes-box table tr td:last-child {
  text-align: right;
  padding-right: 0;
}

.membership-cards-box {
  background: #233EDE;
  /* color:white; */
  padding: 1.5rem;
}

.membership-cards-box .inner-container {
  background: url('https://post.healthline.com/wp-content/uploads/2020/10/Female_Yoga_1296x728-header-1296x729.jpg') top center no-repeat;
  height: 395px;
  padding: 2.5rem 1.5rem 1.5rem;
}

.membership-cards-box h2 {
  font-size: 4.5rem;
  font-weight: 700;
  color: #233EDE;
  line-height: 1;
}

.membership-cards-box h2 span {
  font-size: 1rem;
  letter-spacing: 0;
}

.personal-trainer-box {
  background: url('https://onclickwebdesign.com/wp-content/uploads/personal-trainer.jpg') top center no-repeat;
  padding: 4rem 3rem 3rem;
}

.personal-trainer-box h4 {
  margin-bottom: 2rem;
  color: #fff;
}

.personal-trainer-box p {
  color: #fff;
  margin-bottom: 1.5rem;
}

.personal-trainer-box button {
  width: 100%;
}

#schedule-services .personal-trainer-box strong {
  color: #fff;
}
/* end: schedule services styles */

/* start: footer section styles */
footer {
  background: url('https://onclickwebdesign.com/wp-content/uploads/footer-bg.jpg') top center no-repeat;
  background-size: cover;
  padding-bottom: 2rem;
}

.footer-container {
  max-width: 625px;
  margin: 0 auto;
}

#footer-logo {
  display: inline-block;
}

footer nav {
  margin: 2rem 0 6rem;
}

footer ul {
  display: flex;
  justify-content: space-around;
}

footer ul li a {
  color: #fff;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 300;
}

footer .mailing-list {
  position: relative;
}

footer input {
  color: #fff;
  height: 78px;
  width: 100%;
  box-sizing: border-box;
  background: transparent;
  border: 2px solid #fff;
  font-size: 13px;
  font-style: italic;
  padding-left: 2rem;
}

footer button {
  position: absolute;
  right: 2px;
  top: 2px;
  padding: 1.75rem 3rem;
}

footer ul.social-icons {
  max-width: 400px;
  margin: 4rem auto 3rem;
}

footer ul.social-icons li a {
  font-size: 1rem;
}

footer img.bicep {
  display: block;
  margin: 0 auto 2rem;
}

footer small {
  color: #fff;
  opacity: 0.8;
  font-weight: 300;
  margin: 0 0.5rem;
}

footer small a {
  color: #fff;
  text-decoration: underline;
}
/* end: footer section styles */

/* start: search and embed video overlay styles */
#search-container,
#video-frame {
  background: #073B4C;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  visibility: hidden;
  transition: 0.3s;
}

#video-frame {
  background: rgba(0, 0, 0, 0.8);
}

.video-frame-container {
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 900px;
  top: 20%;
}

.video-frame-scaler {
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-top: 56%;
}

.video-frame-scaler iframe {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
}

#search-container-hide, 
#video-frame-hide {
  color: #fff;
  font-size: 1.75rem;
  position: absolute;
  top: 30px;
  right: 30px;
  cursor: pointer;
}

#search-container h3,
.search-container-input {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  margin: -50px auto 0;
  max-width: 500px;
}

#search-container h3 {
  font-size: 2.5rem;
  letter-spacing: 1px;
  text-align: center;
  margin: -125px auto 0;
}

.search-container-input input {
  width: 100%;
  height: 58px;
  box-sizing: border-box;
  font-size: 16px;
  padding-left: 2rem;
}

.search-container-input button {
  position: absolute;
  right: 0;
  top: 0;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
/* end: search and embed video overlay styles */

/* start: media queries */
@media (max-width: 992px) {
  h2 {
    font-size: 6rem;
  }

  header nav {
    max-width: 775px;
  }

  .top-gym-logo {
    margin: 0 1rem;
  }

  .upcoming-classes-box {
    padding: 2rem 1.5rem 0.5rem;
  }

  .upcoming-classes-box h4 {
    margin-bottom: 1rem;
  }

  .membership-cards-box .inner-container {
    padding: 0.5rem 1.5rem 1.5rem;
    height: 100%;
    box-sizing: border-box;
  }

  .membership-cards-box h2 {
    font-size: 3.5rem;
  }

  .personal-trainer-box {
    padding: 2rem 1.5rem 1.5rem;
  }

  .personal-trainer-box p {
    font-size: 0.85rem;
  }

  @media (min-width: 768px) {
    header nav {
      display: block !important;
    }
  }

  @media (max-width: 767px) {
    h2 {
      font-size: 4rem;
      margin-top: 2rem;
    }

    .flex {
      display: block;
    }

    .flex .box {
      margin: 0 auto;
      width: 100% !important;
      margin-top: 3rem;
    }

    .flex .box:first-child {
      margin-top: 0;
    }

    header {
      background: rgba(0, 0, 0, 0.85);
    }

    header .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: static;
    }
    
    #header-logo-mobile {
      display: inline-block;
    }

    header nav {
      position: absolute;
      top: 100%;
      width: 100%;
      background: rgba(0, 0, 0, 0.85);
      display: none;
    }

    header nav ul.flex {
      display: block;
    }

    header nav ul li {
      margin: 1rem 0;
    }

    header nav ul li:last-child {
      margin-bottom: 2rem;
    }

    header nav ul li a {
      font-size: 1.5rem;
    }

    #search {
      position: static;
      font-size: 1.5rem;
    }

    #hamburger-menu {
      display: block;
    }

    #header-logo {
      display: none;
    }

    #features .box .feature-info-container {
      padding: 0 1rem;
    }

    #schedule-services .flex {
      width: 90%;
      display: flex;
      flex-wrap: wrap;
    }

    #schedule-services .flex > div.upcoming-classes-box,
    #schedule-services .flex > div.membership-cards-box {
      width: 48%;
    }

    #schedule-services .flex > div.personal-trainer-box {
      width: 100%;
      margin-top: 3rem;
      background-size: cover;
    }

    .personal-trainer-box p {
      font-size: 0.95rem;
    }

    .membership-cards-box .inner-container {
      background-size: cover;
    }
  }

  @media (max-width: 600px) {
    .video-frame-container {
      top: 30%;
    }

    #schedule-services .flex > div {
      width: 100% !important;
      margin-top: 3rem;
    }

    #schedule-services .flex > div:first-child {
      margin-top: 0;
    }

    .membership-cards-box .inner-container {
      min-height: 500px;
    }

    footer ul li a {
      font-size: 0.65rem;
    }

    footer .mailing-list {
      margin: 0 0.5rem;
    }

    footer button {
      padding-right: 1rem;
      padding-left: 1rem;
    }
  }

  @media (max-width: 500px) {
    .membership-cards-box .inner-container {
      min-height: 400px;
    }

    footer ul {
      flex-wrap: wrap;
    }

    footer nav ul li {
      width: 33%;
      margin-top: 1rem;
    }
  }
}
/* end: media queries */
</style>