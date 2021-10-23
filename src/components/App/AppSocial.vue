<template>
  <ul class="social__list">
    <li class="social__item"
    v-for='social in socials'
    :key='social'
    >
      <router-link class='social__link' :to='social.href'>
        <img src="@/assets/images/instagram.svg" alt="">
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      socials:[
        {
          href: '#',
        },
        {
          href: '#',
        },
        {
          href: '#',  
        },
      ],
    }
  },
}
</script>