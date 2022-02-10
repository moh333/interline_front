<template>

   <div class="p_layout pt-4 trip-page inner-page d-flex flex-column">

      <template v-if="loading">

         <!--  -->

         <statistic-card :statistics="tripsStatistics">
            <template v-slot="slotProps">
               <h4 class="h4 text-dark-content mb-1 capitalize">{{ slotProps.statistic.type }}</h4>
               <h3 class="h3 text-dark-heading mb-0 capitalize">
                  {{ slotProps.statistic.quantity }}
               </h3>
            </template>
         </statistic-card>
         <TripVeiw></TripVeiw>

         <!--  -->
         <!-- filltering items -->
         <!-- <div class="filltering-items mb-2">
            <div class="d-flex justify-content-between align-items-center">
               <div class="flex-item d-flex ">

                  <div class="form-check filter-item bg-white text-dark-heading h6 mr-2 border rounded uppercase" v-for="statistic in tripsStatistics" :key="statistic.type" :class="{'active': statistic.type === filterByTrip}">
                     <input class="form-check-input" type="radio" name="flexRadioDefault" :value="statistic.type" v-model="filterByTrip" :id="statistic.type.split(' ').join('-')" @change="selectedItem(statistic.type)">
                     <label class="form-check-label px-3 py-2" :for="statistic.type.split(' ').join('-')">
                        {{statistic.type}}
                     </label>
                  </div>

               </div>
               <div class="flex-item">
                  <b-pagination v-model="currentTripPage" :per-page="perPage" aria-controls="tripsFilter"></b-pagination>
               </div>
            </div>

         </div> -->
         <!--  -->

         <!-- <button @click="demoViewMode('day')">Day View Mode</button>
         <button @click="demoViewMode('week')">Week View Mode</button>
         <button @click="demoViewMode('month')">Month View Mode</button> -->

         <!-- <trip-card-list></trip-card-list> -->
      </template>

      <template v-if="!loading">
         <loading-component />
      </template>
   </div>

</template>

<script>
// mixins
import loading from "../mixins/loading";

import TripVeiw from "../components/trips/TripVeiw.vue";
import LoadingComponent from "@/views/LoadingComponent.vue";
import LoadingStatisticComponent from "@/views/LoadingStatisticComponent.vue";

// const TripCardList = () => ({
// 	component: import(/*webpackPrefetch: true*/ "../components/trips/TripCardList.vue"),
// 	loading: LoadingComponent
// });

const StatisticCard = () => ({
	component: import(/*webpackPrefetch: true*/ "../components/global/StatisticCard.vue"),
	loading: LoadingStatisticComponent
});

export default {
	name: "trips",
	components: {
		// TripCardList,
		TripVeiw,
		StatisticCard,
		LoadingComponent
	},
	mixins: [loading],
	mounted() {
		this.loadingData();
	},
	created() {},
	data() {
		return {
			mode: "day",
			tasks: [
				{
					id: "1",
					name: "Hello",
					start: "2021-08-01",
					end: "2021-08-05",
					hasddependencies: false,
					progress: 10
				},
				{
					id: "2",
					name: "World",
					start: "2021-08-06",
					end: "2021-08-10",
					progress: 20,
					hasddependencies: true,
					dependencies: "1"
				},
				{
					id: "3",
					name: "From",
					start: "2021-08-10",
					end: "2021-08-15",
					progress: 30,
					hasddependencies: true,
					dependencies: "2"
				},
				{
					id: "4",
					name: "Lloyd",
					start: "2021-08-15",
					end: "2021-08-20",
					progress: 40,
					hasddependencies: true,
					dependencies: "3, 2"
				}
			],
			debugEventLog: []
		};
	},
	computed: {
		tripsStatistics() {
			return this.$store.state.adminPanel.tripsStatistics;
		},
		tripsFilter() {
			return this.$store.getters.tripsFilter;
		},
		rows() {
			return this.tripsFilter.length;
		},
		filterByTrip: {
			get() {
				return this.$store.state.adminPanel.filterByTrip;
			},
			set(value) {
				this.$store.commit("filterByTrip", value);
			}
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
		activeItem: {
			get() {
				return this.$store.state.adminPanel.activeItem;
			},
			set(value) {
				this.$store.commit("activeItem", value);
			}
		}
	},
	methods: {
		selectedItem(item) {
			this.activeItem = item;
		},
		loadingData() {
			const $this = this;
			this.$store.dispatch("loadTripsStatistics");
			setTimeout(function() {
				$this.loading = true;
			}, 400);
		},
		addRandomTask() {
			var id = (this.tasks.length + 1) * 2;
			this.tasks.push({
				id: id.toString(),
				name: "new trip",
				start: "2021-08-01",
				end: "2021-08-05",
				progress: Math.random() * 100
			});
		},
		demoViewMode(viewMode) {
			this.mode = viewMode;
		}
	},
	destroyed() {
		this.loading = false;
	}
};
</script>

<style>
</style>
