<template>
  <section class="user-connect">
    <div class="container">
      <div class="user-connect__inner">
        <h2 class="user-connect__title">
          {{ content.title }}
        </h2>
        <p class="user-connect__descr">
          {{ content.descr }}
        </p>
        <app-button
        :title='content.btnTitle'
        view='big'
        @click='connectWallet()'
        ></app-button>
        <div class="user-connect__imgwrapper">
          <img src="@/assets/images/connect-graphic.png" alt="">
        </div>
        <div class="user-connect__imgwrapper user-connect__imgwrapper--reversed">
          <img src="@/assets/images/connect-graphic.png" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      content:{
        title: 'My Account',
        descr: 'Manage your account, profile details and view your collections',
        btnTitle: 'Connect wallet',
      },
    }
  },
  methods: {
    ...mapMutations(['connectWallet'])
  },
}
</script>