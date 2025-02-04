<template>
  <div class="bg-black min-h-screen flex justify-center items-center">
    <!-- On mobile, container takes full width; on desktop (lg and up), it’s 2/3 of the width -->
    <div
      class="w-full lg:w-2/3 min-h-screen text-white flex flex-col justify-center items-center space-y-4 p-4"
    >
      <div
        class="w-full flex flex-col justify-center items-center space-y-2 bg-gradient-to-r from-[#E70D01] via-[#FF5400] to-[#F77D05] bg-clip-text text-transparent"
      >
        <!-- Headings: slightly smaller on mobile, unchanged on desktop -->
        <h1 class="text-4xl lg:text-6xl font-bold">Contact Us</h1>
        <h2 class="text-lg lg:text-xl italic text-gray-300 font-light">
          We are here to help you.
        </h2>
      </div>
      <!-- The horizontal rule is full width on mobile, half width on desktop -->
      <hr
        class="w-full lg:w-1/2 mt-10 bg-gradient-to-r from-gray-500 via-gray-500 to-gray-500"
      />
      <form
        name="contact"
        class="w-full flex flex-col justify-center items-center space-y-5"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        method="POST"
      >
        <input type="hidden" name="form-name" value="contact" />
        <!-- Full Name Field -->
        <div class="w-full lg:w-1/2 flex flex-col mt-10 space-y-2">
          <label for="fullName">Full Name</label>
          <div
            class="p-[2px] rounded-md bg-gradient-to-r from-gray-500 via-gray-500 to-gray-500 transition-all duration-300 focus-within:from-[#E70D01] focus-within:via-[#FF5400] focus-within:to-[#F77D05]"
          >
            <input
              id="fullName"
              name="fullName"
              type="text"
              class="w-full p-4 h-12 bg-black/95 border-none text-white outline-none"
            />
          </div>
        </div>

        <!-- Email Field -->
        <div class="w-full lg:w-1/2 flex flex-col space-y-2">
          <label for="email">Email</label>
          <div
            class="p-[2px] rounded-md bg-gradient-to-r from-gray-500 via-gray-500 to-gray-500 transition-all duration-300 focus-within:from-[#E70D01] focus-within:via-[#FF5400] focus-within:to-[#F77D05]"
          >
            <input
              id="email"
              name="email"
              type="text"
              class="w-full p-4 h-12 bg-black/95 border-none text-white outline-none"
            />
          </div>
        </div>

        <!-- Textarea Field -->
        <!-- On mobile, let the height be automatic; on desktop, use the fixed heights -->
        <div
          class="w-full lg:w-1/2 flex flex-col space-y-2 h-auto lg:h-[20rem]"
        >
          <label for="message">Tell us more about your inquiry.</label>
          <div
            class="p-[2px] rounded-md bg-gradient-to-r from-gray-500 via-gray-500 to-gray-500 transition-all duration-300 focus-within:from-[#E70D01] focus-within:via-[#FF5400] focus-within:to-[#F77D05]"
          >
            <textarea
              id="message"
              name="message"
              class="w-full p-4 h-auto lg:h-[18rem] bg-black/95 border-none text-white outline-none"
            ></textarea>
          </div>
        </div>

        <!-- Button: full width on mobile, half width on desktop -->
        <button
          type="submit"
          class="w-full lg:w-1/2 rounded-md text-lg font-semibold py-3 px-6 bg-gradient-to-r from-[#E70D01]/70 via-[#FF5400]/50 to-[#F77D05]/70 hover:from-[#E70D01] hover:via-[#FF5400] hover:to-[#F77D05] transition-colors duration-1000"
        >
          Send Inquiry
        </button>
      </form>
      <hr class="bg-white w-1/2" />
      <div class="grid grid-cols-2 gap-4 font-light italic text-gray-300">
        <div>Email: thewebagencydev@gmail.com</div>
        <div>Working hours: Mon-Fri 8am-6pm</div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "what-the-hell-is-our-other-layout",
});
</script>
