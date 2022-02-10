<template>
   <header class="header" :style="{'min-height': `${minHeight}px`}" :class="[display? `d-${display}` : '', flexAlign? `align-items-${flexAlign}` : '']">
      <div class="header-body h-100">
         <template v-if="hasSlider">
            <div class="absolute-block">
               <div class="absolute-block_body">
                  <slot name="slider">
                     <b-carousel :id="sliderId" style="text-shadow: 0px 0px 2px #000" fade :img-height="minHeight">
                        <b-carousel-slide v-for="(image, index) in imagesUrl" :key="index" :img-src="image"></b-carousel-slide>
                     </b-carousel>
                  </slot>
               </div>
            </div>
         </template>
         <template v-if="hasContent">
            <div class="header-content">
               <slot name="content"></slot>
            </div>
         </template>
      </div>
   </header>
</template>

<script>
export default {
	name: "n-header",
	props: {
		hasContent: {
			type: Boolean,
			default: () => {}
		},
		hasSlider: {
			type: Boolean,
			default: () => {}
		},
		sliderId: {
			type: String,
			default: () => {}
		},
		imagesUrl: {
			type: Array,
			default: () => {}
		},
		display: {
			type: String,
			default: () => {}
		},
		flexAlign: {
			type: String,
			default: () => {}
		},
		flexJustify: {
			type: String,
			default: () => {}
		},
		minHeight: {
			type: String,
			default: () => {}
		}
	}
};
</script>

<style>
</style>
