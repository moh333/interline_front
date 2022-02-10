
<template>
   <div class="modal fade show d-block" id="popupModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
      <div class="modal-dialog" :class="modalsize">
         <div class="modal-content">
            <div class="modal-header p-4">
               <h5 class="modal-title" id="popupModalLabel">
                  <slot name="heading"></slot>
               </h5>
               <button type="button" class="btn text-btn btn-close" data-dismiss="modal" aria-label="Close" @click="$router.back()">
                  <remove-icon></remove-icon>
               </button>
            </div>
            <div class="modal-body p-4">
               <slot name="body"></slot>
            </div>

            <div class="modal-footer">
               <slot name="footer"></slot>
               <!-- <slot name="button">
                  <button type="button" class="btn gold-btn">
                     <slot name="title"></slot>
                  </button>
               </slot>
               <slot name="custombutton">

               </slot> -->
            </div>
         </div>
      </div>

   </div>
</template>

<script>
import { Modal } from "bootstrap";
import RemoveIcon from "./svgs/RemoveIcon.vue";

export default {
	name: "modal-container",
	props: {
		modalsize: {
			type: String,
			default: () => {}
		}
	},

	components: {
		RemoveIcon
	},
	data() {
		return {};
	},
	methods: {},
	mounted() {
		var PopupModal = new Modal(document.getElementById("popupModal"), {
			keyboard: false
		});

		PopupModal.show();
	}
};
</script>

