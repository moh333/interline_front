<template>
   <svg :class="[fill? `fill-${fill}` : '']" xmlns="http://www.w3.org/2000/svg" width="27.584" height="33.713" viewBox="0 0 27.584 33.713">
      <g id="location" transform="translate(-3.001 -0.999)">
         <path id="Path_147" data-name="Path 147" d="M25.553,4.141A13.787,13.787,0,1,0,8.4,25.723a23.369,23.369,0,0,1,6.009,6.462l1.073,1.784a1.532,1.532,0,0,0,2.627,0l1.028-1.713a19.492,19.492,0,0,1,5.483-6.13,13.776,13.776,0,0,0,.938-21.993ZM16.791,20.922a6.13,6.13,0,1,1,6.13-6.13A6.13,6.13,0,0,1,16.791,20.922Z" fill="#8b6b3b" />
      </g>
   </svg>

</template>

<script>
import fill from "./utilities/fill";
export default {
	name: "location-icon",
	mixins: [fill]
};
</script>

<style>
</style>
