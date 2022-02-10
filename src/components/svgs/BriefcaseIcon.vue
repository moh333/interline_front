<template>
   <svg :class="[fill? `fill-${fill}` : '']" xmlns="http://www.w3.org/2000/svg" width="27.974" height="25.688" viewBox="0 0 27.974 25.688">
      <g id="briefcase" transform="translate(-44.396 -55.398)">
         <path id="Path_131" data-name="Path 131" d="M44.4,120.168v16.65a1.218,1.218,0,0,0,1.216,1.217h3.4V118.952h-3.4A1.218,1.218,0,0,0,44.4,120.168Z" transform="translate(0 -56.95)" fill="#8b6b3b" />
         <path id="Path_132" data-name="Path 132" d="M97.653,118.952h16.906v19.083H97.653Z" transform="translate(-47.723 -56.95)" fill="#8b6b3b" />
         <path id="Path_133" data-name="Path 133" d="M272.552,118.952h-3.4v19.083h3.4a1.218,1.218,0,0,0,1.217-1.217v-16.65A1.218,1.218,0,0,0,272.552,118.952Z" transform="translate(-201.398 -56.95)" fill="#8b6b3b" />
         <path id="Path_134" data-name="Path 134" d="M126.157,57.668a3.882,3.882,0,0,1,3.849,3.42h2.279a6.145,6.145,0,0,0-12.256,0h2.279A3.882,3.882,0,0,1,126.157,57.668Z" transform="translate(-67.774)" fill="#8b6b3b" />
      </g>
   </svg>

</template>

<script>
import fill from "./utilities/fill";
export default {
	name: "briefcase-icon",
	mixins: [fill]
};
</script>

<style>
</style>
