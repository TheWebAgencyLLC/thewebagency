<template>
    <div class="flex items-center justify-center min-h-screen bg-black p-4">
        <div class="relative p-[3px] rounded-lg shadow-xl transition-shadow duration-300 ease-in-out w-full max-w-md">
            <div class="absolute inset-0 rounded-lg blur-sm ambient-gradient"></div>
            <div class="absolute inset-0 rounded-lg ambient-gradient"></div>
            <div class="relative z-10 p-6 bg-black rounded-lg">
                <div class="flex flex-col items-center space-y-4">
                    <img src="/images/TWALogo.jpg" alt="The Web Agency Logo" class="w-full max-w-[200px] h-auto">
                    <span class="text-xl sm:text-2xl text-gray-300 font-mono">The Web Agency</span>
                    <h1 class="text-3xl sm:text-4xl font-bold font-mono text-white text-center">
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