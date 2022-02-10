<template>
   <FilePond @init="handleFilePondInit" name="test" ref="pond" class="int-filepond--wrapper" label-idle="Drop Vehicle resources here or <span class='filepond--label-action'>Browse</span>" allow-multiple="true" allow-reorder="true" storeAsFile="true" accepted-file-types="image/jpeg, image/png" v-bind:files="files" />
</template>

<script>
// Import FilePond
import vueFilePond from "vue-filepond";

// Import styles
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";

// Import plugins
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.esm.js";
import FilePondPluginImagePreview from "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.esm.js";

// Create FilePond component
const FilePond = vueFilePond(
	FilePondPluginFileValidateType,
	FilePondPluginImagePreview
);

export default {
	name: "file-uploade",
	props: {
		files: {
			type: Array,
			default: () => {}
		}
	},
	components: {
		FilePond
	},
	methods: {
		removeItem(id) {
			this.$router.push("/vehicles");
			return this.$store.commit("REMOVE_ITEM", id);
		},
		handleFilePondInit: function() {
			console.log("FilePond has initialized");
			console.log(this.$refs.pond.getFiles());

			// return this.myFiles.push(this.$refs.pond.getFiles());
			this.$refs.pond.getFiles();
		}
	}
};
</script>

<style>
</style>
