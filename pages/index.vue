<template>
  <div class="bg-black">
    <AppHeader />

    <div class="relative min-h-screen">
      <div
        class="absolute -top-8 left-1/2 size-48 md:size-72 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#E70D01]/20 via-[#FF5400]/20 to-[#F77D05]/20 blur-[80px] md:blur-[120px] lg:top-[20rem] lg:size-[26rem] lg:blur-[200px] z-0"
      ></div>

      <DotPattern
        class="absolute inset-0 size-full fill-white/20 [mask-image:radial-gradient(white,transparent_85%)] pointer-events-none"
      />

      <div class="relative flex flex-col items-center min-h-[90vh] p-4 space-y-6 md:space-y-8 pt-24 md:pt-48">
        <HeroSection class="transition-all duration-500" />
        <CallToAction />
        <CtaFeatures />

        <div
          class="flex flex-col items-center text-sm justify-center mb-6 md:hidden animate-fade-up"
        >
          <span
            class="opacity-0 animate-fade-up animation-delay-0 text-xs text-white p-2 px-4 border border-gray-800 shadow-inner backdrop-blur-sm rounded-full mb-2 tracking-wide"
          >
            All your business website needs, in one place
          </span>
        </div>
      </div>
    </div>

    <div class="relative -mt-48 md:mt-8">
      <DotPattern
        class="absolute inset-0 size-full fill-white/20 [mask-image:radial-gradient(white,transparent_85%)] pointer-events-none" />
      <DividerLine />
      <SeoSection />
    </div>

    <DividerLine />

    <section class="relative py-12">
      <DotPattern
        class="absolute inset-0 size-full fill-white/20 [mask-image:radial-gradient(white,transparent_85%)] pointer-events-none"
      />
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2
            class="text-4xl lg:text-5xl text-white tracking-tighter mb-4 font-mono"
          >
            Not Just Your Partners,<br />Your Success Team
          </h2>
          <p
            class="text-gray-300 max-w-2xl mx-auto leading-relaxed font-mono text-sm"
          >
            When you win, we win. We dive deep into your vision, pushing the
            boundaries of modern design and development. Every iteration, every
            solution, every breakthrough is fueled by our investment in your
            success.
          </p>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="(card, index) in capabilities"
            :key="index"
            class="group p-4 rounded-2xl border border-white bg-transparent"
            :class="`animate-fade-up animation-delay-${index * 200}`"
          >
            <div
              class="relative rounded-lg w-fit"
              style="padding: 8px; margin-bottom: 12px"
              :class="`text-[${gradientColors[index % 3]}]`"
            >
              <div v-html="card.icon" class="w-6 h-6"></div>
            </div>

            <h3 class="text-sm text-white font-medium mb-2 font-mono">
              {{ card.title }}
            </h3>
            <p class="text-xs text-gray-400 leading-relaxed font-mono">
              {{ card.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <DividerLine />

    <SocialProofLogos />
    <section ref="aiSectionRef" class="relative py-12 fade-in">
      <DotPattern
        class="absolute inset-0 size-full fill-white/20 [mask-image:radial-gradient(white,transparent_85%)] pointer-events-none"
      />
      <div class="max-w-3xl mx-auto px-4 text-center">
        <p
          class="text-xl md:text-2xl leading-relaxed text-gray-300 max-w-[90%] md:max-w-full mx-auto"
        >
          <span class="text-gradient">AI isn't just a buzzword here</span
          >&mdash;it's your competitive advantage. By integrating
          <span class="text-gradient">artificial intelligence</span> into our
          development workflow, we dramatically
          <span class="text-gradient">reduce timelines</span> while elevating
          quality. From rapid prototyping to intelligent testing, we're bringing
          tomorrow's web development capabilities to your project today.
        </p>
      </div>
    </section>

    <DividerLine />

    <section class="relative py-12">
      <DotPattern
        class="absolute inset-0 size-full fill-white/20 [mask-image:radial-gradient(white,transparent_85%)] pointer-events-none"
      />
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-12 relative">
          <div class="flex items-center gap-3">
            <div class="relative">
              <DotPattern
                class="absolute inset-0 size-full fill-white/20 [mask-image:radial-gradient(white,transparent_85%)] pointer-events-none"
              />
              <div class="w-8 h-8 rounded-full border border-gray-600"></div>
              <div
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#F77D05]"
              ></div>
            </div>
            <h2 class="text-xl sm:text-2xl font-mono text-white">Solutions</h2>
          </div>
          <p class="text-gray-400 mt-4 max-w-2xl text-sm sm:text-base">
            Our clients trust us to turn their boldest ideas into reality. Every
            project is an opportunity to exceed expectations and push
            boundaries.
          </p>
        </div>

        <div class="relative">
          <DotPattern
            class="absolute inset-0 size-full fill-white/20 [mask-image:radial-gradient(white,transparent_85%)] pointer-events-none"
          />
          <div class="px-4 pb-8">
            <div class="grid md:hidden gap-4">
              <div
                class="rounded-3xl p-6 border border-white backdrop-blur-sm min-h-[200px] flex flex-col"
              >
                <h3 class="text-xl font-bold mb-2 text-white">
                  Landing Page Creation
                </h3>
                <p class="text-gray-300 mb-2">
                  Converting visitors with compelling visuals and clear calls to
                  action.
                </p>
                <div class="mt-auto h-32 overflow-hidden">
                  <img
                    src="/images/landing.png"
                    alt="Landing Page Creation"
                    class="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div
                class="rounded-3xl p-6 border border-white backdrop-blur-sm min-h-[200px] flex flex-col"
              >
                <h3 class="text-xl font-bold mb-2 text-white">
                  From Scratch Design & Branding
                </h3>
                <p class="text-white mb-2">
                  Unique designs that establish your brand identity and stand
                  out.
                </p>
                <div class="mt-auto h-32 overflow-hidden">
                  <img
                    src="/images/design.png"
                    alt="Design and Branding"
                    class="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div
                class="rounded-3xl p-6 border border-white backdrop-blur-sm min-h-[180px] flex flex-col"
              >
                <h3 class="text-xl font-bold mb-2 text-white">
                  Custom Solutions
                </h3>
                <p class="text-white mb-2">
                  Driving down third-party costs while improving functionality.
                </p>
                <div class="mt-auto h-32 overflow-hidden">
                  <img
                    src="/images/custom-software.png"
                    alt="Custom Solutions"
                    class="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div
                class="rounded-3xl p-6 border border-white backdrop-blur-sm min-h-[180px] flex flex-col"
              >
                <h3 class="text-xl font-bold mb-2 text-white">
                  Payment Provider Solutions
                </h3>
                <p class="text-white mb-2">
                  Seamless integration with popular payment gateways.
                </p>
                <div class="mt-auto h-32 overflow-hidden">
                  <img
                    src="/images/payment-solutions.png"
                    alt="Payment Solutions"
                    class="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div
                class="rounded-3xl p-6 border border-white backdrop-blur-sm min-h-[250px] flex flex-col"
              >
                <h3 class="text-xl font-bold mb-2 text-white">
                  Custom Business Software
                </h3>
                <p class="text-white mb-2">
                  Dashboards and applications that streamline operations and
                  drive growth.
                </p>
                <div class="mt-auto h-40 overflow-hidden">
                  <img
                    src="/images/custom-software.png"
                    alt="Custom Business Software"
                    class="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div
                class="rounded-3xl p-6 border border-white backdrop-blur-sm min-h-[150px] flex flex-col"
              >
                <h3 class="text-xl font-bold mb-2 text-white">Copywriting</h3>
                <p class="text-white mb-2">
                  Persuasive content that communicates your value.
                </p>
                <div class="mt-auto h-24 overflow-hidden">
                  <img
                    src="/images/copywriting.png"
                    alt="Copywriting"
                    class="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div
                class="rounded-3xl p-6 border border-white backdrop-blur-sm min-h-[150px] flex flex-col"
              >
                <h3 class="text-xl font-bold mb-2 text-white">
                  Analytics Monitoring
                </h3>
                <p class="text-white mb-2">
                  Data-driven insights to guide strategic decisions.
                </p>
                <div class="mt-auto h-24 overflow-hidden">
                  <img
                    src="/images/analytics.png"
                    alt="Analytics"
                    class="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div
                class="rounded-3xl p-6 border border-white backdrop-blur-sm min-h-[150px] flex flex-col"
              >
                <h3 class="text-xl font-bold mb-2 text-white">
                  Maintenance & SEO Audits
                </h3>
                <p class="text-white mb-2">
                  Year-round support for security and search ranking.
                </p>
                <div class="mt-auto h-24 overflow-hidden">
                  <img
                    src="/images/seo.png"
                    alt="SEO"
                    class="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            <div class="hidden md:grid grid-cols-12 gap-4">
              <div
                class="col-span-6 row-span-2 rounded-3xl p-6 border border-white backdrop-blur-sm flex flex-col"
              >
                <div class="mb-2">
                  <h3 class="text-xl font-bold mb-2 text-white">
                    Landing Page Creation
                  </h3>
                  <p class="text-gray-300">
                    Converting visitors with compelling visuals and clear calls
                    to action.
                  </p>
                </div>
                <div class="h-40 overflow-hidden mt-2">
                  <img
                    src="/images/landing.png"
                    alt="Landing Page Creation"
                    class="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div
                class="col-span-6 row-span-2 rounded-3xl p-6 border border-white backdrop-blur-sm flex flex-col"
              >
                <div class="mb-2">
                  <h3 class="text-xl font-bold mb-2 text-white">
                    From Scratch Design & Branding
                  </h3>
                  <p class="text-white">
                    Unique designs that establish your brand identity and stand
                    out.
                  </p>
                </div>
                <div class="h-40 overflow-hidden mt-2">
                  <img
                    src="/images/design.png"
                    alt="Design and Branding"
                    class="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div
                class="col-span-3 row-span-2 rounded-3xl p-6 border border-white backdrop-blur-sm flex flex-col"
              >
                <div class="mb-2">
                  <h3 class="text-lg font-bold mb-1 text-white">
                    Custom Solutions
                  </h3>
                  <p class="text-white text-sm">
                    Driving down third-party costs while improving
                    functionality.
                  </p>
                </div>
                <div class="h-24 overflow-hidden mt-2">
                  <img
                    src="/images/custom-software.png"
                    alt="Custom Solutions"
                    class="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div
                class="col-span-3 row-span-2 rounded-3xl p-6 border border-white backdrop-blur-sm flex flex-col"
              >
                <div class="mb-2">
                  <h3 class="text-lg font-bold mb-1 text-white">
                    Payment Solutions
                  </h3>
                  <p class="text-white text-sm">
                    Seamless integration with popular payment gateways.
                  </p>
                </div>
                <div class="h-24 overflow-hidden mt-2">
                  <img
                    src="/images/payment-solutions.png"
                    alt="Payment Solutions"
                    class="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div
                class="col-span-6 row-span-4 rounded-3xl p-6 border border-white backdrop-blur-sm flex flex-col"
              >
                <div class="mb-2">
                  <h3 class="text-xl font-bold mb-2 text-white">
                    Custom Business Software
                  </h3>
                  <p class="text-white">
                    Bespoke dashboards and business applications designed to
                    streamline your operations and provide insights that drive
                    growth.
                  </p>
                </div>
                <div class="h-64 overflow-hidden mt-8">
                  <img
                    src="/images/custom-software.png"
                    alt="Custom Business Software"
                    class="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div
                class="col-span-2 row-span-2 rounded-3xl p-6 border border-white backdrop-blur-sm flex flex-col"
              >
                <div class="mb-1">
                  <h3 class="text-lg font-bold mb-1 text-white">Copywriting</h3>
                  <p class="text-white text-xs">
                    Persuasive content that communicates your value.
                  </p>
                </div>
                <div class="h-20 overflow-hidden mt-2">
                  <img
                    src="/images/copywriting.png"
                    alt="Copywriting"
                    class="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div
                class="col-span-2 row-span-2 rounded-3xl p-6 border border-white backdrop-blur-sm flex flex-col"
              >
                <div class="mb-1">
                  <h3 class="text-lg font-bold mb-1 text-white">Analytics</h3>
                  <p class="text-white text-xs">
                    Data-driven insights to guide strategic decisions.
                  </p>
                </div>
                <div class="h-20 overflow-hidden mt-2">
                  <img
                    src="/images/analytics.png"
                    alt="Analytics"
                    class="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div
                class="col-span-2 row-span-2 rounded-3xl p-6 border border-white backdrop-blur-sm flex flex-col"
              >
                <div class="mb-1">
                  <h3 class="text-lg font-bold mb-1 text-white">
                    Maintenance & SEO
                  </h3>
                  <p class="text-white text-xs">
                    Year-round support for security and search ranking.
                  </p>
                </div>
                <div class="h-20 overflow-hidden mt-2">
                  <img
                    src="/images/seo.png"
                    alt="SEO"
                    class="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <DividerLine />

    <section class="relative py-12">
      <DotPattern
        class="absolute inset-0 size-full fill-white/20 [mask-image:radial-gradient(white,transparent_85%)] pointer-events-none"
      />
      <div class="max-w-6xl mx-auto px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="flex gap-6">
            <div
              class="w-12 h-12 rounded-full bg-gradient-to-r from-[#E70D01] to-[#F77D05] flex-shrink-0"
            ></div>
            <div>
              <p class="text-gray-300 text-lg mb-4">"The Web Agency built my business website from the ground up, came out perfect. They took the functions I said it needed to have and turned it into a visually appealing and customer friendly website."</p>
              <p class="text-white font-mono">Brenden Chapman</p>
              <p class="text-sm text-gray-400">CEO, Mobile Tire Pro</p>
            </div>
          </div>
          <div class="flex gap-6">
            <div
              class="w-12 h-12 rounded-full bg-gradient-to-r from-[#FF5400] to-[#F77D05] flex-shrink-0"
            ></div>
            <div>
              <p class="text-gray-300 text-lg mb-4">"We were able to quickly go from concept to a live website quickly. The Web Agency has allowed me to focus on my business without worrying about the development process."</p>
              <p class="text-white font-mono">Neil Maniar</p>
              <p class="text-sm text-gray-400">Hampshire Pharmacy</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <DividerLine />

    <section
      ref="bigIdeasSectionRef"
      class="relative py-12 bg-black/20 fade-in"
    >
      <DotPattern
        class="absolute inset-0 size-full fill-white/20 [mask-image:radial-gradient(white,transparent_85%)] pointer-events-none"
      />
      <div class="max-w-3xl mx-auto px-8 text-center">
        <p class="text-3xl md:text-4xl font-light leading-relaxed text-white">
          <span class="text-gradient">Big ideas</span> energize us. Exceptional
          results <span class="text-gradient">define us.</span> Together we'll
          create something extraordinary
          <span class="text-gradient">for your customers.</span>
        </p>
      </div>
    </section>

    <DividerLine />

    <section class="relative py-12 overflow-hidden">
      <DotPattern
        class="absolute inset-0 size-full fill-white/20 [mask-image:radial-gradient(white,transparent_85%)] pointer-events-none"
      />
      <div class="max-w-6xl mx-auto px-8">
        <div
          class="absolute inset-0 bg-gradient-to-br from-[#E70D01]/10 to-transparent"
        >
          <div class="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 400 100" class="w-full">
              <path
                d="M0,50 Q100,20 200,50 T400,50"
                fill="none"
                stroke="#F77D05"
                stroke-width="0.5"
                opacity="0.2"
              />
              <path
                d="M0,60 Q100,30 200,60 T400,60"
                fill="none"
                stroke="#F77D05"
                stroke-width="0.5"
                opacity="0.2"
              />
            </svg>
          </div>
        </div>

        <div class="relative z-10">
          <h2 class="text-4xl md:text-5xl text-white text-center mb-8">
            Level Up Your Website
          </h2>
          <p class="text-gray-300 text-center mb-12 text-xl">
            Transform your digital presence with our expertise
          </p>
          <div></div>
          <div
            style="width: 100%; height: 100%; overflow: auto"
            id="my-cal-inline"
          ></div>
          <div class="mt-12 text-center">
            <a
              href="/about"
              class="inline-block px-8 py-4 bg-gradient-to-r from-[#E70D01] to-[#F77D05] rounded-full text-white font-medium hover:opacity-90 transition-opacity"
            >
              Meet Your Success Team ->
            </a>
          </div>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup>
useSeoMeta({
  description: 'The Web Agency delivers custom websites and software solutions engineered to drive measurable business growth.',
  ogTitle: 'The Web Agency | Dev & Design Studio',
  ogDescription: 'The Web Agency delivers custom websites and software solutions engineered to drive measurable business growth.',
  ogImage: 'https://thewebagency.app/meta-og-image.png',
  ogUrl: 'https://thewebagency.app',
  twitterTitle: 'The Web Agency | Dev & Design Studio',
  twitterDescription: 'The Web Agency delivers custom websites and software solutions engineered to drive measurable business growth.',
  twitterImage: 'https://thewebagency.app/meta-og-image.png',
  twitterCard: 'https://thewebagency.app/meta-og-image.png'
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/ico',
      href: '/favicon.ico'
    }
  ]
})

