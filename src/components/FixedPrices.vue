<template>
  <div class="fixed-prices">
    <modal-container :modalsize="'modal-xl'">
      <template #heading>Fixed prices</template>
      <template #body>
        <div class="row">
          <div class="col-lg-10 mt-2 align-self-end">
            <div class="custom-control custom-checkbox custom-checkbox_wrap">
              <input
                class="custom-control-input"
                type="radio"
                name="fixedprice"
                :id="`input-multi-time1`"
              />
              <label
                class="h4 mb-0 custom-control-label"
                id="input-group-multi-time__BV_label_"
                :for="`input-multi-time1`">Trip 1 fixed price - $300</label>
            </div>
          </div>
          <div class="col-lg-10 mt-2 align-self-end">
            <div class="custom-control custom-checkbox custom-checkbox_wrap">
              <input
                class="custom-control-input"
                type="radio"
                name="fixedprice"
                :id="`input-multi-time2`"
              />
              <label
                class="h4 mb-0 custom-control-label"
                id="input-group-multi-time__BV_label_"
                :for="`input-multi-time2`">Trip 2 fixed price - $3100</label>
            </div>
          </div>
          <div class="col-lg-10 mt-2 align-self-end">
            <div class="custom-control custom-checkbox custom-checkbox_wrap">
              <input
                class="custom-control-input"
                type="radio"
                name="fixedprice"
                :id="`input-multi-time3`"
              />
              <label
                class="h4 mb-0 custom-control-label"
                id="input-group-multi-time__BV_label_"
                :for="`input-multi-time3`">Trip 3 fixed price - $3040</label>
            </div>
          </div>
        </div>
      </template>
      <template #footer>
        <button type="button" class="btn gold-btn uppercase">
          generate price
        </button>
      </template>
    </modal-container>
  </div>
</template>

<script>
import ModalContainer from "./ModalContainer.vue";
export default {
  name: "fixed-prices",
  components: {
    ModalContainer,
  }
};
</script>

<style>
</style>
