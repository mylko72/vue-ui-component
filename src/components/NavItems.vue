<template>
  <nav>
    <ul>
      <li v-for="(menu, i) in menus" class="my-2" :key={i}>
        <RouterLink :to="menu.url" @click="$emit('close')" class="flex items-center pl-3 text-sm font-semibold leading-9 hover:bg-slate-100 hover:rounded-2xl">
          <!-- 아이콘을 동적으로 렌더링 -->
          <component :is="menu.icon" class="inline-block w-5 h-5 mr-2" />
          {{ menu.item }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script>
  import { CgTab } from '@kalimahapps/vue-icons';
  import { ThLayoutAccordionSeparated } from '@kalimahapps/vue-icons';
  import { CaPopup } from '@kalimahapps/vue-icons';
  import { MiTooltip } from '@kalimahapps/vue-icons';
  import { BxTable } from '@kalimahapps/vue-icons';
  import { MdOutlinedViewCarousel } from '@kalimahapps/vue-icons';
  import { HuSwitchOn } from '@kalimahapps/vue-icons';
  import { ClSlider01 } from '@kalimahapps/vue-icons';

  export default {
    name: 'NavItems',
    components: {
      CgTab, ThLayoutAccordionSeparated, CaPopup, MiTooltip, BxTable, MdOutlinedViewCarousel, HuSwitchOn, ClSlider01
    },
    data(){
      return {
        menus: [
          {
            item: 'Tabs',
            url: '/tab',
            icon: 'CgTab'
          },
          {
            item: 'Accordion',
            url: '/accordion',
            icon: 'ThLayoutAccordionSeparated'
          },
          {
            item: 'Popup(Modal)',
            url: '/popup',
            icon: 'CaPopup'
          },
          {
            item: 'Tooltip',
            url: '/tooltip',
            icon: 'MiTooltip'
          },
          {
            item: 'Table',
            url: '/table',
            icon: 'BxTable'
          },
          {
            item: 'Swiper',
            url: '/swiper',
            icon: 'MdOutlinedViewCarousel'
          },
          {
            item: 'Switch',
            url: '/switch',
            icon: 'HuSwitchOn'
          },
          {
            item: 'Slider',
            url: '/slider',
            icon: 'ClSlider01'
          },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>