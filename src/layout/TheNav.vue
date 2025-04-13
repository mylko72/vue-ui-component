<template>
  <div class="flex-none w-64">
    <nav class="px-9 py-5 border border-slate-200 rounded-2xl">
      <ul>
        <li v-for="(menu, i) in menus" :key={i}>
          <RouterLink>{{ menu.item }}</RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        menus: [
          {
            item: 'Tab',
            url: '/tab'
          },
          {
            item: 'Accordion',
            url: '/accordion'
          },
          {
            item: 'Popup',
            url: '/popup'
          },
          {
            item: 'Swiper',
            url: '/swiper'
          },
        ]
      }
    }

  }
</script>

<style lang="scss" scoped>

</style>