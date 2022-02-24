<template>
  <div>
    <div
      class="landSubSelectionArea touch"
      @mouseup="selectCityLand('residential')"
    >
      <div
        class="landSubSelectionTitle"
        v-html="$t('residentialLand')"
      />
      <div class="landSubSelectionArrowArea">
        <img
          v-show="selectingCityLand != 'residential'"
          class="landSubSelectionArrow"
          :src="downArrow"
        >
        <img
          v-show="selectingCityLand == 'residential'"
          class="landSubSelectionArrow"
          :src="upArrow"
        >
      </div>
    </div>
    <div
      v-show="selectingCityLand == 'residential'"
      class="landSubSelectionDetailArea touchAll"
    >
      <div class="landSubSelectionDetailScrollArea touch">
        <span
          v-show="selectingData != 'cityBuilding'"
          class="landSubSelectionDetailSelection touch"
          @mouseup="selectData('cityBuilding')"
        >
          <div class="landSubSelectionDetailSelectionIconImageArea">
            <img
              :src="icon['cityBuilding']"
              class="landSubSelectionDetailSelectionIconImage"
            >
          </div>
          <div class="landSubSelectionDetailSelectionTextArea">
            <div
              class="landSubSelectionDetailSelectionText"
              v-html="$t('cityBuilding')"
            />
          </div>
        </span>

        <span
          v-show="selectingData == 'cityBuilding'"
          class="landSubSelectionDetailSelection landSubSelectionDetailSelectionSelected touch"
          @mouseup="unselectData()"
        >
          <div class="landSubSelectionDetailSelectionIconImageArea">
            <img
              :src="icon['cityBuildingSelected']"
              class="landSubSelectionDetailSelectionIconImage"
            >
          </div>
          <div class="landSubSelectionDetailSelectionTextArea">
            <div
              class="landSubSelectionDetailSelectionText landSubSelectionDetailSelectionTextSelected"
              v-html="$t('cityBuilding')"
            />
          </div>
        </span>




        <span
          v-show="selectingData != 'cityRoad'"
          class="landSubSelectionDetailSelection touch"
          @mouseup="selectData('cityRoad')"
        >
          <div class="landSubSelectionDetailSelectionIconImageArea">
            <img
              :src="icon['cityRoad']"
              class="landSubSelectionDetailSelectionIconImage"
            >
          </div>
          <div class="landSubSelectionDetailSelectionTextArea">
            <div
              class="landSubSelectionDetailSelectionText"
              v-html="$t('cityRoad')"
            />
          </div>
        </span>

        <span
          v-show="selectingData == 'cityRoad'"
          class="landSubSelectionDetailSelection landSubSelectionDetailSelectionSelected touch"
          @mouseup="unselectData()"
        >
          <div class="landSubSelectionDetailSelectionIconImageArea">
            <img
              :src="icon['cityRoadSelected']"
              class="landSubSelectionDetailSelectionIconImage"
            >
          </div>
          <div class="landSubSelectionDetailSelectionTextArea">
            <div
              class="landSubSelectionDetailSelectionText landSubSelectionDetailSelectionTextSelected"
              v-html="$t('cityRoad')"
            />
          </div>
        </span>
      </div>
    </div>



    <div
      class="landSubSelectionArea touch"
      @mouseup="selectCityLand('commercial')"
    >
      <div
        class="landSubSelectionTitle"
        v-html="$t('commercialLand')"
      />
      <div class="landSubSelectionArrowArea">
        <img
          v-show="selectingCityLand != 'commercial'"
          class="landSubSelectionArrow"
          :src="downArrow"
        >
        <img
          v-show="selectingCityLand == 'commercial'"
          class="landSubSelectionArrow"
          :src="upArrow"
        >
      </div>
    </div>
    <div
      v-show="selectingCityLand == 'commercial'"
      class="landSubSelectionDetailArea touchAll"
    >
      <div class="landSubSelectionDetailScrollArea touch" />
    </div>

    <div
      class="landSubSelectionArea touch"
      @mouseup="selectCityLand('commercialResidential')"
    >
      <div
        class="landSubSelectionTitle"
        v-html="$t('residentialCommercialLand')"
      />
      <div class="landSubSelectionArrowArea">
        <img
          v-show="selectingCityLand != 'commercialResidential'"
          class="landSubSelectionArrow"
          :src="downArrow"
        >
        <img
          v-show="selectingCityLand == 'commercialResidential'"
          class="landSubSelectionArrow"
          :src="upArrow"
        >
      </div>
    </div>
    <div
      v-show="selectingCityLand == 'commercialResidential'"
      class="landSubSelectionDetailArea touchAll"
    >
      <div class="landSubSelectionDetailScrollArea touch" />
    </div>
  </div>
