<template>

   <!--  -->
   <div class="facts--wrap">
      <div class="row">
         <div class="col-lg-3 mb-4" v-for="statistic in statistics" :key="statistic.type">
            <div class="card border box-shadow-medium">
               <div class="card-body p-4">
                  <slot :statistic="statistic"></slot>
                  <!-- <slot :quantity="quantity">

                  </slot> -->
               </div>
            </div>
         </div>
      </div>
   </div>
   <!--  -->

</template>

<script>
// import { mapState } from "vuex";
export default {
  name: "statistic-card",
  props: {
    statistics: {
      type: Array,
      default: () => {}
    }
  },
  data() {
    return {};
  },
  computed: {}
};
</script>

<style>
</style>
