<template>
  <router-link class="row__slide" to='/product-n'
  :class='activeState'
  >
    <span class="row__slide-top row-top">
      <span class="row-top__left">
        <p class="row__slide-title">
          {{ title }}
        </p>
        <p class="row__slide-owner">Owner: {{ owner }}</p>
      </span>
      <app-likes
      
      ></app-likes>
    </span>
    <span class="row__slide-imgwrapper">
      <img src="@/assets/images/temp/slide-1.jpg" alt="" />
    </span>
    <span class="row__slide-bottom row-bottom">
      <span class="row-bottom__left">
        <p class="row__slide-bid">Current bid:</p>
        <p class="row__slide-price">
          {{ price }}
        </p>
      </span>
      <app-profile
      userId='344'
      view='slider'
      ></app-profile>
    </span>
  </router-link>
</template>

<script>
import AppProfile from '@/components/App/AppProfile.vue';
import AppLikes from '@/components/App/AppLikes.vue';

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      liked: false,
    }
  },
  methods:{
    toggleFavourite(){
      this.liked = !this.liked
    }
  },
  computed: {
    activeState() {
      return this.liked ? "row__slide--active" : ""
    },
  },
  components: {
    AppProfile,
    AppLikes
  },
};
</script>