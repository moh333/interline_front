<template>
   <!--  -->
   <div class="listing-table">

      <!-- <h4 class="h4 text-dark-heading mb-1">{{ $t('vehicles[0].name') }}</h4> -->
      <template>
         <!-- v-if="vehicles.length" -->
         <template>
            <div class="row">
               <div class="col-lg-12 mt-3">
                  <div class="card bg-transparent px-4 pb-2">
                     <div class="card-body p-0">
                        <div class="row align-items-center">
                           <div class="col-lg-2 pe-0">
                              <div class="position-relative me-2">
                                 <div class="d-flex align-items-center">
                                    <div class="flex-item">
                                       <h4 class="h5 text-dark-heading mb-0">{{$t('nav.vehicles')}}</h4>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-lg-2">
                              <div class="driver-info">
                                 <h4 class="h5 text-dark-heading text-center mb-0"> {{$t('v_table.class')}} </h4>
                              </div>
                           </div>
                           <div class="col-lg-2">
                              <div class="driver-info">
                                 <h4 class="h5 text-dark-heading text-center mb-0">{{$t('v_table.type')}}</h4>
                              </div>
                           </div>
                           <div class="col-lg-2">
                              <div class="driver-info">
                                 <h4 class="h5 text-dark-heading text-center mb-0">{{$t('v_table.category')}}</h4>
                              </div>
                           </div>
                           <div class="col-lg-2">
                              <div class="driver-info">
                                 <h4 class="h5 text-dark-heading text-center mb-0">{{$t('v_table.size')}}</h4>
                              </div>
                           </div>
                           <div class="col-lg-2">
                              <div class="driver-info">
                                 <h4 class="h5 text-dark-heading text-center mb-0">Status</h4>
                              </div>
                           </div>

                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <draggable v-model="vehicles">
               <transition-group tag="div" class="row" name="item" mode="out-in">
                  <div class="col-lg-12 mb-2" v-for="vehicle in vehicles" :key="vehicle.id">
                     <div class="card int-trip border p-4 has-action-bar">
                        <div class="card-body p-0">
                           <div class="row align-items-center">
                              <div class="col-lg-2 pe-0">
                                 <div class="position-relative me-2">
                                    <div class="d-flex align-items-center">
                                       <div class="flex-item">
                                          <h4 class="h4 text-dark-heading mb-1 capitalize">{{ vehicle.name }}</h4>
                                          <!-- <p class="f4 text-dark-content mb-0">{{vehicle.car.license}}</p> -->
                                       </div>
                                    </div>

                                 </div>
                              </div>
                              <div class="col-lg-2">
                                 <div class="vehicle-info">
                                    <h4 class="h5 text-dark-heading text-center mb-1 capitalize">{{ vehicle.v_class }}</h4>
                                 </div>
                              </div>
                              <div class="col-lg-2">
                                 <div class="vehicle-info">
                                    <h4 class="h5 text-dark-heading text-center mb-1 capitalize">{{vehicle.type}}</h4>
                                 </div>
                              </div>
                              <div class="col-lg-2">
                                 <div class="vehicle-info">
                                    <h4 class="h5 text-dark-heading text-center mb-1 capitalize">{{vehicle.category}}</h4>
                                 </div>
                              </div>
                              <div class="col-lg-2">
                                 <div class="vehicle-info">
                                    <h4 class="h5 text-dark-heading text-center mb-1 capitalize">{{vehicle.size}}</h4>
                                 </div>
                              </div>
                              <div class="col-lg-2">
                                 <div class="vehicle-info text-center">
                                    <h4 class="h5 item-status text-center text-dark-heading mb-1" :class="vehicle.status.split(' ').join('-')">{{vehicle.status}}</h4>
                                 </div>
                              </div>
                              <div class="actions-on-hover">
                                 <router-link class="btn text-btn live-icon border border-radius-rounded mr-2" tag="button" type="button" v-if="vehicle.status === 'on the road'" to="/rout-track" v-b-tooltip.hover title="Live track">
                                    <live-icon />
                                 </router-link>
                                 <router-link class="btn h5 mb-0 bg-gray-light border-radius-rounded px-3 py-1 int-trip mr-2" :to="{name: 'vehicle-profile', params: {id: vehicle.id}}">
                                    More details
                                 </router-link>

                                 <remove-btn @click.native="removeItem(vehicle.id)"></remove-btn>

                                 <router-link :to="{name: 'edit-vehicle', params: {id: vehicle.id}}" class="btn bg-gray-light int-trip crlc-icon mr-2" v-b-tooltip.hover.top title="Edit">
                                    <edit-icon />
                                 </router-link>
                              </div>

                           </div>
                        </div>
                     </div>
                  </div>

               </transition-group>
            </draggable>
         </template>

         <div v-if="!vehicles.length" class="card text-center mt-3 bg-transparent p-4">
            <div class="">
               <svg class="fill-blue-300" id="Layer_1" height="45px" viewBox="0 0 32 32" width="45px" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1">
                  <path d="m27 6h-1.39l-1.04 2h2.43a1.0029 1.0029 0 0 1 1 1v1a1.0029 1.0029 0 0 1 -1 1h-3.99l-9.36 18h13.35a3.0088 3.0088 0 0 0 3-3v-17a3.0088 3.0088 0 0 0 -3-3zm-22 5a1.0029 1.0029 0 0 1 -1-1v-4a1.0029 1.0029 0 0 1 1-1h6.59l2.7 2.71a1.0327 1.0327 0 0 0 .71.29h3.31l1.04-2h-3.94l-2.7-2.71a1.0327 1.0327 0 0 0 -.71-.29h-7a3.0088 3.0088 0 0 0 -3 3v20a3.0088 3.0088 0 0 0 3 3h2.39l9.36-18z" />
               </svg>
            </div>
            <h4 class="h4 text-dark-heading mt-3">No list founded</h4>
         </div>
         <div class="col-lg-12 justify-self-center text-center mt-2">

         </div>
      </template>
   </div>
