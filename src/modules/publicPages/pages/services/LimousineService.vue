<template>
   <div class="limousine-service-page">
      <n-header display="flex" :has-content="true" min-height="auto">
         <template #content>
            <overlay-card :has-background="true" background-type="gradient" :has-content="true" content-aling="end" :image="image" height="500">
               <template #content>
                  <div class="container">
                     <div class="row justify-content-en">
                        <div class="col-xl-10 col-lg-12 my-4 align-self-end">
                           <h1 class="h1 text-white-heading mb-3">Limousine & Chauffeurservice</h1>
                           <p class="f1 text-white-content mb-4">Many people associate limousines only with luxury. At INTERLINE limousine service in Frankfurt, we also think about flexibility – for you.</p>
                        </div>
                     </div>
                  </div>
               </template>
            </overlay-card>
         </template>
      </n-header>
      <!--  -->
      <section class="p-lg-5">
         <div class="container">
            <div class="row justify-content-center">
               <div class="col-xl-6 col-md-6 p-0">
                  <div class="card bg-transparent  border-bottom border-right h-100 border-radius-none">
                     <div class="card-body p-5">
                        <div class="d-flex align-items-center mb-2">
                           <h4 class="h4 text-dark-heading mb-0">Punctually and easily</h4>
                        </div>
                        <p class="f3 text-dark-content mb-0">
                           The limousine is probably the method of transportation that best suits your needs, be it to meet you punctually and easily at Frankfurt’s Rhein-Main International Airport or to get you to an important event in style.
                        </p>
                     </div>
                  </div>
               </div>
               <div class="col-xl-6 col-md-6 p-0">
                  <div class="card bg-transparent border-bottom h-100 border-radius-none">
                     <div class="card-body p-5">
                        <div class="d-flex align-items-center mb-2">
                           <h4 class="h4 text-dark-heading mb-0">Exclusivity, versatility and comfort.</h4>
                        </div>
                        <p class="f3 text-dark-content mb-0">
                           To chauffeur smaller groups, our fleet also includes minibuses that meet the highest demands with regard to exclusivity, versatility and comfort. On request, we provide refreshments, newspapers and other amenities on board.
                        </p>
                     </div>
                  </div>
               </div>
               <div class="col-xl-6 col-md-6 p-0">
                  <div class="card bg-transparent border-bottom border-right h-100 border-radius-none">
                     <div class="card-body p-5">
                        <div class="d-flex align-items-center mb-2">
                           <h4 class="h4 text-dark-heading mb-0">Improve your efficiency.</h4>
                        </div>
                        <p class="f3 text-dark-content mb-0">
                           Offering the highest standards of comfort, INTERLINE Frankfurt offers the latest limousines, minivans, buses and SUVs to allow you to make full use of your valuable time. You avoid stress and, what's more, improve your efficiency.
                        </p>
                     </div>
                  </div>
               </div>
               <div class="col-xl-6 col-md-6 p-0">
                  <div class="card bg-transparent border-bottom h-100 border-radius-none">
                     <div class="card-body p-5">
                        <div class="d-flex align-items-center mb-2">
                           <h4 class="h4 text-dark-heading mb-0">Reliable and discreet chauffeur</h4>
                        </div>
                        <p class="f3 text-dark-content mb-0">
                           You can rest assured that we will always have just the vehicle you need. Driven, of course, by a reliable and discreet chauffeur who not only knows his way around Frankfurt, but who is also at home in the entire Rhein-Main region.
                        </p>
                     </div>
                  </div>
               </div>
               <div class="col-xl-12 p-0">
                  <div class="card bg-transparent h-100 border-radius-none">
                     <div class="card-body p-5">
                        <div class="d-flex align-items-center mb-2">
                           <h4 class="h4 text-dark-heading mb-0">Experienced INTERLINE chauffeur</h4>
                        </div>
                        <p class="f3 text-dark-content mb-0">
                           Elegantly attired in suit and tie, an experienced INTERLINE chauffeur will drive you to wherever it is you need to be quickly, safely and in comfort – to the city centre for a business appointment, to one of the many culinary temples in the vibrant ‘Mainufer’ area down by the river, or to a meeting in one of the Rhein-Main region’s many commercial and industrial centres. In a vehicle from our fully serviced fleet, which comprises the most recent models and types available from the world's leading manufacturers.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <!--  -->

      <!-- Our Modern Fleet Section -->
      <section class="our-fleet bg-gold-light py-5">
         <div class="container">
            <div class="row align-items-center">
               <div class="col-lg-6 col-md-12 my-4">
                  <div class="px-4">

                     <h2 class="h2 text-dark-heading mb-4">Why choose us?</h2>
                     <div>
                        <div class="d-flex align-items-center mb-2">
                           <div class="card-icon sm-icon mb-0 mr-2">
                              <TickIcon fill="gold" />
                           </div>
                           <h5 class="h5 text-dark-content">30 years of experience in exclusive chauffeured service</h5>
                        </div>
                        <div class="d-flex align-items-center mb-2">
                           <div class="card-icon sm-icon mb-0 mr-2">
                              <TickIcon fill="gold" />
                           </div>
                           <h5 class="h5 text-dark-content">Same quality standard in over 1000 cities</h5>
                        </div>
                        <div class="d-flex align-items-center mb-2">
                           <div class="card-icon sm-icon mb-0 mr-2">
                              <TickIcon fill="gold" />
                           </div>
                           <h5 class="h5 text-dark-content">DEKRA certified, permanently employed chauffeurs guarantee high safety and quality</h5>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-lg-6 col-md-12 my-4">
                  <div class="card-image border-radius-medium box-shadow-extra-large">
                     <b-img-lazy v-bind="mainProps" :src="setUrlImage('https://www.interline-frankfurt.de/images/contentflex/flughafentransfer-1.jpg')" alt="Image 1"></b-img-lazy>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <!--  -->

      <!-- Our Modern Fleet Section -->
      <section class="our-fleet  py-5">
         <div class="container">
            <div class="row align-items-center column-reverse">
               <div class="col-lg-6 col-md-12 my-4">
                  <div class="card-image border-radius-medium box-shadow-extra-large">
                     <b-img-lazy v-bind="mainProps" :src="setUrlImage('https://www.interline-frankfurt.de/images/contentflex/flughafentransfer-1.jpg')" alt="Image 1"></b-img-lazy>
                  </div>
               </div>
               <div class="col-lg-6 col-md-12 my-4">
                  <div class="px-4">
                     <h2 class="h2 text-dark-heading mb-4">Our areas of expertise</h2>
                     <div class="d-flex column-in-mobile">
                        <div class="flex-item flex-grow-1">
                           <div class="d-flex align-items-center mb-2">
                              <div class="card-icon sm-icon mb-0 mr-2">
                                 <TickIcon fill="gold" />
                              </div>
                              <h5 class="h5 text-dark-content">Transfer service</h5>
                           </div>

                           <div class="d-flex align-items-center mb-2">
                              <div class="card-icon sm-icon mb-0 mr-2">
                                 <TickIcon fill="gold" />
                              </div>
                              <h5 class="h5 text-dark-content">Shuttle service</h5>
                           </div>
                           <div class="d-flex align-items-center mb-2">
                              <div class="card-icon sm-icon mb-0 mr-2">
                                 <TickIcon fill="gold" />
                              </div>
                              <h5 class="h5 text-dark-content">As directed limousine service</h5>
                           </div>
                           <div class="d-flex align-items-center mb-2">
                              <div class="card-icon sm-icon mb-0 mr-2">
                                 <TickIcon fill="gold" />
                              </div>
                              <h5 class="h5 text-dark-content">Sightseeing and shopping tours</h5>
                           </div>
                        </div>
                        <div class="flex-item flex-grow-1">
                           <div class="d-flex align-items-center mb-2">
                              <div class="card-icon sm-icon mb-0 mr-2">
                                 <TickIcon fill="gold" />
                              </div>
                              <h5 class="h5 text-dark-content">Roadshows</h5>
                           </div>

                           <div class="d-flex align-items-center mb-2">
                              <div class="card-icon sm-icon mb-0 mr-2">
                                 <TickIcon fill="gold" />
                              </div>
                              <h5 class="h5 text-dark-content">Shopping tours</h5>
                           </div>
                           <div class="d-flex align-items-center mb-2">
                              <div class="card-icon sm-icon mb-0 mr-2">
                                 <TickIcon fill="gold" />
                              </div>
                              <h5 class="h5 text-dark-content">Wedding limousine service</h5>
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
      <section class="p-lg-5">
         <div class="container">
            <h3 class="h2 text-dark-heading text-center mx-auto max-text-lmt-x-small mb-4">You prefer travelling in your own car? Just relax in the back, our chauffeur will take the responsibility of driving.</h3>
            <div class="row justify-content-center">
               <div class="col-xl-6 col-md-6 p-0">
                  <div class="card bg-transparent border-bottom border-right h-100 border-radius-none">
                     <div class="card-body p-5">
                        <h4 class="h4 text-dark-heading">Punctually and easily</h4>
                        <p class="f3 text-dark-content mb-0">
                           Sometimes you want to use your own car, but you need someone to do the thinking and the driving for you, so you can use the time to work or to relax. This is where INTERLINE’s exclusive chauffeur service is the perfect solution.
                        </p>
                     </div>
                  </div>
               </div>
               <div class="col-xl-6 col-md-6 p-0">
                  <div class="card bg-transparent border-bottom h-100 border-radius-none">
                     <div class="card-body p-5">
                        <h4 class="h4 text-dark-heading">Exclusivity, versatility and comfort.</h4>
                        <p class="f3 text-dark-content mb-0">
                           Absolutely professional, reliable, flexible and courteous, all INTERLINE chauffeurs are permanently employed by us and regularly attend vocational training seminars and driving safety courses.
                        </p>
                     </div>
                  </div>
               </div>
               <div class="col-xl-12 col-md-12 p-0">
                  <div class="card bg-transparent h-100 border-radius-none">
                     <div class="card-body p-5">
                        <h4 class="h4 text-dark-heading">Exclusivity, versatility and comfort.</h4>
                        <p class="f3 text-dark-content mb-0">
                           Our multilingual and smartly attired chauffeurs will be more than happy to take over the task of driving. And like all INTERLINE chauffeurs, the unique team that assumes responsibility for either your own car or, during events, even your entire company fleet is not only specially trained for the job, but also fully familiar with the region’s dense and sometimes confusing network of motorways and roads.
                        </p>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </section>
      <!--  -->

      <!-- Our Modern Fleet Section -->
      <section class="our-fleet bg-gold-light py-5">
         <div class="container">
            <div class="row align-items-center ">
               <div class="col-lg-6 col-md-12 my-4">
                  <div class="px-4">
                     <h2 class="h2 text-dark-heading mb-4">Reasons to book an INTERLINE Chauffeur</h2>
                     <div>
                        <div class="d-flex align-items-center mb-2">
                           <div class="card-icon sm-icon mb-0 mr-2">
                              <TickIcon fill="gold" />
                           </div>
                           <h5 class="h5 text-dark-content">Permanently employed, DEKRA certified chauffeurs guarantee quality and safety</h5>
                        </div>
                        <div class="d-flex align-items-center mb-2">
                           <div class="card-icon sm-icon mb-0 mr-2">
                              <TickIcon fill="gold" />
                           </div>
                           <h5 class="h5 text-dark-content">Absolute discretion because of contractually obliged staff</h5>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-lg-6 col-md-12 my-4">
                  <div class="card-image border-radius-medium box-shadow-extra-large">
                     <b-img-lazy v-bind="mainProps" :src="setUrlImage('https://www.interline-frankfurt.de/images/contentflex/chauffeurservice-1.jpg')" alt="Image 1"></b-img-lazy>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <!--  -->

      <!-- Our Modern Fleet Section -->
      <section class="our-fleet pt-5">
         <div class="container">
            <div class="row align-items-center column-reverse">
               <div class="col-lg-6 col-md-12 my-4">
                  <div class="card-image border-radius-medium box-shadow-extra-large">
                     <b-img-lazy v-bind="mainProps" :src="setUrlImage('https://www.interline-frankfurt.de/images/contentflex/limousinenservice-2.jpg')" alt="Image 1"></b-img-lazy>
                  </div>
               </div>
               <div class="col-lg-6 col-md-12 my-4">
                  <div class="px-4">
                     <h2 class="h2 text-dark-heading mb-4">We are specialized in</h2>
                     <div class="d-flex column-in-mobile">
                        <div class="flex-item flex-grow-1">
                           <div class="d-flex align-items-center mb-2">
                              <div class="card-icon sm-icon mb-0 mr-2">
                                 <TickIcon fill="gold" />
                              </div>
                              <h5 class="h5 text-dark-content">Private chauffeur</h5>
                           </div>
                           <div class="d-flex align-items-center mb-2">
                              <div class="card-icon sm-icon mb-0 mr-2">
                                 <TickIcon fill="gold" />
                              </div>
                              <h5 class="h5 text-dark-content">Business chauffeur</h5>
                           </div>
                           <div class="d-flex align-items-center mb-2">
                              <div class="card-icon sm-icon mb-0 mr-2">
                                 <TickIcon fill="gold" />
                              </div>
                              <h5 class="h5 text-dark-content">Sightseeing chauffeur</h5>
                           </div>
                        </div>

                        <div class="flex-item flex-grow-1">
                           <div class="d-flex align-items-center mb-2">
                              <div class="card-icon sm-icon mb-0 mr-2">
                                 <TickIcon fill="gold" />
                              </div>
                              <h5 class="h5 text-dark-content">VIP chauffeur</h5>
                           </div>
                           <div class="d-flex align-items-center mb-2">
                              <div class="card-icon sm-icon mb-0 mr-2">
                                 <TickIcon fill="gold" />
                              </div>
                              <h5 class="h5 text-dark-content">Chauffeur for weddings</h5>
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
      <section class="our-fleet">
         <div class="container-fluid">
            <div class="row justify-content-center">
               <div class="col-xl-6 mb-4 p-0">
                  <overlay-card :has-background="true" background-type="gradient" :has-padding="true" :has-content="true" content-aling="end" :image="''" height="">
                     <template #content>

                     </template>
                  </overlay-card>
               </div>

            </div>
         </div>
      </section>
      <!--  -->
      <!-- Locations And Offices -->
      <LocationsAndOffices />
      <!--  -->
   </div>
</template>

<script>
import NHeader from "../../components/base/NHeader";
import OverlayCard from "../../components/base/OverlayCard";
// import RentalCard from "../components/global/RentalCard";
import LocationsAndOffices from "../../components/global/LocationsAndOffices";
import TickIcon from "@/components/svgs/TickIcon";
import setUrlImage from "../../utilities/setUrlImage";
export default {
	name: "limousine",
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
			image:
				"https://www.interline-frankfurt.de/images/header/limousinen-chauffeur-service2-L.jpg",
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
