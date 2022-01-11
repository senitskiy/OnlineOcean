<template>
  <ul class="social__list">
    <li class="social__item"
    v-for='social in socials'
    :key='social'
    >
      <router-link class='social__link' :to='social.href'>
        <img :src="social.src" alt="">
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
          src: require('@/assets/images/discord.svg')
        },
        {
          href: '#',
          src: require('@/assets/images/twitter.svg')
        },
        {
          href: '#',  
          src: require('@/assets/images/telegram.svg')
        },
      ],
    }
  },
}
</script>