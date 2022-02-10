<template>
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
                           <h4 class="h5 text-dark-heading text-center mb-0">date</h4>
                        </div>
                     </div>
                     <div class="col-lg-2">
                        <div class="driver-info">
                           <h4 class="h5 text-dark-heading text-center mb-0">price</h4>
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
      <draggable v-model="invoices">
         <transition-group tag="div" class="row" name="item" mode="out-in">

            <div class="col-lg-12 mb-2" v-for="invoice in invoiceslimit" :key="invoice.id">
               <div class="card int-trip border p-3">
                  <div class="card-body p-0">
                     <div class="row align-items-center">
                        <div class="col-lg-1">
                           <div class="vehicle-info">
                              <h4 class="h5 text-dark-heading mb-0">{{invoice.id}}</h4>
                           </div>
                        </div>
                        <div class="col-lg-4 pe-0">
                           <div class="position-relative me-2">
                              <div class="d-flex align-items-center">
                                 <div class="flex-item ms-3">
                                    <h4 class="h5 text-dark-heading mb-0">{{invoice.name}}</h4>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div class="col-lg-2">
                           <div class="vehicle-info">
                              <h4 class="h5 text-dark-heading text-center mb-0">{{invoice.date}}</h4>
                           </div>
                        </div>
                        <div class="col-lg-2">
                           <div class="vehicle-info">
                              <h4 class="h5 text-dark-heading text-center mb-0">{{invoice.price}}</h4>
                           </div>
                        </div>
                        <div class="col-lg-2">
                           <div class="vehicle-info text-center">
                              <h4 class="h5 item-status text-dark-heading mb-0" :class="invoice.status.split(' ').join('-')">{{invoice.status}}</h4>
                           </div>
                        </div>
                        <div class="col-1">

                           <div class="dropdown text-center w-auto">
                              <button class="btn text-btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                 <svg id="Glyph" enable-background="new 0 0 32 32" height="24" viewBox="0 0 32 32" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path id="XMLID_294_" d="m13 16c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3z" />
                                    <path id="XMLID_295_" d="m13 26c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3z" />
                                    <path id="XMLID_297_" d="m13 6c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3z" />
                                 </svg>
                              </button>
                              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                 <li>
                                    <a class="dropdown-item" href="#" @click="removeItem(invoice.id)">
                                       Delet
                                    </a>
                                 </li>
                                 <li>
                                    <!-- <router-link class="dropdown-item" to="/vehicle/edit">Edit</router-link> -->
                                 </li>
                                 <li>
                                    <!-- <router-link class="dropdown-item" :to="{name: 'vehicle-profile', params: {id: vehicle.id}}">Profile</router-link> -->
                                 </li>
                              </ul>
                           </div>
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

export default {
	name: "invoice-card-list",
	components: {
		draggable
	},
	mounted() {
		this.$store.dispatch("loadInvoice");
	},
	data() {
		return {};
	},
	computed: {
		//  //  ...mapGetters(["ordersFilter"]),

		invoices: {
			get() {
				return this.$store.state.adminPanel.invoices;
			},
			set(value) {
				this.$store.commit("SET_INVOICES", value);
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

		invoiceslimit() {
			return this.invoices.slice(
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
