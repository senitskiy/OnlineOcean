<template>
  <div class="create-modal__box-loot box-loot">
    <div class="box-loot__items">
      <app-art
      v-for='id in data.items'
      :key='id'
      :artId='id'
      short
      view='box-loot'
      >
        <button class="box-loot__remove btn-clear"></button>
      </app-art>
      <button class="box-loot__add btn-clear">
        <svg class='box-loot__background' width="158" height="203" viewBox="0 0 158 203" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="0%" stop-color="#F78DD0" />
              <stop offset="100%" stop-color="#AD38EF" />
            </linearGradient>
          </defs>
          <rect x="1" y="1" width="156" height="201" rx="9" stroke="#EA4C89" stroke-width="2" stroke-dasharray="15 15"/>
        </svg>
        <span class="box-loot__imgwrapper">
          <svg width="51" height="37" viewBox="0 0 51 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gradient" gradientTransform="rotate(180)">
                <stop offset="0%" stop-color="#F78DD0" />
                <stop offset="100%" stop-color="#AD38EF" />
              </linearGradient>
            </defs>
            <path d="M39.8011 37H31.7621H29.5973H29.1298V26.217H32.6564C33.5508 26.217 34.0793 25.2007 33.5508 24.4689L26.6907 14.9766C26.2537 14.3669 25.3492 14.3669 24.9122 14.9766L18.0521 24.4689C17.5236 25.2007 18.0419 26.217 18.9465 26.217H22.473V37H22.0055H19.8408H10.5213C5.18566 36.7053 0.9375 31.7152 0.9375 26.3085C0.9375 22.5786 2.95995 19.3264 5.95805 17.5682C5.68365 16.8263 5.54137 16.0336 5.54137 15.2002C5.54137 11.3891 8.62078 8.30967 12.4319 8.30967C13.2551 8.30967 14.0479 8.45195 14.7898 8.72635C16.9951 4.05134 21.7515 0.809326 27.2802 0.809326C34.435 0.819489 40.3295 6.29738 41.0003 13.2794C46.4985 14.2246 50.6755 19.3163 50.6755 25.0787C50.6755 31.2375 45.8786 36.5732 39.8011 37Z" fill="#EA4C89"/>
          </svg>
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
        items:[
          4, 1, 566
        ]
      }
    }
  },
  components: {
    AppArt,
  },
}
</script>