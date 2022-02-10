<template>
   <div class="p_layout pt-4">
      <template v-if="loading">

         <!--  -->
         <statistic-card :statistics="ordersStatistics">
            <template v-slot="slotProps">
               <h4 class="h4 text-dark-content mb-1 capitalize">{{ slotProps.statistic.type }}</h4>
               <h3 class="h3 text-dark-heading mb-0 capitalize">
                  {{ slotProps.statistic.quantity }}
               </h3>
            </template>
         </statistic-card>
         <!--  -->
         <div class="filltering-items">
            <div class="d-flex justify-content-between align-items-center">
               <div class="flex-item d-flex ">

                  <div class="form-check filter-item bg-white text-dark-heading h6 mb-0 mr-2 border rounded uppercase" v-for="statistic in ordersStatistics" :key="statistic.type" :class="{active: statistic.type === filterByOrder}">
                     <input class="form-check-input" type="radio" name="flexRadioDefault" :value="statistic.type" v-model="filterByOrder" :id="statistic.type.split(' ').join('-')" @change="selectedItem(statistic.type)">
                     <label class="form-check-label px-3 py-2" :for="statistic.type.split(' ').join('-')">
                        {{statistic.type}}
                     </label>
                  </div>

               </div>
               <div class="flex-item">
                  <!-- :total-rows="rows" -->
                  <b-pagination v-model="currentPage" :per-page="perPage" aria-controls="ordersFilter"></b-pagination>
               </div>
            </div>
         </div>
         <!--  -->
         <order-card-list></order-card-list>

      </template>
      <template v-if="!loading">
         <loading-component />
      </template>
   </div>
</template>

<script>
// mixins
import loading from "../mixins/loading";

import LoadingComponent from "@/views/LoadingComponent.vue";

const OrderCardList = () => ({
	component: import(/*webpackPrefetch: true*/ "../components/orders/OrderCardList.vue"),
	loading: LoadingComponent
});

const StatisticCard = () => ({
	component: import(/*webpackPrefetch: true*/ "../components/global/StatisticCard.vue"),
	loading: LoadingComponent
});

export default {
	name: "orders",
	components: {
		OrderCardList,
		StatisticCard,
		LoadingComponent
	},
	mixins: [loading],
	mounted() {},
	created() {
		this.loadingData();
	},
	data() {
		return {};
	},
	computed: {
		ordersStatistics() {
			return this.$store.state.adminPanel.ordersStatistics;
		},
		filterByOrder: {
			get() {
				return this.$store.state.adminPanel.filterByOrder;
			},
			set(value) {
				this.$store.commit("filterByOrder", value);
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
		// rows() {
		// 	// return this.ordersFilter.length;
		// 	return this.ordersFilter;
		// }
	},
	methods: {
		selectedItem(item) {
			this.activeItem = item;
		},
		loadingData() {
			const $this = this;
			setTimeout(function() {
				$this.loading = true;
			}, 700);
			$this.$store.dispatch("loadOrdersStatistics");
		}
	},
	destroyed() {
		this.loading = false;
	}
};
</script>

<style>
</style>
