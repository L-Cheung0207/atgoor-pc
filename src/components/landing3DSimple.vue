<template>
  <div>

    <div class="imageMarquee" id="backgroundImage" :style="{ backgroundImage: `url('${backgroundImage}')` }" ></div>

    <a-scene class="touchAll" id="a-scene" loading-screen="enabled: false" background="transparent:true" vr-mode-ui="enabled: false" cursor="rayOrigin: mouse" light="defaultLightsEnabled: false">
      <a-camera fov="30" id="camera" position="0 0 15" wasd-controls-enabled="false" look-controls="enabled:false; touchEnabled: true"></a-camera>
      <a-assets>
        <img id="earthTextureWithGrid" src="static/models/earthTextureWithGrid.jpg" crossorigin="anonymous">
        <img id="earthTexture" src="static/models/earthTexture.jpg" crossorigin="anonymous">
        <img id="gridHideImage" src="static/3D/gridHide2.png">
        <img id="earthLightImage" src="static/3D/earthLight.png">
        <img id="earthShadowImage" src="static/3D/earthShadow.png">
      </a-assets>

      <a-entity id="model-parent" position="0 0 0" rotation="0 0 0">

        <a-entity id="gridUp" visible="true" position="0 3 -10" scale="5 2 5" rotation="0 0 0" animation-mixer="clip: Scene;">
          <a-entity id="gridUpModel" gltf-model="static/models/grid_20211229_3.glb"></a-entity>
        </a-entity>

        <a-entity id="gridDown" visible="true" position="0 -3 -10" scale="5 2 5" rotation="180 0 0" animation-mixer="clip: Scene;">
          <a-entity id="gridDownModel" gltf-model="static/models/grid_20211229_3.glb"></a-entity>
        </a-entity>

        <a-entity id="satellite1Parent" position="0 0 1" rotation="20 0 0">
          <a-entity id="satellite1Rotate" position="0 0 0" animation="property: rotation; to: 0 360 0; dur: 20000; easing: linear; loop: true; pauseEvents: pause; resumeEvents: resume;">
            <a-entity class="touch" id="satellite" visible="true" position="-2 0 0" scale="0.04 0.04 0.04" rotation="20 -80 0" animation-mixer="clip: Scene;" on-hover="hoverObject:satellite1">
              <a-entity gltf-model="static/models/satellite.glb"  ></a-entity>
            </a-entity>
          </a-entity>
        </a-entity>

        <a-entity id="satellite2Parent" position="0 0 1" rotation="-20 0 0">
          <a-entity id="satellite2Rotate" position="0 0 0" animation="property: rotation; to: 0 -360 0; dur: 25000; easing: linear; loop: true; pauseEvents: pause; resumeEvents: resume;">
            <a-entity id="satellite" visible="true" position="-2.5 0 0" scale="0.04 0.04 0.04" rotation="-50 90 0" animation-mixer="clip: Scene;" on-hover="hoverObject:satellite2">
              <a-entity gltf-model="static/models/satellite.glb"  ></a-entity>
            </a-entity>
          </a-entity>
        </a-entity>

        <a-entity id="satellite3Parent" position="0 0 1" rotation="10 0 0">
          <a-entity id="satellite3Rotate" position="0 0 0" animation="property: rotation; to: 0 360 0; dur: 30000; easing: linear; loop: true; pauseEvents: pause; resumeEvents: resume;">
            <a-entity id="satellite" visible="true" position="-3 0 0" scale="0.04 0.04 0.04" rotation="20 -80 0" animation-mixer="clip: Scene;" on-hover="hoverObject:satellite3">
              <a-entity gltf-model="static/models/satellite2.glb"  ></a-entity>
            </a-entity>
          </a-entity>
        </a-entity>

        <a-entity id="satellite4Parent" position="0 0 1" rotation="-50 0 0">
          <a-entity id="satellite4Rotate" position="0 0 0" animation="property: rotation; to: 0 -360 0; dur: 30000; easing: linear; loop: true; pauseEvents: pause; resumeEvents: resume;">
            <a-entity id="satellite" visible="true" position="-3.5 0 0" scale="0.04 0.04 0.04" rotation="90 90 0" animation-mixer="clip: Scene;" on-hover="hoverObject:satellite4">
              <a-entity gltf-model="static/models/satellite2.glb"  ></a-entity>
            </a-entity>
          </a-entity>
        </a-entity>


        <a-image id="earthLight" src="#earthLightImage" width="4.7" height="4.7" opacity="1" transparent="true" position="0 0 -1"></a-image>

        <a-entity id="earthParent" position="0 0 1" rotation="0 0 0" scale="1.8 1.8 1.8">
          <a-entity id="earthModel" geometry="primitive: sphere; segmentsWidth: 70; segmentsHeight: 70" material="src:#earthTextureWithGrid;" scale="1 1 1"  rotation="0 0 0">
          </a-entity>
        </a-entity>
      </a-entity>

    </a-scene>

    <div class="blackMask">
      <img class="blackMaskImage" :src="this.blackMaskImage"/>
    </div>

  </div>
</template>

<script>

import i18n from '@/language';
import { store } from '../store'

export default {
  name: 'landing3DSimple',
  data () {
    return {
      language : i18n.locale,
      backgroundImage : require('../assets/images/3Dview/background6.jpg'),
      blackMaskImage : require('../assets/images/3Dview/blackMask.png'),

    }
  },
  created(){
    this.earthRotateAnimation();
  },
  methods:{

    earthRotateAnimation(){
      let self = this;
      if(document.getElementById("earthModel") == null) {
        setTimeout(function(){ self.earthRotateAnimation()}, 100);
      } else {
        document.getElementById("earthModel").setAttribute("animation", "property: rotation; to: 0 -360 0; dur: 35000; easing: linear; loop: true ; pauseEvents: pause; resumeEvents: resume;");
      }
    },

  },

  computed:{
    
  },
  watch:{
    
  },
}


</script>

<style scoped>
  #backgroundImage{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
     background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }


  .blackMask{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 15vmin;
  }


  .blackMaskImage{
    height: 100%;
    width: 100%;
  }


  #earthParent{
    z-index: -1000;
  }




</style>



// WEBPACK FOOTER //
// src/components/landing3DSimple.vue