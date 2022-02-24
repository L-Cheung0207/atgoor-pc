<template>
  <div>
    <div
      :id="'countrySelection_' + countryId"
      class="countrySelectionTemplate"
      @mouseup="selectCountry()"
    >
      <span :id="'countrySelectionContent_' + countryId">
        <img
          class="countrySelectionImage"
          :src="countryImageDynamic"
        >
        <div
          class="countrySelectionTitle"
          v-html="countryName[language]"
        />
      </span>
      <img
        v-show="!countryUnloackDynamic"
        class="countrySelectionLockImage"
        :src="countrySelectionLockImage"
      >
    </div>
  </div>
</template>

<script>

import i18n from '@/language'
import { store } from '@/store'

export default {
  name: 'CountrySelection',
  props: ['countryId','countryName','countryLocalImage','countryUnlock'],
  data () {
    return {
      language : i18n.locale,
      countryImageDynamic : null,
      countryUnloackDynamic : false,

      countrySelectionLockImage : require('../../assets/images/leftMenu/countrySelection/lock.png'),
    }
  },

  computed:{
    checkCurrentLanguage(){return i18n.locale},
  },
  watch:{
    checkCurrentLanguage(lang){this.language = lang},
  },
  created(){
    this.setUpImage()
    this.unlockSelection()
  },
  methods:{
    setUpImage(){
      if(this.countryLocalImage != null){
        this.countryImageDynamic = 'static/images/countrySelection/' + this.countryLocalImage
      }
    },

    unlockSelection(){
      let self = this
      if(document.getElementById('countrySelection_' + this.countryId) == null){
        setTimeout(function(){
          self.unlockSelection()
        },200)
      }
      else{
        if(this.countryUnlock !=null){
          if(this.countryUnlock == true){
            this.countryUnloackDynamic = true
            document.getElementById('countrySelection_' + this.countryId).classList.add('touch')
          }
          else{
            document.getElementById('countrySelectionContent_' + this.countryId).classList.add('halfOpacity')
          }
        }
      }
    },

    selectCountry(){
      store.state.leftMenuSelectingCountry = this.countryId






    },

  },
}
</script>

<style scoped>
  .countrySelectionTemplate{
    position: relative;
    left: 50%;
    transform: translate3d(-50%,0,0);
    width: 40vmin;
    height: 12vmin;
    border-radius: 4px;
    margin-bottom: 2vmin;
    background-color: #1a1a1a;
    overflow: hidden;
  }

  .countrySelectionTemplate:hover{
    border: solid 0.3vmin #FFFFFF;
    margin-bottom: 1.4vmin;
  }

  .countrySelectionTitle{
    position: absolute;
    top: 50%;
    transform: translate3d(0,-50%,0);
    left: 0;
    width: 100%;
    text-align: center;
    color: white;
    font-size: 3vmin;
  }

  .countrySelectionImage{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%,-50%,0);
    width: 100%;
    opacity: 0.5;
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
    opacity: 0.4;
  }
</style>



// WEBPACK FOOTER //
// src/components/template/countrySelection.vue