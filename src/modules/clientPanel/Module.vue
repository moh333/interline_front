<template>
   <div class="int-admin" :class="{'int-admin-wide': isOpen == false, 'int-admin-normal': isOpen == true }">
      <sidebar :class="{'sidebar-close': isOpen == false, 'sidebar-open': isOpen == true }"></sidebar>
      <div class="int-admin-page--wrap">
         <nav class="navbar admin-navbar p_layout navbar-expand-lg main-navbar">
            <button class="navbar-toggler mr-3" type="button" data-bs-toggle="collapse" data-bs-target="#navCollapse" aria-controls="navCollapse" aria-expanded="false" aria-label="Toggle navigation">

            </button>

            <div class="collapse navbar-collapse" id="navCollapse">

               <ul class="navbar-nav justify-self-start">
                  <li class="nav-item hover-item">
                     <a class="nav-link rounded" to="/trips">
                        {{$t('nav.reports')}}
                     </a>
                  </li>
                  <li class="nav-item hover-item">
                     <a class="nav-link rounded" to="/support">
                        {{$t('nav.support')}}
                     </a>
                  </li>
               </ul>

               <div class="d-flex flex-lg-row flex-md-column col-md-reverse ml-auto">
                  <div class="form-group mr-3 mb-0">

                     <select class="selectpicker selectpicker_flags form-control " @change="handlOverlay()" data-width="fit" v-model="$i18n.locale">
                        <option data-content="<span class='flag-icon flag-icon-en'></span> English" value="en">
                           English
                        </option>
                        <option data-content="<span class='flag-icon flag-icon-de'></span> German" value="de">German</option>
                     </select>
                  </div>
                  <b-dropdown id="dropdown-profile" text="Ahmed fared" variant="outline" right class="profile-pic sm-pic h5 rounded text-dark-heading mb-0">
                     <b-dropdown-item>Profile Settings</b-dropdown-item>
                     <b-dropdown-divider></b-dropdown-divider>
                     <b-dropdown-item>
                        <router-link to="/">log out test</router-link>
                     </b-dropdown-item>
                  </b-dropdown>
               </div>
            </div>

         </nav>

         <div class="int-admin-layout">
            <router-view />
            <router-view name="moreInfos" class="more-infos-modal" />
            <b-dropdown id="dropdown-1" text="Ahmed fared" variant="outline" right class="btn quk-actions bg-gold" v-b-tooltip.hover.left title="Quik actions">
               <template #button-content>
                  <svg id="_03_Login" data-name="03 Login" xmlns="http://www.w3.org/2000/svg" width="25.741" height="25.741" viewBox="0 0 25.741 25.741">
                     <path id="Path_179" data-name="Path 179" d="M232.257,25.741A1.257,1.257,0,0,1,231,24.484V1.257a1.257,1.257,0,1,1,2.514,0V24.484A1.257,1.257,0,0,1,232.257,25.741Z" transform="translate(-219.386)" fill="#fff"></path>
                     <path id="Path_180" data-name="Path 180" d="M24.484,233.514H1.257a1.257,1.257,0,1,1,0-2.514H24.484a1.257,1.257,0,1,1,0,2.514Z" transform="translate(0 -219.386)" fill="#fff"></path>
                  </svg>
               </template>
               <b-dropdown-item>
                  <!-- <router-link to="/vehicles/add" class="h5 py-1 px-0">Add vehicle</router-link> -->
               </b-dropdown-item>
               <b-dropdown-item class="h5 mb-0 py-1 px-0">
                  Create Invoice
               </b-dropdown-item>
               <b-dropdown-item>
                  <!-- <router-link to="/calculate-price" class="h5 py-1 px-0">Calculate Price</router-link> -->
               </b-dropdown-item>
            </b-dropdown>
         </div>
      </div>
      <template v-if="overlay">
         <div class="overlay_lang">
            <div class="spinner-border" role="status">
               <span class="sr-only">Loading...</span>
            </div>
         </div>
      </template>
   </div>
</template>

<script>
import sidebar from "./components/global/Sidebar.vue";
import $ from "jquery";

export default {
	name: "client-module",
	components: {
		sidebar
	},
	data() {
		return {
			overlay: false,
			langs: ""
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
		openSidebar() {
			this.isOpen = true;
		},
		closeSidebar() {
			this.isOpen = false;
		},
		// over lay when chenge the language
		handlOverlay() {
			var $this = this;
			$this.overlay = true;
			setTimeout(function() {
				if ($this.overlay) {
					$this.overlay = false;
				}
			}, 500);
		}
	},
	mounted() {
		// apply the bootstrap select
		$(".selectpicker").selectpicker();

		// create the shortcuts for sidebar
		this._keyListener = function(e) {
			if (e.key === "d" && (e.ctrlKey || e.metaKey)) {
				e.preventDefault();
				this.openSidebar();
			}
			if (e.key === "h" && (e.ctrlKey || e.metaKey)) {
				e.preventDefault();
				this.closeSidebar();
			}
		};

		document.addEventListener("keydown", this._keyListener.bind(this));
	}
};
</script>

<style>
</style>
