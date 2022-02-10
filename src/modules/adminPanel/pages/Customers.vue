<template>
   <div class="p_layout pt-4">
      <!--  -->
      <statistic-card :statistics="customersStatistics">
         <template v-slot="slotProps">
            <h4 class="h4 text-dark-content mb-1 capitalize">{{ slotProps.statistic.type }}</h4>
            <h3 class="h3 text-dark-heading mb-0 capitalize">
               {{ slotProps.statistic.quantity }}
            </h3>
         </template>
      </statistic-card>

      <customer-card-list></customer-card-list>
   </div>
</template>

<script>
// mixins
import loading from "../mixins/loading";

import LoadingComponent from "@/views/LoadingComponent.vue";
import LoadingStatisticComponent from "@/views/LoadingStatisticComponent.vue";
const CustomerCardList = () => ({
	component: import(/*webpackPrefetch: true*/ "../components/customers/CustomerCardList.vue"),
	loading: LoadingComponent
	// error: ErrorComponent,
});

const StatisticCard = () => ({
	component: import(/*webpackPrefetch: true*/ "../components/global/StatisticCard.vue"),
	loading: LoadingStatisticComponent
	// error: ErrorComponent,
});

export default {
	name: "customers",
	components: {
		CustomerCardList,
		StatisticCard
	},
	mixins: [loading],
	data() {
		return {};
	},
	created() {
		this.loadingData();
	},
	computed: {
		customersStatistics: {
			get() {
				return this.$store.state.adminPanel.customersStatistics;
			},
			set(value) {
				this.$store.commit("customersStatistics", value);
			}
		}
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
		}
	},
	destroyed() {
		this.loading = false;
	}
};
</script>

<style>
</style>
