<template>
   <!--  -->
   <div class="position-relative lg-border-bottom">
      <overlay-card :has-content="true" :image="image" height="500">
         <template #content>
            <div class="row align-items-center h-100">
               <div class="col-xl-5 col-lg-6 h-100">
                  <div class="card border-radius-none bg-blue-700 h-100">
                     <div class="card-body p-5">
                        <h2 class="h2 text-white-heading mb-3"> {{name}} </h2>
                        <p class="f2 text-white-content mb-2 max-text-lmt-medium"> {{infos[0]}} </p>
                        <div class="d-flex my-5">
                           <div class="flex-item">
                              <div class="d-flex align-items-center">
                                 <div class="sx-icon mr-2">
                                    <TickIcon fill="gold" />
                                 </div>
                                 <h5 class="h5 text-white-heading mb-0">{{passengers}} Passengers</h5>
                              </div>
                           </div>
                           <div class="flex-item mx-4">
                              <div class="d-flex align-items-center">
                                 <div class="sx-icon mr-2">
                                    <TickIcon fill="gold" />
                                 </div>
                                 <h5 class="h5 text-white-heading mb-0">{{travelBag}} Travel Bag</h5>
                              </div>
                           </div>
                           <div class="flex-item">
                              <div class="d-flex align-items-center">
                                 <div class="sx-icon mr-2">
                                    <TickIcon fill="gold" />
                                 </div>
                                 <h5 class="h5 text-white-heading mb-0">{{briefcase}} Briefcase</h5>
                              </div>
                           </div>
                        </div>
                        <div class="btns has-effect">
                           <router-link :to="{name: 'vehicle-details', params: {name: name}}" class="btn main-btn gold-btn rounded mr-2 my-lg-auto uppercase layout-effect">
                              {{$t('buttons.learn_more')}}
                           </router-link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

         </template>
      </overlay-card>
   </div>
   <!--  -->
</template>

<script>
import OverlayCard from "../../components/base/OverlayCard";
import TickIcon from "@/components/svgs/TickIcon";
export default {
	name: "vehicle",
	components: {
		OverlayCard,
		TickIcon
	},
	props: {
		image: {
			type: String,
			default: () => {}
		},
		name: {
			type: String,
			default: () => {}
		},
		infos: {
			type: Array,
			default: () => {}
		},
		passengers: {
			type: Number,
			default: () => {}
		},
		travelBag: {
			type: Number,
			default: () => {}
		},
		briefcase: {
			type: Number,
			default: () => {}
		},
		link: {
			type: String,
			default: () => {}
		}
	},
	methods: {
		formatName(name) {
			var format = name.split(" ").join("-");
			return format.toLowerCase();
		}
	},
	mounted() {
		this.formatName(this.$route.params.name);
	}
};
</script>

<style>
</style>
