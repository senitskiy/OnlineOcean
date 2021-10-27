<template>
  <multiselect
  v-model="currValue"
  :options="options"
  :limit='5'
  hideSelected
  ref='select'
  @select='changedValue'
  :caret='false'
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
  mounted () {
    this.$refs.select.select(this.options[0])
    this.changedValue()
  },
  data() {
    return {
      currValue: '',
    }
  },
  methods: {
    changedValue() {
      this.$emit('selectedBlockchain', this.currValue)
    }
  },
  components: {
    Multiselect,
  },
  emits:[
    'selectedBlockchain'
  ],
}
</script>