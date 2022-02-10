const loading = {
   get() {
      return this.$store.state.adminPanel.loading;
   },
   set(value) {
      this.$store.commit("loading", value);
   }
};

export default {
   computed: {
      loading
   },
}