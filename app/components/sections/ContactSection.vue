<template>
  <!-- FIXED: aria-label added to section landmark -->
  <section id="contact" class="contact" aria-label="Contact">
    <div class="container">
      <div class="contact__header">
        <p class="contact__label">Contact</p>
        <h2 class="contact__heading">You Have A Brand That Deserves To Be Chosen.</h2>
        <p class="contact__sub">Let’s Make Sure It Is.</p>
      </div>
      <div class="contact__grid">
        <div class="contact__left">
          <p class="contact__intro">Every great brand started with a conversation. Not a brief. Not a budget. A conversation about what the brand needed to become.</p>
          <div class="contact__scenarios">
            <div class="contact__scenario"><p class="contact__scenario__title">You are launching something new.</p><p class="contact__scenario__desc">A product. A brand. A range. And you want to get it right from the beginning instead of fixing it later.</p></div>
            <div class="contact__scenario"><p class="contact__scenario__title">You are refreshing something existing.</p><p class="contact__scenario__desc">Your brand has grown but your packaging and identity have not kept up. You know something needs to change.</p></div>
            <div class="contact__scenario"><p class="contact__scenario__title">You have a specific project.</p><p class="contact__scenario__desc">A campaign. A label redesign. An identity system. Something defined that you need executed at the highest level.</p></div>
          </div>
          <div class="contact__info">
            <div class="contact__info__item"><span class="contact__info__label">Email</span><a href="mailto:emz.creativedesigns@gmail.com" class="contact__info__value">emz.creativedesigns@gmail.com</a></div>
            <div class="contact__info__item"><span class="contact__info__label">Phone</span><a href="tel:+251911281510" class="contact__info__value">+251 911 281 510</a></div>
            <div class="contact__info__item"><span class="contact__info__label">Based in</span><span class="contact__info__value">Addis Ababa, Ethiopia</span></div>
          </div>
        </div>
        <div class="contact__right">
          <form class="contact__form" @submit.prevent="handleSubmit" novalidate>
            <div class="contact__field">
              <!-- FIXED: for/id added to all labels+inputs -- screen readers announce label on input focus -->
              <label class="contact__field__label" for="contact-name">Your name</label>
              <input id="contact-name" v-model="form.name" type="text" class="contact__input" placeholder="Abebe Girma" required />
            </div>
            <div class="contact__field">
              <label class="contact__field__label" for="contact-brand">Your brand or company</label>
              <input id="contact-brand" v-model="form.brand" type="text" class="contact__input" placeholder="Your brand name" required />
            </div>
            <div class="contact__field">
              <label class="contact__field__label" for="contact-message">What you are working on</label>
              <textarea id="contact-message" v-model="form.message" class="contact__textarea" placeholder="Tell me about your project" rows="6" required></textarea>
            </div>
            <button type="submit" class="contact__submit" :disabled="submitted || submitting">
              <span v-if="submitting">Sending…</span>
              <span v-else-if="!submitted">Send Message →</span>
              <span v-else>Message Sent ✓</span>
            </button>
            <!-- FIXED: error state added -- previously catch() was silent, user had no failure feedback -->
            <p v-if="submitError" class="contact__error" role="alert">Something went wrong. Please email <a href="mailto:emz.creativedesigns@gmail.com">emz.creativedesigns@gmail.com</a> directly.</p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, reactive } from "vue"
