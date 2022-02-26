<template>
  <div>
    <div
      class="background"
      :style="{ backgroundImage: `url('${backgroundImage}')` }"
    />

    <div id="cesiumContainer" class="touchAll" />
  </div>
</template>

<script>
import i18n from "@/language";
import { store } from "../store";
import cesiumJson from "../../static/dataJson/cesium.json";

export default {
  name: "cesium-component",
  data() {
    return {
      language: i18n.locale,
      cesiumJsonData: cesiumJson,
      viewer: null,
      addedCesiumScript: false,
      addedCesiumVectorTileScript: false,
      addedCesiumCss: false,
      baseMapLayerProvider: null,
      baseMapLayer: null,
      dataLayerProvider: null,
      dataLayer: null,
      buildingTileset: null,
      dropupArrow: require("../assets/images/3Dview/downArrow.png"),
      backgroundImage: require("../assets/images/3Dview/background.jpg"),
      cesiumBackButton: require("../assets/images/cesium/cesiumBackButton.png"),
      isShowLocationSelection: false,
      earthRotateInterval: null,
      earthRotateAngle: 0,
      selectingLocation: "",
      VectorTileImageryProvider: null,
      imageryLayerRoad: null,
      imageryLayerBuilding: null,
      selectingTab: "locationData",
      tabArray: ["locationData", "personalData"],
      tabNameId: {
        locationData: "locationDataTabName",
        personalData: "personalDataTabName",
      },
      categoryImage: {
        category1: require("../assets/images/cesium/menu/category1.png"),
        category2: require("../assets/images/cesium/menu/category2.png"),
        category3: require("../assets/images/cesium/menu/category3.png"),
      },
      locationSelectionImage: {
        saudi: require("../assets/images/global/locationSelection/saudi.jpg"),
        hk: require("../assets/images/global/locationSelection/hk.jpg"),
        suzhou: require("../assets/images/global/locationSelection/suzhou.jpg"),
      },
      citySubCategorySelectionIcon: {
        road: require("../assets/images/cesium/menu/city/roadIcon.png"),
        building: require("../assets/images/cesium/menu/city/buildingIcon.png"),
      },
      isEnableSubCategoryData: {
        cityRoad: false,
        cityBuilding: false,
      },
      subCategoryDataElementId: {
        cityRoad: "cityDataSubCategoryRoad",
        cityBuilding: "cityDataSubCategoryBuilding",
      },
      subCategoryDataArray: ["cityRoad", "cityBuilding"],
      isShowDataResult: {
        saudiRoad: false,
        saudiBuilding: false,
        hkRoad: false,
        hkBuilding: false,
        suzhouRoad: false,
        suzhouBuilding: false,
      },
      isShowDataResultArray: [
        "saudiRoad",
        "saudiBuilding",
        "hkRoad",
        "hkBuilding",
        "suzhouRoad",
        "suzhouBuilding",
      ],
      isDrawingData: false,
      dataProvider: {
        saudiRoad: null,
        saudiBuilding: null,
      },
      // fakePersonalProjectImage : {
      //   "saudi" : {
      //     "TC" : require('../assets/images/cesium/menu/personal/saudi/fakePersonalProjectTC.png'),
      //     "EN" : require('../assets/images/cesium/menu/personal/saudi/fakePersonalProjectEN.png'),
      //     "SC" : require('../assets/images/cesium/menu/personal/saudi/fakePersonalProjectSC.png')
      //   },
      //   "hk" : {
      //     "TC" : require('../assets/images/cesium/menu/personal/hk/fakePersonalProjectTC.png'),
      //     "EN" : require('../assets/images/cesium/menu/personal/hk/fakePersonalProjectEN.png'),
      //     "SC" : require('../assets/images/cesium/menu/personal/hk/fakePersonalProjectSC.png')
      //   },
      //   "suzhou" : {
      //     "TC" : require('../assets/images/cesium/menu/personal/suzhou/fakePersonalProjectTC.png'),
      //     "EN" : require('../assets/images/cesium/menu/personal/suzhou/fakePersonalProjectEN.png'),
      //     "SC" : require('../assets/images/cesium/menu/personal/suzhou/fakePersonalProjectSC.png')
      //   },
      // },
      // fakeBuildinginfo : {
      //   "saudi" : {
      //     "TC" : require('../assets/images/cesium/menu/city/saudi/fakebuildinginfoTC.png'),
      //     "EN" : require('../assets/images/cesium/menu/city/saudi/fakebuildinginfoEN.png'),
      //     "SC" : require('../assets/images/cesium/menu/city/saudi/fakebuildinginfoSC.png'),
      //   },
      //   "suzhou" : {
      //     "TC" : require('../assets/images/cesium/menu/city/suzhou/fakebuildinginfoTC.png'),
      //     "EN" : require('../assets/images/cesium/menu/city/suzhou/fakebuildinginfoEN.png'),
      //     "SC" : require('../assets/images/cesium/menu/city/suzhou/fakebuildinginfoSC.png'),
      //   },
      //   "hk" : {
      //     "TC" : require('../assets/images/cesium/menu/city/hk/fakebuildinginfoTC.png'),
      //     "EN" : require('../assets/images/cesium/menu/city/hk/fakebuildinginfoEN.png'),
      //     "SC" : require('../assets/images/cesium/menu/city/hk/fakebuildinginfoSC.png'),
      //   },
      // },
      // fakeRoadinfo : {
      //   "saudi" : {
      //     "TC" : require('../assets/images/cesium/menu/city/saudi/fakeroadinfoTC.png'),
      //     "EN" : require('../assets/images/cesium/menu/city/saudi/fakeroadinfoEN.png'),
      //     "SC" : require('../assets/images/cesium/menu/city/saudi/fakeroadinfoSC.png'),
      //   },
      //   "suzhou" : {
      //     "TC" : require('../assets/images/cesium/menu/city/suzhou/fakeroadinfoTC.png'),
      //     "EN" : require('../assets/images/cesium/menu/city/suzhou/fakeroadinfoEN.png'),
      //     "SC" : require('../assets/images/cesium/menu/city/suzhou/fakeroadinfoSC.png'),
      //   },
      //   "hk" : {
      //     "TC" : require('../assets/images/cesium/menu/city/hk/fakeroadinfoTC.png'),
      //     "EN" : require('../assets/images/cesium/menu/city/hk/fakeroadinfoEN.png'),
      //     "SC" : require('../assets/images/cesium/menu/city/hk/fakeroadinfoSC.png'),
      //   },
      // },
      fakeTimeLineSelect: require("../assets/images/cesium/menu/city/fakeTimeLineSelect.png"),
    };
  },

  computed: {
    checkCurrentLanguage() {
      return i18n.locale;
    },
    checkLeftMenuSelectingArea() {
      return store.state.leftMenuSelectingArea;
    },
    checkCesiumBaseMapData() {
      return store.state.cesiumBaseMapData;
    },
    checkCesiumDataLayerData() {
      return store.state.cesiumDataLayerData;
    },

    // checkSelectingLocation(){return store.state.selectingLocation},
    // checkCesiumFlyToLocation(){return store.state.cesiumFlyToLocation},
  },
  watch: {
    checkCurrentLanguage(lang) {
      this.language = lang;
    },
    checkLeftMenuSelectingArea(area) {
      if (area != "") {
        console.log("!!!! " + area);
        let areaData = store.state.areaDictionary[area];

        this.viewer.camera.flyTo({
          destination: this.$Cesium.Cartesian3.fromDegrees(
            areaData.longitude,
            areaData.latitude,
            areaData.height
          ),
          duration: 2,
        });
      } else {
        // reset location
        this.viewer.camera.flyTo({
          destination: this.$Cesium.Cartesian3.fromDegrees(
            114.1734595,
            22.301333,
            10000000
          ),
          duration: 1,
        });
      }
    },

    checkCesiumBaseMapData(data) {
      if (data != null) {
        if (data != "") {
          console.log("add base map " + data);

          this.baseMapLayerProvider = new this.$Cesium.IonImageryProvider({
            assetId: data,
          });

          this.baseMapLayer = this.viewer.imageryLayers.addImageryProvider(
            this.baseMapLayerProvider
          );

          this.baseMapLayerProvider.readyPromise.then(function () {
            store.state.isShowCesiumDataLoading = false;
          });
        } else {
          console.log("remove base map");
          this.viewer.imageryLayers.remove(this.baseMapLayer);
        }
      }
    },

    checkCesiumDataLayerData(data) {
      if (data != null) {
        if (data != "") {
          this.viewer.imageryLayers.remove(this.dataLayer);
          store.state.isShowCesiumDataLoading = true;
          console.log("show data " + data);

          this.dataLayerProvider = new this.$Cesium.IonImageryProvider({
            assetId: data,
          });

          this.dataLayer = this.viewer.imageryLayers.addImageryProvider(
            this.dataLayerProvider
          );
          this.dataLayerProvider.readyPromise.then(function () {
            store.state.isShowCesiumDataLoading = false;
          });
        } else {
          console.log("remove data");
          this.viewer.imageryLayers.remove(this.dataLayer);
        }
      }
    },

    // checkSelectingLocation(flag){this.selectingLocation = flag},
    // checkCesiumFlyToLocation(flag){

    //   console.log("!!!!!!!!@@@@@ " + flag);

    //   let self = this;
    //   if(flag == "hk"){

    //     self.viewer.camera.flyTo({
    //       destination : this.$Cesium.Cartesian3.fromDegrees(114.1771163,22.3101859, 30000000),
    //       duration : 0.1,
    //     });

    //     setTimeout(function(){
    //       self.viewer.camera.flyTo({
    //       destination : this.$Cesium.Cartesian3.fromDegrees(114.1771163,22.3101859, 1500000),
    //       duration : 0.1,
    //     });
    //     },500)

    //     setTimeout(function(){
    //       self.viewer.camera.flyTo({
    //       destination : this.$Cesium.Cartesian3.fromDegrees(114.1771163,22.3101859, 150000),
    //       duration : 0.1,
    //     });
    //     },1000)

    //     setTimeout(function(){
    //       self.viewer.camera.flyTo({
    //       destination : this.$Cesium.Cartesian3.fromDegrees(114.1771163,22.3101859, 5000),
    //       duration : 0.1,
    //     });
    //     },1500)

    //   }
    //   else if(flag == "saudi"){

    //     self.viewer.camera.flyTo({
    //       destination : this.$Cesium.Cartesian3.fromDegrees(46.5423449,24.5649316, 500000),
    //       duration : 0.1,
    //     });

    //     setTimeout(function(){
    //       self.viewer.camera.flyTo({
    //       destination : this.$Cesium.Cartesian3.fromDegrees(46.5423449,24.5649316, 300000),
    //       duration : 0.1,
    //       });
    //     },500)

    //     setTimeout(function(){
    //       self.viewer.camera.flyTo({
    //       destination : this.$Cesium.Cartesian3.fromDegrees(46.5423449,24.5649316, 150000),
    //       duration : 0.1,
    //       });
    //     },1000)

    //     setTimeout(function(){
    //       self.viewer.camera.flyTo({
    //       destination : this.$Cesium.Cartesian3.fromDegrees(46.5423449,24.5649316, 6000),
    //       duration : 0.1,
    //       });
    //     },1500)

    //   }
    //   else if(flag == "suzhou"){
    //     self.viewer.camera.flyTo({
    //       destination : this.$Cesium.Cartesian3.fromDegrees(120.7377479,31.2837196, 500000),
    //       duration : 0.1,
    //     });

    //     setTimeout(function(){
    //       self.viewer.camera.flyTo({
    //       destination : this.$Cesium.Cartesian3.fromDegrees(120.7377479,31.2837196, 300000),
    //       duration : 0.1,
    //       });
    //     },500)

    //     setTimeout(function(){
    //       self.viewer.camera.flyTo({
    //       destination : this.$Cesium.Cartesian3.fromDegrees(120.7377479,31.2837196, 150000),
    //       duration : 0.1,
    //       });
    //     },1000)

    //     setTimeout(function(){
    //       self.viewer.camera.flyTo({
    //       destination : this.$Cesium.Cartesian3.fromDegrees(120.7377479,31.2837196, 5000),
    //       duration : 0.1,
    //       });
    //     },1500)

    //   }
    //   store.state.cesiumFlyToLocation = "";
    // },
  },
  created() {
    let self = this;
    this.addCesiumScript();
    this.addCesiumCss();
    setTimeout(function () {
      self.addCesiumVectorTileScript();
    }, 1000);
  },
  methods: {
    changeTab(tab) {
      if (this.selectingTab != tab) {
        this.selectingTab = tab;
        this.resetSubCategoryData();
      }
      console.log("!!!!");
      for (let tabLoop = 0; tabLoop < this.tabArray.length; tabLoop++) {
        document
          .getElementById(this.tabNameId[this.tabArray[tabLoop]])
          .classList.remove("selecting");
      }
      if (this.selectingTab == "locationData") {
        document
          .getElementById("locationDataTabName")
          .classList.add("selecting");
        //document.getElementById('personalDataTabName').classList.remove('selecting');
      } else if (this.selectingTab == "personalData") {
        //document.getElementById('locationDataTabName').classList.remove('selecting');
        document
          .getElementById("personalDataTabName")
          .classList.add("selecting");
      }
    },
    addCesiumScript() {
      let self = this;
      var script = document.createElement("script");
      script.onload = function () {
        console.log("added script");
        self.addedCesiumScript = true;
        self.checkCesium();
      };
      script.src =
        "https://cesium.com/downloads/cesiumjs/releases/1.87.1/Build/Cesium/Cesium.js";
      document.head.appendChild(script);
    },

    addCesiumVectorTileScript() {
      let self = this;
      var script = document.createElement("script");
      script.onload = function () {
        console.log("added script");
        self.addedCesiumVectorTileScript = true;
        self.checkCesium();
      };
      script.src = "static/js/CesiumVectorTile.min.js";
      document.head.appendChild(script);
    },

    addCesiumCss() {
      let self = this;
      var linkCss = document.createElement("link");
      linkCss.onload = function () {
        console.log("added css");
        self.addedCesiumCss = true;
        self.checkCesium();
      };
      linkCss.href =
        "https://cesium.com/downloads/cesiumjs/releases/1.87.1/Build/Cesium/Widgets/widgets.css";
      linkCss.rel = "stylesheet";
      linkCss.type = "text/css";
      document.head.appendChild(linkCss);
    },
    checkCesium() {
      let self = this;

      if (
        this.addedCesiumCss &&
        this.addedCesiumVectorTileScript &&
        this.addedCesiumScript
      ) {
        let tiandituTk = "e1de13f34045c005fa2a8ac464cff3e5";
        let subdomains = ["0", "1", "2", "3", "4", "5", "6", "7"];
        this.$Cesium.Ion.defaultAccessToken =
          this.cesiumJsonData["accessToken"];
        self.viewer = new this.$Cesium.Viewer("cesiumContainer", {
          imageryProvider: new this.$Cesium.WebMapTileServiceImageryProvider({
            url:
              "http://t{s}.tianditu.com/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=" +
              tiandituTk,
            subdomains,
            layer: "tdtImgLayer",
            style: "default",
            format: "image/jpeg",
            tileMatrixSetID: "GoogleMapsCompatible", //使用谷歌的瓦片切片方式
          }),
          terrainProvider: new this.$Cesium.CesiumTerrainProvider({
            url: "https://www.supermapol.com/realspace/services/3D-stk_terrain/rest/realspace/datas/info/data/path",
            requestWaterMask: true, //开启法向量
            requestVertexNormals: true, //开启水面特效
          }),
          shouldAnimate: true,
          orderIndependentTranslucency: false,
          contextOptions: {
            webgl: {
              alpha: true,
            },
          },
        });
        self.VectorTileImageryProvider = this.$Cesium.VectorTileImageryProvider;

        // //沙地 圖
        // let imageryLayer = self.viewer.imageryLayers.addImageryProvider(
        //   new this.$Cesium.IonImageryProvider({ assetId: 695355 })
        // );
        // //蘇州 底圖
        // let imageryLayerSuzhou = self.viewer.imageryLayers.addImageryProvider(
        //   new this.$Cesium.IonImageryProvider({ assetId: 712032 })
        // );

        //Remove deafult skybox , sun etc.
        self.viewer.scene.skyBox.destroy();
        self.viewer.scene.skyBox = undefined;
        self.viewer.scene.sun.destroy();
        self.viewer.scene.sun = undefined;
        self.viewer.scene.moon.destroy();
        self.viewer.scene.moon = undefined;
        self.viewer.scene.skyAtmosphere.destroy();
        self.viewer.scene.skyAtmosphere = undefined;
        self.viewer.scene.backgroundColor = new this.$Cesium.Color(
          0.0,
          0.0,
          0.0,
          0.0
        );

        //設定一開始位置 距離
        this.viewer.camera.flyTo({
          destination: this.$Cesium.Cartesian3.fromDegrees(
            114.1734595,
            22.301333,
            10000000
          ),
          duration: 0.1,
        });

        //設定網格
        // var primitives = {
        //   equator: this.parallel(0, this.$Cesium.Color.BLUE),
        //   primeMeridian: this.meridian(0, this.$Cesium.Color.BLUE),
        //   selectedPoint: {
        //     meridian: undefined,
        //     parallel: undefined,
        //     label: undefined,
        //   },
        //   antipodalPoint: {
        //     meridian: undefined,
        //     parallel: undefined,
        //     label: undefined,
        //   },
        //   // lowResolutionGrid: this.makeGrid(2, this.$Cesium.Color.PALEGREEN, false),
        //   higherResolutionGrid: this.makeGrid(3, this.$Cesium.Color.ALICEBLUE, false),
        // };

        // primitives.higherResolutionGrid.forEach(function (line) {
        //   line.show = true;
        // });

        // self.createModel("./static/models/g13.glb" , 0 , 90 , 0 , 10000000);
        // self.createModel("./static/models/g13.glb" , 0 , -90 , 0 , 10000000);

        //自動 rotate
        // self.earthRotateInterval = setInterval(function(){
        //   self.rotateEarth(0.01);
        // }, 50);
      }
    },

    parallel(latitude, color, granularity) {
      var name = "Parallel " + latitude;
      return this.viewer.entities.add({
        name: name,
        polyline: {
          positions: this.$Cesium.Cartesian3.fromDegreesArray([
            -180,
            latitude,
            -90,
            latitude,
            0,
            latitude,
            90,
            latitude,
            180,
            latitude,
          ]),
          width: 2,
          arcType: this.$Cesium.ArcType.RHUMB,
          material: color,
          granularity: granularity,
        },
      });
    },

    meridian(longitude, color, granularity) {
      var name = "Meridian " + longitude;
      return this.viewer.entities.add({
        name: name,
        polyline: {
          positions: this.$Cesium.Cartesian3.fromDegreesArray([
            longitude,
            90,
            longitude,
            0,
            longitude,
            -90,
          ]),
          width: 2,
          arcType: this.$Cesium.ArcType.RHUMB,
          material: color,
          granularity: granularity,
        },
      });
    },

    makeGrid(numberOfDivisions, color, show) {
      var parallels = this.makeParallelsRecursive(
        -90,
        90,
        numberOfDivisions,
        color
      );
      var meridians = this.makeMeridiansRecursive(
        -180,
        180,
        numberOfDivisions,
        color
      );
      meridians.push(this.meridian(180, color));

      var allLines = parallels.concat(meridians);
      allLines.forEach(function (line) {
        line.show = show;
      });

      return allLines;
    },

    makeParallelsRecursive(minLatitude, maxLatitude, depth, color) {
      var result = [];
      var midpoint = (minLatitude + maxLatitude) / 2;
      result.push(this.parallel(midpoint, color));

      if (depth > 0) {
        var southernLines = this.makeParallelsRecursive(
          minLatitude,
          midpoint,
          depth - 1,
          color
        );
        var northernLines = this.makeParallelsRecursive(
          midpoint,
          maxLatitude,
          depth - 1,
          color
        );
        result = southernLines.concat(result, northernLines);
      }

      return result;
    },

    makeMeridiansRecursive(minLongitude, maxLongitude, depth, color) {
      var result = [];
      var midpoint = (minLongitude + maxLongitude) / 2;
      result.push(this.meridian(midpoint, color));

      if (depth > 0) {
        var westernLines = this.makeMeridiansRecursive(
          minLongitude,
          midpoint,
          depth - 1,
          color
        );
        var easternLines = this.makeMeridiansRecursive(
          midpoint,
          maxLongitude,
          depth - 1,
          color
        );
        result = westernLines.concat(result, easternLines);
      }

      return result;
    },

    createModelBackup(url) {
      let self = this;
      // self.viewer.entities.removeAll();

      var position = this.$Cesium.Cartesian3.fromDegrees(0, 90, 0);
      var heading = this.$Cesium.Math.toRadians(135);
      var pitch = 0;
      var roll = 0;
      var hpr = new this.$Cesium.HeadingPitchRoll(heading, pitch, roll);
      var orientation = this.$Cesium.Transforms.headingPitchRollQuaternion(
        position,
        hpr
      );

      var entity = self.viewer.entities.add({
        name: url,
        position: position,
        orientation: orientation,
        model: {
          uri: url,
          scale: 800000,
        },
      });
    },

    createModel(url, rotateX, rotateY, rotateZ, scale) {
      let self = this;
      // self.viewer.entities.removeAll();

      var position = this.$Cesium.Cartesian3.fromDegrees(
        rotateX,
        rotateY,
        rotateZ
      );
      var heading = this.$Cesium.Math.toRadians(135);
      var pitch = 0;
      var roll = 0;
      var hpr = new this.$Cesium.HeadingPitchRoll(heading, pitch, roll);
      var orientation = this.$Cesium.Transforms.headingPitchRollQuaternion(
        position,
        hpr
      );

      var entity = self.viewer.entities.add({
        name: url,
        position: position,
        orientation: orientation,
        model: {
          uri: url,
          scale: scale,
        },
      });
    },

    createModel2(url) {
      let self = this;
      // self.viewer.entities.removeAll();

      var position = this.$Cesium.Cartesian3.fromDegrees(0, -90, 0);
      var heading = this.$Cesium.Math.toRadians(135);
      var pitch = 0;
      var roll = 0;
      var hpr = new this.$Cesium.HeadingPitchRoll(heading, pitch, roll);
      var orientation = this.$Cesium.Transforms.headingPitchRollQuaternion(
        position,
        hpr
      );

      var entity = self.viewer.entities.add({
        name: url,
        position: position,
        orientation: orientation,
        model: {
          uri: url,
          scale: 800000,
        },
      });
      // self.viewer.trackedEntity = entity;
    },

    rotateEarth(angle) {
      let self = this;

      self.viewer.scene.camera.rotate(this.$Cesium.Cartesian3.UNIT_Z, angle);
    },

    openOrCloseLocationSelection() {
      this.isShowLocationSelection = !this.isShowLocationSelection;
    },

    backToSearch() {
      console.log("backtosearch");
      this.resetSubCategoryData();
      this.viewer.camera.flyTo({
        destination: this.$Cesium.Cartesian3.fromDegrees(
          114.1734595,
          22.301333,
          50000000
        ),
        duration: 2,
      });
      store.state.isShow3DScene = true;
      store.state.leftMenuSlideInOutEvent = "in";
    },

    resetSubCategoryData() {
      for (let loop = 0; loop < this.subCategoryDataArray.length; loop++) {
        this.isEnableSubCategoryData[this.subCategoryDataArray[loop]] = false;
        document
          .getElementById(
            this.subCategoryDataElementId[this.subCategoryDataArray[loop]]
          )
          .classList.remove("selectingSubCategory");
      }

      this.viewer.imageryLayers.remove(this.imageryLayerRoad);
      this.viewer.imageryLayers.remove(this.imageryLayerBuilding);

      for (let loop = 0; loop < this.isShowDataResultArray.length; loop++) {
        this.isShowDataResult[this.isShowDataResultArray[loop]] = false;
      }
    },

    subCategoryDataHandle(subCategoryData) {
      let self = this;
      if (!this.isDrawingData) {
        //先儲低   要定 定 熄
        let isEnable = !this.isEnableSubCategoryData[subCategoryData];

        //  如果只可以選一種 data   先將所有 data off
        for (let loop = 0; loop < this.subCategoryDataArray.length; loop++) {
          this.isEnableSubCategoryData[this.subCategoryDataArray[loop]] = false;
          document
            .getElementById(
              this.subCategoryDataElementId[this.subCategoryDataArray[loop]]
            )
            .classList.remove("selectingSubCategory");
        }

        self.viewer.imageryLayers.remove(self.imageryLayerRoad);
        self.viewer.imageryLayers.remove(self.imageryLayerBuilding);

        for (let loop = 0; loop < this.isShowDataResultArray.length; loop++) {
          this.isShowDataResult[this.isShowDataResultArray[loop]] = false;
        }

        //如果係要開
        if (isEnable) {
          this.isEnableSubCategoryData[subCategoryData] = true;
          document
            .getElementById(this.subCategoryDataElementId[subCategoryData])
            .classList.add("selectingSubCategory");
        } else {
          this.isEnableSubCategoryData[subCategoryData] = false;
          document
            .getElementById(this.subCategoryDataElementId[subCategoryData])
            .classList.remove("selectingSubCategory");
        }

        // 顯示沙地道路data
        if (
          store.state.selectingLocation == "saudi" &&
          subCategoryData == "cityRoad" &&
          this.isEnableSubCategoryData["cityRoad"]
        ) {
          this.isDrawingData = true;
          store.state.isShowCesiumDataLoading = true;
          if (this.dataProvider["saudiRoad"] == null) {
            this.dataProvider["saudiRoad"] =
              new this.$Cesium.IonImageryProvider({ assetId: 705964 });
          }
          self.imageryLayerRoad = self.viewer.imageryLayers.addImageryProvider(
            this.dataProvider["saudiRoad"]
          );
          this.dataProvider["saudiRoad"].readyPromise.then(function () {
            store.state.isShowCesiumDataLoading = false;
            self.isDrawingData = false;
            self.isShowDataResult["saudiRoad"] = true;
          });
        }

        // 顯示沙地 building data
        if (
          store.state.selectingLocation == "saudi" &&
          subCategoryData == "cityBuilding" &&
          this.isEnableSubCategoryData["cityBuilding"]
        ) {
          this.isDrawingData = true;
          store.state.isShowCesiumDataLoading = true;
          if (this.dataProvider["saudiBuilding"] == null) {
            this.dataProvider["saudiBuilding"] =
              new this.$Cesium.IonImageryProvider({ assetId: 705962 });
          }
          self.imageryLayerBuilding =
            self.viewer.imageryLayers.addImageryProvider(
              this.dataProvider["saudiBuilding"]
            );
          this.dataProvider["saudiBuilding"].readyPromise.then(function () {
            store.state.isShowCesiumDataLoading = false;
            self.isDrawingData = false;
            self.isShowDataResult["saudiBuilding"] = true;
          });
        }

        // 顯示香港道路data
        if (
          store.state.selectingLocation == "hk" &&
          subCategoryData == "cityRoad" &&
          this.isEnableSubCategoryData["cityRoad"]
        ) {
          this.isDrawingData = true;
          store.state.isShowCesiumDataLoading = true;
          if (this.dataProvider["hkRoad"] == null) {
            this.dataProvider["hkRoad"] = new this.$Cesium.IonImageryProvider({
              assetId: 711458,
            });
          }
          self.imageryLayerRoad = self.viewer.imageryLayers.addImageryProvider(
            this.dataProvider["hkRoad"]
          );
          this.dataProvider["hkRoad"].readyPromise.then(function () {
            store.state.isShowCesiumDataLoading = false;
            self.isDrawingData = false;
            self.isShowDataResult["hkRoad"] = true;
          });
        }

        // 顯示香港 building data
        if (
          store.state.selectingLocation == "hk" &&
          subCategoryData == "cityBuilding" &&
          this.isEnableSubCategoryData["cityBuilding"]
        ) {
          this.isDrawingData = true;
          store.state.isShowCesiumDataLoading = true;
          if (this.dataProvider["hkBuilding"] == null) {
            this.dataProvider["hkBuilding"] =
              new this.$Cesium.IonImageryProvider({ assetId: 711457 });
          }
          self.imageryLayerRoad = self.viewer.imageryLayers.addImageryProvider(
            this.dataProvider["hkBuilding"]
          );
          this.dataProvider["hkBuilding"].readyPromise.then(function () {
            store.state.isShowCesiumDataLoading = false;
            self.isDrawingData = false;
            self.isShowDataResult["hkBuilding"] = true;
          });
        }

        // 顯示 suzhou 道路data
        if (
          store.state.selectingLocation == "suzhou" &&
          subCategoryData == "cityRoad" &&
          this.isEnableSubCategoryData["cityRoad"]
        ) {
          this.isDrawingData = true;
          store.state.isShowCesiumDataLoading = true;
          if (this.dataProvider["suzhouRoad"] == null) {
            this.dataProvider["suzhouRoad"] =
              new this.$Cesium.IonImageryProvider({ assetId: 712030 });
          }
          self.imageryLayerRoad = self.viewer.imageryLayers.addImageryProvider(
            this.dataProvider["suzhouRoad"]
          );
          this.dataProvider["suzhouRoad"].readyPromise.then(function () {
            store.state.isShowCesiumDataLoading = false;
            self.isDrawingData = false;
            self.isShowDataResult["suzhouRoad"] = true;
          });
        }

        // 顯示 suzhou building data
        if (
          store.state.selectingLocation == "suzhou" &&
          subCategoryData == "cityBuilding" &&
          this.isEnableSubCategoryData["cityBuilding"]
        ) {
          this.isDrawingData = true;
          store.state.isShowCesiumDataLoading = true;
          if (this.dataProvider["suzhouBuilding"] == null) {
            this.dataProvider["suzhouBuilding"] =
              new this.$Cesium.IonImageryProvider({ assetId: 712029 });
          }
          self.imageryLayerRoad = self.viewer.imageryLayers.addImageryProvider(
            this.dataProvider["suzhouBuilding"]
          );
          this.dataProvider["suzhouBuilding"].readyPromise.then(function () {
            store.state.isShowCesiumDataLoading = false;
            self.isDrawingData = false;
            self.isShowDataResult["suzhouBuilding"] = true;
          });
        }
      }
    },
  },
};
</script>

<style scoped>
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  background-size: cover;
  background-repeat: no-repeat;
}

#cesiumContainer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

// WEBPACK FOOTER // // src/components/cesium.vue
