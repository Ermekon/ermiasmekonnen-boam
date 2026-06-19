<template>
  <!-- FIXED: aria-label added to section landmark -->
  <section id="about" class="about" aria-label="About">
    <div class="container">
      <div class="about__header">
        <p class="about__label">About</p>
        <h2 class="about__heading">The Person Behind The Brands.</h2>
      </div>
      <div class="about__grid">
        <div class="about__left">
          <div class="about__photo">
            <!--
              TODO: Replace with real photo before go-live.
              <img src="/images/ermias-portrait.jpg" alt="Ermias Mekonnen, Brand and Packaging Creative Director" style="width:100%;height:100%;object-fit:cover" />
              Recommended: 800x1067px (3:4 ratio). Remove placeholder div below.
            -->
            <div class="about__photo__placeholder" aria-hidden="true">EM</div>
          </div>
        </div>
        <div class="about__right">
          <div class="about__belief">
            <p class="about__belief__heading">I believe most brands are invisible.</p>
            <p>Not because they have bad products. Not because they have bad teams. But because nobody stopped to ask the most important question in branding:</p>
            <p class="about__belief__question">“What does this need to make someone feel in three seconds?”</p>
            <p>That question has guided every project I have worked on for the last 12 years. From a small soap label on a shelf to a campaign seen across the continent.</p>
          </div>
          <div class="about__bio">
            <p>For over twelve years I have worked at the intersection of design and business — helping brands communicate who they are through every visual touchpoint.</p>
            <p>Packaging that stops people on shelves. Identities that make brands recognizable across markets. Campaigns that move people to act.</p>
            <p class="about__bio__emphasis">Good design is never about what looks beautiful. It is about what works.</p>
          </div>
          <a href="#contact" class="about__cta">If that sounds like what you need — Let’s talk →</a>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup></script>
<style scoped>
.about { background: #f5f0eb; color: #080808; padding: 14rem 0; }
.about__header { margin-bottom: 8rem; }
.about__label { font-size: 1.2rem; color: rgba(8,8,8,0.3); text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 2.4rem; }
.about__heading { font-size: clamp(3.6rem, 5vw, 7rem); font-weight: 400; line-height: 1.1; color: #080808; }
.about__grid { display: grid; grid-template-columns: 1fr 1.6fr; gap: 10rem; align-items: start; }
.about__left { position: sticky; top: 12rem; }
.about__photo { width: 100%; aspect-ratio: 3/4; background: rgba(8,8,8,0.08); border-radius: 1.6rem; overflow: hidden; display: flex; align-items: center; justify-content: center; }
/* FIXED: font-family changed from "Playfair Display" to "Sfizia" as primary */
.about__photo__placeholder { font-family: "Sfizia", "Playfair Display", serif; font-size: 6rem; font-weight: 700; color: rgba(8,8,8,0.15); }
.about__right { display: flex; flex-direction: column; gap: 5.6rem; }
.about__belief { display: flex; flex-direction: column; gap: 2rem; }
/* FIXED: font-family changed from "Playfair Display" to "Sfizia" as primary */
.about__belief__heading { font-size: clamp(2.4rem, 3vw, 3.6rem); font-weight: 400; font-family: "Sfizia", "Playfair Display", serif; line-height: 1.2; color: #080808; }
.about__belief p { font-size: 1.6rem; color: rgba(8,8,8,0.6); line-height: 1.8; text-align: justify; }
/* FIXED: font-family changed from "Playfair Display" to "Sfizia" as primary */
.about__belief__question { font-size: 2rem !important; font-style: italic; color: #080808 !important; font-family: "Sfizia", "Playfair Display", serif; border-left: 3px solid rgba(8,8,8,0.2); padding-left: 2.4rem; margin: 1.6rem 0; }
.about__bio { display: flex; flex-direction: column; gap: 2rem; border-top: 1px solid rgba(8,8,8,0.1); padding-top: 4rem; }
.about__bio p { font-size: 1.6rem; color: rgba(8,8,8,0.6); line-height: 1.8; text-align: justify; }
.about__bio__emphasis { font-size: 2rem !important; color: #080808 !important; font-weight: 500; }
.about__cta { font-size: 1.8rem; color: #080808; border-bottom: 1px solid rgba(8,8,8,0.3); padding-bottom: 0.4rem; align-self: flex-start; transition: border-color 0.2s; }
.about__cta:hover { border-color: #080808; }
@media (max-width: 1024px) { .about__grid { grid-template-columns: 1fr; gap: 6rem; } .about__left { position: static; } }
/* FIXED: spacing reduced at 480px -- 5.6rem gaps excessive on narrow screens */
@media (max-width: 480px) { .about__right { gap: 3.2rem; } .about { padding: 8rem 0; } }
</style>