<template>
  <div>
    <div
      id="rightMenuArea"
      class="rightMenuArea"
    >
      <div class="rightMenuSelection">
        <div
          class="rightMenuSelectionImageArea touch"
          @mouseup="openCloseLanguageMenu"
        >
          <img
            class="rightMenuSelectionImage"
            :src="rightMenuButton1Image"
          >
        </div>
        <transition name="fade">
          <div
            v-show="isShowLanguageMenu"
            class="rightMenuSelectionLanguageMenuArea"
          >
            <div class="rightMenuSelectionLanguageMenuSelectionAreaSpace" />
            <div
              class="rightMenuSelectionLanguageMenuSelectionArea touch"
              @mouseup="switchLang('EN')"
            >
              <div
                id="rightMenuSelectionLanguageMenuSelectionTextEN"
                class="rightMenuSelectionLanguageMenuSelectionText"
              >
                ENG
              </div>
            </div>
            <div
              class="rightMenuSelectionLanguageMenuSelectionArea touch"
              @mouseup="switchLang('TC')"
            >
              <div
                id="rightMenuSelectionLanguageMenuSelectionTextTC"
                class="rightMenuSelectionLanguageMenuSelectionText"
              >
                繁體
              </div>
            </div>
            <div
              class="rightMenuSelectionLanguageMenuSelectionArea touch"
              @mouseup="switchLang('SC')"
            >
              <div
                id="rightMenuSelectionLanguageMenuSelectionTextSC"
                class="rightMenuSelectionLanguageMenuSelectionText"
              >
                简体
              </div>
            </div>
            <div class="rightMenuSelectionLanguageMenuSelectionAreaSpace" />
          </div>
        </transition>
      </div>

      <div class="rightMenuSelection">
        <div
          class="rightMenuSelectionImageArea touch"
          @mouseup="openCloseCubeMenu"
        >
          <img
            class="rightMenuSelectionImage"
            :src="rightMenuButton2Image"
          >
        </div>
        <transition name="fade">
          <div
            v-show="isShowCubeMenu"
            class="rightMenuSelectionCubeMenuArea"
          >
            <div class="rightMenuSelectionCubeTitleArea">
              <div
                class="rightMenuSelectionCubeTitle"
                v-html="$t('dataCube')"
              />
            </div>
            <div class="rightMenuSelectionCubeSubButton">
              <div
                :lang="language"
                class="rightMenuSelectionCubeSubButtonText"
                v-html="$t('rightMenuCubeButton')['button1']"
              />
            </div>
            <div class="rightMenuSelectionCubeSubButton">
              <div
                :lang="language"
                class="rightMenuSelectionCubeSubButtonText"
                v-html="$t('rightMenuCubeButton')['button2']"
              />
            </div>
            <div class="rightMenuSelectionCubeSubButton">
              <div
                :lang="language"
                class="rightMenuSelectionCubeSubButtonText"
                v-html="$t('rightMenuCubeButton')['button3']"
              />
            </div>
            <div class="rightMenuSelectionCubeSubButton">
              <div
                :lang="language"
                class="rightMenuSelectionCubeSubButtonText"
                v-html="$t('rightMenuCubeButton')['button4']"
              />
            </div>
            <div class="rightMenuSelectionCubeSubButton">
              <div
                :lang="language"
                class="rightMenuSelectionCubeSubButtonText"
                v-html="$t('rightMenuCubeButton')['button5']"
              />
            </div>
            <div class="rightMenuSelectionCubeSubButton">
              <div
                :lang="language"
                class="rightMenuSelectionCubeSubButtonText"
                v-html="$t('rightMenuCubeButton')['button6']"
              />
            </div>
            <div class="rightMenuSelectionCubeSubButton">
              <div
                :lang="language"
                class="rightMenuSelectionCubeSubButtonText"
                v-html="$t('rightMenuCubeButton')['button7']"
              />
            </div>
            <div class="rightMenuSelectionCubeSubButton">
              <div
                :lang="language"
                class="rightMenuSelectionCubeSubButtonText"
                v-html="$t('rightMenuCubeButton')['button8']"
              />
            </div>
            <div class="rightMenuSelectionCubeSubButton">
              <div
                :lang="language"
                class="rightMenuSelectionCubeSubButtonText"
                v-html="$t('rightMenuCubeButton')['button9']"
              />
            </div>

            <div class="rightMenuSelectionCubeComingSoon">
              <div
                class="rightMenuSelectionCubeComingSoonText"
                v-html="$t('comingSoon')"
              />
            </div>
          </div>
        </transition>
      </div>
      <div class="rightMenuSelection">
        <div
          class="rightMenuSelectionImageArea touch"
          @mouseup="openCloseGridMenu"
        >
          <img
            class="rightMenuSelectionImage"
            :src="rightMenuButton3Image"
          >
        </div>

        <transition name="fade">
          <div
            v-show="isShowGridMenu"
            class="rightMenuSelectionSubMenuArea"
          >
            <div class="rightMenuSelectionSubMenuButtonArea">
              <div
                id="rightMenuGridButtonOn"
                class="rightMenuSelectionSubMenuButton touch"
                @mouseup="gridSetting(true)"
              >
                <div
                  class="rightMenuSelectionSubMenuButtonText"
                  v-html="$t('switchOn')"
                />
              </div>
            </div>
            <div class="rightMenuSelectionSubMenuButtonArea">
              <div
                id="rightMenuGridButtonOff"
                class="rightMenuSelectionSubMenuButton touch"
                @mouseup="gridSetting(false)"
              >
                <div
                  class="rightMenuSelectionSubMenuButtonText"
                  v-html="$t('switchOff')"
                />
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>

