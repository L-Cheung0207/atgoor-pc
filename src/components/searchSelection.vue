<template>
  <div>
    <div class="locationSelectionPage touch">
      <div
        class="locationSelection locationSelection1 touch"
        :style="{backgroundImage: `url('${locationSelectionImage['saudi']}')`}"
        @mouseup="selectLocation('saudi')"
      >
        <div
          :lang="language"
          class="locationSelectionText"
          v-html="$t('locationSelection')['saudi']"
        />
      </div>
      <div
        class="locationSelection locationSelection2 touch"
        :style="{backgroundImage: `url('${locationSelectionImage['hk']}')`}"
        @mouseup="selectLocation('hk')"
      >
        <div
          :lang="language"
          class="locationSelectionText"
          v-html="$t('locationSelection')['hk']"
        />
      </div>
      <div
        class="locationSelection locationSelection3 touch"
        :style="{backgroundImage: `url('${locationSelectionImage['suzhou']}')`}"
        @mouseup="selectLocation('suzhou')"
      >
        <div
          :lang="language"
          class="locationSelectionText"
          v-html="$t('locationSelection')['suzhou']"
        />
      </div>

      <div
        class="locationSelectionCloseButtonArea touch"
        @mouseup="closeLocationSelection"
      >
        <img
          class="locationSelectionCloseButtonImage"
          :src="locationSelectionCloseImage"
        >
      </div>
    </div>
  </div>
</template>

<script>

import i18n from '@/language'
import { store } from '../store'

export default {
  name: 'SearchSelection',
  data () {
    return {
      language : i18n.locale,
      locationSelectionImage : {
        'saudi' : require('../assets/images/global/locationSelection/saudi.jpg'),
        'hk' : require('../assets/images/global/locationSelection/hk.jpg'),
        'suzhou' : require('../assets/images/global/locationSelection/suzhou.jpg'),
      },
      locationSelectionCloseImage : require('../assets/images/global/circleCloseButton.png'),
    }
  },

  computed:{
    checkCurrentLanguage(){return i18n.locale},
  },
  watch:{
    checkCurrentLanguage(lang){this.language = lang},
  },
  created(){

  },
  methods:{
    selectLocation(destination){
      store.state.removeAllPreviewEvent = true
      store.state.isShowLocationSelection = false
      //儲存已選的 location
      store.state.selectingLocation = destination
      //打開 character select
      store.state.isShowCharacterSelect = true
    },

    closeLocationSelection(){
      store.state.isShowLocationSelection = false
    },

  },
}
</script>

<style scoped>

  .locationSelectionPage{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.8);
  }

  .locationSelection{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40vmin;
    height: 22.56vmin;
    border-radius: 8px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }







  .locationSelection1{
    position: absolute;
    transform: translate3d(calc(-50% - 45vmin),-50%,0);
/*    background-color: red;*/
  }

  .locationSelection2{
    position: absolute;
    transform: translate3d(-50%,-50%,0);
/*    background-color: blue;*/
  }

  .locationSelection3{
    position: absolute;
    transform: translate3d(calc(-50% + 45vmin),-50%,0);
/*    background-color: green;*/
  }


  .locationSelectionText{
    position: absolute;
    color: white;
    width: 100%;
    text-align: center;
    top: 50%;
    transform: translate3d(0,-50%,0);
    font-size: 5vmin;
    text-shadow: 2px 2px #000000;
  }

  .locationSelectionCloseButtonArea{
    position: absolute;
    top: 5vmin;
    left: 5vmin;
    width: 10vmin;
    height: 10vmin;
/*    background-color: red;*/
  }

  .locationSelectionCloseButtonImage{
    width: 100%;
  }
</style>



// WEBPACK FOOTER //
// src/components/searchSelection.vue