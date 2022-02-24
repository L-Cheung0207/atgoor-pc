<template>
  <div>
    <transition name="fade">
      <div
        v-show="selectingArea == ''"
        class="leftMenuContainerArea touch"
      >
        <!-- 按 tab 分 陸地 和 海洋 -->
        <div class="leftMenuTabArea">
          <div
            id="landTabButton"
            class="leftMenuTab touch leftMenuTabSelecting"
            @mouseup="selectTab('land')"
          >
            <div
              id="landTabTitle"
              class="tabTitleArea tabTitleAreaSelecting"
            >
              <div class="tabTitleIconArea">
                <img
                  class="tabTitleIcon"
                  :src="tabIcon['land']"
                >
              </div>
              <div class="tabTitleTextArea">
                <div
                  class="tabTitleText"
                  v-html="$t('land')"
                />
              </div>
            </div>
          </div>
          <div
            id="oceanTabButton"
            class="leftMenuTab touch"
            @mouseup="selectTab('ocean')"
          >
            <div
              id="oceanTabTitle"
              class="tabTitleArea"
            >
              <div class="tabTitleIconArea">
                <img
                  class="tabTitleIcon"
                  :src="tabIcon['ocean']"
                >
              </div>
              <div class="tabTitleTextArea">
                <div
                  class="tabTitleText"
                  v-html="$t('ocean')"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="tabInstructionArea">
          <!-- 讓 user 選擇國家 -->
          <div class="tabInstruction">
            <span
              v-show="selectingTab == 'land'"
              v-html="$t('countryClassified')"
            />
          </div>
          <!-- 返回國家分類 -->
          <div
            v-show="selectingTab == 'land' && selectingCountry != ''"
            class="backToCountrySelectionArea touch"
            @mouseup="backToCountrySelection()"
          >
            <div class="backToCountrySelectionButtonArea">
              <img
                class="backToCountrySelectionButton"
                :src="backButtonImage"
              >
            </div>

            <div class="backToCountrySelectionTextArea">
              <div
                class="backToCountrySelectionText"
                v-html="$t('backToCountryClassified')"
              />
            </div>
          </div>
        </div>

        <!-- 國家選擇  經 json / api 獲取 -->
        <div
          v-show="selectingTab == 'land'"
          id="landTabCountrySelectionArea"
          class="landTabCountrySelectionArea touch"
        >
          <!--         <countrySelectionTemplate id="hihi"></countrySelectionTemplate> -->
        </div>

        <!-- 選擇了國家  選擇地區    經 json / api 獲取地區 -->
        <div
          v-show="selectingTab == 'land' && selectingCountry != ''"
          id="landTabCountrySubSelectionArea"
          class="landTabCountrySubSelectionArea touch"
        >
          <div class="landTabCountrySubSelectionSelectingCountryArea">
            <div class="landTabCountrySubSelectionSelectingCountryImageArea">
              <img
                v-if="selectingCountryImage != ''"
                class="landTabCountrySubSelectionSelectingCountryImage"
                :src="selectingCountryImage"
              >
              <div
                v-if="selectingCountryName != ''"
                class="landTabCountrySubSelectionSelectingCountryText"
                v-html="selectingCountryName[language]"
              />
            </div>
          </div>

          <div class="landTabSubSelectionTitleArea">
            <div
              class="landTabSubSelectionTitle"
              v-html="$t('selectArea')"
            />
          </div>

          <div
            id="landTabSubSelectionArea"
            class="landTabSubSelectionArea"
          >
            <!-- <areaSelectionTemplate areaId="lala"></areaSelectionTemplate> -->
          </div>
        </div>
      </div>
    </transition>


    <transition name="fade">
      <div
        v-show="selectingArea != ''"
        class="leftMenuDetailContainerArea touch"
      >
        <div class="displaySelectedAreaArea">
          <div
            class="displaySelectedAreaText"
            v-html="selectingAreaName[language]"
          />
          
          <div
            class="displaySelectedAreaBackButtonArea touch"
            @mouseup="backToAreaSelection()"
          >
            <img
              class="displaySelectedAreaBackButton"
              :src="backButtonImage"
            >
          </div>
        </div>

        <div class="breakline" />

        <div class="landSetectionArea">
          <div class="landSetectionSubArea">
            <div class="landSetection">
              <div
                class="landSelectionImageArea touch"
                @mouseup="selectLand('cityLand')"
              >
                <img
                  class="landSelectionImage"
                  :src="landImage['cityLand']"
                >
              </div>
              <div
                v-show="selectingLand== 'cityLand'"
                class="landSelectionImageArea touch"
                @mouseup="unselectLand()"
              >
                <img
                  class="landSelectionImage"
                  :src="landImage['cityLandSelected']"
                >
              </div>
              <div class="landSelectionTextArea">
                <div
                  class="landSelectionText"
                  v-html="$t('cityLand')"
                />
              </div>
            </div>
            <div class="landSetection">
              <div
                class="landSelectionImageArea touch"
                @mouseup="selectLand('agriculturalLand')"
              >
                <img
                  class="landSelectionImage"
                  :src="landImage['agriculturalLand']"
                >
              </div>
              <div
                v-show="selectingLand== 'agriculturalLand'"
                class="landSelectionImageArea touch"
                @mouseup="unselectLand()"
              >
                <img
                  class="landSelectionImage"
                  :src="landImage['agriculturalLandSelected']"
                >
              </div>
              <div class="landSelectionTextArea">
                <div
                  class="landSelectionText"
                  v-html="$t('agriculturalLand')"
                />
              </div>
            </div>
            <div class="landSetection">
              <div
                class="landSelectionImageArea touch"
                @mouseup="selectLand('forestRights')"
              >
                <img
                  class="landSelectionImage"
                  :src="landImage['forestRights']"
                >
              </div>
              <div
                v-show="selectingLand== 'forestRights'"
                class="landSelectionImageArea touch"
                @mouseup="unselectLand()"
              >
                <img
                  class="landSelectionImage"
                  :src="landImage['forestRightsSelected']"
                >
              </div>
              <div class="landSelectionTextArea">
                <div
                  class="landSelectionText"
                  v-html="$t('forestRights')"
                />
              </div>
            </div>
            <div class="landSetection">
              <div
                class="landSelectionImageArea touch"
                @mouseup="selectLand('freshWater')"
              >
                <img
                  class="landSelectionImage"
                  :src="landImage['freshWater']"
                >
              </div>
              <div
                v-show="selectingLand== 'freshWater'"
                class="landSelectionImageArea touch"
                @mouseup="unselectLand()"
              >
                <img
                  class="landSelectionImage"
                  :src="landImage['freshWaterSelected']"
                >
              </div>
              <div class="landSelectionTextArea">
                <div
                  class="landSelectionText"
                  v-html="$t('freshWater')"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="breakline" />

        <cityLandSelection v-show="selectingLand == 'cityLand'" />
      </div>
    </transition>
  </div>
