export function getBrowserLanguage(){
  var nav = window.navigator,
  browserLanguagePropertyKeys = ['language', 'browserLanguage', 'systemLanguage', 'userLanguage'],
  i,
  language;

  // support for HTML 5.1 "navigator.languages"
  if (Array.isArray(nav.languages)) {
    for (i = 0; i < nav.languages.length; i++) {
      language = nav.languages[i];
      if (language && language.length) {
        return language;
      }
    }
  }

  // support for other well known properties in browsers
  for (i = 0; i < browserLanguagePropertyKeys.length; i++) {
    language = nav[browserLanguagePropertyKeys[i]];
    if (language && language.length) {
      return language;
    }
  }

  return null;
}


export function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

export function browserNeeded(){
  let userAgent = navigator.userAgent.toLowerCase();
  if(userAgent.indexOf("iphone") > -1 || userAgent.indexOf("ipad") > -1){
    return "safari";
  }
  else{
    return "chrome";
  }
}

export function deviceOS(){
  let userAgent = navigator.userAgent.toLowerCase();
  if(userAgent.indexOf("iphone") > -1 || userAgent.indexOf("ipad") > -1){
    return "IOS";
  }
  else{
    return "AOS";
  }
}

export function stringLength(c){
  var n=c.length,s;
  var len=0;
  for(var i=0; i <n;i++){
   s=c.charCodeAt(i);
   while( s > 0 ){
      len++;
      s = s >> 8;
   }
  }
  return len;
}


// calculate whether in area
export function insideArea(point, vs) {
  var x = point[0], y = point[1];
  var inside = false;
  for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
      var xi = vs[i][0], yi = vs[i][1];
      var xj = vs[j][0], yj = vs[j][1];

      var intersect = ((yi > y) != (yj > y))
          && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
      if (intersect) inside = !inside;
  }
  return inside;
}




export function checkSupportBrowser(){
  let isSupportBrowser = false;
  console.log("Check Browser");
  let userAgent = navigator.userAgent.toLowerCase();
  console.log(userAgent);
  if(userAgent.indexOf("iphone") > -1 && userAgent.indexOf("safari") > -1 && userAgent.indexOf("crios") == -1 && userAgent.indexOf("fxios") == -1){
    isSupportBrowser = true;
  }
  else if(userAgent.indexOf("android") > -1 && userAgent.indexOf("chrome") > -1){
    isSupportBrowser = true;
  }
  if(userAgent.indexOf("firefox") > -1){
    isSupportBrowser = false;
  }
  if(userAgent.indexOf("ucbrowser") > -1){
    isSupportBrowser = false;
  }
  if(userAgent.indexOf("hawk") > -1){
    isSupportBrowser = false;
  }
  if(userAgent.indexOf("mqqbrowser") > -1){
    isSupportBrowser = false;
  }
  if(userAgent.indexOf("baiduboxapp") > -1){
    isSupportBrowser = false;
  }
  if(userAgent.indexOf("acheetahi") > -1){
    isSupportBrowser = false;
  }
  if(userAgent.indexOf("opr") > -1){
    isSupportBrowser = false;
  }
  if(userAgent.indexOf("samsungbrowser") > -1){
    isSupportBrowser = false;
  }
  if(userAgent.indexOf("micromessager") > -1){
    isSupportBrowser = false;
  }
  if(userAgent.indexOf("fban") > -1){
    isSupportBrowser = false;
  }
  if(userAgent.indexOf("sogoumobilebrowser") > -1){
    isSupportBrowser = false;
  }
  if(userAgent.indexOf("mb2345browser") > -1){
    isSupportBrowser = false;
  }
  if(userAgent.indexOf("wv") > -1){
    isSupportBrowser = false;
  }
  return isSupportBrowser;
}



//計兩個 point X Y 相差位置 ，Distance
//reference
//https://www.igismap.com/formula-to-find-bearing-or-heading-angle-between-two-points-latitude-longitude/
//https://www.geodatasource.com/developers/javascript
export function twoPointInfo(latStart, lonStart, latEnd, lonEnd) {
  var x = Math.cos(latEnd) * Math.sin(lonStart - lonEnd);
  var z = Math.cos(latStart) * Math.sin(latEnd) - Math.sin(latStart) * Math.cos(latEnd) * Math.cos(lonStart - lonEnd);
  var dist;
  if ((latStart == latEnd) && (lonStart == lonEnd)) {
    dist= 0;
  }
  else {
    var radlat1 = Math.PI * latStart/180;
    var radlat2 = Math.PI * latEnd/180;
    var theta = lonStart-lonEnd;
    var radtheta = Math.PI * theta/180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = dist * 180/Math.PI;
    dist = dist * 60 * 1.1515;
    dist = dist * 1.609344;
  }
  //唔知點解 100000 , 但好似啱 試出黎
  return {"x":x*100000,"z":z*100000,"distance":parseFloat((dist*1000).toFixed(2))};
}


export function calcXYDistance(x1, y1, x2, y2) {
  return Math.sqrt( (Math.pow((x1 - x2) ,2)) + (Math.pow((y1 - y2),2)) );
}


//sorting JSON
export function sortJSON(data, key, way) {
    return data.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        if (way === 'small' ) { return ((x < y) ? -1 : ((x > y) ? 1 : 0)); }
        if (way === 'large') { return ((x > y) ? -1 : ((x < y) ? 1 : 0)); }
    });
}

export function calAngle(cx, cy, ex, ey) {
  var dy = ey - cy;
  var dx = ex - cx;
  var theta = Math.atan2(dy, dx); // range (-PI, PI]
  theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
  //if (theta < 0) theta = 360 + theta; // range [0, 360)
  return theta;
}

export const MERCATOR = {
  fromLatLngToPoint: function(latLng){
    var siny = Math.min(
      Math.max(
        Math.sin(latLng.lat * (Math.PI / 180)),
        -.9999
      ),
      .9999
    );
    return {
      x: 128 + latLng.lon * (256/360),
      y: 128 + 0.5 * Math.log((1 + siny) / (1 - siny)) * - (256 / (2 * Math.PI))
    };
  },

  fromPointToLatLng: function(point){
    return {
      lat: (2 * Math.atan(Math.exp((point.y - 128) / -(256 / (2 * Math.PI)))) - Math.PI / 2)/ (Math.PI / 180),
      lng: (point.x - 128) / (256 / 360)
    };

  },
  getTileAtLatLng: function(latLng, zoom){
    var
      t = Math.pow(2, zoom),
      s = 256/t,
      p = this.fromLatLngToPoint(latLng)
    ;
    return {
      x: Math.floor(p.x/s),
      y: Math.floor(p.y/s),
      z: zoom
    };
  },
  getTileBounds: function(tile){
    tile = this.normalizeTile(tile);
    var
      t = Math.pow(2, tile.z),
      s = 256/t,
      sw = {
        x: tile.x*s,
        y: (tile.y*s) + s
      },
      ne = {
        x: tile.x*s + s,
        y: (tile.y*s)
      }
    ;
    return {
      sw: this.fromPointToLatLng(sw),
      ne: this.fromPointToLatLng(ne)
    };
  },
  normalizeTile: function(tile){
    var t = Math.pow(2, tile.z);
    tile.x = ((tile.x%t)+t)%t;
    tile.y = ((tile.y%t)+t)%t;
    return tile;
  }
}



// WEBPACK FOOTER //
// ./src/commonFunction/commonFunction.js