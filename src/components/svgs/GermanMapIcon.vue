<template>
   <svg :class="[fill? `fill-${fill}` : '']" xmlns="http://www.w3.org/2000/svg" width="73.29" height="73.29" viewBox="0 0 73.29 73.29">
  <g id="Group_66" data-name="Group 66" transform="translate(-314 -5017)">
    <g id="Ellipse_22" data-name="Ellipse 22" transform="translate(314 5017)" fill="rgba(255,255,255,0)" stroke="#8b6b3b" stroke-width="6">
      <circle cx="36.645" cy="36.645" r="36.645" stroke="none"/>
      <circle cx="36.645" cy="36.645" r="33.645" fill="none"/>
    </g>
    <g id="germany" transform="translate(331.229 5033.343)">
      <path id="Path_148" data-name="Path 148" d="M37.63,19.716c-1.592-2-.961-4.375-1.454-6.526-.267-1.154-2.07-1.655-1.516-2.509,2.784-4.282-2.881-5.9-2.771-9.289.006-.222-.756-.758-1.2-.307C28.82,2.978,26,2.822,23.953,4.289a2.411,2.411,0,0,1-2.686.133c.444-.843.857-1.624,1.268-2.409C20.949,3.22,18.852,3.154,18.2,1.971,16.551-1.048,14.029.389,11.544.07c2.087.923.1,2.333.716,3.29.533.823,1.054,1.586-.135,2C11.169,5.7,11.4,7.745,9.3,6.67,6.758,5.372,5.676,6.516,5.812,9.4a2.737,2.737,0,0,1-1.12,2.784c-.474.273-.785.347-.578.986.646,2.015.214,2.83-1.763,3.2-.589.116-1.56.326-1.259.741,1.575,2.166-1.583,4.85.866,6.833.281.226.222.6.157,1.025-.6,3.92.768,5.705,4.716,6.387.851.146,1.683.423,2.919.735A9.16,9.16,0,0,0,7.473,37.29c-.326,1.768.434,2.515,2.022,1.935,2.4-.87,4.611-.1,6.909.262.864.136,1.749,1.243,1.854,1.107,1.744-2.244,4.331.411,6.279-1.2a3.759,3.759,0,0,1,3.878-.18c1.552.773,1.712.193,1.162-1.113-.527-1.262-.614-1.918,1.022-2.726,3.211-1.594,3.1-1.924.142-4.215a17.262,17.262,0,0,1-2.089-1.533c-1.223-1.276-2.477-3.573-1.253-4.445,2.39-1.7,5.487-3.311,8.277-3.29C38.233,21.909,37.969,20.14,37.63,19.716Z" transform="translate(0 0)" fill="#8b6b3b"/>
    </g>
  </g>
</svg>

</template>

<script>

import fill from "./utilities/fill";
export default {
	name: "german-map-icon",
	mixins: [fill]
};
</script>

<style>

</style>
