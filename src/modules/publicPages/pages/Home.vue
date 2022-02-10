<template>
   <div class="home-page">
      <n-header display="flex" :slider-id="'home-page-slider'" :has-slider="true" :has-content="true" :imagesUrl="images" min-height="auto">
         <template #content>
            <div class="container">
               <div class="row justify-content-end">
                  <div class="col-xl-5 col-lg-6 my-4">
                     <RentalCard />
                  </div>
               </div>
            </div>
            <div class="backdrop-box">
               <div class="container">
                  <div class="row">
                     <div class="col-xl-4 col-md-8">
                        <div class="card line-left bg-transparent border-radius-none">
                           <div class="card-body p-4">
                              <div class="card-icon sm-icon">
                                 <CheckIcon fill="white" />
                              </div>
                              <p class="h4 card-text text-white-content">{{$t('features.experience')}}</p>
                           </div>
                        </div>
                     </div>
                     <div class="col-xl-4 col-md-8">
                        <div class="card line-left bg-transparent border-radius-none">
                           <div class="card-body p-4">
                              <div class="card-icon sm-icon">
                                 <CheckIcon fill="white" />
                              </div>
                              <p class="h4 card-text text-white-content">{{$t('features.certified')}}</p>
                           </div>
                        </div>
                     </div>
                     <div class="col-xl-4 col-md-8">

                        <div class="card line-left bg-transparent border-radius-none">
                           <div class="card-body p-4">
                              <div class="card-icon sm-icon">
                                 <CheckIcon fill="white" />
                              </div>
                              <p class="h4 card-text text-white-content">{{$t('features.quality')}}</p>
                           </div>
                        </div>
                     </div>

                  </div>
               </div>

            </div>
         </template>
      </n-header>
      <!-- About us Section -->
      <section class="about-us bg-white py-5">
         <div class="container">
            <div class="row">
               <div class="col-xl-5">
                  <div class="card-image border-radius-medium">
                     <b-img-lazy v-bind="mainProps" :src="setUrlImage('https://www.interline-frankfurt.de/images/header/services3-L.jpg')" alt="Image 1"></b-img-lazy>
                  </div>
               </div>
               <div class="col-xl-7">
                  <div class="p-lg-5 py-4">
                     <h2 class="h2 text-dark-heading">{{$t('nav.about_us')}}</h2>

                     <p class="f3 card-text text-dark-content">{{$t('about_us.info_1')}}</p>
                     <p class="f3 card-text text-dark-content">{{$t('about_us.info_2')}}</p>
                     <router-link class="btn main-btn gold-btn medium-btn rounded mr-2 mt-4 uppercase" to="/about-us">
                        {{$t('buttons.learn_more')}}
                     </router-link>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <!--  -->

      <!-- Our Services Section -->
      <section class="bg-gray-120">
         <div class="container">
            <div class="py-5 px-sm-4">
               <div class="row justify-content-between align-items-center">
                  <div class="col-lg-6 mb-4">
                     <h2 class="h2 text-dark-heading">{{$t('our_services.title')}}</h2>
                     <p class="f3 card-text text-dark-content">{{$t('our_services.info_1')}}</p>
                  </div>
               </div>
            </div>
         </div>
         <div class="container-fluid">
            <div class="row">
               <div class="col-xl-4 col-lg-12 p-0" v-for="(service, index) in $t('our_services.services')" :key="index">
                  <overlay-card :has-background="true" :has-padding="true" background-type="gradient" :has-content="true" content-aling="end" :image="service.image" height="400">
                     <template #content>
                        <h3 class="h3 text-white-heading mb-3"> {{$t(service.title)}}</h3>
                        <div class="d-flex justify-content-between">
                           <span class="h5 text-white-heading uppercase"> {{$t('buttons.learn_more')}}</span>
                           <div class="card-icon sm-icon mb-0">
                              <ArrowIcon fill="white" />
                           </div>
                        </div>
                        <router-link class="stretched-link" :to="service.link"></router-link>
                     </template>
                  </overlay-card>
               </div>
            </div>
         </div>
      </section>
      <!--  -->

      <!-- Our Modern Fleet Section -->
      <section class="our-fleet bg-white">
         <div class="container">
            <div class="py-5 px-sm-4">

               <div class="row justify-content-between align-items-center">
                  <div class="col-lg-8 mb-4">
                     <h2 class="h2 text-dark-heading">{{$t('Fleet.title')}}</h2>
                     <p class="f3 card-text text-dark-content">{{$t('Fleet.info_1')}}</p>
                     <p class="f3 card-text text-dark-content mb-0">{{$t('Fleet.info_2')}}</p>
                  </div>

               </div>
            </div>

         </div>

         <div class="container-fluid">
            <div class="row">
               <div class="col-xl-4 col-lg-12 p-0" v-for="(item, index) in $t('Fleet.fleet')" :key="index">
                  <overlay-card :has-background="true" :has-padding="true" background-type="gradient" :has-content="true" content-aling="end" :image="item.image" height="400">
                     <template #content>
                        <h3 class="h3 text-white-heading mb-3"> {{$t(item.title)}}</h3>
                        <div class="d-flex justify-content-between">
                           <span class="h5 text-white-heading uppercase"> {{$t('buttons.learn_more')}}</span>
                           <div class="card-icon sm-icon mb-0">
                              <ArrowIcon fill="white" />
                           </div>
                        </div>
                        <router-link class="stretched-link" :to="item.link"></router-link>
                     </template>
                  </overlay-card>
               </div>
            </div>
         </div>
      </section>
      <!--  -->

      <!-- Facts Section -->
      <section class="facts pb-3">
         <div class="facts-wrap bg-gray-120 pt-5">
            <div class="container">
               <div class="row">
                  <div class="col-xl-3 col-md-6" v-for="fact in $t('facts')" :key="fact.id">
                     <div class="card text-center bg-transparent">
                        <div class="card-body">
                           <div class="card-icon sm-icon">
                              <component :is="fact.icon" fill="gold"></component>
                           </div>
                           <h3 class="h3 text-dark-heading">{{fact.numbers}}</h3>
                           <h5 class="h5 text-dark-heading">{{$t(fact.info)}}</h5>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="box-container">
            <div class="row justify-content-center">
               <div class="col-lg-8">
                  <div class="facts-infos bg-white p-5 rounded box-shadow-medium">
                     <p class="f3 card-text text-dark-content" v-for="(finance, index) in $t('finances')" :key="index">{{$t(finance)}}</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <LocationsAndOffices />

      <template v-if="overlay">
         <div class="overlay_lang">
            <div class="spinner-border" role="status">
               <span class="sr-only">Loading...</span>
            </div>
         </div>
      </template>
   </div>
