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
              ></app-input>
              <app-input
              :descr='content.nicknameLabel'
              :placeholderText='content.nicknamePlaceholder'
              :inputRequired='true'
              ></app-input>
              <app-input
              :descr='content.emailLabel'
              :placeholderText='content.emailPlaceholder'
              :inputRequired='true'
              ></app-input>
              <app-input
              :descr='content.descrLabel'
              :placeholderText='content.descrPlaceholder'
              textarea
              ></app-input>
            </ul>
            <ul class="settings__list settings__list--info">
              <li class="settings__list-item">
                <p class="settings__list-label">
                  {{ content.designLabel }}
                </p>
                <app-upload></app-upload>
                <app-upload></app-upload>
              </li>
              <li class="settings__list-item">
                <p class="settings__list-label">
                  {{ content.socialLabel }}
                </p>
                <app-input
                placeholderText='https://twitter.com/elonmusk'
                ></app-input>
                <app-input
                placeholderText='https://www.instagram.com/elonrmuskk/'
                ></app-input>
                <app-input
                placeholderText='https://www.facebook.com/TheElonmusk/'
                ></app-input>
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
    }
  },
  methods: {
    saveSettings() {
      
    }
  },
  components: {
    AppInput,
    AppUpload,
  },
}
</script>