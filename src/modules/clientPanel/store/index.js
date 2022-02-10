import Api from "@/services/api";

export default {
   state: {
      guests: []
   },
   mutations: {
      // SET guests 
      SET_GUESTS: (state, guests) => (state.guests = guests),
   },
   actions: {
      // load order data 
      async loadGuests({
         commit
      }) {
         let response = await Api().get("/guests")
         commit('SET_GUESTS', response.data)
      },
   }

}