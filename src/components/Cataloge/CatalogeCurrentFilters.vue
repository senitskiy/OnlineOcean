<template>
  <div class="cataloge__current">
    <p class="cataloge__current-all">
      {{ allItems }}
    </p>
    <div class="cataloge__current-filters">
      <button class="cataloge__current-filter btn-clear">
        ETC
        <img src="@/assets/images/close.svg" alt="">
      </button>
      <button class="cataloge__current-filter btn-clear">
        Action
        <img src="@/assets/images/close.svg" alt="">
      </button>
      <button class="cataloge__current-reset btn-clear">
        Clear All
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allItems: '1 412 515 results',
    }
  },
}
</script>