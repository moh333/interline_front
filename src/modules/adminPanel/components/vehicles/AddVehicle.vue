<template>

   <modal-container :modalsize="'modal-lg'">
      <template #heading> Add vehicle </template>
      <template #button>
         <div @click="addVehicle()">
            Add vehicle
         </div>
      </template>
      <template #body>
         <h3 class="h3 text-dark-heading mb-3">
            Vehicle genral settings
         </h3>
         <div class="row">
            <div class="col-lg-6 mb-3">
               <label for="" class="form-label">Vehicle name</label>
               <input type="text" class="form-control" id="formGroupExampleInput2" v-model="newVehicle.name" placeholder="Vehicle name">
            </div>

            <div class="col-lg-6 mb-3">
               <label for="" class="form-label">Vehicle provider</label>
               <select class="selectpicker form-control" aria-label="customer" v-model="newVehicle.provider">
                  <option>customer</option>
                  <option>Producer</option>
               </select>
            </div>
            <div class="col-lg-6 mb-3">
               <label for="" class="form-label">Vehicle group</label>
               <select class="selectpicker form-control" aria-label="customer" v-model="newVehicle.group">
                  <option selected></option>
                  <option>SUV</option>
                  <option>People Carrier</option>
                  <option>Coach</option>
                  <option>Box Van</option>
                  <option>Truck</option>
               </select>
            </div>
            <div class="col-lg-6 mb-3">
               <label for="" class="form-label">Vehicle size</label>
               <select class="selectpicker form-control" aria-label="customer" v-model="newVehicle.size">
                  <option selected></option>
                  <option>Small</option>
                  <option>Large</option>
                  <option>ExtraLarge</option>
                  <option>DoubleLarge</option>
               </select>
            </div>

            <div class="col-lg-12 mb-3">
               <label for="" class="form-label">Vehicle type</label>
               <select class="selectpicker form-control" aria-label="customer" v-model="newVehicle.type">
                  <option selected></option>
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
               <select class="selectpicker form-control" aria-label="customer" v-model="newVehicle.v_class">
                  <option selected></option>
                  <option>Low Emission</option>
                  <option>Economy Class</option>
                  <option>First Class</option>
               </select>
            </div>
            <div class="col-lg-6 mb-3">
               <label for="formGroupExampleInput2" class="form-label">Vehicle license</label>
               <input type="text" class="form-control" id="formGroupExampleInput2" v-model="newVehicle.license" placeholder="Another input placeholder">
            </div>

            <div class="col-lg-6 mb-3">
               <label for="" class="form-label">Vehicle category</label>
               <select class="selectpicker form-control" aria-label="customer" v-model="newVehicle.category">
                  <option selected></option>
                  <option>BUS</option>
                  <option>CARGO</option>
                  <option>SHIP</option>
               </select>
            </div>
            <div class="col-lg-6 mb-3">
               <label for="formGroupExampleInput2" class="form-label">Vehicle pax</label>
               <input type="number" class="form-control" id="formGroupExampleInput2" v-model="newVehicle.pax" placeholder="Another input placeholder">
            </div>
            <div class="col-lg-6 mb-3">
               <label for="formGroupExampleInput2" class="form-label">Vehicle res</label>
               <input type="number" class="form-control" id="formGroupExampleInput2" v-model="newVehicle.res" placeholder="Another input placeholder">
            </div>
            <div class="col-lg-6 mb-3">
               <label for="formGroupExampleInput2" class="form-label">Vehicle min</label>
               <input type="number" class="form-control" id="formGroupExampleInput2" v-model="newVehicle.min" placeholder="Another input placeholder">
            </div>
            <div class="col-lg-6 mb-3">
               <label for="formGroupExampleInput2" class="form-label">Vehicle max</label>
               <input type="number" class="form-control" id="formGroupExampleInput2" v-model="newVehicle.max" placeholder="Another input placeholder">
            </div>
            <div class="col-lg-6 mb-3">
               <label for="formGroupExampleInput2" class="form-label">Vehicle t_min</label>
               <input type="number" class="form-control" v-model="newVehicle.t_min" id="formGroupExampleInput2" placeholder="Another input placeholder">
            </div>
            <div class="col-lg-6 mb-3">
               <label for="formGroupExampleInput2" class="form-label">Vehicle t_max</label>
               <input type="number" class="form-control" v-model="newVehicle.t_max" id="formGroupExampleInput2" placeholder="Another input placeholder">
            </div>
            <div class="col-lg-6 mb-3">
               <label for="formGroupExampleInput2" class="form-label">Vehicle t_max</label>
               <input type="number" class="form-control" v-model="newVehicle.t_max" id="formGroupExampleInput2" placeholder="Another input placeholder">
            </div>
            <div class="col-lg-6 mb-3">
               <label for="formGroupExampleInput2" class="form-label">Vehicle s_min</label>
               <input type="number" class="form-control" v-model="newVehicle.s_min" id="formGroupExampleInput2" placeholder="Another input placeholder">
            </div>
            <div class="col-lg-6 mb-3">
               <label for="formGroupExampleInput2" class="form-label">Vehicle s_max</label>
               <input type="number" class="form-control" v-model="newVehicle.s_max" id="formGroupExampleInput2" placeholder="Another input placeholder">
            </div>
            <div class="col-lg-12 mb-3">
               <label for="" class="form-label">Vehicle ARG</label>
               <select class="selectpicker form-control" aria-label="customer" v-model="newVehicle.arg">
                  <option selected :value="newVehicle.arg"></option>
                  <option>BUS</option>
                  <option>CARGO</option>
               </select>
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
               <input type="number" class="form-control" id="formGroupExampleInput2" v-model="newVehicle.payRate" placeholder="Another input placeholder">
            </div>

            <div class="col-lg-6 mb-3">
               <label for="" class="form-label">Fuel type</label>
               <select class="form-control" aria-label="customer" v-model="newVehicle.fuelType">
                  <option>Diesel</option>
                  <option>Super</option>
               </select>
            </div>

            <div class="col-lg-6 mb-3">
               <label for="formGroupExampleInput2" class="form-label">Standard consumption (L/100KM)</label>
               <input type="number" class="form-control" id="formGroupExampleInput2" v-model="newVehicle.standardConsumption" placeholder="Another input placeholder">
            </div>
            <div class="col-lg-6 mb-3">
               <label for="formGroupExampleInput2" class="form-label">Tire set price (€)</label>
               <input type="number" class="form-control" id="formGroupExampleInput2" v-model="newVehicle.tireSetPrice" placeholder="Another input placeholder">
            </div>
            <div class="col-lg-6 mb-3">
               <label for="formGroupExampleInput2" class="form-label">Tire lifespan (KM)</label>
               <input type="number" class="form-control" id="formGroupExampleInput2" v-model="newVehicle.tireLifespan" placeholder="Another input placeholder">
            </div>
            <div class="col-lg-6 mb-3">
               <label for="formGroupExampleInput2" class="form-label">Service costs (€)</label>
               <input type="number" class="form-control" id="formGroupExampleInput2" v-model="newVehicle.serviceCosts" placeholder="Another input placeholder">
            </div>
            <div class="col-lg-6 mb-3">
               <label for="formGroupExampleInput2" class="form-label">Service interval (KM)</label>
               <input type="number" class="form-control" id="formGroupExampleInput2" v-model="newVehicle.serviceInterval" placeholder="Another input placeholder">
            </div>
            <div class="col-lg-6 mb-3">
               <label for="formGroupExampleInput2" class="form-label">Rent daily rate (€)</label>
               <input type="number" class="form-control" id="formGroupExampleInput2" v-model="newVehicle.rentDailyRate" placeholder="Another input placeholder">
            </div>
            <div class="col-lg-6 mb-3">
               <label for="formGroupExampleInput2" class="form-label">Base price (HR)</label>
               <input type="number" class="form-control" id="formGroupExampleInput2" v-model="newVehicle.basePrice_hr" placeholder="Another input placeholder">
            </div>
            <div class="col-lg-6 mb-3">
               <label for="formGroupExampleInput2" class="form-label">Base price (KM)</label>
               <input type="number" class="form-control" id="formGroupExampleInput2" v-model="newVehicle.basePrice_km" placeholder="Another input placeholder">
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
	name: "add-vehicle",
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
		vehicles() {
			return this.$store.getters.vehicles;
		},
		vehiclesFilter() {
			return this.$store.getters.vehiclesFilter;
		},
		newVehicle: {
			get() {
				return this.$store.state.adminPanel.newVehicle;
			},
			set(value) {
				this.$store.commit("newVehicle", value);
			}
		}
	},
	methods: {
		removeItem(id) {
			this.$router.push("/vehicles");
			return this.$store.commit("REMOVE_ITEM", id);
		},
		addVehicle() {
			this.notify();
			return this.$store.commit("ADD_VEHICLE");
		},
		notify() {
			this.$notify({
				group: "add",
				type: "success",
				title: "You add an item to the list successfly",
				duration: 4000,
				speed: 1000
			});
		}
	}
};
</script>

<style>
</style>