<template>
   <div class="coach-service">
      <n-header display="flex" :has-content="true" min-height="auto">
         <template #content>
            <overlay-card :has-background="true" background-type="gradient" :has-content="true" content-aling="end" :image="image" height="600">
               <template #content>
                  <div class="container">
                     <div class="row">
                        <div class="col-xl-7 col-lg-6 my-4 align-self-end">
                           <h1 class="h1 text-white-heading">Coach Service Frankfurt</h1>
                           <p class="f1 text-white-content mb-4">You want to travel as a group, but you still expect high-quality service. Not only do we have just the answer for this, we also set new standards.</p>
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
            <div class="row justify-content-center">
               <div class="col-xl-12 p-0">
                  <p class="f3 text-dark-content mb-2">Whether you need to shuttle your guests to a large-scale business event or you’d like to organise an exclusive, customised sightseeing tour – the principles that guide the team at INTERLINE Frankfurt in whatever we put our hand to apply here: it has to be comfortable, flexible and safe, regardless of the configuration or size of the coach. With a professional chauffeur to drive you and your guests to their final destination and who also serves as a tourist guide so that you learn more about Frankfurt and the region.</p>
                  <p class="f3 text-dark-content mb-2">And when it comes to being unique, we have an absolute “jewel” for you: our new S411 HD top-class coach. This compact 24-seater takes the word ‘luxury’ to a new level: Its inspired design combined with its superb features – leather seats, air-conditioning, toilet, multimedia entertainment centre and a rear lounge with 2 conference tables – set new standards for the transportation of larger groups of passengers. And the red carpet we roll out for you is all part of the service.</p>
                  <p class="f3 text-dark-content mb-0">However, the other members of our “coach family” here in Frankfurt are equally impressive. Equipped with every amenity, our 6- to 50-seater coaches meet the same exacting standards we place on our exclusive limousines.</p>
               </div>
            </div>
         </div>
      </section>
      <!--  -->

      <!-- Our areas of expertise Section -->
      <section class="our-fleet bg-gold-light py-5">
         <div class="container">
            <div class="row align-items-center ">
               <div class="col-lg-6 col-md-12 my-4">
                  <div class="px-4">
                     <h2 class="h2 text-dark-heading mb-4">What makes our Coach Service unique?</h2>
                     <div>
                        <div class="d-flex align-items-center mb-2">
                           <div class="card-icon sm-icon mb-0 mr-2">
                              <TickIcon fill="gold" />
                           </div>
                           <h5 class="h5 text-dark-content">Experienced and skilled chauffeurs</h5>
                        </div>
                        <div class="d-flex align-items-center mb-2">
                           <div class="card-icon sm-icon mb-0 mr-2">
                              <TickIcon fill="gold" />
                           </div>
                           <h5 class="h5 text-dark-content">coaches available for 6- to 50 persons</h5>
                        </div>
                        <div class="d-flex align-items-center mb-2">
                           <div class="card-icon sm-icon mb-0 mr-2">
                              <TickIcon fill="gold" />
                           </div>
                           <h5 class="h5 text-dark-content">High standard equipment like toilet facilities, computer ports, galley and much more</h5>
                        </div>
                        <div class="d-flex align-items-center mb-2">
                           <div class="card-icon sm-icon mb-0 mr-2">
                              <TickIcon fill="gold" />
                           </div>
                           <h5 class="h5 text-dark-content">Catering staff, if required</h5>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-lg-6 col-md-12 my-4">
                  <div class="card-image border-radius-medium box-shadow-extra-large">
                     <b-img-lazy v-bind="mainProps" :src="setUrlImage('https://www.interline-frankfurt.de/images/contentflex/busservice-1.jpg')" alt="Image 1"></b-img-lazy>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <!--  -->

      <!-- Our special fields Section -->
      <section class="our-fleet pt-5">
         <div class="container">
            <div class="row align-items-center column-reverse">
               <div class="col-lg-6 col-md-12 my-4">
                  <div class="card-image border-radius-medium box-shadow-extra-large">
                     <b-img-lazy v-bind="mainProps" :src="setUrlImage('https://www.interline-frankfurt.de/images/contentflex/flughafentransfer-1.jpg')" alt="Image 1"></b-img-lazy>
                  </div>
               </div>
               <div class="col-lg-6 col-md-12 my-4">
                  <div class="px-4">
                     <h2 class="h2 text-dark-heading mb-4">Our special fields</h2>
                     <div class="d-flex column-in-mobile">
                        <div class="flex-item flex-grow-1">
                           <div class="d-flex align-items-center mb-2">
                              <div class="card-icon sm-icon mb-0 mr-2">
                                 <TickIcon fill="gold" />
                              </div>
                              <h5 class="h5 text-dark-content">Transfer- and shuttle service for events</h5>
                           </div>

                           <div class="d-flex align-items-center mb-2">
                              <div class="card-icon sm-icon mb-0 mr-2">
                                 <TickIcon fill="gold" />
                              </div>
                              <h5 class="h5 text-dark-content">Sightseeing Tours</h5>
                           </div>
                           <div class="d-flex align-items-center mb-2">
                              <div class="card-icon sm-icon mb-0 mr-2">
                                 <TickIcon fill="gold" />
                              </div>
                              <h5 class="h5 text-dark-content">ncentive Tours</h5>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <!--  -->

      <!--  -->
      <LocationsAndOffices />
   </div>
</template>

<script>
import NHeader from "../../components/base/NHeader";
import OverlayCard from "../../components/base/OverlayCard";
import TickIcon from "@/components/svgs/TickIcon";
import LocationsAndOffices from "../../components/global/LocationsAndOffices";
import setUrlImage from "../../utilities/setUrlImage";

export default {
	name: "coach-service",
	mixins: [setUrlImage],
	components: {
		NHeader,
		OverlayCard,
		LocationsAndOffices,
		TickIcon
	},
	data() {
		return {
			image:
				"https://www.interline-frankfurt.de/images/header/busservice-L.jpg",
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
