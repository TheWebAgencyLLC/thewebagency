<script setup lang="ts">

defineProps({
  isScrolled: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="relative block md:hidden mt-4">
    <div class="text-white mt-8 text-4xl md:text-4xl lg:text-5xl tracking-tighter text-center px-4 md:px-0">
      &lt;Modern Websites <span class="text-[#E70D01]">Built</span> <span class="text-[#FF5400]">To</span> <span
        class="text-[#F77D05]">Grow Your Business/&gt;</span>
    </div>
  </div>
  <div class="relative hidden md:block" :class="{ 'opacity-0 translate-y-[-50px]': isScrolled }"
    style="transition: opacity 0.5s ease-out, transform 0.5s ease-out">
    <div class="hidden lg:block">
      <!-- Floating icons with hover effects -->
      <div class="floating-icon absolute left-24 -top-12 z-10">
        <div class="icon-container">
          <div class="p-4 bg-black/40 backdrop-blur-sm rounded-xl border border-gray-800 transition-all duration-300
                      hover:scale-110 hover:rotate-12 hover:border-[#E70D01]/50 hover:shadow-lg hover:shadow-[#E70D01]/20
                      group">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8 text-[#E70D01] transition-transform duration-300 group-hover:rotate-[360deg]"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
            </svg>
          </div>
        </div>
      </div>

      <div class="floating-icon absolute left-4 top-80 z-10">
        <div class="icon-container">
          <div class="p-4 bg-black/40 backdrop-blur-sm rounded-xl border border-gray-800 transition-all duration-300
                      hover:scale-110 hover:-rotate-12 hover:border-[#FF5400]/50 hover:shadow-lg hover:shadow-[#FF5400]/20
                      group">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8 text-[#FF5400] transition-transform duration-300 group-hover:scale-y-150"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 20V10M12 20V4M6 20v-6" />
            </svg>
          </div>
        </div>
      </div>

      <div class="floating-icon absolute right-80 -bottom-80 animation-delay-1000 z-10">
        <div class="icon-container">
          <div class="p-4 bg-black/40 backdrop-blur-sm rounded-xl border border-gray-800 transition-all duration-300
                      hover:scale-110 hover:rotate-6 hover:border-[#FF5400]/50 hover:shadow-lg hover:shadow-[#FF5400]/20
                      group">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8 text-[#FF5400] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="3" width="14" height="18" rx="2" />
              <rect x="16" y="8" width="6" height="13" rx="2" />
            </svg>
          </div>
        </div>
      </div>

      <div class="floating-icon absolute right-32 -top-20 animation-delay-500 z-10">
        <div class="icon-container">
          <div class="p-4 bg-black/40 backdrop-blur-sm rounded-xl border border-gray-800 transition-all duration-300
                      hover:scale-110 hover:-rotate-12 hover:border-[#FF5400]/50 hover:shadow-lg hover:shadow-[#FF5400]/20
                      group">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8 text-[#FF5400] transition-transform duration-300 group-hover:rotate-[360deg]"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 19l7-7 3 3-7 7-3-3z" />
              <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
              <path d="M2 2l7.586 7.586" />
              <circle cx="11" cy="11" r="2" />
            </svg>
          </div>
        </div>
      </div>

      <div class="floating-icon absolute right-0 -bottom-32 animation-delay-1000 z-10">
        <div class="icon-container">
          <div class="p-4 bg-black/40 backdrop-blur-sm rounded-xl border border-gray-800 transition-all duration-300
                      hover:scale-110 hover:rotate-12 hover:border-[#F77D05]/50 hover:shadow-lg hover:shadow-[#F77D05]/20
                      group">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8 text-[#F77D05] transition-all duration-500 group-hover:scale-110 group-hover:animate-pulse"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Rest of the content remains the same -->
    <div
      class="text-white mt-8 text-3xl md:text-4xl lg:text-5xl tracking-tighter opacity-0 animate-fade-up animation-delay-200 text-center px-4 md:px-0">
      &lt;Modern Websites <span class="text-[#E70D01]">Built</span> <span class="text-[#FF5400]">To</span> <span
        class="text-[#F77D05]">Grow Your Business/&gt;</span>
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

.icon-container {
  transform-style: preserve-3d;
  perspective: 1000px;
}
</style>