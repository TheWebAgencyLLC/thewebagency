<template>
    <div class="bg-black">
        <AppHeader />

        <div class="relative min-h-screen">
            <div
                class="absolute -top-8 left-1/2 size-48 md:size-72 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#E70D01]/20 via-[#FF5400]/20 to-[#F77D05]/20 blur-[80px] md:blur-[120px] lg:top-[20rem] lg:size-[26rem] lg:blur-[200px] z-0">
            </div>

            <DotPattern
                class="absolute inset-0 size-full fill-white/20 [mask-image:radial-gradient(white,transparent_85%)] pointer-events-none" />

            <div class="relative flex flex-col items-center min-h-[90vh] p-4 space-y-6 md:space-y-8 pt-24 md:pt-48 ">
                <div class="flex flex-col md:flex-row items-center justify-between px-8">
                    <!-- Text Section -->
                    <div class="md:w-1/2 text-white text-center md:text-left">
                        <h1 class="text-4xl md:text-6xl leading-tight">
                            We Help Businesses of All Sizes Grow Online
                        </h1>
                        <h2 class="text-lg md:text-2xl mt-4 text-gray-300">
                            Investing in Ourselves to Drive Your Success
                        </h2>
                    </div>

                    <!-- Image Section -->
                    <div class="md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
                        <img class="w-64 md:w-96 rounded-xl shadow-lg"
                            src="/public/images/visualelectric-1739818349057.png" alt="Business Growth">
                    </div>
                </div>

            </div>
        </div>

        <!-- About Us Section / Cards -->
        <div>
            <div>
                <h3>01</h3>
                <h4></h4>
                <p></p>
            </div>
            <div>
                <h3>02</h3>
                <h4></h4>
                <p></p>
            </div>
            <div>
                <h3>03</h3>
                <h4></h4>
                <p></p>
            </div>
            <div>
                <h3>04</h3>
                <h4></h4>
                <p></p>
            </div>
        </div>

        <!-- Inspiration  -->
        <div>
            <div>
                <h4>The Name</h4>
                <div>
                    <img src="" alt="">
                    <img src="" alt="">
                </div>
            </div>

            <div>
                <!-- SAMA Quote -->
                <quote>You can just do things</quote>
                <h4>The Vision</h4>
            </div>
        </div>

        <!-- Meet The Team Cards -->
        <div>
            <div>
                <div></div>
                <img src="" alt="">
            </div>

            <div>
                <div></div>
                <img src="" alt="">
            </div>
        </div>

        <!-- Contact Us Section -->
        <section>
            <div>
                <h3>Contact Us</h3>
                <p></p>

                <p></p>

                <p></p>
                <p></p>
                <p></p>
            </div>
            <form action=""></form>
        </section>
    </div>
</template>

<script>
import AppHeader from '~/components/layout/appHeader.vue'
</script>

<style>
* {
    font-family: "JetBrains Mono", serif;
    font-optical-sizing: auto;
    font-weight: 200;
    font-style: normal;
}
</style>