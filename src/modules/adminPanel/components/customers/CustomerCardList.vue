<template>
   <div class="listing-table mt-3">

      <!--  -->
      <template v-if="customers.length">
         <div class="filltering-items">

            <div class="d-flex justify-content-between align-items-center">
               <div class="flex-item col-6 mb-3 px-0">
                  <input v-model="filter" type="search" class="search-in-table form-control" id="searchTabelInput" placeholder="Type and search">
               </div>
               <div class="flex-item mb-3">
                  <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="customersTable"></b-pagination>
               </div>

            </div>

         </div>
         <!--  -->

         <b-table id="customersTable" :sort-by.sync="sortBy" :sticky-header="stickyHeader" responsive :items="customers" :fields="customersFields" bordered :current-page="currentPage" :per-page="perPage" :filter="filter">
            <template #head()="scope">
               <div class="text-nowrap h5 mb-0">
                  {{ scope.label }}
               </div>
            </template>
            <template #head(actions)="scope">
               <div class="text-nowrap text-center h5 mb-0">
                  {{ scope.label }}
               </div>
            </template>
            <template #cell(typ)="data">
               <select class="form-select cell-edit-input p-2" v-if="selectedRow[data.index] && selectedCell === 'typ'" v-model="customers[data.index].typ">
                  <option>END</option>
                  <option>VTP</option>
               </select>

               <div class="text-nowrap h5 mb-0 edit-cell" v-else @click="editCell(data, 'typ')">
                  {{ data.value }}
               </div>
            </template>
            <template #cell(KRG)="data">
               <input type="number" class="form-control cell-edit-input p-2" v-if="selectedRow[data.index] && selectedCell === 'KRG'" v-model="customers[data.index].KRG">
               <div class="text-nowrap h5 mb-0 edit-cell" v-else @click="editCell(data, 'KRG')">
                  {{ data.value }}
               </div>
            </template>
            <template #cell(PriceGroup)="data">
               <input type="number" class="form-control cell-edit-input p-2" v-if="selectedRow[data.index] && selectedCell === 'PriceGroup'" v-model="customers[data.index].PriceGroup">
               <div class="text-nowrap h5 mb-0 edit-cell" v-else @click="editCell(data, 'PriceGroup')">
                  {{ data.value }}
               </div>
            </template>
            <template #cell(Tempo_LIM)="data">
               <input type="number" class="form-control cell-edit-input p-2" v-if="selectedRow[data.index] && selectedCell === 'Tempo_LIM'" v-model="customers[data.index].Tempo_LIM">
               <div class="text-nowrap h5 mb-0 edit-cell" v-else @click="editCell(data, 'Tempo_LIM')">
                  {{ data.value }}
               </div>
            </template>
            <template #cell(MinDeuer_LIM)="data">
               <input type="number" class="form-control cell-edit-input p-2" v-if="selectedRow[data.index] && selectedCell === 'MinDeuer_LIM'" v-model="customers[data.index].MinDeuer_LIM">
               <div class="text-nowrap h5 mb-0 edit-cell" v-else @click="editCell(data, 'MinDeuer_LIM')">
                  {{ data.value }}
               </div>
            </template>
            <!--  -->
            <template #cell(MaxDeuer_LIM)="data">
               <input type="number" class="form-control cell-edit-input p-2" v-if="selectedRow[data.index] && selectedCell === 'MaxDeuer_LIM'" v-model="customers[data.index].MaxDeuer_LIM">
               <div class="text-nowrap h5 mb-0 edit-cell" v-else @click="editCell(data, 'MaxDeuer_LIM')">
                  {{ data.value }}
               </div>
            </template>
            <!--  -->
            <template #cell(MinStrecke_LIM)="data">
               <input type="number" class="form-control cell-edit-input p-2" v-if="selectedRow[data.index] && selectedCell === 'MinStrecke_LIM'" v-model="customers[data.index].MinStrecke_LIM">
               <div class="text-nowrap h5 mb-0 edit-cell" v-else @click="editCell(data, 'MinStrecke_LIM')">
                  {{ data.value }}
               </div>
            </template>
            <!--  -->
            <template #cell(MaxStrecke_LIM)="data">
               <input type="number" class="form-control cell-edit-input p-2" v-if="selectedRow[data.index] && selectedCell === 'MaxStrecke_LIM'" v-model="customers[data.index].MaxStrecke_LIM">
               <div class="text-nowrap h5 mb-0 edit-cell" v-else @click="editCell(data, 'MaxStrecke_LIM')">
                  {{ data.value }}
               </div>
            </template>
            <!--  -->
            <template #cell(BUS_CancellationID)="data">
               <input type="number" class="form-control cell-edit-input p-2" v-if="selectedRow[data.index] && selectedCell === 'BUS_CancellationID'" v-model="customers[data.index].BUS_CancellationID">
               <div class="text-nowrap h5 mb-0 edit-cell" v-else @click="editCell(data, 'MaxStrecke_LIM')">
                  {{ data.value }}
               </div>
            </template>
            <!--  -->
            <template #cell(RAC_MinRentDuration)="data">
               <input type="number" class="form-control cell-edit-input p-2" v-if="selectedRow[data.index] && selectedCell === 'RAC_MinRentDuration'" v-model="customers[data.index].RAC_MinRentDuration">
               <div class="text-nowrap h5 mb-0 edit-cell" v-else @click="editCell(data, 'RAC_MinRentDuration')">
                  {{ data.value }}
               </div>
            </template>
            <!--  -->
            <template #cell(RAC_MaxRentDuration)="data">
               <input type="number" class="form-control cell-edit-input p-2" v-if="selectedRow[data.index] && selectedCell === 'RAC_MaxRentDuration'" v-model="customers[data.index].RAC_MaxRentDuration">
               <div class="text-nowrap h5 mb-0 edit-cell" v-else @click="editCell(data, 'RAC_MaxRentDuration')">
                  {{ data.value }}
               </div>
            </template>
            <!--  -->
            <template #cell(RAC_MaxRentDuration)="data">
               <input type="number" class="form-control cell-edit-input p-2" v-if="selectedRow[data.index] && selectedCell === 'RAC_MaxRentDuration'" v-model="customers[data.index].RAC_MaxRentDuration">
               <div class="text-nowrap h5 mb-0 edit-cell" v-else @click="editCell(data, 'RAC_MaxRentDuration')">
                  {{ data.value }}
               </div>
            </template>
            <!--  -->
            <template #cell(RAC_MinRentDistance)="data">
               <input type="number" class="form-control cell-edit-input p-2" v-if="selectedRow[data.index] && selectedCell === 'RAC_MinRentDistance'" v-model="customers[data.index].RAC_MinRentDistance">
               <div class="text-nowrap h5 mb-0 edit-cell" v-else @click="editCell(data, 'RAC_MinRentDistance')">
                  {{ data.value }}
               </div>
            </template>
            <!--  -->
            <template #cell(RAC_MaxRentDistance)="data">
               <input type="number" class="form-control cell-edit-input p-2" v-if="selectedRow[data.index] && selectedCell === 'RAC_MaxRentDistance'" v-model="customers[data.index].RAC_MaxRentDistance">
               <div class="text-nowrap h5 mb-0 edit-cell" v-else @click="editCell(data, 'RAC_MaxRentDistance')">
                  {{ data.value }}
               </div>
            </template>
            <!--  -->
            <template #cell(RAC_MaxRentDistance)="data">
               <input type="number" class="form-control cell-edit-input p-2" v-if="selectedRow[data.index] && selectedCell === 'RAC_MaxRentDistance'" v-model="customers[data.index].RAC_MaxRentDistance">
               <div class="text-nowrap h5 mb-0 edit-cell" v-else @click="editCell(data, 'RAC_MaxRentDistance')">
                  {{ data.value }}
               </div>
            </template>
            <!--  -->
            <template #cell(RAC_CancellationID)="data">
               <input type="number" class="form-control cell-edit-input p-2" v-if="selectedRow[data.index] && selectedCell === 'RAC_CancellationID'" v-model="items[data.index].RAC_CancellationID">
               <div class="text-nowrap h5 mb-0 edit-cell" v-else @click="editCell(data, 'RAC_CancellationID')">
                  {{ data.value }}
               </div>
            </template>
            <!--  -->
            <template #cell(CGO_AvgSpeed)="data">
               <input type="number" class="form-control cell-edit-input p-2" v-if="selectedRow[data.index] && selectedCell === 'CGO_AvgSpeed'" v-model="customers[data.index].CGO_AvgSpeed">
               <div class="text-nowrap h5 mb-0 edit-cell" v-else @click="editCell(data, 'CGO_AvgSpeed')">
                  {{ data.value }}
               </div>
            </template>
            <!--  -->
            <template #cell(CGO_MinRentDuration)="data">
               <input type="number" class="form-control cell-edit-input p-2" v-if="selectedRow[data.index] && selectedCell === 'CGO_MinRentDuration'" v-model="customers[data.index].CGO_MinRentDuration">
               <div class="text-nowrap h5 mb-0 edit-cell" v-else @click="editCell(data, 'CGO_MinRentDuration')">
                  {{ data.value }}
               </div>
            </template>
            <!--  -->
            <template #cell(CGO_MaxRentDuration)="data">
               <input type="number" class="form-control cell-edit-input p-2" v-if="selectedRow[data.index] && selectedCell === 'CGO_MaxRentDuration'" v-model="customers[data.index].CGO_MaxRentDuration">
               <div class="text-nowrap h5 mb-0 edit-cell" v-else @click="editCell(data, 'CGO_MaxRentDuration')">
                  {{ data.value }}
               </div>
            </template>
            <!--  -->
            <!--  -->
            <template #cell(CGO_MinRentDistance)="data">
               <input type="number" class="form-control cell-edit-input p-2" v-if="selectedRow[data.index] && selectedCell === 'CGO_MinRentDistance'" v-model="customers[data.index].CGO_MinRentDistance">
               <div class="text-nowrap h5 mb-0 edit-cell" v-else @click="editCell(data, 'CGO_MinRentDistance')">
                  {{ data.value }}
               </div>
            </template>
            <!--  -->
            <!--  -->
            <template #cell(CGO_MaxRentDistance)="data">
               <input type="number" class="form-control cell-edit-input p-2" v-if="selectedRow[data.index] && selectedCell === 'CGO_MaxRentDistance'" v-model="customers[data.index].CGO_MaxRentDistance">
               <div class="text-nowrap h5 mb-0 edit-cell" v-else @click="editCell(data, 'CGO_MaxRentDistance')">
                  {{ data.value }}
               </div>
            </template>
            <!--  -->
            <template #cell(CGO_CancellationID)="data">
               <input type="number" class="form-control cell-edit-input p-2" v-if="selectedRow[data.index] && selectedCell === 'CGO_CancellationID'" v-model="customers[data.index].CGO_CancellationID">
               <div class="text-nowrap h5 mb-0 edit-cell" v-else @click="editCell(data, 'CGO_CancellationID')">
                  {{ data.value }}
               </div>
            </template>
            <!--  -->
            <template #cell()="data">
               <div class="text-nowrap h5 mb-0">
                  {{ data.value }}
               </div>
            </template>
            <template #cell(actions)="data">
               <div class="text-nowrap d-flex">
                  <button class="btn bg-gray-light int-trip crlc-icon mr-2" @click="removeRowItem(data.item.kdNr)" v-b-tooltip.hover title="Delet">
                     <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 24 24" width="16px">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                     </svg>
                  </button>
                  <router-link :to="{name: 'customer-profile', params: {id: data.item.kdNr}}" class="btn bg-gray-light int-trip crlc-icon me-2" v-b-tooltip.hover title="More info">
                     <svg height="13px" viewBox="0 0 512 512" width="13px" xmlns="http://www.w3.org/2000/svg">
                        <g id="_03_Login" data-name="03 Login">
                           <path d="m256 512a25 25 0 0 1 -25-25v-462a25 25 0 0 1 50 0v462a25 25 0 0 1 -25 25z" />
                           <path d="m487 281h-462a25 25 0 0 1 0-50h462a25 25 0 0 1 0 50z" />
                        </g>
                     </svg>
                  </router-link>
               </div>
            </template>

         </b-table>
      </template>

      <div v-if="!customers" class="card text-center mt-3 bg-transparent p-4">
         <div class="">
            <svg class="fill-blue-300" id="Layer_1" height="45px" viewBox="0 0 32 32" width="45px" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1">
               <path d="m27 6h-1.39l-1.04 2h2.43a1.0029 1.0029 0 0 1 1 1v1a1.0029 1.0029 0 0 1 -1 1h-3.99l-9.36 18h13.35a3.0088 3.0088 0 0 0 3-3v-17a3.0088 3.0088 0 0 0 -3-3zm-22 5a1.0029 1.0029 0 0 1 -1-1v-4a1.0029 1.0029 0 0 1 1-1h6.59l2.7 2.71a1.0327 1.0327 0 0 0 .71.29h3.31l1.04-2h-3.94l-2.7-2.71a1.0327 1.0327 0 0 0 -.71-.29h-7a3.0088 3.0088 0 0 0 -3 3v20a3.0088 3.0088 0 0 0 3 3h2.39l9.36-18z" />
            </svg>
         </div>
         <h4 class="h4 text-dark-heading mt-3">No list founded</h4>
      </div>

   </div>
