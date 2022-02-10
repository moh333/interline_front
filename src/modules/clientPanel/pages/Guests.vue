<template>
   <div class="p_layout pt-4">
      <guests-card-list></guests-card-list>
   </div>
</template>

<script>
import LoadingComponent from "@/views/LoadingComponent.vue";
const guestsCardList = () => ({
	component: import(/*webpackPrefetch: true*/ "../components/guests/GuestsCardList.vue"),
	loading: LoadingComponent
});
export default {
	name: "client-guests",
	components: {
		guestsCardList
	}
};
</script>

<style>
</style>
