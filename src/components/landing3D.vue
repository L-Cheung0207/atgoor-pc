<template>
  <div>
    <div
      id="backgroundImage"
      class="imageMarquee"
      :style="{ backgroundImage: `url('${backgroundImage}')` }"
    />

    <a-scene
      id="a-scene"
      class="touchAll"
      loading-screen="enabled: false"
      background="transparent:true"
      vr-mode-ui="enabled: false"
      cursor="rayOrigin: mouse"
      light="defaultLightsEnabled: false"
    >
      <a-camera
        id="camera"
        fov="30"
        position="0 0 15"
        wasd-controls-enabled="false"
        look-controls="enabled:false; touchEnabled: true"
      />
      <a-assets>
        <img
          id="earthTextureWithGrid"
          src="static/models/earthTextureWithGrid.jpg"
          crossorigin="anonymous"
        >
        <img
          id="earthTexture"
          src="static/models/earthTexture.jpg"
          crossorigin="anonymous"
        >
        <img
          id="gridHideImage"
          src="static/3D/gridHide2.png"
        >
        <img
          id="earthLightImage"
          src="static/3D/earthLight.png"
        >
        <img
          id="earthShadowImage"
          src="static/3D/earthShadow.png"
        >
      </a-assets>


      <a-entity
        id="model-parent"
        position="0 0 0"
        rotation="0 0 0"
      >
        <a-entity
          id="gridUp"
          visible="true"
          position="0 3 -10"
          scale="5 2 5"
          rotation="0 0 0"
          animation-mixer="clip: Scene;"
        >
          <a-entity
            id="gridUpModel"
            gltf-model="static/models/grid_20211229_3.glb"
          />
        </a-entity>

        <a-entity
          id="gridDown"
          visible="true"
          position="0 -3 -10"
          scale="5 2 5"
          rotation="180 0 0"
          animation-mixer="clip: Scene;"
        >
          <a-entity
            id="gridDownModel"
            gltf-model="static/models/grid_20211229_3.glb"
          />
        </a-entity>

        <a-entity
          id="satellite1Parent"
          position="0 0 1"
          rotation="20 0 0"
        >
          <a-entity
            id="satellite1Rotate"
            position="0 0 0"
            animation="property: rotation; to: 0 360 0; dur: 20000; easing: linear; loop: true; pauseEvents: pause; resumeEvents: resume;"
          >
            <a-entity
              id="satellite"
              class="touch"
              visible="true"
              position="-2 0 0"
              scale="0.04 0.04 0.04"
              rotation="20 -80 0"
              animation-mixer="clip: Scene;"
              on-hover="hoverObject:satellite1"
            >
              <a-entity gltf-model="static/models/satellite.glb" />
            </a-entity>
          </a-entity>
        </a-entity>


        <a-entity
          id="satellite2Parent"
          position="0 0 1"
          rotation="-20 0 0"
        >
          <a-entity
            id="satellite2Rotate"
            position="0 0 0"
            animation="property: rotation; to: 0 -360 0; dur: 25000; easing: linear; loop: true; pauseEvents: pause; resumeEvents: resume;"
          >
            <a-entity
              id="satellite"
              visible="true"
              position="-2.5 0 0"
              scale="0.04 0.04 0.04"
              rotation="-50 90 0"
              animation-mixer="clip: Scene;"
              on-hover="hoverObject:satellite2"
            >
              <a-entity gltf-model="static/models/satellite.glb" />
            </a-entity>
          </a-entity>
        </a-entity>

        <a-entity
          id="satellite3Parent"
          position="0 0 1"
          rotation="10 0 0"
        >
          <a-entity
            id="satellite3Rotate"
            position="0 0 0"
            animation="property: rotation; to: 0 360 0; dur: 30000; easing: linear; loop: true; pauseEvents: pause; resumeEvents: resume;"
          >
            <a-entity
              id="satellite"
              visible="true"
              position="-3 0 0"
              scale="0.04 0.04 0.04"
              rotation="20 -80 0"
              animation-mixer="clip: Scene;"
              on-hover="hoverObject:satellite3"
            >
              <a-entity gltf-model="static/models/satellite2.glb" />
            </a-entity>
          </a-entity>
        </a-entity>

        <a-entity
          id="satellite4Parent"
          position="0 0 1"
          rotation="-50 0 0"
        >
          <a-entity
            id="satellite4Rotate"
            position="0 0 0"
            animation="property: rotation; to: 0 -360 0; dur: 30000; easing: linear; loop: true; pauseEvents: pause; resumeEvents: resume;"
          >
            <a-entity
              id="satellite"
              visible="true"
              position="-3.5 0 0"
              scale="0.04 0.04 0.04"
              rotation="90 90 0"
              animation-mixer="clip: Scene;"
              on-hover="hoverObject:satellite4"
            >
              <a-entity gltf-model="static/models/satellite2.glb" />
            </a-entity>
          </a-entity>
        </a-entity>


        <a-image
          id="earthLight"
          src="#earthLightImage"
          width="4.7"
          height="4.7"
          opacity="1"
          transparent="true"
          position="0 -0.5 -1"
        />

        <a-entity
          id="earthParent"
          position="0 -0.2 1"
          rotation="0 0 0"
          scale="1.8 1.8 1.8"
        >
          <a-entity
            id="earthModel"
            geometry="primitive: sphere; segmentsWidth: 70; segmentsHeight: 70"
            material="src:#earthTextureWithGrid;"
            scale="1 1 1"
            rotation="0 0 0"
          >
            <a-entity rotation="-28 140 0">
              <a-box
                id="gridButtonSaudi"
                class="touch"
                color="orange"
                depth="0.005"
                height="0.2"
                width="0.2"
                position="0 0 1"
                on-hover="hoverObject:saudi"
              />
            </a-entity>
            <a-entity rotation="-27.8 208 2">
              <a-box
                id="gridButtonHongKong"
                class="touch"
                color="orange"
                depth="0.005"
                height="0.2"
                width="0.2"
                position="0 0 1"
                on-hover="hoverObject:hk"
              />
            </a-entity>
          </a-entity>
        </a-entity>
      </a-entity>
    </a-scene>

    <div
      id="searhMenuArea"
      class="searhMenuArea touch"
      @mouseup="openLocationSelection"
    >
      <div class="searhMenuSearchIconArea">
        <img
          :src="searchIcon"
          class="searhMenuSearchIconImage"
        >
      </div>
      <div class="searchMenuBreakline" />
      <div
        :lang="language"
        class="searhMenuTextArea"
        v-html="$t('searchLocation')"
      />

      <!-- <div class="searhMenuLocationPinArea">
        <img :src="locationPin" class="searhMenuLocationPinImage">
      </div> -->
    </div>


    <!-- Preview location -->
    <transition name="fade">
      <div
        v-show="isShowLocationPreview['saudi']"
        id="previewSelectionSaudi"
        class="previewSelection"
      >
        <div
          class="previewSelectionImageArea"
          :style="{backgroundImage: `url('${locationSelectionImage['saudi']}')`}"
        />
        <div class="previewSelectionTextArea">
          <div class="previewSelectionEachDetailArea">
            <div
              class="previewSelectionEachDetailText previewSelectionEachDetailTitleText"
              v-html="$t('previewSelectionTitle')['saudi']"
            />
          </div>
          <div class="previewSelectionEachDetailArea">
            <div
              class="previewSelectionEachDetailText"
              v-html="$t('previewSelectionCoordinate')['saudi']"
            />
          </div>
          <div class="previewSelectionEachDetailArea">
            <div
              class="previewSelectionEachDetailText"
              v-html="$t('previewSelectionArea')['saudi']"
            />
          </div>
          <div class="previewSelectionEachDetailArea">
            <div
              class="previewSelectionEachDetailText"
              v-html="$t('previewSelectionPopulation')['saudi']"
            />
          </div>
        </div>
      </div>
    </transition>

    <transition name="fade">
      <div
        v-show="isShowLocationPreview['hk']"
        id="previewSelectionHK"
        class="previewSelection"
      >
        <div
          class="previewSelectionImageArea"
          :style="{backgroundImage: `url('${locationSelectionImage['hk']}')`}"
        />
        <div class="previewSelectionTextArea">
          <div class="previewSelectionEachDetailArea">
            <div
              class="previewSelectionEachDetailText previewSelectionEachDetailTitleText"
              v-html="$t('previewSelectionTitle')['HK']"
            />
          </div>
          <div class="previewSelectionEachDetailArea">
            <div
              class="previewSelectionEachDetailText"
              v-html="$t('previewSelectionCoordinate')['HK']"
            />
          </div>
          <div class="previewSelectionEachDetailArea">
            <div
              class="previewSelectionEachDetailText"
              v-html="$t('previewSelectionArea')['HK']"
            />
          </div>
          <div class="previewSelectionEachDetailArea">
            <div
              class="previewSelectionEachDetailText"
              v-html="$t('previewSelectionPopulation')['HK']"
            />
          </div>
        </div>
      </div>
    </transition>


    <!-- Preview satellite -->
    <transition name="fade">
      <div
        v-show="isShowSatellitePreview['satellite1']"
        id="previewSatellite1"
        class="previewSatellite"
      >
        <div class="previewSatelliteTextArea">
          <div class="previewSatelliteEachDetailArea">
            <div
              class="previewSatelliteEachDetailText previewSatelliteEachDetailTitleText"
              v-html="$t('previewSatelliteTitle')['satellite1']"
            />
          </div>
          <div class="previewSatelliteEachDetailArea">
            <div
              class="previewSatelliteEachDetailText"
              v-html="$t('previewSatelliteLaunchTime')['satellite1']"
            />
          </div>
          <div class="previewSatelliteEachDetailArea">
            <div
              class="previewSatelliteEachDetailText"
              v-html="$t('previewSatelliteClient')['satellite1']"
            />
          </div>
          <div class="previewSatelliteEachDetailArea">
            <div
              class="previewSatelliteEachDetailText"
              v-html="$t('previewSatelliteTrack')['satellite1']"
            />
          </div>
          <div class="previewSatelliteEachDetailArea">
            <div
              class="previewSatelliteEachDetailText"
              v-html="$t('previewSatelliteCategory')['satellite1']"
            />
          </div>
        </div>
      </div>
    </transition>

    <transition name="fade">
      <div
        v-show="isShowSatellitePreview['satellite2']"
        id="previewSatellite2"
        class="previewSatellite"
      >
        <div class="previewSatelliteTextArea">
          <div class="previewSatelliteEachDetailArea">
            <div
              class="previewSatelliteEachDetailText previewSatelliteEachDetailTitleText"
              v-html="$t('previewSatelliteTitle')['satellite2']"
            />
          </div>
          <div class="previewSatelliteEachDetailArea">
            <div
              class="previewSatelliteEachDetailText"
              v-html="$t('previewSatelliteLaunchTime')['satellite2']"
            />
          </div>
          <div class="previewSatelliteEachDetailArea">
            <div
              class="previewSatelliteEachDetailText"
              v-html="$t('previewSatelliteClient')['satellite2']"
            />
          </div>
          <div class="previewSatelliteEachDetailArea">
            <div
              class="previewSatelliteEachDetailText"
              v-html="$t('previewSatelliteTrack')['satellite2']"
            />
          </div>
          <div class="previewSatelliteEachDetailArea">
            <div
              class="previewSatelliteEachDetailText"
              v-html="$t('previewSatelliteCategory')['satellite2']"
            />
          </div>
        </div>
      </div>
    </transition>

    <transition name="fade">
      <div
        v-show="isShowSatellitePreview['satellite3']"
        id="previewSatellite3"
        class="previewSatellite"
      >
        <div class="previewSatelliteTextArea">
          <div class="previewSatelliteEachDetailArea">
            <div
              class="previewSatelliteEachDetailText previewSatelliteEachDetailTitleText"
              v-html="$t('previewSatelliteTitle')['satellite3']"
            />
          </div>
          <div class="previewSatelliteEachDetailArea">
            <div
              class="previewSatelliteEachDetailText"
              v-html="$t('previewSatelliteLaunchTime')['satellite3']"
            />
          </div>
          <div class="previewSatelliteEachDetailArea">
            <div
              class="previewSatelliteEachDetailText"
              v-html="$t('previewSatelliteClient')['satellite3']"
            />
          </div>
          <div class="previewSatelliteEachDetailArea">
            <div
              class="previewSatelliteEachDetailText"
              v-html="$t('previewSatelliteTrack')['satellite3']"
            />
          </div>
          <div class="previewSatelliteEachDetailArea">
            <div
              class="previewSatelliteEachDetailText"
              v-html="$t('previewSatelliteCategory')['satellite3']"
            />
          </div>
        </div>
      </div>
    </transition>

    <transition name="fade">
      <div
        v-show="isShowSatellitePreview['satellite4']"
        id="previewSatellite4"
        class="previewSatellite"
      >
        <div class="previewSatelliteTextArea">
          <div class="previewSatelliteEachDetailArea">
            <div
              class="previewSatelliteEachDetailText previewSatelliteEachDetailTitleText"
              v-html="$t('previewSatelliteTitle')['satellite4']"
            />
          </div>
          <div class="previewSatelliteEachDetailArea">
            <div
              class="previewSatelliteEachDetailText"
              v-html="$t('previewSatelliteLaunchTime')['satellite4']"
            />
          </div>
          <div class="previewSatelliteEachDetailArea">
            <div
              class="previewSatelliteEachDetailText"
              v-html="$t('previewSatelliteClient')['satellite4']"
            />
          </div>
          <div class="previewSatelliteEachDetailArea">
            <div
              class="previewSatelliteEachDetailText"
              v-html="$t('previewSatelliteTrack')['satellite4']"
            />
          </div>
          <div class="previewSatelliteEachDetailArea">
            <div
              class="previewSatelliteEachDetailText"
              v-html="$t('previewSatelliteCategory')['satellite4']"
            />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>

