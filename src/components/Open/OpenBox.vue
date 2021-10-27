<template>
  <section class="open">
    <div class="container">
      <div class="open__inner">
        <p class="open__title">
          <span>
            {{ content.sectionPreTitle }}
          </span>
          {{ content.sectionTitle + ' #' + this.$route.params.itemId }}
        </p>
        <div class="open__imgwrapper">
          <img src="@/assets/images/temp/box-preview.jpg" alt="">
        </div>
        <app-button
        :title='content.btnTitle'
        ></app-button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      content:{
        sectionPreTitle: 'Opening: ',
        sectionTitle: 'Random Box',
        btnTitle: 'Open Box',
      }
    }
  },
}
</script>