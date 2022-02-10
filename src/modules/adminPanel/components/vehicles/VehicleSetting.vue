
<template>
   <modal-container :modalsize="'modal-lg'">
      <template #heading>Setting</template>
      <template #body>
         <div class="mb-3">
            <label for="NachStarttInput" class="form-label">Nacht Start (Stunde):</label>
            <input type="number" class="form-control" id="NachtStartInput" placeholder="21">
         </div>
         <div class="mb-3">
            <label for="NachtEndeInput" class="form-label">Nacht Ende (Stunde):</label>
            <input type="number" class="form-control" id="NachtEndeInput" placeholder="4">
         </div>
         <div class="mb-3">
            <label for="NachtzuschlagInput" class="form-label">Nachtzuschlag (€/h):</label>
            <input type="number" class="form-control" id="NachtzuschlagInput" placeholder="4">
         </div>
         <div class="mb-3">
            <label for="SonntagszuschlagInput" class="form-label">Sonntagszuschlag (€/h):</label>
            <input type="number" class="form-control" id="SonntagszuschlagInput" placeholder="4">
         </div>
         <div class="mb-3">
            <label for="FeiertagszuschlagInput" class="form-label">Feiertagszuschlag (€/h):</label>
            <input type="number" class="form-control" id="FeiertagszuschlagInput" placeholder="4">
         </div>
      </template>
      <template #button>Save update</template>
   </modal-container>
</template>

<script>
import ModalContainer from "../../../../components/ModalContainer.vue";

export default {
	name: "vehicle-setting",
	components: {
		ModalContainer
	},
	data() {
		return {};
	},
	methods: {},
	mounted() {}
};
</script>

