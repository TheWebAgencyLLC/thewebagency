<template>
  <footer class="relative py-16 overflow-hidden">
      <div class="absolute inset-0 z-0">
        <div class="absolute top-0 left-1/2 w-[1200px] h-[1200px] -translate-x-1/2 rounded-full 
           bg-gradient-to-r from-[#E70D01]/20 via-[#FF5400]/15 to-[#F77D05]/15
           blur-[150px] opacity-70">
        </div>
      </div>

      <div class="relative z-10 max-w-7xl mx-auto px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <img src="/public/images/TWALogo-Photoroom.png" alt="The Web Agency" class="w-16 h-16">
              <span class="text-white font-mono">TheWebAgency</span>
            </div>

            <div class="flex gap-4 md:pl-2">
              <a href="https://www.linkedin.com/company/thewebagencyllc/" target="_blank"
                class="p-2 mt-[1px] bg-black/40 backdrop-blur-sm rounded-lg border border-gray-800/50 hover:-translate-y-1 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#F77D05]" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
              <a href="mailto:thewebagencydev@gmail.com"
                class="flex items-center gap-3 px-6 py-3 bg-black/40 backdrop-blur-sm rounded-full border border-gray-800/50 text-gray-300 hover:-translate-y-1 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#FF5400]" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                thewebagencydev@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 pt-8 border-t border-gray-800/50 flex justify-end mr-32">
        <NuxtLink to="/privacy" class="text-white text-sm font-mono cursor-pointer z-10">Privacy Policy</NuxtLink>
      </div>
    </footer>
</template>

<script lang="ts" setup>

</script>

<style>

</style>