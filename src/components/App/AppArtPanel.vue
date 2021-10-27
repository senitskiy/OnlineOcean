<template>
  <div class="panel"
  :class='moreMobileItems ? "panel--more" : "" '
  >
    <div class="container">
      <div class="panel__inner">
        <h6 class="panel__title">
          {{ text }}
        </h6>
        <div class="panel__items">
          <app-art
          artId='39'
          short
          ></app-art>
          <app-art
          artId='29'
          short
          ></app-art>
          <app-art
          artId='39'
          short
          ></app-art>
          <app-art
          artId='39'
          short
          ></app-art>
          <app-art
          artId='39'
          short
          ></app-art>
          <app-art
          artId='19'
          short
          ></app-art>
          <app-art
          artId='39'
          short
          ></app-art>
          <app-art
          artId='39'
          short
          ></app-art>
          <app-art
          artId='39'
          short
          ></app-art>
          <app-art
          artId='39'
          short
          ></app-art>
          <app-art
          artId='39'
          short
          ></app-art>
          <app-art
          artId='39'
          short
          ></app-art>
        </div>
      </div>
      <app-button
      :title='moreMobileItems ? content.showBtnText : content.hideBtnText'
      @click='toggleArts()'
      ></app-button>
    </div>
  </div>
</template>

<script>
import AppArt from '@/components/App/AppArt.vue';

export default {
  data() {
    return {
      content:{
        hideBtnText: 'Show more',
        showBtnText: 'Show less',
      },
      moreMobileItems: false,
    }
  },
  props: {
    text: {
      type: String,
      required: true, 
    },
  },
  methods: {
    toggleArts() {
      this.moreMobileItems = !this.moreMobileItems
    }
  },
  components: {
    AppArt,
  },
}
</script>