const submitted = ref(false)
const submitting = ref(false)
const submitError = ref(false)
const form = reactive({ name: "", brand: "", message: "" })
async function handleSubmit() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(form.value.email)) {
      submitError.value = 'Please enter a valid email address.'
      return
    }
    submitting.value = true; submitError.value = false
  try {
    // FIXED: source field added to distinguish from full-brief form in Formspree inbox
    await fetch("`https://formspree.io/f/${useRuntimeConfig().public.formspreeId}`", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, source: "homepage-contact",
        _gotcha: '', }) })
    submitted.value = true; form.name = ""; form.brand = ""; form.message = ""
  } catch (e) { submitError.value = true }
  finally { submitting.value = false }
}
</script>
<style scoped>
.contact { background: #080808; color: #ffffff; padding: 14rem 0; }
.contact__header { margin-bottom: 8rem; }
.contact__label { font-size: 1.2rem; color: rgba(255,255,255,0.3); text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 2.4rem; }
.contact__heading { font-size: clamp(3.2rem, 4.5vw, 6.4rem); font-weight: 400; line-height: 1.1; margin-bottom: 1.6rem; max-width: 20ch; }
/* FIXED: font-family changed from "Playfair Display" to "Sfizia" as primary */
.contact__sub { font-size: clamp(2rem, 3vw, 4rem); color: rgba(255,255,255,0.4); font-style: italic; font-family: "Sfizia", "Playfair Display", serif; }
.contact__grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10rem; align-items: start; }
.contact__left { display: flex; flex-direction: column; gap: 5.6rem; }
.contact__intro { font-size: 1.8rem; color: rgba(255,255,255,0.6); line-height: 1.8; }
.contact__scenarios { display: flex; flex-direction: column; gap: 3.2rem; }
.contact__scenario { border-left: 2px solid rgba(255,255,255,0.1); padding-left: 2.4rem; transition: border-color 0.3s; }
.contact__scenario:hover { border-color: rgba(255,255,255,0.4); }
.contact__scenario__title { font-size: 1.6rem; font-weight: 500; color: #ffffff; margin-bottom: 0.8rem; }
.contact__scenario__desc { font-size: 1.4rem; color: rgba(255,255,255,0.5); line-height: 1.7; }
.contact__info { display: flex; flex-direction: column; gap: 2rem; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 4rem; }
.contact__info__item { display: flex; flex-direction: column; gap: 0.4rem; }
.contact__info__label { font-size: 1.1rem; color: rgba(255,255,255,0.3); text-transform: uppercase; letter-spacing: 0.1em; }
.contact__info__value { font-size: 1.6rem; color: rgba(255,255,255,0.7); transition: color 0.2s; }
a.contact__info__value:hover { color: #ffffff; }
.contact__right { position: sticky; top: 12rem; }
.contact__form { display: flex; flex-direction: column; gap: 3.2rem; }
.contact__field { display: flex; flex-direction: column; gap: 1rem; }
.contact__field__label { font-size: 1.2rem; color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 0.08em; }
.contact__input, .contact__textarea { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); border-radius: 1.2rem; padding: 1.6rem 2rem; font-size: 1.6rem; color: #ffffff; font-family: inherit; transition: border-color 0.3s; width: 100%; resize: none; }
.contact__input::placeholder, .contact__textarea::placeholder { color: rgba(255,255,255,0.2); }
.contact__input:focus, .contact__textarea:focus { outline: none; border-color: rgba(255,255,255,0.3); }
/* FIXED: focus-visible border added -- keyboard users can see which field is active */
.contact__input:focus-visible, .contact__textarea:focus-visible { outline: 2px solid #E1C8B4; outline-offset: 2px; }
.contact__submit { background: #ffffff; color: #080808; border: none; border-radius: 1.2rem; padding: 2rem 3.2rem; font-size: 1.6rem; font-weight: 500; cursor: pointer; transition: background 0.3s; align-self: flex-start; font-family: inherit; }
.contact__submit:hover { background: rgba(255,255,255,0.85); }
.contact__submit:disabled { background: rgba(255,255,255,0.2); color: rgba(255,255,255,0.5); cursor: default; }
.contact__error { font-size: 1.4rem; color: #ff6b6b; margin-top: 0.8rem; line-height: 1.5; }
.contact__error a { color: #ff6b6b; text-decoration: underline; }
@media (max-width: 1024px) { .contact__grid { grid-template-columns: 1fr; gap: 6rem; } .contact__right { position: static; } }
</style>