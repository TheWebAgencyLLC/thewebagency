<script setup lang="ts">
defineProps({
    isScrolled: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <!-- Mobile Version - No Animations -->
    <div class="block md:hidden">
        <div class="flex justify-center items-center text-white gap-8 text-xl font-light">
            <div class="flex space-x-4">
                <NuxtLink to=""
                    class="bg-gradient-to-r from-[#E70D01] via-[#FF5400] to-[#F77D05] p-[2px] rounded-full cursor-pointer">
                    <span
                        class="block px-4 py-2 text-white text-sm rounded-full hover:bg-black transition-all duration-300">
                        Get a Quote →
                    </span>
                </NuxtLink>
            </div>
        </div>

        <div class="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mt-8">
            <div class="flex items-center gap-2">
                <div class="bg-[#E70D01]/20 p-1.5 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-[#E70D01]" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </div>
                <span class="text-gray-400 text-sm">100% Custom Web Development</span>
            </div>

            <div class="flex items-center gap-2">
                <div class="bg-[#F77D05]/20 p-1.5 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-[#F77D05]" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </div>
                <span class="text-gray-400 text-sm">24/7 Priority Support</span>
            </div>
        </div>
    </div>

    <!-- Desktop Version - With Animations -->
    <div class="hidden md:block" :class="{ 'opacity-0 translate-y-[-50px]': isScrolled }"
        style="transition: opacity 0.5s ease-out, transform 0.5s ease-out">
        <div
            class="flex justify-center items-center text-white gap-8 text-xl font-light opacity-0 animate-fade-up animation-delay-400">
            <div class="flex space-x-4">
                <NuxtLink to=""
                    class="bg-gradient-to-r from-[#E70D01] via-[#FF5400] to-[#F77D05] p-[2px] rounded-full cursor-pointer">
                    <span
                        class="block px-4 py-2 text-white text-sm rounded-full hover:bg-black transition-all duration-300">
                        Get a Quote →
                    </span>
                </NuxtLink>
            </div>
        </div>

        <div
            class="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mt-8 opacity-0 animate-fade-up animation-delay-400">
            <div class="flex items-center gap-2">
                <div class="bg-[#E70D01]/20 p-1.5 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-[#E70D01]" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </div>
                <span class="text-gray-400 text-sm">100% Custom Web Development</span>
            </div>

            <div class="flex items-center gap-2">
                <div class="bg-[#F77D05]/20 p-1.5 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-[#F77D05]" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </div>
                <span class="text-gray-400 text-sm">24/7 Priority Support</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.animation-delay-400 {
    animation-delay: 400ms;
}

.opacity-0 {
    opacity: 0;
}

.animate-fade-up {
    animation-fill-mode: forwards;
}
</style>