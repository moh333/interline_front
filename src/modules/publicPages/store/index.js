import Api from "@/services/api";

export default {
   state: {
      overlay: false,
      vehicles: null,
   },
   mutations: {
      overlay: (state, overlay) => state.overlay = overlay,
      // SET vehicles
      SET_VEHICLES: (state, vehicles) => (state.vehicles = vehicles),
   },
   actions: {
      // load vehicles data
      async loadVehicles({
         commit
      }) {
         let response = await Api().get("/cars")

         commit('SET_VEHICLES', response.data)

      },
      // load Limousines vehicles data
      async loadLimousinesVehicles({
         commit
      }) {
         let response = await Api().get("/cars")

         var limousines = response.data.filter(car => car.group == 'Limousine')

         commit('SET_VEHICLES', limousines)

      },

      // load vehicles data
      async loadMinivanssVehicles({
         commit
      }) {
         let response = await Api().get("/cars")

         var minivans = response.data.filter(car => car.group == 'Minivans')

         commit('SET_VEHICLES', minivans)

      },

      // load vehicles data
      async loadCoachesVehicles({
         commit
      }) {
         let response = await Api().get("/cars")

         var coaches = response.data.filter(car => car.group == 'Coaches')

         commit('SET_VEHICLES', coaches)

      },
   }

}