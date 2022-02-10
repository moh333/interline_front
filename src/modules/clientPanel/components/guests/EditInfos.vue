<template>
   <div class="p_layout pt-4">
      {{guest.name}}
   </div>
</template>

<script>
export default {
	name: "edit-infos",
	mounted() {
		this.$store.dispatch("loadGuests");
	},
	computed: {
		guests: {
			get() {
				return this.$store.state.clientPanel.guests;
			},
			set(value) {
				this.$store.commit("SET_GUESTS", value);
			}
		},
		guest() {
			return this.guests.find(guest => guest.id == this.$route.params.id);
		}
	}
};
</script>

<style>
</style>