</template>

<script>

import i18n from '@/language'
import { store } from '@/store'

export default {
  name: 'CityLandSelection',
  props: [''],

  data () {
    return {
      language : i18n.locale,
      selectingCityLand : '',
      selectingData : '',


      upArrow : require('@/assets/images/general/upArrow.png'),
      downArrow : require('@/assets/images/general/downArrow.png'),


      icon : {
        'cityRoad' : require('@/assets/images/leftMenu/cityLand/cityRoad.png'),
        'cityBuilding' : require('@/assets/images/leftMenu/cityLand/cityBuilding.png'),
        'cityRoadSelected' : require('@/assets/images/leftMenu/cityLand/cityRoadSelected.png'),
        'cityBuildingSelected' : require('@/assets/images/leftMenu/cityLand/cityBuildingSelected.png'),
      }
    }
  },

  computed:{
    checkCurrentLanguage(){return i18n.locale},
    checkLeftMenuSelectingArea(){return store.state.leftMenuSelectingArea},
    checkLeftMenuSelectingLand(){return store.state.leftMenuSelectingLand},

  },
  watch:{
    checkCurrentLanguage(lang){this.language = lang},
    checkLeftMenuSelectingArea(area){
      if(area == ''){
        this.selectingData = ''
        this.selectingCityLand = ''
        store.state.cesiumDataLayerData = ''
      }
    },
    checkLeftMenuSelectingLand(land){
      if(land != 'cityLand'){
        this.selectingData = ''
        this.selectingCityLand = ''
        store.state.cesiumDataLayerData = ''
      }
    },

  },
  created(){
    // this.setUpImage();
    // this.unlockSelection();
    


  },
  methods:{
    selectCityLand(cityLand){
      if(cityLand == this.selectingCityLand){
        this.selectingCityLand = ''
      }
      else{
        this.selectingCityLand = cityLand
      }
    },

    selectData(data){
      
      if(this.selectingData == data){
        this.selectingData = ''
      }
      else{
        this.selectingData = data
        console.log(this.selectingData)
      }

      if(store.state.leftMenuSelectingArea != ''){
        if(store.state.areaDictionary[store.state.leftMenuSelectingArea].cesiumData[data] != null){
          console.log('display data ' + store.state.areaDictionary[store.state.leftMenuSelectingArea].cesiumData[data])
          store.state.cesiumDataLayerData = store.state.areaDictionary[store.state.leftMenuSelectingArea].cesiumData[data]
        }
      }

      



    },

    unselectData(){
      this.selectingData = ''
      store.state.cesiumDataLayerData = ''
    }

    

  },
}
</script>

<style scoped>
  .landSubSelectionArea{
    position: relative;
    width: 100%;
    height: 6vmin;
    background-color: #363636;
  }
  
  .landSubSelectionTitle{
    position: absolute;
    top: 50%;
    transform: translate3d(0,-50%,0);
    left: 2vmin;
    color: white;
    font-size: 2vmin;
  }

  .landSubSelectionArrowArea{
    position: absolute;
    right: 2vmin;
    top: 50%;
    transform: translate3d(0,-50%,0);
    width: 3vmin;
    height: 3vmin;
  }

  .landSubSelectionArrow{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%,-50%,0);
    width: 100%;
  }

  .landSubSelectionDetailArea{
    position: relative;
    width: 100%;
    height: 18vmin;
    background-color: #202020;
  }

  .landSubSelectionDetailScrollArea{
    position: absolute;
    width: 100%;
    height: 100%;
    white-space: nowrap;
    overflow: auto;
  }

  .landSubSelectionDetailSelection{
    position: relative;
    top: 50%;
    transform: translate3d(0,-50%,0);
    background-color: red;
    margin-left: 1.5vmin;
    width: 20vmin;
    height: 14vmin;
    border-radius: 1vmin;
    background-color: #363636;
    display: inline-block;
  }

  .landSubSelectionDetailSelectionSelected{
    background-color: white;
  }



  .landSubSelectionDetailSelectionIconImageArea{
    position: absolute;
    top: 1vmin;
    left: 50%;
    transform: translate3d(-50%,0,0);
    width: 6vmin;
    height: 6vmin;
  }

  .landSubSelectionDetailSelectionIconImage{
    width: 100%;
  }

  .landSubSelectionDetailSelectionTextArea{
    position: absolute;
    top: 8vmin;
    width: 100%;
  }
  .landSubSelectionDetailSelectionText{
    text-align: center;
    color: rgb(147,147,147);
    font-size: 2.5vmin;
  }

  .landSubSelectionDetailSelectionTextSelected{
    color: #000000;
  }
  
</style>



// WEBPACK FOOTER //
// src/components/template/cityLandSelection.vue