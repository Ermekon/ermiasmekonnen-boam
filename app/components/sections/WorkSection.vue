<template>
  <!-- FIXED: aria-label added to section landmark -->
  <section id="work" class="work" aria-label="Selected Work">
    <div class="work__projects" ref="stackRef">
      <!-- FIXED: href="#" removed -- dead links replaced with div until case study pages exist -->
      <!-- FIXED: aria-label per panel makes each distinguishable for AT -->
      <div v-for="(proj, i) in projects" :key="i" class="work__panel" :data-index="i" :aria-label="proj.title + ' — ' + proj.category">
        <!-- FIXED: aria-hidden on decorative color bg div -->
        <div class="work__panel__bg" :style="{ background: proj.color }" aria-hidden="true"></div>
        <div class="work__panel__content">
          <span class="work__panel__index" aria-hidden="true">0{{ i + 1 }}</span>
          <p class="work__panel__category">{{ proj.category }}</p>
          <h2 class="work__panel__title">{{ proj.title }}</h2>
          <p class="work__panel__desc">{{ proj.desc }}</p>
          <!-- FIXED: CTA includes project title so each is unique for AT -->
          <span class="work__panel__cta">View {{ proj.title }} Case Study</span>
        </div>
      </div>
    </div>
    <div class="work__thumbs" :class="{ visible: thumbsVisible }" role="navigation" aria-label="Jump to project">
      <!-- FIXED: aria-label + aria-current added to thumb buttons -->
      <button v-for="(proj, i) in projects" :key="i" class="work__thumb"
        :class="{ active: activeIndex === i }"
        :style="{ background: proj.color }"
        @click="scrollToPanel(i)"
        :aria-label="'Jump to ' + proj.title"
        :aria-current="activeIndex === i ? 'true' : 'false'">
        <span class="work__thumb__label" aria-hidden="true">{{ proj.title }}</span>
      </button>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue"
const stackRef = ref(null)
const activeIndex = ref(0)
const thumbsVisible = ref(false)
let observers = []
let sectionObserver = null
const projects = [
  { title: "ROL Bio",  category: "Retail Packaging", desc: "A detergent brand commanding attention across retail shelves.", color: "#1a1a2e" },
  { title: "Tiffany", category: "Premium Body Care", desc: "A body care range that feels premium from the very first glance.", color: "#0d1b0d" },
  { title: "TreSSa",  category: "Haircare",          desc: "A shampoo line positioned to compete regionally with confidence.", color: "#1a0d0d" },
  { title: "Essex",   category: "Cleaning Brand",    desc: "A cleaning brand with a visual identity built for retail impact.", color: "#0d0d1a" },
  { title: "Eden",    category: "Soap Range",        desc: "Packaging that communicates quality before a word is read.", color: "#0d1a1a" },
  { title: "Diva",    category: "Personal Care",     desc: "A product line standing out in a crowded personal care market.", color: "#1a1500" },
]
function scrollToPanel(i) { const all = stackRef.value?.querySelectorAll(".work__panel"); if (all && all[i]) all[i].scrollIntoView({ behavior: "smooth" }) }
onMounted(() => {
  const all = stackRef.value?.querySelectorAll(".work__panel")
  if (!all) return
  all.forEach((panel, i) => { const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) activeIndex.value = i }, { threshold: 0.5 }); obs.observe(panel); observers.push(obs) })
  sectionObserver = new IntersectionObserver(([e]) => { thumbsVisible.value = e.isIntersecting }, { threshold: 0, rootMargin: "-10% 0px -10% 0px" })
  if (stackRef.value) sectionObserver.observe(stackRef.value)
})
onUnmounted(() => { observers.forEach(o => o.disconnect()); if (sectionObserver) sectionObserver.disconnect() })
</script>
<style scoped>
.work { position: relative; }
.work__panel { display: block; position: relative; height: 100vh; overflow: hidden; }
.work__panel__bg { position: absolute; inset: 0; transition: transform 0.6s ease; }
.work__panel:hover .work__panel__bg { transform: scale(1.03); }
.work__panel__content { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: flex-end; padding: 6rem 4.8rem; background: linear-gradient(to top, rgba(0,0,0,0.7), transparent 60%); }
.work__panel__index { position: absolute; top: 4rem; right: 4.8rem; font-size: 1.2rem; color: rgba(255,255,255,0.3); letter-spacing: 0.1em; }
.work__panel__category { font-size: 1.2rem; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 1.2rem; }
.work__panel__title { font-size: clamp(4rem, 7vw, 9rem); font-weight: 400; color: #ffffff; line-height: 1; margin-bottom: 2rem; }
.work__panel__desc { font-size: 1.6rem; color: rgba(255,255,255,0.6); max-width: 50ch; margin-bottom: 3.2rem; }
.work__panel__cta { font-size: 1.4rem; color: rgba(255,255,255,0.8); border-bottom: 1px solid rgba(255,255,255,0.3); padding-bottom: 0.4rem; align-self: flex-start; }
.work__thumbs { position: fixed; right: 3.2rem; top: 50%; transform: translateY(-50%); z-index: 100; display: flex; flex-direction: column; gap: 0.8rem; opacity: 0; pointer-events: none; transition: opacity 0.4s ease; }
.work__thumbs.visible { opacity: 1; pointer-events: auto; }
.work__thumb { width: 48px; height: 48px; border-radius: 4px; border: 2px solid transparent; cursor: pointer; transition: border-color 0.3s, transform 0.3s; position: relative; }
.work__thumb.active { border-color: #ffffff; transform: scale(1.15); }
.work__thumb__label { position: absolute; right: calc(100% + 1rem); top: 50%; transform: translateY(-50%); white-space: nowrap; font-size: 1.2rem; color: #ffffff; opacity: 0; transition: opacity 0.2s; pointer-events: none; }
.work__thumb:hover .work__thumb__label { opacity: 1; }
@media (max-width: 768px) { .work__thumbs { display: none; } .work__panel__content { padding: 4rem 1.6rem; } }
</style>