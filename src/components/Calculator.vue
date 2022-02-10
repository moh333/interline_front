<template>
  <div class="h-100">
    <div class="row h-100">
      <div class="col-lg-7 my-4">
        <div class="px-5 pt-3 mx-5">
          <div class="card-header bg-transparent px-3 pb-0 border-none">
            <div class="row justify-content-between align-items-center">
              <div class="col">
                <router-link
                  to="/trips"
                  class="btn text-btn h6 mb-0 px-2 text-gold-heading uppercase"
                >Back to dashboard</router-link>
              </div>
              <div class="col-lg-auto">
                <setting-btn :routeName="'calculator-setting'"></setting-btn>
              </div>
            </div>
            <div
              class="d-flex justify-content-between py-2 mb-2 mt-4"
              :class="{ 'border-bottom': !projectConfig.status }"
            >
              <div class="flex-item">
                <button
                  type="button"
                  class="btn text-btn h6 mb-0 py-1 px-2 bg-gray-light int-trip text-gold-heading uppercase self-content-end"
                  @click="projectConfig.status = !projectConfig.status"
                >
                  <template v-if="projectConfig.status">single trip</template>
                  <template v-else>CREATE PROJECT</template>
                </button>

                <router-link
                  to="/history"
                  class="btn text-btn h6 mb-0 py-1 px-2 bg-gray-light int-trip text-gold-heading uppercase mr-2"
                >history</router-link>
              </div>
              <router-link
                class="btn text-btn h6 mb-0 py-1 px-2 bg-gray-light int-trip text-gold-heading uppercase"
                :to="{ name: 'create-pdf' }"
              >create pdf</router-link>
            </div>
          </div>
          <template v-if="loading">
            <div class="calculate-form-block px-3" ref="calculateform">
              <template v-if="projectConfig.status">
                <div class="project-infos p-4 mb-3 border border-radius-small">
                  <div class="row">
                    <div class="col-lg-9">
                      <label for="exampleDataList" class="form-label">Project name</label>
                      <input
                        class="form-control"
                        list="datalistOptions"
                        id="exampleDataList"
                        placeholder="Example: Day in Costa Rica"
                        v-model="projectInfo.name"
                      />
                    </div>
                    <div class="col-lg-3">
                      <label for="exampleDataList" class="form-label">Project ID</label>
                      <input
                        class="form-control"
                        list="datalistOptions"
                        id="exampleDataList"
                        :placeholder="projectInfo.id"
                        disabled
                      />
                    </div>
                    <div class="col-lg-12 mt-3">
                      <div class="border border-radius-small">
                        <h5
                          class="h5 text-dark-heading p-3 mb-0"
                        >Project number: {{ project.length }}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </template>

              <div
                class="calculate-form-item mb-2"
                :class="{ 'border border-radius-small': projectConfig.status }"
                v-for="(item, index) in project"
                :key="index"
              >
                <template v-if="projectConfig.status">
                  <div class="card-header bg-transparent" v-b-toggle="`accordion-${index + 1}`">
                    <div class="d-flex justify-content-between align-items-center">
                      <div>Trip ({{ index + 1 }})</div>
                      <template v-if="project.length > 1">
                        <div class="col-1">
                          <div
                            class="btn bg-gray-light int-trip crlc-icon form-check"
                            @click="deleteTrip(index)"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="16px"
                              viewBox="0 0 24 24"
                              width="16px"
                            >
                              <path d="M0 0h24v24H0z" fill="none" />
                              <path
                                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                              />
                            </svg>
                          </div>
                        </div>
                      </template>
                    </div>
                  </div>
                </template>
                <b-collapse :id="`accordion-${index + 1}`" visible accordion="project-accordion">
                  <form class="calculator-form">
                    <div class="card bg-transparent h-100">
                      <div class="card-body px-0 pt-2" :class="{ 'px-4': projectConfig.status }">
                        <div class="row">
                          <div class="col-lg-6 mt-2">
                            <label for class="h5 form-label">Customer</label>
                            <select
                              class="selectpicker f4 mb-0 form-control"
                              aria-label="customer"
                              data-live-search="true"
                              v-model="item.customer"
                            >
                              <option value="1" selected>EZB - Frankfurt</option>
                              <option value="2">JALPAK - Frankfurt</option>
                              <option value="3">TLS - Heidelberg</option>
                            </select>
                          </div>

                          <div class="col-lg-6 mt-2">
                            <label for class="h5 form-label">City</label>
                            <select
                              class="selectpicker f4 mb-0 form-control"
                              aria-label="city"
                              v-model="item.city"
                            >
                              <option value="1">Frankfurt am Main</option>
                            </select>
                          </div>
                          <div class="col-lg-6 mt-2">
                            <label
                              class="h5 form-label"
                              id="input-group-pax__BV_label_"
                              for="input-pax"
                            >Pax</label>
                            <b-form-spinbutton
                              class="f5 mb-0 input_pax"
                              id="input-pax"
                              v-model="item.pax"
                              min="1"
                              max="100"
                            ></b-form-spinbutton>
                          </div>
                          <div class="col-lg-6 mt-2 align-self-end">
                            <div class="custom-control custom-checkbox custom-checkbox_wrap">
                              <input
                                v-model="item.hasStops"
                                class="custom-control-input"
                                type="checkbox"
                                name
                                :id="`input-multi-time${index}`"
                              />
                              <label
                                class="h4 mb-0 custom-control-label"
                                id="input-group-multi-time__BV_label_"
                                :for="`input-multi-time${index}`"
                              >Does it include stops?</label>
                            </div>
                          </div>
                          <template v-if="item.hasStops">
                            <div class="col-lg-12 mt-2">
                              <div class="border-top">
                                <div
                                  class="card bg-transparent pt-2 mb-2 mt-2"
                                  v-for="(stop, indx) in item.stops"
                                  :key="indx"
                                >
                                  <div
                                    class="d-flex justify-content-between align-items-center mb-2"
                                  >
                                    <label
                                      class="h5 form-label mb-0"
                                      id="input-group-multi-time__BV_label_"
                                      for="input-multi-time"
                                    >Stop({{ indx + 1 }})</label>
                                  </div>
                                  <div class="row align-items-center">
                                    <div class="col-4 pr-0">
                                      <input
                                        type="search"
                                        class="f4 mb-0 form-control"
                                        :value="stop.destination"
                                        placeholder="search a destination"
                                        aria-label="search "
                                      />
                                    </div>
                                    <div class="col-3 pr-0">
                                      <div class="t-duration">
                                        <input
                                          id="popover-duration"
                                          type="number"
                                          class="input-duration f4 mb-0 form-control"
                                          v-model="stop.duration"
                                          placeholder="Duration"
                                        />
                                      </div>
                                    </div>
                                    <div :class="[item.stops.length > 1 ? 'col-4 pr-0' : 'col-5']">
                                      <vc-date-picker v-model="stop.date" mode="dateTime" is24hr>
                                        <template v-slot="{ inputValue, inputEvents }">
                                          <input
                                            class="px-2 py-1 border rounded focus:outline-none focus:border-blue-300 f4 form-control"
                                            :value="inputValue"
                                            v-on="inputEvents"
                                          />
                                        </template>
                                      </vc-date-picker>
                                    </div>
                                    <template v-if="item.stops.length > 1">
                                      <div class="col-1">
                                        <div
                                          class="btn bg-gray-light int-trip crlc-icon form-check"
                                          @click="deleteStop(indx)"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="16px"
                                            viewBox="0 0 24 24"
                                            width="16px"
                                          >
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path
                                              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                                            />
                                          </svg>
                                        </div>
                                      </div>
                                    </template>
                                  </div>
                                </div>
                                <div class="border-bottom">
                                  <button
                                    type="button"
                                    @click="handlStop()"
                                    class="btn p-1 h5 mb-0 my-1 text-gold-heading text-btn uppercase"
                                  >
                                    <add-icon></add-icon>Add stop
                                  </button>
                                </div>
                              </div>
                            </div>
                          </template>

                          <div class="col-lg-6 mt-2">
                            <label for class="h5 form-label">Pick up</label>
                            <select
                              class="selectpicker f4 mb-0 form-control"
                              aria-label="customer"
                              v-model="item.pickup"
                            >
                              <option value="C">City</option>
                              <option value="A">Airport</option>
                              <option value="G">GAT</option>
                              <option value="X">Custom</option>
                            </select>
                          </div>
                          <div class="col-lg-6 mt-2">
                            <label for class="h5 form-label">Drop off</label>
                            <select
                              class="selectpicker f4 mb-0 form-control"
                              aria-label="customer"
                              v-model="item.dropoff"
                            >
                              <option value="City">City</option>
                              <option value="Airport">Airport</option>
                              <option value="GAT">GAT</option>
                              <option value="Custom">Custom</option>
                            </select>
                          </div>

                          <div class="col-lg-6 mt-2">
                            <label for class="h5 form-label">Vehicle Group:</label>
                            <select
                              class="selectpicker f4 mb-0 form-control"
                              aria-label="customer"
                              v-model="item.vehiclegroup"
                            >
                              <option value="LIM">Limousine</option>
                              <option value="SUV">SUV</option>
                              <option value="PCA">People Carrier</option>
                              <option value="COA">Bus</option>
                              <option value="BOX">Transporter</option>
                              <option value="TRK">Truck</option>
                            </select>
                          </div>
                          <div class="col-lg-6 mt-2">
                            <label for class="h5 form-label">Vehicle category:</label>
                            <select
                              class="selectpicker f4 mb-0 form-control"
                              aria-label="customer"
                              v-model="item.vehiclecategory"
                            >
                              <option disabled selected value>Please select vehicle</option>
                              <option>Executive</option>
                              <option>Luxury</option>
                              <option>Ultimate</option>
                              <option>SUV</option>
                              <option>MPV</option>
                              <option>Mini</option>
                              <option>Midi</option>
                              <option>Classic</option>
                              <option>ThreeAxle</option>
                              <option>DoubleDecker</option>
                              <option>Van</option>
                              <option>Truck</option>
                              <option>unspecified</option>
                            </select>
                          </div>
                          <template>
                            <div class="col-lg-12 mt-2">
                              <label for class="h5 form-label">Vehicle:</label>
                              <select
                                class="selectpicker f4 mb-0 form-control"
                                aria-label="customer"
                                v-model="item.vehicles"
                              >
                                <option value="2" selected>Mercedes E-Class</option>
                                <option value="3">Mercedes S-Class</option>
                                <option value="4">BMW X5</option>
                                <option value="5">BMW X7</option>
                                <option value="5">BMW X7</option>
                              </select>
                            </div>
                          </template>

                          <div class="col-lg-12 mt-2">
                            <label for class="h5 form-label">Date & Time</label>
                            <vc-date-picker v-model="date" mode="dateTime" is24hr>
                              <template v-slot="{ inputValue, inputEvents }">
                                <input
                                  class="px-2 py-1 border rounded focus:outline-none focus:border-blue-300 f4 form-control"
                                  :value="inputValue"
                                  v-on="inputEvents"
                                />
                              </template>
                            </vc-date-picker>
                          </div>
                          <div class="col-lg-12 my-3">
                            <div class="d-flex">
                              <div class="custom-control custom-radio custom-control-inline">
                                <input
                                  class="custom-control-input"
                                  type="radio"
                                  value="Liste netto runden"
                                  :id="`inlineCheckbox${index + 1}`"
                                  v-model="item.checked"
                                />
                                <label
                                  class="custom-control-label"
                                  :for="`inlineCheckbox${index + 1}`"
                                >Liste netto runden</label>
                              </div>
                              <div class="custom-control custom-radio custom-control-inline">
                                <input
                                  class="custom-control-input"
                                  type="radio"
                                  value="Kunde brutto runden"
                                  :id="`inlineCheckbox${index + 2}`"
                                  v-model="item.checked"
                                />
                                <label
                                  class="custom-control-label"
                                  :for="`inlineCheckbox${index + 2}`"
                                >Kunde brutto runden</label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </b-collapse>
              </div>

              <template v-if="projectConfig.status">
                <div class="border-bottom">
                  <button
                    type="button"
                    @click="createProject()"
                    class="btn p-1 h5 mb-0 my-1 text-gold-heading text-btn uppercase"
                  >
                    <add-icon></add-icon>add trip
                  </button>
                </div>
              </template>
            </div>

            <div class="col-lg-12 mt-2">
              <div class="d-flex justify-content-between">
                <div class="flex-item">
                  <button
                    type="submit"
                    class="btn main-btn rounded gold-btn mr-3 uppercase"
                    @click.prevent="calculatePrice()"
                  >Calculate price</button>
                  <router-link
                    to="/calculate-price/fixed-prices"
                    class="btn main-btn rounded gold-btn mr-3 uppercase"
                  >Fixed prices</router-link>
                </div>
                <div class="flex-item">
                  <!-- <router-link to="/orders/proposals" class="btn main-btn rounded gold-btn mr-3">calculations</router-link> -->
                  <router-link
                    to="/orders/proposals"
                    class="btn main-btn rounded outline-btn mr-3 px-3 py-2 uppercase"
                  >Save</router-link>
                  <button
                    type="reset"
                    class="btn main-btn rounded text-btn px-3 py-2 uppercase"
                  >RESET</button>
                </div>
              </div>
            </div>
          </template>
          <template v-if="!loading">
            <loading-component />
          </template>
        </div>
      </div>

      <div class="col-lg-5 pl-0">
        <div class="card box-shadow-large h-100 right-card_fixed">
          <div class="card-header bg-transparent p-0">
            <GoogleMap height="inherit" />

            <div class="d-flex">
              <div class="flex-item flex-grow-1 border-right px-2 py-2 text-center">
                <h5 class="f5 fw-bold mb-0 text-dark-heading">
                  Distance:
                  <span class="d-inline-block text-dark-content">40 km</span>
                </h5>
              </div>
              <div class="flex-item flex-grow-1 border-right px-2 py-2 text-center">
                <h5 class="f5 fw-bold mb-0 text-dark-heading">
                  Duration:
                  <span class="d-inline-block text-dark-content">1:55 h</span>
                </h5>
              </div>
              <div class="flex-item flex-grow-1 border-right px-2 py-2 text-center">
                <h5 class="f5 fw-bold mb-0 text-dark-heading">
                  Speed:
                  <span class="d-inline-block text-dark-content">12 km/h</span>
                </h5>
              </div>
              <div class="flex-item flex-grow-1 rounded px-2 py-2 text-center">
                <h5 class="f5 fw-bold mb-0 text-dark-heading">
                  Distance internal & Distance client:
                  <span
                    class="d-inline-block text-dark-content"
                  >40 km</span>
                </h5>
              </div>
            </div>
          </div>
          <scrollable-content :height="556">
            <div class="card-body px-4">
              <div class="card">
                <div class="card-header border-none p-0 pt_sticky">
                  <div class="card-item-list d-flex flex-row">
                    <div class="card-item__heading bg-teal-light mr-3 flex-basis-3 rounded p-1">
                      <h4 class="h5 text-center mb-0">Listenpreis</h4>
                    </div>
                    <div class="card-item__heading bg-gray mr-3 flex-basis-3 rounded p-1">
                      <h4 class="h5 text-center mb-0">Rabatt</h4>
                    </div>
                    <div class="card-item__heading bg-teal-dark flex-basis-3 rounded p-1">
                      <h4 class="h5 text-center mb-0">Kundenpreis</h4>
                    </div>
                  </div>
                </div>
                <div class="card-body p-0">
                  <div v-for="price in pricestable" :key="price.id">
                    <div class="card" v-for="d in price.detailsRow" :key="d.row">
                      <div class="d-flex justify-content-between">
                        <h4 class="h6 text-dark-heading p-2 mb-0 mt-1 flex-basis-3">{{ d.row }}</h4>
                      </div>
                      <div class="card-item-list text-center d-flex flex-row rounded">
                        <div class="card-item bg-gray flex-basis-3 p-1">
                          <h4 class="h6 text-dark-content mb-0">{{ d.price }}</h4>
                        </div>
                        <div class="card-item bg-gray flex-basis-3 p-1">
                          <h4 class="h6 text-dark-content mb-0">{{ d.discount }}</h4>
                        </div>
                        <div class="card-item bg-gray flex-basis-3 p-1">
                          <h4 class="h6 text-dark-content mb-0">{{ d.customerPrice }}</h4>
                        </div>
                      </div>
                    </div>

                    <!-- </div>  <div div class="collapse" id="collapseExample"-->
                    <div class="card" :class="{ 'has-total': price.totalprice }">
                      <div class="d-flex justify-content-between">
                        <h4 class="h6 text-dark-heading p-2 mt-1 mb-0 flex-basis-3">{{ price.row }}</h4>
                      </div>
                      <div class="card-item-list text-center d-flex flex-row rounded">
                        <div class="card-item bg-gray flex-basis-3 p-1">
                          <h4 class="h6 text-dark-content mb-0">{{ price.price }}</h4>
                        </div>
                        <div class="card-item bg-gray flex-basis-3 p-1">
                          <h4 class="h6 text-dark-content mb-0">{{ price.discount }}</h4>
                        </div>
                        <div class="card-item bg-gray flex-basis-3 p-1">
                          <h4 class="h6 text-dark-content mb-0">{{ price.customerPrice }}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- <div class="card-footer bg-transparent p-0">
                           <button @click="fullDetails = !fullDetails" class="btn text-btn w-100 py-2 uppercase" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                              <template v-if="fullDetails">
                                 Hide price details
                              </template>
                              <template v-else>

                                 Full price details
                              </template>
                           </button>
                </div>-->
              </div>
            </div>
          </scrollable-content>
          <div class="card-footer bg-transparent border-top px-4 py-2 mt-auto">
            <div class="card">
              <div
                class="d-flex justify-content-between align-items-center py-2"
                v-for="(endprice) in endprices"
                :key="endprice.id"
              >
                <h4 class="h4 text-center mb-0">{{ endprice.name }}</h4>
                <div class="card-item__heading">{{ endprice.price }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
      

<script>
import loading from "../modules/adminPanel/mixins/loading";
import LoadingComponent from "@/views/LoadingComponent.vue";
// import CreatePDF from "@/components/CreatePDF.vue";

import ScrollableContent from "../modules/adminPanel/components/global/ScrollableContent.vue";
import GoogleMap from "../modules/adminPanel/components/global/GoogleMap.vue";
import SettingBtn from "./buttons/SettingBtn.vue";
import AddIcon from "./svgs/AddIcon.vue";

import $ from "jquery";

var id = () => Math.floor(Math.random() * 100);

var ID = function () {
  return (
    "#" +
    Math.random()
      .toString(36)
      .substr(2, 9)
      .toUpperCase()
  );
};

export default {
  name: "calculator",
  mixins: [loading],
  components: {
    LoadingComponent,
    ScrollableContent,
    GoogleMap,
    SettingBtn,
    AddIcon
    // CreatePDF
  },

  data() {
    return {
      value: 1,
      fullDetails: false,
      veicleCategory: "",
      stopTimepickervalue: "",
      timepickervalue: "",
      datepickervalue: "",
      customer: "",
      pax: 1,
      pricesCard: false,
      date: new Date(),
      times: [],
      projectConfig: {
        status: false,
        min: 2
      },
      projectInfo: {
        name: "",
        id: ID()
      },

      feilds: ["Listenpreis", "Rabatt", "Kundenpreis"],
      pricestable: [
        {
          id: 3,
          row: "Fahrleistung",
          price: "5.00 €",
          discount: "2.00 €",
          customerPrice: "3.00 €",
          totalprice: true,
          detailsRow: [
            {
              row: "Zeitleistung",
              price: "5.00 €",
              discount: "2.00 €",
              customerPrice: "3.00 €"
            },
            {
              row: "Wegleistung",
              price: "5.00 €",
              discount: "2.00 €",
              customerPrice: "3.00 €"
            }
          ]
        },

        {
          id: 8,
          row: "Aufpreis",
          price: "5.00 €",
          discount: null,
          customerPrice: "3.00 €",
          totalprice: true,
          detailsRow: [
            {
              row: "Parken",
              price: "5.00 €",
              discount: null,
              customerPrice: "3.00 €"
            },
            {
              row: "Sonntagszuschlag",
              price: "5.00 €",
              discount: null,
              customerPrice: "3.00 €"
            },
            {
              row: "Feiertagszuschlag",
              price: "5.00 €",
              discount: null,
              customerPrice: "3.00 €"
            },
            {
              row: "Nachtzuschlag",
              price: "5.00 €",
              discount: null,
              customerPrice: "3.00 €"
            }
          ]
        }
      ],
      totalprices: ["5.00 €", "5.00 €", "5.00 €"],
      endprices: [
        {
          id: 1,
          name: "Umsatzsteuer  19%",
          price: "0.00 €"
        },
        {
          id: 2,
          name: "Rundungsdifferenz",
          price: "0.00 €"
        },
        {
          id: 3,
          name: "Bruttopreis",
          price: "0.00 €"
        }
      ]
    };
  },
  computed: {
    project: {
      get() {
        return this.$store.state.adminPanel.project;
      },
      set(value) {
        this.$store.commit("SET_PROJECT", value);
      }
    }
  },
  methods: {
    handlStop() {
      this.project.forEach(item => {
        if (item.stops.length !== 8) {
          item.stops.push({
            id: this.stopsValue,
            dist: "",
            date: new Date(),
            pickup: ""
          });
        }
      });
      // if (this.stopsValue < this.stops.length) {
      // 	this.stops.splice(1, 1);
      // }
    },
    calculatePrice() {
      return (this.pricesCard = true);
    },
    handlDuration(time) {
      return this.project.stops.filter(stop => {
        stop.duration = time;
        console.log(time);
      });
    },

    dsiplayDuration() {
      var t, i, j;
      for (t = 0; t < 24; t++) {
        for (i = 0; i < 12; i++) {
          this.times.push(t + ":" + (i === 0 ? "00" : 6 * i));
          for (j = 0; j < 1; j++) {
            // console.log(j);
          }
        }
      }
    },

    deleteStop(stop) {
      this.project.forEach(item => {
        if (item.stops.length !== 1) item.stops.splice(stop, 1);
        item.hasStops = item.stops.length;
      });
    },

    deleteTrip(trip) {
      this.project.splice(trip, 1);
    },

    createProject() {
      var createform = this.project.push({
        id: id(),
        customer: "customer name",
        city: "",
        pax: 1,
        checked: "Liste netto runden",
        hasStops: false,
        stops: [
          {
            id: null,
            destination: "",
            duration: "",
            pickup: ""
          }
        ],
        pickup: "",
        dropoff: "",
        vehiclegroup: "",
        vehiclecategory: "",
        vehicles: "",
        dateTime: ""
      });
      console.log(createform);
      // return createform;
    },
    handleChildrenChanged() {
      $(".selectpicker").selectpicker("refresh");
      $(".selectpicker").selectpicker("render");
    },
    initObserver() {
      const config = {
        subtree: false,
        childList: true
      };
      const self = this;
      const callback = () => {
        self.$nextTick(() => {
          self.handleChildrenChanged();
        });
      };
      const observer = new MutationObserver(callback);
      if (observer) {
        observer.observe(this.$refs.calculateform, config);
        this.observer = observer;
      }
    },

    loadingData() {
      const self = this;
      self.$store.dispatch("loadProject");

      setTimeout(async function () {
        if (self.project) {
          self.loading = true;
        }
      });
    }
  },
  mounted() {
    this.loadingData();
    this.dsiplayDuration();
    // Observe the selectpicker to update the plugin
    this.initObserver();
    $(".selectpicker").selectpicker();

  },
  updated() {
    // Observe the selectpicker to update the plugin
    this.initObserver();
  },
  destroyed() {
    this.loading = false;
  }
};
</script>

<style>
.pdf-content {
  padding: 40px;
}
</style>