import i18n from '@/language'
import { store } from '../store'
import $ from 'jquery'

export default {
  name: 'Landing3D',
  data () {
    return {
      language : i18n.locale,
      // backgroundImage : "./static/3D/background.png",
      backgroundImage : require('../assets/images/3Dview/background6.jpg'),
      dropupArrow : require('../assets/images/3Dview/downArrow.png'),
      gridImage : require('../assets/images/3Dview/gridImage.png'),
      searchIcon : require('../assets/images/3Dview/searchIcon.png'),
      locationPin : require('../assets/images/3Dview/locationPin.png'),

      
      //location selection
      locationSelectionImage : {
        'saudi' : require('../assets/images/global/locationSelection/saudi.jpg'),
        'hk' : require('../assets/images/global/locationSelection/hk.jpg'),
        'suzhou' : require('../assets/images/global/locationSelection/suzhou.jpg'),
      },
 
      isShowLocationPreview : {
        'saudi' : false,
        'hk' : false,
      },
      isShowLocationPreviewArray : ['saudi','hk'],


      isShowSatellitePreview : {
        'satellite1' : false,
        'satellite2' : false,
        'satellite3' : false,
        'satellite4' : false,
      },
      isShowSatellitePreviewArray : ['satellite1','satellite2','satellite3','satellite4'],



      isShowEarthGrid : true,

      beforeDraggingRotationX :0,
      beforeDraggingRotationY :0,
      beforeDraggingRotationZ :0,

      afterDraggingRotationX :0,
      afterDraggingRotationY :0,
      afterDraggingRotationZ :0,


      isEnableGridFunction : true,


    }
  },

  computed:{
    checkCurrentLanguage(){return i18n.locale},
    checkIsShowLanding(){return store.state.isShowLanding},
    checkIsEnableGridFunction(){return store.state.isEnableGridFunction},
    checkRemoveAllPreviewEvent(){return store.state.removeAllPreviewEvent},
  },
  watch:{
    checkCurrentLanguage(lang){this.language = lang},
    checkIsShowLanding(flag){
      if(!flag){
        this.earthMoveOneTimeAnimation()
        this.gridOneTimeAnimation()
        this.gridHideOneTimeAnimation()
        this.searchMenuSlideIn()
        this.earthLightMoveOneTimeAnimation()
      }
    },

    checkIsEnableGridFunction(flag){
      if(flag){
        console.log('enable grid')
        document.getElementById('earthModel').setAttribute('material','src:#earthTextureWithGrid;')
        document.getElementById('gridButtonSaudi').setAttribute('visible',true)
        document.getElementById('gridButtonHongKong').setAttribute('visible',true)
      }
      else{
        console.log('disable grid')
        document.getElementById('earthModel').setAttribute('material','src:#earthTexture;')
        document.getElementById('gridButtonSaudi').setAttribute('visible',false)
        document.getElementById('gridButtonHongKong').setAttribute('visible',false)
      }
    },
    checkRemoveAllPreviewEvent(flag){
      if(flag){
        store.state.removeAllPreviewEvent = false
        this.removeAllPreview()
      }
    },
  },
  created(){

    let self = this
    // AFRAME.registerComponent('model-loader', {
    //   init: function () {
    //     this.el.addEventListener('model-loaded', function () {
    //       console.log('Finish model load !!!!!!!');
    //       $("#loading").hide();
    //     });
    //   }
    // });

    // AFRAME.registerComponent('model-opacity', {
    //   schema: {default: 1.0},
    //   init: function () {
    //     this.el.addEventListener('model-loaded', this.update.bind(this))
    //   },
    //   update: function () {
    //     let mesh = this.el.getObject3D('mesh')
    //     let data = this.data
    //     if (!mesh) { return }
    //     mesh.traverse(function (node) {
    //       if (node.isMesh) {
    //         node.material.opacity = data
    //         node.material.transparent = data < 1.0
    //         node.material.needsUpdate = true
    //       }
    //     })
    //   }
    // })

    // AFRAME.registerComponent('clickhandler', {
    //   schema: {
    //     txt: {default:'default'}
    //   },        
    //   init: function () {
    //     console.log("@@@@@@@@@");
    //     let data = this.data;
    //     let el = this.el;        
    //     this.el.addEventListener('click', function () {
    //     console.log("!!!!!!!!");        
    //      console.log(data.txt);
    //     });        
    //   }
    // });


    // AFRAME.registerComponent('on-hover', {
    //   schema: {
    //     hoverObject: {default: ''}
    //   },
    //   init: function () {
    //     let data = this.data
    //     let el = this.el  // <a-box>
    //     el.addEventListener('mouseenter', function () {
    //       console.log(event.target)
    //       if(data.hoverObject == 'saudi' && store.state.isEnableGridFunction){
    //         self.isShowLocationPreview['saudi'] = true
    //         self.theWorldPause()
    //       }
    //       else if(data.hoverObject == 'hk' && store.state.isEnableGridFunction){
    //         self.isShowLocationPreview['hk'] = true
    //         self.theWorldPause()
    //       }
    //       else if(data.hoverObject == 'satellite1' && store.state.isEnableGridFunction){
    //         self.isShowSatellitePreview['satellite1'] = true
    //         self.theWorldPause()
    //       }
    //       else if(data.hoverObject == 'satellite2' && store.state.isEnableGridFunction){
    //         self.isShowSatellitePreview['satellite2'] = true
    //         self.theWorldPause()
    //       }
    //       else if(data.hoverObject == 'satellite3' && store.state.isEnableGridFunction){
    //         self.isShowSatellitePreview['satellite3'] = true
    //         self.theWorldPause()
    //       }
    //       else if(data.hoverObject == 'satellite4' && store.state.isEnableGridFunction){
    //         self.isShowSatellitePreview['satellite4'] = true
    //         self.theWorldPause()
    //       }
    //     })
    //     el.addEventListener('mouseleave', function () {
    //       self.theWorldResume()
    //       if(data.hoverObject == 'saudi'){
    //         self.isShowLocationPreview['saudi'] = false
    //       }
    //       else if(data.hoverObject == 'hk'){
    //         self.isShowLocationPreview['hk'] = false
    //       }
    //       else if(data.hoverObject == 'satellite1' && store.state.isEnableGridFunction){
    //         self.isShowSatellitePreview['satellite1'] = false
    //       }
    //       else if(data.hoverObject == 'satellite2' && store.state.isEnableGridFunction){
    //         self.isShowSatellitePreview['satellite2'] = false
    //       }
    //       else if(data.hoverObject == 'satellite3' && store.state.isEnableGridFunction){
    //         self.isShowSatellitePreview['satellite3'] = false
    //       }
    //       else if(data.hoverObject == 'satellite4' && store.state.isEnableGridFunction){
    //         self.isShowSatellitePreview['satellite4'] = false
    //       }
    //     })

    //   }
    // })


    $(function(){
      $('#gridButtonSaudi').bind({
        'touchstart mousedown': function(e) {
          console.log('start')
        },
        // 'touchmove mousemove': function(e) {
        // },
        'touchend mouseup': function(e) {
          if(self.isShowLocationPreview['saudi']){
            self.selectLocation('saudi')
          }
        },
        'mouseenter': function(e) {
          console.log('mouseenter')
        }
      })
    })

    $(function(){
      $('#gridButtonHongKong').bind({
        'touchend mouseup': function(e) {
          if(self.isShowLocationPreview['hk']){
            self.selectLocation('hk')
          }
        },
        'mouseenter': function(e) {
          console.log('mouseenter')
        }
      })
    })

    $(function(){
      let kRotateSpeed = 0.27
      let clicking = false
      // let currentRotation;
      let clickPosX = 0
      let clickPosY = 0
      let rotation = { x: 0 , y: 0, z: 0 }
      let isTouch = ('ontouchstart' in window)
      $('#a-scene').bind({
        'touchstart mousedown': function(e) {
          clicking = true
          rotation = $('#earthParent').attr('rotation')
          clickPosX = (isTouch ? event.changedTouches[0].pageX : e.pageX)
          clickPosY = (isTouch ? event.changedTouches[0].pageY : e.pageY)
        },
        'touchmove mousemove': function(e) {
          if(clicking == false) return
          //e.preventDefault();
          let x = (isTouch ? event.changedTouches[0].pageX : e.pageX) - clickPosX
          let y = (isTouch ? event.changedTouches[0].pageY : e.pageY) - clickPosY
          let rad = rotation.y * Math.PI / 180

          rotation.y = rotation.y + (x * kRotateSpeed)
          rotation.x = rotation.x + (Math.cos(rad) * y * kRotateSpeed)
          rotation.z = rotation.z + (Math.sin(rad) * y * kRotateSpeed)

          //確保 小過 360 度
          //確保  -180 至 180
          rotation.x = self.limitPN180(rotation.x)
          rotation.y = self.limitPN180(rotation.y)
          rotation.z = self.limitPN180(rotation.z)

          $('#earthParent').attr(
            'rotation',
            rotation.x + ' ' + rotation.y  + ' ' + rotation.z
          )
          clickPosX = (isTouch ? event.changedTouches[0].pageX : e.pageX)
          clickPosY = (isTouch ? event.changedTouches[0].pageY : e.pageY)
        },
        'touchend mouseup mouseout': function(e) {
          clicking = false
        }
      })
    })


    // $(document).on('mousemove', function(e){
    //   if (typeof window.orientation == 'undefined') {
    //     if(e.pageX != 0 && e.pageY != 0){
    //       $('#previewSelectionSaudi').css({
    //          left:  e.pageX,
    //          top:   e.pageY
    //       });
    //       $('#previewSelectionHK').css({
    //          left:  e.pageX,
    //          top:   e.pageY
    //       });
    //       $('#previewSatellite1').css({
    //          left:  e.pageX,
    //          top:   e.pageY
    //       });
    //       $('#previewSatellite2').css({
    //          left:  e.pageX,
    //          top:   e.pageY
    //       });
    //       $('#previewSatellite3').css({
    //          left:  e.pageX,
    //          top:   e.pageY
    //       });
    //       $('#previewSatellite4').css({
    //          left:  e.pageX,
    //          top:   e.pageY
    //       });
    //     }
    //   }
    // });



    // this.startRingAnimation();
    //this.grid1RotateAnimation();
    this.earthRotateAnimation()
    this.earthButtonAnimation()
    
    // this.setCamera();
  },
  methods:{


    // setCamera(){
    //   let self = this;
    //   if(document.getElementById("camera2") == null) {
    //     console.log("waiting");
    //     window.setTimeout(self.setCamera, 100);
    //   } else {
    //     console.log("set camera");
    //     //document.getElementById("camera2").object3D.position.set(0,0,-4);
    //     document.getElementById("camera2").removeAttribute('position');
    //     document.getElementById("camera2").setAttribute('position','0 0 -4');
    //     //document.getElementById("camera2").setAttribute('position','0 0 -4');
    //     setInterval(function(){ 
    //       console.log(document.getElementById("camera2"));
          
    //       // document.getElementById("camera2").setAttribute('position','0 0 -4');
    //     }, 3000);
    //   }
    // },

    gridHideOneTimeAnimation(){
      let self = this
      if(document.getElementById('gridHide') == null) {
        setTimeout(function(){ self.gridHideOneTimeAnimation() }, 100)
      } else {
        // document.getElementById("gridHide").setAttribute("animation", "property: height; from: 0;to: 5; dur: 2000; easing: linear; loop: false");
      }
    },



    gridOneTimeAnimation(){
      let self = this
      if(document.getElementById('gridUpModel') == null || document.getElementById('gridDownModel') == null) {
        setTimeout(function(){ self.gridOneTimeAnimation() }, 100)
      } else {
        console.log('grid animation')
        document.getElementById('gridUp').setAttribute('animation', 'property: scale; from: 0 0 0;to: 5 2 5; dur: 2000; easing: linear; loop: false')
        document.getElementById('gridUpModel').setAttribute('animation', 'property: model-opacity; from: 0;to: 0.7.; dur: 2000; easing: linear; loop: false')
        document.getElementById('gridDown').setAttribute('animation', 'property: scale; from: 0 0 0;to: 5 2 5; dur: 2000; easing: linear; loop: false')
        document.getElementById('gridDownModel').setAttribute('animation', 'property: model-opacity; from: 0;to: 0.7; dur: 2000; easing: linear; loop: false')
      }
    },




    searchMenuSlideIn(){
      let self = this
      if(document.getElementById('searhMenuArea') == null) {
        setTimeout(function(){ self.searchMenuSlideIn() }, 100)
      } else {
        console.log('@@@@@@@')
        document.getElementById('searhMenuArea').classList.add('searhMenuSlideIn')
      }
    },




    earthButtonAnimation(){
      let self = this
      if(document.getElementById('gridButtonSaudi') == null || document.getElementById('gridButtonHongKong') == null) {
        setTimeout(function(){ self.earthButtonAnimation()}, 100)
      } else {
        document.getElementById('gridButtonSaudi').setAttribute('animation', 'property: model-opacity; from:0.5 ; to: 1; dir: alternate; dur: 1000; easing: linear; loop: true')
        document.getElementById('gridButtonHongKong').setAttribute('animation', 'property: model-opacity; from:0.5 ; to: 1; dir: alternate; dur: 1000; easing: linear; loop: true')
      }
    },

    earthRotateAnimation(){
      let self = this
      if(document.getElementById('earthModel') == null) {
        setTimeout(function(){ self.earthRotateAnimation()}, 100)
      } else {
        document.getElementById('earthModel').setAttribute('animation', 'property: rotation; to: 0 -360 0; dur: 35000; easing: linear; loop: true ; pauseEvents: pause; resumeEvents: resume;')
      }
    },


    pauseEarthRotateAnimation(){
      document.getElementById('earthModel').emit('rotation-pause')
    },


    theWorldPause(){
      document.getElementById('earthModel').emit('pause')
      document.getElementById('satellite1Rotate').emit('pause')
      document.getElementById('satellite2Rotate').emit('pause')
      document.getElementById('satellite3Rotate').emit('pause')
      document.getElementById('satellite4Rotate').emit('pause')
    },



    resumeEarthRotateAnimation(){
      document.getElementById('earthModel').emit('resume')
    },

    theWorldResume(){
      document.getElementById('earthModel').emit('resume')
      document.getElementById('satellite1Rotate').emit('resume')
      document.getElementById('satellite2Rotate').emit('resume')
      document.getElementById('satellite3Rotate').emit('resume')
      document.getElementById('satellite4Rotate').emit('resume')
    },

    earthMoveOneTimeAnimation(){
      let self = this
      if(document.getElementById('earthParent') == null) {
        setTimeout(function(){ self.earthMoveOneTimeAnimation() }, 100)
      } else {
        document.getElementById('earthParent').setAttribute('animation', 'property: position; from: 0 -0.5 1; to: 0 0 1; dur: 1000; easing: linear; loop: false')
      }
    },


    earthLightMoveOneTimeAnimation(){
      let self = this
      if(document.getElementById('earthLight') == null) {
        setTimeout(function(){ self.earthLightMoveOneTimeAnimation() }, 100)
      } else {
        document.getElementById('earthLight').setAttribute('animation', 'property: position; from: 0 -0.5 -1; to: 0 0 -1; dur: 1000; easing: linear; loop: false')
      }
    },


    


    openLocationSelection(){
      // console.log("!!!!!!");
      store.state.isShowLocationSelection = true
      // this.isShowLocationSelection = !this.isShowLocationSelection;
    },


    limitPN180(rotation){
      rotation = rotation % 360
      if(rotation > 180){
        rotation = (360 - rotation) * -1
      }
      if(rotation < -180){
        rotation = (-360 + rotation) * -1
      }
      rotation = rotation % 360

      return rotation
    },


    rotateToLocation(destination){
      let currentRotation = document.getElementById('model-parent').getAttribute('rotation')
      console.log('GO TO ' + destination)
      document.getElementById('model-parent').removeAttribute('animation')
      if(destination == 'hongkong'){
        document.getElementById('model-parent').setAttribute('animation', 'property: rotation; to: -15.915352707059796 -4.32 -0.09535382862672112; dur: 1000; easing: linear; loop: false')
      }
      else if(destination =='pacificOcean'){
        document.getElementById('model-parent').setAttribute('animation', 'property: rotation; to: -7.808419537927654 -80.19000000000011 9.495539192944605; dur: 1000; easing: linear; loop: false')
      }
      else if(destination == 'africa'){
        document.getElementById('model-parent').setAttribute('animation', 'property: rotation; to: -12.68570050071176 79.65000000000008 23.464355455717577; dur: 1000; easing: linear; loop: false')
      }
      this.isShowLocationSelection = false
    },


    selectLocation(destination){
      console.log('!!!! ' + destination)
      this.removeAllPreview()
      this.isShowLocationSelection = false
      //store.state.isShow3DScene = false;
      //store.state.cesiumFlyToLocation = destination;
      //儲存已選的 location
      store.state.selectingLocation = destination
      //打開 character select
      store.state.isShowCharacterSelect = true

    },



    distanceVector( v1x, v1y , v1z , v2x, v2y , v2z ){
      let dx = v1x - v2x
      let dy = v1y - v2y
      let dz = v1z - v2z
      return Math.sqrt( dx * dx + dy * dy + dz * dz )
    },


    removeAllPreview(){
      for(let loop = 0 ; loop < this.isShowLocationPreviewArray.length  ; loop++){
        this.isShowLocationPreview[this.isShowLocationPreviewArray[loop]] = false
      }
      for(let loop = 0 ; loop < this.isShowSatellitePreviewArray.length  ; loop++){
        this.isShowSatellitePreview[this.isShowSatellitePreviewArray[loop]] = false
      }
    },





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
/**/

  .searhMenuArea{
    position: absolute;
    bottom: 60px;
    left: 50%;
    width: 60vmin;
    height: 6vmin;
    transform: translate3d(-50%,0,0);
    border-radius: 12px;
    background-color: white;
  }

  .searhMenuSlideIn{
    animation: searhMenuPositionOpacity 1s;
    animation-timing-function: linear;
  }

  @keyframes searhMenuPositionOpacity {
    0%   {
      bottom: 0px;
      opacity: 0;
    }
    100% {
      bottom: 60px;
      opacity: 1;
    }
  }


  .searhMenuTextArea{
    position: absolute;
    top: 50%;
    left: 6vmin;
    width: calc(100% - 40px);
    margin-left: 20px;
    transform: translate3d(0,-50%,0);
    font-size: 2vmin;
    color: black;
  }

  .searhMenuSearchIconArea{
    position: absolute;
    top: 50%;
    left: 1vmin;
    transform: translate3d(0,-50%,0);
    width: 4vmin;
    height: 4vmin;
  }
  .searhMenuSearchIconImage{
    width: 100%;
  }

  .searhMenuLocationPinArea{
    position: absolute;
    top: 50%;
    right: 1vmin;
    transform: translate3d(0,-50%,0);
    width: 3.5vmin;
    height: 3.5vmin;
  }
  .searhMenuLocationPinImage{
    height: 100%;
  }


  .searchMenuBreakline{
    position: absolute;
    top: 50%;
    left: 6vmin;
    transform: translate3d(0,-50%,0);
    background-color: rgba(0,0,0,0.2);
    width: 0.2vmin;
    height: 4vmin;
  }




  .buttonListArea{
    position: absolute;
    top: 5vmin;
    right: 5vmin;
    width: 10vmin;
    height: 90vmin;
  }


  .buttonArea{
    position: relative;
    margin-bottom: 2vmin;
    width: 10vmin;
    height: 10vmin;
    border-radius: 8px;
    background-color: rgba(36,50,79,255);
  }

  .buttonImage{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%,-50%,0);
    width: 80%;
  }




  .rotateMenuArea{
    position: absolute;
    top: 50%;
    left: -25vmin;
    width: 50vmin;
    height: 50vmin;
    transform: translate3d(0,-50%,0);
    background-color: red;
    border-radius: 30vmin;
  }

  .rotateMenuRotateAnimation{
    animation: rotateMenuRotate 10s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  @keyframes rotateMenuRotate {
    0%   {
      transform: translate3d(0,-50%,0) rotate(0deg);
    }
    100% {
      transform: translate3d(0,-50%,0) rotate(360deg);
    }
  }
  .rotateMenuButtonParent{
    position: absolute;
    top: 50%;
    left: 50%;
  }
  .rotateMenuButtonParent1{
    transform: translate3d(-50%,-50%,0) rotate(0deg);
  }
  .rotateMenuButtonParent2{
    transform: translate3d(-50%,-50%,0) rotate(72deg);
  }
  .rotateMenuButtonParent3{
    transform: translate3d(-50%,-50%,0) rotate(144deg);
  }
  .rotateMenuButtonParent4{
    transform: translate3d(-50%,-50%,0) rotate(216deg);
  }
  .rotateMenuButtonParent5{
    transform: translate3d(-50%,-50%,0) rotate(288deg);
  }


  .rotateMenuButton{
    position: absolute;
    top: -25vmin;
    width: 5vmin;
    height: 5vmin;
    transform: translate3d(-50%,-50%,0);
    background-color: blue;
  }

  .previewSelection{
    position: absolute;
    top : 15vmin;
    right: 2vmin;
    width: 48vmin;
    height: 20vmin;
    border-radius: 8px;
    background-color: black;
/*    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;*/
  }

  .previewSelectionImageArea{
    position: absolute;
    top: 50%;
    left: 2.3125vmin;
    transform: translate3d(0,-50%,0);
    width: 14vmin;
    height: 14vmin;
    border-radius: 8px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .previewSelectionTextArea{
    position: absolute;
    top: 50%;
    transform: translate3d(0,-50%,0);
    left: calc(14vmin + 2.3125vmin + 1.5vmin);
    width: calc(45vmin - 14vmin - 2vmin);
    height: 14vmin;
/*    background-color: blue;*/
  }

  .previewSelectionEachDetailArea{
    position: relative;
    width: 100%;
    height: 25%;
  }

  .previewSelectionEachDetailText{
    position: absolute;
    top: 50%;
    transform: translate3d(0,-50%,0);
    color: white;
    font-size: 1.7vmin;
/*    background-color: purple;*/
  }
  .previewSelectionEachDetailText:lang(TC){
    font-size: 1.8vmin;
  }
  .previewSelectionEachDetailText:lang(SC){
    font-size: 1.8vmin;
  }
  .previewSelectionEachDetailTitleText{
    font-size: 2.5vmin;
  }





  .previewSatellite{
    position: absolute;
    top: 2vmin;
    right: 2vmin;
    width: 40vmin;
    height: 20vmin;
    border-radius: 8px;
    background-color: black;
  }

  .previewSatelliteTextArea{
    position: absolute;
    top: 50%;
    transform: translate3d(0,-50%,0);
    left: 2vmin;
    width: 36vmin;
    height: 17vmin;
/*    background-color: blue;*/
  }

  .previewSatelliteEachDetailArea{
    position: relative;
    width: 100%;
    height: 20%;
  }

  .previewSatelliteEachDetailText{
    position: absolute;
    top: 50%;
    transform: translate3d(0,-50%,0);
    color: white;
    font-size: 1.7vmin;
/*    background-color: purple;*/
  }
  .previewSatelliteEachDetailText:lang(TC){
    font-size: 1.8vmin;
  }
  .previewSatelliteEachDetailText:lang(SC){
    font-size: 1.8vmin;
  }
  .previewSatelliteEachDetailTitleText{
    font-size: 2.5vmin;
  }






/**/

  .mask1{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 0;
  }

  #earthParent{
    z-index: -1000;
  }





@media screen and (orientation:landscape) {

}

@media screen and (orientation:portrait) {
  .searhMenuArea{
    width: 30vmax;
    height: 5vmax;
    border-radius: 20px;
  }

  .searhMenuTextArea{
    left: 5vmax;
    font-size: 2vmax;
  }

  .searhMenuSearchIconArea{
    left: 1vmax;
    width: 3vmax;
    height: 3vmax;
  }

  .searchMenuBreakline{
    left: 5vmax;
    width: 0.2vmax;
    height: 4vmax;
  }

  .searhMenuLocationPinArea{
    right: 1vmax;
    width: 3vmax;
    height: 3vmax;
  }

  .locationSelection{
    width: 40vmax;
    height: 22.56vmax;
    border-radius: 8px;
  }

  .locationSelection1{
    transform: translate3d(-50%, calc(-50% - 25.45vmax),0);
  }

  .locationSelection2{
    transform: translate3d(-50%,-50%,0);
  }

  .locationSelection3{
    transform: translate3d(-50%, calc(-50% + 25.45vmax),0);
  }

  .locationSelectionText{
    font-size: 5vmax;
  }


}




</style>



// WEBPACK FOOTER //
// src/components/landing3D.vue