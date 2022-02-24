<template>
  <div>
    <div class="characterSelectBg touch" />


    <div class="characterSelectArea">
      <div class="characterSelectTitleArea">
        <div
          class="characterSelectTitle"
          v-html="$t('characterSelect')"
        />
      </div>
      <div class="characterSelectionWholeArea">
        <div class="characterSelectionArea">
          <div
            id="characterSelection1"
            class="characterSelection touch"
            @mouseup="selectCharacter('character1')"
            @mouseenter="selectingCharacter('character1',true)"
            @mouseleave="selectingCharacter('character1',false)"
          >
            <img
              class="characterSelectionImage"
              :src="characterImage['character1']"
            >
            <div
              class="characterSelectionText"
              v-html="$t('characterSelection')['character1']"
            />
          </div>
        </div>
        <div class="characterSelectionArea">
          <div
            id="characterSelection2"
            class="characterSelection touch"
            @mouseup="selectCharacter('character2')"
            @mouseenter="selectingCharacter('character2',true)"
            @mouseleave="selectingCharacter('character2',false)"
          >
            <img
              class="characterSelectionImage"
              :src="characterImage['character2']"
            >
            <div
              class="characterSelectionText"
              v-html="$t('characterSelection')['character2']"
            />
          </div>
        </div>
        <div class="characterSelectionArea">
          <div class="characterSelection">
            <img
              class="characterSelectionImage"
              :src="characterImage['character3']"
            >
            <div
              class="characterSelectionText characterSelectionTextDisable"
              v-html="$t('characterSelection')['character3']"
            />
          </div>
        </div>
      </div>
      <div
        class="characterSelectCloseButtonArea touch"
        @mouseup="closeCharacterSelect()"
      >
        <img
          class="characterSelectCloseButton"
          :src="circleCloseButton"
        >
      </div>
    </div>
  </div>
</template>

<script>

import i18n from '@/language'
import { store } from '../store'

export default {
  name: 'CharacterSelect',
  data () {
    return {
      language : i18n.locale,

      characterImage : {
        'character1' : require('../assets/images/characterSelect/character1.png'),
        'character2' : require('../assets/images/characterSelect/character2.png'),
        'character3' : require('../assets/images/characterSelect/character3.png'),
      },

      characterArray : ['character1' , 'character2' , 'character3' , 'character4'],
      characterElementId : {
        'character1' : 'characterSelection1',
        'character2' : 'characterSelection2',
        'character3' : 'characterSelection3',
      },


      'circleCloseButton' : require('../assets/images/global/circleCloseButton.png'),
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




    closeCharacterSelect(){
      store.state.isShowCharacterSelect = false
    },


    selectingCharacter(character , selecting){
      if(selecting){
        document.getElementById(this.characterElementId[character]).classList.add('selectingCharacter')
      }
      else{
        document.getElementById(this.characterElementId[character]).classList.remove('selectingCharacter')
      }
      
    },


    selectCharacter(character){
      store.state.selectingCharacter = character
      store.state.isShowCharacterSelect = false
      store.state.isShow3DScene = false
      store.state.leftMenuSlideInOutEvent = 'out'


      store.state.cesiumFlyToLocation = store.state.selectingLocation
      // store.state.selectingLocation = "";
    },

  },
}
</script>

<style scoped>

  .characterSelectBg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
  }

  .characterSelectArea{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%,-50%,0);
    width: 90vmin;
    height: 40vmin;
    border-radius: 8px;
    background-color: #1e1e1e;
    border: solid 1px #979797;
/*    background-color: red;*/
  }

  .characterSelectTitleArea{
    position: absolute;
    top: 5vmin;
    left: 0;
    width: 100%;
    height: 8vmin;
/*    background-color: blue;*/
  }

  .characterSelectTitle{
    position: absolute;
    top: 50%;
    transform: translate3d(0,-50%,0);
    text-align: center;
    width: 100%;
    color: white;
    font-size: 4vmin;
  }

  .characterSelectCloseButtonArea{
    position: absolute;
    top: 2vmin;
    left: 2vmin;
    width: 5vmin;
    height: 5vmin;
/*    background-color: white;*/
  }

  .characterSelectCloseButton{
    width: 100%;
  }


  .characterSelectionWholeArea{
    position: absolute;
    top: 13vmin;
    left: 4vmin;
    width: 82vmin;
    height: 27vmin;
/*    background-color: orange;*/
  }

  .characterSelectionArea{
    position: relative;
    width: 27.3333333333vmin;
    height: 27vmin;
/*    background-color: green;*/
    float: left;
  }

  .characterSelection{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%,-50%,0);
    width: 20vmin;
    height: 17.5vmin;
    border-radius: 8px;
/*    background-color: purple;*/
  }

  .characterSelectionImage{
    width: 100%;
  }

  .characterSelectionText{
    position: absolute;
    top: 50%;
    transform: translate3d(0,-50%,0);
    width: 100%;
    text-align: center;
    color:white;
    font-size: 2vmin;
  }

   .characterSelectionTextDisable{
    color:rgba(255, 255, 255, 0.5);
  } 

  .selectingCharacter{
    border: solid 2px #FFFFFF;
  }


</style>



// WEBPACK FOOTER //
// src/components/characterSelect.vue