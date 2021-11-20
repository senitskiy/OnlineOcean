<template>
  <div class="settings">
    <div class="container">
      <div class="settings__inner section">
        <div class="settings__wrapper">
          <h1 class="settings__title">
            {{ logged ? content.logged.title : content.register.title }}
          </h1>
          <p class="settings__descr">
            {{ logged ? content.logged.descr : content.register.descr }}
          </p>
          <form class="settings__items"
          @submit.prevent='saveSettings()'
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
              v-model='data.nickname'
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
            <ul class="settings__list settings__list--info settings-upload">
              <li class="settings__list-item">
                <p class="settings__list-label">
                  {{ content.designLabel }}
                </p>
                <app-upload
                @uploaded='setLogo'
                >
                  <div class="settings-upload">
                    <p class="settings-upload__label">
                      {{ content.avatarPlaceholder }}
                    </p>
                    <div class="settings-upload__btn">
                      <img src="@/assets/images/add.svg" alt="">
                    </div>
                    <p class="settings-upload__size">
                      512x512
                    </p>
                  </div>
                </app-upload>
                <app-upload
                @uploaded='setCover'
                >
                  <div class="settings-upload">
                    <p class="settings-upload__label">
                      {{ content.bannerPlaceholder }}
                    </p>
                    <div class="settings-upload__btn">
                      <img src="@/assets/images/add.svg" alt="">
                    </div>
                    <p class="settings-upload__size">
                      1920x300
                    </p>
                  </div>
                </app-upload>
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
          {{ data }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppInput from '@/components/App/AppInput.vue';
import AppUpload from '@/components/App/AppUpload.vue';

export default {
  props: {
    logged: {
      type: Boolean,
      default: false,
    },
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
        nickname: '',
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
  methods: {
    setLogo(value){
      this.data.logo = value
    },
    setCover(value){
      this.data.cover = value
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