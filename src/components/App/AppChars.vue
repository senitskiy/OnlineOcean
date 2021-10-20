<template>
  <span class="art__chars"
  :class='viewStyle ? "art__chars--active" : ""'
  >
    <svg class="art__transfericon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.0635 23.6172L0.383412 12.9369C0.136194 12.6899 0 12.3602 0 12.0085C0 11.6569 0.136194 11.3272 0.383412 11.0802L1.16975 10.2936C1.68213 9.78183 2.51491 9.78183 3.02651 10.2936L11.995 19.2621L20.9735 10.2837C21.2207 10.0367 21.5503 9.90027 21.9017 9.90027C22.2535 9.90027 22.583 10.0367 22.8304 10.2837L23.6166 11.0702C23.8638 11.3174 24 11.647 24 11.9986C24 12.3502 23.8638 12.68 23.6166 12.927L12.9267 23.6172C12.6787 23.8648 12.3476 24.0008 11.9956 24.0001C11.6422 24.0008 11.3113 23.8648 11.0635 23.6172Z" fill="#EA3333"/>
      <path d="M11.2976 10.7129L3.28756 2.70266C3.10215 2.5174 3 2.27008 3 2.00638C3 1.74267 3.10215 1.49536 3.28756 1.31009L3.87731 0.720193C4.2616 0.336342 4.88618 0.336342 5.26988 0.720193L11.9963 7.44658L18.7301 0.71273C18.9155 0.527463 19.1627 0.425171 19.4263 0.425171C19.6901 0.425171 19.9373 0.527463 20.1228 0.71273L20.7124 1.30263C20.8979 1.48804 21 1.73521 21 1.99891C21 2.26262 20.8979 2.50993 20.7124 2.6952L12.695 10.7129C12.509 10.8986 12.2607 11.0006 11.9967 11C11.7317 11.0006 11.4835 10.8986 11.2976 10.7129Z" fill="#EA3333"/>
    </svg>
    <ul class="art__list">
      <li class="art__list-item art__item">
        <span class="art__item-title"> Amount </span>
        <span class="art__item-text">
          {{ chars.amount }}
        </span>
      </li>
      <li class="art__list-item art__item">
        <span class="art__item-title"> Probability </span>
        <span class="art__item-text">
          {{ chars.probability }}
        </span>
      </li>
      <li class="art__list-item art__item">
        <span class="art__item-title"> Rank </span>
        <span class="art__item-text">
          {{ chars.rank }}
        </span>
      </li>
    </ul>
  </span>
</template>

<script>
export default {
  props: {
    chars: {
      type: Object,
      required: true,
    },
    viewStyle:{
      type: Boolean,
      default: false,
    }
  },
};
</script>