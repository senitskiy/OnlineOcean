<template>
  <section class="create-modal">
    <div class="container">
      <div class="create-modal__inner">
        <app-button
        title='Back'
        hasSlot
        view='back'
        @click='routePrev()'
        >
          <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.223538 6.45372L6.45371 0.223657C6.59781 0.0794465 6.79017 0 6.99527 0C7.20037 0 7.39273 0.0794465 7.53683 0.223657L7.99564 0.682352C8.29419 0.981244 8.29419 1.46703 7.99564 1.76547L2.764 6.9971L8.00144 12.2345C8.14554 12.3787 8.2251 12.571 8.2251 12.776C8.2251 12.9812 8.14554 13.1734 8.00144 13.3178L7.54263 13.7763C7.39842 13.9206 7.20618 14 7.00108 14C6.79597 14 6.60362 13.9206 6.45952 13.7763L0.223538 7.54059C0.0791006 7.39592 -0.000231743 7.20277 0.00022316 6.99744C-0.000231743 6.79131 0.0791006 6.59827 0.223538 6.45372Z" fill="#D4D4D4"/>
          </svg>
        </app-button>
        <div class="create-modal__imgwrapper">
          <img src="@/assets/images/create-box.svg" alt="">
        </div>
        <h1 class="create-modal__title">
          {{ info.title }}
        </h1>
        {{ data }}
        <div class="create-modal__info">
          <div class="create-modal__content">
            <div class="create-modal__info-inputs">
              <app-input
              descr='The name of your box'
              placeholderText='Enter the name of your box'
              view='lined'
              @typed='typedName'
              ></app-input>
              <app-input
              descr='Description'
              placeholderText='Write a description of your box'
              view='lined'
              @typed='typedDescr'
              ></app-input>
            </div>
            <create-choose
            :chooses='info.chooses'
            @choosed='setChoosed'
            ></create-choose>
            <div class="create-modal__info-fee">
              <app-input
              descr='Price'
              placeholderText='Write the price of your offer'
              view='lined'
              @typed='typedPrice'
              type='number'
              ></app-input>
              <app-select
              :options='info.currency'
              @selectedBlockchain='changeBlockchain'
              ></app-select>
              <p class="create-modal__text">
                Service fee 
                <span>
                  {{ info.siteFee }}
                </span>
              </p>
              <p class="create-modal__text">
                You will receive
                <span>
                  {{ willGet + ' ' + data.blockchain}}
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
          <div class="create-modal__preview"
          :class='isEdit ? "" : "create-modal__preview--preview"'
          >
            <button class="create-modal__preview-btn btn-clear"
            @click='toggleView()'
            >
              {{ isEdit ? info.previewText : info.editText }}
            </button>
            <app-big-art
            :custom='data'
            :isActive='isActiveLink'
            >
              <label class="create-modal__preview-upload upload">
                <p class="upload__title">
                  {{ info.uploadTitle }}
                </p>
                <app-button
                :title='info.uploadBtnTitle'
                ></app-button>
                <input type="file"
                @click.stop
                @click='saveCurrent()'
                @change='loadCover($event)'
                >
              </label>
            </app-big-art>
          </div>
        </div>
        <create-box-loot></create-box-loot>
        <create-chars></create-chars>
        <app-button
        title='Create box'
        view='submit'
        ></app-button>
      </div>
    </div>
  </section>
</template>

<script>
import AppInput from '@/components/App/AppInput.vue';
import AppBigArt from '@/components/App/AppBigArt.vue';
import AppSelect from '@/components/App/AppSelect.vue';
import CreateChoose from '@/components/Create/CreateChoose.vue';
import CreateBoxLoot from '@/components/Create/CreateBoxLoot.vue';
import CreateChars from '@/components/Create/CreateChars.vue';

export default {
  data() {
    return {
      isEdit: true,
      isActiveLink: false,
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
        currency: [
          'eth', 'btc', 'etc'
        ],
        siteFee: '2.5%',
        previewText: 'Preview',
        editText: 'Edit',
        uploadTitle: 'PNG, GIF, WEBP, MP4. Max 100 MB.',
        uploadBtnTitle: 'Upload box',
        uploadLoadedBtnTitle: 'Change box',
      },
      data:{
        name: '',
        descr: '',
        price: '',
        willGet: '',
        blockchain: '',
        type: '',
        classifications: [],
        image:{
          src: '',
        },
        prevImage: null,
      },
    }
  },
  methods: {
    routePrev(){
      this.$router.go(-1)
    },
    setChoosed(value) {
      this.data.type = value
    },
    typedName(value){
      this.data.name = value
    },
    typedDescr(value){
      this.data.descr = value
    },
    typedPrice(value){
      this.data.price = Number(value)
      this.data.willGet = this.willGet
    },
    changeBlockchain(value){
      this.data.blockchain = value
    },
    toggleView(){
      this.isEdit = !this.isEdit
    },
    loadCover(event){
      if (event.srcElement.files.length !== 0){
        this.data.image = event.target.files[0]
        this.data.image.src = URL.createObjectURL(this.data.image);
        this.info.uploadBtnTitle = this.info.uploadLoadedBtnTitle
      } else{
        this.data.image = this.data.prevImage
      }
    },
    saveCurrent(){
      this.data.prevImage = this.data.image
    },
  },
  computed: {
    willGet(){
      let siteFee = this.info.siteFee
      siteFee = Number(siteFee.replace(/%/i, '')) / 100

      return this.data.price - (this.data.price * siteFee)
    }
  },
  components: {
    AppInput,
    AppBigArt,
    CreateChoose,
    CreateBoxLoot,
    CreateChars,
    AppSelect,
  },
}
</script>