<template>
  <div class="font">
    <transition name="fade">
      <landing3DSimple v-show="isShow3DScene" /> 
    </transition>
  </div>
</template>

<script>
import landing3DSimple from '@/components/landing3DSimple'

  

export default {
  components: {
    landing3DSimple,
  },
  data () {
    return {
      isShow3DScene : true,
    }
  },

  computed:{
    
  },
  watch:{
      
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
// src/pages/simpleScene.vue