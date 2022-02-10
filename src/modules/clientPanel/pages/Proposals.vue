<template>
   <div class="p_layout pt-4">
      <saved-items></saved-items>
   </div>
</template>

<script>
import LoadingComponent from "@/views/LoadingComponent.vue";
const SavedItems = () => ({
	component: import(/*webpackPrefetch: true*/ "@/components/SavedItems.vue"),
	loading: LoadingComponent
});
export default {
	name: "client-proposals",
	components: {
		SavedItems
	}
};
</script>

<style>
</style>
