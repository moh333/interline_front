<template>
   <div class="p_layout pt-4">
      <template v-if="loading">

         <!--  -->
         <statistic-card :statistics="this.$t('vehicles_statistics')">
            <template v-slot="slotProps">
               <h4 class="h4 text-dark-content mb-1 capitalize">{{ slotProps.statistic.type }}</h4>
               <h3 class="h3 text-dark-heading mb-0 capitalize">
                  {{ slotProps.statistic.quantity }}
               </h3>
            </template>
         </statistic-card>
         <!--  -->
         <!--  -->
         <template v-if="vehicles.length">
            <div class="filltering-items">
               <div class="d-flex justify-content-between align-items-center">
                  <div class="flex-item d-flex ">

                     <div class="form-check filter-item bg-white text-dark-heading h6 mb-0 mr-2 border rounded uppercase" v-for="statistic in this.$t('vehicles_statistics')" :key="statistic.type" :class="{active: statistic.type === filterByVehicle}">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" :value="statistic.type" v-model="filterByVehicle" :id="statistic.type.split(' ').join('-')" @change="selectedItem(statistic.type)">
                        <label class="form-check-label px-3 py-2" :for="statistic.type.split(' ').join('-')">
                           {{statistic.type}}
                        </label>
                     </div>

                     <add-btn :routeLink="'/vehicles/add'" class="uppercase">{{$t('nav.add_vehicle')}}</add-btn>
                  </div>
                  <div class="flex-item">
                     <b-pagination v-model="currentPage" :per-page="perPage" aria-controls="ordersFilter"></b-pagination>
                  </div>
               </div>

            </div>
         </template>
         <vehicle-card-list></vehicle-card-list>
      </template>

      <template v-if="!loading">
         <loading-component />
      </template>
      <notifications group="remove" position="bottom center" />
      <notifications group="add" position="bottom center" />
   </div>
</template>

<script>
// mixins
import loading from "../mixins/loading";

// components
import LoadingComponent from "@/views/LoadingComponent";
import AddBtn from "@/components/buttons/AddBtn";

const VehicleCardList = () => ({
	component: import(/* webpackChunkName: "vehicles" */ "../components/vehicles/VehicleCardList.vue"),
	loading: LoadingComponent,
	// error: ErrorComponent,
	timeout: 3000
});

const StatisticCard = () => ({
	component: import(/* webpackChunkName: "statistic_card" */ "../components/global/StatisticCard.vue"),
	loading: LoadingComponent,
	// error: ErrorComponent,
	timeout: 3000
});

export default {
	name: "vehicles",
	components: {
		VehicleCardList,
		StatisticCard,
		LoadingComponent,
		AddBtn
	},
	mounted() {
		this.loadingData();
	},
	data() {
		return {};
	},
	mixins: [loading],
	computed: {
		vehicles: {
			get() {
				return this.$store.state.adminPanel.vehicles;
			},
			set(value) {
				this.$store.commit("VEHICLES_STATISTICS", value);
			}
		},
		vehiclesStatistics: {
			get() {
				return this.$store.state.adminPanel.vehiclesStatistics;
			},
			set(value) {
				this.$store.commit("SET_VEHICLES_STATISTICS", value);
			}
		},
		filterByVehicle: {
			get() {
				return this.$store.state.adminPanel.filterByVehicle;
			},
			set(value) {
				this.$store.commit("filterByVehicle", value);
			}
		},
		currentPage: {
			get() {
				return this.$store.state.adminPanel.currentPage;
			},
			set(value) {
				this.$store.commit("currentPage", value);
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
			this.$store.dispatch("loadVehiclesStatistics");
			setTimeout(function() {
				$this.loading = true;
			}, 400);
		}
	},
	destroyed() {
		this.loading = false;
	}
};
</script>

<style>
</style>
