<template tag="div">
   <div class="p_layout pt-4">
      <template v-if="loading">

         <!--  -->
         <statistic-card :statistics="overviewStatistics">
            <template v-slot="slotProps">
               <h4 class="h4 text-dark-content mb-1 capitalize">{{ slotProps.statistic.type }}</h4>
               <h3 class="h3 text-dark-heading mb-0 capitalize">
                  {{ slotProps.statistic.quantity }}
               </h3>
            </template>
         </statistic-card>
         <!--  -->
         <div class="row">

            <div class="col-lg-12 mb-4">
               <div class="card border box-shadow-medium h-100">
                  <div class="card-header bg-white p-4 pb-2 border-none d-flex justify-content-between align-items-center">
                     <h3 class="h4 text-dark-heading mb-0">Trips</h3>
                     <router-link to="/trips" class="btn h6 text-btn text-gold-heading uppercase">view all</router-link>
                  </div>
                  <div class="card-body px-4 pt-0 pb-4">
                     <div class="row justify-content-between">

                        <div class="col-lg-8">
                           <GoogleMap :height="'400'" />
                        </div>
                        <div class="col-lg-4">
                           <scrollable-content :height="400">
                              <template>
                                 <div class="card border rounded mb-2 mr-3" v-for="trip in trips" :key="trip.id">
                                    <div class="position-relative mr-2">
                                       <div class="itinerary-block p-4">
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
                              </template>
                           </scrollable-content>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-lg-6 mb-4">
               <div class="card border">
                  <div class="card-header bg-white p-4 pb-2 border-none d-flex justify-content-between align-items-center">
                     <h3 class="h4 text-dark-heading mb-0">Vehicles</h3>
                     <router-link to="/vehicles" class="btn text-btn text-gold-heading uppercase h6">view all</router-link>
                  </div>
                  <div class="card-body px-4 pt-0 pb-4">
                     <div class="row align-items-center">
                        <div class="col-lg-12">
                           <div class="card mb-2">
                              <button class="btn main-btn text-left rounded border bg-gray-light">
                                 <svg id="_03_Login" data-name="03 Login" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16.905 16.905">
                                    <path id="Path_179" data-name="Path 179" d="M231.825,16.905A.825.825,0,0,1,231,16.08V.825a.825.825,0,1,1,1.651,0V16.08A.825.825,0,0,1,231.825,16.905Z" transform="translate(-223.373)" fill="rgba(34,34,51,0.7)"></path>
                                    <path id="Path_180" data-name="Path 180" d="M16.08,232.651H.825a.825.825,0,1,1,0-1.651H16.08a.825.825,0,1,1,0,1.651Z" transform="translate(0 -223.373)" fill="rgba(34,34,51,0.7)"></path>
                                 </svg>

                                 <span class="d-inline-block ms-2">Add vehicle</span>
                              </button>
                           </div>
                        </div>
                        <div class="col-lg-12">
                           <DoughnutChart/>
                        </div>
                        <!-- <div class="col-lg-6">
                           <div class="status-item st-b-on-trip">
                              <h5 class="h5 text-dark-heading ">On trip</h5>
                              <h6 class="h6 text-dark-content">50</h6>
                           </div>
                           <div class="status-item st-b-available">
                              <h5 class="h5 text-dark-heading ">Available</h5>
                              <h6 class="h6 text-dark-content">20</h6>
                           </div>
                           <div class="status-item st-b-out-of-service">
                              <h5 class="h5 text-dark-heading ">Out of service</h5>
                              <h6 class="h6 text-dark-content">10</h6>
                           </div>
                        </div> -->
                     </div>
                  </div>
               </div>
            </div>
            <!--  -->
            <div class="col-lg-6 mb-4">
               <div class="card border h-100">
                  <div class="card-header bg-white px-4 pb-2 pt-4 border-none d-flex justify-content-between align-items-center">
                     <h3 class="h4 text-dark-heading mb-0">Drivers</h3>
                     <router-link to="/drivers" class="btn text-btn text-gold-heading uppercase h6">view all</router-link>
                  </div>
                  <div class="card-body px-4 pt-0 pb-4">
                     <div class="row align-items-center">
                        <div class="col-lg-12">
                           <div class="card mb-2">
                              <add-btn>Add driver</add-btn>
                           </div>
                        </div>
                        <div class="col-lg-12">
                           <BarChart />
                        </div>

                     </div>
                  </div>
               </div>
            </div>
         </div>
      </template>

      <template v-if="!loading">
         <loading-component />
      </template>

   </div>
</template>

<script>
// mixins
import loading from "../mixins/loading";

// global components
import StatisticCard from "../components/global/StatisticCard.vue";
import ScrollableContent from "../components/global/ScrollableContent.vue";
import GoogleMap from "../components/global/GoogleMap.vue";
import LoadingComponent from "@/views/LoadingComponent.vue";
// chart components
import DoughnutChart from "../components/chart/DoughnutChart.vue";
import BarChart from "../components/chart/BarChart.vue";

import AddBtn from "../../../components/buttons/AddBtn";

export default {
	name: "dashboard",
	components: {
		LoadingComponent,
		AddBtn,
		StatisticCard,
		ScrollableContent,
		DoughnutChart,
		BarChart,
		GoogleMap
	},
	mixins: [loading],
	mounted() {
		this.loadingData();
	},
	computed: {
		trips: {
			get() {
				return this.$store.state.adminPanel.trips;
			},
			set(value) {
				this.$store.commit("SET_TRIPS", value);
			}
		},
		overviewStatistics: {
			get() {
				return this.$store.state.adminPanel.overviewStatistics;
			},
			set(value) {
				this.$store.commit("SET_OVERVIEW_STATISTICS", value);
			}
		}
	},
	methods: {
		loadingData() {
			const $this = this;
			setTimeout(function() {
				$this.loading = true;
			}, 700);
			this.$store.dispatch("loadTrips");
			this.$store.dispatch("loadOverviewStatistics");
		}
	},
	destroyed() {
		this.loading = false;
	}
};
</script>

<style>
</style>
