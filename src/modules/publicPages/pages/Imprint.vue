<template>
   <div class="imprint-page">

      <!--  -->
      <section class="pt-3">
         <div class="container">
            <div class="row justify-content-center">
               <div class="col-xl-10 p-0">
                  <h1 class="h1 text-dark-heading mb-3 mt-5">Imprint</h1>
                  <h3 class="h3 text-dark-content mb-2">INTERLINE Chauffeurservice Eschborn GmbH</h3>
                  <p class="f2 text-dark-content mb-2">Am Kronberger Hang 2</p>
                  <p class="f2 text-dark-content mb-4">65824 Schwalbach</p>
                  <div class="contact-info border-top py-3">
                     Telephone: +49 (0)6196 95060-0
                  </div>
                  <div class="contact-info border-top py-3">
                     Fax: +49 (0)6196 950601-0
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
                  <h2 class="h2 text-dark-heading mb-3">Managing Director:</h2>
                  <p class="f2 text-dark-content mb-2">Michael Fleißner, Michael Trux</p>
                  <div class="border-bottom pt-4"></div>
               </div>
            </div>
         </div>
      </section>
      <!--  -->
      <section class="pt-5">
         <div class="container">
            <div class="row justify-content-center">
               <div class="col-xl-10 p-0">
                  <h2 class="h2 text-dark-heading mb-3">Legal disclosures:</h2>
                  <p class="f2 text-dark-content mb-2">Register court: Frankfurt</p>
                  <p class="f2 text-dark-content mb-2">Register number: HRB 43091</p>
                  <p class="f2 text-dark-content mb-2">VAT Identification Number in accordance with Section 27 a of the German Value Added Tax Act: DE 188703830 Place of jurisdiction:Frankfurt am Main</p>
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
                  <h3 class="h3 text-dark-heading mb-3">Responsible for the contents within the meaning of Section 55 para. 2 of the German Interstate Treaty on Broadcasting:</h3>
                  <p class="f2 text-dark-content mb-2">Michael Fleißner - "Address as shown above"</p>
                  <div class="border-bottom pt-4"></div>
               </div>
            </div>
         </div>
      </section>
      <!--  -->
      <section class="pt-5">
         <div class="container">
            <div class="row justify-content-center">
               <div class="col-xl-10 p-0">
                  <h2 class="h2 text-dark-heading mb-3">Lead Agency:</h2>
                  <p class="f2 text-dark-content mb-2">
                     <a href="http://www.oliv-newton.de" target="_blank" rel="noopener">oliv newton, Full-Service Internetagentur München</a>
                  </p>
                  <div class="contact-info border-top border-bottom py-3">
                     Email:
                     <a href="mailto: webmaster@interline-frankfurt.de"> webmaster@interline-frankfurt.de</a>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <!--  -->
      <section class="pt-5">
         <div class="container">
            <div class="row justify-content-center">
               <div class="col-xl-10 p-0">
                  <h2 class="h2 text-dark-heading mb-3">Photo sources / credits</h2>
                  <p class="f2 text-dark-content mb-2">Homepage parallax picture © Foto: toondelamour / Source: iStock (849137684)</p>
                  <p class="f2 text-dark-content mb-2">Landingpage Dresden-City view: © Foto: anyaivanova / Source:: Fotolia (41066227)</p>
                  <p class="f2 text-dark-content mb-2">Landingpage Hamburg-City view: © Foto: thorabeti / Source: Fotolia (53181478)</p>
                  <p class="f2 text-dark-content mb-2">Landingpage Hanover-City view: © Foto: Mapics / Source: Fotolia (48238078)</p>
                  <p class="f2 text-dark-content mb-2">
                     Unless otherwise indicated, all other images:
                     <strong class="d-block">© INTERLINE Limousine Network GmbH</strong>
                  </p>
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
                  <h2 class="h2 text-dark-heading mb-3">Disclaimer:</h2>
                  <p class="f2 text-dark-content mb-2">This website is entirely independent of the offers of the mentioned companies / brands.</p>
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
// import NHeader from "../components/base/NHeader";
// import OverlayCard from "../components/base/OverlayCard";
import LocationsAndOffices from "../components/global/LocationsAndOffices";
import setUrlImage from "../utilities/setUrlImage";
export default {
	name: "imprint",
	mixins: [setUrlImage],
	components: {
		// NHeader,
		// OverlayCard,
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
