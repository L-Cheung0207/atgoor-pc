import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({


  state: {
    environmentSetting : 'DEV',


    //控制頁面顯示
    isShowLanding : true,
    isShow3DScene : true,
    isShowCharacterSelect : false,
    isShowLocationSelection : false,
    isShowCesiumDataLoading : false,



    // Menu slide in out
    leftMenuSlideInOutEvent : "",
    rightMenuSlideInOutEvent : "",

    

    //設定要 cesium zoom 去的 location
    cesiumFlyToLocation : "",


    //選擇緊的地點 同 角色
    selectingLocation : "",
    selectingCharacter : "",



    removeAllPreviewEvent : false,


    // display3DSceneEvent : false,


    //控制 3D  地球 , 衛星 有冇得督
    isEnableGridFunction : true,


    //Dictionary
    countryDictionary : {},
    areaDictionary : {},



    //新 left menu
    leftMenuSelectingTab : "land",
    leftMenuSelectingCountry : "",
    leftMenuSelectingArea : "",
    leftMenuSelectingLand : "",

    //cesium
    cesiumBaseMapData : "",
    cesiumDataLayerData : "",







  },
})




// WEBPACK FOOTER //
// ./src/store.js