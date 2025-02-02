<script setup lang="ts">
const elements = ['subtitle', 'title', 'cta']
</script>

<template>
  <div class="relative">
    <div class="hidden lg:block">
      <div class="floating-icon absolute left-24 -top-12 z-10">
        <div class="p-4 bg-black/40 backdrop-blur-sm rounded-xl border border-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-[#E70D01]" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2">
            <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
          </svg>
        </div>
      </div>

      <div class="floating-icon absolute left-4 top-80 z-10">
        <div class="p-4 bg-black/40 backdrop-blur-sm rounded-xl border border-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-[#FF5400]" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2">
            <path d="M18 20V10M12 20V4M6 20v-6" />
          </svg>
        </div>
      </div>

      <div class="floating-icon absolute right-80 -bottom-80 animation-delay-1000 z-10">
        <div class="p-4 bg-black/40 backdrop-blur-sm rounded-xl border border-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-[#FF5400]" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2">
            <rect x="2" y="3" width="14" height="18" rx="2" />
            <rect x="16" y="8" width="6" height="13" rx="2" />
          </svg>
        </div>
      </div>

      <div class="floating-icon absolute right-32 -top-20 animation-delay-500 z-10">
        <div class="p-4 bg-black/40 backdrop-blur-sm rounded-xl border border-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-[#FF5400]" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2">
            <path d="M12 19l7-7 3 3-7 7-3-3z" />
            <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
            <path d="M2 2l7.586 7.586" />
            <circle cx="11" cy="11" r="2" />
          </svg>
        </div>
      </div>

      <div class="floating-icon absolute right-0 -bottom-32 animation-delay-1000 z-10">
        <div class="p-4 bg-black/40 backdrop-blur-sm rounded-xl border border-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-[#F77D05]" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-center text-sm justify-center mb-6 md:mb-8">
      <span
        class="opacity-0 animate-fade-up animation-delay-0 text-xs md:text-md lg:text-lg text-gray-300 bg-black/40 p-2 px-4 md:px-6 border border-gray-800 shadow-inner backdrop-blur-sm rounded-full xl:mb-0 mb-2 tracking-wide">
        All your web needs, in one place
      </span>
    </div>

    <div
      class="text-white text-3xl md:text-4xl lg:text-5xl tracking-tighter opacity-0 animate-fade-up animation-delay-200 text-center px-4 md:px-0">
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

  <div
    class="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mt-8 opacity-0 animate-fade-up animation-delay-400">
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
@keyframes float {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-20px);
  }

  100% {
    transform: translateY(0px);
  }
}

.floating-icon {
  animation: float 6s ease-in-out infinite;
}

.animation-delay-500 {
  animation-delay: 500ms;
}

.animation-delay-1000 {
  animation-delay: 1000ms;
}

/* Optional: Add slight rotation */
@keyframes slight-rotate {
  0% {
    transform: rotate(-2deg);
  }

  50% {
    transform: rotate(2deg);
  }

  100% {
    transform: rotate(-2deg);
  }
}

.floating-icon:hover {
  animation: slight-rotate 3s ease-in-out infinite;
}

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
