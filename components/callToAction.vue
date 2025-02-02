<script setup lang="ts">
defineProps({
  isScrolled: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div
    class="opacity-0 animate-fade-up animation-delay-600 text-white text-sm md:text-md lg:text-md text-center lg:text-left px-4 sm:px-8 md:px-16 lg:px-40"
    :class="{ 'fade-out': isScrolled }" style="transition: all 0.5s ease-out">
    Tailored solutions that make your brand grow. Helping businesses of all sizes reach their full online potential.
  </div>
</template>

<style scoped>
.animation-delay-600 {
  animation-delay: 600ms;
}

.opacity-0 {
  opacity: 0;
}

.animate-fade-up {
  animation-fill-mode: forwards;
}

.fade-out {
  opacity: 0 !important;
  transform: translateY(-20px);
  pointer-events: none;
}
</style>
