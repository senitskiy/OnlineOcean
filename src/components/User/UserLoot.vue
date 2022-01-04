<template>
  <section class="user-filters">
    <div class="container">
      <div class="user-filters__inner">
        <div class="user-filters__checkboxes-mobileoverflow">
          <div class="user-filters__checkboxes-wrapper">
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
              v-show='item.show !== false'
              ></app-input>
            </div>
          </div>
        </div>
        <div class="user-filters__inputwrapper">
          <app-input
          :placeholderText='info.searchInputPlaceholder'
          @typed='search'
          ></app-input>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gradient" gradientTransform="rotate(180)">
                <stop offset="0%" stop-color="#95BAFE" />
                <stop offset="50.52%" stop-color="#BE60D3" />
                <stop offset="100%" stop-color="#A029F4" />
              </linearGradient>
            </defs>
            <path d="M13.3566 2.28852C10.3056 -0.762507 5.33978 -0.762507 2.28875 2.28852C-0.761615 5.34021 -0.761615 10.3053 2.28875 13.357C5.00577 16.0734 9.23739 16.3644 12.2864 14.2433C12.3506 14.5469 12.4974 14.8366 12.7335 15.0727L17.1768 19.5159C17.8243 20.1621 18.8706 20.1621 19.5148 19.5159C20.1617 18.8691 20.1617 17.8228 19.5148 17.1779L15.0716 12.7333C14.8368 12.4992 14.5464 12.3517 14.2429 12.2875C16.3653 9.23782 16.0743 5.00686 13.3566 2.28852ZM11.9538 11.9542C9.6759 14.232 5.96877 14.232 3.69157 11.9542C1.41504 9.67633 1.41504 5.96986 3.69157 3.69201C5.96877 1.41481 9.6759 1.41481 11.9538 3.69201C14.2316 5.96986 14.2316 9.67633 11.9538 11.9542Z" fill="#9E9EA7"/>
          </svg>
        </div>
      </div>
    </div>
  </section>
  <section class="user-loot"
  :class='lootMore'
  v-if='this.currentFilter !== "nots"'
  >
    <div class="container">
      <div class="user-loot__inner">
        <div class="user-loot__items">
          <app-big-art
          v-for='card in data.currentItems'
          :key='card'
          :artId='card'
          ></app-big-art>
        </div>
        <app-button
        :title='lootBtn'
        @click='toggleMore'
        ></app-button>
      </div>
    </div>
  </section>
  <section class="user-nots"
  v-else
  >
    <div class="container">
      <div class="user-nots__inner section">
        <div class="user-nots__items">
          <div class="user-nots__item"
          v-for='(item, index) in nots'
          :key='index'
          >
            <div class="user-nots__index">
              {{ index + 1 }}
            </div>

            <!-- Source -->
            <!-- Source User -->
            <div class="user-nots__source"
            v-if='item.sourceType === "user"'
            >
              <app-profile
              :user-id='item.sourceId'
              :view='item.sourceId == userInfo.username ? "white" : ""'
              :custom-name='item.sourceId == userInfo.username ? "You" : ""'
              showName
              ></app-profile>
            </div>
            <!-- Source Box -->
            <router-link class="user-nots__source"
            :to='{name: "Box", params:{itemId: item.sourceId}}'
            v-else-if='item.sourceType === "box"'
            v-for='source in boxItem(item.sourceId)'
            :key='source'
            >
              <div class="user-nots__imgwrapper">
                <img :src="source.cover.src" alt="">
              </div>
              <p class="user-nots__text">
                {{ source.title }}
              </p>
            </router-link>

            <!-- Result -->
            <div class="user-nots__result">
              {{ this.getResultItem(item) }}
              <router-link class="user-nots__imgwrapper"
              :to='{name: "Art", params:{itemId: item.itemId}}'
              >
                <img :src="item.loaded.cover.src" alt="">
              </router-link>
              <div class="user-nots__result-info">
                <p class="user-nots__text">
                  {{ getNoteMessage(this.notsMessage, item, this.userInfo.username) }}
                </p>
                <app-likes
                :info='item.loaded.likes'
                @toggledLike='noteToggleLike(item)'
                ></app-likes>
              </div>
            </div>

            <!-- Cross -->
            <button class="user-nots__delete btn-clear"
            @click='deleteNote(item.id)'
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.66188 1.97037L6.63193 5.00063L9.66188 8.03074C10.1126 8.4816 10.1126 9.21193 9.66188 9.66279C9.43669 9.88798 9.14145 10.0007 8.84636 10.0007C8.55078 10.0007 8.25552 9.88815 8.03051 9.66279L4.9999 6.63234L1.96952 9.66276C1.74437 9.88795 1.4491 10.0006 1.15375 10.0006C0.858489 10.0006 0.563426 9.88812 0.338067 9.66276C-0.112622 9.2121 -0.112622 8.48174 0.338067 8.03071L3.36793 5.0006L0.337895 1.97037C-0.112794 1.51968 -0.112794 0.789178 0.337895 0.33849C0.788498 -0.111853 1.51858 -0.111853 1.96935 0.33849L4.99987 3.36874L8.03016 0.33849C8.48102 -0.111853 9.21119 -0.111853 9.6617 0.33849C10.1126 0.789178 10.1126 1.51968 9.66188 1.97037Z" fill="#3E3E3E" fill-opacity="0.7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppBigArt from '@/components/App/AppBigArt.vue';
import AppInput from '@/components/App/AppInput.vue';
import AppProfile from '@/components/App/AppProfile.vue';
import AppLikes from '@/components/App/AppLikes.vue';

