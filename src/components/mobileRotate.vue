<template>
  <div>
    <div class="mobileRotateArea touch">
      <div class="mobileRotateModalArea">
        <div class="mobileRotateModalImageArea">
          <img
            class="mobileRotateModalImage"
            :src="mobileRotateImage"
          >
        </div>
        <div
          class="mobileRotateModalText"
          v-html="$t('mobileRotate')"
        />
      </div>
    </div>
  </div>
</template>

<script>

import i18n from '@/language'

export default {
  name: 'MobileRotate',
  data () {
    return {
      language : i18n.locale,
      mobileRotateImage : require('../assets/images/mobile/mobileRotate.png'),
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

@media screen and (orientation:portrait) {
  .mobileRotateArea{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
  }

  .mobileRotateModalArea{
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate3d(-50%,-50%,0);
    width: 35vmax;
    height: 28vmax;
    border-radius: 8px;
    background-color: #1e1e1e
  }

  .mobileRotateModalImageArea{
    position: absolute;
    left: 50%;
    top: 6vmax;
    transform: translate3d(-50%,0,0);
    width: 12vmax;
  /*  background-color: red;*/
  }

  .mobileRotateModalImage{
    width: 100%;
  }
  .mobileRotateModalText{
    position: absolute;
    bottom: 5vmax;
    width: 100%;
    text-align: center;
    color: white;
    font-size: 2vmax;
  }
}

@media screen and (orientation:landscape) {
  .mobileRotateArea{
    display: none;
  }
}



</style>



// WEBPACK FOOTER //
// src/components/mobileRotate.vue