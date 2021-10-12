<template>
  <div class="panel">
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
    </div>
  </div>
</template>

<script>
import AppArt from '@/components/App/AppArt.vue';

export default {
  props: {
    text: {
      type: String,
      required: true, 
    },
  },
  components: {
    AppArt,
  },
}
</script>