<template>
  <div>
    <user-cover
    :content='content'
    :user='user'
    @changedCover='changeCover'
    ></user-cover>
    <div class="user-info">
      <div class="container">
        <h1 class="user-info__title">
          {{ content.title }}
        </h1>
        <h2 class="user-info__descr">
          {{ content.descr }}
        </h2>
      </div>
    </div>
    <user-loot
    :content='content'
    :user='user'
    ></user-loot>
  </div>
</template>

<script>
import UserCover from '@/components/User/UserCover.vue';
import UserLoot from '@/components/User/UserLoot.vue';

import axios from 'axios';

export default {
  data() {
    return {
      content:{
        title: 'My Account',
        descr: 'Manage your account, profile details and view your collections',
        editBtnTitle: 'Edit profile',
        userLootItemsLabel: 'Items',
        userLootBoxesLabel: 'Boxes',
        itemsBtnTextShow: 'Show more',
        itemsBtnTextLess: 'Show less',
        changeBackgroundBtn: 'Change background',
      },
      user:{
        coverImage: {
          src: 'https://i.ibb.co/KjyXtpS/product-banner.jpg'
        },
        userName: 'artstudio',
        userNickname: 'Artstudio__451',
        userToken: '4b73hghjk4ljh2jk3hy956',
        userItemsLength: 153,
        userBoxLength: 153,
        socials:[
          {
            href: 'https://twitter.com/home',
            type: 'twitter',
          },
          {
            href: 'https://twitter.com/home',
            type: 'instagram',
          },
          {
            href: 'https://twitter.com/home',
            type: 'telegram',
          },
          {
            href: 'https://twitter.com/home',
            type: 'facebook',
          },
        ],
      },
    }
  },
  mounted () {
    this.getUserPageContent()
    this.getUserInfo()
  },
  methods: {
    getUserPageContent() {
      axios.get('/userPage')
        .then(function (response) {
          this.content = response
        })
    },
    getUserInfo(){
      axios.get(`/user/${this.$route.params.username}`)
        .then(function (response) {
          this.user = response
        })
    },
    changeCover(value){
      // Убрать
      this.user.coverImage = value
      axios.post('/saveUser', this.user)
        .then(function () {
          // Раскоментировать
          this.user.coverImage = value
        })
    },
  },
  components: {
    UserCover,
    UserLoot,
  },
}
</script>