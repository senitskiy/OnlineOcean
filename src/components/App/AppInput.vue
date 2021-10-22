<template>
  <label class="label"
  v-if='!radio'
  >
    {{ descr }}
    <input class='input' 
    v-model="inputValue"
    :type="type"
    :placeholder="placeholderText"
    :class='view ? viewStyle : ""'
    @input='typedText()'
    >
  </label>

  <label class="label"
  v-else
  >
    <input class='radio' type="radio"
    v-model="inputValue"
    :value="radioValue"
    :name='checkboxName'
    :checked='checkboxChecked'
    @change='choosedRadio()'
    ref='radio'
    >
    <slot></slot>
    <span class='label-text'>
      {{ descr }}
    </span>
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
    },
    checkboxName:{
      type: String,
      required: true,
    },
    checkboxChecked:{
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      inputValue: '',
    }
  },
  mounted () {
    this.inputValue = this.radioValue
    this.$emit('choosed', this.inputValue)
  },
  methods: {
    typedText() {
      this.$emit('typed', this.inputValue)
    },
    choosedRadio(){
      this.$emit('choosed', this.inputValue)
    }
  },
  computed: {
    viewStyle() {
      return 'input--' + this.view
    },
  },
}
</script>