<template>
  <div class="choose">
    <label
    class='choose__label'
    v-for='choose in chooses'
    :key='choose'
    >
      <input class="choose__input" type="radio" name='choose-input'
      :checked='choose.checked'
      @click='choosedOption(choose)'
      :value='choose.text'
      :v-model='currData'
      >
      <span class="choose__text"
      >
        {{ choose.text }}
      </span>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    chooses: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currData: '',
    }
  },
  methods: {
    choosedOption() {
      this.$emit('choosed', this.currData)
    }
  },
}
</script>