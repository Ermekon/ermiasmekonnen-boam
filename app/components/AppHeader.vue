<template>
  <!-- FIXED: skip-to-content link as first focusable element for keyboard users -->
  <a href="#main-content" class="skip-link">Skip to content</a>
  <header class="app-header" :class="{ 'app-header--scrolled': scrolled }">
    <div class="app-header__inner container">
      <!-- FIXED: aria-label added -- "EM" is meaningless to screen readers -->
      <NuxtLink to="/" class="app-header__logo" aria-label="Ermias Mekonnen — Home">EM</NuxtLink>
      <!-- FIXED: aria-label on nav landmark to distinguish from footer nav -->
      <nav class="app-header__nav" aria-label="Main navigation">
        <!-- FIXED: all links changed from <a href="#"> to NuxtLink to="/#" so they work from any page -->
        <NuxtLink to="/#work">Work</NuxtLink>
        <NuxtLink to="/#services">Services</NuxtLink>
        <NuxtLink to="/#process">Process</NuxtLink>
        <NuxtLink to="/#about">About</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </nav>
      <div class="app-header__actions">
        <!-- FIXED: CTA changed from href="#contact" to NuxtLink /contact -->
        <NuxtLink to="/contact" class="app-header__cta">TALK ↗</NuxtLink>
        <!-- FIXED: aria-label + aria-expanded added to hamburger button -->
        <button class="app-header__menu-btn" @click="openNav"
          :aria-label="mobileOpen ? 'Close menu' : 'Open menu'"
          :aria-expanded="String(mobileOpen)"
          aria-controls="mobile-nav-panel"
          ref="menuBtn">
          <span></span><span></span>
        </button>
      </div>
    </div>
  </header>
  <div class="mobile-nav" :class="{ 'is-active': mobileOpen }">
    <div class="mobile-nav__bg" @click="closeNav" aria-hidden="true"></div>
    <!-- FIXED: role=dialog + aria-modal + aria-label tell AT this is a modal overlay -->
    <div class="mobile-nav__panel" id="mobile-nav-panel" role="dialog" aria-modal="true" aria-label="Navigation menu">
      <!-- FIXED: close button aria-label -- "X" is meaningless to screen readers -->
      <button class="mobile-nav__close" @click="closeNav" aria-label="Close navigation" ref="closeBtn">&#x2715;</button>
      <!-- FIXED: aria-label on mobile nav landmark -->
      <nav class="mobile-nav__links" aria-label="Mobile navigation">
        <!-- FIXED: links changed to NuxtLink so they route correctly from any page -->
        <NuxtLink to="/#work"     @click="closeNav">Work</NuxtLink>
        <NuxtLink to="/#services" @click="closeNav">Services</NuxtLink>
        <NuxtLink to="/#process"  @click="closeNav">Process</NuxtLink>
        <NuxtLink to="/#about"    @click="closeNav">About</NuxtLink>
        <NuxtLink to="/contact"   @click="closeNav">Contact</NuxtLink>
      </nav>
      <div class="mobile-nav__footer">
        <a href="mailto:emz.creativedesigns@gmail.com">emz.creativedesigns@gmail.com</a>
        <a href="tel:+251911281510">+251 911 281 510</a>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted, nextTick } from "vue"
const scrolled = ref(false)
const mobileOpen = ref(false)
const closeBtn = ref(null)
const menuBtn = ref(null)
function onScroll() { scrolled.value = window.scrollY > 50 }
// FIXED: focus trap -- focus moves to close button on open, returns to hamburger on close
async function openNav() {
  mobileOpen.value = true
  await nextTick()
  closeBtn.value?.focus()
  // FIXED: inert on page content prevents tabbing behind the open nav overlay
  document.getElementById("main-content")?.setAttribute("inert", "")
}
async function closeNav() {
  mobileOpen.value = false
  document.getElementById("main-content")?.removeAttribute("inert")
  await nextTick()
  menuBtn.value?.focus()
}
// FIXED: Escape key closes mobile nav -- standard modal keyboard behaviour
function onKeydown(e) { if (e.key === "Escape" && mobileOpen.value) closeNav() }
onMounted(() => { window.addEventListener("scroll", onScroll); window.addEventListener("keydown", onKeydown) })
onUnmounted(() => { window.removeEventListener("scroll", onScroll); window.removeEventListener("keydown", onKeydown) })
</script>
<style scoped>
.app-header { position: fixed; top: 0; left: 0; right: 0; z-index: 1000; padding: 2.4rem 0; transition: background 0.4s, padding 0.4s; }
.app-header--scrolled { background: rgba(8,8,8,0.92); backdrop-filter: blur(12px); padding: 1.6rem 0; }
.app-header__inner { display: flex; align-items: center; justify-content: space-between; }
.app-header__logo { font-size: 2rem; font-weight: 700; color: #ffffff; }
.app-header__nav { display: flex; gap: 3.2rem; }
.app-header__nav a { text-transform: uppercase; letter-spacing: 0.08em; color: #ffffff; font-size: 1.4rem; opacity: 0.8; transition: opacity 0.2s; }
.app-header__nav a:hover { opacity: 1; }
.app-header__nav a.router-link-active { opacity: 1; border-bottom: 1px solid rgba(255,255,255,0.6); padding-bottom: 0.2rem; }
.app-header__actions { display: flex; align-items: center; gap: 2rem; }
.app-header__cta { text-transform: uppercase; letter-spacing: 0.08em; color: #ffffff; font-size: 1.3rem; padding: 1.2rem 2.8rem; border: 1px solid rgba(255,255,255,0.4); border-radius: 999px; transition: border-color 0.3s, background 0.3s; white-space: nowrap; }
.app-header__cta:hover { border-color: #ffffff; background: rgba(255,255,255,0.06); }
.app-header__menu-btn { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 0.8rem; }
.app-header__menu-btn span { display: block; width: 24px; height: 1.5px; background: #ffffff; }
.mobile-nav { position: fixed; inset: 0; z-index: 2000; visibility: hidden; transition: visibility 0.6s; }
.mobile-nav.is-active { visibility: visible; }
.mobile-nav__bg { position: absolute; inset: 0; background: rgba(8,8,8,0.7); opacity: 0; transition: opacity 0.6s; }
.mobile-nav.is-active .mobile-nav__bg { opacity: 1; }
.mobile-nav__panel { position: absolute; top: 0; right: 0; width: min(400px, 90vw); height: 100%; background: #E1C8B4; padding: 6rem 4rem; transform: translateX(100%); transition: transform 0.6s cubic-bezier(0.77,0,0.175,1); display: flex; flex-direction: column; }
.mobile-nav.is-active .mobile-nav__panel { transform: translateX(0); }
.mobile-nav__close { position: absolute; top: 2.4rem; right: 2.4rem; background: none; border: none; font-size: 2rem; cursor: pointer; color: #080808; padding: 0.8rem; line-height: 1; }
.mobile-nav__links { display: flex; flex-direction: column; gap: 2rem; margin-top: 4rem; }
.mobile-nav__links a { font-size: 3.6rem; font-style: italic; color: #080808; transition: opacity 0.2s; }
.mobile-nav__links a:hover { opacity: 0.6; }
.mobile-nav__footer { margin-top: auto; display: flex; flex-direction: column; gap: 0.8rem; }
.mobile-nav__footer a { font-size: 1.3rem; color: #080808; opacity: 0.7; }
@media (max-width: 768px) { .app-header__nav { display: none; } .app-header__cta { display: none; } .app-header__menu-btn { display: flex; } }
</style>