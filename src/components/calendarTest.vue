<template>
  <div>
    <div class="calendarTestArea touchAll">
      <vc-calendar :attributes="attrs" />
      <!--       <vc-date-picker mode="date" is-inline="true"/> -->
      <vc-calendar is-expanded />
    </div>
  </div>
</template>

<script>

import i18n from '@/language'

// import { VCalendar } from 'v-calendar'

export default {
  name: 'CalendarTest',
  components: {
    // VCalendar,
  },
  data () {
    return {
      language : i18n.locale,
      range: {
        start: new Date(2020, 0, 1),
        end: new Date(2020, 0, 5)
      },
      date: new Date(),
    }

    // const month = new Date().getMonth();
    //     const year = new Date().getFullYear();
    //     return {
    //       masks: {
    //         weekdays: 'WWW',
    //       },
    //       attributes: [
    //         {
    //           key: 1,
    //           customData: {
    //             title: 'Lunch with mom.',
    //             class: 'bg-red-600 text-white',
    //           },
    //           dates: new Date(year, month, 1),
    //         },
    //         {
    //           key: 2,
    //           customData: {
    //             title: 'Take Noah to basketball practice',
    //             class: 'bg-blue-500 text-white',
    //           },
    //           dates: new Date(year, month, 2),
    //         },
    //         {
    //           key: 3,
    //           customData: {
    //             title: "Noah's basketball game.",
    //             class: 'bg-blue-500 text-white',
    //           },
    //           dates: new Date(year, month, 5),
    //         },
    //         {
    //           key: 4,
    //           customData: {
    //             title: 'Take car to the shop',
    //             class: 'bg-indigo-500 text-white',
    //           },
    //           dates: new Date(year, month, 5),
    //         },
    //         {
    //           key: 4,
    //           customData: {
    //             title: 'Meeting with new client.',
    //             class: 'bg-teal-500 text-white',
    //           },
    //           dates: new Date(year, month, 7),
    //         },
    //         {
    //           key: 5,
    //           customData: {
    //             title: "Mia's gymnastics practice.",
    //             class: 'bg-pink-500 text-white',
    //           },
    //           dates: new Date(year, month, 11),
    //         },
    //         {
    //           key: 6,
    //           customData: {
    //             title: 'Cookout with friends.',
    //             class: 'bg-orange-500 text-white',
    //           },
    //           dates: { months: 5, ordinalWeekdays: { 2: 1 } },
    //         },
    //         {
    //           key: 7,
    //           customData: {
    //             title: "Mia's gymnastics recital.",
    //             class: 'bg-pink-500 text-white',
    //           },
    //           dates: new Date(year, month, 22),
    //         },
    //         {
    //           key: 8,
    //           customData: {
    //             title: 'Visit great grandma.',
    //             class: 'bg-red-600 text-white',
    //           },
    //           dates: new Date(year, month, 25),
    //         },
    //       ],
    //     };
  },

  computed:{
    checkCurrentLanguage(){return i18n.locale},
  },
  watch:{
    checkCurrentLanguage(lang){this.language = lang},
  },
  created(){

  },
  methods:{

  },
}
</script>

<style scoped>



</style>



// WEBPACK FOOTER //
// src/components/calendarTest.vue