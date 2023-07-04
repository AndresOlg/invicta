<template>
  <div class="text-white">
    <SlideMain></SlideMain>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SlideMain from '~/components/Slides/SlideMain.vue';
export default Vue.extend({
  name: 'IndexPage',
  layout: 'MainLayout',
  components: {
    SlideMain
  }
})
</script>
<style >
body {
  background-color: #0c0c0c;
}
</style>
