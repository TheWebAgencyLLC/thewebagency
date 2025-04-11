<template>
    <section class="relative py-12">
        <DotPattern
            class="absolute inset-0 size-full fill-white/20 [mask-image:radial-gradient(white,transparent_85%)] pointer-events-none" />
            
        <div class="max-w-7xl mx-auto px-4 md:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div class="space-y-6">
                    <h2 class="text-3xl md:text-5xl text-white font-light leading-tight">
                        Driving Organic Growth Through SEO Excellence
                    </h2>
                    <p class="text-lg md:text-xl text-gray-400">
                        Our data-driven approach delivers measurable results in organic traffic and conversions
                    </p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div class="bg-gradient-to-br from-[#E70D01] to-[#F77D05] p-6 rounded-3xl">
                        <h3 class="text-xl text-white font-medium mb-3">
                            Organic Traffic Growth
                        </h3>
                        <p class="text-white/80 text-sm">
                            Strategic optimization that drives qualified visitors to your website
                        </p>
                    </div>

                    <div class="bg-black/40 backdrop-blur-sm border border-[#F77D05]/20 p-6 rounded-3xl">
                        <h3 class="text-xl text-white font-medium mb-3">
                            Conversion Optimization
                        </h3>
                        <p class="text-white/80 text-sm">
                            Turn visitors into customers with proven conversion strategies
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
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