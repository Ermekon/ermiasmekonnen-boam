<template>
  <!-- FIXED: aria-labelledby links section to h1 for screen readers -->
  <section class="hero" ref="heroRef" aria-labelledby="hero-heading">
    <!-- FIXED: aria-hidden on bg wrapper -- decorative images invisible to AT -->
    <div class="hero__bg" aria-hidden="true">
      <div v-for="(img, i) in images" :key="i" class="hero__slide"
        :class="{ active: currentIndex === i, prev: prevIndex === i }"
        :style="{ backgroundImage: `url(${img})` }"></div>
      <div class="hero__overlay"></div>
    </div>
    <div class="hero__inner">
      <div class="hero__headline">
        <h1 class="hero__h1" id="hero-heading">
          <span class="hero__h1__line hero__h1__line--small">Your product deserves</span>
          <span class="hero__h1__line hero__h1__line--big">THREE SECONDS</span>
          <span class="hero__h1__line hero__h1__line--small">of attention.</span>
        </h1>
        <p class="hero__sub">Most packaging wastes all three.</p>
      </div>
    </div>
    <div class="hero__bottom">
      <div class="hero__bottom__left">
        <a href="tel:+251911281510" class="hero__contact-item">+251 911 281 510</a>
        <a href="mailto:emz.creativedesigns@gmail.com" class="hero__contact-item">emz.creativedesigns@gmail.com</a>
      </div>
      <div class="hero__scroll" aria-hidden="true">
        <span>Scroll to see more</span>
        <div class="hero__scroll-icon">↓</div>
      </div>
      <div class="hero__bottom__right">
        <!-- FIXED: target="_blank" + rel="noopener noreferrer" added to social links -->
        <a href="https://linkedin.com/in/ermiasmekonnen" target="_blank" rel="noopener noreferrer" class="hero__social-item">LinkedIn</a>
        <a href="https://instagram.com/emz.creative" target="_blank" rel="noopener noreferrer" class="hero__social-item">Instagram</a>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
