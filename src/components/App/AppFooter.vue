<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__info">
          <app-logo></app-logo>
          <p class="footer__descr">
            Nft marketplace with the ability to create cases with a random prize.
          </p>
        </div>
        <nav class="footer__navigation">
          <ul class="footer__navigation-list">
            <li class="footer__navigation-item footer__navigation-title">
              Links
            </li>
            <li class="footer__navigation-item">
              <router-link class="footer__navigation-link" to='#'>
                Explore
              </router-link>
            </li>
            <li class="footer__navigation-item">
              <router-link class="footer__navigation-link" to='#'>
                How it works
              </router-link>
            </li>
            <li class="footer__navigation-item">
              <router-link class="footer__navigation-link" to='#'>
                Help Center
              </router-link>
            </li>
          </ul>
          <ul class="footer__navigation-list">
            <li class="footer__navigation-item footer__navigation-title">
              My account
            </li>
            <li class="footer__navigation-item">
              <router-link class="footer__navigation-link" to='#'>
                My Profile
              </router-link>
            </li>
            <li class="footer__navigation-item">
              <router-link class="footer__navigation-link" to='#'>
                My Collections
              </router-link>
            </li>
            <li class="footer__navigation-item">
              <router-link class="footer__navigation-link" to='#'>
                My Account Settings
              </router-link>
            </li>
          </ul>
        </nav>
        <div class="footer__news">
          <form class='footer__form'
          @submit.prevent='sendData()'
          >
            <label class="footer__news-label">
              <span class="footer__news-title">
                Get the latest news to your email.
              </span> 
              <app-input
              type='email'
              placeholderText='Your e-mail'
              v-model='emailAdress'
              ></app-input>
              <app-button
              title='Send'
              ></app-button>
            </label>
          </form>
          <app-social></app-social>
        </div>
      </div>
    </div>
    <p class="footer__copyright">
      © OnlineOcean, All rights reserved.
    </p>
  </footer>
</template>

<script>
import AppLogo from '@/components/App/AppLogo.vue'
import AppInput from '@/components/App/AppInput.vue'
import AppSocial from '@/components/App/AppSocial.vue'

import axios from 'axios';

export default {
  data() {
    return {
      emailAdress: '',
    }
  },
  methods: {
    sendData(){
      axios
        .post('https://google.com')
        .then(
          this.emailAdress = ''
        )
    }
  },
  components:{
    AppLogo,
    AppInput,
    AppSocial,
  },
}
</script>