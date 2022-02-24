<template>
  <div class="font">
    <transition name="fade">
      <landing3DSimple v-show="this.isShow3DScene"></landing3DSimple> 
    </transition>

  </div>
</template>

<script>
  import i18n from '@/language';
  import { store } from '../store'


  import landing3DSimple from '@/components/landing3DSimple'

  

  export default {
    name: 'hkatg',
    components: {
      landing3DSimple,
    },
    data () {
      return {
        isShow3DScene : true,
      }
    },
    created(){

    },

    methods:{

    },

    computed:{
    
    },
    watch:{
      
    },


  }
</script>
<style scoped>

</style>


// WEBPACK FOOTER //
// src/pages/simpleScene.vue