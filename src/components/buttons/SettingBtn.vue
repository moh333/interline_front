<template>
   <router-link class="btn bg-gray-light int-trip crlc-icon" :to="{ name: routeName }" v-b-tooltip.hover data-bs-toggle="tooltip" title="settings">
      <setting-icon />
   </router-link>
</template>

<script>
import SettingIcon from "../svgs/SettingIcon.vue";
export default {
	name: "setting-btn",
	props: {
		routeName: {
			type: String,
			default: () => {}
		}
	},

	components: {
		SettingIcon
	}
};
</script>

<style>
</style>
