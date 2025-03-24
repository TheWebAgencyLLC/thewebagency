<template>
  <div class="bg-black min-h-screen relative">
    <DotPattern
        class="absolute inset-0 size-full fill-white/20 [mask-image:radial-gradient(white,transparent_85%)] pointer-events-none" />
    <div class="pt-24 md:pt-32">
      <div class="relative overflow-hidden mb-12">
        <div class="absolute -top-8 left-1/2 size-48 md:size-72 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#E70D01]/20 via-[#FF5400]/20 to-[#F77D05]/20 blur-[80px] md:blur-[120px] z-0"></div>
        <div class="container mx-auto px-4 relative z-10">
          <div class="max-w-7xl mx-auto relative z-10">
            <div class="mb-2 text-sm font-mono text-gray-500 animate-fade-up">/03 CONTACT US</div>
            <h1 class="text-3xl md:text-4xl font-bold mt-8 mb-8 md:mb-16 text-white tracking-tighter animate-fade-up animation-delay-200">
              Have a project in mind or questions about our services? We're here to transform your digital vision into reality.
            </h1>
          </div>
        </div>
      </div>

      <div class="container mx-auto px-4 mb-16">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <!-- Contact Info Card -->
          <div class="lg:col-span-4 order-2 lg:order-1">
            <div class="bg-black/50 rounded-xl p-8 h-full backdrop-blur-sm border border-gray-800">
              <DotPattern
        class="absolute inset-0 size-full fill-white/20 [mask-image:radial-gradient(white,transparent_85%)] pointer-events-none" />
              <h2 class="text-2xl font-semibold mb-6 bg-gradient-to-r from-[#E70D01] to-[#FF5400] bg-clip-text text-transparent">Connect With Us</h2>
              
              <div class="space-y-6">
                <div class="flex items-start">
                  <div class="bg-gradient-to-r from-[#E70D01] to-[#FF5400] rounded-full p-3 mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-white text-lg font-semibold">Email Us</h3>
                    <p class="text-gray-400">thewebagencydev@gmail.com</p>
                    <p class="text-gray-500 text-sm mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="bg-gradient-to-r from-[#E70D01] to-[#FF5400] rounded-full p-3 mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-white text-lg font-semibold">Working Hours</h3>
                    <p class="text-gray-400">Monday - Friday</p>
                    <p class="text-gray-400">8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Contact Form Card -->
          <div class="lg:col-span-8 order-1 lg:order-2">
            <div class="bg-black/40 rounded-xl border border-gray-800 backdrop-blur-sm overflow-hidden">
              <div class="p-1 bg-gradient-to-r from-[#E70D01] via-[#FF5400] to-[#F77D05]">
                <DotPattern
                  class="absolute inset-0 size-full fill-white/20 [mask-image:radial-gradient(white,transparent_85%)] pointer-events-none" />
                <div class="bg-black/95 p-8 rounded-xl">
                  <h2 class="text-2xl font-semibold mb-6 text-white">Send Us a Message</h2>
                  
                  <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                    <!-- Hidden input for Netlify to identify the form -->
                    <input type="hidden" name="form-name" value="contact" />

                    <!-- Honeypot field (this field is hidden and helps prevent spam) -->
                    <p class="hidden">
                      <label>
                        Don't fill this out if you're human:
                        <input name="bot-field" />
                      </label>
                    </p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label for="fullName" class="block text-gray-400 mb-2 text-sm">Full Name</label>
                        <div class="relative">
                          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg class="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <input
                            id="fullName"
                            name="fullName"
                            type="text"
                            required
                            class="pl-10 w-full h-12 bg-black/70 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#FF5400] focus:border-transparent transition-all"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label for="email" class="block text-gray-400 mb-2 text-sm">Email Address</label>
                        <div class="relative">
                          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg class="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            class="pl-10 w-full h-12 bg-black/70 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#FF5400] focus:border-transparent transition-all"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div class="mb-6">
                      <label for="subject" class="block text-gray-400 mb-2 text-sm">Subject</label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        class="w-full h-12 bg-black/70 border border-gray-700 rounded-lg text-white px-4 focus:outline-none focus:ring-2 focus:ring-[#FF5400] focus:border-transparent transition-all"
                      />
                    </div>
                    
                    <div class="mb-6">
                      <label for="message" class="block text-gray-400 mb-2 text-sm">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows="6"
                        class="w-full bg-black/70 border border-gray-700 rounded-lg text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF5400] focus:border-transparent transition-all"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      class="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-[#E70D01] via-[#FF5400] to-[#F77D05] text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#FF5400]/30 focus:outline-none focus:ring-2 focus:ring-[#FF5400] focus:ring-offset-2 focus:ring-offset-black"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="container mx-auto px-4 mb-20">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#E70D01] via-[#FF5400] to-[#F77D05] bg-clip-text text-transparent">Frequently Asked Questions</h2>
          <p class="text-gray-400 max-w-2xl mx-auto">Find quick answers to common questions about our services.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div class="bg-black/30 border border-gray-800 rounded-lg p-6 hover:border-[#FF5400]/50 transition-all">
            <h3 class="text-xl font-semibold text-white mb-3">What services do you offer?</h3>
            <p class="text-gray-400">We specialize in web design, development, and custom software solutions tailored to your business needs.</p>
          </div>
          
          <div class="bg-black/30 border border-gray-800 rounded-lg p-6 hover:border-[#FF5400]/50 transition-all">
            <h3 class="text-xl font-semibold text-white mb-3">How much does a website cost?</h3>
            <p class="text-gray-400">Our pricing varies based on project scope, requirements as well as delivery timing. Contact us for a personalized quote.</p>
          </div>
          
          <div class="bg-black/30 border border-gray-800 rounded-lg p-6 hover:border-[#FF5400]/50 transition-all">
            <h3 class="text-xl font-semibold text-white mb-3">How long does it take to build a website?</h3>
            <p class="text-gray-400">Timeline depends on complexity. Simple sites can be done in 2-3 weeks, while larger projects may take 1-2 months.</p>
          </div>
          
          <div class="bg-black/30 border border-gray-800 rounded-lg p-6 hover:border-[#FF5400]/50 transition-all">
            <h3 class="text-xl font-semibold text-white mb-3">Do you offer website maintenance?</h3>
            <p class="text-gray-400">We encourage clients to keep improving upon their website as well as give suggestions on what aspects of the website can be iterated upon.</p>
          </div>
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script setup>
import AppFooter from '~/components/layout/appFooter.vue';

definePageMeta({
  layout: "default",
});
</script>

<style>
  .animate-fade-up {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeUp 0.8s ease-out forwards;
  }
  
  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>