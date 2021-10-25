<template>
  <multiselect
  v-model="currValue"
  :options="options"
  :limit='5'
  hideSelected
  ></multiselect>
</template>

<script>
import Multiselect from '@vueform/multiselect'

import '@vueform/multiselect/themes/default.css'

export default {
  props: {
    options: {
      type: Array,
      required: true, 
    },
  },
  data() {
    return {
      currValue: '',
    }
  },
  components: {
    Multiselect,
  },
}
</script>