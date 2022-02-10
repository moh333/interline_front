import LoadingComponent from "@/views/LoadingComponent.vue";

const moduleRoute = {
   // path: '/admin-panel',
   path: '/',
   component: () =>
      import( /* webpackChunkName: "Module" */ "./Module.vue"),
   loading: LoadingComponent,
   children: [{
         path: "/",
         // path: "/",
         name: "home",
         component: () =>
            import( /* webpackChunkName: "Home" */ "./pages/Home.vue"),
         loading: LoadingComponent,
      },
      {
         path: "/limousine",
         name: "limousine",
         component: () =>
            import( /* webpackChunkName: "LimousineService" */ "./pages/services/LimousineService.vue"),
         loading: LoadingComponent,
      },
      {
         path: "/coach",
         name: "coach",
         component: () =>
            import( /* webpackChunkName: "CoachService" */ "./pages/services/CoachService.vue"),
         loading: LoadingComponent,
      },
      {
         path: "/airport",
         name: "airport-transfer",
         component: () =>
            import( /* webpackChunkName: "AirportTransfer" */ "./pages/services/AirportTransfer.vue"),
         loading: LoadingComponent,
      },
      {
         path: "/event-service",
         name: "event-service",
         component: () =>
            import( /* webpackChunkName: "EventService" */ "./pages/global-transportation/EventService.vue"),
         loading: LoadingComponent,
      },
      {
         path: "/fleet/limousines",
         name: "fleet-limousines",
         component: () =>
            import( /* webpackChunkName: "Limousines" */ "./pages/fleet/Limousines.vue"),
         loading: LoadingComponent,
      },
      {
         path: "/fleet/minivans",
         name: "fleet-minivans",
         component: () =>
            import( /* webpackChunkName: "Minivans" */ "./pages/fleet/Minivans.vue"),
         loading: LoadingComponent,
      },
      {
         path: "/fleet/coaches",
         name: "fleet-coaches",
         component: () =>
            import( /* webpackChunkName: "Coaches" */ "./pages/fleet/Coaches.vue"),
         loading: LoadingComponent,
      },
      {
         path: "/fleet/:name",
         name: "vehicle-details",
         component: () =>
            import( /* webpackChunkName: "VehicleDetails" */ "./pages/fleet/VehicleDetails.vue"),
         loading: LoadingComponent,
         params: true,
      },
      {
         path: "/about-us",
         name: "about-us",
         component: () =>
            import( /* webpackChunkName: "AboutUs" */ "./pages/company/AboutUs.vue"),
         loading: LoadingComponent,
         params: true,
      },
      {
         path: "/software-tracking",
         name: "software-tracking",
         component: () =>
            import( /* webpackChunkName: "SoftwareTracking" */ "./pages/company/SoftwareTracking.vue"),
         loading: LoadingComponent,
         params: true,
      },
      {
         path: "/chauffeur-training",
         name: "chauffeur-training",
         component: () =>
            import( /* webpackChunkName: "ChauffeurTraining" */ "./pages/company/ChauffeurTraining.vue"),
         loading: LoadingComponent,
         params: true,
      },
      {
         path: "/our-team",
         name: "our-team",
         component: () =>
            import( /* webpackChunkName: "OurTeam" */ "./pages/company/OurTeam.vue"),
         loading: LoadingComponent,
         params: true,
      },
      {
         path: "/imprint",
         name: "imprint",
         component: () =>
            import( /* webpackChunkName: "Imprint" */ "./pages/Imprint.vue"),
         loading: LoadingComponent,
         params: true,
      },
      {
         path: "/privacy-policy",
         name: "privacy-policy",
         component: () =>
            import( /* webpackChunkName: "SoftwareTracking" */ "./pages/PrivacyPolicy.vue"),
         loading: LoadingComponent,
         params: true,
      },
      {
         path: "/site-terms",
         name: "site-terms",
         component: () =>
            import( /* webpackChunkName: "SoftwareTracking" */ "./pages/SiteTerms.vue"),
         loading: LoadingComponent,
         params: true,
      },
      {
         path: "/disclaimer",
         name: "disclaimer",
         component: () =>
            import( /* webpackChunkName: "Disclaimer" */ "./pages/Disclaimer.vue"),
         loading: LoadingComponent,
         params: true,
      },
      {
         path: "/contact-us",
         name: "contact-us",
         component: () =>
            import( /* webpackChunkName: "Contact" */ "./pages/Contact.vue"),
         loading: LoadingComponent,
         params: true,
      },

   ]
}

export default router => {
   router.addRoute(moduleRoute)
};