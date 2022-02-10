<template>
   <div class="p_layout pt-4">

      <template v-if="loading">
         <statistic-card :statistics="invoicesStatistics">
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

                  <div class="form-check filter-item bg-white text-dark-heading h6 mr-2 border rounded uppercase" v-for="statistic in invoicesStatistics" :key="statistic.type" :class="{active: statistic.type === filterByinvoices}">
                     <input class="form-check-input" type="radio" name="flexRadioDefault" :value="statistic.type" v-model="filterByinvoices" :id="statistic.type.split(' ').join('-')" @change="selectedItem(statistic.type)">
                     <label class="form-check-label px-3 py-2" :for="statistic.type.split(' ').join('-')">
                        {{statistic.type}}
                     </label>
                  </div>

               </div>
               <div class="flex-item">
                  <b-pagination v-model="currentPage" :per-page="perPage" aria-controls="ordersFilter"></b-pagination>
                  <!-- :total-rows="rows"  -->
               </div>
            </div>

         </div>
         <invoice-card-list></invoice-card-list>
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
import LoadingStatisticComponent from "@/views/LoadingStatisticComponent.vue";

const InvoiceCardList = () => ({
	component: import(/*webpackPrefetch: true*/ "../components/invoices/InvoiceCardList.vue"),
	loading: LoadingComponent
});

const StatisticCard = () => ({
	component: import(/*webpackPrefetch: true*/ "../components/global/StatisticCard.vue"),
	loading: LoadingStatisticComponent
});

export default {
	name: "invoices",
	components: {
		InvoiceCardList,
		LoadingComponent,
		StatisticCard
	},
	mounted() {
		this.loadingData();
	},
	data() {
		return {};
	},
	mixins: [loading],
	computed: {
		invoicesFilter() {
			return this.$store.getters.invoicesFilter;
		},
		filterByinvoices: {
			get() {
				return this.$store.state.adminPanel.filterByinvoices;
			},
			set(value) {
				this.$store.commit("filterByinvoices", value);
			}
		},
		invoicesStatistics: {
			get() {
				return this.$store.state.adminPanel.invoicesStatistics;
			},
			set(value) {
				this.$store.commit("SET_INVOICES_STATISTICS", value);
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
		// 	return this.invoicesFilter.length;
		// }
	},
	methods: {
		selectedItem(item) {
			this.activeItem = item;
		},
		loadingData() {
			const $this = this;
			this.$store.dispatch("loadInvoiceStatistics");
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
