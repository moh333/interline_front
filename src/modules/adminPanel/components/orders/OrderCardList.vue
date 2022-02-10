<template>
   <div class="listing-table">

      <template v-if="orderslimit.length > 0">
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
                        <div class="col-lg-4 pe-0">
                           <div class="position-relative me-2">
                              <div class="d-flex align-items-center">
                                 <div class="flex-item ms-3">
                                    <h4 class="h5 text-dark-heading mb-0">Customer name</h4>
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
                              <h4 class="h5 text-dark-heading text-center mb-0">Location</h4>
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
         <draggable v-model="orders" draggable=".item">
            <transition-group tag="div" class="row" name="item" mode="out-in">

               <div class="col-lg-12 mb-2 item" v-for="order in orders" :key="order.id">

                  <div class="card int-trip border has-action-bar p-3">
                     <div class="card-body p-0">
                        <div class="row align-items-center">
                           <div class="col-lg-1">
                              <div class="order-info">
                                 <h4 class="h5 text-dark-heading mb-0">{{order.id}}</h4>
                              </div>
                           </div>
                           <div class="col-lg-4 pe-0">
                              <div class="position-relative me-2">
                                 <div class="d-flex align-items-center">
                                    <div class="flex-item ms-3">
                                       <h4 class="h5 text-dark-heading mb-0">{{order.name}}</h4>
                                    </div>
                                 </div>
                              </div>
                           </div>

                           <div class="col-lg-2">
                              <div class="vehicle-info">
                                 <h4 class="h5 text-dark-heading text-center mb-0">{{order.phone}}</h4>
                              </div>
                           </div>
                           <div class="col-lg-2">
                              <div class="vehicle-info">
                                 <h4 class="h5 text-dark-heading text-center mb-0">{{order.Location}}</h4>
                              </div>
                           </div>
                           <div class="col-lg-2">
                              <div class="vehicle-info text-center">
                                 <h4 class="h5 item-status text-dark-heading mb-0" :class="order.status.split(' ').join('-')">{{order.status}}</h4>
                              </div>
                           </div>
                           <div class="actions-on-hover">
                              <router-link class="btn text-btn live-icon border border-radius-rounded mr-2" tag="button" type="button" v-if="order.status === 'on the road'" to="/rout-track" v-b-tooltip.hover title="Live track">
                                 <live-icon />
                              </router-link>
                              <router-link class="btn h5 mb-0 bg-gray-light border-radius-rounded px-3 py-1 int-trip mr-2" :to="{name: 'vehicle-profile', params: {id: order.id}}">
                                 More details
                              </router-link>

                              <remove-btn @click.native="removeItem(order.id)"></remove-btn>

                              <router-link :to="{name: 'edit-order', params: {id: order.id}}" class="btn bg-gray-light int-trip crlc-icon mr-2" v-b-tooltip.hover.top title="Edit">
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
      <template v-if="orderslimit.length == 0">
         <div class="col-lg-12 mb-2">

         </div>
      </template>

   </div>
</template>

<script>
import draggable from "vuedraggable";
import RemoveBtn from "@/components/buttons/RemoveBtn.vue";
import EditIcon from "@/components/svgs/EditIcon.vue";
// import Api from "@/services/api";
// import axios from "axios";
// import { mapState } from "vuex";

export default {
	name: "order-card-list",
	components: {
		draggable,
		RemoveBtn,
		EditIcon
	},

	mounted() {
		this.$store.dispatch("loadOrders");
	},
	data() {
		return {
			isDragging: false
			// orders: []
		};
	},
	computed: {
		loading: {
			get() {
				return this.$store.state.adminPanel.loading;
			},
			set(value) {
				this.$store.commit("loading", value);
			}
		},
		orders: {
			get() {
				return this.$store.state.adminPanel.orders;
			},
			set(value) {
				this.$store.commit("SET_ORDERS", value);
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

		orderslimit() {
			return this.orders.slice(
				(this.currentPage - 1) * this.perPage,
				this.currentPage * this.perPage
			);
		}
	},
	methods: {
		removeItem(id) {
			return this.$store.commit("REMOVE_ITEM", id);
		}
	},

	watch: {
		isDragging(newValue) {
			if (newValue) {
				this.delayedDragging = true;
				return;
			}
			this.$nextTick(() => {
				this.delayedDragging = false;
			});
		}
	}
};
</script>

<style>
</style>