</template>

<script>
export default {
	name: "customer-card-list",
	data() {
		return {
			stickyHeader: true,
			totalRows: 1,
			perPage: 10,
			sortBy: "",
			filter: null,
			selectedRow: {},
			selectedCell: null
		};
	},
	computed: {
		customersStatistics: {
			get() {
				return this.$store.state.adminPanel.customersStatistics;
			},
			set(value) {
				this.$store.commit("SET_CUSTOMERS_STATISTICS", value);
			}
		},
		customersFilter() {
			return this.$store.getters.customersFilter;
		},
		customers: {
			get() {
				return this.$store.state.adminPanel.customers;
			},
			set(value) {
				this.$store.commit("SET_CUSTOMERS", value);
			}
		},
		customersFields: {
			get() {
				return this.$store.state.adminPanel.customersFields;
			},
			set(value) {
				this.$store.commit("SET_CUSTOMERS_FIELDS", value);
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

		customerslimit() {
			return this.customersFilter.slice(
				(this.currentPage - 1) * this.perPage,
				this.currentPage * this.perPage
			);
		},
		rows() {
			return this.customers.length;
		}
	},
	methods: {
		removeItem(id) {
			return this.$store.commit("REMOVE_ITEM", id);
		},
		removeRowItem(kdNr) {
			return (this.customers = this.customers.filter(
				item => item.kdNr !== kdNr
			));
		},
		editCell(data, name) {
			this.selectedCell = name;
			this.selectedRow = {
				[data.index]: true
			};
		},

		onFiltered(filteredItems) {
			// Trigger pagination to update the number of buttons/pages due to filtering
			this.totalRows = filteredItems.length;
			this.currentPage = 1;
		}
	},
	mounted() {
		this.$store.dispatch("loadCustomers");
		this.$store.dispatch("loadCustomersFields");
		this.$store.dispatch("loadCustomersStatistics");
	}
};
</script>

<style>
</style>
