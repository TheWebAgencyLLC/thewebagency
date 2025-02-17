<template>
    <div class="fixed top-0 flex justify-center w-full z-[100] font-jetbrains">
        <NuxtLink to="/" class="absolute left-4 mt-4 h-16 w-16 md:h-24 md:w-24 z-[60]">
            <img src="/images/TWALogo-Photoroom.png" alt="The Web Agency Logo">
        </NuxtLink>

        <button @click="toggleMenu" class="absolute right-4 top-6 md:hidden text-white z-[60]">
            <span class="sr-only">Menu</span>
            <svg class="w-6 h-6 transition-transform duration-300" :class="{ 'rotate-90': isMenuOpen }" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    :d="isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'" />
            </svg>
        </button>

        <nav
            class="hidden md:flex transition-all duration-300 ease-in-out mt-8 bg-black/80 py-4 px-6 rounded-lg h-16 nav-emphasis">
            <div class="flex items-center space-x-6">
                <div class="flex space-x-6 text-sm text-gray-400">
                    <NuxtLink v-for="link in links" :key="link" :to="link.toLowerCase().replace(' ', '-')"
                        class="nav-link relative py-2 transition-all duration-300 ease-in-out whitespace-nowrap cursor-pointer">
                        {{ link }}
                        <span class="link-underline"></span>
                    </NuxtLink>
                </div>
                <NuxtLink to="/work"
                    class="bg-gradient-to-r from-[#E70D01] via-[#FF5400] to-[#F77D05] p-[2px] rounded-full cursor-pointer">
                    <span
                        class="block px-4 py-2 text-white text-sm rounded-full hover:bg-black transition-all duration-300">
                        Pricing
                    </span>
                </NuxtLink>
            </div>
        </nav>

        <!-- Mobile Menu -->
        <div class="fixed left-0 right-0 top-0 z-40 md:hidden transform transition-transform duration-300 ease-in-out"
            :class="isMenuOpen ? 'translate-y-0' : '-translate-y-full'">
            <div class="bg-black bg-opacity-95 border-b border-gray-800 shadow-lg">
                <div class="h-20"></div>
                <div class="px-6 py-4">
                    <div class="flex flex-col space-y-4">
                        <NuxtLink v-for="link in links" :key="link" :to="link.toLowerCase().replace(' ', '-')"
                            class="text-gray-400 hover:text-white py-2 transition-colors duration-200 cursor-pointer">
                            {{ link }}
                        </NuxtLink>
                        <NuxtLink to="/about"
                            class="text-gray-400 hover:text-white py-2 transition-colors duration-200 cursor-pointer">
                            The Team
                        </NuxtLink>
                        <NuxtLink to="/contact"
                            class="text-[#E70D01] hover:text-[#FF5400] py-2 transition-colors duration-200 cursor-pointer">
                            Contact Us
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)
const links = ['Work', 'About']

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
    if (isMenuOpen.value) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = ''
    }
}

onUnmounted(() => {
    document.body.style.overflow = ''
})
</script>

<style scoped>
.nav-link {
    position: relative;
    overflow: hidden;
}

.link-underline {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, #E70D01, #FF5400, #F77D05);
    transform: translateX(-100%);
    transition: transform 0.3s ease;
}

.nav-link:hover .link-underline {
    transform: translateX(0);
}

.nav-link:hover {
    color: #ffffff;
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
}

.nav-emphasis {
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow:
        0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06),
        0 0 20px rgba(0, 0, 0, 0.3);
    /* Added deeper shadow */
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    z-index: 50;
    position: relative;
}

.nav-emphasis::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #E70D01, #FF5400, #F77D05);
    z-index: -1;
    filter: blur(10px);
    opacity: 0.1;
    /* Reduced opacity for subtlety */
    border-radius: inherit;
    pointer-events: none;
}

button svg {
    transition: transform 0.2s ease;
}

button:hover svg {
    transform: scale(1.1);
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>