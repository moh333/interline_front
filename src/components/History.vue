<template>
   <div class="pt-4">
      <div class="row justify-content-center">
         <div class="col-lg-10">
            <input type="search" class="search-in-table form-control" id="searchTabelInput" placeholder="search history">
         </div>
         <saved-items class="col-lg-10"></saved-items>
      </div>
   </div>
</template>

<script>
import SavedItems from "@/components/SavedItems.vue";

export default {
	name: "history",
	components: {
		SavedItems
	}
};
</script>

<style>
</style>
