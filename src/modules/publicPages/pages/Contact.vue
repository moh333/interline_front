<template>
   <div class="imprint-page">

      <!--  -->
      <section class="pt-3">
         <div class="container">
            <div class="row justify-content-center">
               <div class="col-xl-10 p-0">
                  <h1 class="h1 text-dark-heading mb-3 mt-5">Contact</h1>
                  <p class="f2 text-dark-content mb-2">If you require general information about INTERLINE anywhere in the world or if you would like to have a copy of the latest company presentation for your files, then get in touch with us.</p>
                  <div class="contact-info border-top py-3">
                     Telephone: +49 (0)6196 95060-0
                  </div>

                  <div class="contact-info border-top border-bottom py-3">
                     Email:
                     <a href="mailto:frankfurt@interline.de">frankfurt@interline.de</a>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <!--  -->

      <!--  -->
      <section class="pt-5">
         <div class="container">
            <div class="row justify-content-center">
               <div class="col-xl-10 p-0">
                  <div class="row ">
                     <div class="col-xl-7 p-0">
                        <div class="card lg-border-bottom border-radius-medium box-shadow-large position-relative z-index-10">
                           <div class="card-body p-4">
                              <h4 class="h4 text-dark-heading heading-uderline">
                                 Or tell us what you need help with:
                              </h4>
                              <div class="form">
                                 <div class="row mb-3">
                                    <div class="col-12 mb-3">
                                       <input type="text" class="form-control" id="FullName" placeholder="Full name">
                                    </div>
                                    <div class="col-12 mb-3">
                                       <input type="email" class="form-control" id="Email" placeholder="Email">
                                    </div>
                                    <div class="col-12 mb-3">
                                       <div class=" mb-3">
                                          <select class="selectpicker f4 mb-0 form-control" id="floatingVehicle" aria-label="Floating label select example">
                                             <option disabled selected>Select problem Category</option>
                                             <option value="1">One</option>
                                             <option value="2">Two</option>
                                             <option value="3">Three</option>
                                          </select>
                                       </div>
                                    </div>
                                    <div class="col-12">
                                       <textarea class="form-control" name="" id="Comments" cols="30" rows="10" placeholder="Comments"></textarea>
                                    </div>
                                 </div>

                                 <a href="" class="btn main-btn gold-btn rounded mt-2 uppercase">
                                    Send
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <!--  -->

      <LocationsAndOffices />
   </div>
</template>

<script>

import LocationsAndOffices from "../components/global/LocationsAndOffices";

export default {
	name: "contact-us",

	components: {
		LocationsAndOffices
	},
	data() {
		return {

		};
	}
};
</script>

<style>
</style>
