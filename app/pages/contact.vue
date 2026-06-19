<template>
  <div class="contact-page">
    <AppHeader />
    <!-- FIXED: id="main-content" added as skip link target -->
    <main id="main-content">
      <section class="contact-hero">
        <div class="contact-hero__inner">
          <p class="contact-hero__label">Start a project</p>
          <h1 class="contact-hero__heading"><em>The brief</em><br>starts here.</h1>
          <div class="contact-hero__actions">
            <NuxtLink to="/start-a-project?type=packaging" class="contact-btn">
              <span class="contact-btn__index" aria-hidden="true">01</span>
              <span class="contact-btn__text">I have a packaging project</span>
              <!-- FIXED: arrow glyphs aria-hidden -- screen readers announce "north east arrow" otherwise -->
              <span class="contact-btn__arrow" aria-hidden="true">↗</span>
            </NuxtLink>
            <NuxtLink to="/start-a-project?type=brand" class="contact-btn">
              <span class="contact-btn__index" aria-hidden="true">02</span>
              <span class="contact-btn__text">I need a brand identity</span>
              <span class="contact-btn__arrow" aria-hidden="true">↗</span>
            </NuxtLink>
            <a href="mailto:emz.creativedesigns@gmail.com?subject=Lets%20Talk" class="contact-btn">
              <span class="contact-btn__index" aria-hidden="true">03</span>
              <span class="contact-btn__text">Let’s just talk</span>
              <span class="contact-btn__arrow" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </main>
    <AppFooter />
  </div>
</template>
<script setup>
useHead({ title: 'Contact — Ermias Mekonnen' })
</script>
<style scoped>
.contact-page { background: #080808; display: flex; flex-direction: column; min-height: 100vh; }
main { display: flex; flex-direction: column; flex: 1; }
.contact-hero { width: 100%; padding: 16rem 4.8rem 6rem; display: flex; flex-direction: column; justify-content: space-between; flex: 1; min-height: 100vh; }
.contact-hero__inner { width: 100%; }
.contact-hero__label { font-family: "Lay Grotesk", "DM Sans", sans-serif; font-size: max(1.04vw, 1.4rem); color: #E1C8B4; letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 3rem; }
.contact-hero__heading { font-family: "Sfizia", "Playfair Display", serif; font-size: clamp(5rem, 9vw, 14rem); font-weight: 400; color: #ffffff; line-height: 0.95; margin: 0 0 2.4rem; }
.contact-hero__heading em { font-style: italic; color: #E1C8B4; }
.contact-hero__actions { display: flex; flex-direction: column; border-top: 1px solid rgba(255,255,255,0.12); }
.contact-btn { display: flex; align-items: center; gap: 3.2rem; padding: 2.4rem 0; border-bottom: 1px solid rgba(255,255,255,0.12); text-decoration: none; transition: gap 0.4s cubic-bezier(0.165, 0.84, 0.44, 1); }
/* FIXED: hover wrapped in pointer:fine -- prevents stuck gap state on touch devices */
@media (hover: hover) and (pointer: fine) {
  .contact-btn:hover { gap: 4.8rem; }
  .contact-btn:hover .contact-btn__index { color: #E1C8B4; }
  .contact-btn:hover .contact-btn__text { color: #E1C8B4; }
  .contact-btn:hover .contact-btn__arrow { opacity: 1; transform: translate(0, 0); }
}
.contact-btn__index { font-family: "Lay Grotesk", "DM Sans", sans-serif; font-size: max(0.833vw, 1.2rem); color: rgba(255,255,255,0.3); letter-spacing: 0.05em; min-width: 2.4rem; transition: color 0.3s; }
.contact-btn__text { font-family: "Sfizia", "Playfair Display", serif; font-size: clamp(4rem, 7vw, 11rem); font-style: italic; color: #ffffff; flex: 1; transition: color 0.3s; }
.contact-btn__arrow { font-size: clamp(2rem, 2.5vw, 3.6rem); color: #E1C8B4; line-height: 1; transform: translate(-6px, 6px); opacity: 0; transition: opacity 0.3s, transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1); }
@media (max-width: 768px) { .contact-hero { padding: 12rem 1.6rem 8rem; } .contact-hero__heading { margin-bottom: 5rem; } .contact-btn { padding: 2.2rem 0; gap: 2rem; } .contact-btn__index { display: none; } }
/* FIXED: button text reduced at 480px -- was overflowing at 320px */
@media (max-width: 480px) { .contact-btn__text { font-size: clamp(2.4rem, 6vw, 4rem); } }
</style>
