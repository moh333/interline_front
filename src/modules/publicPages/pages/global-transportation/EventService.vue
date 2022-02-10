<template>
   <div class="coach-service">
      <n-header display="flex" :has-content="true" min-height="auto">
         <template #content>
            <overlay-card :has-background="true" background-type="gradient" :has-padding="true" :has-content="true" content-aling="center" :image="image" height="600">
               <template #content>
                  <div class="container-fluid">
                     <div class="row justify-content-end">
                        <div class="col-xl-8 col-lg-8 my-4 align-self-end">
                           <div class="card bg-white h-100 border-radius-medium box-shadow-extra-large">
                              <div class="card-body">
                                 <div class="p-3">
                                    <h1 class="h1 text-dark-heading mb-4">Global Transportation / Events</h1>
                                    <p class="f3 text-dark-content mb-2">Your event has to run smoothly. So INTERLINE Frankfurt’s capable team is there behind the scenes to keep everything on track.</p>
                                    <p class="f3 text-dark-content mb-2">Frankfurt’s central location both within Germany and in Europe as a whole, as well as the wide range of opportunities the city has to offer have all contributed towards making this progressive tradeshow metropolis and museum location a sought-after place for international events. The openness of the people combined with the city’s cosmopolitan flair and its down-to-earth traditions make Frankfurt extremely attractive for event organisers and planners, as well as for the international banks and industrial enterprises located in the Rhein-Main region.</p>
                                    <p class="f3 text-dark-content mb-2">But no matter how attractive or special the location or venue happens to be, any event is only truly successful when your guests feel at ease. So to be certain that they are relaxed and ready to enjoy themselves from the moment they arrive, the experienced event team from INTERLINE Frankfurt is there to ensure that everyone attending the event is at the right place at precisely the right time.</p>
                                    <p class="f3 text-dark-content mb-2">Over the years, we have acquired considerable know-how in this particular field. As logistics specialists for large-scale international sporting, cultural or fashion events and for major economic congresses in Frankfurt and the surrounding area, and have become trusted operational and consulting partners for event organisers and planners alike.</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </template>
            </overlay-card>
         </template>
      </n-header>
      <!--  -->

      <!-- Our Modern Fleet Section -->
      <section class="our-fleet  py-5">
         <div class="container">
            <div class="row align-items-center">
               <div class="col-xl-6 my-4">
                  <div class="pl-0 pr-lg-5">
                     <h2 class="h2 text-dark-heading mb-4">Transfers</h2>
                     <p class="f3 card-text text-dark-content">All you have to do is let us know when your guests will be arriving and we’ll collect them and make sure they get to your event on time. Our courteous chauffeurs will be waiting to greet your guests at the agreed collection point – be it in the arrivals hall of the airport, at the station in the heart of Frankfurt or in the lobby of one of the city’s many luxury hotels.</p>

                  </div>
               </div>
               <div class="col-xl-6 my-4">
                  <div class="card-image border-radius-medium box-shadow-extra-large">
                     <b-img-lazy v-bind="mainProps" :src="setUrlImage('https://www.interline-frankfurt.de/images/contentflex/global-transportation-events-1.jpg')" alt="Image 1"></b-img-lazy>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <!--  -->

      <!-- Our Modern Fleet Section -->
      <section class="our-fleet bg-gold-light py-5">
         <div class="container">
            <div class="row align-items-center column-reverse">

               <div class="col-xl-6 my-4">
                  <div class="card-image border-radius-medium box-shadow-extra-large">
                     <b-img-lazy v-bind="mainProps" :src="setUrlImage('https://www.interline-frankfurt.de/images/contentflex/global-transportation-events-2.jpg')" alt="Image 1"></b-img-lazy>
                  </div>
               </div>
               <div class="col-xl-6 my-4">
                  <div class="pl-0 pl-xl-5">
                     <h2 class="h2 text-dark-heading mb-4">Event shuttles</h2>
                     <p class="f3 card-text text-dark-content">Our exclusive fleet of vehicles – stylish limousines, luxurious people carriers, buses of every size – is available around the clock to chauffeur your customers, business associates and friends in safety and comfort from the hotel to the event location and back again. Together with you, we will draw up accurate shuttle plans to ensure that everything runs smoothly and without any stress whatsoever.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <!--  -->

      <!-- Our Modern Fleet Section -->
      <section class="our-fleet py-5">
         <div class="container">
            <div class="row align-items-center ">
               <div class="col-xl-6 my-4">
                  <div class="pl-0 pr-lg-5">
                     <h2 class="h2 text-dark-heading mb-4">Transportation management</h2>
                     <p class="f3 card-text text-dark-content">The customised logistics solutions INTERLINE Frankfurt offers have proved their worth time and again. At world-class conferences, international tradeshows or at the support programmes surrounding these events, we chauffeur guests and event attendees to wherever it is they need to be – punctually, safely and in comfort.</p>
                  </div>
               </div>
               <div class="col-xl-6 my-4">
                  <div class="card-image border-radius-medium box-shadow-extra-large">
                     <b-img-lazy v-bind="mainProps" :src="setUrlImage('https://www.interline-frankfurt.de/images/contentflex/global-transportation-events-3.jpg')" alt="Image 1"></b-img-lazy>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <!--  -->

      <!-- Our Modern Fleet Section -->
      <section class="our-fleet bg-gold-light py-5">
         <div class="container">
            <div class="row align-items-center column-reverse">
               <div class="col-xl-6 my-4">
                  <div class="card-image border-radius-medium box-shadow-extra-large">
                     <b-img-lazy v-bind="mainProps" :src="setUrlImage('https://www.interline-frankfurt.de/images/contentflex/global-transportation-events-4.jpg')" alt="Image 1"></b-img-lazy>
                  </div>
               </div>
               <div class="col-xl-6 my-4">
                  <div class="pl-0 pl-lg-5">
                     <h2 class="h2 text-dark-heading mb-4">Hostesses</h2>
                     <p class="f3 card-text text-dark-content">On request, we will be happy to provide a multilingual and fully trained team of hostesses to make certain that there are no last-minute glitches. This exclusive welcoming committee is at hand before and during the event to coordinate your guests’ shuttle requirements. A competent and, at the same time, charming point of contact for your guests, our hostesses take care of everything related to their transportation needs and maintain constant contact with our team of chauffeurs and our on-site coordinators.</p>
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
import NHeader from "../../components/base/NHeader";
import OverlayCard from "../../components/base/OverlayCard";
// import RentalCard from "../components/global/RentalCard";
// import TickIcon from "@/components/svgs/TickIcon";
import LocationsAndOffices from "../../components/global/LocationsAndOffices";
import setUrlImage from "../../utilities/setUrlImage";

export default {
	name: "airport-transfer",
	mixins: [setUrlImage],
	components: {
		NHeader,
		OverlayCard,
		// RentalCard,
		LocationsAndOffices
		// TickIcon
	},
	data() {
		return {
			image:
				"https://www.interline-frankfurt.de/images/header/global-transportation-event-L.jpg",
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
