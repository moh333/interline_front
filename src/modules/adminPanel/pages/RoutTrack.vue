<template>
   <div>
      <GoogleMap :height="'400'" />
      <div class="p_layout">
         <div class="switch-to-track my-3 pb-3 border-bottom">
            <div class="row justify-content-between align-items-center">
               <div class="col-lg-3">
                  <template v-if="list === 'TripCardList'">
                     <router-link to="/trips" class="btn text-btn text-gold-heading uppercase">Back to trips list</router-link>
                  </template>
                  <template v-if="list === 'VehicleCardList'">
                     <router-link to="/vehicles" class="btn text-btn text-gold-heading uppercase">Back to vehicles list</router-link>
                  </template>
                  <template v-if="list === 'DriverCardList'">
                     <router-link to="/drivers" class="btn text-btn text-gold-heading uppercase">Back to drivers list</router-link>
                  </template>
               </div>
               <div class="col-lg-3">
                  <select v-model="list" class="form-select" aria-label="rout track">
                     <option value="TripCardList" selected>Trips</option>
                     <option value="VehicleCardList">Vehicles</option>
                     <option value="DriverCardList">Drivers</option>
                  </select>
               </div>

            </div>
         </div>
         <scrollable-content :height="350">
            <template>
               <div class="mr-3">
                  <keep-alive>
                     <component v-bind:is="list" />
                  </keep-alive>
               </div>
            </template>
         </scrollable-content>
      </div>
   </div>
</template>

<script>
// global components
import GoogleMap from "../components/global/GoogleMap.vue";
import ScrollableContent from "../components/global/ScrollableContent.vue";

import TripCardList from "../components/trips/TripCardList.vue";
import VehicleCardList from "../components/vehicles/VehicleCardList.vue";
import DriverCardList from "../components/drivers/DriverCardList.vue";
export default {
	name: "rout-track",
	components: {
		GoogleMap,
		TripCardList,
		VehicleCardList,
		DriverCardList,
		ScrollableContent
	},
	data() {
		return {
			list: "TripCardList"
		};
	}
};
</script>

<style>
</style>
