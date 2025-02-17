<template>
    <div class="relative w-full h-px my-8 md:my-12">
        <!-- Main gradient line -->
        <div class="absolute inset-0 bg-gradient-to-r from-[#E70D01]/30 via-[#FF5400]/30 to-[#F77D05]/30"></div>
        <!-- Subtle glow effect -->
        <div class="absolute inset-0 bg-gradient-to-r from-[#E70D01]/10 via-[#FF5400]/10 to-[#F77D05]/10 blur-sm"></div>
        <!-- Terminal marker -->
        <div
            class="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-black text-[#F77D05] text-xs font-mono">
            ›_
        </div>
    </div>
</template>

<script setup>
const gradientColors = ['#E70D01', '#FF5400', '#F77D05']
</script>