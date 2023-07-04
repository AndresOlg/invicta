<template>
    <div class="flex bg-[#101010] w-full sm:h-14 sm:pt-2 sm:pb-0 pt-3 pb-2 h-[5.5rem]">
        <!-- Logos -->
        <div class="flex justify-start title-font font-sans font-medium items-center mb-4 ml-3 md:mb-0">
            <nuxt-link to="/">
                <img src="/src/logos/logo-invicta.svg" alt="logo-invicta" class="w-48 sm:w-28">
            </nuxt-link>
            <nuxt-link to="/">
                <img src="/src/logos/logo-invicta-col.png" alt="logo-invicta-col"
                    class="w-20 sm:w-[3rem] pl-2 rotate-[25deg]">
            </nuxt-link>
        </div>
        <!-- Menu center -->
        <div class="sm:hidden flex justify-center title-font font-sans font-medium items-center mb-4 ml-3 md:mb-0">
            <ul class="flex justify-end ml-auto">
                <li class="flex items-center mr-2">
                    <span
                        class="sm:hidden lg:text-sm xl:text-sm md:text-xs sm:text-[0.55rem] mr-0 text-white font-semibold">Contáctanos</span>
                </li>
                <li class="flex items-center mr-2">
                    <span
                        class="sm:hidden lg:text-sm xl:text-sm md:text-xs sm:text-[0.55rem] mr-0 text-white font-semibold">Contáctanos</span>
                </li>
                <li class="flex items-center mr-2">
                    <span
                        class="sm:hidden lg:text-sm xl:text-sm md:text-xs sm:text-[0.55rem] mr-0 text-white font-semibold">Contáctanos</span>
                </li>
                <li class="flex items-center mr-2">
                    <span
                        class="sm:hidden lg:text-sm xl:text-sm md:text-xs sm:text-[0.55rem] mr-0 text-white font-semibold">Contáctanos</span>
                </li>
            </ul>
        </div>
        <!-- Menu right -->
        <ul class="hidden sm:flex justify-end ml-auto ">
            <li v-for="icon in iconsBar" class="flex items-center ml-2 mr-2 sm:pb-[0.75rem] cursor-pointer ">
                <img :src="icon.image" :title="icon.description" :alt="icon.alt" class="sm:w-[1.3rem] sm:mr-1 w-7 mr-2">
                <span class="sm:hidden lg:text-sm xl:text-sm md:text-xs sm:text-[0.55rem] mr-0 text-white font-semibold">{{
                    icon.description }}</span>
            </li>
            <li class="hidden sm:flex items-center mr-2 ml-3 sm:pb-[0.75rem]">
                <div class="h-5 flex flex-col justify-between cursor-pointer" @click="toggleMenu"
                    :class="{ 'open': isOpen }">
                    <span class="bg-white h-1 w-5"></span>
                    <span class="bg-white h-1 w-6"></span>
                    <span class="bg-white h-1 w-4"></span>
                </div>
                <transition name="fade">
                    <div v-show="isOpen" class="fixed inset-0 flex items-center justify-center z-20 bg-primary/80">
                        <h1>algo</h1>
                    </div>
                </transition>
            </li>
        </ul>
    </div>
</template>
  
<script>
import { ref } from 'vue';

export default {
    setup() {
        const isOpen = ref(false);

        const toggleMenu = () => {
            isOpen.value = !isOpen.value;
        };

        const iconsBar = [
            {
                image: '/src/menu/search.svg',
                alt: 'icono-search',
                description: 'Buscar',
            },
            {
                image: '/src/menu/like.svg',
                alt: 'icono-like',
                description: 'Tus favoritos',
            },
            {
                image: '/src/menu/shopping-cart.svg',
                alt: 'icono-cart',
                description: 'Ver carrito',
            },
        ];

        return {
            isOpen,
            iconsBar,
            toggleMenu,
        };
    },
};
</script>
  
<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
  