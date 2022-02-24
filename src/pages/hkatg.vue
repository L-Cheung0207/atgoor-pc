<template>
  <div class="font">
<!--     <div>!!!!!!</div>
    HKATG lalalala
    <div v-html="$t('init')"></div> -->



   <!--  <div id="background" :style="{ backgroundImage: `url('${backgroundImage}')` }" ></div>
 -->
    <cesium></cesium>
    <transition name="fade">
      <landing3D v-show="this.isShow3DScene"></landing3D> 
    </transition>


    <leftMenu></leftMenu>
    <rightMenu></rightMenu>



    <transition name="fade">
      <landing class="slowFade" v-show="this.isShowLanding"></landing>
    </transition>

    <transition name="fade">
      <characterSelect v-show="this.isShowCharacterSelect"></characterSelect>
    </transition>

    <transition name="fade">
      <searchSelection v-show="this.isShowLocationSelection"></searchSelection>
    </transition>

    <transition name="fade">
      <cesiumDataLoading v-show="this.isShowCesiumDataLoading"></cesiumDataLoading>
    </transition>
<!--     <landing></landing> -->


    <mobileRotate></mobileRotate>


  </div>
</template>

<script>
  import i18n from '@/language';
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
    name: 'hkatg',
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
    created(){

    },

    methods:{

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
        this.isShowLanding = flag;
      },
      checkIsShow3DScene(flag){
        this.isShow3DScene = flag;
      },
      checkIsShowCharacterSelect(flag){
        this.isShowCharacterSelect = flag;
      },
      checkIsShowLocationSelection(flag){this.isShowLocationSelection = flag},
      checkIsShowCesiumDataLoading(flag){this.isShowCesiumDataLoading = flag},
      //checkProcessingStage(stage){console.log("stage : " + stage);},
    },


  }
</script>
<style scoped>
/*.fadeSlow-enter-active, .fadeSlow-leave-active {
  transition: opacity 1s;
}*/
/*.fade-enter, .fade-leave-to  .fade-leave-active below version 2.1.8  {
  transition: opacity 2s;
}*/

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


// WEBPACK FOOTER //
// src/pages/hkatg.vue