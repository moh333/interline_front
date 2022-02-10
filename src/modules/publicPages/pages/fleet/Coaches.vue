<template>
   <div class="coach-fleet">
      <n-header display="flex" :has-content="true" min-height="auto">
         <template #content>
            <overlay-card :has-background="true" background-type="gradient" :has-content="true" content-aling="end" :image="image" height="600">
               <template #content>
                  <div class="container">
                     <div class="row">
                        <div class="col-xl-7 col-lg-12 my-4 align-self-end">
                           <h1 class="h1 text-white-heading mb-4">INTERLINE Coaches</h1>
                           <p class="f3 text-white-content">Our extensive fleet offers different models and various sizes of fully air-conditioned coaches. We're sure you'll find just the vehicle to meet your wishes.</p>
                        </div>
                     </div>
                  </div>
               </template>
            </overlay-card>
         </template>
      </n-header>
      <!--  -->

      <!-- Our Modern Fleet Section -->
      <section class="our-fleet" v-for="(vehicle, i) in vehicles" :key="i">

         <div class="container">
            <div class="py-5">
               <h3 class="h3 text-gold-heading mb-2 uppercase"> {{vehicle.class}} {{vehicle.group}} </h3>
               <h3 class="h3 text-dark-heading max-text-lmt-large mb-3"> {{vehicle.heading}} </h3>
               <p class="f3 card-text text-dark-content">{{vehicle.sub_heading}}</p>
            </div>

         </div>
         <div class="container-fluid"></div>
         <!-- <template v-if="vehicle.v_class == 'Luxury Class Plus'"> -->
         <vehicle v-for="car in vehicle.cars_gruop" :key="car.name" :image="car.cover" :name="car.name" :infos="car.infos" :passengers="car.spaces.passengers" :travel-bag="car.spaces.travel_bag" :briefcase="car.spaces.briefcase" :link="car.link"></vehicle>
         <!-- </template> -->
      </section>
      <!--  -->

      <LocationsAndOffices />
   </div>
</template>

<script>
import NHeader from "../../components/base/NHeader";
import OverlayCard from "../../components/base/OverlayCard";
import Vehicle from "../../components/vehicle/Vehicle";

import LocationsAndOffices from "../../components/global/LocationsAndOffices";
import setUrlImage from "../../utilities/setUrlImage";

export default {
	name: "fleet-minivans",
	mixins: [setUrlImage],
	components: {
		NHeader,
		OverlayCard,
		Vehicle,
		LocationsAndOffices
	},
	data() {
		return {
			image: "https://www.interline-frankfurt.de/images/header/flotte-L.jpg",
			mainProps: {
				center: true,
				fluidGrow: true,
				blank: true,
				blankColor: "#bbb"
			}
		};
	},
	computed: {
		vehicles: {
			get() {
				return this.$store.state.publicPages.vehicles;
			},
			set(value) {
				this.$store.commit("SET_VEHICLES", value);
			}
		}
	},
	mounted() {
		this.$store.dispatch("loadCoachesVehicles");
	}
};
</script>

<style>
</style>
