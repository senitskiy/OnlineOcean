<template>
  <infinite-scroll
  @infinite-scroll="loadDataFromServer"
  :message="message"
  :noResult="noResult"
  >
    <div class="cataloge__rows">
      <app-art
      v-for='id in items'
      :artId='id'
      :key='id'
      ></app-art>
    </div>
  </infinite-scroll>
</template>

<script>
import AppArt from '@/components/App/AppArt.vue';

import InfiniteScroll from "infinite-loading-vue3";

// import axios from 'axios';

export default {
  data() {
    return {
      items:[
        3, 55, 1, 3, 56, 94, 4, 3, 55, 1, 3, 56, 94, 43, 55, 1, 3, 56, 94, 4, 94, 43, 55, 1, 3
      ],
      page: 1,
      message: '',
      noResult: false,
    }
  },
  mounted () {
    this.loadPosts()
  },
  methods: {
    loadPosts(){
      
    },
    async loadDataFromServer(){
      try {
        // const result = await axios.get(`/getItems=${this.page}`)
        const result = [4554, 4, 2, 5, 3, 5, 5, 3, 6]
        if(result.length) {
          this.items.push(...result);
        } else {
          this.noResult = true;
          this.message = "No result found";
        }
      } catch(err) {
        this.noResult = true;
        this.message = "Error loading data";
      }
    }
  },
  components: {
    AppArt,
    InfiniteScroll,
  },
}
</script>