<template>
   <router-link class="btn main-btn px-4 text-start rounded border bg-gray-light" :to="`${routeLink}`">
      <add-icon />
      <span class="d-inline-block ml-2">
         <slot></slot>
      </span>
   </router-link>
</template>

<script>
import AddIcon from "../svgs/AddIcon";
export default {
	name: "add-btn",
	props: {
		routeLink: {
			type: String,
			default: () => {}
		}
	},
	components: {
		AddIcon
	}
};
</script>

<style>
</style>
