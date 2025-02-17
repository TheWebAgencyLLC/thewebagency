<script setup lang="ts">
const logos = [
    { id: 1, name: 'Client 1', path: '/images/primaryWideLogo.webp' },
    { id: 2, name: 'Client 2', path: '/images/logo_img2.webp' },
    { id: 3, name: 'Client 3', path: '/images/logo.png' },
    { id: 4, name: 'Client 4', path: '/images/servidiap.png' }
]
</script>

<template>
    <div class="w-full py-12">
        <div class="relative max-w-7xl mx-auto px-8 py-12"> <!-- Increased padding -->
            <!-- Container for decorators and content with padding -->
            <div class="relative p-6 sm:p-8 md:p-10"> <!-- Added padding container -->
                <!-- Decorative Corners -->
                <div class="absolute -top-2 -right-2 font-mono text-xl text-[#F77D05]">›_</div>
                <div class="absolute -bottom-2 -left-2 font-mono text-xl text-[#F77D05]">›_</div>
                <div class="absolute -bottom-2 -right-2 font-mono text-xl text-[#F77D05]">›_</div>

                <!-- Section Title with nested circles - adjusted positioning -->
                <div class="flex items-center gap-3 mb-16"> <!-- Increased bottom margin -->
                    <div class="absolute -top-2 -left-2">
                        <div class="w-8 h-8 rounded-full border border-gray-600"></div>
                        <div
                            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#F77D05]">
                        </div>
                    </div>
                    <h2 class="absolute -top-0.5 left-4 pl-4 text-sm font-mono text-white/55">Clients</h2>
                </div>

                <!-- Logo Layout -->
                <div class="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 items-center mt-8">
                    <div v-for="logo in logos" :key="logo.id"
                        class="w-full max-w-[200px] md:max-w-none flex items-center justify-center transition-transform duration-300 hover:-translate-y-1">
                        <img :src="logo.path" :alt="logo.name" :class="{
                            'w-auto object-contain': true,
                            'h-20 md:h-16': true,
                            'scale-150': logo.path.includes('logo_img2.webp'),
                            'h-14 md:h-10': logo.path.includes('servidiap.png') || logo.path.includes('primaryWideLogo.webp'),
                            'h-16 md:h-12': logo.path.includes('logo.png')
                        }">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.animate-scroll:hover {
    animation-play-state: paused;
}
</style>