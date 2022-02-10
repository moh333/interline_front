<template>
   <div class="sidebar-wrap">
      <div class="sidebar">
         <div class="sidebar-header admin-header">
            <a class="navbar-brand" href="/">
               <template v-if="isOpen">
                  <img class="_logo" src="@/assets/interline-logo.svg" alt="">
               </template>
               <template v-else>
                  <img class="sm-logo d-block mx-auto" src="@/assets/interline-icon.png" alt="">
               </template>
            </a>
            <button id="toggleSidebar" class="btn toggle-sidebar" @click="isOpen = !isOpen">
               <template v-if="isOpen == true">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                     <path d="M0 0h24v24H0z" fill="none" />
                     <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                  </svg>
                  <b-tooltip target="toggleSidebar" class="text-left" placement="right" triggers="hover">
                     <strong>crtl</strong> +
                     <strong>h</strong> to hide sidebar
                  </b-tooltip>
               </template>
               <template v-if="isOpen == false">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                     <path d="M0 0h24v24H0z" fill="none" />
                     <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                  </svg>
                  <b-tooltip target="toggleSidebar" class="text-left" placement="right" triggers="hover">
                     <strong>crtl</strong> +
                     <strong>d</strong> to display sidebar
                  </b-tooltip>
               </template>
            </button>
         </div>
         <div class="sidebar-body pt-4">
            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
               <!-- <router-link class="nav-link text-start not_sublinks" to="/" base exact id="dashboard">
                  <div class="d-flex align-items-center">
                     <div class="sx-icon">
                        <dashboard-icon></dashboard-icon>
                     </div>
                     <span class="ml-3 link-text-item">
                        {{$t('nav.dashboard')}}
                     </span>
                     <b-tooltip v-if="!isOpen" class="bs-tooltip-right" target="dashboard" placement="right" triggers="hover">
                        {{$t('nav.dashboard')}}
                     </b-tooltip>
                  </div>
               </router-link>-->
               <router-link class="nav-link text-start not_sublinks" to="/trips" id="trips" exact>
                  <div class="d-flex align-items-center">
                     <div class="sx-icon">
                        <trip-icon></trip-icon>
                     </div>
                     <span class="ml-3 link-text-item">
                        {{$t('nav.trips')}}
                     </span>
                     <b-tooltip v-if="!isOpen" target="trips" placement="right" triggers="hover">
                        {{$t('nav.trips')}}
                     </b-tooltip>
                  </div>
               </router-link>
               <router-link class="nav-link text-start not_sublinks" to="/vehicles" id="vehicles" exact>
                  <div class="d-flex align-items-center">
                     <div class="sx-icon">
                        <vehicle-icon></vehicle-icon>
                     </div>
                     <span class="ml-3 link-text-item">
                        {{$t('nav.vehicles')}}
                     </span>
                     <b-tooltip v-if="!isOpen" target="vehicles" placement="right" triggers="hover">
                        {{$t('nav.vehicles')}}
                     </b-tooltip>
                  </div>
               </router-link>
               <router-link class="nav-link text-start not_sublinks" to="/customers" id="customers">
                  <div class="d-flex align-items-center">
                     <div class="sx-icon">
                        <customer-icon></customer-icon>
                     </div>
                     <span class="ml-3 link-text-item">
                        {{$t('nav.customers')}}
                     </span>
                     <b-tooltip v-if="!isOpen" target="customers" placement="right" triggers="hover">
                        {{$t('nav.customers')}}
                     </b-tooltip>
                  </div>
               </router-link>
               <router-link class="nav-link text-start not_sublinks" to="/drivers" id="drivers">
                  <div class="d-flex align-items-center">
                     <div class="sx-icon">
                        <driver-icon></driver-icon>
                     </div>
                     <span class="ml-3 link-text-item">
                        {{$t('nav.drivers')}}
                     </span>
                     <b-tooltip v-if="!isOpen" target="drivers" placement="right" triggers="hover">
                        {{$t('nav.drivers')}}
                     </b-tooltip>
                  </div>
               </router-link>
               <div class="nav-item_has-link">
                  <router-link @click.native="toggleVisibility()" class="nav-link _has-arrow _has-links text-start" to="/orders" id="orders">
                     <div class="d-flex align-items-center">
                        <div class="sx-icon">
                           <order-icon></order-icon>
                        </div>
                        <span class="ml-3 link-text-item">
                           {{ $t('nav.orders') }}
                        </span>
                        <b-tooltip v-if="!isOpen" target="orders" placement="right" triggers="hover">
                           {{ $t('nav.orders' )}}
                        </b-tooltip>
                     </div>
                  </router-link>

                  <b-collapse v-model="visible" class="">
                     <router-link class="nav-link _sub-link text-start" to="/orders/proposals" id="proposals">
                        <div class="d-flex align-items-center">
                           <div class="sx-icon">
                              <proposal-icon></proposal-icon>
                           </div>
                           <span class="ml-3 link-text-item">
                              {{ $t('nav.proposals' )}}
                           </span>
                           <b-tooltip v-if="!isOpen" target="proposals" placement="right" triggers="hover">
                              {{ $t('nav.proposals' )}}
                           </b-tooltip>
                        </div>
                     </router-link>

                     <router-link class="nav-link _sub-link text-start" to="/orders/invoices" id="invoices">
                        <div class="d-flex align-items-center">
                           <div class="sx-icon">

                              <invoice-icon></invoice-icon>
                           </div>
                           <span class="ml-3 link-text-item">
                              {{ $t('nav.invoices' )}}
                           </span>
                           <b-tooltip v-if="!isOpen" target="invoices" placement="right" triggers="hover">
                              {{ $t('nav.invoices' )}}
                           </b-tooltip>
                        </div>
                     </router-link>
                  </b-collapse>
               </div>

               <div class="border-top mb-3 mt-4"></div>
               <router-link class="nav-link text-start bg-gold text-white" to="/calculate-price" id="calculatePrice">
                  <div class="d-flex align-items-center">
                     <div class="sx-icon">

                        <calc-icon class="fill-white"></calc-icon>
                     </div>
                     <span class="ml-3 link-text-item">
                        {{$t('nav.calculate_price')}}
                     </span>
                     <b-tooltip v-if="!isOpen" target="calculatePrice" placement="right" triggers="hover">
                        {{$t('nav.calculate_price')}}
                     </b-tooltip>
                  </div>
               </router-link>

            </div>
         </div>

         <div class="sidebar-footer mb-auto ">

         </div>
      </div>
   </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import DashboardIcon from "@/components/svgs/DashboardIcon.vue";
