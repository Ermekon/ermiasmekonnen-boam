<template>
  <footer class="footer" aria-label="Site footer">
    <div class="footer__inner container">
      <div class="footer__top">
        <p class="footer__line1">Let’s build</p>
        <p class="footer__line2">SOMETHING<span class="footer__arrow" aria-hidden="true">↗</span></p>
        <p class="footer__line3">GREAT.</p>
      </div>
      <div class="footer__divider"></div>
      <div class="footer__bottom">
        <div class="footer__col">
          <p class="footer__col-label">Contact</p>
          <a href="mailto:emz.creativedesigns@gmail.com" class="footer__link">emz.creativedesigns@gmail.com</a>
          <a href="tel:+251911281510" class="footer__link">+251 911 281 510</a>
        </div>
        <div class="footer__col">
          <p class="footer__col-label">Based in</p>
          <p class="footer__col-value">Addis Ababa, Ethiopia</p>
        </div>
        <div class="footer__col">
          <p class="footer__col-label">Follow</p>
          <!-- FIXED: social links wrapped in nav landmark -->
          <nav aria-label="Social media links">
            <div class="footer__social">
              <!-- FIXED: rel="noopener noreferrer" added to all target="_blank" links -- security fix -->
              <a href="https://linkedin.com/in/ermiasmekonnen" target="_blank" rel="noopener noreferrer" class="footer__social-link" aria-label="LinkedIn"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
              <a href="https://instagram.com/emz.creative" target="_blank" rel="noopener noreferrer" class="footer__social-link" aria-label="Instagram"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
              <a href="https://behance.net/ermiasmekonnen" target="_blank" rel="noopener noreferrer" class="footer__social-link" aria-label="Behance"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 1.2.836 1.98 2.101 1.98.768 0 1.23-.303 1.482-.865l2.173.914zm-9.626-3.99h5.051c-.06-1.169-.65-1.96-2.356-1.96-1.564 0-2.5.802-2.695 1.96zM8.577 7.443c.99 0 2.033.276 2.609 1.446.424.847.445 2.114.008 2.99-.418.837-1.237 1.34-2.29 1.34H5.12V7.443h3.457zm-.238 4.408c.876 0 1.32-.457 1.32-1.46 0-.98-.437-1.452-1.32-1.452H6.95v2.912h1.389zm-3.82 1.574h3.736c1.14 0 2.01.25 2.58.844.467.49.695 1.15.695 1.97 0 1.87-1.176 2.73-3.067 2.73H4.52v-5.544zm1.43 4.193h2.097c.95 0 1.54-.39 1.54-1.26 0-.84-.562-1.22-1.516-1.22H5.95v2.48z"/></svg></a>
            </div>
          </nav>
        </div>
        <div class="footer__col footer__col--right">
          <!-- FIXED: CTA changed from href="#contact" to NuxtLink /contact -->
          <NuxtLink to="/contact" class="footer__cta">Start a project →</NuxtLink>
          <p class="footer__copy">© 2026 Ermias Mekonnen</p>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped>
.footer { background: #080808; color: #ffffff; padding: 10rem 0 6rem; }
.footer__top { margin-bottom: 8rem; line-height: 0.95; }
/* FIXED: font-family changed from "Playfair Display" to "Sfizia" as primary on all three headline lines */
.footer__line1 { font-family: "Sfizia", "Playfair Display", serif; font-size: clamp(4rem, 7vw, 10rem); font-style: italic; color: rgba(255,255,255,0.4); margin-bottom: 0.5rem; }
.footer__line2 { font-family: "Sfizia", "Playfair Display", serif; font-size: clamp(6rem, 12vw, 18rem); font-weight: 700; color: #ffffff; display: flex; align-items: flex-start; gap: 1rem; line-height: 1; }
.footer__arrow { font-size: clamp(3rem, 5vw, 8rem); display: inline-block; transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1); color: rgba(255,255,255,0.4); margin-top: 0.5rem; font-weight: 400; }
.footer__line2:hover .footer__arrow { transform: translate(10%, -10%); }
.footer__line3 { font-family: "Sfizia", "Playfair Display", serif; font-size: clamp(6rem, 12vw, 18rem); font-weight: 700; color: #ffffff; line-height: 1; }
.footer__divider { height: 1px; background: rgba(255,255,255,0.1); margin: 6rem 0 4rem; }
.footer__bottom { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 4rem; align-items: start; padding-top: 0.8rem; }
.footer__bottom > * { padding-top: 0; margin-top: 0; }
/* FIXED: opacity raised from 0.3 to 0.5 -- fixes WCAG AA contrast failure */
.footer__col-label { font-size: 1.1rem; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 1.6rem; }
.footer__link { display: block; font-size: 1.4rem; color: rgba(255,255,255,0.6); margin-bottom: 1.2rem; transition: color 0.2s; }
.footer__link:hover { color: #ffffff; }
.footer__social { display: flex; flex-direction: row; gap: 2rem; margin-top: 0.4rem; }
.footer__social-link { display: flex; align-items: center; color: rgba(255,255,255,0.6); transition: color 0.2s; }
.footer__social-link:hover { color: #ffffff; }
.footer__col-value { font-size: 1.4rem; color: rgba(255,255,255,0.6); line-height: 1.6; }
.footer__col--right { display: flex; flex-direction: column; align-items: flex-end; gap: 1.6rem; }
.footer__copy { font-size: 1.2rem; color: rgba(255,255,255,0.3); }
.footer__cta { font-size: 1.4rem; color: #ffffff; border-bottom: 1px solid rgba(255,255,255,0.3); padding-bottom: 0.4rem; transition: border-color 0.2s; }
.footer__cta:hover { border-color: #ffffff; }
@media (max-width: 1024px) { .footer__bottom { grid-template-columns: 1fr 1fr; gap: 4rem 3.2rem; } .footer__col--right { align-items: flex-start; } }
@media (max-width: 768px) { .footer__bottom { grid-template-columns: 1fr; gap: 3.2rem; } .footer__line2, .footer__line3 { font-size: clamp(4rem, 10vw, 10rem); } }
/* FIXED: "SOMETHING" overflows at 320px -- clamp minimum lowered */
@media (max-width: 400px) { .footer__line2, .footer__line3 { font-size: clamp(3.2rem, 9vw, 6rem); } }
</style>