import i18n from '@/language'
import { store } from '../store'

export default {
  name: 'RightMenu',
  data () {
    return {
      language : i18n.locale,
      //right menu
      rightMenuButton1Image : require('../assets/images/rightMenu/button1.png'),
      rightMenuButton2Image : require('../assets/images/rightMenu/button2.png'),
      rightMenuButton3Image : require('../assets/images/rightMenu/button3.png'),


      isShowLanguageMenu : false,
      isShowCubeMenu : false,
      isShowGridMenu : false,



    }
  },

  computed:{
    checkCurrentLanguage(){return i18n.locale},
    // checkIsShowLanding(){return store.state.isShowLanding},
    checkRightMenuSlideInOutEvent(){return store.state.rightMenuSlideInOutEvent},
  },
  watch:{
    checkCurrentLanguage(lang){this.language = lang},
    checkRightMenuSlideInOutEvent(flag){
      console.log('!!!!!!!!!!! ' + flag)
      this.rightMenuSlideInOut(flag)
    },
    // checkIsShowLanding(flag){
    //   if(!flag){
    //     this.rightMenuSlideIn();
    //   }
    // },
  },
  created(){
    this.languageSetting()
  },
  methods:{

    rightMenuSlideInOut(inout){
      let self = this
      if(document.getElementById('rightMenuArea') == null) {
        setTimeout(function(){ self.rightMenuSlideIn() }, 100)
      } else {
        if(inout == 'in'){
          document.getElementById('rightMenuArea').classList.add('rightMenuSlideIn')
          document.getElementById('rightMenuArea').classList.remove('rightMenuSlideOut')
        }
        else if(inout == 'out'){
          document.getElementById('rightMenuArea').classList.remove('rightMenuSlideIn')
          document.getElementById('rightMenuArea').classList.add('rightMenuSlideOut')
        }
        
      }
    },


    openCloseLanguageMenu(){
      this.isShowLanguageMenu = !this.isShowLanguageMenu
      this.isShowGridMenu = false
      this.isShowCubeMenu = false
    },


    openCloseCubeMenu(){
      this.isShowCubeMenu = !this.isShowCubeMenu
      this.isShowGridMenu = false
      this.isShowLanguageMenu = false
    },



    openCloseGridMenu(){
      this.isShowGridMenu = !this.isShowGridMenu
      this.isShowLanguageMenu = false
      this.isShowCubeMenu = false
    },


    gridSetting(switchOn){
      if(this.isShowGridMenu){
        if(switchOn){
          document.getElementById('rightMenuGridButtonOn').style.backgroundColor = 'rgba(255,255,255,0.5)'
          document.getElementById('rightMenuGridButtonOff').style.backgroundColor = 'rgba(255,255,255,0.2)'
          store.state.isEnableGridFunction = true
          this.isShowGridMenu = false
        }
        else{
          document.getElementById('rightMenuGridButtonOn').style.backgroundColor = 'rgba(255,255,255,0.2)'
          document.getElementById('rightMenuGridButtonOff').style.backgroundColor = 'rgba(255,255,255,0.5)'
          store.state.isEnableGridFunction = false
          this.isShowGridMenu = false
        }
      }
    },


    languageSetting(){
      let self = this
      if(document.getElementById('rightMenuSelectionLanguageMenuSelectionTextEN') == null || document.getElementById('rightMenuSelectionLanguageMenuSelectionTextTC') == null || document.getElementById('rightMenuSelectionLanguageMenuSelectionTextSC') == null ) {
        setTimeout(function(){ self.languageSetting() }, 100)
        console.log('waiting')
      } else {
        console.log('!!!!!!!!!! ' + self.language)
        if(self.language == 'EN'){
          document.getElementById('rightMenuSelectionLanguageMenuSelectionTextEN').style.color = 'rgba(255,255,255,1)'
        }
        else{
          document.getElementById('rightMenuSelectionLanguageMenuSelectionTextEN').style.color = 'rgba(255,255,255,0.5)'
        }

        if(self.language == 'TC'){
          document.getElementById('rightMenuSelectionLanguageMenuSelectionTextTC').style.color = 'rgba(255,255,255,1)'
        }
        else{
          document.getElementById('rightMenuSelectionLanguageMenuSelectionTextTC').style.color = 'rgba(255,255,255,0.5)'
        }

        if(self.language == 'SC'){
          document.getElementById('rightMenuSelectionLanguageMenuSelectionTextSC').style.color = 'rgba(255,255,255,1)'
        }
        else{
          document.getElementById('rightMenuSelectionLanguageMenuSelectionTextSC').style.color = 'rgba(255,255,255,0.5)'
        }
      }
    },


    //   switchLang(){
    //     console.log("!!!!!!!!!! " + this.language);
    //     let lang = this.language;
    //     if(this.language == "SC"){
    //       lang = "EN";
    //     }
    //     else if(this.language == "EN"){
    //       lang = "TC";
    //     }
    //     else if(this.language == "TC"){
    //       lang = "SC";
    //     }

    //     i18n.locale = lang;
    //     localStorage.setItem('locale', lang);
    //     console.log("change language : " + lang);
    //   },
    // },

    switchLang(lang){
      if(this.isShowLanguageMenu){
        this.language = lang
        i18n.locale = lang
        localStorage.setItem('locale', lang)
        console.log('change language : ' + lang)
        this.languageSetting()
        this.isShowLanguageMenu = false
      }
    },
  },
}
</script>