</template>

<script>
import NHeader from "../components/base/NHeader";
import OverlayCard from "../components/base/OverlayCard";
import LocationsAndOffices from "../components/global/LocationsAndOffices";
import RentalCard from "../components/global/RentalCard";
import setUrlImage from "../utilities/setUrlImage";
import CheckIcon from "@/components/svgs/CheckIcon";
import ArrowIcon from "@/components/svgs/ArrowIcon";
import DriverIcon from "@/components/svgs/DriverIcon";
import BriefcaseIcon from "@/components/svgs/BriefcaseIcon";
import LocationIcon from "@/components/svgs/LocationIcon";
import PartnershipIcon from "@/components/svgs/PartnershipIcon";

// import $ from "jquery";
export default {
	name: "home",
	mixins: [setUrlImage],
	components: {
		NHeader,
		OverlayCard,
		LocationsAndOffices,
		RentalCard,
		CheckIcon,
		ArrowIcon,
		DriverIcon,
		BriefcaseIcon,
		LocationIcon,
		PartnershipIcon
	},
	data() {
		return {
			images: [
				"https://www.interline-frankfurt.de/images/header/flotte-L.jpg",
				"https://www.interline-frankfurt.de/images/header/home-S.jpg"
			],
			facts: [
				{
					id: 1,
					numbers: "611,079",
					icon: "BriefcaseIcon",
					info: "jobs in Germany and abroad <br> (since 2000)"
				},
				{
					id: 2,
					numbers: "1,000+",
					icon: "LocationIcon",
					info: "business locations worldwide"
				},
				{
					id: 3,
					numbers: "500",
					icon: "PartnershipIcon",
					info: "partners in over 60 countries"
				},
				{
					id: 4,
					numbers: "46,486,411",
					icon: "DriverIcon",
					info:
						"km driven of the entire INTERLINE group (since 2000 in Germany)"
				}
			],
			mainProps: {
				center: true,
				fluidGrow: true,
				blank: true,
				blankColor: "#bbb"
			},
			windowHeight: window.innerHeight,
			txt: ""
		};
	},
	watch: {
		windowHeight(newHeight, oldHeight) {
			this.txt = `it changed to ${newHeight} from ${oldHeight}`;
		}
	},
	computed: {
		overlay: {
			get() {
				return this.$store.state.publicPages.overlay;
			},
			set(value) {
				this.$store.commit("overlay", value);
			}
		}
	},
	mounted() {
		this.windowHeight;
		this.$nextTick(() => {
			window.addEventListener("resize", this.onResize);
		});
	}
};
</script>

<style>
</style>
