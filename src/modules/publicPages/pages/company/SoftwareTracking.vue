<template>
   <div class="software-tracking">
      <n-header display="flex" :has-content="true" min-height="auto">
         <template #content>
            <overlay-card :has-background="true" background-type="gradient" :has-content="true" content-aling="end" :image="image" height="500">
               <template #content>
                  <div class="container">
                     <div class="row">
                        <div class="col-xl-7 col-lg-12 my-4 align-self-end">
                           <h1 class="h1 text-white-heading">Booking Software</h1>
                           <p class="f1 text-white-content mb-4">With INTERLINE Frankfurt you book your trip quickly and securely.</p>
                        </div>
                     </div>
                  </div>
               </template>
            </overlay-card>
         </template>
      </n-header>
      <!--  -->
      <!-- customised dispatching solution Section -->
      <section class="our-fleet py-5">
         <div class="container">
            <div class="row align-items-center ">
               <div class="col-lg-6 col-md-12 my-4">
                  <div class="px-4">
                     <h2 class="h2 text-dark-heading mb-4">Customised solution</h2>
                     <p class="f3 text-dark-content mb-4">Our offices use a customised dispatching solution that maps every job we do down to the last detail. One example of this is the geocoding we have for every destination we drive to.</p>
                     <p class="f3 text-dark-content mb-4">Thanks to Map&Guide, the routes and times of every trip are calculated exactly, and details are provided to the client along with the order confirmation. In addition, the control loops built into the software let us monitor bookings on a daily basis to make sure everything runs smoothly.</p>
                  </div>
               </div>
               <div class="col-lg-6 col-md-12 my-4">
                  <div class="card-image border-radius-medium box-shadow-extra-large">
                     <b-img-lazy v-bind="mainProps" :src="setUrlImage('https://www.interline-frankfurt.de/images/contentflex/software-und-tracking-1.jpg')" alt="Image 1"></b-img-lazy>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <!--  -->
      <!-- Flight Tracking Section -->
      <section class="our-fleet bg-gold-light py-5">
         <div class="container">
            <div class="row align-items-center column-reverse">
               <div class="col-lg-6 col-md-12 my-4">
                  <div class="card-image border-radius-medium box-shadow-extra-large">
                     <b-img-lazy v-bind="mainProps" :src="setUrlImage('https://www.interline-frankfurt.de/images/contentflex/software-und-tracking-2.jpg')" alt="Image 1"></b-img-lazy>
                  </div>
               </div>
               <div class="col-lg-6 col-md-12 my-4">
                  <div class="px-4">
                     <h2 class="h2 text-dark-heading mb-4">Flight Tracking </h2>
                     <p class="f3 text-dark-content mb-4">Our flight-tracking tool directly registers potential changes to our guests' flight schedules and allows us to constantly adapt our service processes for our clients – immediately and without delays. As soon as we receive a booking, we conduct a plausibility check for the flight number provided and the arrival time of the passenger. This tried and tested tool is key to reducing errors.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <!--  -->

      <!-- Car Tracking Section -->
      <section class="our-fleet py-5">
         <div class="container">
            <div class="row align-items-center ">
               <div class="col-lg-6 col-md-12 my-4">
                  <div class="px-4">
                     <h2 class="h2 text-dark-heading mb-4">Car Tracking</h2>
                     <p class="f3 text-dark-content mb-4">You'd like information on when you can expect your vehicle? Our dispatchers use GPS to monitor the entire INTERLINE chauffeur service fleet. This means, for example, that we can provide up-to-the-minute details of the actual arrival time of a guest at his or her destination at any time – also making things safer for our clients.</p>
                  </div>
               </div>
               <div class="col-lg-6 col-md-12 my-4">
                  <div class="card-image border-radius-medium box-shadow-extra-large">
                     <b-img-lazy v-bind="mainProps" :src="setUrlImage('https://www.interline-frankfurt.de/images/contentflex/software-und-tracking-3.jpg')" alt="Image 1"></b-img-lazy>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <!--  -->
      <!-- Smartphone and Tablet PC Support Section -->
      <section class="our-fleet bg-gold-light py-5">
         <div class="container">
            <div class="row align-items-center column-reverse">
               <div class="col-lg-6 col-md-12 my-4">
                  <div class="card-image border-radius-medium box-shadow-extra-large">
                     <b-img-lazy v-bind="mainProps" :src="setUrlImage('https://www.interline-frankfurt.de/images/contentflex/software-und-tracking-4.jpg')" alt="Image 1"></b-img-lazy>
                  </div>
               </div>
               <div class="col-lg-6 col-md-12 my-4">
                  <div class="px-4">
                     <h2 class="h2 text-dark-heading mb-4">Smartphone and Tablet PC Support</h2>
                     <p class="f3 text-dark-content mb-4">Our chauffeurs use smartphones and tablet PCs to stay in constant contact with our dispatching team. This allows us to immediately communicate changes to your schedule, such as pick-up times and destinations, to our chauffeurs at any time. And what's more we can provide our passengers a Wi-Fi network or even a tablet PC free-of-charge if they want to work while they're travelling.</p>
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
import LocationsAndOffices from "../../components/global/LocationsAndOffices";
import setUrlImage from "../../utilities/setUrlImage";
export default {
	name: "software-tracking",
	mixins: [setUrlImage],
	components: {
		NHeader,
		OverlayCard,
		LocationsAndOffices
		// TickIcon
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
