<template>
   <div class="row">
      <template v-if="guests.length > 0">

         <div class="col-lg-12 mt-3">
            <div class="card bg-transparent px-3 pb-2">
               <div class="card-body p-0">
                  <div class="row align-items-center">
                     <div class="col-lg-2">
                        <div class="driver-info">
                           <h4 class="h5 text-dark-heading mb-0">Name</h4>
                        </div>
                     </div>
                     <div class="col-lg-5 pe-0">
                        <div class="position-relative me-2">
                           <div class="d-flex align-items-center">
                              <div class="flex-item ms-3">
                                 <h4 class="h5 text-dark-heading mb-0">Email</h4>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col-lg-3">
                        <div class="driver-info">
                           <h4 class="h5 text-dark-heading mb-0">Phone</h4>
                        </div>
                     </div>

                  </div>
               </div>
            </div>
         </div>

         <div class="col-lg-12 ">

            <div class="card int-trip border mb-2" v-for="guest in guests" :key="guest.id">
               <div class="card-body bg-transparent position-relative has-action-bar border-none">
                  <div class="row align-items-center">
                     <div class="col-lg-2 pr-0">
                        <h4 class="h5 text-dark-heading mb-0"> {{guest.name}} </h4>
                     </div>
                     <div class="col-lg-5 pr-0">
                        <div class="position-relative me-2">
                           <div class="d-flex align-items-center">
                              <div class="flex-item ms-3">
                                 <h4 class="h5 text-dark-heading mb-0">{{guest.email}}</h4>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col-lg-3">
                        <div class="driver-info">
                           <h4 class="h5 text-dark-heading mb-0"> {{guest.phone}} </h4>
                        </div>
                     </div>
                     <div class="actions-on-hover">
                        <router-link :to="{name: 'guest-profile', params: {id: guest.id}}" class="btn h5 mb-0 bg-gray-light border-radius-rounded px-3 py-1 int-trip mr-2">
                           More details
                        </router-link>
                        <remove-btn></remove-btn>
                        <router-link :to="{name: 'edit-infos', params: {id: guest.id}}" class="btn bg-gray-light int-trip crlc-icon mr-2" v-b-tooltip.hover.top title="Edit">
                           <edit-icon />
                        </router-link>

                     </div>
                  </div>
               </div>

            </div>
         </div>
      </template>
      <template v-else>
         <div class="col-lg-12">

            <LoadingComponent />
         </div>
      </template>

   </div>
</template>

<script>
import loading from "@/modules/adminPanel/mixins/loading";
import LoadingComponent from "@/views/LoadingComponent.vue";
import RemoveBtn from "@/components/buttons/RemoveBtn.vue";
import EditIcon from "@/components/svgs/EditIcon.vue";

export default {
	name: "guests-card-list",
	components: {
		RemoveBtn,
		EditIcon,
		LoadingComponent
	},
	mixins: [loading],
	mounted() {
		this.$store.dispatch("loadGuests");
	},
	computed: {
		guests: {
			get() {
				return this.$store.state.clientPanel.guests;
			},
			set(value) {
				this.$store.commit("SET_GUESTS", value);
			}
		}
	},
	destroyed() {
		this.guests = [];
	}
};
</script>

<style>
</style>