</template>

<script>

import i18n from '@/language'
import { store } from '@/store'
import Vue from 'vue'
import countrySelectionTemplate from '@/components/template/countrySelection'
import areaSelectionTemplate from '@/components/template/areaSelection'
import cityLandSelection from '@/components/template/cityLandSelection'


var countrySelectionTemplateClass = Vue.extend(countrySelectionTemplate)
var areaSelectionTemplateClass = Vue.extend(areaSelectionTemplate)

// import countrySelectionJson from '../../static/dataJson/countrySelection.json'
// import areaSelectionJson from '../../static/dataJson/areaSelection.json'
import countrySelectionJson from '@/dataJson/countrySelection.json'
import areaSelectionJson from '@/dataJson/areaSelection.json'

export default {
  name: 'LeftMenu',
  components: {
    // countrySelectionTemplate,
    // areaSelectionTemplate,
    cityLandSelection,
  },
  data () {
    return {
      language : i18n.locale,
      countrySelectionJsonData : countrySelectionJson,
      areaSelectionJsonData : areaSelectionJson,


      selectingTab : 'land',
      selectingCountry : '',
      selectingCountryName : '',
      selectingCountryImage : '',

      selectingArea : '',
      selectingAreaName : '',


      selectingLand : '',




      tabArray : ['land','ocean'],
      tabButtonId : {
        'land' : 'landTabButton',
        'ocean' : 'oceanTabButton',
      },
      tabTitleId : {
        'land' : 'landTabTitle',
        'ocean' : 'oceanTabTitle',
      },




      //Image
      tabIcon : {
        'land' : require('../assets/images/leftMenu/landIcon.png'),
        'ocean' : require('../assets/images/leftMenu/oceanIcon.png'),
      },

      backButtonImage : require('../assets/images/general/backArrow.png'),

      

      landImage : {
        'cityLand' : require('../assets/images/leftMenu/landSelection/cityLand.png'),
        'cityLandSelected' : require('../assets/images/leftMenu/landSelection/cityLandSelected.png'),
        'agriculturalLand' : require('../assets/images/leftMenu/landSelection/agriculturalLand.png'),
        'agriculturalLandSelected' : require('../assets/images/leftMenu/landSelection/agriculturalLandSelected.png'),
        'forestRights' : require('../assets/images/leftMenu/landSelection/forestRights.png'),
        'forestRightsSelected' : require('../assets/images/leftMenu/landSelection/forestRightsSelected.png'),
        'freshWater' : require('../assets/images/leftMenu/landSelection/freshWater.png'),
        'freshWaterSelected' : require('../assets/images/leftMenu/landSelection/freshWaterSelected.png'),
      }







    }
  },

  computed:{
    checkCurrentLanguage(){return i18n.locale},
    checkLeftMenuSelectingCountry(){return store.state.leftMenuSelectingCountry},
    checkLeftMenuSelectingArea(){return store.state.leftMenuSelectingArea},
    checkLeftMenuSelectingLand(){return store.state.leftMenuSelectingLand},
  },
  watch:{
    checkCurrentLanguage(lang){this.language = lang},
    checkLeftMenuSelectingCountry(country){
      this.selectingCountry = country
      if(country != ''){
        this.selectingCountryName = store.state.countryDictionary[country].countryName
        this.selectingCountryImage = store.state.countryDictionary[country].countryImage
      }
      else{
        this.selectingCountryName = ''
        this.selectingCountryImage = ''
      }
      
    },
    checkLeftMenuSelectingArea(area){
      this.selectingArea = area
      if(area != ''){
        this.selectingAreaName = store.state.areaDictionary[area].areaName
      }
      else{
        this.selectingAreaName = ''
      }
    },

    checkLeftMenuSelectingLand (land){
      this.selectingLand = land
    },


  },
  created(){
    this.setupCountryList()
    this.setupAreaList()
  },
  methods:{
    selectTab(tab){
      this.selectingTab = tab
      for(var loop = 0 ; loop < this.tabArray.length ; loop++){
        document.getElementById(this.tabButtonId[this.tabArray[loop]]).classList.remove('leftMenuTabSelecting')
        document.getElementById(this.tabTitleId[this.tabArray[loop]]).classList.remove('tabTitleAreaSelecting')
      }
      document.getElementById(this.tabButtonId[tab]).classList.add('leftMenuTabSelecting')
      document.getElementById(this.tabTitleId[tab]).classList.add('tabTitleAreaSelecting')
    },

    setupCountryList(){
      let self = this
      //等到 container 存在
      if(document.getElementById('landTabCountrySelectionArea') == null){
        setTimeout(function(){
          self.setupCountryList()
        },200) 
      }
      else{
        for(var setupCountryLoop = 0 ; setupCountryLoop < this.countrySelectionJsonData.length ; setupCountryLoop ++){

          console.log('setup country ' + setupCountryLoop)
          let countryId = this.countrySelectionJsonData[setupCountryLoop]['id']
          let countryName = this.countrySelectionJsonData[setupCountryLoop]['name']
          let countryLocalImage = this.countrySelectionJsonData[setupCountryLoop]['localImageUrl']
          let countryUnlock = this.countrySelectionJsonData[setupCountryLoop]['unlock']


          let newCountryDictionary = {'countryName':countryName , 'countryImage' : 'static/images/countrySelection/' + countryLocalImage}
          store.state.countryDictionary[countryId] = newCountryDictionary


          // let newCountry = document.createElement("countrySelectionTemplate");
          let newCountry = new countrySelectionTemplateClass({
            propsData: {
              'countryId' : countryId,
              'countryName' : countryName,
              'countryLocalImage' : countryLocalImage,
              'countryUnlock' : countryUnlock,
            }
          })
          newCountry.$mount()
          document.getElementById('landTabCountrySelectionArea').appendChild(newCountry.$el)
        }
      }
    },

    setupAreaList(){
      let self = this
      //等到 container 存在
      if(document.getElementById('landTabSubSelectionArea') == null){
        setTimeout(function(){
          self.setupAreaList()
        },200) 
      }
      else{
        for(var setupAreaLoop = 0 ; setupAreaLoop < this.areaSelectionJsonData.length ; setupAreaLoop ++){
          let areaId = this.areaSelectionJsonData[setupAreaLoop]['id']
          let countryId = this.areaSelectionJsonData[setupAreaLoop]['countryId']
          let areaName = this.areaSelectionJsonData[setupAreaLoop]['name']
          let latitude = this.areaSelectionJsonData[setupAreaLoop]['latitude']
          let longitude = this.areaSelectionJsonData[setupAreaLoop]['longitude']
          let height = this.areaSelectionJsonData[setupAreaLoop]['height']
          let cesiumData = this.areaSelectionJsonData[setupAreaLoop]['cesiumData']


          let newAreaDictionary = {
            'countryId':countryId,
            'areaName' : areaName,
            'latitude' : latitude,
            'longitude' : longitude,
            'height' : height,
            'cesiumData' : cesiumData       
          }

          store.state.areaDictionary[areaId] = newAreaDictionary

          let newArea = new areaSelectionTemplateClass({
            propsData: {
              'areaId' : areaId,
              'countryId' : countryId,
              'areaName' : areaName,
              'latitude' : latitude,
              'longitude' : longitude,
              'height' : height,
              'cesiumData' : cesiumData
            }
          })
          newArea.$mount()
          document.getElementById('landTabSubSelectionArea').appendChild(newArea.$el)


        }
      }
    },


    selectLand(land){
      console.log('select land  ' + land)
      store.state.leftMenuSelectingLand = land
    },

    unselectLand(){
      store.state.leftMenuSelectingLand = ''
    },






    backToCountrySelection(){
      store.state.leftMenuSelectingCountry = ''
    },
    backToAreaSelection(){
      store.state.leftMenuSelectingLand = ''
      store.state.leftMenuSelectingArea = ''
      store.state.cesiumBaseMapData = ''
      store.state.isShow3DScene = true

    }


  },


}
</script>

