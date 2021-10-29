<template>
  <div class="user-cover">
    <div class="user-cover__change">

    </div>
    <div class="user-cover__imgwrapper">
      <img src="@/assets/images/temp/product-banner.jpg" alt="">
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
              {{ content.userName }}
            </p>
            <ul class="user-cover__loot">
              <li class="user-cover__loot-item">
                {{ content.userLootItemsLabel + ':'}}
                <span>
                  {{ content.userLootItems }}
                </span>
              </li>
              <li class="user-cover__loot-item">
                {{ content.userLootBoxesLabel + ':'}}
                <span>
                  {{ content.userLootBoxes }}
                </span>
              </li>
            </ul>
          </div>
          <div class="user-cover__profile-col user-cover__profile-edit">
            <div class="user-cover__profile-copy copy"
            @click='copyToken(this.content.userToken)'
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

export default {
  data() {
    return {
      content:{
        btnTitle: 'Edit profile',
        userName: 'ArtStudio_nft',
        userId: 34,
        userToken: '4b73hghjk4ljh2jk3hy956',
        userLootItemsLabel: 'Items',
        userLootBoxesLabel: 'Boxes',
        userLootItems: 134,
        userLootBoxes: 134,
      },
    }
  },
  methods: {
    copyToken(value) {
      navigator.clipboard.writeText(value);
    }
  },
  computed: {
    shortToken() {
      let first = this.content.userToken.slice(0, 4),
          second = this.content.userToken.slice(-4, this.content.userToken.length);

      return first + '...' + second
    }
  },
  components: {
    AppProfile,
  },
}
</script>