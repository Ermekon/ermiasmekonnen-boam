<template>
  <div class="App"><NuxtPage /></div>
</template>
<script setup>
import { onMounted, onUnmounted } from 'vue'
let lenis = null
onMounted(async () => {
  // FIXED: skip Lenis if user prefers reduced motion -- vestibular safety
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const Lenis = (await import('lenis')).default
  lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smooth: true })
  function raf(time) { lenis.raf(time); requestAnimationFrame(raf) }
  requestAnimationFrame(raf)
})
onUnmounted(() => { if (lenis) lenis.destroy() })
</script>
