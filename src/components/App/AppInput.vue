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
    :required='inputRequired'
    >
    <slot></slot>
    <span class='label-text'>
      {{ descr }}
      <slot name='verified'></slot>
    </span>
  </label>

  <label class="label"
  v-if='checkbox'
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
  v-if='textarea'
  :class='inputRequired ? "label--required" : ""'
  >
    <p class="label-text">
      {{ descr }}
    </p>
    <input class='input textarea' 
    v-model="inputValue"
    :type="type"
    :placeholder="placeholderText"
    :class='view ? viewStyle : ""'
    @input='typedText()'
    ref='input'
    >
  </label>

  <label class="label"
  v-else
  :class='inputRequired ? "label--required" : ""'
  >
    <p class="label-text">
      {{ descr }} 
    </p>
    <input class='input' 
    v-model="inputValue"
    :placeholder="placeholderText"
    :class='view ? viewStyle : ""'
    @input='typedText()'
    ref='input'
    >
  </label>
</template>

<script>
export default {
  props: {
    inputRequired: {
      type: Boolean,
      default: false,
    },
    descr: {
      type: String,
      required: false,
    },
    placeholderText: {
      type: String,
      required: false,
    },
    inputDefaultValue:{
      default: '',
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
    textarea:{
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
    if (this.inputDefaultValue !== ''){
      this.$refs.input.value = this.inputDefaultValue
    }

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