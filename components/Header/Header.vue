<template >
    <div class="w-auto-max h-auto">
        <HeaderTop></HeaderTop>
        <HeaderMiddle></HeaderMiddle>
        <HeaderBottom></HeaderBottom>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HeaderTop from './HeaderTop.vue';
import HeaderMiddle from './HeaderMiddle.vue';
import HeaderBottom from './HeaderBottom.vue';
export default Vue.extend({
    name: 'HeaderComponent',
    components: {
        HeaderTop,
        HeaderMiddle,
        HeaderBottom,
    },
})
</script>