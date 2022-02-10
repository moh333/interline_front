<template>
   <div>
      <template v-if="guests.length > 0">
         <nav aria-label="breadcrumb ">
            <ol class="breadcrumb bg-transparent border-bottom mb-0">
               <li class="breadcrumb-item">
                  <router-link to="/c/guests">guests</router-link>
               </li>
               <li class="breadcrumb-item active" aria-current="page">{{guest.name}}</li>
            </ol>
         </nav>
      </template>
      <template v-if="guests.length == 0">
         <nav aria-label="breadcrumb ">
            <ol class="breadcrumb bg-white border-bottom mb-0">
               <b-skeleton width="12%"></b-skeleton>
            </ol>
         </nav>
      </template>
      <div class="card bg-transparent">
         <div class="card-header bg-white border-none position-relative has-action-bar border-bottom p_layout py-4">
            <div class="row align-items-center">
               <template v-if="guests.length > 0">
                  <div class="col-lg-1">
                     <template v-if="guest.logo  != ''">
                        <figure>
                           <img src="" alt="">
                        </figure>
                     </template>
                     <template v-if="guest.logo == ''">
                        <div class="c-logo" :style="{'background-color': `#${Math.floor(Math.random()*16777215).toString(16)}`}">
                           <span class="h3 mb-0">{{guest.name.match(/\b(\w)/g).join('')}}</span>
                        </div>
                     </template>
                  </div>
                  <div class="col-lg-6 pl-0">
                     <h3 class="h3 text-dark-heading">{{guest.name}}</h3>
                     <div class="d-flex">
                        <h5 class="h5 text-dark-content mb-0 mt-1 mr-4">
                           <mail-icon></mail-icon>

                           <a class="link-blue" href="http://">{{guest.email}}</a>
                        </h5>
                        <h5 class="h5 text-dark-content mb-0 mt-1 mr-4">
                           <website-icon></website-icon>
                           <a class="link-blue" href="http://">{{guest.website}}</a>
                        </h5>
                        <h5 class="h5 text-dark-content mb-0 mt-1 mr-4">
                           <phone-icon></phone-icon>

                           <a class="link-blue" href="http://">{{guest.phone}}</a>
                        </h5>
                     </div>
                  </div>
                  <div class="actions-on-hover">
                     <remove-btn></remove-btn>
                     <router-link :to="{name: 'edit-infos', params: {id: guest.id}}" class="btn bg-gray-light int-trip crlc-icon mr-2" v-b-tooltip.hover.top title="Edit">
                        <edit-icon />
                     </router-link>

                  </div>
               </template>
               <template v-if="guests.length == 0">
                  <!-- <LoadingComponent />
                   -->
                  <div class="col-lg-1">
                     <b-skeleton type="avatar" width="70px" height="70px"></b-skeleton>
                  </div>
                  <div class="col-lg-6 pl-0">
                     <b-skeleton width="45%"></b-skeleton>
                     <b-skeleton width="75%"></b-skeleton>
                  </div>
               </template>
               <div class="col-lg-12">

               </div>
            </div>
         </div>
         <div class="card-body">
            <template v-if="guests.length > 0">

               <div class="limits" v-for="limit in guest.limits" :key="limit.type">
                  {{limit.type}}
               </div>
            </template>
            <template v-if="guests.length == 0">
               <LoadingComponent />
            </template>

         </div>
      </div>

   </div>
</template>

<script>
import LoadingComponent from "@/views/LoadingComponent.vue";
import RemoveBtn from "@/components/buttons/RemoveBtn.vue";
import EditIcon from "@/components/svgs/EditIcon.vue";
import MailIcon from "@/components/svgs/MailIcon.vue";
import PhoneIcon from "@/components/svgs/PhoneIcon.vue";
import WebsiteIcon from "@/components/svgs/WebsiteIcon.vue";

export default {
	name: "guest-profile",
	components: {
		LoadingComponent,
		RemoveBtn,
		EditIcon,
		MailIcon,
		PhoneIcon,
		WebsiteIcon
	},
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
		},
		guest() {
			return this.guests.find(guest => guest.id == this.$route.params.id);
		}
	},
	destroyed() {
		this.guests = [];
	}
};
</script>

<style>
</style>
