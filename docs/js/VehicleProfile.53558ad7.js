(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["VehicleProfile"],{"2fd6":function(t,e,a){t.exports=a.p+"img/IL95_1-MB_V--Klasse_Front-removebg-preview.1daf8497.png"},"7db0":function(t,e,a){"use strict";var i=a("23e7"),s=a("b727").find,l=a("44d2"),r="find",c=!0;r in[]&&Array(1)[r]((function(){c=!1})),i({target:"Array",proto:!0,forced:c},{find:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),l(r)},a5cc:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn bg-gray-light int-trip crlc-icon mr-2 ",attrs:{title:"Delete"}},[a("remove-icon")],1)},s=[],l=a("1650"),r={name:"remove-btn",components:{RemoveIcon:l["a"]}},c=r,n=a("2877"),o=Object(n["a"])(c,i,s,!1,null,null,null);e["a"]=o.exports},de01:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"p_layout pt-4"},[a("nav",{attrs:{"aria-label":"breadcrumb "}},[a("ol",{staticClass:"breadcrumb bg-transparent"},[a("li",{staticClass:"breadcrumb-item"},[a("router-link",{attrs:{to:"/vehicles"}},[t._v("vehicles")])],1),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(t.vehicle.name))])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12 mb-2"},[a("div",{staticClass:"card border"},[a("div",{staticClass:"card-body p-4"},[a("div",{staticClass:"d-flex justify-content-between align-items-center"},[a("div",{staticClass:"vehicle-info d-flex align-items-center"},[t._m(0),a("div",{staticClass:"flex-item ml-3"},[a("h4",{staticClass:"h4 text-dark-heading mb-2"},[t._v(t._s(t.vehicle.name))]),a("h4",{staticClass:"h5 text-dark-content mb-0"},[t._v(t._s(t.vehicle.license))])])]),a("div",{staticClass:"vehicle-info"},[a("h4",{staticClass:"h5 item-status text-center text-dark-heading mb-1 mr-2",class:t.vehicle.status.split(" ").join("-")},[t._v(t._s(t.vehicle.status))]),a("remove-btn",{nativeOn:{click:function(e){return t.removeItem(t.vehicle.id)}}}),a("router-link",{staticClass:"btn bg-gray-light int-trip crlc-icon mr-2 ",attrs:{to:{name:"edit-vehicle",params:{id:t.vehicle.id}}}},[a("svg",{staticClass:"fill-blue-300",attrs:{height:"16",viewBox:"0 0 32 32",width:"16",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 2"}},[a("path",{attrs:{d:"m22.533 4.319 3.026-3.026a1 1 0 0 1 1.414 0l3.734 3.733a1 1 0 0 1 0 1.414l-3.026 3.027zm-1.414 1.414-17.96 17.96a1 1 0 0 0 -.241.391l-1.866 5.6a1 1 0 0 0 .948 1.316.987.987 0 0 0 .316-.052l5.6-1.866a1.011 1.011 0 0 0 .391-.241l17.959-17.96z"}})])])],1)])])])]),a("div",{staticClass:"col-lg-12 mb-2"},[a("div",{staticClass:"card bg-transparent"},[a("div",{staticClass:"card-body p-0"},[a("h3",{staticClass:"h3 text-dark-heading mb-3 mt-4"},[t._v("Vehicle details")]),a("div",{staticClass:"d-flex justify-content-start align-items-center mb-3 flex-wrap"},[a("div",{staticClass:"vehicle-info flex-grow-1 col-lg-2 mb-2 p-3 bg-white border mr-2"},[a("h5",{staticClass:"h5 text-dark-heading mb-2 uppercase"},[t._v("provider")]),a("h4",{staticClass:"h4 text-dark-content mb-0 capitalize"},[t._v(t._s(t.vehicle.provider))])]),a("div",{staticClass:"vehicle-info flex-grow-1 col-lg-2 mb-2 p-3 bg-white border mr-2"},[a("h5",{staticClass:"h5 text-dark-heading mb-2 uppercase"},[t._v("type")]),a("h4",{staticClass:"h4 text-dark-content mb-0 capitalize"},[t._v(t._s(t.vehicle.type))])]),a("div",{staticClass:"vehicle-info flex-grow-1 col-lg-2 mb-2 p-3 bg-white border mr-2"},[a("h5",{staticClass:"h5 text-dark-heading mb-2 uppercase"},[t._v("Class")]),a("h5",{staticClass:"h5 text-dark-content mb-0 capitalize"},[t._v(t._s(t.vehicle.v_class))])]),a("div",{staticClass:"vehicle-info flex-grow-1 col-lg-2 mb-2 p-3 bg-white border mr-2"},[a("h5",{staticClass:"h5 text-dark-heading mb-2 uppercase"},[t._v("size")]),a("h4",{staticClass:"h4 text-dark-content mb-0 capitalize"},[t._v(t._s(t.vehicle.size))])]),a("div",{staticClass:"vehicle-info flex-grow-1 col-lg-2 mb-2 p-3 bg-white border mr-2"},[a("h5",{staticClass:"h5 text-dark-heading mb-2 uppercase"},[t._v("category")]),a("h4",{staticClass:"h4 text-dark-content mb-0 capitalize"},[t._v(t._s(t.vehicle.category))])]),a("div",{staticClass:"vehicle-info flex-grow-1 col-lg-2 mb-2 p-3 bg-white border mr-2"},[a("h5",{staticClass:"h5 text-dark-heading mb-2 uppercase"},[t._v("pax")]),a("h4",{staticClass:"h4 text-dark-content mb-0 capitalize"},[t._v(t._s(t.vehicle.pax))])]),a("div",{staticClass:"vehicle-info flex-grow-1 col-lg-2 mb-2 p-3 bg-white border mr-2"},[a("h5",{staticClass:"h5 text-dark-heading mb-2 uppercase"},[t._v("res")]),a("h4",{staticClass:"h4 text-dark-content mb-0 capitalize"},[t._v(t._s(t.vehicle.res))])]),a("div",{staticClass:"vehicle-info flex-grow-1 col-lg-2 mb-2 p-3 bg-white border mr-2"},[a("h5",{staticClass:"h5 text-dark-heading mb-2 uppercase"},[t._v("min")]),a("h4",{staticClass:"h4 text-dark-content mb-0 capitalize"},[t._v(t._s(t.vehicle.min)+"km/h")])]),a("div",{staticClass:"vehicle-info flex-grow-1 col-lg-2 mb-2 p-3 bg-white border mr-2"},[a("h5",{staticClass:"h5 text-dark-heading mb-2 uppercase"},[t._v("max")]),a("h4",{staticClass:"h4 text-dark-content mb-0 capitalize"},[t._v(t._s(t.vehicle.max)+"km/h")])]),a("div",{staticClass:"vehicle-info flex-grow-1 col-lg-2 mb-2 p-3 bg-white border mr-2"},[a("h5",{staticClass:"h5 text-dark-heading mb-2 uppercase"},[t._v("t_min")]),a("h4",{staticClass:"h4 text-dark-content mb-0 capitalize"},[t._v(t._s(t.vehicle.t_min))])]),a("div",{staticClass:"vehicle-info flex-grow-1 col-lg-2 mb-2 p-3 bg-white border mr-2"},[a("h5",{staticClass:"h5 text-dark-heading mb-2 uppercase"},[t._v("t_max")]),a("h4",{staticClass:"h4 text-dark-content mb-0 ca2italize"},[t._v(t._s(t.vehicle.t_max))])]),a("div",{staticClass:"vehicle-info flex-grow-1 col-lg-2 mb-2 p-3 bg-white border mr-2"},[a("h5",{staticClass:"h5 text-dark-heading mb-2 uppercase"},[t._v("t_max")]),a("h4",{staticClass:"h4 text-dark-content mb-0 capitalize"},[t._v(t._s(t.vehicle.t_max))])]),a("div",{staticClass:"vehicle-info flex-grow-1 col-lg-2 mb-2 p-3 bg-white border mr-2"},[a("h5",{staticClass:"h5 text-dark-heading mb-2 uppercase"},[t._v("s_min")]),a("h4",{staticClass:"h4 text-dark-content mb-0 capitalize"},[t._v(t._s(t.vehicle.s_min))])]),a("div",{staticClass:"vehicle-info flex-grow-1 col-lg-2 mb-2 p-3 bg-white border mr-2"},[a("h5",{staticClass:"h5 text-dark-heading mb-2 uppercase"},[t._v("s_max")]),a("h4",{staticClass:"h4 text-dark-content mb-0 capitalize"},[t._v(t._s(t.vehicle.s_max))])]),a("div",{staticClass:"vehicle-info flex-grow-1 col-lg-2 mb-2 p-3 bg-white border mr-2"},[a("h5",{staticClass:"h5 text-dark-heading mb-2 uppercase"},[t._v("ARG")]),a("h4",{staticClass:"h4 text-dark-content mb-0 capitalize"},[t._v(t._s(t.vehicle.arg))])])])])])]),"out of service"!==t.vehicle.status?[a("div",{staticClass:"col-lg-6 mb-2"},[a("div",{staticClass:"card border"},[a("div",{staticClass:"card-body p-4"},[a("h3",{staticClass:"h3 text-dark-heading mb-3"},[t._v("Vehicle location")]),a("GoogleMap",{attrs:{height:"400"}})],1)])])]:t._e(),a("div",{staticClass:"col-lg-6 mb-2"},[a("div",{staticClass:"card border"},[a("div",{staticClass:"card-body p-4"},[a("h3",{staticClass:"h3 text-dark-heading mb-3"},[t._v("Vehicle video")]),a("div",{staticClass:"player-container"},[a("video-player",{ref:"videoPlayer",staticClass:"int-video-player-box",attrs:{options:t.playerOptions,playsinline:!0,customEventName:"customstatechangedeventname"},on:{play:function(e){return t.onPlayerPlay(e)},pause:function(e){return t.onPlayerPause(e)},ended:function(e){return t.onPlayerEnded(e)},waiting:function(e){return t.onPlayerWaiting(e)},loadeddata:function(e){return t.onPlayerLoadeddata(e)},canplay:function(e){return t.onPlayerCanplay(e)},canplaythrough:function(e){return t.onPlayerCanplaythrough(e)},statechanged:function(e){return t.playerStateChanged(e)},ready:t.playerReadied}})],1)])])])],2)])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"flex-item img-preview__sm"},[i("img",{attrs:{src:a("2fd6"),alt:""}})])}],l=(a("7db0"),a("c894")),r=a("a5cc"),c={name:"vehicle-profile",components:{GoogleMap:l["a"],RemoveBtn:r["a"]},data:function(){return{playerOptions:{muted:!0,language:"en",playbackRates:[.7,1,1.5,2],sources:[{type:"video/mp4",src:"https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"}],poster:"/static/images/author.jpg"}}},computed:{vehicles:{get:function(){return this.$store.state.adminPanel.vehicles},set:function(t){this.$store.commit("SET_VEHICLES",t)}},vehicle:function(){var t=this;return this.vehicles.find((function(e){return e.id==t.$route.params.id}))},player:function(){return this.$refs.videoPlayer.player}},methods:{removeItem:function(t){return this.$router.push("/vehicles"),this.$store.commit("REMOVE_ITEM",t)},onPlayerPlay:function(t){console.log("player play!",t)},onPlayerPause:function(t){console.log("player pause!",t)},playerStateChanged:function(t){console.log("player current update state",t)},playerReadied:function(t){console.log("the player is readied",t)}},mounted:function(){console.log("this is current player instance object",this.player),this.$store.dispatch("loadVehicles")},created:function(){}},n=c,o=a("2877"),h=Object(o["a"])(n,i,s,!1,null,null,null);e["default"]=h.exports}}]);
//# sourceMappingURL=VehicleProfile.53558ad7.js.map