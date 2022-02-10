<template>
   <div class="about-page">
      <n-header display="flex" :has-content="true" min-height="auto">
         <template #content>
            <div class="container">

               <div class="row justify-content-center">
                  <div class="col-xl-10 col-lg-12 my-4 px-0">
                     <overlay-card class="border-radius-medium" has-background background-type="gradient" has-padding has-content content-aling="end" :image="image">
                        <template #content>
                           <h1 class="h1 text-white-heading mb-0">About us</h1>
                        </template>
                     </overlay-card>
                  </div>
               </div>

            </div>
         </template>
      </n-header>

      <!--  -->
      <section class="pt-3">
         <div class="container">
            <div class="row justify-content-center">
               <div class="col-xl-10 p-0">
                  <p class="f2 text-dark-content mb-2">INTERLINE Frankfurt can look back on a long and successful tradition. Since 1986, we have been working in the personal transportation sector. In 1992 we initiated the cooperation in a Germany-wide network, always making sure to work only with the strongest providers in selected locations in order to guarantee the same standard of service – the reliability, the commitment and above all the confidentiality – throughout Germany that our local clients have appreciated from the beginning. INTERLINE Frankfurt also has a long tradition in the tourist sector, and this can still be seen today in our particular affinity to the coach business – of all the companies in the INTERLINE Network today, we are the unrivalled specialists in this particular field.</p>
                  <p class="f2 text-dark-content mb-2">Frankfurt’s rapid rise to its role as the European centre for banking, as well as the steady development of the Rhein-Main region as a key location for all sorts of different sectors of industry have resulted in major growth for our company and, more importantly, for our reputation as a honest, reliable and capable partner.</p>
                  <p class="f2 text-dark-content mb-2">INTERLINE Frankfurt is now one of the leading companies for exclusive chauffeured transportation in the Rhein-Main region. For the banks and financial institutions located here, in particular, we are part of the network of key contacts they turn to when it comes to providing customised solutions for chauffeuring their clients, executives or the delegations visiting them from abroad.</p>
                  <div class="border-bottom pt-4"></div>
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
                  <h2 class="h2 text-dark-heading mb-3">General Company Information</h2>
                  <p class="f2 text-dark-content mb-2">Even behind the scenes, we’re a partner you can rely on absolutely. We’re there for you around the clock to take reservations and to answer any questions you might have about your trip with us – quickly, reliably and precisely.</p>
                  <p class="f2 text-dark-content mb-2">And we check everything to ensure that our service quality meets our own rigorous standards – and, as a result, exceeds your expectations.</p>
                  <p class="f2 text-dark-content mb-2">This is why everyone in the team here in Frankfurt works in accordance with INTERLINE’s proven quality assurance programme that we follow to the letter in everything we do. And this allows us to improve our service constantly and to gear everything we do to the specific needs and demands of our customers.</p>
                  <div class="border-bottom pt-4"></div>
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
                  <h3 class="h3 text-gold-heading mb-0">INTERLINE</h3>
                  <h2 class="h2 text-dark-heading mb-3">partnerships with global market leaders</h2>
                  <p class="f2 text-dark-content mb-2">INTERLINE Frankfurt is not just one of the largest locations of the INTERLINE Network here in Germany; thanks to the partnership with the leading supplier of chauffeured services in the world, CAREY International, Inc. headquartered in the US capital, Washington DC, we are part of a comprehensive network of partners in over 60 countries and more than 1000 cities spread across the globe. Like us, each and every one of them meets exacting demands with regard to quality, service and flexibility. This means you can rest assured that the standard of service you have come to expect from us in Frankfurt is available to you thousands of kilometres away in Singapore.</p>
                  <div class=" py-4 lg-icon">
                     <b-img-lazy v-bind="mainProps" :src="setUrlImage('https://www.interline-frankfurt.de/images/contentinside/carey_claim.png')" alt="Image 1"></b-img-lazy>
                  </div>
                  <p class="f2 text-dark-content text-center mb-2">We have made it our mission to offer our clients a service that we guarantee will be second to none – reliable and in accordance with the most exacting quality standards. In order to ensure this, we have the licences and insurance cover necessary for professional chauffeured transportation companies, and we make full use of state-of-the-art information and communication technology to keep everything running smoothly and, what's more, using only a minimum of paper.</p>
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
				center: true,
				blank: true,
				blankColor: "#bbb"
			}
		};
	}
};
</script>

<style>
</style>
