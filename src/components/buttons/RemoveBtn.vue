<template>
   <button class="btn bg-gray-light int-trip crlc-icon mr-2 " v-b-tooltip.hover title="Delete">
      <remove-icon />
   </button>
</template>

<script>
import RemoveIcon from "../svgs/RemoveIcon.vue";
export default {
	name: "remove-btn",

	components: {
		RemoveIcon
	}
};
</script>

<style>
</style>
