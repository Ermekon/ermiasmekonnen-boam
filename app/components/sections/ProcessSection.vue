<template>
  <!-- FIXED: aria-label added to section landmark -->
  <section id="process" class="process" aria-label="Design Process">
    <div class="container">
      <div class="process__header">
        <p class="process__label">Design Process</p>
        <h2 class="process__heading">The Process That<br>Protects Your Investment.</h2>
      </div>
      <div class="process__grid" :class="{ 'has-hover': hoveredIndex !== null }">
        <div v-for="(step, i) in steps" :key="i" class="process__card"
          :class="{ 'is-hovered': hoveredIndex === i, 'is-dimmed': hoveredIndex !== null && hoveredIndex !== i }"
          @mouseenter="hoveredIndex = i" @mouseleave="hoveredIndex = null"
          @focusin="hoveredIndex = i" @focusout="hoveredIndex = null"
          tabindex="0">
          <div class="process__card__top">
            <span class="process__card__num" aria-hidden="true">{{ String(i + 1).padStart(2, '0') }}</span>
            <h3 class="process__card__title">{{ step.title }}</h3>
          </div>
          <p class="process__card__sub">{{ step.sub }}</p>
          <div class="process__card__divider" aria-hidden="true"></div>
          <p class="process__card__what">What happens here</p>
          <!-- FIXED: role="list" restores VoiceOver list semantics stripped by list-style:none -->
          <ul class="process__card__list" role="list">
            <li v-for="item in step.items" :key="item" role="listitem">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue"
const hoveredIndex = ref(null)
const steps = [
  { title: "Discover", sub: "What does your brand need to say — and to whom?", items: ["Brand and product audit","Market and competitor research","Audience understanding","Project goals and success criteria"] },
  { title: "Define",   sub: "No design starts until we agree on the direction.",    items: ["Creative brief development","Positioning and strategy alignment","Visual direction agreement","Project timeline and milestones"] },
  { title: "Design",   sub: "This is where the work happens.",                      items: ["Multiple concept development","Rationale for every creative decision","Feedback and refinement rounds","Stakeholder presentation support"] },
  { title: "Deliver & Iterate", sub: "The final product is not just beautiful. It is ready to work.", items: ["Final file delivery in all required formats","Print and production specifications","Brand guidelines documentation","Post-launch support and iteration"] },
]
</script>
<style scoped>
.process { background: #080808; color: #ffffff; padding: 14rem 0; }
.process__header { margin-bottom: 8rem; }
.process__label { font-size: 1.2rem; color: rgba(255,255,255,0.3); text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 2.4rem; }
.process__heading { font-size: clamp(3.6rem, 5vw, 7rem); font-weight: 400; line-height: 1.1; }
.process__grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.6rem; }
.process__card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 2rem; padding: 4rem 3.2rem; display: flex; flex-direction: column; gap: 0; transition: background 0.4s, border-color 0.4s, opacity 0.4s, transform 0.4s; cursor: default; }
.process__card.is-hovered { background: rgba(255,255,255,0.10); border-color: rgba(255,255,255,0.2); transform: translateY(-4px); }
.process__card.is-dimmed { opacity: 0.3; }
.process__card__top { display: flex; flex-direction: column; gap: 2rem; margin-bottom: 2rem; }
/* FIXED: font-family changed from "Playfair Display" to "Sfizia" as primary */
.process__card__num { font-size: 4rem; font-weight: 700; color: rgba(255,255,255,0.08); font-family: "Sfizia", "Playfair Display", serif; line-height: 1; transition: color 0.4s; }
.process__card.is-hovered .process__card__num { color: rgba(255,255,255,0.15); }
.process__card__title { font-family: "Sfizia", "Playfair Display", serif; font-size: clamp(2.4rem, 2.5vw, 3.2rem); font-weight: 400; color: #ffffff; line-height: 1.15; }
.process__card__sub { font-size: 1.4rem; color: rgba(255,255,255,0.4); font-style: italic; line-height: 1.6; margin-bottom: 3.2rem; transition: color 0.4s; }
.process__card.is-hovered .process__card__sub { color: rgba(255,255,255,0.6); }
.process__card__divider { height: 1px; background: rgba(255,255,255,0.08); margin-bottom: 2.4rem; transition: background 0.4s; }
.process__card.is-hovered .process__card__divider { background: rgba(255,255,255,0.15); }
.process__card__what { font-size: 1.1rem; color: rgba(255,255,255,0.25); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 1.6rem; transition: color 0.4s; }
.process__card.is-hovered .process__card__what { color: rgba(255,255,255,0.4); }
.process__card__list { list-style: none; display: flex; flex-direction: column; gap: 1.4rem; }
.process__card__list li { font-size: 1.4rem; color: rgba(255,255,255,0.5); padding-left: 2rem; position: relative; line-height: 1.5; transition: color 0.4s; }
/* FIXED: zero-width space preserves VoiceOver list role while using custom bullet */
.process__card__list li::before { content: "\u200B—"; position: absolute; left: 0; color: rgba(255,255,255,0.2); }
.process__card.is-hovered .process__card__list li { color: rgba(255,255,255,0.8); }
/* FIXED: hover CSS wrapped in pointer:fine so touch devices do not get stuck in hovered state */
@media (hover: hover) and (pointer: fine) { .process__card:hover { background: rgba(255,255,255,0.10); border-color: rgba(255,255,255,0.2); transform: translateY(-4px); } }
@media (max-width: 1024px) { .process__grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 768px) { .process__grid { grid-template-columns: 1fr; } }
</style>