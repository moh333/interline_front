<template>
   <div class="p_layout pt-4">

      <template v-if="loading">

         <nav aria-label="breadcrumb ">
            <ol class="breadcrumb bg-transparent">
               <li class="breadcrumb-item">
                  <router-link to="/vehicles">{{$t('nav.vehicles')}}</router-link>
               </li>
               <li class="breadcrumb-item active" aria-current="page">{{vehicle.name}}</li>
            </ol>
         </nav>

         <div class="row">
            <div class="col-lg-12 mb-2">
               <div class="card border">
                  <div class="card-body p-4">
                     <div class="d-flex justify-content-between align-items-center">
                        <div class="vehicle-info d-flex align-items-center">
                           <div class="flex-item img-preview__sm">
                              <img src="@/assets/IL95_1-MB_V--Klasse_Front-removebg-preview.png" alt="">
                           </div>
                           <div class="flex-item ml-3">
                              <h4 class="h4 text-dark-heading mb-2">{{vehicle.name}}</h4>
                              <h4 class="h5 text-dark-content mb-0">{{vehicle.license}}</h4>
                           </div>
                        </div>
                        <div class="vehicle-info">
                           <h4 class="h5 item-status text-center text-dark-heading mb-1 mr-2" :class="vehicle.status.split(' ').join('-')">{{vehicle.status}}</h4>
                           <!-- <setting-btn class="me-2" :routeName="'vehicle-setting'"></setting-btn> -->
                           <remove-btn @click.native="removeItem(vehicle.id)"></remove-btn>
                           <router-link :to="{name: 'edit-vehicle', params: {id: vehicle.id}}" class="btn bg-gray-light int-trip crlc-icon mr-2 ">
                              <svg class="fill-blue-300" height="16" viewBox="0 0 32 32" width="16" xmlns="http://www.w3.org/2000/svg" data-name="Layer 2">
                                 <path d="m22.533 4.319 3.026-3.026a1 1 0 0 1 1.414 0l3.734 3.733a1 1 0 0 1 0 1.414l-3.026 3.027zm-1.414 1.414-17.96 17.96a1 1 0 0 0 -.241.391l-1.866 5.6a1 1 0 0 0 .948 1.316.987.987 0 0 0 .316-.052l5.6-1.866a1.011 1.011 0 0 0 .391-.241l17.959-17.96z" />
                              </svg>
                           </router-link>

                        </div>
                     </div>

                  </div>

               </div>
            </div>
            <div class="col-lg-12 mb-2">
               <div class="card bg-transparent">
                  <div class="card-body p-0">
                     <h3 class="h3 text-dark-heading mb-3 mt-4">Vehicle details</h3>
                     <div class="d-flex justify-content-start align-items-center mb-3 flex-wrap">
                        <div class="vehicle-info flex-basis-4 mb-2 p-3 bg-white border mr-2">
                           <h5 class="h5 text-dark-heading mb-2 uppercase">provider</h5>
                           <h4 class="h4 text-dark-content mb-0 capitalize">{{vehicle.provider}}</h4>
                        </div>
                        <div class="vehicle-info flex-basis-4 mb-2 p-3 bg-white border mr-2">
                           <h5 class="h5 text-dark-heading mb-2 uppercase">type</h5>
                           <h4 class="h4 text-dark-content mb-0 capitalize">{{vehicle.type}}</h4>
                        </div>
                        <div class="vehicle-info flex-basis-4 mb-2 p-3 bg-white border mr-2">
                           <h5 class="h5 text-dark-heading mb-2 uppercase">Class</h5>
                           <h5 class="h5 text-dark-content mb-0 capitalize">{{vehicle.v_class}}</h5>
                        </div>
                        <div class="vehicle-info flex-basis-4 mb-2 p-3 bg-white border mr-2">
                           <h5 class="h5 text-dark-heading mb-2 uppercase">size</h5>
                           <h4 class="h4 text-dark-content mb-0 capitalize">{{vehicle.size}}</h4>
                        </div>
                        <div class="vehicle-info flex-basis-4 mb-2 p-3 bg-white border mr-2">
                           <h5 class="h5 text-dark-heading mb-2 uppercase">category</h5>
                           <h4 class="h4 text-dark-content mb-0 capitalize">{{vehicle.category}}</h4>
                        </div>
                        <div class="vehicle-info flex-basis-4 mb-2 p-3 bg-white border mr-2">
                           <h5 class="h5 text-dark-heading mb-2 uppercase">pax</h5>
                           <h4 class="h4 text-dark-content mb-0 capitalize">{{vehicle.pax}}</h4>
                        </div>
                        <div class="vehicle-info flex-basis-4 mb-2 p-3 bg-white border mr-2">
                           <h5 class="h5 text-dark-heading mb-2 uppercase">res</h5>
                           <h4 class="h4 text-dark-content mb-0 capitalize">{{vehicle.res}}</h4>
                        </div>
                        <div class="vehicle-info flex-basis-4 mb-2 p-3 bg-white border mr-2">
                           <h5 class="h5 text-dark-heading mb-2 uppercase">min</h5>
                           <h4 class="h4 text-dark-content mb-0 capitalize">{{vehicle.min}}km/h</h4>
                        </div>
                        <div class="vehicle-info flex-basis-4 mb-2 p-3 bg-white border mr-2">
                           <h5 class="h5 text-dark-heading mb-2 uppercase">max</h5>
                           <h4 class="h4 text-dark-content mb-0 capitalize">{{vehicle.max}}km/h</h4>
                        </div>
                        <div class="vehicle-info flex-basis-4 mb-2 p-3 bg-white border mr-2">
                           <h5 class="h5 text-dark-heading mb-2 uppercase">t_min</h5>
                           <h4 class="h4 text-dark-content mb-0 capitalize">{{vehicle.t_min}}</h4>
                        </div>
                        <div class="vehicle-info flex-basis-4 mb-2 p-3 bg-white border mr-2">
                           <h5 class="h5 text-dark-heading mb-2 uppercase">t_max</h5>
                           <h4 class="h4 text-dark-content mb-0 ca2italize">{{vehicle.t_max}}</h4>
                        </div>
                        <div class="vehicle-info flex-basis-4 mb-2 p-3 bg-white border mr-2">
                           <h5 class="h5 text-dark-heading mb-2 uppercase">t_max</h5>
                           <h4 class="h4 text-dark-content mb-0 capitalize">{{vehicle.t_max}}</h4>
                        </div>
                        <div class="vehicle-info flex-basis-4 mb-2 p-3 bg-white border mr-2">
                           <h5 class="h5 text-dark-heading mb-2 uppercase">s_min</h5>
                           <h4 class="h4 text-dark-content mb-0 capitalize">{{vehicle.s_min}}</h4>
                        </div>
                        <div class="vehicle-info flex-basis-4 mb-2 p-3 bg-white border mr-2">
                           <h5 class="h5 text-dark-heading mb-2 uppercase">s_max</h5>
                           <h4 class="h4 text-dark-content mb-0 capitalize">{{vehicle.s_max}}</h4>
                        </div>
                        <div class="vehicle-info flex-basis-4 mb-2 p-3 bg-white border mr-2">
                           <h5 class="h5 text-dark-heading mb-2 uppercase">ARG</h5>
                           <h4 class="h4 text-dark-content mb-0 capitalize">{{vehicle.arg}}</h4>
                        </div>

                     </div>
                  </div>

               </div>
            </div>

            <template v-if="vehicle.status !== 'out of service'">
               <div class="col-lg-6 mb-2">
                  <div class="card border">
                     <div class="card-body p-4">
                        <h3 class="h3 text-dark-heading mb-3">Vehicle location</h3>

                        <GoogleMap :height="'400'" />

                     </div>

                  </div>
               </div>
            </template>

            <div class="col-lg-6 mb-2">
               <div class="card border">
                  <div class="card-body p-4">
                     <h3 class="h3 text-dark-heading mb-3">Vehicle video</h3>
                     <div class="player-container">
                        <!-- <vue-core-video-player src="https://media.vued.vanthink.cn/sparkle_your_name_am720p.mp4"></vue-core-video-player> -->
                        <video-player class="int-video-player-box" ref="videoPlayer" :options="playerOptions" :playsinline="true" customEventName="customstatechangedeventname" @play="onPlayerPlay($event)" @pause="onPlayerPause($event)" @ended="onPlayerEnded($event)" @waiting="onPlayerWaiting($event)" @loadeddata="onPlayerLoadeddata($event)" @canplay="onPlayerCanplay($event)" @canplaythrough="onPlayerCanplaythrough($event)" @statechanged="playerStateChanged($event)" @ready="playerReadied">
                        </video-player>
                     </div>

                  </div>

               </div>
            </div>

         </div>
      </template>
      <template v-if="!loading">
         <loading-component />
      </template>
   </div>
