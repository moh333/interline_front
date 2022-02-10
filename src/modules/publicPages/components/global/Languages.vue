<template>
   <div class="langs-block d-flex">
      <template v-if="germany">
         <div class="sm-icon mr-2">
            <Germany />
         </div>
      </template>
      <template v-if="english">
         <div class="sm-icon mr-2">
            <English />
         </div>
      </template>
      <template v-if="spanish">
         <div class="sm-icon mr-2">
            <Spanish />
         </div>
      </template>
      <template v-if="arabic">
         <div class="sm-icon mr-2">
            <Arabic />
         </div>
      </template>
   </div>
</template>

<script>
import Germany from "@/components/svgs/Germany";
import English from "@/components/svgs/English";
import Spanish from "@/components/svgs/Spanish";
import Arabic from "@/components/svgs/Arabic";
export default {
	name: "languages",
	components: {
		Germany,
		English,
		Spanish,
		Arabic
	},
	props: {
		germany: {
			type: Boolean,
			default: () => {}
		},
		english: {
			type: Boolean,
			default: () => {}
		},
		spanish: {
			type: Boolean,
			default: () => {}
		},
		arabic: {
			type: Boolean,
			default: () => {}
		}
	}
};
</script>

<style>
</style>
