<template>
   <modal-container :modalsize="'modal-xl'">
      <template #heading>Create PDF</template>
      <template #body>
         <div class="d-flex justify-content-end">
            <button type="button" class="btn gold-btn uppercase">
               download
            </button>
         </div>
         <section class="border-top border-bottom mt-3">
            <div class="row">
               <div class="col-lg-9 mb-3 align-self-center">
                  <div class="card bg-transparent">
                     <div class="card-body px-5 py-3">
                        <b-navbar-brand href="/">
                          <img class="_logo" src="@/assets/interline-logo.svg" alt />
                        </b-navbar-brand>
                        <h2 class="h2 text-dark-heading mt-2">InterlineCarey Frankfurt</h2>
                        <h4 class="h4 text-dark-heading mt-2 mb-4">
                          INTERLINE Eschborn GmbH - Am Kronberger Hang 2 - D-65824
                          Schwalbach
                        </h4>
                        <h3 class="h4 text-dark-heading">DWS</h3>
                        <h3 class="h4 text-dark-heading">Willis Building</h3>
                        <h3 class="h4 text-dark-heading">
                           30 Fenchurch Avenue
                        </h3>
                        <h3 class="h4 text-dark-heading">EC3M 5AD London</h3>
                        <h3 class="h4 text-dark-heading">Great Britain</h3>
                     </div>
                  </div>
               </div>
               <div class="line-right"></div>
               <div class="col-lg-3 mb-3 align-self-center">
                  <div class="card bg-transparent">
                     <div class="card-body">
                        <b-img-lazy
                          class="mx-auto"
                           :src="
                              setUrlImage(
                                 'IL95_1-MB_V--Klasse_Front-removebg-preview.png'
                              )
                           "
                           alt="IL95_1-MB_V--Klasse_Front"
                        ></b-img-lazy>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <!--  -->
         <section class="text-center border-bottom py-5">
            <h2 class="h2 text-dark-heading mt-2">Quotation</h2>
            <h4 class="h4 text-dark-heading mt-2 mb-4">
               Wir bedanken uns für Ihre Anfrage und unterbreiten Ihnen
               folgendes Angebot.
            </h4>

            <div class="row">
               <div class="col-lg-3 mb-3">
                  <div class="card border text-center">
                     <div class="card-body">
                        <h4 class="h4 text-gold-heading">Account No.</h4>
                        <h4 class="h4 text-dark-heading mb-0">D26676</h4>
                     </div>
                  </div>
               </div>
               <div class="col-lg-3 mb-3">
                  <div class="card border text-center">
                     <div class="card-body">
                        <h4 class="h4 text-gold-heading">Quotation No.</h4>
                        <h4 class="h4 text-dark-heading mb-0">2100243</h4>
                     </div>
                  </div>
               </div>
               <div class="col-lg-3 mb-3">
                  <div class="card border text-center">
                     <div class="card-body">
                        <h4 class="h4 text-gold-heading">Payment Method</h4>
                        <h4 class="h4 text-dark-heading mb-0">Credit Card</h4>
                     </div>
                  </div>
               </div>
               <div class="col-lg-3 mb-3">
                  <div class="card border text-center">
                     <div class="card-body">
                        <h4 class="h4 text-gold-heading">Document Date</h4>
                        <h4 class="h4 text-dark-heading mb-0">24.08.2021</h4>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <!--  -->
         <section class="pt-5">
            <div class="row">
               <div class="col-lg-12 mt-3">
                  <div class="card bg-transparent px-3 pb-2">
                     <div class="card-body p-0">
                        <div class="row align-items-center">
                           <div class="col-lg-4 pe-0">
                              <div class="position-relative me-2">
                                 <div class="d-flex align-items-center">
                                    <div class="flex-item ms-3">
                                       <h4 class="h5 text-dark-heading mb-0">
                                          Requested by
                                       </h4>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-lg-4">
                              <div class="driver-info">
                                 <h4 class="h5 text-dark-heading mb-0">
                                    Our vendor number
                                 </h4>
                              </div>
                           </div>
                           <div class="col-lg-4">
                              <div class="driver-info">
                                 <h4 class="h5 text-dark-heading mb-0">
                                    Issued by
                                 </h4>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-lg-12 mb-2">
                  <div class="card bg-gray p-3">
                     <div class="card-body p-0">
                        <div class="row align-items-center">
                           <div class="col-lg-4">
                              <div class="vehicle-info">
                                 <h4 class="h5 text-dark-heading mb-0">
                                    Rene holder
                                 </h4>
                              </div>
                           </div>
                           <div class="col-lg-4">
                              <div class="vehicle-info">
                                <h4 class="h5 text-dark-heading mb-0"></h4>
                              </div>
                           </div>
                           <div class="col-lg-4">
                              <div class="vehicle-info">
                                 <h4 class="h5 text-dark-heading mb-0">
                                    Laura Fernandez
                                 </h4>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <!--  -->
         <section class="pb-5 border-top mt-3">
            <div class="row">
               <div class="col-lg-12 mt-3">
                  <div class="card bg-transparent px-3 pb-2">
                     <div class="card-body p-0">
                        <div class="row align-items-center">
                           <div class="col-lg-1 pe-0">
                              <div class="position-relative me-2">
                                 <div class="d-flex align-items-center">
                                    <div class="flex-item ms-3">
                                       <h4 class="h5 text-dark-heading mb-0">
                                          item
                                       </h4>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-lg-5">
                              <div class="driver-info">
                                 <h4 class="h5 text-dark-heading mb-0">
                                    Description of service
                                 </h4>
                              </div>
                           </div>
                           <div class="col-lg-2">
                              <div class="driver-info">
                                 <h4 class="h5 text-dark-heading mb-0">
                                    Quantity
                                 </h4>
                              </div>
                           </div>
                           <div class="col-lg-2">
                              <div class="driver-info">
                                 <h4 class="h5 text-dark-heading mb-0">
                                    Price/Unit
                                 </h4>
                              </div>
                           </div>
                           <div class="col-lg-2">
                              <div class="driver-info">
                                 <h4 class="h5 text-dark-heading mb-0">
                                    Total
                                 </h4>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-lg-12 mb-2">
                  <div class="card bg-gray p-3">
                     <div class="card-body p-0">
                        <div class="row align-items-start">
                           <div class="col-lg-1 pe-0">
                              <div class="position-relative me-2">
                                 <div class="d-flex align-items-center">
                                    <div class="flex-item ms-3">
                                       <h4 class="h5 text-dark-heading mb-0">
                                          1
                                       </h4>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-lg-5">
                              <div class="driver-info">
                                 <h5 class="h5 text-dark-heading">
                                    <strong>DISPOSAL:</strong> 03. September
                                    2021, 13:30
                                 </h5>
                                 <h5 class="h5 text-dark-heading">
                                    <strong>PASSENGER:</strong> Mr. Mark Cullen
                                 </h5>
                                 <h5 class="h5 text-dark-heading">
                                    <strong>JOB No:</strong> 6060-154084.0
                                 </h5>
                                 <h5 class="h5 text-dark-heading">
                                    <strong>ITINERARY:</strong> Frankfurt
                                    Airport Terminal 2 > Hotel TBC
                                 </h5>
                                 <h4 class="h4 text-dark-heading mb-0">
                                    Transfer Frankfurt; MB E-Class o.s.
                                 </h4>
                              </div>
                           </div>
                           <div class="col-lg-2">
                              <div class="driver-info">
                                 <h4 class="h5 text-dark-heading mb-0">
                                    1 pc.
                                 </h4>
                              </div>
                           </div>
                           <div class="col-lg-2">
                              <div class="driver-info">
                                 <h4 class="h5 text-dark-heading mb-0">
                                    107,00
                                 </h4>
                                 <h4 class="h5 text-dark-heading mb-0">
                                    Discount: %
                                 </h4>
                              </div>
                           </div>
                           <div class="col-lg-2">
                              <div class="driver-info">
                                 <h4 class="h5 text-dark-heading mb-0">
                                    107,00
                                 </h4>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <!--  -->
         <section class="pb-5">
            <div class="row">
               <div class="col-lg-6 mb-3">
                  <div class="card border h-100">
                     <div class="card-header bg-gray">
                        <h4 class="h4 text-dark-heading mb-0">
                           Nettobetrag- & Mehrwertsteuer-Aufteilung
                        </h4>
                     </div>
                     <div class="card-body">
                        <div class="d-flex justify-content-between">
                           <h4 class="h4 text-dark-heading mb-0">
                              plus VAT 19,00 % of
                           </h4>
                           <h4 class="h4 text-dark-heading mb-0">400,00 €</h4>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-lg-6 mb-3">
                  <div class="card border">
                     <div class="card-header bg-gray">
                        <h4 class="h4 text-dark-heading mb-0">
                           Invoice amount
                        </h4>
                     </div>
                     <div class="card-body">
                        <div class="d-flex justify-content-between mb-2">
                           <h4 class="h4 text-dark-heading mb-0">Net</h4>
                           <h4 class="h4 text-dark-heading mb-0">107,00 €</h4>
                        </div>
                        <div class="d-flex justify-content-between mb-2">
                           <h4 class="h4 text-dark-heading mb-0">VAT</h4>
                           <h4 class="h4 text-dark-heading mb-0">20,33 €</h4>
                        </div>
                        <div class="d-flex justify-content-between">
                           <h4 class="h4 text-dark-heading mb-0">TOTAL</h4>
                           <h4 class="h4 text-dark-heading mb-0">127,33 €</h4>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-lg-12">
                  <h4 class="h4 text-dark-heading mb-3">
                     Agreed payment method: Credit card
                  </h4>
                  <h4 class="h4 text-dark-heading mb-0">
                     Für weitere Fragen stehen wir Ihnen jederzeit zur Verfügung
                  </h4>
               </div>
            </div>
         </section>

         <section class="border-top py-3">
            <div class="row">
               <div class="col-lg-4 mb-3">
                  <div class="card">
                     <div class="card-body p-0">
                        <h4 class="h5 text-dark-heading mb-2">
                           Interline ChauffeurservIce Eschbom GmbH Frankfurter
                           Vdksbank Bettieben unter Lizenzen der Interline Am
                           Kronberger Hang 2, 85024 Schwalbach am Taunus
                        </h4>
                        <h4 class="h5 text-dark-heading mb-2">
                           Reg: Frankfurt(Main) HRB 43091 / UStID: DE188703330
                        </h4>
                        <h4 class="h5 text-dark-heading mb-2">
                           GeschaftsfUhrer: Michael Fleillner, Michael Trux
                        </h4>
                        <h4 class="h5 text-dark-heading mb-2">
                           Tel.: 040 6196 95060-0 /frankfurl@interline.de
                        </h4>
                     </div>
                  </div>
               </div>
               <div class="col-lg-4 mb-3">
                  <div class="card">
                     <div class="card-body p-0">
                        <h4 class="h5 text-dark-heading">
                           Frankfurter Vdksbank
                        </h4>
                        <h4 class="h5 text-dark-heading mb-0">
                           IBAN: DE88 5019 0000 0000 9260 60
                        </h4>
                        <h4 class="h5 text-dark-heading mb-0">BIC: FFVBDEFF</h4>
                        <h4 class="h5 text-dark-heading mb-0">
                           Taunus Sparkasse
                        </h4>
                        <h4 class="h5 text-dark-heading mb-0">
                           IBAN: DE62 5125 0000 0000 3315
                        </h4>
                        <h4 class="h5 text-dark-heading mb-0">
                           BIC: HELADEF1TSK
                        </h4>
                     </div>
                  </div>
               </div>
               <div class="col-lg-4 mb-3">
                  <div class="card">
                     <div class="card-body p-0">
                        <h4 class="h5 text-dark-heading">
                           Operating under licenes of interline Limousine
                           Network GmbH, Berlin (Germany) and Carey
                           International, Inc. Washington DC. Our general terms
                           and conditions apply
                        </h4>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </template>
      <template #footer>
         <button type="button" class="btn gold-btn uppercase">download</button>
      </template>
   </modal-container>
</template>

<script>
import setUrlImage from "../modules/publicPages/utilities/setUrlImage";
import ModalContainer from "./ModalContainer.vue";
export default {
   name: "create-pdf",
   mixins: [setUrlImage],
   components: {
      ModalContainer,
   },
   mounted() {
      this.$store.dispatch("loadProject");
   },
   computed: {
      project: {
         get() {
            return this.$store.state.adminPanel.project;
         },
         set(value) {
            this.$store.commit("SET_PROJECT", value);
         },
      },
   },
   methods: {
      generateReport() {
         this.$refs.html2Pdf.generatePdf();
      },
   },
};
</script>

<style></style>
