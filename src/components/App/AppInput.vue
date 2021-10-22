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
    <input class='radio' 
    :type="type"
    v-model="inputValue"
    :value="checkboxValue"
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
    checkboxValue:{
      type: String,
      required: false,
    },
    checkboxName:{
      type: String,
      required: false,
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
    if (this.radio){
      this.inputValue = this.radioValue
      this.$emit('choosed', this.inputValue)
    }
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