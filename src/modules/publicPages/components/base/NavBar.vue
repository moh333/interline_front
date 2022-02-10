<template>

   <b-navbar toggleable="lg" class="navbar-light main-navbar box-shadow-large px-5 has-effect">
      <div class="container">

         <b-navbar-brand href="/">
            <img class="_logo" src="@/assets/interline-logo.svg" alt="">
         </b-navbar-brand>

         <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
         <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
               <!-- <router-link class="nav-item uppercase hover-item" to="/services" >
     
               </router-link> -->
               <div @mouseover="onOver('servicesdropdown')" @mouseleave="onLeave('servicesdropdown')">

                  <b-nav-item-dropdown class="nav-item hover-item" @mouseover="onOver" @mouseleave="onLeave" ref="servicesdropdown">
                     <template #button-content>
                        <span class="uppercase">{{$t('nav.services')}}</span>
                     </template>
                     <router-link class="dropdown-item h5 layout-effect" to="/limousine">Limousine- & chauffeurservice</router-link>
                     <router-link class="dropdown-item h5 layout-effect" to="/coach">Coach Service</router-link>
                     <router-link class="dropdown-item h5 layout-effect" to="/airport">Airport Transfer</router-link>
                  </b-nav-item-dropdown>
               </div>

               <router-link class="nav-item uppercase hover-item layout-effect" to="/event-service">
                  <span class="nav-link">
                     {{$t('nav.global_transportation')}}
                  </span>
               </router-link>

               <div @mouseover="onOver('fleetdropdown')" @mouseleave="onLeave('fleetdropdown')">
                  <b-nav-item-dropdown class="nav-item hover-item" ref="fleetdropdown">
                     <template #button-content>
                        <span class="uppercase">{{$t('nav.fleet')}}</span>
                     </template>
                     <router-link class="dropdown-item h5 layout-effect" to="/fleet/limousines">Limousine</router-link>
                     <router-link class="dropdown-item h5 layout-effect" to="/fleet/minivans">Minivans</router-link>
                     <router-link class="dropdown-item h5 layout-effect" to="/fleet/coaches">Coaches</router-link>
                  </b-nav-item-dropdown>
               </div>

               <div @mouseover="onOver('aboutdropdown')" @mouseleave="onLeave('aboutdropdown')">
                  <b-nav-item-dropdown class="nav-item hover-item" ref="aboutdropdown">
                     <template #button-content>
                        <span class="uppercase">{{$t('nav.about_us')}}</span>
                     </template>
                     <router-link class="dropdown-item h5 layout-effect" to="/about-us">Our company</router-link>
                     <router-link class="dropdown-item h5 layout-effect" to="/our-team">Our team</router-link>
                     <router-link class="dropdown-item h5 layout-effect" to="/chauffeur-training">Chauffeur training</router-link>
                     <router-link class="dropdown-item h5 layout-effect" to="/software-tracking">Software tracking</router-link>
                  </b-nav-item-dropdown>
               </div>

               <!-- <router-link class="nav-item uppercase hover-item" to="/about">
                  <span class="nav-link">
                     
                  </span>
               </router-link> -->

               <!-- <router-link class="nav-item uppercase hover-item" to="/team">
                  <span class="nav-link">
                     {{$t('nav.team')}}
                  </span>
               </router-link> -->

               <!-- <router-link class="nav-item uppercase hover-item" to="/contact">
                  <span class="nav-link">
                     {{$t('nav.contact')}}
                  </span>
               </router-link> -->
            </b-navbar-nav>

            <!--             -->
            <b-navbar-nav class="ml-auto aling-items-center">
               <div class="mr-3 my-auto">
                  <select id="selectpickerLang" class="selectpicker selectpicker_flags form-control " @change="handlOverlay()" data-width="fit" v-model="$i18n.locale">
                     <option :data-content="`<span class='flag-icon flag-icon-en'></span> ${$t('langs.english')}`" value="en">
                        {{$t('langs.english')}}
                     </option>
                     <option :data-content="`<span class='flag-icon flag-icon-de'></span> ${$t('langs.german')}` " value="de"></option>
                     {{$t('langs.german')}}
                  </select>
               </div>

               <div class="d-flex flex-lg-row flex-md-column col-md-reverse">
                  <router-link to="/signup" class="btn main-btn gold-btn rounded mr-2 my-lg-auto uppercase">
                     {{$t('buttons.get_started')}}
                  </router-link>
               </div>

            </b-navbar-nav>
         </b-collapse>
      </div>

   </b-navbar>

</template>

<script>
import $ from "jquery";
export default {
	name: "navbar",
	computed: {
		overlay: {
			get() {
				return this.$store.state.publicPages.overlay;
			},
			set(value) {
				this.$store.commit("overlay", value);
			}
		}
	},
	methods: {
		// over lay when chenge the language
		handlOverlay() {
			var $this = this;
			$this.overlay = true;
			setTimeout(function() {
				if ($this.overlay) {
					$this.overlay = false;
				}
			}, 500);
		},
		// eslint-disable-next-line no-unused-vars
		onOver(item) {
			var $this = this;
			$this.$nextTick(() => {
				$this.$refs[item].visible = true;
			});
		},
		// eslint-disable-next-line no-unused-vars
		onLeave(item) {
			var $this = this;
			$this.$nextTick(() => {
				$this.$refs[item].visible = false;
			});
		}
	},
	mounted() {
		// apply the bootstrap select
		$("#selectpickerLang").selectpicker();
	},
	updated() {
		$(".selectpicker").selectpicker("refresh");
	},
	destroyed() {
		$(".selectpicker").selectpicker("destroy");
	}
};
</script>

<style>
</style>
