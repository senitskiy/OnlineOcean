<template>
  <vue-select
  v-model="currValue"
  :options="options"
  ></vue-select>
</template>

<script>
import VueSelect from 'vue-next-select'
import 'vue-next-select/dist/index.min.css'

export default {
  data() {
    return {
      currValue: '',
      options:[
        'ETH', 'btc', 'etc'
      ]
    }
  },
  components: {
    VueSelect,
  },
}
</script>