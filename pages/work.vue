<template>
  <div class="about-container bg-black min-h-screen relative">
    <div
      class="absolute -top-8 left-1/2 size-48 md:size-72 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#E70D01]/20 via-[#FF5400]/20 to-[#F77D05]/20 blur-[80px] md:blur-[120px] lg:top-[20rem] lg:size-[26rem] lg:blur-[200px] z-0">
    </div>
    
    <DotPattern
      class="absolute inset-0 size-full fill-white/20 [mask-image:radial-gradient(white,transparent_85%)] pointer-events-none" />
    <section class="relative overflow-hidden py-24 px-6">
      <div class="max-w-7xl mx-auto relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <h1 class="text-4xl md:text-6xl font-bold text-white leading-tight font-mono">Client Work</h1>
            <p class="text-lg md:text-xl text-white leading-relaxed">
              We transform the business storefront into digital success stories. Browse our portfolio of custom built, blank page solutions that have helped clients achieve measurable growth.
            </p>
            <p class="text-lg text-white leading-relaxed">
              Each project showcases our commitment to blending distinctive design with powerful functionality.
            </p>
            <div class="pt-4">
              <a href="/contact" class="inline-flex items-center gap-2 px-6 py-3 border border-white bg-black text-white hover:bg-gray-800 text-base font-medium rounded-md shadow-sm transition duration-300">
                Let's work together
                <Icon name="mdi:rocket-launch" class="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div class="rounded-lg shadow-xl overflow-hidden">
            <div class="p-8 relative flex justify-center items-center">
              <div ref="lottieContainer" class="w-full h-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 px-6 bg-gradient-to-br from-[#E70D01]/20 via-[#FF5400]/20 to-[#F77D05]/20">
      <div class="max-w-7xl mx-auto">
        <div class="flex items-center justify-between mb-12">
          <div class="flex items-center gap-3">
            <div class="relative">
              <div class="w-8 h-8 rounded-full border border-gray-600"></div>
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#F77D05]"></div>
            </div>
            <h2 class="font-mono text-3xl font-bold text-white">Business Verticals We Serve</h2>
          </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-6 gap-4">
          <div v-for="(vertical, index) in businessVerticals" :key="index" class="bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-sm p-4 border border-gray-700 hover:shadow-md transition duration-300 group">
            <div class="h-12 w-12 bg-gray-700 rounded mb-3 flex items-center justify-center text-[#FF5400]">
              <Icon :name="vertical.icon" class="h-6 w-6" />
            </div>
            <h3 class="font-medium text-white">{{ vertical.name }}</h3>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 px-6 bg-black">
      <div class="max-w-7xl mx-auto">
        <div class="flex items-center justify-between mb-12">
          <div class="flex items-center gap-3">
            <div class="relative">
              <div class="w-8 h-8 rounded-full border border-gray-600"></div>
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#F77D05]"></div>
            </div>
            <h2 class="font-serif text-3xl font-bold text-white">Clients</h2>
          </div>
        </div>
      </div>

      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div v-for="(project, index) in featuredProjects" :key="index" class="rounded-lg overflow-hidden border border-gray-100 shadow-md hover:shadow-lg transition duration-300">
          <div class="relative bg-gray-100">
            <img :src="project.image" :alt="project.title" class="object-cover w-full h-full" />
          </div>
          <div class="p-6">
            <h3 class="font-bold text-xl text-white mb-2">{{ project.title }}</h3>
            <p class="text-white mb-4">{{ project.description }}</p>
            <div class="flex items-center space-x-2">
              <span v-for="(tag, tagIndex) in project.tags" :key="tagIndex" class="text-xs font-medium text-gray-900 bg-gray-100 px-2 py-1 rounded">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-10 px-6 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-[#E70D01]/20 via-[#FF5400]/20 to-[#F77D05]/20"></div>
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
        <div class="mb-6 md:mb-0 md:mr-8">
          <h2 class="text-2xl font-bold text-white mb-2">Skyrocket your <span class="text-gradient">sales.</span></h2>
          <p class="text-white">Schedule your call to get started, today.</p>
          <p class="text-sm text-white mt-2">Free initial consultation • 15-min</p>
        </div>
        <div class="flex items-center">
          <a href="https://cal.com/the-web-agency/discovery" target="_blank" class="bg-black border border-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium hover:bg-gray-900 transition duration-300 flex items-center">
            Schedule a 15-min discovery call
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
      <div class="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 400 30" class="w-full">
          <path d="M0,20 Q100,10 200,20 T400,20" fill="none" stroke="#F77D05" stroke-width="0.5" opacity="0.2" />
          <path d="M0,25 Q100,15 200,25 T400,25" fill="none" stroke="#F77D05" stroke-width="0.5" opacity="0.2" />
        </svg>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, onActivated, nextTick } from 'vue';

