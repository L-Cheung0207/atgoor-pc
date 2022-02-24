<template>
  <div class="font">
    <cesium />
    <transition name="fade">
      <landing3D v-show="isShow3DScene" /> 
    </transition>

    <leftMenu />
    <rightMenu />

    <transition name="fade">
      <landing
        v-show="isShowLanding"
        class="slowFade"
      />
    </transition>

    <transition name="fade">
      <characterSelect v-show="isShowCharacterSelect" />
    </transition>

    <transition name="fade">
      <searchSelection v-show="isShowLocationSelection" />
    </transition>

    <transition name="fade">
      <cesiumDataLoading v-show="isShowCesiumDataLoading" />
    </transition>
    <!--     <landing></landing> -->


    <mobileRotate />
  </div>
</template>

<script>
import { store } from '../store'

import mobileRotate from '@/components/mobileRotate'
import landing from '@/components/landing'
import landing3D from '@/components/landing3D'
import cesium from '@/components/cesium'
import leftMenu from '@/components/leftMenu'
import rightMenu from '@/components/rightMenu'
import characterSelect from '@/components/characterSelect'
import searchSelection from '@/components/searchSelection'
import cesiumDataLoading from '@/components/cesiumDataLoading'

  

export default {
  name:"hkatg-page",
  components: {
    mobileRotate,
    landing,
    landing3D,
    cesium,
    leftMenu,
    rightMenu,
    characterSelect,
    searchSelection,
    cesiumDataLoading
  },
  data () {
    return {
      isShowLanding : true,
      isShow3DScene : true,
      isShowCharacterSelect : false,
      isShowLocationSelection : false,
      isShowCesiumDataLoading : false,



    }
  },
  computed:{
    checkIsShowLanding(){return store.state.isShowLanding},
    checkIsShow3DScene(){return store.state.isShow3DScene},
    checkIsShowCharacterSelect(){return store.state.isShowCharacterSelect},
    checkIsShowLocationSelection(){return store.state.isShowLocationSelection},
    checkIsShowCesiumDataLoading(){return store.state.isShowCesiumDataLoading},
    //checkProcessingStage(){return store.state.processingStage;},
  },
  watch:{
    checkIsShowLanding(flag){
      this.isShowLanding = flag
    },
    checkIsShow3DScene(flag){
      this.isShow3DScene = flag
    },
    checkIsShowCharacterSelect(flag){
      this.isShowCharacterSelect = flag
    },
    checkIsShowLocationSelection(flag){this.isShowLocationSelection = flag},
    checkIsShowCesiumDataLoading(flag){this.isShowCesiumDataLoading = flag},
    //checkProcessingStage(stage){console.log("stage : " + stage);},
  },


}
</script>
<style scoped>
.slowFade{
  transition: opacity 2s;
}


.font{
  font-family: 'Roboto';
}
.font:lang(TC){
  font-family: "Noto Sans TC";
}
.font:lang(SC){
  font-family: "Noto Sans SC";
}


</style>