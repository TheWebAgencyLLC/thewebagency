<script setup>
defineProps({
    isScrolled: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <div class="relative" :class="{ 'opacity-100': isScrolled, 'opacity-0 -translate-y-12': !isScrolled }"
        style="transition: opacity 0.5s ease-out, transform 0.5s ease-out">
        <section class="relative -mt-48 md:-mt-64">
            <div class="max-w-7xl mx-auto px-8">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <!-- Left Text Column -->
                    <div class="space-y-6">
                        <h2 class="text-4xl md:text-5xl text-white font-light leading-tight">
                            Driving Organic Growth Through SEO Excellence
                        </h2>
                        <p class="text-xl text-gray-400">
                            Our data-driven approach delivers measurable results in organic traffic and conversions
                        </p>
                    </div>

                    <!-- Right Cards Column -->
                    <div class="grid grid-cols-2 gap-4">
                        <!-- Organic Traffic Card -->
                        <div class="bg-gradient-to-br from-[#E70D01] to-[#F77D05] p-6 rounded-3xl">
                            <h3 class="text-xl text-white font-medium mb-3">
                                Organic Traffic Growth
                            </h3>
                            <p class="text-white/80 text-sm">
                                Strategic optimization that drives qualified visitors to your website
                            </p>
                        </div>

                        <!-- Conversion Card -->
                        <div class="bg-black/40 backdrop-blur-sm border border-[#F77D05]/20 p-6 rounded-3xl">
                            <h3 class="text-xl text-white font-medium mb-3">
                                Conversion Optimization
                            </h3>
                            <p class="text-white/80 text-sm">
                                Turn visitors into customers with data-backed conversion strategies
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.bg-gradient-to-br {
    background-size: 200% 200%;
    animation: gradient 5s ease infinite;
}

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}
</style>