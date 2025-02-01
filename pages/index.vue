<template>
  <div>
    <AppHeader />
    <div
      class="absolute -top-8 left-1/2 size-48 md:size-72 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#E70D01]/20 via-[#FF5400]/20 to-[#F77D05]/20 blur-[80px] md:blur-[120px] lg:top-[20rem] lg:size-[26rem] lg:blur-[200px]">
    </div>

    <div class="flex flex-col items-center min-h-screen bg-black p-4 space-y-6 md:space-y-8 pt-24 md:pt-48">
      <HeroSection />
      <CallToAction />
      <SocialProofLogos class="opacity-0 animate-fade-up animation-delay-2000" />
      <DotPattern
        class="absolute inset-0 size-full fill-white/20 [mask-image:radial-gradient(white,transparent_85%)]" />
    </div>

    <div class="bg-black text-white">
      <section class="min-h-screen flex items-center justify-center p-8">
      </section>
    </div>
  </div>
</template>

<script setup>
import AppHeader from '~/components/layout/appHeader.vue'
</script>

<style scoped>
* {
  font-family: "JetBrains Mono", serif;
  font-optical-sizing: auto;
  font-weight: 200;
  font-style: normal;
}

.opacity-0 {
  opacity: 0;
}

.animate-fade-up {
  animation-fill-mode: forwards;
}

.animation-delay-2000 {
  animation-delay: 2000ms;
}
</style>
