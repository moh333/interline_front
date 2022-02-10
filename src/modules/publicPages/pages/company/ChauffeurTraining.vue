<template>
   <div class="chauffeur-training">
      <n-header display="flex" :has-content="true" min-height="auto">
         <template #content>
            <div class="container">
               <div class="row justify-content-center">
                  <div class="col-xl-10 col-lg-12 my-4 px-0">
                     <overlay-card class="border-radius-medium" has-background background-type="gradient" has-padding has-content content-aling="end" :image="image" />
                  </div>
               </div>

            </div>
         </template>
      </n-header>

      <!--  -->
      <section class="pt-5">
         <div class="container">
            <div class="row justify-content-center">
               <div class="col-xl-10 p-0">
                  <h1 class="h1 text-dark-heading mb-3">VIP Chauffeur Training</h1>
                  <p class="f2 text-dark-content mb-2">Enhancing the job profile of chauffeurs in Germany, defining new standards and perceptibly improving safety and service quality – that's our aim. And to achieve this, we work closely with Bruseco and DEKRA.</p>
                  <div class="border-bottom pt-4"></div>
               </div>
            </div>
         </div>
      </section>
      <!--  -->

      <!--  -->
      <section class="pt-3">
         <div class="container">
            <div class="row justify-content-center">
               <div class="col-xl-10 p-0">
                  <div class=" py-4 lg-icon">
                     <a href="http://www.bruseco.de/" target="_blank">
                        <b-img-lazy v-bind="mainProps" :src="setUrlImage('https://www.interline-frankfurt.de/images/contentinside/bruseco-logo_web150x67.png')" alt="Image 1"></b-img-lazy>
                     </a>
                  </div>
                  <p class="f2 text-dark-content mb-2">Bruseco is the first institute to offer professional training that awards chauffeurs a DEKRA-certified qualification. Training as a chauffeur with Bruseco can greatly benefit chauffeurs whose aim is to serve the most discerning of customers – executive board members, top managers, government officials, politicians and VIPs.</p>
                  <p class="f2 text-dark-content mb-2">The course concludes with a final examination set by DEKRA. To graduate successfully, DEKRA-certified VIP-chauffeurs have to fulfil extremely exacting demands regarding general traffic know-how, driving security, safety, attention and social skills.</p>
                  <p class="f2 text-dark-content mb-2">By undertaking professional training with Bruseco you already benefit at both a social and a driving level – exactly what you need to help you advance as a chauffeur. More and more companies, employers and clients insist on the DEKRA D1 Certificate from Bruseco.</p>
                  <p class="f2 text-dark-content mb-2">During your chauffeur training at Bruseco you practice both on public streets and on closed circuits. In addition to expanding your driving skills, a great deal of attention is given to topics like vehicle control, topographic knowledge and knowledge of traffic rules and traffic signs. Particular focus is given to training in the fields of professional ethics, manners and on how to deal with passengers.</p>
                  <div class="border-bottom pt-4"></div>
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
import LocationsAndOffices from "../../components/global/LocationsAndOffices";
import setUrlImage from "../../utilities/setUrlImage";
export default {
	name: "about-us",
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
			image: "https://www.interline-frankfurt.de/images/header/ueber-uns-L.jpg",
			mainProps: {
				blank: true,
				blankColor: "#bbb"
			}
		};
	}
};
</script>

<style>
</style>
