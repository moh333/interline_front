<template>
   <modal-container :modalsize="'modal-xl'">
      <template #heading> Customer name</template>
      <template #button>Edit profile</template>
      <template #body>
         <div class="row">
            <div class="col-lg-12 mb-3">
               <h3 class="h3 text-dark-heading mb-2">
                  Customer orders
               </h3>
            </div>
            <div class="col-lg-12">
               <h3 class="h3 text-dark-heading mb-2">
                  Customer trips
               </h3>
            </div>
         </div>
      </template>
   </modal-container>
</template>

<script>
import ModalContainer from "@/components/ModalContainer.vue";
import { Modal } from "bootstrap";

export default {
	name: "customer-profile",
	components: {
		ModalContainer
	},
	data() {
		return {
			modal: null
		};
	},

	methods: {
		openComponent(componentName) {
			this.currentEditComponent == componentName;
		},
		removeItem(id) {
			this.$router.push("/customers");
			return this.$store.commit("REMOVE_ITEM", id);
		}
	},
	computed: {
		customersFilter() {
			return this.$store.getters.customersFilter;
		},
		customer() {
			return this.customersFilter.find(
				customer => customer.id == this.$route.params.id
			);
		},
		currentEditComponent: {
			get() {
				return this.$store.state.adminPanel.currentEditComponent;
			},
			set(value) {
				this.$store.commit("currentEditComponent", value);
			}
		}
	},
	beforeRouteUpdate() {
		if (this.$route.name === "edit-profile") {
			var openModal = (this.modal = new Modal(this.$refs.openID));
			openModal.show();
		}
	},
	mounted() {
		var openModal = (this.modal = new Modal(this.$refs.openID));
		openModal.show();
	}
};
</script>

<style>
</style>
