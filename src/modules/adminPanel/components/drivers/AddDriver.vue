<template>

   <modal-container :modalsize="'modal-lg'">
      <template #heading> Add vehicle </template>
      <template #button>
         <div @click="addVehicle()">
            Add vehicle
         </div>
      </template>
      <template #body>
         <div class="row">
            <div class="col-lg-6 mb-3">
               <label for="" class="form-label">Vehicle name</label>
               <input type="text" class="form-control" id="formGroupExampleInput2" v-model="newVehicle.name" placeholder="Vehicle name">
            </div>

            <div class="col-lg-6 mb-3">
               <label for="" class="form-label">Vehicle group</label>
               <select class="form-select" aria-label="customer" v-model="newVehicle.group">
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
               <select class="form-select" aria-label="customer" v-model="newVehicle.size">
                  <option selected></option>
                  <option>Small</option>
                  <option>Large</option>
                  <option>ExtraLarge</option>
                  <option>DoubleLarge</option>
               </select>
            </div>
            <div class="col-lg-6 mb-3">
               <label for="" class="form-label">Vehicle class</label>
               <select class="form-select" aria-label="customer" v-model="newVehicle.v_class">
                  <option selected></option>

                  <option>Low Emission</option>
                  <option>Economy Class</option>
                  <option>First Class</option>
               </select>
            </div>
            <div class="col-lg-6 mb-3">
               <label for="" class="form-label">Vehicle type</label>
               <select class="form-select" aria-label="customer" v-model="newVehicle.type">
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
               <label for="formGroupExampleInput2" class="form-label">Vehicle license</label>
               <input type="text" class="form-control" id="formGroupExampleInput2" v-model="newVehicle.license" placeholder="Another input placeholder">
            </div>

            <div class="col-lg-6 mb-3">
               <label for="" class="form-label">Vehicle category</label>
               <select class="form-select" aria-label="customer" v-model="newVehicle.category">
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
               <label for="formGroupExampleInput2" class="form-label">Vehicle min</label>
               <input type="number" class="form-control" id="formGroupExampleInput2" v-model="newVehicle.min" placeholder="Another input placeholder">
            </div>
            <div class="col-lg-6 mb-3">
               <label for="formGroupExampleInput2" class="form-label">Vehicle max</label>
               <input type="number" class="form-control" id="formGroupExampleInput2" v-model="newVehicle.max" placeholder="Another input placeholder">
            </div>

         </div>
      </template>
   </modal-container>
</template>

<script>
import ModalContainer from "@/components/ModalContainer.vue";

export default {
	name: "add-driver",
	components: {
		ModalContainer
	},
	data() {
		return {};
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
			return this.$store.commit("ADD_VEHICLE");
		}
	}
};
</script>

<style>
</style>
