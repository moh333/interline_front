<template>
   <svg :class="[fill? `fill-${fill}` : '']" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
      <polygon points="303.616,64.034 283.747,86.511 458.514,241 0,241 0,271 458.514,271 283.747,425.489 303.616,447.966 
			512,263.761 512,248.239 		" />

   </svg>

</template>

<script>
import fill from "./utilities/fill";
export default {
	name: "arrow-icon",
	mixins: [fill]
};
</script>

<style>
</style>
