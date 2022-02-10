<template>
   <div :style="{height: height + 'px'}">
      <div class="overflow-y-auto">
         <slot></slot>
      </div>
   </div>
</template>

<script>
export default {
	name: "scrollable-content",
	props: ["height"]
};
</script>

<style>
</style>
