<template>

   <modal-container :modalsize="'modal-lg'">
      <template #heading> {{vehicle.name}}</template>
      <template #button>Edit vehicle</template>
      <template #body>
         <h3 class="h3 text-dark-heading mb-3">
            Vehicle genral settings
         </h3>
         <div class="row">
            <div class="col-lg-6 mb-3">
               <label for="" class="form-label">Vehicle name</label>
               <select class="selectpicker form-control" aria-label="customer" v-model="vehicle.name">
                  <option selected>{{vehicle.name}}</option>
                  <option>BMW X5</option>
                  <option>Mercedes C-Class</option>
                  <option>BMW X7</option>
                  <option>Mecedes Maybach</option>
               </select>
            </div>

            <div class="col-lg-6 mb-3">
               <label for="" class="form-label">Vehicle provider</label>
               <select class="selectpicker form-control" aria-label="customer" v-model="vehicle.provider">
                  <option>customer</option>
                  <option>Producer</option>
               </select>
            </div>
            <div class="col-lg-6 mb-3">
               <label for="" class="form-label">Vehicle group</label>
               <select class="selectpicker form-control" aria-label="customer" v-model="vehicle.group">
                  <option selected>{{vehicle.group}}</option>
                  <option>SUV</option>
                  <option>People Carrier</option>
                  <option>Coach</option>
                  <option>Box Van</option>
                  <option>Truck</option>
               </select>
            </div>
            <div class="col-lg-6 mb-3">
               <label for="" class="form-label">Vehicle size</label>
               <select class="selectpicker form-control" aria-label="customer" v-model="vehicle.size">
                  <option selected>{{vehicle.size}}</option>
                  <option>Small</option>
                  <option>Large</option>
                  <option>ExtraLarge</option>
                  <option>DoubleLarge</option>
               </select>
            </div>
            <div class="col-lg-12 mb-3">
               <label for="" class="form-label">Vehicle type</label>
               <select class="selectpicker form-control" aria-label="customer" v-model="vehicle.type">
                  <option selected>{{vehicle.type}}</option>
                  <option>Executive</option>
                  <option>Luxury</option>
                  <option>Ultimate</option>
                  <option>SUV</option>
                  <option>MPV</option>
                  <option>Mini</option>
                  <option>Midi</option>
                  <option>Classic</option>
                  <option>ThreeAxle</option>
                  <option>DoubleDecker</option>
                  <option>Van</option>
                  <option>Truck</option>
                  <option>unspecified</option>
               </select>
            </div>
            <div class="col-lg-6 mb-3">
               <label for="" class="form-label">Vehicle class</label>
               <select class="selectpicker form-control" aria-label="customer" v-model="vehicle.v_class">
                  <option selected>{{vehicle.v_class}}</option>

                  <option>Low Emission</option>
                  <option>Economy Class</option>
                  <option>First Class</option>
               </select>
            </div>

            <div class="col-lg-6 mb-3">
               <label for="formGroupExampleInput2" class="form-label">Vehicle license</label>
               <input type="text" class="form-control" v-model="vehicle.license" id="formGroupExampleInput2" placeholder="Another input placeholder">
            </div>

            <div class="col-lg-6 mb-3">
               <label for="" class="form-label">Vehicle category</label>
               <select class="selectpicker form-control" aria-label="customer" v-model="vehicle.category">
                  <option selected>{{vehicle.category}}</option>
                  <option>BUS</option>
                  <option>CARGO</option>
                  <option>SHIP</option>
               </select>
            </div>
            <div class="col-lg-6 mb-3">
               <label for="formGroupExampleInput2" class="form-label">Vehicle pax</label>
               <input type="number" class="form-control" v-model="vehicle.pax" id="formGroupExampleInput2" placeholder="Another input placeholder">
            </div>
            <div class="col-lg-6 mb-3">
               <label for="formGroupExampleInput2" class="form-label">Vehicle res</label>
               <input type="number" class="form-control" v-model="vehicle.res" id="formGroupExampleInput2" placeholder="Another input placeholder">
            </div>
            <div class="col-lg-6 mb-3">
               <label for="formGroupExampleInput2" class="form-label">Vehicle min</label>
               <input type="number" class="form-control" v-model="vehicle.min" id="formGroupExampleInput2" placeholder="Another input placeholder">
            </div>
            <div class="col-lg-6 mb-3">
               <label for="formGroupExampleInput2" class="form-label">Vehicle max</label>
               <input type="number" class="form-control" v-model="vehicle.max" id="formGroupExampleInput2" placeholder="Another input placeholder">
            </div>
            <div class="col-lg-6 mb-3">
               <label for="formGroupExampleInput2" class="form-label">Vehicle t_min</label>
               <input type="number" class="form-control" v-model="vehicle.t_min" id="formGroupExampleInput2" placeholder="Another input placeholder">
            </div>
            <div class="col-lg-6 mb-3">
               <label for="formGroupExampleInput2" class="form-label">Vehicle t_max</label>
               <input type="number" class="form-control" v-model="vehicle.t_max" id="formGroupExampleInput2" placeholder="Another input placeholder">
            </div>
            <div class="col-lg-6 mb-3">
               <label for="formGroupExampleInput2" class="form-label">Vehicle t_max</label>
               <input type="number" class="form-control" v-model="vehicle.t_max" id="formGroupExampleInput2" placeholder="Another input placeholder">
            </div>
            <div class="col-lg-6 mb-3">
               <label for="formGroupExampleInput2" class="form-label">Vehicle s_min</label>
               <input type="number" class="form-control" v-model="vehicle.s_min" id="formGroupExampleInput2" placeholder="Another input placeholder">
            </div>
            <div class="col-lg-6 mb-3">
               <label for="formGroupExampleInput2" class="form-label">Vehicle s_max</label>
               <input type="number" class="form-control" v-model="vehicle.s_max" id="formGroupExampleInput2" placeholder="Another input placeholder">
            </div>
            <div class="col-lg-12 mb-3">
               <label for="formGroupExampleInput2" class="form-label">Vehicle ARG</label>
               <input type="text" class="form-control" v-model="vehicle.arg" id="formGroupExampleInput2" placeholder="Another input placeholder">
            </div>
            <div class="col-lg-12 mb-3">
               <FileUploade :files="vehicleFiles" />
            </div>
         </div>

         <!-- <h3 class="h3 text-dark-heading mb-3 pt-3 border-top">
            Vehicle Equipment & Prices rate
         </h3>
         <div class="row">

            <div class="col-lg-6 mb-3">
               <label for="formGroupExampleInput2" class="form-label">Pay rate (€)</label>
               <input type="number" class="form-control" id="formGroupExampleInput2" v-model="vehicle.payRate" placeholder="Another input placeholder">
            </div>

            <div class="col-lg-6 mb-3">
               <label for="" class="form-label">Fuel type</label>
               <select class="form-control" aria-label="customer" v-model="vehicle.fuelType">
                  <option>Diesel</option>
                  <option>Super</option>
               </select>
            </div>

            <div class="col-lg-6 mb-3">
               <label for="formGroupExampleInput2" class="form-label">Standard consumption (L/100KM)</label>
               <input type="number" class="form-control" id="formGroupExampleInput2" v-model="vehicle.standardConsumption" placeholder="Another input placeholder">
            </div>
            <div class="col-lg-6 mb-3">
               <label for="formGroupExampleInput2" class="form-label">Tire set price (€)</label>
               <input type="number" class="form-control" id="formGroupExampleInput2" v-model="vehicle.tireSetPrice" placeholder="Another input placeholder">
            </div>
            <div class="col-lg-6 mb-3">
               <label for="formGroupExampleInput2" class="form-label">Tire lifespan (KM)</label>
               <input type="number" class="form-control" id="formGroupExampleInput2" v-model="vehicle.tireLifespan" placeholder="Another input placeholder">
            </div>
            <div class="col-lg-6 mb-3">
               <label for="formGroupExampleInput2" class="form-label">Service costs (€)</label>
               <input type="number" class="form-control" id="formGroupExampleInput2" v-model="vehicle.serviceCosts" placeholder="Another input placeholder">
            </div>
            <div class="col-lg-6 mb-3">
               <label for="formGroupExampleInput2" class="form-label">Service interval (KM)</label>
               <input type="number" class="form-control" id="formGroupExampleInput2" v-model="vehicle.serviceInterval" placeholder="Another input placeholder">
            </div>
            <div class="col-lg-6 mb-3">
               <label for="formGroupExampleInput2" class="form-label">Rent daily rate (€)</label>
               <input type="number" class="form-control" id="formGroupExampleInput2" v-model="vehicle.rentDailyRate" placeholder="Another input placeholder">
            </div>
            <div class="col-lg-6 mb-3">
               <label for="formGroupExampleInput2" class="form-label">Base price (HR)</label>
               <input type="number" class="form-control" id="formGroupExampleInput2" v-model="vehicle.basePrice_hr" placeholder="Another input placeholder">
            </div>
            <div class="col-lg-6 mb-3">
               <label for="formGroupExampleInput2" class="form-label">Base price (KM)</label>
               <input type="number" class="form-control" id="formGroupExampleInput2" v-model="vehicle.basePrice_km" placeholder="Another input placeholder">
            </div>
         </div> -->
      </template>
   </modal-container>
</template>

<script>
import ModalContainer from "@/components/ModalContainer.vue";
import FileUploade from "@/components/forms/FileUploade.vue";
import $ from "jquery";

export default {
	name: "edit-vehicle",
	components: {
		ModalContainer,
		FileUploade
	},
	mounted() {
		$(".selectpicker").selectpicker();
	},
	data() {
		return {
			vehicleFiles: []
		};
	},
	computed: {
		vehiclesFilter() {
			return this.$store.getters.vehiclesFilter;
		},
		vehicle() {
			return this.vehiclesFilter.find(
				vehicle => vehicle.id == this.$route.params.id
			);
		}
	},
	methods: {
		removeItem(id) {
			this.$router.push("/vehicles");
			return this.$store.commit("REMOVE_ITEM", id);
		}
	}
};
</script>

<style>
</style>
