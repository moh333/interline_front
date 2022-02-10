<template>
   <div class="history-page">
      <nav class="navbar admin-navbar p_layout navbar-expand-lg main-navbar">
         <router-link class="navbar-brand router-link-exact-active router-link-active" to="/">
            <img class="_logo" src="@/assets/interline-logo.svg" alt="">
         </router-link>

         <button class="navbar-toggler mr-3" type="button" data-bs-toggle="collapse" data-bs-target="#navCollapse" aria-controls="navCollapse" aria-expanded="false" aria-label="Toggle navigation">

         </button>

         <div class="collapse navbar-collapse" id="navCollapse">

            <ul class="navbar-nav justify-self-start">

               <li class="nav-item hover-item rounded">
                  <router-link class="nav-link router-link-exact-active router-link-active" to="/" exact>{{$t('nav.dashboard')}}</router-link>
               </li>
               <li class="nav-item hover-item rounded">
                  <router-link class="nav-link router-link-exact-active router-link-active" to="/calculate-price">{{$t('nav.calculate_price')}}</router-link>
               </li>
            </ul>

            <div class="d-flex flex-lg-row flex-md-column col-md-reverse ml-auto">
               <div class="form-group mr-3 mb-0">

                  <select class="selectpicker selectpicker_flags form-control " @change="handlOverlay()" data-width="fit" v-model="$i18n.locale">
                     <option data-content="<span class='flag-icon flag-icon-en'></span> English" value="en">
                        English
                     </option>
                     <option data-content="<span class='flag-icon flag-icon-de'></span> German" value="de">German</option>
                  </select>
               </div>
               <b-dropdown id="dropdown-profile" text="Ahmed fared" variant="outline" right class="profile-pic sm-pic h5 rounded text-dark-heading mb-0">
                  <b-dropdown-item>Profile Settings</b-dropdown-item>
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item>
                     <router-link to="/">log out test</router-link>
                  </b-dropdown-item>
               </b-dropdown>
            </div>
         </div>

      </nav>
      <div class="container">
         <History />
      </div>
   </div>
</template>

<script>
import History from "@/components/History.vue";
export default {
	components: {
		History
	}
};
</script>

<style>
</style>
