<template>
   <section class="locations-and-offices">
      <div class="locations-block py-5 text-center">
         <div class="container">
            <h2 class="h2 text-dark-heading">{{$t('locations_in_germany')}}</h2>
            <ul class="d-flex p-0 align-items-center justify-content-center flex-wrap">
               <li class="h4 p-2 uppercase">
                  <a href="https://www.interline-berlin.de/en" target="_blank" rel="nofollow noopener">Berlin</a>
               </li>
               <li class="h4 p-2 uppercase">
                  <a href="https://www.interline.de/en/interline-dresden" target="_blank" rel="nofollow noopener">Dresden</a>
               </li>
               <li class="h4 p-2 uppercase">
                  <a href="http://www.interline-duesseldorf.de/en" target="_blank" rel="nofollow noopener">Dusseldorf</a>
               </li>
               <li class="h4 p-2 uppercase">
                  <span>Frankfurt</span>
               </li>
               <li class="h4 p-2 uppercase">
                  <a href="https://www.interline.de/en/interline-hamburg" target="_blank" rel="nofollow noopener">Hamburg</a>
               </li>
               <li class="h4 p-2 uppercase">
                  <a href="https://www.interline.de/en/interline-hanover" target="_blank" rel="nofollow noopener">Hanover</a>
               </li>
               <li class="h4 p-2 uppercase">
                  <a href="https://www.interline-koeln.de/en" target="_blank" rel="nofollow noopener">Cologne</a>
               </li>
               <li class="h4 p-2 uppercase">
                  <a href="https://www.interline-muenchen.de/en" target="_blank" rel="nofollow noopener">Munich</a>
               </li>
               <li class="h4 p-2 uppercase">
                  <a href="https://www.interline.de/en/limousineservice-stuttgart" target="_blank" rel="nofollow noopener">Stuttgart</a>
               </li>
               <li class="h4 p-2 uppercase">
                  <a href="https://www.interline.de/en/limousineservice-leipzig" target="_blank" rel="nofollow noopener">Leipzig</a>
               </li>
               <li class="h4 p-2 uppercase">
                  <a href="https://www.interline.de/en/limousinenservice-nuernberg" target="_blank" rel="nofollow noopener">Nuremberg</a>
               </li>
            </ul>
         </div>

         <div class="container-fluid">

            <div class="row">
               <div class="col-lg-6 p-0">
                  <div class="card bg-gold-light border-radius-none">
                     <div class="card-body px-5 py-4">
                        <div class="lg-icon mb-4 text-left">
                           <GermanMapIcon fill="gold" />
                        </div>
                        <div class="d-flex justify-content-between">
                           <span class="h3 text-dark-heading">{{$t('show_all_german_locations')}}</span>
                           <div class="card-icon sm-icon mb-0">
                              <ArrowIcon fill="gold" />
                           </div>
                        </div>
                        <router-link class="stretched-link" to=""></router-link>
                     </div>
                  </div>

               </div>
               <div class="col-lg-6 p-0">

                  <div class="card bg-gold-400 border-radius-none">
                     <div class="card-body px-5 py-4">
                        <div class="lg-icon mb-4 text-left">
                           <GlobeMapIcon fill="gold" />
                        </div>
                        <div class="d-flex justify-content-between">
                           <span class="h3 text-dark-heading">{{$t('show_all_international_locations')}}</span>
                           <div class="card-icon sm-icon mb-0">
                              <ArrowIcon fill="gold" />
                           </div>
                        </div>
                        <router-link class="stretched-link" to=""></router-link>
                     </div>
                  </div>
               </div>
            </div>
         </div>

      </div>
      <div class="our-offices mb-5">
         <div class="container-fluid">
            <div class="row">
               <div class="col-lg-6 p-0 border-right">
                  <div class="card bg-transparent border-radius-none">
                     <div class="card-body px-5 py-4">
                        <h2 class="h2 text-dark-heading">INTERLINE Frankfurt <br> Headquarter &amp; Administration
                        </h2>
                        <p class="h3 card-text text-dark-content mb-5">Am Kronberger Hang 2 <br> 65824 Schwalbach</p>

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
               <div class="col-lg-6 p-0">
                  <div class="card bg-transparent border-radius-none">
                     <div class="card-body px-5 py-4">
                        <h2 class="h2 text-dark-heading">INTERLINE Frankfurt</h2>
                        <br>
                        <p class="h3 card-text text-dark-content mb-5">Kennedyallee 70<br> 60596 Frankfurt</p>

                        <div class="contact-info border-top py-3 mt-2">
                           Telephone: +49 (0)69 677009-77
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
            </div>
         </div>
      </div>
   </section>
</template>

<script>
import GermanMapIcon from "@/components/svgs/GermanMapIcon";
import GlobeMapIcon from "@/components/svgs/GlobeMapIcon";
import ArrowIcon from "@/components/svgs/ArrowIcon";
export default {
	name: "locations-and-offices",
	components: {
		GermanMapIcon,
		GlobeMapIcon,
		ArrowIcon
	}
};
</script>

<style>
</style>
