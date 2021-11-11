<template>
  <div class="user-cover"
  :class='guestProfile'
  >
    <div class="user-cover__change">

    </div>
    <div class="user-cover__imgwrapper">
      <img :src="content.coverImage" alt="">
    </div>
    <div class="container">
      <div class="user-cover__inner">
        <div class="user-cover__profile">
          <app-profile
          :userId='content.userName'
          view='cover'
          ></app-profile>
          <div class="user-cover__profile-col user-cover__profile-loot">
            <p class="user-cover__profile-username">
              {{ content.userNickname }}
            </p>
            <ul class="user-cover__loot">
              <li class="user-cover__loot-item">
                {{ content.userLootItemsLabel + ':'}}
                <span>
                  {{ content.userItemsLength }}
                </span>
              </li>
              <li class="user-cover__loot-item">
                {{ content.userLootBoxesLabel + ':'}}
                <span>
                  {{ content.userBoxLength }}
                </span>
              </li>
            </ul>
          </div>
          <div class="user-cover__profile-col user-cover__profile-edit">
            <div class="user-cover__profile-copy copy"
            @click='copyToken(content.userToken)'
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
            v-if='this.$route.params.own'
            :title='content.btnTitle'
            view='lined'
            ></app-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppProfile from '@/components/App/AppProfile.vue';

import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      content:{
        btnTitle: 'Edit profile',
        userLootItemsLabel: 'Items',
        userLootBoxesLabel: 'Boxes',
        coverImage: 'https://i.ibb.co/KjyXtpS/product-banner.jpg',
        userName: 'artstudio',
        userNickname: 'Artstudio__451',
        userToken: '4b73hghjk4ljh2jk3hy956',
        userItemsLength: 153,
        userBoxLength: 153,
      },
    }
  },
  methods: {
    copyToken(value) {
      navigator.clipboard.writeText(value);
    }
  },
  computed: {
    ...mapGetters(['userInfo']),
    shortToken() {
      let first = this.content.userToken.slice(0, 4),
          second = this.content.userToken.slice(-4, this.content.userToken.length);

      return first + '...' + second
    },
    guestProfile(){
      return this.$route.params.own ? '' : "user-cover--guest"
    }
  },
  components: {
    AppProfile,
  },
}
</script>