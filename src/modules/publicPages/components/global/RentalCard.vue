<template>
   <div class="card lg-border-bottom border-radius-medium box-shadow-extra-large position-relative z-index-10">
      <div class="card-body p-4">
         <h2 class="h2 text-dark-heading heading-uderline">
            Simply Safe Even In Special Times
         </h2>
         <div class="form">
            <div class="mb-3">
               <select class="selectpicker f4 mb-0 form-control" id="floatingCategory" aria-label="Floating label select example">
                  <option disabled selected>Select category</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
               </select>
            </div>
            <div class=" mb-3">
               <select class="selectpicker f4 mb-0 form-control" id="floatingVehicle" aria-label="Floating label select example">
                  <option disabled selected>Select vehicle Cctegory</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
               </select>
            </div>
            <div class="mb-3">
               <vc-date-picker v-model="date" mode="dateTime" is24hr>
                  <template v-slot="{ inputValue, inputEvents }">
                     <input class="px-2 py-1 border rounded focus:outline-none focus:border-blue-300 f4 form-control" :value="inputValue" v-on="inputEvents" placeholder="Date and Time"/>
                  </template>
               </vc-date-picker>
            </div>
            <div class="row mb-3">
               <div class="col">
                  <input type="search" class="form-control" id="floatingPick" placeholder="Pick Up Location">
               </div>
               <div class="col">
                  <input type="search" class="form-control" id="floatingDrop" placeholder="Drop Off Location">

               </div>
            </div>
            <div class="mb-3">
               <b-form-spinbutton class="f5 mb-0 input_pax" value="1" id="input-pax" min="1" max="100"></b-form-spinbutton>
            </div>
            <a href="" class="btn main-btn gold-btn rounded mt-2 uppercase">
               {{$t('buttons.reserve_now')}}
            </a>
         </div>
      </div>
   </div>
</template>

<script>
import $ from "jquery";
export default {
	name: "rental-card",
	mounted() {
		// this.loadingData();
		// this.dsiplayDuration();
		// // Observe the selectpicker to update the plugin
		// this.initObserver();
		$(".selectpicker").selectpicker();
	}
};
</script>

<style>
</style>