import TripIcon from "@/components/svgs/TripIcon.vue";
import VehicleIcon from "@/components/svgs/VehicleIcon.vue";
import CustomerIcon from "@/components/svgs/CustomerIcon.vue";
import DriverIcon from "@/components/svgs/DriverIcon.vue";
import OrderIcon from "@/components/svgs/OrderIcon.vue";
import ProposalIcon from "@/components/svgs/ProposalIcon.vue";
import InvoiceIcon from "@/components/svgs/InvoiceIcon.vue";
import CalcIcon from "@/components/svgs/CalcIcon";

export default {
	name: "sidebar",
	components: {
		DashboardIcon,
		TripIcon,
		VehicleIcon,
		CustomerIcon,
		DriverIcon,
		OrderIcon,
		ProposalIcon,
		InvoiceIcon,
		CalcIcon
	},
	data() {
		return {
			visible: false
		};
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
	},
	methods: {
		activeSubLinks(boln) {
			this.visible = boln;
		},
		// function to toggle sub links visibility
		toggleVisibility() {
			this.visible = !this.visible;
		},
		// function to hide the sublinks when click on siblings
		hideSubLinks() {
			const links = document.querySelectorAll(".not_sublinks");
			let $this = this;
			links.forEach(link => {
				link.addEventListener("click", function() {
					$this.activeSubLinks(false);
				});
			});
		},

		// function to check if the sublinks is current route on reload
		// else make sub Links hide
		checkSubLinks() {
			let $this = this;
			// check if the sublinks is current route on reload
			$this.$nextTick(function() {
				if (
					$this.$route.path === "/orders" ||
					$this.$route.path === "/orders/invoices" ||
					$this.$route.path === "/orders/proposals"
				) {
					$this.activeSubLinks(true);
				} else {
					// else make sub Links hide
					$this.activeSubLinks(false);
				}
			});

			// calling the hideSubLinks function
			this.hideSubLinks();
		}
	},
	mounted() {
		// calling the checkSubLinks function
		this.checkSubLinks();
	}
};
</script>

<style>
</style>
