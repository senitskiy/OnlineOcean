<template>
  <router-link class="row__slide" to='/product-n'
  :class='activeState'
  @mouseover='showChars()'
  @mouseleave="hideChars()"
  >
    <span class="row__slide-top row-top">
      <span class="row-top__left">
        <p class="row__slide-title">
          {{ itemName }}
        </p>
        <p class="row__slide-owner">Owner: {{ custom.owner }}</p>
      </span>
      <app-likes
      
      ></app-likes>
    </span>
    <span class="row__slide-imgwrapper">
      <img src="@/assets/images/temp/slide-1.jpg" alt="" />
      <slot></slot>
    </span>
    <span class="row__slide-bottom row-bottom">
      <span class="row-bottom__left">
        <p class="row__slide-bid">Current bid:</p>
        <p class="row__slide-price">
          {{ custom.price + ' ' + custom.blockchain }}
        </p>
      </span>
      <app-profile
      userId='344'
      view='slider'
      ></app-profile>
    </span>
    <app-chars
    :chars='chars'
    ref='chars'
    :viewStyle='charsView'
    ></app-chars>
  </router-link>
</template>

<script>
import AppProfile from '@/components/App/AppProfile.vue';
import AppLikes from '@/components/App/AppLikes.vue';
import AppChars from '@/components/App/AppChars.vue';

export default {
  props: {
    custom:{
      type: Object,
      default: null,
    }
  },
  data() {
    return {
      liked: false,
      charsView: false,
      chars:{
        amount: '126',
        probability: '8%',
        rank: 'Legendary',
      },
    }
  },
  methods:{
    toggleFavourite(){
      this.liked = !this.liked
    },
    showChars() {
      this.charsView = true
    },
    hideChars(){
      this.charsView = false
    },
  },
  computed: {
    activeState() {
      return this.liked ? "row__slide--active" : ""
    },
    itemName(){
      return this.custom.name.substring(0, 21) + '...'
    }
  },
  components: {
    AppProfile,
    AppLikes,
    AppChars,
  },
};
</script>