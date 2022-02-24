<template>
  <div>
    <div class="cesiumDataLoadingScreen touch">
      <div class="cesiumDataLoadingArea">
        <div class="cesiumDataLoadingImageArea">
          <img
            class="cesiumDataLoadingImage"
            :src="dataLoadingImage"
          >
        </div>
        <div class="cesiumDataLoadingTextArea">
          <div
            class="cesiumDataLoadingText"
            v-html="$t('loading')"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import i18n from '@/language'

export default {
  name: 'CesiumDataLoading',
  data () {
    return {
      language : i18n.locale,
      dataLoadingImage : require('../assets/images/cesium/dataLoading.gif'),
      
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
    
  },
}
</script>

<style scoped>

.cesiumDataLoadingScreen{
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.7);
}

.cesiumDataLoadingArea{
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate3d(-50%,-50%,0);
  width: 30vmin;
  height: 28vmin;
  border-radius: 8px;
  border: solid 1px #979797;
  background-color: rgba(0,0,0,0.5); 
}

.cesiumDataLoadingImageArea{
  position: absolute;
  top: 0vmin;
  left: 50%;
  transform: translate3d(-50%,0,0);
  width: 20vmin;
  height: 20vmin;
/*  background-color : red;*/
}


.cesiumDataLoadingTextArea{
  position: absolute;
  bottom: 3vmin;
  width: 100%;
  text-align: center;
}
.cesiumDataLoadingText{
  font-size: 3.5vmin;
  color: white;
}

.cesiumDataLoadingImage{
  width: 100%;
}

</style>