<template>
  <label class="label"
  v-if='radio'
  :class='verifiedView'
  >
    <input class='checkbox' type='radio'
    v-model="inputValue"
    :value="checkboxValue"
    :name='checkboxName'
    :checked='checkboxChecked'
    @change='toggledCheckbox()'
    >
    <slot></slot>
    <span class='label-text'>
      {{ descr }}
      <slot name='verified'></slot>
    </span>
  </label>

  <label class="label"
  v-else-if='checkbox'
  :class='verifiedView'
  >
    <input class='checkbox' type='checkbox'
    :value="checkboxValue"
    @change='toggledCheckbox()'
    >
    <slot></slot>
    <span class='label-text'>
      {{ descr }}
      <slot name='verified'></slot>
    </span>
  </label>

  <label class="label"
  v-else
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
    checkbox:{
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
    verified:{
      type: Boolean,
      required: false,
    }
  },
  data() {
    return {
      inputValue: '',
    }
  },
  mounted () {
    if (this.radio & this.checkboxChecked){
      this.inputValue = this.checkboxValue
      this.$emit('choosed', this.inputValue)
    }
  },
  methods: {
    typedText() {
      this.$emit('typed', this.inputValue)
    },
    toggledCheckbox(){
      this.$emit('choosed', this.checkboxValue)
    }
  },
  computed: {
    viewStyle() {
      return 'input--' + this.view
    },
    verifiedView(){
      return this.verified ? 'label--verified' : ''
    },
  },
  emits:[
    'typed', 'choosed'
  ],
}
</script>