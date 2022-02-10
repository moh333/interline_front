import LoadingComponent from "@/views/LoadingComponent.vue";

const moduleRoute = {
   path: '/trips',
   // path: '/',
   component: () =>
      import( /* webpackChunkName: "Module" */ "./Module.vue"),
   loading: LoadingComponent,
   children: [{
         // path: "/overview",
         path: "/dashboard",
         component: () =>
            import( /* webpackChunkName: "Dashboard" */ "./pages/Dashboard.vue"),
         loading: LoadingComponent,
      },
      {
         path: "/LoadingComponent",
         name: 'LoadingComponent',
         component: LoadingComponent
      },
      {
         path: "/trips",
         name: 'trips',
         component: () =>
            import( /* webpackChunkName: "Trips" */ "./pages/Trips.vue"),
         loading: LoadingComponent,
      },
      {
         path: "/trip/veiw",
         name: 'trip-veiw',
         component: () =>
            import( /* webpackChunkName: "Trips" */ "./components/trips/TripVeiw.vue"),
         loading: LoadingComponent,
      },
      {
         path: "/vehicles",
         component: () =>
            import( /* webpackChunkName: "Vehicles" */ "./pages/Vehicles.vue"),
         loading: LoadingComponent,

      },
      {
         path: '/vehicles/:id/profile',
         name: 'vehicle-profile',
         component: () =>
            import( /* webpackChunkName: "VehicleProfile" */ "./components/vehicles/VehicleProfile.vue"),
         loading: LoadingComponent,
         params: true,

      },
      {
         path: `/vehicles/:id/edit`,
         name: 'edit-vehicle',
         components: {
            default: () => import( /* webpackChunkName: "Customers" */ "./components/vehicles/VehicleProfile.vue"),
            moreInfos: () => import( /* webpackChunkName: "CustomerProfile" */ "./components/vehicles/EditVehicle.vue"),
         },
         loading: LoadingComponent,
         params: true,
      },
      {
         path: `/vehicles/:id/setting`,
         name: 'vehicle-setting',
         components: {
            default: () => import( /* webpackChunkName: "Customers" */ "./components/vehicles/VehicleProfile.vue"),
            moreInfos: () => import( /* webpackChunkName: "CustomerProfile" */ "./components/vehicles/VehicleSetting.vue"),
         },
         loading: LoadingComponent,
         params: true,
      },
      {
         path: `/vehicles/add`,
         name: 'add-vehicle',
         components: {
            default: () => import( /* webpackChunkName: "Customers" */ "./pages/Vehicles.vue"),
            moreInfos: () => import( /* webpackChunkName: "CustomerProfile" */ "./components/vehicles/AddVehicle.vue"),
         },
         loading: LoadingComponent,
         params: true,
      },
      {
         path: "/customers",
         name: 'customers',
         component: () =>
            import( /* webpackChunkName: "Customers" */ "./pages/Customers.vue"),
         loading: LoadingComponent,
      },
      {
         path: '/customers/:id/profile',
         name: 'customer-profile',
         components: {
            default: () => import( /* webpackChunkName: "Customers" */ "./pages/Customers.vue"),
            moreInfos: () => import( /* webpackChunkName: "CustomerProfile" */ "./components/customers/CustomerProfile.vue"),
         },
         loading: LoadingComponent,
         params: true,
      },

      {
         path: '/customers/:id/edit',
         name: 'edit-profile',
         component: () =>
            import( /* webpackChunkName: "EditProfile" */ "./components/customers/EditProfile.vue"),
         loading: LoadingComponent,
         params: true
      },
      {
         path: "/drivers",
         component: () =>
            import( /* webpackChunkName: "Drivers" */ "./pages/Drivers.vue"),
         loading: LoadingComponent,

      },
      {
         path: "/drivers/add",
         component: () =>
            import( /* webpackChunkName: "Drivers" */ "./components/drivers/AddDriver.vue"),
         loading: LoadingComponent,

      },
      {
         path: "/orders",
         name: "orders",
         component: () =>
            import( /* webpackChunkName: "Orders" */ "./pages/Orders.vue"),
         loading: LoadingComponent,
      },
      {
         path: "/orders/proposals",

         component: () =>
            import( /* webpackChunkName: "Proposals" */ "./pages/Proposals.vue"),
         loading: LoadingComponent,
      },
      {
         path: "/orders/invoices",

         component: () =>
            import( /* webpackChunkName: "Invoices" */ "./pages/Invoices.vue"),
         loading: LoadingComponent,
      },
      {
         path: "/rout-track",
         component: () =>
            import( /* webpackChunkName: "RoutTrack" */ "./pages/RoutTrack.vue"),
         loading: LoadingComponent,
      },
      // {
      //    path: "/modal-container",
      //    component: () =>
      //       import( /* webpackChunkName: "RoutTrack" */ "./components/ModalContainer.vue"),
      //    loading: LoadingComponent,
      // },

   ]
}

export default router => {
   router.addRoute(moduleRoute)
};