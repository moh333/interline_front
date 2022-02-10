<template>
   <div class="sidebar-wrap">
      <div class="sidebar">
         <div class="sidebar-header admin-header">
            <a class="navbar-brand" href="/">
               <template v-if="isOpen">
                  <img class="_logo" src="@/assets/interline-logo.svg" alt="">
               </template>
               <template v-else>
                  <img class="sm-logo d-block mx-auto" src="@/assets/interline-icon.png" alt="">
               </template>
            </a>
            <button id="toggleSidebar" class="btn toggle-sidebar" @click="isOpen = !isOpen">
               <template v-if="isOpen == true">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                     <path d="M0 0h24v24H0z" fill="none" />
                     <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                  </svg>
                  <b-tooltip target="toggleSidebar" class="text-left" placement="right" triggers="hover">
                     <strong>crtl</strong> +
                     <strong>h</strong> to hide sidebar
                  </b-tooltip>
               </template>
               <template v-if="isOpen == false">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                     <path d="M0 0h24v24H0z" fill="none" />
                     <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                  </svg>
                  <b-tooltip target="toggleSidebar" class="text-left" placement="right" triggers="hover">
                     <strong>crtl</strong> +
                     <strong>d</strong> to display sidebar
                  </b-tooltip>
               </template>
            </button>
         </div>
         <div class="sidebar-body pt-4">
            <slot name="body"></slot>
         </div>

         <div class="sidebar-footer mb-auto">
            <slot name="footer"></slot>
         </div>
      </div>
   </div>
</template>

<script>
export default {
	name: "sidebar-container",
	computed: {
		isOpen: {
			get() {
				return this.$store.state.adminPanel.isOpen;
			},
			set(value) {
				this.$store.commit("isOpen", value);
			}
		}
	}
};
</script>

<style>
</style>
