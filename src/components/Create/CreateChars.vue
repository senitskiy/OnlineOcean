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
        {{ row.probability }}
      </div>
      <div class="create-chars__col create-chars__price">
        {{ row.price }}
      </div>
      <div class="create-chars__col create-chars__watch">
        {{ row.watch }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loaded:[
        {
          name: 'name',
          classification: 'classification',
          amount: 'amount',
          probability: 'probability',
          price: 'price',
          watch: 'watch',
        },
        {
          name: 'Book Knight',
          classification: 'Legendary',
          amount: '35',
          probability: '',
          price: '20.034 ETH',
          watch: '',
        },
        {
          name: 'Sword',
          classification: 'Epic',
          amount: '257',
          probability: '',
          price: '0.0345 ETH',
          watch: '',
        },
      ]
    }
  },
}
</script>