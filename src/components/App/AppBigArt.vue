<template>
  <router-link class="row__slide" :to='"/art/" + this.artId'
  :class='[likeState]'
  >
    <span class="row__slide-blocker"
    v-if='isActive !== true'
    @click.prevent
    ></span>
    <span class="row__slide-top row-top">
      <span class="row-top__left">
        <p class="row__slide-title">
          {{ content.title }}
        </p>
        <p class="row__slide-owner">{{ pretitle.owner }} {{ custom ? custom.owner : content.owner }}</p>
      </span>
      <app-likes
      :info='content.likes'
      @toggledLike='toggleLike()'
      ></app-likes>
    </span>
    <span class="row__slide-imgwrapper">
      <img class='row__slide-img' :src="custom ? custom.image.src : require('@/assets/images/temp/slide-1.jpg')" alt="" />
      <slot></slot>
    </span>
    <span class="row__slide-bottom row-bottom">
      <span class="row-bottom__left">
        <p class="row__slide-bid">
          {{ pretitle.bid }}
        </p>
        <p class="row__slide-price">
          {{ custom ? custom.price + ' ' + custom.blockchain : content.bid }}
        </p>
      </span>
      <app-profile
      :userId='content.owner'
      view='slider'
      ></app-profile>
    </span>
    <app-chars
    :chars='content.chars'
    ref='chars'
    :viewStyle='charsView'
    ></app-chars>
  </router-link>
</template>

<script>
import axios from 'axios';

import AppProfile from '@/components/App/AppProfile.vue';
import AppLikes from '@/components/App/AppLikes.vue';

export default {
  props: {
    artId:{
      type: Number,
      required: false,
    },
    custom:{
      type: Object,
      default: null,
    },
    isActive:{
      type: Boolean,
      default: true,
    }
  },
  data() {
    return {
      pretitle:{
        owner: 'Owner: ',
        bid: 'Current bid:',
      },
      content: {
        title: 'Abstract 3D work content more than ever',
        owner: 'artstudio',
        bid: '0.034 ETH',
        likes:{
          count: 131,
          status: false,
        },
        chars:{
          amount: '126',
          probability: '8%',
          rarityLabel: 'Legendary',
        },
      },
      liked: false,
    }
  },
  mounted () {
    this.loadCard()
  },
  methods:{
    loadCard(){
      // axios
      //   .get('https://google.com&=artId')
      //   .then(function(response){
      //     this.content = response
      //   })
    },
    toggleFavourite(){
      this.liked = !this.liked
    },
    toggleLike(){
      // Убрать
      if(this.content.likes.status === false){
        this.content.likes.count++
      }else{
        this.content.likes.count--
      }
      this.content.likes.status = !this.content.likes.status
      axios.post('/favourite', this.artId)
        .then(function () {
          // Раскоментировать 
          // if(this.content.likes.status === false){
          //   this.content.likes.count++
          // }else{
          //   this.content.likes.count--
          // }
          // this.content.likes.status = !this.content.likes.status
        })
    },
  },
  computed: {
    likeState() {
      return this.liked ? "row__slide--active" : ""
    },
  },
  components: {
    AppProfile,
    AppLikes,
  },
};
</script>