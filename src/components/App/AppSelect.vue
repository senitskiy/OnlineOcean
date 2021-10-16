<template>
  <vue-select
  v-model="currValue"
  :options="options"
  close-on-select
  placeholder="Pick some"
  ></vue-select>
</template>

<script>
import VueSelect from 'vue-next-select'
import 'vue-next-select/dist/index.min.css'

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
    VueSelect,
  },
}
</script>