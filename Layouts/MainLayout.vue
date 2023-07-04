<template>
    <div class="bg-[#0c0c0c] h-full w-full">
        <!-- Default header pages -->
        <header>
            <HeaderComponent></HeaderComponent>
        </header>
        <!-- Exclusive content per page -->
        <main>
            <nuxt />
        </main>
        <!-- Default footer pages -->
        <footer>
            <FooterComponent></FooterComponent>
        </footer>
    </div>
</template>
  
<script>
import HeaderComponent from '../components/Header/Header.vue';
import FooterComponent from '../components/Footer/Footer.vue';
export default {
    name: 'MainLayout',
    components: {
        HeaderComponent,
        FooterComponent
    }
}
</script>
  