</template>

<script>
import draggable from "vuedraggable";
import RemoveBtn from "@/components/buttons/RemoveBtn.vue";
import EditIcon from "@/components/svgs/EditIcon.vue";
import LiveIcon from "@/components/svgs/LiveIcon.vue";
// import i18n from "@/i18n";
// import { mapState } from "vuex";

export default {
	name: "vehicle-card-list",
	components: {
		draggable,
		RemoveBtn,
		EditIcon,
		LiveIcon
		// AddBtn
	},
	mounted() {
		this.$store.dispatch("loadVehicles");
		// console.log(this.$t("message.vehicles"));
	},
	data() {
		return {};
	},

	computed: {
		// //  //  ...mapGetters(["ordersFilter"]),
		// ...mapState(["vehicles"]),

		// vehicles() {
		// 	return this.$store.state.adminPanel.vehicles;
		// },
		locale() {
			return this.$store.state.locale;
		},
		vehicles: {
			get() {
				return this.$store.state.adminPanel.vehicles;
			},
			set(value) {
				this.$store.commit("SET_VEHICLES", value);
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

		vehicleslimit() {
			return this.vehicles.slice(
				(this.currentPage - 1) * this.perPage,
				this.currentPage * this.perPage
			);
		}
	},
	methods: {
		removeItem(id) {
			this.notify();
			return this.$store.commit("REMOVE_ITEM", id);
		},
		updateItem(id) {
			return this.$store.commit("UPDATE_ITEM", id);
		},
		notify() {
			this.$notify({
				group: "remove",
				type: "remove-notify",
				title: "You removed an item form the list",
				duration: 10000,
				speed: 1000
			});
		}
	},

	watch: {}
};
</script>

<style>
</style>