const lottieContainer = ref(null);
const lottiePlayer = ref(null);
const lottieScriptLoaded = ref(false);

const loadLottieScript = () => {
  if (document.querySelector('script[src*="dotlottie-player"]')) {
    lottieScriptLoaded.value = true;
    return Promise.resolve();
  }
  
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs';
    script.type = 'module';
    script.onload = () => {
      lottieScriptLoaded.value = true;
      resolve();
    };
    document.head.appendChild(script);
  });
};

const initLottiePlayer = async () => {
  await loadLottieScript();
  await nextTick();
  
  if (lottieContainer.value) {
    lottieContainer.value.innerHTML = '';
    
    const playerElement = document.createElement('dotlottie-player');
    playerElement.setAttribute('src', 'https://lottie.host/e05b5ee8-9c2d-4eb5-8237-a165f061f7cf/ThZCs9j6g3.lottie');
    playerElement.setAttribute('speed', '1');
    playerElement.setAttribute('loop', '');
    playerElement.setAttribute('autoplay', '');
    
    lottieContainer.value.appendChild(playerElement);
    lottiePlayer.value = playerElement;
  }
};

const cleanupLottiePlayer = () => {
  if (lottieContainer.value) {
    lottieContainer.value.innerHTML = '';
  }
  lottiePlayer.value = null;
};

onMounted(async () => {
  await initLottiePlayer();
});

onActivated(() => {
  initLottiePlayer();
});

onUnmounted(() => {
  cleanupLottiePlayer();
});

const businessVerticals = [
{ name: 'Healthcare', icon: 'mdi:hospital' },
  { name: 'SaaS', icon: 'mdi:cloud-outline' },
  { name: 'Enterprise', icon: 'mdi:office-building' },
  { name: 'Small Business', icon: 'mdi:store' },
  { name: 'Restaurants', icon: 'mdi:food-fork-drink' },
  { name: 'Hotels', icon: 'mdi:hotel' }
];

const featuredProjects = [
  {
    title: 'Mobile Tire Pro',
    description: 'Full-scale design and development of a small business website for mobile tire repair and maintainence',
    image: '/images/mobile-tire-pro.png',
    tags: ['Custom Booking API', 'Payments', 'Auth']
  },
  {
    title: 'Hampshire Pharmacy',
    description: 'A prescription medicine lookup web-app made for the patients and prospective customers of the Hampshire Pharmacy.',
    image: '/images/hampshire-pharmacy.png',
    tags: ['Lookup Tool', 'Database', 'Administrative Dashboard']
  },
  {
    title: 'ByteHog',
    description: 'A consulting website for data analytics, data pipelines from source to cloud warehouse to provide analytics services for retail vendors.',
    image: '/images/bytehog.png',
    tags: ['Enterprise', 'Blogs']
  },
  {
    title: 'Servidiap - Clinic Software',
    description: 'Custom built software designed to streamline day-to-day operations for the medical clinic, offering a comprehensive solution to manage everything from patient operations to inventory tracking.',
    image: '/images/servidiap-clinic.png',
    tags: ['Custom Software', 'Dashboard', 'Database Design', 'Auth']
  }
];
</script>

<style scoped>
.about-container {
  font-family: "JetBrains Mono", sans-serif;
  font-optical-sizing: auto;
  font-weight: 200;
  font-style: normal;
}

.text-gradient {
  background: linear-gradient(to right, #E70D01, #FF5400, #F77D05);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.group {
  position: relative;
  transition: transform 0.3s ease;
}

.group:hover {
  transform: translateY(-4px);
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