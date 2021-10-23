<template>
  <app-header></app-header>
  <router-view/>
  <!-- <button class='btn btn--pink'>Это тест</button>
  <button class='btn btn--blue'>Это тест</button>
  <button class='btn btn--linear'>Это тест</button>
  <button class='btn btn--big'>Это тест</button> -->
  <app-footer></app-footer>
</template>

<script>
import AppHeader from '@/components/App/AppHeader.vue'
import AppFooter from '@/components/App/AppFooter.vue'

export default {
  components:{
    AppHeader, 
    AppFooter,
  }
}
</script>

<style lang="scss">
@import './assets/style/main.scss';
</style>