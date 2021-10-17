<template>
  <label class="label">
    {{ descr }}
    <input class='input' 
    :type="type"
    :placeholder="placeholderText"
    :class='view ? viewStyle : ""'
    v-model="inputValue"
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