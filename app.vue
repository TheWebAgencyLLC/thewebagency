<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  useHead({
  script: [
    {
      src: 'https://analytics.ahrefs.com/analytics.js',
      'data-key': 'jrJ01QWK5pdniNSEMggsqA',
      defer: true
    }
  ]
})
</script>