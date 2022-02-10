<template>
   <div class="p_layout pt-4">
      <nav aria-label="breadcrumb">
         <ol class="breadcrumb">
            <li class="breadcrumb-item">
               <router-link to="/customers">customers</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">{{customer.name}}</li>
         </ol>
      </nav>
      <div class="mb-3">
         <label for="formGroupExampleInput" class="form-label">customer name</label>
         <input type="text" class="form-control" v-model="customer.name" id="formGroupExampleInput" placeholder="Example input placeholder">
      </div>
      <div class="mb-3">
         <label for="formGroupExampleInput2" class="form-label">customer email</label>
         <input type="text" class="form-control" v-model="customer.email" id="formGroupExampleInput2" placeholder="Another input placeholder">
      </div>
   </div>
</template>

<script>
export default {
	name: "edit-profile",
	computed: {
		customersFilter() {
			return this.$store.getters.customersFilter;
		},
		customer() {
			return this.customersFilter.find(
				customer => customer.id == this.$route.params.id
			);
		}
	}
};
</script>

<style>
</style>
