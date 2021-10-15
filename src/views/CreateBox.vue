<template>
  <section class="create-modal">
    <div class="container">
      <div class="create-modal__inner">
        <div class="create-modal__imgwrapper">
          <img src="@/assets/images/create-box.svg" alt="">
        </div>
        <h1 class="create-modal__title">
          {{ info.title }}
        </h1>
        <div class="create-modal__info">
          <div class="create-modal__content">
            <div class="create-modal__info-inputs">
              <app-input
              descr='The name of your box'
              placeholderText='Enter the name of your box'
              view='lined'
              ></app-input>
              <app-input
              descr='Description'
              placeholderText='Write a description of your box'
              view='lined'
              ></app-input>
            </div>
            <create-choose
            :chooses='info.chooses'
            @choosed='setChoosed()'
            ></create-choose>
            <div class="create-modal__info-fee">
              <app-input
              descr='Price'
              placeholderText='Write the price of your offer'
              view='lined'
              @typed='typedText'
              ></app-input>
              <p class="create-modal__text">
                Service fee 
                <span>
                  {{ info.siteFee }}
                </span>
              </p>
              <p class="create-modal__text">
                You will receive
                <span>
                  {{ willGet }}
                </span>
              </p>
            </div>
            <div class="create-modal__info-classification">
              <app-input
              descr='List of classifications'
              placeholderText='Legendary, Perfect, Epic, Rare'
              view='lined'
              ></app-input>
              <p class="create-modal__text">
                Displays a list of loaded classifications
              </p>
            </div>
          </div>
          <div class="create-modal__preview">
            <app-row-slide
            
            ></app-row-slide>
          </div>
        </div>
        <div class="create-modal__chars">
          
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppInput from '@/components/App/AppInput.vue';
import AppRowSlide from '@/components/App/AppRowSlide.vue';
// import AppSelect from '@/components/App/AppSelect.vue';
import CreateChoose from '@/components/Create/CreateChoose.vue';

export default {
  data() {
    return {
      info:{
        title: 'Create Random Box',
        chooses:[
          {
            text: 'Fixed price',
            checked: true,
          },
          {
            text: 'Auction',
            checked: false,
          },
          {
            text: 'Bidding',
            checked: false,
          },
        ],
        siteFee: '2.5%',
      },
      data:{
        chooses: '',
        boxPrice: null,
        willGetMoney: '',
      }
    }
  },
  methods: {
    setChoosed(value) {
      console.log(value)
      // this.data.chooses = value
    },
    typedText(value){
      this.data.boxPrice = Number(value)
    }
  },
  computed: {
    willGet(){
      let siteFee = this.info.siteFee
      siteFee = Number(siteFee.replace(/%/i, '')) / 100

      return this.data.boxPrice - (this.data.boxPrice * siteFee)
    }
  },
  components: {
    AppInput,
    AppRowSlide,
    CreateChoose,
    // AppSelect,
  },
}
</script>