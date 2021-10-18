<template>
  <label class="label"
  v-if='!radio'
  >
    {{ descr }}
    <input class='input' 
    :type="type"
    :placeholder="placeholderText"
    :class='view ? viewStyle : ""'
    v-model="inputValue"
    @input='typedText()'
    >
  </label>

  <label class="label"
  v-else
  >
    <slot></slot>
    {{ descr }}
    <input class='radio' type="radio"
    :value="radioValue"
    
    >
  </label>
</template>

<script>
export default {
  props: {
    descr: {
      type: String,
      required: false,
    },
    placeholderText: {
      type: String,
      required: false,
    },
    view: {
      type: String,
      required: false,
    },
    type:{
      type: String,
      default: 'text'
    },
    radio:{
      type: Boolean,
      default: false,
    },
    radioValue:{
      type: String,
      required: false,
    }
  },
  data() {
    return {
      inputValue: '',
    }
  },
  methods: {
    typedText() {
      this.$emit('typed', this.inputValue)
    }
  },
  computed: {
    viewStyle() {
      return 'input--' + this.view
    }
  },
}
</script>