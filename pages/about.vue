<template>
    <div class="bg-black min-h-screen relative">
      <DotPattern
        class="absolute inset-0 size-full fill-white/20 [mask-image:radial-gradient(white,transparent_85%)] pointer-events-none" />
      
      <section class="container mx-auto px-4 pt-32 pb-6 md:pt-48 md:pb-12 relative hero-section">
        <div class="absolute inset-0 z-0 hidden md:block">
          <img src="/public/images/background4.png" alt="Hero background" class="w-full h-full object-cover opacity-40" />
        </div>
        
        <div class="max-w-7xl mx-auto relative z-10 hero-content">
          <div class="mb-2 text-sm font-mono text-gray-500">/02 ABOUT US</div>
          <h1 class="text-4xl md:text-5xl font-bold mb-16 text-white tracking-tighter">
            Why we exist and what we are aiming for
          </h1>
        </div>
      </section>
      
      <section class="container mx-auto px-4 py-6 relative">
        <div class="absolute -top-8 left-1/2 size-48 md:size-72 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#E70D01]/20 via-[#FF5400]/20 to-[#F77D05]/20 blur-[80px] md:blur-[120px] z-0"></div>
        <DotPattern
          class="absolute inset-0 size-full fill-white/20 [mask-image:radial-gradient(white,transparent_85%)] pointer-events-none" />
          
        <div class="mb-8 relative z-10">
          <div class="text-sm font-mono text-gray-500 mb-4 animate-fade-up">MISSION, VISION, PASSION, AND CAUSE</div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative z-10">
          <div class="group p-4 md:p-6 rounded-2xl border border-white bg-transparent animate-fade-up animation-delay-0 h-auto md:h-80 flex flex-col">
            <div class="text-sm font-mono text-gray-500 mb-2 md:mb-3">01</div>
            <h3 class="text-xl font-bold mb-2 md:mb-4 text-white font-mono">Our mission</h3>
            <p class="text-gray-400 md:mt-auto font-mono text-sm">
              Empowering founders and business owners to create meaningful impacts and drive positive innovations.
            </p>
          </div>
          
          <div class="group p-4 md:p-6 rounded-2xl border border-white bg-transparent animate-fade-up animation-delay-200 h-auto md:h-80 flex flex-col">
            <div class="text-sm font-mono text-gray-500 mb-2 md:mb-3">02</div>
            <h3 class="text-xl font-bold mb-2 md:mb-4 text-white font-mono">Our vision</h3>
            <p class="text-gray-400 md:mt-auto font-mono text-sm">
              Be the catalyst of meaningful impacts and positive innovations to preserve humanity.
            </p>
          </div>
          
          <div class="group p-4 md:p-6 rounded-2xl border border-white bg-transparent animate-fade-up animation-delay-400 h-auto md:h-80 flex flex-col">
            <div class="text-sm font-mono text-gray-500 mb-2 md:mb-3">03</div>
            <h3 class="text-xl font-bold mb-2 md:mb-4 text-white font-mono">Our passion</h3>
            <p class="text-gray-400 md:mt-auto font-mono text-sm">
              We are passionate about crafting useful solutions and helping others live better lives.
            </p>
          </div>
          
          <div class="group p-4 md:p-6 rounded-2xl border border-white bg-transparent animate-fade-up animation-delay-600 h-auto md:h-80 flex flex-col">
            <div class="text-sm font-mono text-gray-500 mb-2 md:mb-3">04</div>
            <h3 class="text-xl font-bold mb-2 md:mb-4 text-white font-mono">Our cause</h3>
            <p class="text-gray-400 md:mt-auto font-mono text-sm">
              We donate 10% of our revenue to support orphans, sandwich generations, and children with special needs to have a better life.
            </p>
          </div>
        </div>
      </section>
      
      <DividerLine />
      
      <section class="container mx-auto px-4 py-8 md:py-16 relative">  
        <div class="relative border border-white overflow-hidden rounded-2xl backdrop-blur-sm animate-fade-up">
          <div class="hidden md:block absolute top-0 bottom-0 right-0 w-1/2 bg-black/20"></div>
          <div class="hidden md:block absolute top-0 bottom-0 right-0 w-1/2 transform -skew-x-12 -translate-x-16 border-l border-white/30 bg-black/20"></div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 relative z-10">
            <!-- Inspiration for the Name -->
            <div class="p-6 md:p-8 lg:p-12 md:mr-8">
              <h3 class="text-xl font-bold mb-4 md:mb-6 text-white font-mono">Inspiration for The Web Agency Name</h3>
              <p class="text-gray-400 mb-4 font-mono text-sm">
                Our inspiration comes from companies like TheBrowserCompany and The Rug Company. We value simplicity and clarity in our identity, reflecting our approach to design and development.
              </p>
              <div class="flex space-x-3 mt-4 md:mt-6">
                <div class="text-sm font-medium text-white backdrop-blur-sm"><img class="w-10 h-10 md:w-12 md:h-12" src="/images/thebrowsercompany.jpg" alt="The Browser Company Logo"></div>
                <div class="bg-white text-sm font-medium text-white backdrop-blur-sm"><img class="w-10 h-10 md:w-12 md:h-12" src="/images/therugcompany.png" alt="The Rug Company Logo"></div>
              </div>
            </div>
            
            <!-- Horizontal divider for mobile only -->
            <div class="block md:hidden w-full h-px bg-white/30 my-4 mx-6"></div>
            
            <!-- Vision Quote -->
            <div class="p-6 md:p-8 lg:p-12 relative">
              <h3 class="text-xl font-bold mb-4 md:mb-6 text-white font-mono">The Vision</h3>
              <blockquote class="text-2xl md:text-3xl italic mb-4 md:mb-6 text-gradient">
                "You can just do things"
              </blockquote>
              <div class="text-left">
                <p class="font-medium text-white">— Sam Altman</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <DividerLine />
      
      <section class="container mx-auto px-4 py-12 md:py-16 relative">
        <DotPattern
          class="absolute inset-0 size-full fill-white/20 [mask-image:radial-gradient(white,transparent_85%)] pointer-events-none" />
          
        <div class="relative z-10">
          <div class="flex items-center gap-3 mb-8">
            <div class="relative">
              <DotPattern
                class="absolute inset-0 size-full fill-white/20 [mask-image:radial-gradient(white,transparent_85%)] pointer-events-none" />
              <div class="w-8 h-8 rounded-full border border-gray-600"></div>
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#F77D05]"></div>
            </div>
            <h2 class="text-xl sm:text-2xl font-mono text-white">Meet the Team</h2>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div class="group p-6 rounded-2xl border border-white bg-transparent backdrop-blur-sm animate-fade-up animation-delay-0">
              <img class="w-32 h-32 mb-6 rounded-full mx-auto md:mx-0" src="/images/profile1.png" alt="Founder Profile Picture">
              <h3 class="text-xl font-bold text-white font-mono">Sneh Mehta</h3>
              <p class="text-gray-400 font-mono text-sm">Founder, Frontend Developer</p>
            </div>
            
            <div class="group p-6 rounded-2xl border border-white bg-transparent backdrop-blur-sm animate-fade-up animation-delay-200">
                <img class="w-32 h-32 mb-6 rounded-full mx-auto md:mx-0" src="/images/profile2.png" alt="Co-Founder Profile Picture">
              <h3 class="text-xl font-bold text-white font-mono">Rafael Santana</h3>
              <p class="text-gray-400 font-mono text-sm">Co-Founder, Backend Developer</p>
            </div>
          </div>
        </div>
      </section>
      
      <DividerLine />
      
      <div class="container mx-auto px-4 mb-16">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div class="lg:col-span-4 order-2 lg:order-1">
            <div class="bg-black/50 rounded-xl p-8 h-full backdrop-blur-sm border border-gray-800">
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
                
                <div class="flex items-start">
                  <div class="bg-gradient-to-r from-[#E70D01] to-[#FF5400] rounded-full p-3 mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-white text-lg font-semibold">Social Media</h3>
                    <div class="flex space-x-4 mt-2">
                      <a href="#" class="text-gray-400 hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-[#F77D05]" fill="none" viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path
                            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="lg:col-span-8 order-1 lg:order-2">
            <div class="bg-black/40 rounded-xl border border-gray-800 backdrop-blur-sm overflow-hidden">
              <div class="p-1 bg-gradient-to-r from-[#E70D01] via-[#FF5400] to-[#F77D05]">
                <div class="bg-black/95 p-8">
                  <h2 class="text-2xl font-semibold mb-6 text-white">Send Us a Message</h2>
                  
                  <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="form-name" value="contact" />

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
      
      <AppFooter />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import AppHeader from '~/components/layout/appHeader.vue'
  import AppFooter from '~/components/layout/appFooter.vue'
  import DotPattern from '~/components/dotPattern.vue'
  import DividerLine from '~/components/dividerLine.vue'
  
  const isScrolled = ref(false)
  
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 100
  }
  
  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
  </script>
  
  <style scoped>
  .text-gradient {
    background: linear-gradient(to right, #E70D01, #FF5400, #F77D05);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hero-content {
  opacity: 0;
  transform: translateY(20px);
  animation: heroFadeIn 0.8s ease-out forwards;
}

@keyframes heroFadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
  
  .fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }
  
  .fade-in-visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  .opacity-0 {
    opacity: 0;
  }
  
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

  .section-fade-in {
  opacity: 0;
  animation: sectionFade 1s ease-out forwards;
}

@keyframes sectionFade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
  
.group {
  position: relative;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.group:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px -5px rgba(247, 125, 5, 0.1);
}
  
  .group::before {
    content: '';
    position: absolute;
    inset: -1px;
    background: linear-gradient(to right, rgba(231, 13, 1, 0.2), rgba(255, 84, 0, 0.2), rgba(247, 125, 5, 0.2));
    border-radius: inherit;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .group:hover::before {
    opacity: 1;
  }
  </style>