<template>
  <section class="create">
    <div class="container">
      <div class="create__wrapper">
        <div class="create__inner">
          <app-button
          title='back'
          hasSlot
          view='back'
          @click='routePrev()'
          >
            <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.223538 6.45372L6.45371 0.223657C6.59781 0.0794465 6.79017 0 6.99527 0C7.20037 0 7.39273 0.0794465 7.53683 0.223657L7.99564 0.682352C8.29419 0.981244 8.29419 1.46703 7.99564 1.76547L2.764 6.9971L8.00144 12.2345C8.14554 12.3787 8.2251 12.571 8.2251 12.776C8.2251 12.9812 8.14554 13.1734 8.00144 13.3178L7.54263 13.7763C7.39842 13.9206 7.20618 14 7.00108 14C6.79597 14 6.60362 13.9206 6.45952 13.7763L0.223538 7.54059C0.0791006 7.39592 -0.000231743 7.20277 0.00022316 6.99744C-0.000231743 6.79131 0.0791006 6.59827 0.223538 6.45372Z" fill="#D4D4D4"/>
            </svg>
          </app-button>
          <h1 class="create__title">
            {{ create.title }}
          </h1>
          <p class="create__info">
            {{ create.info }}
          </p>
          <div class="create__items">
            <create-card
            v-for="card in cards"
            :key="card"
            :href="card.href"
            :label="card.label"
            :image="card.image"
            ></create-card>
          </div>
          <p class="create__descr">
            {{ create.descr }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CreateCard from '@/components/Create/CreateCard.vue';
import AppButton from '@/components/App/AppButton.vue';

export default {
  title: 'Create',
  data() {
    return {
      create:{
        title: 'Create collectible',
        info: 'Choose “Single” if you want your collectible to be one of a kind or “Multiple” if you want to sell one collectible multiple times',
        descr: 'We do not own your private keys and cannot access your funds without your confirmation',
      },
      cards:[
        {
          label: 'Single',
          href: 'single',
          image: require('@/assets/images/create-single.svg'),
        },
        {
          label: 'Multiple',
          href: 'multiple',
          image: require('@/assets/images/create-multiple.svg'),
        },
      ],
    }
  },
  methods: {
    routePrev() {
      this.$router.go(-1)
    }
  },
  components: {
    CreateCard,
    AppButton
  },
}
</script>