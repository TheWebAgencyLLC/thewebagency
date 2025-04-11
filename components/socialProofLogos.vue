<script setup lang="ts">
const logos = [
    { id: 1, name: 'Client 1', path: '/images/primaryWideLogo.webp' },
    { id: 2, name: 'Client 2', path: '/images/logo_img2.webp' },
    { id: 3, name: 'Client 3', path: '/images/logo.png' },
    { id: 4, name: 'Client 4', path: '/images/servidiap.png' },
    { id: 5, name: 'Client 5', path: '/images/bytehoglogo.png' }
]

// Duplicate logos for seamless infinite scrolling effect
const duplicatedLogos = [...logos, ...logos]
</script>

<template>
    <div class="w-full py-12 overflow-hidden">
        <div class="relative max-w-9xl mx-auto px-8">
            <div class="relative p-6 sm:p-8 md:p-10">
                <div class="flex items-center gap-3 mb-16">
                    <div class="absolute -top-2 -left-2">
                        <div class="w-8 h-8 rounded-full border border-gray-600"></div>
                        <div
                            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#F77D05]">
                        </div>
                    </div>
                    <h2 class="absolute -top-0.5 left-4 pl-4 text-sm font-mono text-white/55">Clients</h2>
                </div>

                <div class="relative mt-8">
                    <DotPattern
                        class="absolute inset-0 size-full fill-white/20 [mask-image:radial-gradient(white,transparent_85%)] pointer-events-none" />
                    
                    <!-- Carousel container with horizontal scroll animation -->
                    <div class="carousel-container">
                        <div class="carousel-track">
                            <!-- First set of logos -->
                            <div v-for="logo in logos" :key="`first-${logo.id}`"
                                class="carousel-item">
                                <img :src="logo.path" :alt="logo.name" :class="{
                                    'w-auto object-contain': true,
                                    'h-20': true,
                                    'scale-150': logo.path.includes('logo_img2.webp'),
                                    'h-14': logo.path.includes('servidiap.png') || logo.path.includes('primaryWideLogo.webp'),
                                    'h-16': logo.path.includes('logo.png')
                                }">
                            </div>
                            
                            <!-- Duplicated set of logos for seamless looping -->
                            <div v-for="logo in logos" :key="`second-${logo.id}`"
                                class="carousel-item">
                                <img :src="logo.path" :alt="logo.name" :class="{
                                    'w-auto object-contain': true,
                                    'h-20': true,
                                    'scale-150': logo.path.includes('logo_img2.webp'),
                                    'h-14': logo.path.includes('servidiap.png') || logo.path.includes('primaryWideLogo.webp'),
                                    'h-16': logo.path.includes('logo.png')
                                }">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.carousel-container {
    width: 100%;
    overflow: hidden;
    position: relative;
    padding: 1rem 0;
}

.carousel-track {
    display: flex;
    align-items: center;
    width: max-content;
    animation: scroll 20s linear infinite;
}

.carousel-item {
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
    transition: transform 0.3s ease;
}

@keyframes scroll {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%); /* Move by exactly half the width to create seamless loop */
    }
}
</style>