<style scoped>

  .leftMenuContainerArea{
    position: absolute;
    top: 50%;
    left: 5vmin;
    width: 45vmin;
    height: 90vmin;
    transform: translate3d(0,-50%,0);
    background-color:#363636;
  }


  .leftMenuTabArea{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 8vmin;

  }

  .leftMenuTab{
    position: relative;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    float: left;
    background-color: #000000;
  }

  .leftMenuTabSelecting{
    background-color: #363636;
  }


  .tabTitleArea{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%,-50%,0);
    width: 10vmin;
    height: 5vmin;
    opacity: 0.5;
  }

  .tabTitleAreaSelecting{
    opacity: 1;
  }

  .tabTitleIconArea{
    position: relative;
    width: 5vmin;
    height: 5vmin;
    float: left;
  }

  .tabTitleIcon{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%,-50%,0);
    width: 80%;
  }

  .tabTitleTextArea{
    position: relative;
    width: 5vmin;
    height: 5vmin;
    float: left;
  }

  .tabTitleText{
    position: absolute;
    top: 50%;
    left: 0vmin;
    transform: translate3d(0,-50%,0);
    color: white;
    font-weight: bold;
    font-size: 2.2vmin;
  }


  .tabInstructionArea{
    position: absolute;
    top: 8vmin;
    left: 0;
    width: 100%;
    height: 5vmin;
  }

  .tabInstruction{
    position: absolute;
    top: 50%;
    transform: translate3d(0,-50%,0);
    left: 2vmin;
    color: white;
    font-size: 2vmin;
  }


  .landTabCountrySelectionArea{
    position: absolute;
    left: 0;
    top: 13vmin;
    width: 100%;
    height: calc(100% - 13vmin);
    overflow: auto;
    overflow-x: hidden;
    background-color: #363636;
  }

  .landTabCountrySubSelectionArea{
    position: absolute;
    left: 0;
    top: 13vmin;
    width: 100%;
    height: calc(100% - 13vmin);
    overflow: auto;
    overflow-x: hidden;
    background-color: #363636;
  }



  .backToCountrySelectionArea{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #363636;
  }

  .backToCountrySelectionButtonArea{
    position: absolute;
    left: 2vmin;
    height: 5vmin;
    width: 5vmin;
  }

  .backToCountrySelectionButton{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%,-50%,0);
    width: 4vmin;
  }

  .backToCountrySelectionTextArea
  {
    position: absolute;
    left: 7vmin;
    width: 35vmin;
    height: 5vmin;
  }

  .backToCountrySelectionText{
    position: absolute;
    top: 50%;
    transform: translate3d(0,-50%,0);
    color: white;
    font-size: 1.8vmin;
  }

  .landTabCountrySubSelectionSelectingCountryArea{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 15vmin;
    background-color: #363636;
  }

  .landTabCountrySubSelectionSelectingCountryImageArea{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%,-50%,0);
    width: 40vmin;
    height: 12vmin;
    border-radius: 4px;
    overflow: hidden;
  }

  .landTabCountrySubSelectionSelectingCountryImage{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%,-50%,0);
    width: 100%;
    opacity: 0.5;
  }

  .landTabCountrySubSelectionSelectingCountryText{
    position: absolute;
    top: 50%;
    transform: translate3d(0,-50%,0);
    left: 0;
    width: 100%;
    text-align: center;
    color: white;
    font-size: 3vmin;
  }

  .landTabSubSelectionTitleArea{
    position: absolute;;
    top: 15vmin;
    left: 0;
    width: 100%;
    height: 5vmin;
    background-color: #202020;
  }

  .landTabSubSelectionTitle{
    position: absolute;
    top: 50%;
    transform: translate3d(0,-50%,0);
    left: 2vmin;
    color: white;
    font-size: 2vmin;
  }


  .landTabSubSelectionArea{
    position: absolute;;
    top: 20vmin;
    left: 0;
    width: 100%;
    height: 57vmin;
    background-color: #202020;
  }

  .leftMenuDetailContainerArea{
    position: absolute;
    top : 5vmin;
    left: 5vmin;
    width: 45vmin;
    height: auto;
    background-color: #363636;
  }


  .breakline{
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 0.2vmin;
    background-color: rgba(255, 255, 255, 0.12);
  }

  .displaySelectedAreaArea{
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 8vmin;
    background-color: #363636;
  }

  .displaySelectedAreaText{
    position: absolute;
    top: 50%;
    transform: translate3d(0,-50%,0);
    color: white;
    width: 100%;
    text-align: center;
    font-size: 2.5vmin;
  }

  .displaySelectedAreaBackButtonArea{
    position: absolute;
    top: 50%;
    left: 2vmin;
    transform: translate3d(0,-50%,0);
    width: 4vmin;
    height: 4vmin;
  }

  .displaySelectedAreaBackButton{
    width: 100%;
  } 



  .landSetectionArea{
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 15vmin;
    background-color: #363636;
  }

  .landSetectionSubArea{
    position: absolute;
    top: 2vmin;
    left: 50%;
    transform: translate3d(-50%,0,0);
    width: 40vmin;
    height: 12vmin;
  }

  .landSetection{
    position: relative;
    width: 25%;
    height: 12vmin;
    float: left;
  }

  .landSelectionImageArea{
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate3d(-50%,0,0);
    width: 6vmin;
    height: 6vmin;
  }

  .landSelectionImage{
    width: 100%;
  }

  .landSelectionTextArea{
    position: absolute;
    top: 7vmin;
    width: 100%;
    height: 3vmin;
  }
  .landSelectionText{
    position: absolute;
    top: 50%;
    transform: translate3d(0,-50%,0);
    width: 100%;
    text-align: center;
    color: white;
    font-size: 1.5vmin;
  }

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

  



</style>



// WEBPACK FOOTER //
// src/components/leftMenu.vue