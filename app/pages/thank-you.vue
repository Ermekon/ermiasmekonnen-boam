<template>
  <div>
    <AppHeader />
    <!-- FIXED: id="main-content" added as skip link target -->
    <main class="thankyou" id="main-content">
      <div class="container">
        <div class="thankyou__inner">
          <p class="thankyou__label">Brief received</p>
          <h1 class="thankyou__heading">Thank you.</h1>
          <p class="thankyou__sub">I will be in touch within 24 hours.</p>
          <!-- FIXED: <a href="/"> replaced with NuxtLink -- prevents full page reload -->
          <NuxtLink to="/" class="thankyou__back">← Back to home</NuxtLink>
        </div>
      </div>
    </main>
    <AppFooter />
  </div>
</template>
<script setup>
// FIXED: useHead added -- page was inheriting wrong default title
useHead({ title: 'Thank You — Ermias Mekonnen' })
// FIXED: direct URL guard -- redirect home if user did not arrive via form submission
onMounted(() => { if (!sessionStorage.getItem('brief-submitted')) navigateTo('/') })
</script>
<style scoped>
.thankyou { background: #080808; min-height: 100vh; display: flex; align-items: center; padding: 14rem 0; }
.thankyou__inner { display: flex; flex-direction: column; gap: 2.4rem; }
.thankyou__label { font-size: 1.2rem; color: rgba(255,255,255,0.3); text-transform: uppercase; letter-spacing: 0.15em; }
/* FIXED: font-family changed from "Playfair Display" to "Sfizia" as primary */
.thankyou__heading { font-size: clamp(6rem, 12vw, 16rem); font-weight: 400; font-style: italic; color: #E1C8B4; line-height: 1; font-family: "Sfizia", "Playfair Display", serif; }
.thankyou__sub { font-size: 2rem; color: rgba(255,255,255,0.5); }
.thankyou__back { font-size: 1.6rem; color: rgba(255,255,255,0.4); margin-top: 2rem; transition: color 0.2s; }
.thankyou__back:hover { color: #ffffff; }
</style>
