import Api from "@/services/api";
// Create a new Vehicle 
// import moment from "moment";
// var m = moment();

const newVehicle = {
   id: null,
   name: "",
   type: "",
   category: "",
   v_class: "",
   group: "",
   size: "",
   pax: null,
   res: null,
   t_min: "",
   t_max: "",
   s_min: null,
   s_max: null,
   provCode: "",
   altCode: "",
   catCode: "",
   grpCode: "",
   vehCode: "",
   arg: "",
   min: null,
   max: null,
   license: "",
   status: null,
   payRate: null,
   fuelType: '',
   standardConsumption: null,
   tireSetPrice: null,
   tireLifespan: null,
   serviceCosts: null,
   serviceInterval: null,
   rentDailyRate: null,
   basePrice_hr: null,
   basePrice_km: null,
   _currentMonth: undefined

}




export default {
   state: {
      loading: false,
      isOpen: true, // for sidebar 
      activeItem: "", // for items in filters buttons 
      filterByOrder: "all orders",
      filterByTrip: "all trips",
      filterByVehicle: "all vehicles",
      filterBydrivers: "all drivers",
      filterByinvoices: "all invoices",
      currentPage: 1,
      currentTripPage: 1,
      perPage: 5,
      project: [],
      history: [],
      overviewStatistics: [],
      proposalsStatistics: [],
      orders: [],
      ordersStatistics: [],
      vehicles: [],
      vehiclesStatistics: [],
      customers: [],
      customersFields: [],
      customersStatistics: [],
      trips: [],
      tripsStatistics: [],
      drivers: [],
      driversStatistics: [],
      invoices: [],
      invoicesStatistics: [],
      newVehicle,
      languages: '',
      language: '',

   },

   getters: {

   },
   mutations: {


      _currentMonth: (state, _currentMonth) => state._currentMonth = _currentMonth,

      SET_OVERVIEW_STATISTICS: (state, overviewStatistics) => state.overviewStatistics = overviewStatistics,

      // SET history 
      SET_PROPOSALS_STATISTICS: (state, proposalsStatistics) => (state.proposalsStatistics = proposalsStatistics),
      // SET history 
      SET_PROJECT: (state, project) => (state.project = project),
      // SET history 
      SET_HISTORY: (state, history) => (state.history = history),
      // SET orders and orders statistics
      SET_ORDERS: (state, orders) => (state.orders = orders),
      SET_ORDERS_STATISTICS: (state, ordersStatistics) => (state.ordersStatistics = ordersStatistics),

      // SET trips and trips statistics
      SET_VEHICLES: (state, vehicles) => (state.vehicles = vehicles),
      SET_VEHICLES_STATISTICS: (state, vehiclesStatistics) => (state.vehiclesStatistics = vehiclesStatistics),
      // SET trips and trips statistics
      SET_TRIPS: (state, trips) => (state.trips = trips),
      SET_TRIPS_STATISTICS: (state, tripsStatistics) => (state.tripsStatistics = tripsStatistics),

      // SET trips and trips statistics
      SET_DRIVERS: (state, drivers) => (state.drivers = drivers),
      SET_DRIVERS_STATISTICS: (state, driversStatistics) => (state.driversStatistics = driversStatistics),

      // SET trips and trips statistics
      SET_INVOICES: (state, invoices) => (state.invoices = invoices),
      SET_INVOICES_STATISTICS: (state, invoicesStatistics) => (state.invoicesStatistics = invoicesStatistics),


      // customers itmes
      SET_CUSTOMERS: (state, customers) => (state.customers = customers),
      // customers Fields in the table
      SET_CUSTOMERS_FIELDS: (state, customersFields) => state.customersFields = customersFields,
      // customers Statistics
      SET_CUSTOMERS_STATISTICS: (state, customersStatistics) => state.customersStatistics = customersStatistics,

      newVehicle: (state, newVehicle) => state.newVehicle = newVehicle,

      loading: (state, loading) => state.loading = loading,
      language: (state, language) => state.languages = language,

      // for sidebar
      isOpen: (state, isOpen) => state.isOpen = isOpen,

      // // for items in filters buttons by status 
      activeItem: (state, activeItem) => state.activeItem = activeItem,

      // pag
      perPage: (state, perPage) => state.perPage = perPage,
      currentPage: (state, currentPage) => state.currentPage = currentPage,
      currentTripPage: (state, currentTripPage) => state.currentTripPage = currentTripPage,

      // filters
      filterByOrder: (state, filterByOrder) => state.filterByOrder = filterByOrder,
      filterByTrip: (state, filterByTrip) => state.filterByTrip = filterByTrip,
      filterByVehicle: (state, filterByVehicle) => state.filterByVehicle = filterByVehicle,
      filterByinvoices: (state, filterByinvoices) => state.filterByinvoices = filterByinvoices,
      filterBydrivers: (state, filterBydrivers) => state.filterBydrivers = filterBydrivers,

      ADD_VEHICLE(state) {
         console.log(state.vehicles)

         var checkId = state.vehicles.some(vehicle => {
            return vehicle.id === state.newVehicle.id
         })

         if (!checkId || state.newVehicle.name !== '' || state.newVehicle.type !== '' || state.newVehicle.category !== '' ||
            state.newVehicle.v_class !== '' || state.newVehicle.group !== '' || state.newVehicle.size !== '' || state.newVehicle.pax !== null ||
            state.newVehicle.min !== null || state.newVehicle.max !== null || state.newVehicle.license !== '') {

            state.vehicles.push({

               id: Math.ceil(Math.random() * 1000000),
               name: state.newVehicle.name,
               type: state.newVehicle.type,
               category: state.newVehicle.category,
               v_class: state.newVehicle.v_class,
               group: state.newVehicle.group,
               size: state.newVehicle.size,
               pax: state.newVehicle.pax,
               res: state.newVehicle.res,
               t_min: state.newVehicle.t_min,
               t_max: state.newVehicle.t_max,
               s_min: state.newVehicle.s_min,
               s_max: state.newVehicle.s_max,
               provCode: state.newVehicle.provCode,
               altCode: state.newVehicle.altCode,
               catCode: state.newVehicle.catCode,
               grpCode: state.newVehicle.grpCode,
               vehCode: state.newVehicle.vehCode,
               arg: state.newVehicle.arg,
               min: state.newVehicle.min,
               max: state.newVehicle.max,
               license: state.newVehicle.license,
               status: "available",
               payRate: state.newVehicle.payRate,
               fuelType: state.newVehicle.fuelType,
               standardConsumption: state.newVehicle.standardConsumption,
               tireSetPrice: state.newVehicle.tireSetPrice,
               tireLifespan: state.newVehicle.tireLifespan,
               serviceCosts: state.newVehicle.serviceCosts,
               serviceInterval: state.newVehicle.serviceInterval,
               rentDailyRate: state.newVehicle.rentDailyRate,
               basePrice_hr: state.newVehicle.basePrice_hr,
               basePrice_km: state.newVehicle.basePrice_km

            });
            state.newVehicle = {}
         } else {
            return false;
         }
      },


   },
   actions: {


      // load order data 
      async loadOverviewStatistics({
         commit
      }) {
         let response = await Api().get("/overview_statistics")
         commit('SET_OVERVIEW_STATISTICS', response.data)
      },
      // load order data 
      async loadProposalsStatistics({
         commit
      }) {
         let response = await Api().get("/proposals_statistics")
         commit('SET_PROPOSALS_STATISTICS', response.data)
      },
      // load PROJECT data 
      async loadProject({
         commit
      }) {
         let response = await Api().get("/project")
         commit('SET_PROJECT', response.data)
      },
      // load history data 
      async loadHistory({
         commit
      }) {
         let response = await Api().get("/history")
         commit('SET_HISTORY', response.data)
      },

      // load order data 
      async loadOrders({
         commit
      }) {
         let response = await Api().get("/orders")
         commit('SET_ORDERS', response.data)
      },

      // load order statistics data
      async loadOrdersStatistics({
         commit
      }) {
         let response = await Api().get("/orders_statistics")
         commit('SET_ORDERS_STATISTICS', response.data)
      },

      // load trips statistics data
      async loadTrips({
         commit
      }) {
         let response = await Api().get("/trips")
         commit('SET_TRIPS', response.data)
      },

      // load trips statistics data
      async loadTripsStatistics({
         commit
      }) {
         let response = await Api().get("/trips_statistics")
         commit('SET_TRIPS_STATISTICS', response.data)
      },

      // load customers statistics data
      async loadCustomers({
         commit
      }) {
         let response = await Api().get("/customers")
         commit('SET_CUSTOMERS', response.data)
      },

      // load customers statistics data
      async loadCustomersStatistics({
         commit
      }) {
         let response = await Api().get("/customers_statistics")
         commit('SET_CUSTOMERS_STATISTICS', response.data)
      },
      // load customers feild
      async loadCustomersFields({
         commit
      }) {
         let response = await Api().get("/customers_fields")
         commit('SET_CUSTOMERS_FIELDS', response.data)
      },

      // load trips statistics data
      async loadDrivers({
         commit
      }) {
         let response = await Api().get("/drivers")
         commit('SET_DRIVERS', response.data)
      },

      // load trips statistics data
      async loadDriversStatistics({
         commit
      }) {
         let response = await Api().get("/drivers_statistics")
         commit('SET_DRIVERS_STATISTICS', response.data)
      },

      // load trips statistics data
      async loadInvoice({
         commit
      }) {
         let response = await Api().get("/invoices")
         commit('SET_INVOICES', response.data)
      },

      // load trips statistics data
      async loadInvoiceStatistics({
         commit
      }) {
         let response = await Api().get("/invoices_statistics")
         commit('SET_INVOICES_STATISTICS', response.data)
      },

      // load vehicles data
      async loadVehicles({
         commit
      }) {
         let response = await Api().get("/vehicles")
         commit('SET_VEHICLES', response.data)

      },

      // load vehicles statistics data
      async loadVehiclesStatistics({
         commit
      }) {
         let response = await Api().get("vehicles_statistics")
         commit('SET_VEHICLES_STATISTICS', response.data)
      },
   }

}