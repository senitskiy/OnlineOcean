<template>
  <div class="user-cover">
    <div class="user-cover__change">

    </div>
    <div class="user-cover__imgwrapper">
      <img :src="content.coverImage" alt="">
    </div>
    <div class="container">
      <div class="user-cover__inner">
        <div class="user-cover__profile">
          <app-profile
          :userId='content.userId'
          view='cover'
          ></app-profile>
          <div class="user-cover__profile-col user-cover__profile-loot">
            <p class="user-cover__profile-username">
              {{ userInfo.nickname }}
            </p>
            <ul class="user-cover__loot">
              <li class="user-cover__loot-item">
                {{ content.userLootItemsLabel + ':'}}
                <span>
                  {{ userInfo.itemLength }}
                </span>
              </li>
              <li class="user-cover__loot-item">
                {{ content.userLootBoxesLabel + ':'}}
                <span>
                  {{ userInfo.boxLength }}
                </span>
              </li>
            </ul>
          </div>
          <div class="user-cover__profile-col user-cover__profile-edit">
            <div class="user-cover__profile-copy copy"
            @click='copyToken(userInfo.token)'
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
        userId: 5,
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
      let first = this.userInfo.token.slice(0, 4),
          second = this.userInfo.token.slice(-4, this.userInfo.token.length);

      return first + '...' + second
    }
  },
  components: {
    AppProfile,
  },
}
</script>