<template>
  <section class="live">
    <div class="container">
      <div class="live__inner">
        <div class="live__label">
          <p class="live__label-text">
            Live
            <br>
            Tape
          </p>
        </div>
        <div class="live__items">
          <app-art
          artId='34'
          hasSlot
          ></app-art>
          <app-art
          artId='34'
          hasSlot
          ></app-art>
          <app-art
          artId='34'
          hasSlot
          ></app-art>
          <app-art
          artId='34'
          hasSlot
          ></app-art>
          <app-art
          artId='34'
          hasSlot
          ></app-art>
          <app-art
          artId='34'
          hasSlot
          ></app-art>
          <app-art
          artId='34'
          hasSlot
          ></app-art>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppArt from '@/components/App/AppArt.vue';

export default {
  components: {
    AppArt,
  },
}
</script>
