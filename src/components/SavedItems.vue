<template>
   <div>
      <div class="mb-2 mt-3" v-for="historyItem in history" :key="historyItem.type">
         <h4 class="h4 uppercase"> {{historyItem.type}}s</h4>
         <div class="card int-trip border" v-for="item in historyItem.items" :key="item.id">
            <template v-if="historyItem.type == 'trip'">
               <div class="card-header bg-transparent position-relative has-action-bar">
                  <div class="row align-items-center">
                     <div class="col-lg-2 pr-0">
                        <h4 class="h5 text-dark-heading mb-0"> {{item.date}} </h4>
                     </div>
                     <div class="col-lg-8 pr-0">
                        <div class="position-relative me-2">
                           <div class="d-flex align-items-center">
                              <div class="flex-item ms-3">
                                 <h4 class="h5 text-dark-heading mb-0">{{item.name}}</h4>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col-lg-2">
                        <div class="driver-info">
                           <h4 class="h5 item-status text-dark-heading text-center mb-0 on-the-road">{{historyItem.type}}</h4>
                        </div>
                     </div>
                     <div class="actions-on-hover">
                        <button v-b-toggle="`accordion-${item.id}`" class="btn h5 mb-0 bg-gray-light border-radius-rounded px-3 py-1 int-trip mr-2">
                           More details
                        </button>
                        <router-link to="/calculate-price" class="btn h5 mb-0 bg-gray-light border-radius-rounded px-3 py-1 int-trip mr-2">
                           Re-open
                        </router-link>
                        <remove-btn></remove-btn>
                        <!-- <router-link :to="{name: 'edit-order', params: {id: order.id}}" class="btn bg-gray-light int-trip crlc-icon mr-2" v-b-tooltip.hover.top title="Edit">
                     <edit-icon />
                  </router-link> -->
                     </div>
                  </div>
               </div>
               <b-collapse :id="`accordion-${item.id}`" accordion="project-accordion">
                  <div class="card-body p-0 border border-radius-small m-3">
                     <div class="row">
                        <div class="col-lg-3 pr-0">
                           <div class="position-relative mr-2">
                              <div class="itinerary-block bg-blue-light p-4">
                                 <div class="itinerary-item pb-3">
                                    <h4 class="h4 text-dark-heading mb-1">{{item.pickup.location}}</h4>
                                    <p class="f4 text-dark-content mb-0">{{item.pickup.time}}</p>
                                 </div>
                                 <div class="itinerary-item __last">
                                    <h4 class="h4 text-dark-heading mb-1"> {{item.dropoff.location}} </h4>
                                    <p class="f4 text-dark-content mb-0">{{item.dropoff.time}}</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-lg-9 pl-0">
                           <div class="p-4 d-flex">
                              <div class="flex-item flex-basis-2">
                                 <div class="trip-info mb-3">
                                    <h4 class="h4 text-dark-heading mb-1">Date</h4>
                                    <p class="f4 text-dark-content mb-0">{{item.date}}</p>
                                 </div>
                                 <div class="trip-info">
                                    <h4 class="h4 text-dark-heading mb-1">Vehicle</h4>
                                    <p class="f4 text-dark-content mb-0">{{item.vehicle}}</p>
                                 </div>
                              </div>

                              <div class="flex-item flex-basis-2">
                                 <div class="trip-info mb-3">
                                    <h4 class="h4 text-dark-heading mb-1">Driver</h4>
                                    <p class="f4 text-dark-content mb-0">{{item.driver}}</p>
                                 </div>
                                 <div class="trip-info">
                                    <h4 class="h4 text-dark-heading mb-1">Driving time</h4>
                                    <p class="f4 text-dark-content mb-0">Average {{item.drivingtime}}</p>
                                 </div>
                              </div>

                              <div class="flex-item flex-basis-2" v-if="item.multistops.status">
                                 <div class="trip-info mb-3">
                                    <h4 class="h4 text-dark-heading mb-1">Multi stops</h4>
                                    <p class="f4 text-dark-content mb-0">{{ item.multistops.stops.length }} stops</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </b-collapse>

            </template>
            <template v-if="historyItem.type == 'project'">
               <div class="card-header bg-transparent position-relative has-action-bar">
                  <div class="row align-items-center">
                     <div class="col-lg-2 pr-0">
                        <h4 class="h5 text-dark-heading mb-0"> {{item.date}} </h4>
                     </div>
                     <div class="col-lg-8 pr-0">
                        <div class="position-relative me-2">
                           <div class="d-flex align-items-center">
                              <div class="flex-item ms-3">
                                 <h4 class="h5 text-dark-heading mb-0">{{item.name}}</h4>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col-lg-2">
                        <div class="driver-info">
                           <h4 class="h5 item-status text-dark-heading text-center mb-0 on-the-road">{{historyItem.type}}</h4>
                        </div>
                     </div>
                     <div class="actions-on-hover">
                        <button v-b-toggle="`accordion-${item.id}`" class="btn h5 mb-0 bg-gray-light border-radius-rounded px-3 py-1 int-trip mr-2">
                           More details
                        </button>
                        <router-link to="/calculate-price" class="btn h5 mb-0 bg-gray-light border-radius-rounded px-3 py-1 int-trip mr-2">
                           Re-open
                        </router-link>
                        <remove-btn></remove-btn>

                     </div>
                  </div>
               </div>
               <b-collapse :id="`accordion-${item.id}`" accordion="project-accordion">
                  <div class="card-body px-3 py-2 ">
                     <div class="d" v-for="(trip, index) in item.trips" :key="trip.id">
                        <h4 class="h4 text-dark-heading mt-3">Trip ({{index + 1}})</h4>
                        <div class="card-body p-0 border border-radius-small">
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

                                    <div class="flex-item flex-basis-2" v-if="trip.multistops.status">
                                       <div class="trip-info mb-3">
                                          <h4 class="h4 text-dark-heading mb-1">Multi stops</h4>
                                          <p class="f4 text-dark-content mb-0">{{ trip.multistops.stops.length }} stops</p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                  </div>
               </b-collapse>

            </template>
         </div>

      </div>
   </div>
</template>

<script>
import RemoveBtn from "@/components/buttons/RemoveBtn.vue";
export default {
	name: "saved-items",
	components: {
		RemoveBtn
	},
	mounted() {
		this.$store.dispatch("loadHistory");
	},
	computed: {
		history: {
			get() {
				return this.$store.state.adminPanel.history;
			},
			set(value) {
				this.$store.commit("SET_HISTORY", value);
			}
		}
	}
};
</script>

<style>
</style>
