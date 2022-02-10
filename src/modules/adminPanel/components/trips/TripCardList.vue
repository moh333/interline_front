<template>
   <!--  -->
   <div class="listing-table">
      <div class="row">
         <div class="col-lg-12 mb-2" v-for="trip in tripslimit" :key="trip.id">
            <div class="card int-trip border">
               <div class="card-body p-0">
                  <div class="row">
                     <div class="col-lg-3 pr-0">
                        <div class="position-relative mr-2">
                           <div class="itinerary-block bg-blue-light p-4">
                              <div class="itinerary-item pb-3">
                                 <h4 class="h4 text-dark-heading mb-1">{{trip.pickup.location}}</h4>
                                 <p class="f4 text-dark-content mb-0">{{trip.pickup.time}}</p>
                              </div>
                              <div class="itinerary-item __last">
                                 <h4 class="h4 text-dark-heading mb-1"> {{trip.dropoff.location}} </h4>
                                 <p class="f4 text-dark-content mb-0">{{trip.dropoff.time}}</p>
                              </div>
                           </div>
                           <router-link tag="button" type="button" v-if="trip.status === 'on the road'" to="/rout-track" class="btn text-btn live-icon box-shadow-medium border-radius-rounded position-absolute bottom-30 my-4 mx-2 right-0" v-b-tooltip.hover data-bs-toggle="tooltip" data-bs-placement="top" title="Live track">
                              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                                 <g id="Group_279" data-name="Group 279" transform="translate(-764 -732)">
                                    <rect id="Rectangle_451" data-name="Rectangle 451" width="36" height="36" rx="18" transform="translate(764 732)" fill="#fff" />
                                    <rect id="Rectangle_422" data-name="Rectangle 422" width="22" height="22" rx="11" transform="translate(771 739)" fill="#faca9c" />
                                    <rect id="Rectangle_417" data-name="Rectangle 417" width="10" height="10" rx="5" transform="translate(777 745)" fill="#cd440e" />
                                 </g>
                              </svg>
                           </router-link>
                        </div>
                     </div>
                     <div class="col-lg-9 pl-0">
                        <div class="p-4 d-flex">
                           <div class="flex-item flex-basis-2">
                              <div class="trip-info mb-3">
                                 <h4 class="h4 text-dark-heading mb-1">Date</h4>
                                 <p class="f4 text-dark-content mb-0">{{trip.date}}</p>
                              </div>
                              <div class="trip-info">
                                 <h4 class="h4 text-dark-heading mb-1">Vehicle</h4>
                                 <p class="f4 text-dark-content mb-0">{{trip.vehicle}}</p>
                              </div>
                           </div>

                           <div class="flex-item flex-basis-2">
                              <div class="trip-info mb-3">
                                 <h4 class="h4 text-dark-heading mb-1">Driver</h4>
                                 <p class="f4 text-dark-content mb-0">{{trip.driver}}</p>
                              </div>
                              <div class="trip-info">
                                 <h4 class="h4 text-dark-heading mb-1">Driving time</h4>
                                 <p class="f4 text-dark-content mb-0">Average {{trip.drivingtime}}</p>
                              </div>
                           </div>

                           <div class="flex-item flex-basis-2">
                              <div class="trip-info mb-3">
                                 <h4 class="h4 text-dark-heading mb-1">Pick up</h4>
                                 <p class="f4 text-dark-content mb-0">{{trip.pickup.location}}</p>
                              </div>
                              <div class="trip-info">
                                 <h4 class="h4 text-dark-heading mb-1">Drop off</h4>
                                 <p class="f4 text-dark-content mb-0">{{trip.dropoff.location}}</p>
                              </div>
                           </div>

                           <div class="flex-item flex-basis-2" v-if="trip.multistops.status">
                              <div class="trip-info mb-3">
                                 <h4 class="h4 text-dark-heading mb-1">Multi stops</h4>
                                 <p class="f4 text-dark-content mb-0">{{ trip.multistops.stops.length }} stops</p>
                              </div>
                           </div>
                           <div class="flex-item flex-basis-2 d-flex align-self-center justify-content-start">
                              <div class="h6 item-status" :class="trip.status.split(' ').join('-')">{{ trip.status }}</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>

</template>

<script>
export default {
	name: "trip-card-list",
	mounted() {
		this.$store.dispatch("loadTrips");
	},
	data() {
		return {};
	},
	computed: {
		trips() {
			return this.$store.state.adminPanel.trips;
		},
		currentTripPage: {
			get() {
				return this.$store.state.adminPanel.currentTripPage;
			},
			set(value) {
				this.$store.commit("currentTripPage", value);
			}
		},
		perPage: {
			get() {
				return this.$store.state.adminPanel.perPage;
			},
			set(value) {
				this.$store.commit("perPage", value);
			}
		},
		tripslimit() {
			return this.trips.slice(
				(this.currentTripPage - 1) * this.perPage,
				this.currentTripPage * this.perPage
			);
		}
	}
};
</script>

<style>
</style>
