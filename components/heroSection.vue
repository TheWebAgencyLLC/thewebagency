<script setup lang="ts">
const elements = ['subtitle', 'title', 'cta']
</script>

<template>
  <div class="">
    <div class="flex flex-col items-center text-sm justify-center mb-8 2xl:mb-6">
      <span
        class="opacity-0 animate-fade-up animation-delay-0 text-md 2xl:text-lg text-gray-300 bg-black/40 p-2 px-6 border border-gray-800 shadow-inner backdrop-blur-sm rounded-full xl:mb-0 mb-2 tracking-wide">
        All your web needs, in one place
      </span>
    </div>

    <div class="text-white text-5xl tracking-tighter opacity-0 animate-fade-up animation-delay-200">
      &lt;Modern Websites <span class="text-[#E70D01]">Built</span> <span class="text-[#FF5400]">To</span> <span
        class="text-[#F77D05]">Grow Your Business/&gt;</span>
    </div>
  </div>

  <div
    class="flex justify-center items-center text-white gap-8 text-xl font-light opacity-0 animate-fade-up animation-delay-400">
    <div class="flex space-x-4">
      <NuxtLink to="/booking"
        class="bg-gradient-to-r from-[#E70D01] via-[#FF5400] to-[#F77D05] p-[2px] rounded-full cursor-pointer">
        <span class="block px-4 py-2 text-white text-sm rounded-full hover:bg-black transition-all duration-300">
          Book a call →
        </span>
      </NuxtLink>
    </div>
  </div>

  <div class="flex justify-center items-center gap-8 mt-8 opacity-0 animate-fade-up animation-delay-400">
    <div class="flex items-center gap-2">
      <div class="bg-[#E70D01]/20 p-1.5 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-[#E70D01]" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <span class="text-gray-400 text-sm">100% Custom Design</span>
    </div>

    <div class="flex items-center gap-2">
      <div class="bg-[#F77D05]/20 p-1.5 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-[#F77D05]" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <span class="text-gray-400 text-sm">24/7 Priority Support</span>
    </div>
  </div>
</template>

<style scoped>
.animation-delay-0 {
  animation-delay: 0ms;
}

.animation-delay-200 {
  animation-delay: 200ms;
}

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
