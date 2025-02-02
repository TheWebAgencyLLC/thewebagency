<!-- LogoCarousel.vue -->
<script setup lang="ts">
const logos = [
    { id: 1, name: 'Client 1', path: '/images/primaryWideLogo.webp' },
    { id: 2, name: 'Client 2', path: '/images/logo_img2.webp' },
    { id: 3, name: 'Client 3', path: '/images/logo.png' },
    { id: 4, name: 'Client 4', path: '/images/servidiap.png' },
    // { id: 5, name: 'Client 5', path: '/logos/client5.svg' },

    // for now duplicating some logos to make it look like we have more clients.
    { id: 6, name: 'Client 1', path: '/images/primaryWideLogo.webp' },
    { id: 7, name: 'Client 2', path: '/images/logo_img2.webp' },
    { id: 8, name: 'Client 3', path: '/images/logo.png' },
]
</script>

<template>
    <div class="w-full overflow-hidden py-12">
        <div class="relative max-w-7xl mx-auto">
            <div class="absolute left-0 top-0 bottom-0 w-32 z-10"></div>
            <div class="absolute right-0 top-0 bottom-0 w-32 z-10"></div>

            <div class="flex animate-scroll">
                <div class="flex space-x-24 items-center px-8">
                    <div v-for="logo in logos" :key="logo.id" class="flex items-center justify-center min-w-[150px]">
                        <img :src="logo.path" :alt="logo.name" :class="{
                            'h-16 w-auto object-contain': true,
                            'scale-150': logo.path.includes('logo_img2.webp')
                        }">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@keyframes scroll {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(calc(-150px * 4 - 6rem * 4));
    }
}

.animate-scroll {
    animation: scroll 30s linear infinite;
}

.animate-scroll:hover {
    animation-play-state: paused;
}
</style>