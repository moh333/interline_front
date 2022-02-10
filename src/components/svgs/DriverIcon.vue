<template>
   <svg :class="[fill? `fill-${fill}` : '']" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="23" height="23" viewBox="0 0 23 23">
      <defs>
         <clipPath id="clip-path">
            <rect id="Rectangle_299" data-name="Rectangle 299" width="23" height="23" fill="#fff"></rect>
         </clipPath>
      </defs>
      <g id="Mask_Group_19" data-name="Mask Group 19" clip-path="url(#clip-path)">
         <g id="steering-wheel_1_" data-name="steering-wheel (1)">
            <g id="Group_125" data-name="Group 125">
               <g id="Group_124" data-name="Group 124">
                  <path id="Path_195" data-name="Path 195" d="M11.5,0A11.5,11.5,0,1,0,23,11.5,11.545,11.545,0,0,0,11.5,0Zm0,2.7a8.866,8.866,0,0,1,8.445,6.337.668.668,0,0,0-.342-.366,19.827,19.827,0,0,0-8.1-1.883A19.827,19.827,0,0,0,3.4,8.667a.668.668,0,0,0-.342.366A8.866,8.866,0,0,1,11.5,2.7ZM2.869,13.235a.674.674,0,0,0,.556.494l1.619.225a4.741,4.741,0,0,1,4,4l.225,1.619a.668.668,0,0,0,.4.516A8.88,8.88,0,0,1,2.869,13.235Zm8.631.287A2.021,2.021,0,1,1,13.521,11.5,2.024,2.024,0,0,1,11.5,13.521Zm1.831,6.57a.668.668,0,0,0,.4-.516l.225-1.619a4.741,4.741,0,0,1,4-4l1.619-.225a.674.674,0,0,0,.556-.494A8.88,8.88,0,0,1,13.331,20.091Z"></path>
               </g>
            </g>
            <g id="Group_127" data-name="Group 127" transform="translate(10.826 10.826)">
               <g id="Group_126" data-name="Group 126">
                  <path id="Path_196" data-name="Path 196" d="M11.5,10.826a.674.674,0,1,0,.674.674A.674.674,0,0,0,11.5,10.826Z" transform="translate(-10.826 -10.826)"></path>
               </g>
            </g>
         </g>
      </g>
   </svg>
</template>

<script>
import fill from "./utilities/fill";
export default {
	mixins: [fill]
};
</script>

<style>
</style>
