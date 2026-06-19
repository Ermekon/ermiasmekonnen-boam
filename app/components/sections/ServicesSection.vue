<template>
  <!-- FIXED: aria-label added to section landmark -->
  <section id="services" class="services" aria-label="Services">
    <div class="services__header container">
      <h2 class="services__heading">Every Brand Touchpoint.</h2>
      <p class="services__sub">One Creative Direction.</p>
    </div>
    <!-- FIXED: role=region + aria-roledescription marks this as a carousel for AT -->
    <div class="services__slider-wrap" role="region" aria-label="Services" aria-roledescription="carousel">
      <div class="services__slider" ref="trackRef">
        <div v-for="(s, i) in services" :key="i" class="service-card">
          <span class="service-card__num" aria-hidden="true">0{{ i + 1 }}</span>
          <h3 class="service-card__title">{{ s.title }}</h3>
          <p class="service-card__tag">{{ s.tag }}</p>
          <p class="service-card__desc">{{ s.desc }}</p>
        </div>
      </div>
    </div>
    <div class="services__controls container">
      <!-- FIXED: aria-label added to prev/next buttons -->
      <button class="services__btn" @click="prev" aria-label="Previous service">←</button>
      <button class="services__btn" @click="next" aria-label="Next service">→</button>
      <!-- FIXED: aria-live announces current service to screen readers on change -->
      <span class="sr-only" aria-live="polite" aria-atomic="true">{{ liveLabel }}</span>
    </div>
  </section>
</template>
<script setup>
// FIXED: current changed from plain let to ref -- Vue can now track it
// FIXED: dead variable let flickity = null removed
// FIXED: dead ref sliderRef removed from template
import { ref } from "vue"
const trackRef = ref(null)
const current = ref(0)
const liveLabel = ref("")
const services = [
  { title: "Packaging & Label Design",       tag: "Your product has three seconds on the shelf.",        desc: "From concept to print-ready files, I design packaging that wins attention, communicates quality, and earns the sale." },
  { title: "Brand Development & Rebranding", tag: "Your brand has evolved. Your identity should too.",   desc: "Whether launching or refreshing, I build identities that are consistent, strategic, and built to last." },
  { title: "Logo & Identity Systems",        tag: "The mark that makes people recognize you everywhere.", desc: "A logo is the foundation of every visual decision your brand will ever make. I build it to work everywhere." },
  { title: "Brand Style Guides",             tag: "Consistency is not an accident. It is a system.",    desc: "I build the rules that keep your brand looking right across every designer, platform, and market." },
  { title: "Marketing Campaign Execution",   tag: "From the concept to the screen to the street.",      desc: "From print ads to television commercials, I make sure your campaign has a visual direction impossible to ignore." },
  { title: "Website & UX/UI Design",         tag: "Every click effortless. Every page intentional.",    desc: "Digital experiences designed to work as hard as your brand does, built around your audience." },
  { title: "Wayfinding & Signage",           tag: "Spaces that speak.",                                 desc: "From retail environments to institutional spaces, I design visual language that guides people and builds trust." },
  { title: "Environmental Design",           tag: "Your brand does not stop at the package or screen.", desc: "I bring visual identities to life in physical environments, creating experiences people feel before they understand." },
]
function announce(i) { liveLabel.value = ""; setTimeout(() => { liveLabel.value = services[i].title + ", service " + (i+1) + " of " + services.length }, 100) }
function next() { if (!trackRef.value) return; const cards = trackRef.value.querySelectorAll(".service-card"); current.value = Math.min(current.value + 1, cards.length - 1); cards[current.value].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" }); announce(current.value) }
function prev() { if (!trackRef.value) return; const cards = trackRef.value.querySelectorAll(".service-card"); current.value = Math.max(current.value - 1, 0); cards[current.value].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" }); announce(current.value) }
</script>
<style scoped>
.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }
.services { background: #ffffff; color: #080808; padding: 12rem 0 8rem; }
.services__header { margin-bottom: 6rem; }
.services__heading { font-size: clamp(4rem, 6vw, 8rem); font-weight: 400; line-height: 1; margin-bottom: 1.6rem; }
.services__sub { font-size: clamp(2rem, 3vw, 4rem); color: rgba(8,8,8,0.4); }
.services__slider-wrap { overflow: hidden; padding-left: 4.8rem; }
.services__slider { display: flex; gap: 2.4rem; overflow-x: auto; scroll-snap-type: x mandatory; scrollbar-width: none; padding-right: 4.8rem; padding-bottom: 2rem; }
.services__slider::-webkit-scrollbar { display: none; }
.service-card { flex: 0 0 38rem; scroll-snap-align: start; border-top: 1px solid rgba(8,8,8,0.15); padding: 4rem 0; display: flex; flex-direction: column; gap: 1.6rem; }
.service-card__num { font-size: 1.2rem; color: rgba(8,8,8,0.3); letter-spacing: 0.1em; }
.service-card__title { font-family: "Sfizia", "Playfair Display", serif; font-size: 2.4rem; font-weight: 500; color: #080808; line-height: 1.2; }
.service-card__tag { font-size: 1.4rem; color: rgba(8,8,8,0.5); font-style: italic; }
.service-card__desc { font-size: 1.4rem; color: rgba(8,8,8,0.6); line-height: 1.6; margin-top: auto; }
.services__controls { display: flex; gap: 1.6rem; margin-top: 4rem; align-items: center; }
.services__btn { width: 5.6rem; height: 5.6rem; border-radius: 50%; border: 1px solid rgba(8,8,8,0.2); background: none; cursor: pointer; font-size: 2rem; transition: background 0.2s, color 0.2s; color: #080808; }
.services__btn:hover { background: #080808; color: #ffffff; }
@media (max-width: 768px) { .services__slider-wrap { padding-left: 1.6rem; } .service-card { flex: 0 0 28rem; } }
/* FIXED: card width capped at 85vw at 400px so card never overflows viewport */
@media (max-width: 400px) { .service-card { flex: 0 0 min(28rem, 85vw); } }
</style>