</template>

<script>
import LoadingComponent from "@/views/LoadingComponent.vue";
import GoogleMap from "../../components/global/GoogleMap.vue";
import RemoveBtn from "@/components/buttons/RemoveBtn.vue";
// import SettingBtn from "@/components/buttons/SettingBtn.vue";
// import { mapState } from "vuex";
export default {
	name: "vehicle-profile",
	components: {
		GoogleMap,
		LoadingComponent,
		RemoveBtn
	},
	data() {
		return {
			playerOptions: {
				// videojs options
				muted: true,
				language: "en",
				playbackRates: [0.7, 1.0, 1.5, 2.0],
				sources: [
					{
						type: "video/mp4",
						src:
							"https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
					}
				],
				poster: "/static/images/author.jpg"
			}
		};
	},
	computed: {
		loading: {
			get() {
				return this.$store.state.adminPanel.loading;
			},
			set(value) {
				this.$store.commit("loading", value);
			}
		},
		vehicles: {
			get() {
				return this.$store.state.adminPanel.vehicles;
			},
			set(value) {
				this.$store.commit("SET_VEHICLES", value);
			}
		},
		vehicle() {
			return this.vehicles.find(vehicle => vehicle.id == this.$route.params.id);
		},
		player() {
			return this.$refs.videoPlayer.player;
		}
	},
	methods: {
		removeItem(id) {
			this.$router.push("/vehicles");
			return this.$store.commit("REMOVE_ITEM", id);
		},
		// listen event
		onPlayerPlay(player) {
			console.log("player play!", player);
		},
		onPlayerPause(player) {
			console.log("player pause!", player);
		},
		// ...player event

		// or listen state event
		playerStateChanged(playerCurrentState) {
			console.log("player current update state", playerCurrentState);
		},

		// player is ready
		playerReadied(player) {
			console.log("the player is readied", player);
			// you can use it to do something...
			// player.[methods]
		},
		loadingData() {
			const $this = this;
			this.$store.dispatch("loadVehiclesStatistics");
			setTimeout(function() {
				$this.loading = true;
			}, 400);
		}
	},

	mounted() {
		console.log("this is current player instance object", this.player);
		this.$store.dispatch("loadVehicles");

		this.loadingData();
	},
	created() {
		// this.$router.go()
	},
	destroyed() {
		this.loading = false;
	}
};
</script>