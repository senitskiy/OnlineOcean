<template>
  <div class="cataloge__rows"
  >
    <app-art
    v-for='id in info.items'
    :artId='id'
    :key='id'
    ></app-art>
  </div>
</template>

<script>
import AppArt from '@/components/App/AppArt.vue';

export default {
  data() {
    return {
      info:{
        items:[
          3, 55, 1, 3, 56, 94, 4, 3, 55, 1, 3, 56, 94, 43, 55, 1, 3, 56, 94, 4, 94, 43, 55, 1, 3
        ]
      }
    }
  },
  components: {
    AppArt,
  },
}
</script>