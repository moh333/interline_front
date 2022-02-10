<template>
   <div class="p_layout pt-4">
      <invoice-card-list></invoice-card-list>
   </div>
</template>

<script>
import LoadingComponent from "@/views/LoadingComponent.vue";
const InvoiceCardList = () => ({
	component: import(/*webpackPrefetch: true*/ "@/modules/adminPanel/components/invoices/InvoiceCardList.vue"),
	loading: LoadingComponent
});
export default {
	name: "client-invoice",
	components: {
		InvoiceCardList
	}
};
</script>

<style>
</style>
