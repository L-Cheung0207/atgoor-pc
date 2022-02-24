<template>
  <div>
    <div
      v-show="selectingCountry == countryId"
      :id="'areaSelection_' + areaId"
      class="areaSelectionTemplate touch"
      @mouseup="selectArea()"
    >
      <span :id="'areaSelectionContent_' + areaId">
        <div
          class="areaSelectionTitle"
          v-html="areaName[language]"
        />
      </span>
      <!-- <img class="countrySelectionLockImage" :src="this.countrySelectionLockImage" v-show="!this.countryUnloackDynamic"> -->

      <div class="rightArrowArea">
        <img
          :src="rightArrowImage"
          class="rightArrowImage"
        >
      </div>
    </div>
  </div>
</template>

<script>

import i18n from '@/language'
import { store } from '@/store'

export default {
  name: 'AreaSelection',
  props: ['areaId','countryId','areaName','latitude','longitude','height','cesiumData'],

  data () {
    return {
      language : i18n.locale,
      selectingCountry : '',

      rightArrowImage : require('@/assets/images/general/rightArrow.png'),
    }
  },

  computed:{
    checkCurrentLanguage(){return i18n.locale},
    checkLeftMenuSelectingCountry(){return store.state.leftMenuSelectingCountry},
  },
  watch:{
    checkCurrentLanguage(lang){this.language = lang},
    checkLeftMenuSelectingCountry(country){
      this.selectingCountry = country
    },
  },
  created(){
    // this.setUpImage();
    // this.unlockSelection();
    


  },
  methods:{
    // setUpImage(){
    //   if(this.countryLocalImage != null){
    //     this.countryImageDynamic = require('../../assets/images/leftMenu/countrySelection/' + this.countryLocalImage);
    //   }
    // },

    // unlockSelection(){
    //   let self = this;
    //   if(document.getElementById("countrySelection_" + this.countryId) == null){
    //     setTimeout(function(){
    //       self.unlockSelection();
    //     },200)
    //   }
    //   else{
    //     if(this.countryUnlock !=null){
    //       if(this.countryUnlock == true){
    //         this.countryUnloackDynamic = true;
    //         document.getElementById("countrySelection_" + this.countryId).classList.add("touch");
    //       }
    //       else{
    //         document.getElementById("countrySelectionContent_" + this.countryId).classList.add("halfOpacity");
    //       }
    //     }
    //   }
    // },

    // selectCountry(){
    //   store.state.leftMenuSelectingCountry = this.countryId;
    // },

    selectArea(){

      if(store.state.leftMenuSelectingArea == ''){
        if(this.latitude != null && this.longitude != null && this.height != null){
          store.state.leftMenuSelectingArea = this.areaId

          console.log(store.state.areaDictionary[this.areaId])

          if(store.state.areaDictionary[this.areaId].cesiumData['baseMap'] != null){
            store.state.cesiumBaseMapData = store.state.areaDictionary[this.areaId].cesiumData['baseMap']
          }

          store.state.isShow3DScene = false
        }
        
      }


      
    },

  },
}
</script>

<style scoped>
  .areaSelectionTemplate{
    position: relative;
    left: 50%;
    transform: translate3d(-50%,0,0);
    width: 40vmin;
    height: 6vmin;
    border-radius: 4px;
    margin-bottom: 1vmin;
    background-color: rgb(44,44,44);
    opacity: 0.5;
    overflow: hidden;
  }

  .areaSelectionTemplate:hover{
    opacity: 1;
    background-color: rgb(59,59,59);
    
  }

  .areaSelectionTitle{
    position: absolute;
    top: 50%;
    transform: translate3d(0,-50%,0);
    left: 2vmin;
    color : white;
    font-size: 2vmin;
  }

  .rightArrowArea{
    position: absolute;
    right: 1vmin;
    top: 50%;
    transform: translate3d(0,-50%,0);
    width: 5vmin;
    height: 5vmin;
  }

  .rightArrowImage{
    width: 100%;
  }

/*  



  .countrySelectionImage{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%,-50%,0);
    width: 100%;
    opacity: 50%;
  }

  .countrySelectionLockImage{
    position: absolute;
    width: 5vmin;
    height: 5vmin;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%,-50%,0);
  }

  .halfOpacity{
    opacity: 40%;
  }*/
</style>



// WEBPACK FOOTER //
// src/components/template/areaSelection.vue