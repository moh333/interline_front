import LoadingComponent from "@/views/LoadingComponent.vue";

const moduleRoute = {
   // path: '/admin-panel',
   path: '/overview',
   component: () =>
      import( /* webpackChunkName: "Module" */ "./Module.vue"),
   loading: LoadingComponent,
   children: [{
         path: "/overview",
         // path: "/",
         name: "client-dashboard",
         component: () =>
            import( /* webpackChunkName: "ClientDashboard" */ "./pages/ClientAdmin.vue"),
         loading: LoadingComponent,
      },
      {
         path: "/c/proposals",
         name: "client-proposal",
         component: () =>
            import( /* webpackChunkName: "ClientDashboard" */ "./pages/Proposals.vue"),
         loading: LoadingComponent,
      },
      {
         path: "/c/invoices",
         name: "client-invoice",
         component: () =>
            import( /* webpackChunkName: "ClientDashboard" */ "./pages/Invoices.vue"),
         loading: LoadingComponent,
      },
      {
         path: "/c/favorites",
         name: "client-favorites",
         component: () =>
            import( /* webpackChunkName: "ClientDashboard" */ "./pages/Favorites.vue"),
         loading: LoadingComponent,
      },
      {
         path: "/c/guests/",
         name: "client-guests",
         component: () =>
            import( /* webpackChunkName: "ClientDashboard" */ "./pages/Guests.vue"),
         loading: LoadingComponent,
      },
      {
         path: "/c/guests/:id/edit-infos",
         name: "edit-infos",
         component: () =>
            import( /* webpackChunkName: "ClientDashboard" */ "./components/guests/EditInfos.vue"),
         loading: LoadingComponent,
      },
      {
         path: "/c/guests/:id/profile",
         name: "guest-profile",
         component: () =>
            import( /* webpackChunkName: "ClientDashboard" */ "./components/guests/GuestProfile.vue"),
         loading: LoadingComponent,
      },


   ]
}

export default router => {
   router.addRoute(moduleRoute)
};