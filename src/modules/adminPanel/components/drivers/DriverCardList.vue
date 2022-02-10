<template>
   <!--  -->
   <div class="listing-table">
      <div class="row">
         <div class="col-lg-12 mt-3">
            <div class="card bg-transparent px-3 pb-2">
               <div class="card-body p-0">
                  <div class="row align-items-center">
                     <div class="col-lg-1">
                        <div class="driver-info">
                           <h4 class="h5 text-dark-heading mb-0">ID</h4>
                        </div>
                     </div>
                     <div class="col-lg-4 pr-0">
                        <div class="position-relative me-2">
                           <div class="d-flex align-items-center">
                              <div class="flex-item ms-3">
                                 <h4 class="h5 text-dark-heading mb-0">Driver name</h4>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col-lg-2">
                        <div class="driver-info">
                           <h4 class="h5 text-dark-heading text-center mb-0">Phone</h4>
                        </div>
                     </div>
                     <div class="col-lg-2">
                        <div class="driver-info">
                           <h4 class="h5 text-dark-heading text-center mb-0">License</h4>
                        </div>
                     </div>
                     <div class="col-lg-1">
                        <div class="driver-info">
                           <h4 class="h5 text-dark-heading text-center mb-0">Reviews</h4>
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
      <draggable v-model="drivers">
         <transition-group tag="div" class="row" name="item" mode="out-in">

            <div class="col-lg-12 mb-2" v-for="driver in drivers" :key="driver.id">
               <div class="card int-trip border p-3  has-action-bar">
                  <div class="card-body p-0">
                     <div class="row align-items-center">
                        <div class="col-lg-1">
                           <div class="vehicle-info">
                              <h4 class="h5 text-dark-heading mb-0">{{driver.id}}</h4>
                           </div>
                        </div>
                        <div class="col-lg-4 pe-0">
                           <div class="position-relative me-2">
                              <div class="d-flex align-items-center">
                                 <div class="flex-item ms-3">
                                    <h4 class="h5 text-dark-heading mb-0">{{driver.driverName}}</h4>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div class="col-lg-2">
                           <div class="vehicle-info">
                              <h4 class="h5 text-dark-heading text-center mb-0">{{driver.phone}}</h4>
                           </div>
                        </div>
                        <div class="col-lg-2">
                           <div class="vehicle-info">
                              <h4 class="h5 text-dark-heading text-center mb-0">{{driver.license}}</h4>
                           </div>
                        </div>
                        <div class="col-lg-1">
                           <div class="vehicle-info">
                              <h4 class="h5 text-dark-heading text-center mb-0">({{driver.reviews.q}})</h4>
                           </div>
                        </div>
                        <div class="col-lg-2">
                           <div class="vehicle-info text-center">
                              <h4 class="h5 item-status text-dark-heading mb-0" :class="driver.status.split(' ').join('-')">{{driver.status}}</h4>
                           </div>
                        </div>

                        <div class="actions-on-hover">
                           <router-link class="btn text-btn live-icon border border-radius-rounded mr-2" tag="button" type="button" v-if="driver.status === 'on the road'" to="/rout-track" v-b-tooltip.hover title="Live track">
                              <live-icon />
                           </router-link>
                           <!-- <router-link :to="{name: 'vehicle-profile', params: {id: driver.id}}" class="btn bg-gray-light border-radius-rounded px-3 py-1 int-trip me-2" >
                                 open
                              </router-link> -->

                           <remove-btn @click.native="removeItem(driver.id)"></remove-btn>

                           <router-link :to="{name: 'edit-vehicle', params: {id: driver.id}}" class="btn bg-gray-light int-trip crlc-icon me-2" v-b-tooltip.hover.top title="Edit">
                              <edit-icon />
                           </router-link>
                        </div>

                     </div>
                  </div>
               </div>
            </div>
         </transition-group>
      </draggable>
   </div>
</template>

<script>
import draggable from "vuedraggable";
import RemoveBtn from "@/components/buttons/RemoveBtn.vue";
import EditIcon from "@/components/svgs/EditIcon.vue";
import LiveIcon from "@/components/svgs/LiveIcon.vue";

export default {
	name: "driver-card-list",
	components: {
		draggable,
		RemoveBtn,
		EditIcon,
		LiveIcon
	},
	mounted() {
		this.$store.dispatch("loadDrivers");
	},
	data() {
		return {};
	},
	computed: {
		//  //  ...mapGetters(["ordersFilter"]),
		// ...mapState({
		// 	orders: state => state.orders
		// }),

		driversFilter() {
			return this.$store.getters.driversFilter;
		},
		drivers: {
			get() {
				return this.$store.state.adminPanel.drivers;
			},
			set(value) {
				this.$store.commit("SET_DRIVERS", value);
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

		driverslimit() {
			return this.drivers.slice(
				(this.currentPage - 1) * this.perPage,
				this.currentPage * this.perPage
			);
		}
	},
	methods: {
		removeItem(id) {
			return this.$store.commit("REMOVE_ITEM", id);
		}
	}
};
</script>

<style>
</style>
