<template>
  <div class="create-modal__chars create-chars">
    <div class="create-chars__row"
    v-for='row in loaded'
    :key='row'
    >
      <div class="create-chars__col create-chars__name">
        {{ row.name }}
      </div>
      <div class="create-chars__col create-chars__classification">
        {{ row.classification }}
      </div>
      <div class="create-chars__col create-chars__amount">
        {{ row.amount }}
      </div>
      <div class="create-chars__col create-chars__probability">
        <span
        v-if='row.first'
        >
          {{ row.probability }}
        </span>
        <slider
        v-else
        v-model='row.probability'
        :min='0'
        :max='100'
        :format='format'
        ></slider>
      </div>
      <div class="create-chars__col create-chars__price">
        {{ row.price }}
      </div>
      <div class="create-chars__col create-chars__watch">
        <span
        v-if='row.first'
        >
          {{ row.href }}
        </span>
        <router-link 
        :to='row.href'
        v-else
        >
          <img src="@/assets/images/watch.svg" alt="">
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from '@vueform/slider'

import '@vueform/slider/themes/default.css'

export default {
  data() {
    return {
      probabilityValue: 0,
      format: function (value) {
        return `${Math.round(value)}%`
      },
      loaded:[
        {
          first: true,
          name: 'name',
          classification: 'classification',
          amount: 'amount',
          probability: 'probability',
          price: 'price',
          href: 'watch',
        },
        {
          name: 'Book Knight',
          classification: 'Legendary',
          amount: '35',
          probability: 25,
          price: '20.034 ETH',
          href: '',
        },
        {
          name: 'Sword',
          classification: 'Epic',
          amount: '257',
          probability: 60,
          price: '0.0345 ETH',
          href: '',
        },
        {
          name: 'Sword',
          classification: 'Epic',
          amount: '257',
          probability: 8,
          price: '0.0345 ETH',
          href: '',
        },
        {
          name: 'Sword',
          classification: 'Epic',
          amount: '257',
          probability: 7,
          price: '0.0345 ETH',
          href: '',
        },
      ]
    }
  },
  methods: {
    changedProbabilityValue() {
      
    }
  },
  components: {
    Slider
  },
}
</script>