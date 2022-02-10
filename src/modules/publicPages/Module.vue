<template>
   <div class="pub-pages">
      <nav-bar />
      <transition name="fade" mode="out-in">
         <router-view />
      </transition>
      <template v-if="$route.name !== 'home'">
         <div class="rental-bar bg-gold  py-2">
            <div class="container">
               <div class="d-flex justify-content-between align-items-center" :class="[show? 'mt-3' : '']">
                  <h3 class="h3 text-white-heading mb-0 none-in-mobile">
                     Simply Safe Even In Special Times
                  </h3>
                  <template v-if="!show">
                     <button type="button" v-b-toggle.collapse-1 @click="show = !show" class="btn main-btn blue-dark-btn rounded mt-2 uppercase">
                        {{$t('buttons.reserve_now')}}
                     </button>
                  </template>
                  <template v-if="show == true">
                     <div class="btn bg-gray-light int-trip crlc-icon form-check mb-0 w-auto px-2 ml-auto" @click="show = !show">
                        <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 24 24" width="16px">
                           <path d="M0 0h24v24H0z" fill="none" />
                           <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                        </svg>
                     </div>

                  </template>
               </div>
               <b-collapse id="collapse-1" :visible="show">
                  <div class="form-row mt-4">
                     <div class="col-lg-4 mb-3">
                        <select class="selectpicker f4 mb-0 form-control" id="floatingCategory" aria-label="Floating label select example">
                           <option disabled selected>Select category</option>
                           <option value="1">One</option>
                           <option value="2">Two</option>
                           <option value="3">Three</option>
                        </select>
                     </div>
                     <div class="col-lg-4 mb-3">
                        <select class="selectpicker f4 mb-0 form-control" id="floatingVehicle" aria-label="Floating label select example">
                           <option disabled selected>Select vehicle Cctegory</option>
                           <option value="1">One</option>
                           <option value="2">Two</option>
                           <option value="3">Three</option>
                        </select>
                     </div>
                     <div class="col-lg-4 mb-3">
                        <vc-date-picker v-model="date" mode="dateTime" is24hr>
                           <template v-slot="{ inputValue, inputEvents }">
                              <input class="px-2 py-1 border rounded focus:outline-none focus:border-blue-300 f4 form-control" :value="inputValue" v-on="inputEvents" placeholder="Date and Time" />
                           </template>
                        </vc-date-picker>
                     </div>
                     <div class="col-lg-8">
                        <div class="form-row mb-3">
                           <div class="col">
                              <input type="search" class="form-control" id="floatingPick" placeholder="Pick Up Location">
                           </div>
                           <div class="col">
                              <input type="search" class="form-control" id="floatingDrop" placeholder="Drop Off Location">
                           </div>
                        </div>
                     </div>
                     <div class="col-lg-4 mb-3">
                        <b-form-spinbutton class="f5 mb-0 input_pax" value="1" id="input-pax" min="1" max="100"></b-form-spinbutton>
                     </div>
                  </div>
                  <a href="" class="btn main-btn blue-dark-btn rounded mt-2 mb-4 uppercase">
                     {{$t('buttons.reserve_now')}}
                  </a>
               </b-collapse>
            </div>
         </div>
      </template>

      <n-footer />
      <template v-if="$route.name !== 'home'">
         <div class="lgpt"></div>
      </template>

      <!-- Multi layer page reveal effect -->
      <div class="left-layer"></div>
      <div class="left-layer left-layer--2"></div>
      <div class="left-layer left-layer--3"></div>
      <div class="left-layer left-layer--4"></div>
      <div class="left-layer left-layer--5"></div>

   </div>
</template>

<script>
import $ from "jquery";
import NavBar from "./components/base/NavBar";
import NFooter from "./components/base/NFooter";
export default {
	components: {
		NavBar,
		NFooter
	},
	data() {
		return {
			show: false
		};
	},
	methods: {
		handleChildrenChanged() {
			var $this = this;
			$this.$nextTick(() => {
				$(".selectpicker").selectpicker("refresh");
				$(".selectpicker").selectpicker("render");
			});
		}
	},
	mounted() {
		this.handleChildrenChanged();
		var layout_effect = document.querySelectorAll(".has-effect .layout-effect");
		layout_effect.forEach(element => {
			element.addEventListener("click", () => {
				var layers = document.querySelectorAll(".left-layer");
				layers.forEach(layer => {
					layer.classList.toggle("active");
					console.log();
				});
			});
		});
	},
	updated() {
		$(".selectpicker").selectpicker("refresh");
	}
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
