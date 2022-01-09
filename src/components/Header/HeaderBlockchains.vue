<template>
  <div class="blockchains"
  :class='blockchainsState'
  @click.stop
  >
    <p class="blockchains__title">
      Choosing a Blockchain
    </p>
    <ul class="blockchains__items"
    ref='blockchainItemsParent'
    >
      <li class="blockchains__item"
      v-for='item in allBlockchains'
      :key='item'
      >
        <app-input
        :descr='item.label'
        :checkboxValue='item.value'
        :checkboxName='data.blockchainsName'
        :checkboxChecked='item.value === currentBlockchain.value'
        @choosed='checkInput'
        radio
        >
          <span class="blockchains__imgwrapper">
            <img :src="item.image" alt="">
          </span>
        </app-input>
      </li>
    </ul>
  </div>
  <div class="blockchains__pad"></div>
</template>

<script>
import AppInput from '@/components/App/AppInput.vue';

import { mapGetters, mapMutations } from "vuex";

export default {
  props: {
    opened: {
      type: Boolean,
    },
  },
  data() {
    return {
      data:{
        currBlockchain: '',
        blockchainsName: '',
      }
    }
  },
  mounted () {
    this.generateName()
  },
  computed: {
    blockchainsState() {
      return this.opened ? 'blockchains--active' : ''
    },
    ...mapGetters(['allBlockchains']),
    ...mapGetters(['currentBlockchain']),
  },
  methods: {
    generateName(){
      let randomValue = Math.random() + Math.random()
      this.data.blockchainsName = randomValue.toString()
    },
    blockchainCheckedState(value){
      console.log(value === this.currentBlockchain.value)
      return value === this.currentBlockchain.value
    },
    checkInput(value){
      let allBlockchains = this.allBlockchains
      let needValue = Object.values(allBlockchains).find((obj) => {
        return obj.value == value
      })

      this.setNewBlockchain(needValue)
    },
    ...mapMutations(['setNewBlockchain'])
  },
  components: {
    AppInput,
  },
}
</script>