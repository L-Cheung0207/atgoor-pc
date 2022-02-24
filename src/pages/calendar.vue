<template>
  <div>
    <calendarTest />
  </div>
</template>

<script>
import calendarTest from '@/components/calendarTest'

export default {
  name: 'AB',
  components: {
    calendarTest,
  },
  data () {
    return {
        
    }
  },

  computed:{
    //checkProcessingStage(){return store.state.processingStage;},
  },
  watch:{
    //checkProcessingStage(stage){console.log("stage : " + stage);},
  },
  created(){

  },

  methods:{

  },


}
</script>



// WEBPACK FOOTER //
// src/pages/calendar.vue