<template>
    <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
        <SplideSlide v-for="slide in slides" :key="slide.id">
            <img :src="item.imageUrl" alt="Sample 1">
        </SplideSlide>
    </Splide>
</template>
  
<!-- <div class="swiper-slide" v-for="(item, index) in items" :key="index">
    
</div> -->
<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';

export default {
    name: 'SlideMain',
    components: {
        Splide,
        SplideSlide,
    },
    setup() {
        return {
            splideOptions: {
                // Opciones de configuración de Splide
            },
            slides: [
                {
                    id: 1,
                    imageUrl: './src/campaign/elements/banner/slide-air_1600.webp',
                    description: 'loremupsum'
                },
                {
                    id: 2,
                    imageUrl: './src/campaign/elements/banner/slide-fire_1600.webp',
                    description: 'loremupsum'
                },
                {
                    id: 3,
                    imageUrl: './src/campaign/elements/banner/slide-earth_1600.webp',
                    description: 'loremupsum'
                },
                {
                    id: 4,
                    imageUrl: './src/campaign/elements/banner/slide-space_1600.webp',
                    description: 'loremupsum'
                },
                {
                    id: 5,
                    imageUrl: './src/campaign/elements/banner/slide-water_1600.webp',
                    description: 'loremupsum'
                },
            ],
        };
    }
};
</script>

<style>
@import '../../node_modules/@splidejs/vue-splide/dist/css/splide.min.css';
@import '../../node_modules/@splidejs/vue-splide/dist/css/splide-core.min.css';
@import '../../node_modules/@splidejs/vue-splide/dist/css/themes/splide-sea-green.min.css';
</style>