<template>
   <div class="p_layout pt-4">
      <div class="row">
         <div class="col-lg-12 mb-4">
            <div class="card border">
               <!-- <div class="card-header bg-white p-4 pb-2 border-none d-flex justify-content-between align-items-center">
                  <h3 class="h4 text-dark-heading mb-0">Vehicles</h3>
                  <router-link to="/vehicles" class="btn text-btn text-gold-heading uppercase h6">view all</router-link>
               </div> -->
               <div class="card-body p-4 text-center">
                  <h3 class="h3 text-dark-heading">Your next trip</h3>
                  <div class="btn-wrap">
                     <router-link to="/vehicles" class="btn text-btn text-gold-heading uppercase h6 px-3 py-2 w-auto mb-0">view details</router-link>
                  </div>
               </div>
            </div>
         </div>
         <div class="col-lg-4 mb-4">
            <div class="card border">
               <!-- <div class="card-header bg-white p-4 pb-2 border-none d-flex justify-content-between align-items-center">
                  <h3 class="h4 text-dark-heading mb-0">Vehicles</h3>
                  <router-link to="/vehicles" class="btn text-btn text-gold-heading uppercase h6">view all</router-link>
               </div> -->
               <div class="card-body p-4 text-center">
                  <h3 class="h3 text-dark-heading">Your last trip</h3>
                  <div class="btn-wrap">
                     <router-link to="/vehicles" class="btn text-btn text-gold-heading uppercase h6 px-3 py-2 w-auto mb-0">Give a feedback</router-link>
                  </div>
               </div>
            </div>
         </div>
         <div class="col-lg-4 mb-4">
            <div class="card border">
               <!-- <div class="card-header bg-white p-4 pb-2 border-none d-flex justify-content-between align-items-center">
                  <h3 class="h4 text-dark-heading mb-0">Vehicles</h3>
                  <router-link to="/vehicles" class="btn text-btn text-gold-heading uppercase h6">view all</router-link>
               </div> -->
               <div class="card-body p-4 text-center">
                  <h3 class="h3 text-dark-heading">Create new trip</h3>
                  <div class="btn-wrap">
                     <router-link to="/vehicles" class="btn text-btn text-gold-heading uppercase h6 px-3 py-2 w-auto mb-0">Create</router-link>
                  </div>
               </div>
            </div>
         </div>
         <div class="col-lg-4 mb-4">
            <div class="card border">
               <!-- <div class="card-header bg-white p-4 pb-2 border-none d-flex justify-content-between align-items-center">
                  <h3 class="h4 text-dark-heading mb-0">Vehicles</h3>
                  <router-link to="/vehicles" class="btn text-btn text-gold-heading uppercase h6">view all</router-link>
               </div> -->
               <div class="card-body p-4 text-center">
                  <h3 class="h3 text-dark-heading">Add new gust</h3>
                  <div class="btn-wrap">
                     <router-link to="/vehicles" class="btn text-btn text-gold-heading uppercase h6 px-3 py-2 w-auto mb-0">Add</router-link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
	name: "client-dashboard"
};
</script>

<style>
</style>
