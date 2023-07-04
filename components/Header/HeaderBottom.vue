<template>
    <div class="container-slider flex p-0 bg-primary w-full sm:h-[1.70rem] h-7">
        <ul class="slider text-black sm:text-sm font-semibold flex flex-row items-center mx-2 absolute w-max top-0 bottom-0 left-0 right-0 m-0"
            ref="slider">
            <li v-for="item in items"
                class="flex flex-row items-center overflow-hidden justify-center text-center px-2 slide">
                <img :src="item.ico" :alt="'logo-' + item.id" class="w-5 h-5 object-cover mr-2" v-if="item.ico">
                <span
                    class="lg:text-sm xl:text-sm md:text-xs sm:text-[0.72rem] mr-0 text-black text-left font-bold whitespace-nowrap overflow-hidden self-center"
                    style="text-overflow: unset;" v-html="item.description"></span>
            </li>
        </ul>
    </div>
</template>
  
<script>
import { ref, onMounted, computed } from "vue";
const stateAnimation = ref('running');
const sliderPaused = computed(() => {
    slider.style.animationPlayState = stateAnimation;
    return stateAnimation == 'running' ?? false;
});
export default {
    setup() {
        const slider = ref(null);
        onMounted(() => {
            slider.value.style.animationPlayState = stateAnimation;
        });

        const items = [
            {
                id: 'dist',
                ico: '/src/automatic-band/autorizar.svg',
                description: 'DISTRIBUIDORES OFICIALES EN COLOMBIA',
            },
            {
                id: 'sec',
                ico: '/src/automatic-band/proteger.svg',
                description: 'SEGURIDAD EN SU COMPRA',
            },
            {
                id: 'dist',
                ico: '/src/automatic-band/autorizar.svg',
                description: 'ENTREGA EN 24H EN LA CIUDAD DE BOGOTÁ',
            },
            {
                id: 'dist',
                ico: '/src/automatic-band/call-center-operator.svg',
                description: `<a href="tel:3336025027"><span>CELULAR: (57) 333-6025027</span></a>
                <a href="tel:0316540434"><span>FIJO:(1) 654-0434 OPCIÓN:1</span></a>
            `,
            },
            {
                id: 'dist',
                ico: '/src/automatic-band/tarjeta-de-credito.svg',
                description: '3 AÑOS DE GARANTÍA',
            },
        ];

        return {
            slider,
            items,
        };
    },
};
</script>
  
<style scoped>
@keyframes sliderAnimation {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-100%);
    }
}

.container-slider {
    position: relative;
    width: 100%;
    overflow: hidden;
}

.slider {
    white-space: nowrap;
    overflow: hidden;
    animation: sliderAnimation 20s infinite;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}

.slide {
    min-width: 200px;
    max-width: 450px;
    /* Adjust the width as needed */
    height: 100%;
    flex-shrink: 0;
}

.text-nowrap {
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
  