import AppHeader from '~/components/layout/appHeader.vue'
import AppFooter from '~/components/layout/appFooter.vue';
import SocialProofLogos from '~/components/socialProofLogos.vue'

import { ref, onMounted, onUnmounted } from 'vue'

const aiSectionRef = ref(null);
const bigIdeasSectionRef = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: "50px",
    },
  );

  if (aiSectionRef.value) {
    observer.observe(aiSectionRef.value);
  }
  if (bigIdeasSectionRef.value) {
    observer.observe(bigIdeasSectionRef.value);
  }
})

const capabilities = [
  {
    title: "Full-Stack Excellence",
    description:
      "From frontend pixel perfection to backend brilliance, we craft comprehensive solutions that power your digital presence",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
            <path d="M2 12h20" />
          </svg>`,
  },
  {
    title: "AI-Enhanced Development",
    description:
      "Harnessing advanced AI to accelerate development cycles, squash bugs instantly, and deliver rapid solutions that keep your project moving at full speed",
    icon: `<svg class="w-8 h-8" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="24">
          <path d="M208,512a24.84,24.84,0,0,1-23.34-16l-39.84-103.6a16.06,16.06,0,0,0-9.19-9.19L32,343.34a25,25,0,0,1,0-46.68l103.6-39.84a16.06,16.06,0,0,0,9.19-9.19L184.66,144a25,25,0,0,1,46.68,0l39.84,103.6a16.06,16.06,0,0,0,9.19,9.19l103,39.63A25.49,25.49,0,0,1,400,320.52a24.82,24.82,0,0,1-16,22.82l-103.6,39.84a16.06,16.06,0,0,0-9.19,9.19L231.34,496A24.84,24.84,0,0,1,208,512Zm66.85-254.84h0Z" />
          <path d="M88,176a14.67,14.67,0,0,1-13.69-9.4L57.45,122.76a7.28,7.28,0,0,0-4.21-4.21L9.4,101.69a14.67,14.67,0,0,1,0-27.38L53.24,57.45a7.31,7.31,0,0,0,4.21-4.21L74.16,9.79A15,15,0,0,1,86.23.11,14.67,14.67,0,0,1,101.69,9.4l16.86,43.84a7.31,7.31,0,0,0,4.21,4.21L166.6,74.31a14.67,14.67,0,0,1,0,27.38l-43.84,16.86a7.28,7.28,0,0,0-4.21,4.21L101.69,166.6A14.67,14.67,0,0,1,88,176Z" />
          <path d="M400,256a16,16,0,0,1-14.93-10.26l-22.84-59.37a8,8,0,0,0-4.6-4.6l-59.37-22.84a16,16,0,0,1,0-29.86l59.37-22.84a8,8,0,0,0,4.6-4.6L384.9,42.68a16.45,16.45,0,0,1,13.17-10.57,16,16,0,0,1,16.86,10.15l22.84,59.37a8,8,0,0,0,4.6,4.6l59.37,22.84a16,16,0,0,1,0,29.86l-59.37,22.84a8,8,0,0,0-4.6,4.6l-22.84,59.37A16,16,0,0,1,400,256Z" />
        </svg>`,
  },
  {
    title: "Performance Optimization",
    description:
      "We fine tune every aspect of your website for peak performance, delivering lightning fast experiences that keep your users engaged",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>`,
  },
  {
    title: "Responsive Design",
    description:
      "Seamlessly adaptive interfaces that captivate your audience across every device and screen size, ensuring no user is left behind",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="3" width="14" height="18" rx="2" />
            <rect x="16" y="8" width="6" height="13" rx="2" />
          </svg>`,
  },
  {
    title: "SEO Forward",
    description:
      "Built in search engine optimization that puts your business at the forefront of digital discovery, driving organic growth and clicks from day one",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
            <path d="M11 8v6M8 11h6" />
          </svg>`,
  },
  {
    title: "Brand Architecture",
    description:
      "We transform your brand into a cohesive digital identity, creating memorable interactions that resonate with your audience",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 19l7-7 3 3-7 7-3-3z" />
            <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
            <path d="M2 2l7.586 7.586" />
            <circle cx="11" cy="11" r="2" />
          </svg>`,
  },
];

const gradientColors = ["#E70D01", "#FF5400", "#F77D05"];
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

.text-gradient {
  background: linear-gradient(to right, #e70d01, #ff5400, #f77d05);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.6s ease-out,
    transform 0.6s ease-out;
}

.fade-in-visible {
  opacity: 1;
  transform: translateY(0);
}

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

@keyframes fade {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.text-gradient {
  background: linear-gradient(to right, #e70d01, #ff5400, #f77d05);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.animate-fade {
  animation: fade 0.5s ease-out forwards;
}

.group {
  position: relative;
  transition: transform 0.3s ease;
}

.group:hover {
  transform: translateY(-4px);
}

.group::before {
  content: "";
  position: absolute;
  inset: -1px;
  background: linear-gradient(
    to right,
    rgba(231, 13, 1, 0.2),
    rgba(255, 84, 0, 0.2),
    rgba(247, 125, 5, 0.2)
  );
  border-radius: inherit;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.group:hover::before {
  opacity: 1;
}
</style>
