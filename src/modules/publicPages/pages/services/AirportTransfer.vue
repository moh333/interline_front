<template>
   <div class="coach-service">
      <n-header display="flex" :has-content="true" min-height="auto">
         <template #content>
            <overlay-card :has-background="true" background-type="gradient" :has-content="true" content-aling="end" :image="image" height="600">
               <template #content>
                  <div class="container">
                     <div class="row">
                        <div class="col-xl-7 col-lg-12 my-4 align-self-end">
                           <h1 class="h1 text-white-heading">Airport Transfer Frankfurt</h1>
                           <p class="f1 text-white-content mb-4">Avoid stress at the airport and get your trip off to a safe and relaxed start with the INTERLINE Airport Transfer service.</p>
                        </div>

                     </div>
                  </div>
               </template>
            </overlay-card>
         </template>
      </n-header>
      <!--  -->
      <section class="py-5">
         <div class="container">
            <div class="row ">
               <div class="col-xl-10 p-0">
                  <p class="f3 text-dark-content mb-2">Travel in style and comfort in a limousine of your choice or in one of our 6- to 50-seater coaches. To make departure and arrival more comfortable and stress-free still, our limousines and chauffeurs have the necessary permits to directly access the apron, taking you straight to the aircraft and collecting you at the steps again once you land. And it goes without saying that we take care of all handling at the General Aviation Terminal.</p>
                  <p class="f3 text-dark-content mb-2">At INTERLINE, we call this comfort every step of the way. Nothing could be simpler. The INTERLINE Airport Transfer service is combination of our core strengths: limousine service, chauffeur service and coach service.</p>
               </div>
            </div>
         </div>
      </section>
      <!--  -->

      <!-- Our Airport Transfer provides Section -->
      <section class="our-fleet bg-gold-light py-5">
         <div class="container">
            <div class="row align-items-center ">
               <div class="col-lg-6 col-md-12 my-4">
                  <div class="px-4">
                     <h2 class="h2 text-dark-heading mb-4">Our Airport Transfer provides</h2>
                     <div class="d-flex">
                        <div class="flex-item flex-grow-1">
                           <div class="d-flex align-items-center mb-2">
                              <div class="card-icon sm-icon mb-0 mr-2">
                                 <TickIcon fill="gold" />
                              </div>
                              <h5 class="h5 text-dark-content">Group transfers for up to 50 persons</h5>
                           </div>
                           <div class="d-flex align-items-center mb-2">
                              <div class="card-icon sm-icon mb-0 mr-2">
                                 <TickIcon fill="gold" />
                              </div>
                              <h5 class="h5 text-dark-content">Taxiway pickup</h5>
                           </div>

                           <div class="d-flex align-items-center mb-2">
                              <div class="card-icon sm-icon mb-0 mr-2">
                                 <TickIcon fill="gold" />
                              </div>
                              <h5 class="h5 text-dark-content">Parking permit at the airport (depending on the airport)</h5>
                           </div>

                           <div class="d-flex align-items-center mb-2">
                              <div class="card-icon sm-icon mb-0 mr-2">
                                 <TickIcon fill="gold" />
                              </div>
                              <h5 class="h5 text-dark-content">Individual pickup opportunities</h5>
                           </div>
                           <div class="d-flex align-items-center mb-2">
                              <div class="card-icon sm-icon mb-0 mr-2">
                                 <TickIcon fill="gold" />
                              </div>
                              <h5 class="h5 text-dark-content">Flight tracking</h5>
                           </div>

                        </div>

                     </div>

                  </div>
               </div>
               <div class="col-lg-6 col-md-12 my-4">
                  <div class="card-image border-radius-medium box-shadow-extra-large">
                     <b-img-lazy v-bind="mainProps" :src="setUrlImage('https://www.interline-frankfurt.de/images/contentflex/global-transportation-events-1.jpg')" alt="Image 1"></b-img-lazy>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <!--  -->

      <LocationsAndOffices />
      <!--  -->
   </div>
</template>

<script>
import NHeader from "../../components/base/NHeader";
import OverlayCard from "../../components/base/OverlayCard";
// import RentalCard from "../components/global/RentalCard";
import TickIcon from "@/components/svgs/TickIcon";
import LocationsAndOffices from "../../components/global/LocationsAndOffices";
import setUrlImage from "../../utilities/setUrlImage";

export default {
	name: "airport-transfer",
	mixins: [setUrlImage],
	components: {
		NHeader,
		OverlayCard,
		// RentalCard,
		LocationsAndOffices,
		TickIcon
	},
	data() {
		return {
			image: "https://www.interline-frankfurt.de/images/header/services3-L.jpg",
			mainProps: {
				center: true,
				fluidGrow: true,
				blank: true,
				blankColor: "#bbb"
			}
		};
	}
};
</script>

<style>
</style>
