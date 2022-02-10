<template>
   <footer class="bg-blue-dark">
      <div class="container">
         <div class="d-flex align-items-center justify-content-between">

            <ul class="navbar-nav flex-row has-effect">
               <li class="nav-item mb-0 mr-3">
                  <router-link class="nav-link text-white-heading uppercase layout-effect" to="/imprint">
                     IMPRINT
                     <span class="sr-only">(current)</span>
                  </router-link>

               </li>

               <li class="nav-item mb-0 mr-3">
                  <router-link class="nav-link text-white-heading uppercase layout-effect" to="/site-terms">
                     GTC
                  </router-link>
               </li>

               <li class="nav-item mb-0 mr-3">
                  <router-link class="nav-link text-white-heading uppercase layout-effect" to="/privacy-policy">
                     PRIVACY POLICY
                  </router-link>
               </li>

               <li class="nav-item mb-0 mr-3">
                  <router-link class="nav-link text-white-heading uppercase layout-effect" to="/disclaimer">
                     DISCLAIMER
                  </router-link>
               </li>
               <li class="nav-item mb-0 mr-3">
                  <router-link class="nav-link text-white-heading uppercase layout-effect" to="/contact-us">
                     contact us
                  </router-link>
               </li>
               <!-- <li class="nav-item">
                     <a class="nav-link text-white-heading" href="">
                        NEWS
                     </a>
                  </li> -->
               <!-- <li class="nav-item">
                     <a class="nav-link text-white-heading" href="">
                        SITEMAP
                     </a>
                  </li> -->
            </ul>

            <p class="f4 text-white-heading mb-0">© 2021 Frankfurt - INTERLINE Chauffeurservice Eschborn GmbH</p>

         </div>
      </div>
   </footer>
</template>

<script>
export default {
	name: "n-footer"
};
</script>

<style>
</style>
