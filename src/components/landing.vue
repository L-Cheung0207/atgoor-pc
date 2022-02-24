<template>
  <div>
    <div id="landingArea" class="landingArea touch">
      <div class="background" :style="{ backgroundImage: `url('${backgroundImage}')` }"></div>
    <!-- <div class="background"></div> -->


      <!-- <div id="loopingAnimation0" class="loopingAnimationArea">
        <img id="loopingAnimation0Image" class="loopingAnimationImage" :src="loopingAnimation">
      </div>
      <div id="loopingAnimation1" class="loopingAnimationArea">
        <img id="loopingAnimation1Image" class="loopingAnimationImage" :src="loopingBackAnimation">
      </div>
      <div id="loopingAnimation2" class="loopingAnimationArea">
        <img id="loopingAnimation2Image" class="loopingAnimationImage" :src="loopingAnimation">
      </div>
      <div id="loopingAnimation3" class="loopingAnimationArea">
        <img id="loopingAnimation3Image" class="loopingAnimationImage" :src="loopingBackAnimation">
      </div> -->


<!--       <transition name="fade">
        <div id="loopingAnimation" class="loopingAnimationArea" v-show="isShowLoopingAnimation">
          <img id="loopingAnimationImage" class="loopingAnimationImage" :src="loopingAnimation2">
        </div>
      </transition> -->



      <!-- <transition name="fade">
        <div class="titleArea" v-show="this.isShowTitle">
          <div :lang="this.language" class="titleText" v-html="$t('landingTitle')"></div>
        </div>
      </transition> -->


      <div id="loopingAnimation" class="loopingAnimationArea ">
        <img id="loopingAnimationImage" class="loopingAnimationImage" :src="landingLoadingImage">
      </div>


      <transition name="fade">
        <div class="titleArea" v-show="isShowLandingLogo">
          <img id="landingLogo" class="landingLogo" :src="landingLogo">
        </div>
      </transition>


     <!--  <div class="logoArea">
      </div>


      <div class="titleArea">
        <div class="titleText1">
          <b>航天科技 改變生活</b>
        </div>
        <div class="titleText2">
          Aerospace Technology Improves Lives
        </div>
      </div>


      <div class="start3dButtonDescriptionArea">
        <div class="start3dButtonDescriptionText">
          體驗數據應用平台初稿
        </div>
      </div>
      <div class="start3dButtonArea">
      </div> -->
    </div>
  </div>
</template>

<script>

import i18n from '@/language';
import { store } from '../store'

export default {
  name: 'langding',
  data () {
    return {
      language : i18n.locale,
      backgroundImage : require('../assets/images/3Dview/background4.jpg'),

      loopingAnimation2 : require('../assets/images/landing/looping2.gif'),

      landingLoadingImage : require('../assets/images/landing/landingLoading.png'),



      landingLogo : require('../assets/images/landing/logo2.png'),

      isShowLoopingAnimation : false,
      isShowLandingLogo : false,

      loopingAnimation1Interval : null,
      isShowLoopingAnimation1 : false,


      isShowTitle : false,
    }
  },
  created(){
    this.initAnimation();
  },
  methods:{
    initAnimation(){
      let self = this;

      this.addLandingLogoAnimation();
      this.addLandingLoopAnimation();





      this.fadeOutLanding();

    },




    addLandingLogoAnimation(){
      let self = this;
      // if(document.getElementById("landingLogo") == null) {
      //   setTimeout(function(){ self.addLandingLogoAnimation()}, 100);
      // } else {
      //   // document.getElementById("landingLogo").classList.add('landingLogoAnimation');
      // }
      setTimeout(function(){ 
        self.isShowLandingLogo = true;
      }, 1000);
      setTimeout(function(){ 
        self.isShowLandingLogo = false;
      }, 3500);
      
    },

    addLandingLoopAnimation(){
      let self = this;
      if(document.getElementById("loopingAnimationImage") == null) {
        setTimeout(function(){ self.addLandingLoopAnimation()}, 100);
      } else {
        document.getElementById("loopingAnimationImage").classList.add('loopingAnimationScaleOpacity');
      }
    },


    fadeOutLanding(){
      let self = this;
      setTimeout(function(){ 
        store.state.isShowLanding = false;
        store.state.leftMenuSlideInOutEvent = "in";
        store.state.rightMenuSlideInOutEvent = "in";
        document.getElementById('landingArea').classList.remove('touch');

      }, 3500);
    }

  },

  computed:{
    checkCurrentLanguage(){return i18n.locale;},
  },
  watch:{
    checkCurrentLanguage(lang){this.language = lang;},
  },
}
</script>

<style scoped>
  .landingArea{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
  }

    .background{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }


  .loopingAnimationArea{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 70vmin;
    height: 70vmin;
    transform: translate3d(-50%,-50%,0);
  }

  .loopingAnimationScaleOpacity{
    animation: loopingScaleOpacity 15s;
    animation-timing-function: linear;
  }

  @keyframes loopingScaleOpacity {
    0%  {
      transform: scale(0.6) rotate(0deg);
      opacity: 0;
    }

    5%  {
      opacity: 0;
    }

    10%  {
      opacity: 1;
    }

    100% {
      transform: scale(3) rotate(360deg);
      opacity: 1;
    }
  }


  
  .loopingAnimationImage{
    width: 100%;
    /*opacity: 0;*/

  }

/*
  .loopingAnimationScaleOpacity{
    animation: loopingScaleOpacity 8s;
    animation-timing-function: linear;
  }

  @keyframes loopingScaleOpacity {
    0%   {
      transform:scale(0.1);
      opacity: 0;

    }
    50%{
      transform:scale(1.5);
      opacity: 1;
    }
    100% {
      transform:scale(3);
      opacity: 0;
    }
  }*/



  .titleArea{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50vmin;
    height: 30vmin;
    transform: translate3d(-50%,-50%,0);
/*    background-color: red;*/
  }

  .landingLogo{
    position: absolute;
    top: 50%;
    transform: translate3d(0,-50%,0);
    width: 100%;
/*    opacity: 0;*/
  }
/*
  .landingLogoAnimation{
    animation: landingLogoOpacity 5s;
    animation-timing-function: linear;
  }

  @keyframes landingLogoOpacity {
    0%   {
      opacity: 0;

    }
    10%{
      opacity: 0;
    }
    30%{
      opacity: 1;
    }
    50%{
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }*/




  .titleText{
    position: absolute;
    top: 50%;
    left: 50%;
    color: white;
    width: 100%;
    transform: translate3d(-50%,-50%,0);
    text-align: center;
/*    background-color: blue;*/
    font-size: 4vmin;
  }

  @media screen and (orientation:portrait) {
    .loopingAnimationArea{
      width: 40vmax;
      height: 40vmax;
    }
  }

</style>



// WEBPACK FOOTER //
// src/components/landing.vue