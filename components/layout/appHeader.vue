<template>
    <div class="fixed top-0 flex justify-center w-full z-50 font-jetbrains">
        <!-- Logo container -->
        <NuxtLink class="absolute left-4 mt-4 h-24 w-24">
            <img src="/images/TWALogo-Photoroom.png" alt="The Web Agency Logo">
        </NuxtLink>

        <!-- Navigation container -->
        <nav class="transition-all duration-1000 ease-in-out mt-8" :class="[isScrolled
            ? 'bg-black bg-opacity-90 py-2 px-4 rounded-lg shadow-lg h-16 nav-emphasis'
            : 'bg-black py-4 px-6 rounded-lg h-16 nav-emphasis']">
            <div class="flex items-center justify-between transition-all duration-500 ease-in-out h-full">
                <!-- Links section that fades out on scroll -->
                <div class="flex space-x-6 text-sm text-gray-400 justify-center transition-all duration-500 ease-in-out"
                    :class="{ 'w-0 opacity-0': isScrolled, 'w-auto opacity-100': !isScrolled }">
                    <a v-for="link in links" :key="link" href="#"
                        class="nav-link relative py-2 transition-all duration-300 ease-in-out whitespace-nowrap">
                        {{ link }}
                        <span class="link-underline"></span>
                    </a>
                </div>

                <!-- CTA buttons -->
                <div class="flex items-center space-x-4">
                    <NuxtLink to="/portfolio"
                        class="bg-gradient-to-r from-[#E70D01] via-[#FF5400] to-[#F77D05] p-[2px] rounded-full overflow-hidden"
                        :class="{ 'translate-x-0 opacity-100 duration-1000': isScrolled, 'translate-x-full duration-300 ease-in-out opacity-0': !isScrolled }">
                        <span
                            class="block px-4 py-2 bg-black rounded-full text-white text-sm hover:bg-opacity-95 transition-all duration-300">
                            Portfolio
                        </span>
                    </NuxtLink>

                    <NuxtLink to="/contact"
                        class="bg-gradient-to-r from-[#E70D01] via-[#FF5400] to-[#F77D05] p-[2px] rounded-full">
                        <span
                            class="block px-4 py-2 text-white text-sm rounded-full hover:bg-black transition-all duration-300">
                            Contact Us
                        </span>
                    </NuxtLink>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const links = ['Work', 'Services', 'About']

const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
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
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    backdrop-filter: blur(5px);
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
    opacity: 0.2;
    border-radius: inherit;
    pointer-events: none;
}
</style>