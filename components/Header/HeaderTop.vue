<template>
    <div class="flex bg-[#070607] w-full sm:h-8 h-10 ">
        <div
            class="flex justify-start title-font font-sans font-medium items-center mb-3 md:mb-0 content-center sm:pt-0 pt-5">
            <span
                class=" items-center sm:hidden sm:ml-4 ml-3 tracking-wider lg:text-sm xl:text-sm md:text-xs text-white font-extralight mr-1">Visita
                también</span>
            <a class="w-auto h-auto content-center border-none" target="_blank" href="https://technomarine.co/">
                <img :src="imageUrl" alt="logo-technomarine" class="md:w-44 xl:w-44 h-9 sm:pt-4 sm:w-32 -ml-2"
                    @mouseover="imageUrl = '/src/logos/Technomarine-logo-yellow.svg'"
                    @mouseout="imageUrl = '/src/logos/Technomarine-logo.svg'">
            </a>

        </div>
        <!-- Menu right -->
        <ul class="flex justify-end ml-auto">
            <li class="flex items-center pr-2">
                <img src="/src/svg/svg-delivery.svg" alt="logo-delivery" class="w-7 mr-2">
                <span id="#delivery-spam"
                    class="lg:text-sm xl:text-sm md:text-xs sm:text-[0.49rem] text-white font-semibold">Envíos a toda
                    Colombia</span>
                <span class="pl-2 text-white font-light text-xs">|</span>
            </li>
            <li class="flex items-center" title="Contactanos">
                <nuxt-link to="/contact">
                    <img :src="contactUrl" alt="logo-contact" class="w-7 mr-2 sm:mr-1">
                </nuxt-link>
                <nuxt-link to="/contact">
                    <span
                        class="sm:hidden lg:text-sm xl:text-sm md:text-xs sm:text-[0.55rem] mr-0 text-white font-semibold hover:text-primary">Contactanos</span>
                    <span class="px-2 text-white font-light text-xs mr-0">|</span>
                </nuxt-link>
            </li>
            <li class="flex items-center mr-1 px-1.5" title="Inicar sesion">
                <nuxt-link to="/account/sesion">
                    <img :src="sesionUrl" alt="logo-sesion" class="w-5 mr-2 sm:mr-1 sm:w-4">
                </nuxt-link>
                <nuxt-link to="/account/sesion">
                    <span
                        class="sm:hidden lg:text-sm xl:text-sm md:text-xs sm:text-[0.55rem] mr-0 text-white font-semibold hover:text-primary">Iniciar
                        sesión</span>
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imageUrl: '/src/logos/Technomarine-logo.svg',
            contactUrl: '/src/menu/contact-phone.svg',
            sesionUrl: '/src/menu/user-identity.svg',
            isHovered: false
        }
    },
    methods: {
        handleHover(isHovered) {
            this.isHovered = isHovered;
        }
    }
}
</script>