<style scoped>
  .rightMenuArea{
    position: absolute;
    top: 50%;
    right: 2vmin;
    width: 10vmin;
    height: 30vmin;
    transform: translate3d(0,-50%,0);
/*    background-color: red;*/
  }


  .rightMenuSlideIn{
    animation: rightMenuSlideInPositionOpacity 1s;
    animation-timing-function: linear;
    animation-fill-mode:forwards;
  }

  @keyframes rightMenuSlideInPositionOpacity {
    0%   {
      right: -10vmin;
      opacity: 0;
    }
    100% {
      right: 2vmin;
      opacity: 1;
    }
  }

  .rightMenuSlideOut{
    animation: rrightMenuSlideOutPositionOpacity 1s;
    animation-timing-function: linear;
    animation-fill-mode:forwards;
  }

  @keyframes rightMenuSlideOutPositionOpacity {
    0%   {
      right: 2vmin;
      opacity: 1;
    }
    100% {
      right: -10vmin;
      opacity: 0;
    }
  }









  .rightMenuSelection{
    position: relative;
    width: 100%;
    height: 10vmin;
/*    background-color: blue;*/
  }

  .rightMenuSelectionImageArea{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%,-50%,0);
    height: 80%;
    width: 82%;
/*    background-color: red;*/
  }
  .rightMenuSelectionImage{
    width: 100%;
  }

  .rightMenuSelectionLanguageMenuArea{
    position: absolute;
    top: 1vmin;
    right: 10vmin;
    width: 20vmin;
    height: 18vmin;
    background-color: #152a53;
    border-radius: 1vmin;
  }
  .rightMenuSelectionLanguageMenuSelectionAreaSpace{
    position: relative;
    width: 100%;
    height: 5%;
  }
  .rightMenuSelectionLanguageMenuSelectionArea{
    position: relative;
    width: 100%;
    height: 30%;
/*    background-color: rgba(255,0,0,0.5);*/
  }
  .rightMenuSelectionLanguageMenuSelectionText{
    position: absolute;
    top: 50%;
    left: 2vmin;
    font-size: 2.5vmin;
    transform: translate3d(0,-50%,0);
  }
  #rightMenuSelectionLanguageMenuSelectionTextEN{
    font-family: 'Roboto';
    color: rgba(255,255,255,0.5);
  }
  #rightMenuSelectionLanguageMenuSelectionTextTC{
    font-family: 'Noto Sans TC';
    color: rgba(255,255,255,0.5);
  }
  #rightMenuSelectionLanguageMenuSelectionTextSC{
    font-family: 'Noto Sans SC';
    color: rgba(255,255,255,0.5);
  }



  /*---------------------------------------------------------Cube Menu*/

  .rightMenuSelectionCubeMenuArea{
    position: absolute;
    top: 50%;
    transform: translate3d(0,-50%,0);
    right: 10vmin;
    width: 25vmin;
    height: 52vmin;
    background-color: #152a53;
    border-radius: 1vmin;
  }


  .rightMenuSelectionCubeComingSoon{
    position: absolute;
    /*top: 50%;
    transform: translate3d(0,-50%,0);*/
    top: 6vmin;
    width: 25vmin;
    height: calc(52vmin - 6vmin);
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 1vmin;
  }

  .rightMenuSelectionCubeComingSoonText{
    position: absolute;
    top: 50%;
    transform: translate3d(0,-50%,0);
    width: 100%;
    text-align: center;
    color: white;
    font-size: 2.5vmin;
  }

  .rightMenuSelectionCubeTitleArea{
    position: relative;
    width: 25vmin;
    height: 6vmin;
/*    background-color: red;*/
  }

  .rightMenuSelectionCubeTitle{
    position: absolute;
    top: 50%;
    transform: translate3d(0,-50%,0);
    margin-left: 2vmin;
    color: white;
    font-size: 2.5vmin;
  }

  .rightMenuSelectionCubeSubButton{
    position: relative;
    left: 50%;
    transform: translate3d(-50%,0,0);
    width: 22vmin;
    height: 4vmin;
    border-radius: 8px;
    margin-top: 1vmin;
    background-color: rgba(255,255,255,0.5);
  }



  .rightMenuSelectionCubeSubButtonText{
    position: absolute;
    top: 50%;
    transform: translate3d(0,-50%,0);
    width: 100%;
    text-align: center;
    color: white;
    font-size: 2vmin;
  }
  .rightMenuSelectionCubeSubButtonText:lang(EN){
    font-size: 1.5vmin;
  }



  .rightMenuSelectionSubMenuArea{
    position: absolute;
    top: 1vmin;
    right: 10vmin;
    width: 20vmin;
    height: 18vmin;
    background-color: #152a53;
    border-radius: 1vmin;
  }

  .rightMenuSelectionSubMenuButtonArea{
    position: relative;
    top: 0;
    width: 100%;
    height: 50%;
/*    background-color: red;*/
  }

  .rightMenuSelectionSubMenuButton{
    position: absolute;
    left: 50%;
    width: 16vmin;
    height: 6vmin;
    transform: translate3d(-50%,0,0);
    border-radius: 8px;
  }

  .rightMenuSelectionSubMenuButtonText{
    text-align: center;
    position: absolute;
    top: 50%;
    width: 100%;
    transform: translate3d(0,-50%,0);
    color: white;
    font-size: 2.5vmin;
  }



  .rightMenuSelectionSubMenuButton1{
    bottom: 0.8vmin;
    background-color: rgba(255,255,255,0.5);
  }
  .rightMenuSelectionSubMenuButton2{
    top: 0.8vmin;
    background-color: rgba(255,255,255,0.2);
  }

  #rightMenuGridButtonOn{
    bottom: 0.8vmin;
    background-color: rgba(255,255,255,0.5);
  }
  #rightMenuGridButtonOff{
    top: 0.8vmin;
    background-color: rgba(255,255,255,0.2);
  }




</style>



// WEBPACK FOOTER //
// src/components/rightMenu.vue