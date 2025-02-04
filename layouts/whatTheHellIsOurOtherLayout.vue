<script setup lang="ts">

</script>

<template>
  <LayoutAppHeader/>
  <div class="bg-black w-screen h-screen">
  <DotPattern
      class="absolute inset-0 size-full fill-white/20 [mask-image:radial-gradient(white,transparent_85%)] pointer-events-none blur-[1px]" />
  <slot/>
</div>
</template>

<style scoped>

</style>
