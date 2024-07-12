<template>
  <div class="flex items-center justify-center h-screen bg-gray-900">
    <div class="relative p-[3px] rounded-lg shadow-xl transition-shadow duration-300 ease-in-out">
      <div class="absolute inset-0 rounded-lg blur-sm ambient-gradient"></div>
      <div class="absolute inset-0 rounded-lg ambient-gradient"></div>
      <div class="relative z-10 pt-8 pl-8 pr-8 bg-gray-900 rounded-lg">
        <div class="flex flex-col items-center space-y-2 h-[600px] w-[600px]">
          <img src="/images/TWALogo.jpg" alt="">
          <span class="text-2xl text-gray-300 font-mono">The Web Agency</span>
          <h1 class="text-4xl font-bold font-mono text-white text-center">
            Coming Soon...
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComingSoon'
}
</script>

<style scoped>
.ambient-gradient {
  background: linear-gradient(90deg,
      #ff00ff,
      #00ff00,
      #00ffff,
      #ff0000,
      #ff00ff);
  background-size: 400% 400%;
  animation: ambientRotate 10s ease infinite;
}

@keyframes ambientRotate {
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