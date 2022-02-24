<template>
  <div>
    <calendarTest></calendarTest>
  </div>
</template>

<script>
  import i18n from '@/language';
  import { store } from '../store'
  import calendarTest from '@/components/calendarTest'

  export default {
    name: 'ceddsloar',
    components: {
      calendarTest,
    },
    data () {
      return {
        
      }
    },
    created(){

    },

    methods:{

    },

    computed:{
      //checkProcessingStage(){return store.state.processingStage;},
    },
    watch:{
      //checkProcessingStage(stage){console.log("stage : " + stage);},
    },


  }
</script>



// WEBPACK FOOTER //
// src/pages/calendar.vue