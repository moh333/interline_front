<template>
   <div class="vehicle-details">
      <template v-if="vehicle">
         <n-header display="flex" :slider-id="'home-page-slider'" :has-slider="true" :has-content="true" min-height="auto">
            <template #content>
               <overlay-card :has-background="true" :has-padding="true" background-type="gradient" :has-content="true" content-aling="end" :image="vehicle.cover" height="500">
                  <template #content>
                     <div class="container">
                        <h1 class="h1 text-white-heading"> {{vehicle.name}}</h1>
                     </div>
                  </template>
               </overlay-card>

            </template>
         </n-header>

         <section class="vehicle-block pt-5">
            <div class="container">
               <h2 class="h2 text-dark-heading  mb-4">Vehicle details</h2>
               <p class="f3 text-dark-content mb-2" v-for="(info, i) in vehicle.infos" :key="i"> {{info}} </p>
            </div>
         </section>

         <!--  -->
         <section class="vehicles-highlights py-5">
            <div class="container">
               <h2 class="h2 text-dark-heading  mb-4">Vehicle highlights</h2>
               <div class="row">
                  <div class="col-lg-12">
                     <b-carousel id="vehiclesGallary" style="text-shadow: 0px 0px 2px #000" fade :interval="4000" controls indicators background="#ababab">
                        <b-carousel-slide v-for="(photo, index) in vehicle.photos" :key="index" :img-src="photo" img-height="280"></b-carousel-slide>
                     </b-carousel>
                  </div>
               </div>

            </div>
         </section>

         <!--  -->
         <section class="vehicles-features pb-5">
            <div class="container">
               <div class="row">
                  <div class="col-xl-4 col-lg-6  mb-4" v-for="(feature, index) in vehicle.features" :key="index">
                     <template v-if="feature.category == 'globle' ">
                        <h2 class="h2 text-dark-heading mb-4">Vehicle feature</h2>
                     </template>
                     <template v-else>
                        <h2 class="h2 text-dark-heading mb-4">{{feature.category}} feature</h2>
                     </template>
                     <div>
                        <div class="d-flex align-items-center mb-2" v-for="(item, index) in feature.list" :key="index">
                           <div class="card-icon sm-icon mb-0 mr-2">
                              <TickIcon fill="gold" />
                           </div>
                           <h5 class="h5 text-dark-content">{{item}}</h5>
                        </div>
                     </div>
                  </div>
               </div>

            </div>
         </section>
      </template>

      <template v-else>
         <div class="vh-100">
            <LoadingComponent />
         </div>
      </template>

   </div>
</template>

<script>
import NHeader from "../../components/base/NHeader";
import OverlayCard from "../../components/base/OverlayCard";
import TickIcon from "@/components/svgs/TickIcon";
import LoadingComponent from "@/views/LoadingComponent";

export default {
	name: "vehicle-details",
	components: {
		NHeader,
		OverlayCard,
		TickIcon,
		LoadingComponent
	},
	computed: {
		vehicles: {
			get() {
				return this.$store.state.publicPages.vehicles;
			},
			set(value) {
				this.$store.commit("SET_VEHICLES", value);
			}
		},
		vehicle() {
			var _vehicles = this.vehicles,
				all_cars = [],
				selceted_car;

			// check if the vehicles loaded
			if (_vehicles !== null) {
				// mapping through the vehicles and get all vehicles groups
				_vehicles.map(car => {
					// mapping through the cars_gruop and push all vehicles in one array
					car.cars_gruop.map(car_item => {
						return all_cars.push(car_item);
					});
				});

				selceted_car = all_cars.find(
					car => car.name == this.$route.params.name
				);
			}
			// Call all_cars array and find the car maches with router url name params

			console.log(selceted_car);

			return selceted_car;
		}
	},
	mounted() {
		this.$store.dispatch("loadVehicles");
	}
};
</script>

<style>
</style>