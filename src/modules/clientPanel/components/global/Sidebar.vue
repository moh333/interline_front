<template>
   <sidebar-container>
      <template #body>
         <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <router-link class="nav-link text-start not_sublinks" to="/overview" base exact id="overview">
               <div class="d-flex align-items-center">
                  <div class="sx-icon">
                     <dashboard-icon></dashboard-icon>
                  </div>
                  <span class="ml-3 link-text-item">
                     <!-- {{$t('nav.dashboard')}} -->
                     Home
                  </span>
                  <b-tooltip v-if="!isOpen" class="bs-tooltip-right" target="overview" placement="right" triggers="hover">
                     <!-- {{$t('nav.dashboard')}} -->
                     Home
                  </b-tooltip>
               </div>
            </router-link>

            <router-link class="nav-link text-start not_sublinks" to="/c/guests" base exact id="guests">
               <div class="d-flex align-items-center">
                  <div class="sx-icon">
                     <guest-icon></guest-icon>
                  </div>
                  <span class="ml-3 link-text-item">
                     <!-- {{$t('nav.dashboard')}} -->
                     Guests
                  </span>
                  <b-tooltip v-if="!isOpen" class="bs-tooltip-right" target="guests" placement="right" triggers="hover">
                     <!-- {{$t('nav.dashboard')}} -->
                     Guests
                  </b-tooltip>
               </div>
            </router-link>
            <router-link class="nav-link text-start not_sublinks" to="/c/favorites" base exact id="favorites">
               <div class="d-flex align-items-center">
                  <div class="sx-icon">
                     <favorite-icon></favorite-icon>
                  </div>
                  <span class="ml-3 link-text-item">
                     <!-- {{$t('nav.dashboard')}} -->
                     Favorites
                  </span>
                  <b-tooltip v-if="!isOpen" class="bs-tooltip-right" target="favorites" placement="right" triggers="hover">
                     <!-- {{$t('nav.dashboard')}} -->
                     Favorites
                  </b-tooltip>
               </div>
            </router-link>
            <router-link class="nav-link text-start not_sublinks" to="/c/proposals" base exact id="proposals">
               <div class="d-flex align-items-center">
                  <div class="sx-icon">
                     <proposal-icon></proposal-icon>
                  </div>
                  <span class="ml-3 link-text-item">
                     <!-- {{$t('nav.dashboard')}} -->
                     Proposals
                  </span>
                  <b-tooltip v-if="!isOpen" class="bs-tooltip-right" target="proposals" placement="right" triggers="hover">
                     <!-- {{$t('nav.dashboard')}} -->
                     Proposals
                  </b-tooltip>
               </div>
            </router-link>
            <router-link class="nav-link text-start not_sublinks" to="/c/invoices" base exact id="invoices">
               <div class="d-flex align-items-center">
                  <div class="sx-icon">
                     <invoice-icon></invoice-icon>
                  </div>
                  <span class="ml-3 link-text-item">
                     <!-- {{$t('nav.dashboard')}} -->
                     Invoices
                  </span>
                  <b-tooltip v-if="!isOpen" class="bs-tooltip-right" target="invoices" placement="right" triggers="hover">
                     <!-- {{$t('nav.dashboard')}} -->
                     Invoices
                  </b-tooltip>
               </div>
            </router-link>
         </div>
      </template>
   </sidebar-container>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import SidebarContainer from "@/components/SidebarContainer";

import DashboardIcon from "@/components/svgs/DashboardIcon.vue";
// import TripIcon from "@/components/svgs/TripIcon.vue";
// import VehicleIcon from "@/components/svgs/VehicleIcon.vue";
// import CustomerIcon from "@/components/svgs/CustomerIcon.vue";
// import DriverIcon from "@/components/svgs/DriverIcon.vue";
// import OrderIcon from "@/components/svgs/OrderIcon.vue";
import ProposalIcon from "@/components/svgs/ProposalIcon.vue";
import InvoiceIcon from "@/components/svgs/InvoiceIcon.vue";
import FavoriteIcon from "@/components/svgs/FavoriteIcons.vue";
import GuestIcon from "@/components/svgs/GuestIcon.vue";
// import CalcIcon from "@/components/svgs/CalcIcon";

export default {
	name: "sidebar",
	components: {
		SidebarContainer,
		DashboardIcon,
		// TripIcon,
		// VehicleIcon,
		// CustomerIcon,
		// DriverIcon,
		// OrderIcon,
		ProposalIcon,
		InvoiceIcon,
		FavoriteIcon,
		GuestIcon
		// CalcIcon
	},
	computed: {
		isOpen: {
			get() {
				return this.$store.state.adminPanel.isOpen;
			},
			set(value) {
				this.$store.commit("isOpen", value);
			}
		}
	}
};
</script>

<style>
</style>
