<template>
  <div class="create-modal__box-loot box-loot">
    <div class="box-loot__items">
      <app-art
      short
      view='box-loot'
      ></app-art>
      <app-art
      short
      view='box-loot'
      ></app-art>
      <app-art
      short
      view='box-loot'
      ></app-art>
      <button class="box-loot__add btn-clear">
        <span class="box-loot__imgwrapper">
          <img src="@/assets/images/upload.svg" alt="">
        </span>
        <span class="box-loot__add-descr">
          {{ data.uploadDescr }}
        </span>
      </button>
    </div>
    <p class="box-loot__descr">
      {{ data.title }}
    </p>
  </div>
</template>

<script>
import AppArt from '@/components/App/AppArt.vue';

export default {
  data() {
    return {
      data:{
        title: 'Items are loaded from the offers you created earlier.',
        uploadDescr: 'Upload item',
      }
    }
  },
  components: {
    AppArt,
  },
}
</script>