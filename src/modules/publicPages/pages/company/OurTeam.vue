<template>
   <div class="software-tracking">
      <n-header display="flex" :has-content="true" flex-align="center" min-height="400" class="bg-gold-400">
         <template #content>
            <div class="container">
               <div class="row align-item-center">
                  <div class="col-xl-10 col-lg-12 my-4 align-self-end">
                     <h1 class="h1 text-dark-heading uppercase">INTERLINE team</h1>
                     <p class="f1 text-dark-content mb-2">You climb into an
                        <strong>INTERLINE</strong> limousine and sit back and relax. The “only” person you’ll probably meet is the chauffeur, but a whole team has done everything it can to make your journey run like clockwork.</p>
                     <p class="f1 text-dark-content mb-0">The committed professionals here at INTERLINE Frankfurt are hard at work behind the scenes to keep everything running smoothly…</p>

                  </div>
               </div>
            </div>
         </template>
      </n-header>
      <!--  -->
      <!-- Directors INTERLINE Frankfurt Section -->
      <section class="bg-white py-5">
         <div class="container">
            <h2 class="h2 text-dark-heading mb-3">Directors INTERLINE Frankfurt</h2>
            <div class="row align-items-center ">
               <div class="col-lg-3 col-md-4 my-4">
                  <div class="border-radius-medium">
                     <b-img-lazy v-bind="mainProps" :src="setUrlImage('https://www.interline-frankfurt.de/images/team/Michael-Trux.jpg')" alt="Image 1"></b-img-lazy>
                  </div>
                  <h4 class="h4 text-dark-heading mt-3">
                     Michael Trux
                  </h4>
               </div>
               <div class="col-lg-3 col-md-4 my-4">
                  <div class="border-radius-medium">
                     <b-img-lazy v-bind="mainProps" :src="setUrlImage('https://www.interline-frankfurt.de/images/team/Michael-Fleissner.jpg')" alt="Image 1"></b-img-lazy>
                  </div>
                  <h4 class="h4 text-dark-heading mt-3">
                     Michael Fleißner
                  </h4>
               </div>
            </div>
         </div>
      </section>
      <!--  -->

      <!-- Office team INTERLINE Frankfurt Section -->
      <section class="bg-white border-top border-bottom py-5">
         <div class="container">
            <h2 class="h2 text-dark-heading mb-3">Office team INTERLINE Frankfurt</h2>
            <div class="row align-items-center ">
               <div class="col-lg-3 col-md-4 my-4">
                  <div class="border-radius-medium">
                     <b-img-lazy v-bind="mainProps" :src="setUrlImage('https://www.interline-frankfurt.de/images/team/laura_fernandez.jpg')" alt="Image 1"></b-img-lazy>
                  </div>
                  <h4 class="h4 text-dark-heading mt-3">
                     Laura Fernandez
                  </h4>
                  <h5 class="h5 text-gold-heading ">
                     Reservations / Customer Care
                  </h5>
                  <Languages germany english spanish/>
               </div>
               <div class="col-lg-3 col-md-4 my-4">
                  <div class="border-radius-medium">
                     <b-img-lazy v-bind="mainProps" :src="setUrlImage('https://www.interline-frankfurt.de/images/team/mustafa_abu_iqran.jpg')" alt="Image 1"></b-img-lazy>
                  </div>
                  <h4 class="h4 text-dark-heading mt-3">
                     Mustafa Abu Iqran
                  </h4>
                  <h5 class="h5 text-gold-heading ">
                     Head of Operations
                  </h5>
                  <Languages germany english arabic/>
               </div>
               <div class="col-lg-3 col-md-4 my-4">
                  <div class="border-radius-medium">
                     <b-img-lazy v-bind="mainProps" :src="setUrlImage('https://www.interline-frankfurt.de/images/team/karen_rau.jpg')" alt="Image 1"></b-img-lazy>
                  </div>
                  <h4 class="h4 text-dark-heading mt-3">
                     Karen Rau
                  </h4>
                  <h5 class="h5 text-gold-heading">
                     International Customer Service
                  </h5>
                  <Languages germany english/>
               </div>
            </div>
         </div>
      </section>
      <!--  -->

      <!-- Chauffeurs INTERLINE Frankfurt Section -->
      <section class="bg-white py-5">
         <div class="container">
            <h2 class="h2 text-dark-heading mb-3">Chauffeurs INTERLINE Frankfurt</h2>
            <div class="row align-items-center ">
               <div class="col-lg-3 col-md-4 my-4">
                  <div class="border-radius-medium">
                     <b-img-lazy v-bind="mainProps" :src="setUrlImage('https://www.interline-frankfurt.de/images/team/mergler.jpg')" alt="Image 1"></b-img-lazy>
                  </div>
                  <h4 class="h4 text-dark-heading mt-3">
                     Hans-Dieter Mergler
                  </h4>
                  <h5 class="h5 text-gold-heading ">
                     VIP Chauffeur
                  </h5>
                  <Languages germany english/>
               </div>
               <div class="col-lg-3 col-md-4 my-4">
                  <div class="border-radius-medium">
                     <b-img-lazy v-bind="mainProps" :src="setUrlImage('https://www.interline-frankfurt.de/images/team/skrzipek.jpg')" alt="Image 1"></b-img-lazy>
                  </div>
                  <h4 class="h4 text-dark-heading mt-3">
                     Lothar Skrzipek
                  </h4>
                  <h5 class="h5 text-gold-heading ">
                     DEKRA VIP Chauffeur
                  </h5>
                  <Languages germany english/>
               </div>
               <div class="col-lg-3 col-md-4 my-4">
                  <div class="border-radius-medium">
                     <b-img-lazy v-bind="mainProps" :src="setUrlImage('https://www.interline-frankfurt.de/images/team/miles.jpg')" alt="Image 1"></b-img-lazy>
                  </div>
                  <h4 class="h4 text-dark-heading mt-3">
                     Paul Miles
                  </h4>
                  <h5 class="h5 text-gold-heading">
                     VIP Chauffeur
                  </h5>
                  <Languages germany english/>
               </div>
               <div class="col-lg-3 col-md-4 my-4">
                  <div class="border-radius-medium">
                     <b-img-lazy v-bind="mainProps" :src="setUrlImage('https://www.interline-frankfurt.de/images/team/arsalahn.jpg')" alt="Image 1"></b-img-lazy>
                  </div>
                  <h4 class="h4 text-dark-heading mt-3">
                     Mohammad Arsalahn
                  </h4>
                  <h5 class="h5 text-gold-heading">
                     VIP Chauffeur
                  </h5>
                  <Languages germany english/>
               </div>
               <div class="col-lg-3 col-md-4 my-4">
                  <div class="border-radius-medium">
                     <b-img-lazy v-bind="mainProps" :src="setUrlImage('https://www.interline-frankfurt.de/images/team/ritter.jpg')" alt="Image 1"></b-img-lazy>
                  </div>
                  <h4 class="h4 text-dark-heading mt-3">
                     Udo Ritter
                  </h4>
                  <h5 class="h5 text-gold-heading">
                     VIP Chauffeur
                  </h5>
                  <Languages germany english/>
               </div>
               <div class="col-lg-3 col-md-4 my-4">
                  <div class="border-radius-medium">
                     <b-img-lazy v-bind="mainProps" :src="setUrlImage('https://www.interline-frankfurt.de/images/team/lange.jpg')" alt="Image 1"></b-img-lazy>
                  </div>
                  <h4 class="h4 text-dark-heading mt-3">
                     Tobias Lange
                  </h4>
                  <h5 class="h5 text-gold-heading">
                     DEKRA VIP Chauffeur
                  </h5>
                  <Languages germany english/>
               </div>
               <div class="col-lg-3 col-md-4 my-4">
                  <div class="border-radius-medium">
                     <b-img-lazy v-bind="mainProps" :src="setUrlImage('https://www.interline-frankfurt.de/images/team/rodriguez.jpg')" alt="Image 1"></b-img-lazy>
                  </div>
                  <h4 class="h4 text-dark-heading mt-3">
                     Fernando Rodriguez
                  </h4>
                  <h5 class="h5 text-gold-heading">
                     VIP Chauffeur
                  </h5>
                  <Languages germany english/>
               </div>
               <div class="col-lg-3 col-md-4 my-4">
                  <div class="border-radius-medium">
                     <b-img-lazy v-bind="mainProps" :src="setUrlImage('https://www.interline-frankfurt.de/images/team/Ladda.jpg')" alt="Image 1"></b-img-lazy>
                  </div>
                  <h4 class="h4 text-dark-heading mt-3">
                     Klaus Ladda
                  </h4>
                  <h5 class="h5 text-gold-heading">
                     VIP Chauffeur
                  </h5>
                  <Languages germany english/>
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
// import OverlayCard from "../components/base/OverlayCard";
import Languages from "../../components/global/Languages";
import LocationsAndOffices from "../../components/global/LocationsAndOffices";
import setUrlImage from "../../utilities/setUrlImage";
export default {
	name: "our-team",
	mixins: [setUrlImage],
	components: {
		NHeader,
		Languages,
		LocationsAndOffices
		// TickIcon
	},
	data() {
		return {
			image: "https://www.interline-frankfurt.de/images/header/services3-L.jpg",
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