const heroRef = ref(null)
const currentIndex = ref(0)
const prevIndex = ref(null)
let timer = null
// FIXED: ScrollTrigger instance stored so it can be killed on unmount -- prevents double-firing
let st = null
const images = ["/images/hero/layer3.png","/images/hero/robera-label.png","/images/hero/c-scaled.png","/images/hero/robera.png","/images/hero/3-25.png","/images/hero/007.png","/images/hero/008.png","/images/hero/009.png","/images/hero/011.png"]
function nextSlide() { prevIndex.value = currentIndex.value; currentIndex.value = (currentIndex.value + 1) % images.length }
onMounted(() => {
  const tween = gsap.to(heroRef.value, { scale: 0.88, transformOrigin: "50% calc(100% - 50vh)", ease: "none", scrollTrigger: { trigger: heroRef.value, start: "top top", end: "bottom top", scrub: true } })
  st = tween.scrollTrigger
  // FIXED: skip slideshow if user prefers reduced motion
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) { timer = setInterval(nextSlide, 3500) }
})
onUnmounted(() => {
  // FIXED: both timer and ScrollTrigger killed on unmount
  if (timer) clearInterval(timer)
  if (st) st.kill()
})
</script>
<style scoped>
.hero { position: relative; height: 100vh; display: grid; grid-template-rows: 1fr auto; overflow: hidden; background: #080808; }
.hero__bg { position: absolute; inset: 0; z-index: 0; }
.hero__slide { position: absolute; inset: 0; background-size: cover; background-position: center; background-repeat: no-repeat; opacity: 0; transform: scale(1.08); transition: opacity 1s cubic-bezier(0.165, 0.84, 0.44, 1); }
.hero__slide.active { opacity: 1; animation: kenburns 6s ease-out forwards; }
.hero__slide.prev { opacity: 0; transition: opacity 1s cubic-bezier(0.165, 0.84, 0.44, 1); }
@keyframes kenburns { from { transform: scale(1.08); } to { transform: scale(1.0); } }
/* FIXED: reduced motion disables Ken Burns and bounce arrow */
@media (prefers-reduced-motion: reduce) { .hero__slide { animation: none !important; transition: none !important; } .hero__scroll-icon { animation: none !important; } }
/* FIXED: bottom gradient strengthened to 0.85 for better contrast over varying images */
.hero__overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(8,8,8,0.65) 0%, rgba(8,8,8,0.5) 50%, rgba(8,8,8,0.85) 100%); z-index: 1; }
.hero__inner { position: relative; z-index: 2; display: flex; align-items: center; justify-content: center; padding: 0; margin-top: -4rem; }
.hero__headline { width: 100%; display: flex; flex-direction: column; align-items: center; gap: 0; }
.hero__h1 { width: 100%; display: flex; flex-direction: column; align-items: center; gap: 0; line-height: 1; margin-bottom: 2.4rem; }
.hero__h1__line { display: block; font-family: "Sfizia", "Playfair Display", serif; font-weight: 400; text-align: center; color: #ffffff; }
.hero__h1__line--small { font-size: clamp(2.4rem, 4.5vw, 7rem); line-height: 1; color: rgba(255,255,255,0.75); letter-spacing: 0.02em; margin-bottom: 0.5rem; }
.hero__h1__line--big { font-size: clamp(4rem, 11.5vw, 17rem); font-style: italic; color: #E1C8B4; line-height: 0.85; letter-spacing: -0.02em; margin-bottom: 0.5rem; }
.hero__sub { font-family: "Lay Grotesk", "DM Sans", sans-serif; font-size: max(1.04vw, 1.4rem); color: rgba(255,255,255,0.5); text-align: center; text-transform: uppercase; letter-spacing: 0.3em; margin-top: 3.2rem; }
.hero__bottom { position: relative; z-index: 2; display: flex; justify-content: space-between; align-items: flex-end; padding: 0 4.8rem 6rem; }
.hero__bottom__left { display: flex; flex-direction: column; gap: 0.8rem; }
/* FIXED: opacity raised from 0.45 to 0.7 for readable contrast over dark gradient */
.hero__contact-item { font-family: "Lay Grotesk", "DM Sans", sans-serif; font-size: max(0.833vw, 1.2rem); color: rgba(255,255,255,0.7); text-transform: uppercase; letter-spacing: 0.12em; text-decoration: none; transition: color 0.3s; }
.hero__contact-item:hover { color: #ffffff; }
.hero__scroll { display: flex; flex-direction: column; align-items: center; gap: 0.8rem; font-family: "Lay Grotesk", "DM Sans", sans-serif; color: rgba(255,255,255,0.45); font-size: max(0.833vw, 1.2rem); text-transform: uppercase; letter-spacing: 0.12em; }
.hero__bottom__right { display: flex; flex-direction: column; align-items: flex-end; gap: 0.8rem; }
/* FIXED: opacity raised from 0.45 to 0.7 for readable contrast */
.hero__social-item { font-family: "Lay Grotesk", "DM Sans", sans-serif; font-size: max(0.833vw, 1.2rem); color: rgba(255,255,255,0.7); text-transform: uppercase; letter-spacing: 0.12em; text-decoration: none; transition: color 0.3s; }
.hero__social-item:hover { color: #ffffff; }
.hero__scroll-icon { animation: bounce 1.5s ease-in-out infinite; }
@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(6px); } }
@media (max-width: 768px) { .hero__h1__line--big { font-size: 16vw; } .hero__h1__line--small { font-size: 4vw; } .hero__bottom { padding: 0 1.6rem 4rem; } }
/* FIXED: hero bottom bar hidden at 480px -- three columns collide at 320px */
@media (max-width: 480px) { .hero__bottom__left { display: none; } .hero__bottom__right { display: none; } .hero__bottom { justify-content: center; } }
</style>