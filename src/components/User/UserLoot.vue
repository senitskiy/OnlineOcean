<template>
  <div class="user-info">
    <div class="container">
      <h1 class="user-info__title">
        {{ info.title }}
      </h1>
      <h2 class="user-info__descr">
        {{ info.descr }}
      </h2>
    </div>
  </div>
  <section class="user-filters">
    <div class="container">
      <div class="user-filters__inner">
        <div class="user-filters__checkboxes">
          <app-input
          v-for='item in info.filters'
          :key='item'
          radio
          :checkboxValue='item.value'
          :descr='item.text'
          :checkboxChecked='item.checked'
          :checkboxName='info.filtersName'
          ></app-input>
        </div>
        <div class="user-filters__inputwrapper">
          <app-input
          :placeholderText='info.searchInputPlaceholder'
          ></app-input>
        </div>
      </div>
    </div>
  </section>
  <section class="user-loot">
    <div class="container">
      <div class="user-loot__items">
        <app-big-art
        v-for='card in info.cards'
        :key='card'
        :artId='card'
        ></app-big-art>
      </div>
    </div>
  </section>
</template>

<script>
import AppBigArt from '@/components/App/AppBigArt.vue';
import AppInput from '@/components/App/AppInput.vue';

export default {
  data() {
    return {
      info:{
        title: 'My Account',
        descr: 'Manage your account, profile details and view your collections',
        cards:[
          34, 2, 6, 3, 9, 94, 24, 3
        ],
        filtersName: 'user-filters',
        filters:[
          {
            text: 'All NFT',
            value: 'all',
            checked: true,
          },
          {
            text: 'My collection',
            value: 'collection',
          },
          {
            text: 'My favorites',
            value: 'favourites',
          },
          {
            text: 'On sale',
            value: 'sale',
          },
          {
            text: 'Random boxes',
            value: 'random-box',
          },
        ],
        searchInputPlaceholder: 'Search',
      },
      data:{
        showType: '',
      }
    }
  },
  components: {
    AppBigArt,
    AppInput,
  },
}
</script>