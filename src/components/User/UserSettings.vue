<template>
  <div class="settings">
    <div class="container">
      <div class="settings__inner section">
        <div class="settings__wrapper">
          <app-button
          title='Back'
          hasSlot
          view='back'
          @click='routePrev()'
          v-if='this.userInfo.connected !== false'
          >
            <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.223538 6.45372L6.45371 0.223657C6.59781 0.0794465 6.79017 0 6.99527 0C7.20037 0 7.39273 0.0794465 7.53683 0.223657L7.99564 0.682352C8.29419 0.981244 8.29419 1.46703 7.99564 1.76547L2.764 6.9971L8.00144 12.2345C8.14554 12.3787 8.2251 12.571 8.2251 12.776C8.2251 12.9812 8.14554 13.1734 8.00144 13.3178L7.54263 13.7763C7.39842 13.9206 7.20618 14 7.00108 14C6.79597 14 6.60362 13.9206 6.45952 13.7763L0.223538 7.54059C0.0791006 7.39592 -0.000231743 7.20277 0.00022316 6.99744C-0.000231743 6.79131 0.0791006 6.59827 0.223538 6.45372Z" fill="#D4D4D4"/>
            </svg>
          </app-button>
          <h1 class="settings__title">
            {{ userInfo.connected ? content.logged.title : content.register.title }}
          </h1>
          <p class="settings__descr">
            {{ userInfo.connected ? content.logged.descr : content.register.descr }}
          </p>
          <form class="settings__items"
          @submit.prevent='userLogged(data)'
          >
            <ul class="settings__list">
              <app-input
              :descr='content.nameLabel'
              :placeholderText='content.namePlaceholder'
              :inputRequired='true'
              v-model='data.name'
              ></app-input>
              <app-input
              :descr='content.nicknameLabel'
              :placeholderText='content.nicknamePlaceholder'
              :inputRequired='true'
              v-model='data.username'
              ></app-input>
              <app-input
              :descr='content.emailLabel'
              :placeholderText='content.emailPlaceholder'
              :inputRequired='true'
              type='email'
              v-model='data.email'
              ></app-input>
              <app-input
              :descr='content.descrLabel'
              :placeholderText='content.descrPlaceholder'
              textarea
              v-model='data.descr'
              ></app-input>
            </ul>
            <ul class="settings__list settings__list--info">
              <li class="settings__list-item">
                <p class="settings__list-label">
                  {{ content.designLabel }}
                </p>
                <div class="settings-upload__items">
                  <app-upload
                  @uploaded='setLogo'
                  >
                    <div class="settings-upload__wrapper"
                    :class='data.logo.src !== "" ? "settings-upload__wrapper--uploaded" : ""'
                    >
                      <div class="settings-upload__imgwrapper">
                        <img :src="data.logo.src" alt="">
                      </div>
                      <div class="settings-upload">
                        <p class="settings-upload__label">
                          {{ content.avatarPlaceholder }}
                        </p>
                        <div class="settings-upload__btn">
                          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23.9045 23.9048C29.3652 18.4441 29.3652 9.55634 23.9045 4.09572C18.4439 -1.36491 9.5561 -1.36491 4.09547 4.09572C-1.36516 9.55634 -1.36516 18.4441 4.09547 23.9048C9.5561 29.3654 18.4439 29.3654 23.9045 23.9048ZM5.08364 5.08388C10.0016 0.165891 17.9984 0.165891 22.9164 5.08388C27.8344 10.0019 27.8344 17.9986 22.9164 22.9166C17.9984 27.8346 10.0016 27.8346 5.08364 22.9166C0.165647 17.9986 0.171359 10.0019 5.08364 5.08388Z" fill="#EA4C89"/>
                          <path d="M14 19.2438C14.1942 19.2438 14.3655 19.1638 14.4969 19.0382C14.6226 18.9125 14.7025 18.7354 14.7025 18.5412V14.6971H18.5467C18.7409 14.6971 18.9122 14.6171 19.0436 14.4915C19.1693 14.3658 19.2492 14.1887 19.2492 13.9945C19.2492 13.6061 18.9351 13.292 18.5524 13.2977H14.7082V9.45353C14.7082 9.06511 14.3941 8.75096 14.0114 8.75667C13.623 8.75667 13.3088 9.07083 13.3145 9.45353V13.2977H9.47037C9.08196 13.2977 8.7678 13.6118 8.77351 13.9945C8.77351 14.3829 9.08767 14.6971 9.47037 14.6914H13.3145V18.5355C13.2974 18.9297 13.6115 19.2438 14 19.2438Z" fill="#EA4C89"/>
                          </svg>
                        </div>
                        <p class="settings-upload__size">
                          512x512
                        </p>
                      </div>
                    </div>
                  </app-upload>
                  <app-upload
                  @uploaded='setCover'
                  >
                    <div class="settings-upload__wrapper"
                    :class='data.cover.src !== "" ? "settings-upload__wrapper--uploaded" : ""'
                    >
                      <div class="settings-upload__imgwrapper">
                        <img :src="data.cover.src" alt="">
                      </div>
                      <div class="settings-upload">
                        <p class="settings-upload__label">
                          {{ content.bannerPlaceholder }}
                        </p>
                        <div class="settings-upload__btn">
                          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23.9045 23.9048C29.3652 18.4441 29.3652 9.55634 23.9045 4.09572C18.4439 -1.36491 9.5561 -1.36491 4.09547 4.09572C-1.36516 9.55634 -1.36516 18.4441 4.09547 23.9048C9.5561 29.3654 18.4439 29.3654 23.9045 23.9048ZM5.08364 5.08388C10.0016 0.165891 17.9984 0.165891 22.9164 5.08388C27.8344 10.0019 27.8344 17.9986 22.9164 22.9166C17.9984 27.8346 10.0016 27.8346 5.08364 22.9166C0.165647 17.9986 0.171359 10.0019 5.08364 5.08388Z" fill="#EA4C89"/>
                          <path d="M14 19.2438C14.1942 19.2438 14.3655 19.1638 14.4969 19.0382C14.6226 18.9125 14.7025 18.7354 14.7025 18.5412V14.6971H18.5467C18.7409 14.6971 18.9122 14.6171 19.0436 14.4915C19.1693 14.3658 19.2492 14.1887 19.2492 13.9945C19.2492 13.6061 18.9351 13.292 18.5524 13.2977H14.7082V9.45353C14.7082 9.06511 14.3941 8.75096 14.0114 8.75667C13.623 8.75667 13.3088 9.07083 13.3145 9.45353V13.2977H9.47037C9.08196 13.2977 8.7678 13.6118 8.77351 13.9945C8.77351 14.3829 9.08767 14.6971 9.47037 14.6914H13.3145V18.5355C13.2974 18.9297 13.6115 19.2438 14 19.2438Z" fill="#EA4C89"/>
                          </svg>
                        </div>
                        <p class="settings-upload__size">
                          1920x300
                        </p>
                      </div>
                    </div>
                  </app-upload>
                </div>
              </li>
              <li class="settings__list-item">
                <p class="settings__list-label">
                  {{ content.socialLabel }}
                </p>
                <app-input
                placeholderText='https://twitter.com/elonmusk'
                v-model='data.socials[0].href'
                >
                  <img class='settings__list-logo' src="https://drive.google.com/uc?id=1Yub9eIedn9voyd7MBURQTRFY_XbDkf_U" alt="">
                </app-input>
                <app-input
                placeholderText='https://instagram.com/elonrmuskk/'
                v-model='data.socials[1].href'
                >
                  <img class='settings__list-logo' src="https://drive.google.com/uc?id=1wVYcLwFVzT2zJ88peQzkRKCen5_PKY_Y" alt="">
                </app-input>
                <app-input
                placeholderText='https://t.me/elon_mask'
                v-model='data.socials[2].href'
                >
                  <img class='settings__list-logo' src="https://drive.google.com/uc?id=1MPQf5IWtTtzJGOZXDyVmqoVZAkaK6zuF" alt="">
                </app-input>
                <app-input
                placeholderText='https://facebook.com/TheElonmusk/'
                v-model='data.socials[2].href'
                >
                  <img class='settings__list-logo' src="https://drive.google.com/uc?export=view&id=1IdcobFjL9FGV-cZfKRRv675X-CbWk3w1" alt="">
                </app-input>
              </li>
            </ul>
            <div class="settings__buttonwrapper">
              <app-button
              btnType='submit'
              :title='content.saveBtn'
              ></app-button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppInput from '@/components/App/AppInput.vue';
