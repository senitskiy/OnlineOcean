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
          @choosed='setType'
          ></app-input>
        </div>
        <div class="user-filters__inputwrapper">
          <app-input
          :placeholderText='info.searchInputPlaceholder'
          @typed='search'
          ></app-input>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3566 2.28852C10.3056 -0.762507 5.33978 -0.762507 2.28875 2.28852C-0.761615 5.34021 -0.761615 10.3053 2.28875 13.357C5.00577 16.0734 9.23739 16.3644 12.2864 14.2433C12.3506 14.5469 12.4974 14.8366 12.7335 15.0727L17.1768 19.5159C17.8243 20.1621 18.8706 20.1621 19.5148 19.5159C20.1617 18.8691 20.1617 17.8228 19.5148 17.1779L15.0716 12.7333C14.8368 12.4992 14.5464 12.3517 14.2429 12.2875C16.3653 9.23782 16.0743 5.00686 13.3566 2.28852ZM11.9538 11.9542C9.6759 14.232 5.96877 14.232 3.69157 11.9542C1.41504 9.67633 1.41504 5.96986 3.69157 3.69201C5.96877 1.41481 9.6759 1.41481 11.9538 3.69201C14.2316 5.96986 14.2316 9.67633 11.9538 11.9542Z" fill="#9E9EA7"/>
          </svg>
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
        searchText: '',
      }
    }
  },
  methods: {
    setType(value) {
      console.log(value)
      this.data.showType = value
    },
    search(value){
      this.data.searchText = value
    }
  },
  components: {
    AppBigArt,
    AppInput,
  },
}
</script>