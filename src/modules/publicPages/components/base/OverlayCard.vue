<template>
   <div class="overlay-card" :class="[colorBackground? `bg-${colorBackground}` : '']">
      <template v-if="image">
         <picture>
            <b-img-lazy :src="setUrlImage(image)" :height="height"></b-img-lazy>
         </picture>
      </template>
      <div class="absolute-block" :class="[hasBackground? `absolute-with-bg_${backgroundType}` : '']">
         <template v-if="hasContent">
            <div class="card-content flex-column mx-auto" :class="[contentAling? `justify-content-${contentAling}` : '', hasPadding? 'content-padding' : '']">
               <slot name="content"></slot>
            </div>
         </template>
      </div>
   </div>
</template>

<script>
import setUrlImage from "../../utilities/setUrlImage";
export default {
	name: "overlay-card",
	mixins: [setUrlImage],
	props: {
		image: {
			type: String,
			default: () => {}
		},
		hasBackground: {
			type: Boolean,
			default: () => {}
		},
		colorBackground: {
			type: String,
			default: () => {}
		},
		backgroundType: {
			type: String,
			default: () => {}
		},
		hasPadding: {
			type: Boolean,
			default: () => {}
		},
		hasContent: {
			type: Boolean,
			default: () => {}
		},
		contentAling: {
			type: String,
			default: () => {}
		},
		height: {
			type: String,
			default: () => {}
		}
	}
};
</script>

<style>
</style>