import AppUpload from '@/components/App/AppUpload.vue';

import axios from 'axios';

import { mapGetters, mapMutations } from 'vuex';

export default {
  mounted () {
    this.getUserData()
  },
  data() {
    return {
      content:{
        register:{
          title: 'Registration Account',
          descr: 'Enter all the necessary data to continue using our service.',
        },
        logged:{
          title: 'Account Settings',
          descr: 'Change your account settings to improve it.',
        },
        nameLabel: 'Account Name',
        nicknameLabel: 'Account Nickname',
        emailLabel: 'Email Adress',
        descrLabel: 'Account Description',
        designLabel: 'Design of your profile',
        socialLabel: 'Social Media',
        namePlaceholder: 'Enter the account name',
        nicknamePlaceholder: 'Enter the account nickname',
        emailPlaceholder: 'Enter the email address',
        descrPlaceholder: 'Enter the account description',
        avatarPlaceholder: 'avatar',
        bannerPlaceholder: 'banner',
        saveBtn: 'Save settings',
      },
      data:{
        name: '',
        username: '',
        email: '',
        descr: '',
        logo: {
          src: '',
        },
        cover: {
          src: '',
        },
        socials:[
          {
            href: '',
            type: 'twitter',
          },
          {
            href: '',
            type: 'instagram',
          },
          {
            href: '',
            type: 'telegram',
          },
          {
            href: '',
            type: 'facebook',
          },
        ],
      },
    }
  },
  computed: {
    ...mapGetters(['userInfo']),
  },
  methods: {
    ...mapMutations(['userLogged']),
    setLogo(value){
      this.data.logo = value
    },
    setCover(value){
      this.data.cover = value
    },
    getUserData() {
      if(this.userInfo.connected !== false){
        axios
          .get(`/user/${this.userInfo.username}`)
          .then(function(response){
            this.data = response
          })
      }
    },
    routePrev(){
      this.$router.go(-1)
    },
    saveSettings() {
      
    }
  },
  components: {
    AppInput,
    AppUpload,
  },
}
</script>