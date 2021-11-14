<template>
  <div class="user-cover"
  :class='guestProfile'
  >
    <div class="user-cover__change"
    v-if='this.$route.params.userOwn'
    >
      {{ content.changeBackgroundBtn }}
      <input type="file"
      @click='saveCurrent()'
      @change='loadCover($event)'
      >
    </div>
    <div class="user-cover__imgwrapper">
      <img :src="user.coverImage.src" alt="">
    </div>
    <div class="container">
      <div class="user-cover__inner">
        <div class="user-cover__profile">
          <app-profile
          :userId='user.userName'
          view='cover'
          ></app-profile>
          <div class="user-cover__profile-col user-cover__profile-loot">
            <p class="user-cover__profile-username">
              {{ user.userNickname }}
            </p>
            <ul class="user-cover__loot">
              <li class="user-cover__loot-item">
                {{ content.userLootItemsLabel + ':'}}
                <span>
                  {{ user.userItemsLength }}
                </span>
              </li>
              <li class="user-cover__loot-item">
                {{ content.userLootBoxesLabel + ':'}}
                <span>
                  {{ user.userBoxLength }}
                </span>
              </li>
            </ul>
          </div>
          <div class="user-cover__profile-col user-cover__profile-edit">
            <div class="user-cover__profile-copy copy"
            @click='copyToken(user.userToken)'
            >
              <input class="copy__input" type="text"
              :value='shortToken'
              disabled
              >
              <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5 0H2.5C1.4 0 0.5 0.9 0.5 2V16H2.5V2H14.5V0ZM17.5 4H6.5C5.4 4 4.5 4.9 4.5 6V20C4.5 21.1 5.4 22 6.5 22H17.5C18.6 22 19.5 21.1 19.5 20V6C19.5 4.9 18.6 4 17.5 4ZM17.5 20H6.5V6H17.5V20Z" fill="#EA4C89"/>
              </svg>
            </div>
            <app-button
            v-if='this.$route.params.userOwn'
            :title='content.editBtnTitle'
            view='lined'
            ></app-button>
          </div>
          <ul class="user-cover__socials">
            <li class="user-cover__socials-item"
            v-for='item in user.socials'
            :key='item'
            >
              <a class="user-cover__socials-link" :href="item.href">
                <img :src="showImage(item.type)" alt="">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppProfile from '@/components/App/AppProfile.vue';

import { mapGetters } from 'vuex';

export default {
  props: {
    content:{
      type: Object,
      required: true,
    },
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      preCoverImage: null,
      currImage: {
        src: '',
      },
    }
  },
  methods: {
    copyToken(value) {
      navigator.clipboard.writeText(value);
    },
    showImage(value){
      if(value === 'twitter'){
        return 'https://drive.google.com/uc?id=1Yub9eIedn9voyd7MBURQTRFY_XbDkf_U'
      }else if(value === 'instagram'){
        return 'https://drive.google.com/uc?id=1wVYcLwFVzT2zJ88peQzkRKCen5_PKY_Y'
      }else{
        return 'https://drive.google.com/uc?id=1MPQf5IWtTtzJGOZXDyVmqoVZAkaK6zuF'
      }
    },
    loadCover(event){
      if (event.srcElement.files.length !== 0){
        this.currImage = event.target.files[0]
        this.currImage.src = URL.createObjectURL(this.currImage);
        this.$emit('changedCover', this.currImage)
      } else{
        this.currImage = this.preCoverImage
      }
    },
    saveCurrent(){
      this.preCoverImage = this.currImage
    },
  },
  computed: {
    ...mapGetters(['userInfo']),
    shortToken() {
      let first = this.user.userToken.slice(0, 4),
          second = this.user.userToken.slice(-4, this.user.userToken.length);

      return first + '...' + second
    },
    guestProfile(){
      return this.$route.params.userOwn ? '' : "user-cover--guest"
    },
  },
  components: {
    AppProfile,
  },
}
</script>