import axios from 'axios';
import { mapGetters, mapMutations } from 'vuex';

import noteMessageMixin from '@/mixins/noteMessageMixin'

export default {
  props: {
    content:{
      type: Object,
      required: true,
    },
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      info:{
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
            text: 'Notifications',
            value: 'nots',
          },
        ],
        allItems: [3, 5, 1, 42, 64, 78, 4, 6],
        profileId: 4,
        searchInputPlaceholder: 'Search',
        image: 'https://i.ibb.co/TwJzdGg/user-ultra-big.jpg',
        id: 34,
      },
      data:{
        showMore: false,
        currentItems: [],
      },
      currentFilter: '',
    }
  },
  mounted () {
    this.data.btnText = this.info.btnTextShow

    this.openNots()

    this.openCollection()

    this.notsVisibility()
  },
  methods: {
    ...mapMutations(['deleteNote', 'getResultItem', 'noteToggleLike']),
    notsVisibility(){
      if(this.$route.params.userOwn === false){
        let notsItem = this.info.filters.find(item => item.value === 'nots')
        notsItem.show = false
      }
    },
    noteMessage(item){
      if(item.sourceType === 'box'){
        return this.notsMessage.youOpened
      }

      if(item.sourceId == this.userInfo.username){
        if(item.action === 'purchase'){
          return this.notsMessage.youBought
        }
      }else{
        if(item.action === 'like'){
          return this.notsMessage.someoneLiked
        }else if(item.action === 'purchase'){
          return this.notsMessage.someoneBought
        }
      }
    },
    setType(value) {
      this.currentFilter = value
      this.data.currentItems = this.info.allItems
      axios.get(`/getArts/${value}`)
        .then(response => ( this.data.currentItems = response ))
    },
    search(value){
      axios.post('/getArts', { sort: value })
        .then(response => ( this.info.cards = response ))
    },
    toggleMore(){
      this.data.showMore = !this.data.showMore
      if(this.data.btnText === this.info.btnTextShow){
        this.data.btnText === this.info.btnTextLess
      }else{
        this.data.btnText === this.info.btnTextShow
      }
    },
    openNots(){
      if(this.$route.params.needNots === 'true'){
        let needUncheck = this.info.filters.find(item => item.checked === true)

        needUncheck.checked = false

        let needItem = this.info.filters.find(item => item.value === 'nots')
  
        needItem.checked = true
        this.currentFilter = needItem.value
      }
    },
    openCollection(){
      if(this.$route.params.needCollection === 'true'){
        let needUncheck = this.info.filters.find(item => item.checked === true)

        needUncheck.checked = false

        let needItem = this.info.filters.find(item => item.value === 'collection')
  
        needItem.checked = true
        this.currentFilter = needItem.value
      }
    },
    boxItem(id){
      // Пример ответа - убрать
      let output = [{
        cover:{
          src: 'https://drive.google.com/uc?id=1qhbBI-bSd7OgBj8NnZ-QUqFXsYh8AkfQ',
        },
        title: 'Random box',
      }]
      
      id

      return output

      // Раскоментировать
      // let output = null
      // axios
      //   .get('box/' + id)
      //   .then(function(response){
      //     output = response
        // })
      // return output
    },
  },
  computed: {
    ...mapGetters(['userInfo', 'nots', 'notsMessage']),
    lootMore(){
      return this.data.showMore ? 'user-loot__items--more' : ''
    },
    lootBtn(){
      return this.data.showMore ? this.content.itemsBtnTextLess : this.content.itemsBtnTextShow
    },
  },
  mixins:[
    noteMessageMixin,
  ],
  components: {
    AppBigArt,
    AppInput,
    AppProfile,
    AppLikes,
  },
}
</script>