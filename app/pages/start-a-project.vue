<template>
  <div class="sap-page"><AppHeader />
  <main id="main-content">
    <section class="sap-hero"><div class="sap-hero__inner">
      <NuxtLink to="/contact" class="sap-back"><span aria-hidden="true">←</span><span>Back</span></NuxtLink>
      <p class="sap-label">{{ typeLabel }}</p>
      <h1 class="sap-heading"><em>Tell me</em><br>about it.</h1>
    </div></section>
    <section class="sap-form-section"><form class="sap-form" @submit.prevent="handleSubmit" novalidate>
      <div class="sap-group"><p class="sap-group__index" aria-hidden="true">01</p><div class="sap-group__fields"><div class="sap-row">
        <div class="sap-field"><label class="sap-field__label" for="sap-name">Name</label><input id="sap-name" v-model="form.name" class="sap-field__input" type="text" placeholder="Your full name" required /></div>
        <div class="sap-field"><label class="sap-field__label" for="sap-email">Email</label><input id="sap-email" v-model="form.email" class="sap-field__input" type="email" placeholder="your@email.com" required /></div>
      </div></div></div>
      <div class="sap-group"><p class="sap-group__index" aria-hidden="true">02</p><div class="sap-group__fields"><div class="sap-field"><label class="sap-field__label" for="sap-phone">Phone number</label><input id="sap-phone" v-model="form.phone" class="sap-field__input" type="tel" placeholder="+251 or international" /></div></div></div>
      <div class="sap-group"><p class="sap-group__index" aria-hidden="true">03</p><div class="sap-group__fields"><div class="sap-row">
        <div class="sap-field"><label class="sap-field__label" for="sap-company">Company / Brand name</label><input id="sap-company" v-model="form.company" class="sap-field__input" type="text" placeholder="What are we building for?" /></div>
        <div class="sap-field"><label class="sap-field__label" for="sap-country">Country the brand is based in</label><input id="sap-country" v-model="form.country" class="sap-field__input" type="text" placeholder="Ethiopia, UAE, UK..." /></div>
      </div></div></div>
      <div class="sap-group"><p class="sap-group__index" aria-hidden="true">04</p><div class="sap-group__fields"><div class="sap-field" role="group" aria-labelledby="lb-hasbrand"><p class="sap-field__label" id="lb-hasbrand">Have you already created a brand?</p><div class="sap-options"><button v-for="opt in brandOptions" :key="opt" type="button" :class="['sap-option',{active:form.hasBrand===opt}]" :aria-pressed="form.hasBrand===opt?'true':'false'" @click="form.hasBrand=opt">{{opt}}</button></div></div></div></div>
      <div class="sap-group"><p class="sap-group__index" aria-hidden="true">05</p><div class="sap-group__fields"><div class="sap-field" role="group" aria-labelledby="lb-purpose"><p class="sap-field__label" id="lb-purpose">What is the purpose of this project?</p><div class="sap-options"><button v-for="opt in purposeOptions" :key="opt" type="button" :class="['sap-option',{active:form.purpose===opt}]" :aria-pressed="form.purpose===opt?'true':'false'" @click="form.purpose=opt">{{opt}}</button></div></div></div></div>
      <div class="sap-group"><p class="sap-group__index" aria-hidden="true">06</p><div class="sap-group__fields"><div class="sap-field" role="group" aria-labelledby="lb-markets"><p class="sap-field__label" id="lb-markets">Target market <span class="sap-multi">(select all that apply)</span></p><div class="sap-options"><button v-for="opt in marketOptions" :key="opt" type="button" :class="['sap-option',{active:form.markets.includes(opt)}]" :aria-pressed="form.markets.includes(opt)?'true':'false'" @click="toggleArray(form.markets,opt)">{{opt}}</button></div></div></div></div>
      <div class="sap-group"><p class="sap-group__index" aria-hidden="true">07</p><div class="sap-group__fields"><div class="sap-field" role="group" aria-labelledby="lb-services"><p class="sap-field__label" id="lb-services">What do you need? <span class="sap-multi">(select all that apply)</span></p><div class="sap-options"><button v-for="opt in servicesOptions" :key="opt" type="button" :class="['sap-option',{active:form.services.includes(opt)}]" :aria-pressed="form.services.includes(opt)?'true':'false'" @click="toggleArray(form.services,opt)">{{opt}}</button></div></div></div></div>
      <div class="sap-group"><p class="sap-group__index" aria-hidden="true">08</p><div class="sap-group__fields"><div class="sap-field" role="group" aria-labelledby="lb-pos"><p class="sap-field__label" id="lb-pos">Positioning</p><div class="sap-options"><button v-for="opt in positioningOptions" :key="opt" type="button" :class="['sap-option',{active:form.positioning===opt}]" :aria-pressed="form.positioning===opt?'true':'false'" @click="form.positioning=opt">{{opt}}</button></div></div></div></div>
      <div class="sap-group"><p class="sap-group__index" aria-hidden="true">09</p><div class="sap-group__fields"><div class="sap-field" role="group" aria-labelledby="lb-dist"><p class="sap-field__label" id="lb-dist">Distribution channel <span class="sap-multi">(select all that apply)</span></p><div class="sap-options"><button v-for="opt in distributionOptions" :key="opt" type="button" :class="['sap-option',{active:form.distribution.includes(opt)}]" :aria-pressed="form.distribution.includes(opt)?'true':'false'" @click="toggleArray(form.distribution,opt)">{{opt}}</button></div></div></div></div>
      <div class="sap-group"><p class="sap-group__index" aria-hidden="true">10</p><div class="sap-group__fields"><div class="sap-row">
        <div class="sap-field" role="group" aria-labelledby="lb-timeline"><p class="sap-field__label" id="lb-timeline">Timeline</p><div class="sap-options"><button v-for="opt in timelineOptions" :key="opt" type="button" :class="['sap-option',{active:form.timeline===opt}]" :aria-pressed="form.timeline===opt?'true':'false'" @click="form.timeline=opt">{{opt}}</button></div></div>
        <div class="sap-field"><label class="sap-field__label" for="sap-deadline">Deadline <span class="sap-optional">(if known)</span></label><input id="sap-deadline" v-model="form.deadline" class="sap-field__input" type="date" /></div>
      </div></div></div>
      <div class="sap-group"><p class="sap-group__index" aria-hidden="true">11</p><div class="sap-group__fields"><div class="sap-field" role="group" aria-labelledby="lb-budget"><p class="sap-field__label" id="lb-budget">Budget</p><div class="sap-options"><button v-for="opt in budgetOptions" :key="opt" type="button" :class="['sap-option',{active:form.budget===opt}]" :aria-pressed="form.budget===opt?'true':'false'" @click="form.budget=opt">{{opt}}</button></div></div></div></div>
      <div class="sap-group"><p class="sap-group__index" aria-hidden="true">12</p><div class="sap-group__fields"><div class="sap-field" role="group" aria-labelledby="lb-cd"><p class="sap-field__label" id="lb-cd">Have you worked with a creative director before?</p><div class="sap-options"><button v-for="opt in cdOptions" :key="opt" type="button" :class="['sap-option',{active:form.workedWithCD===opt}]" :aria-pressed="form.workedWithCD===opt?'true':'false'" @click="form.workedWithCD=opt">{{opt}}</button></div></div></div></div>
      <div class="sap-group"><p class="sap-group__index" aria-hidden="true">13</p><div class="sap-group__fields"><div class="sap-field"><label class="sap-field__label" for="sap-references">Reference products and sources of inspiration</label><textarea id="sap-references" v-model="form.references" class="sap-field__textarea" rows="3" placeholder="Brands, products, URLs, moods you admire..."></textarea></div></div></div>
      <div class="sap-group"><p class="sap-group__index" aria-hidden="true">14</p><div class="sap-group__fields"><div class="sap-field"><label class="sap-field__label" for="sap-message">Tell me more about the project <span class="sap-optional">(optional)</span></label><textarea id="sap-message" v-model="form.message" class="sap-field__textarea" rows="5" placeholder="Any context, constraints, or vision you want to share..."></textarea></div></div></div>
      <div class="sap-submit-row">
        <button type="submit" class="sap-submit" :disabled="submitting"><span>{{ submitting ? "Sending…" : "Send the brief" }}</span><span class="sap-submit__arrow" aria-hidden="true">→</span></button>
        <p class="sap-note">I respond within 24 hours.</p>
      </div>
      <p v-if="submitError" class="sap-error" role="alert">Something went wrong. Please email <a href="mailto:emz.creativedesigns@gmail.com">emz.creativedesigns@gmail.com</a> directly.</p>
    </form></section>
  </main><AppFooter /></div>
</template>
<script setup>
const route=useRoute();const router=useRouter()
const typeParam=computed(()=>route.query.type)
const typeLabel=computed(()=>{if(typeParam.value==="packaging")return "Packaging project";if(typeParam.value==="brand")return "Brand identity project";return "New project"})
const brandOptions=["Yes","No"]
const purposeOptions=["Create a new brand","Rework existing brand","New product range","Extend existing range"]
const marketOptions=["Ethiopia","East Africa","Middle East","Europe","North America","Global"]
const servicesOptions=["Brand Strategy","Brand Identity","Packaging Design","Label Design","Illustrations","Key Visual","Photography Direction","Brand Guidelines"]
const positioningOptions=["Entry level","Mid-range","Premium","Luxury"]
const distributionOptions=["Local retail","Export","Hospitality","E-commerce","All channels"]
const timelineOptions=["ASAP","1–3 months","Flexible"]
const budgetOptions=["Under $5k","$5k–$15k","$15k–$30k","$30k+"]
const cdOptions=["Yes","No"]
const form=reactive({name:"",email:"",phone:"",company:"",country:"",hasBrand:"",purpose:"",markets:[],services:[],positioning:"",distribution:[],timeline:"",deadline:"",budget:"",workedWithCD:"",references:"",message:""})
function toggleArray(arr,val){const i=arr.indexOf(val);if(i===-1)arr.push(val);else arr.splice(i,1)}
const submitting=ref(false);const submitError=ref(false)
async function handleSubmit(){
  const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(!emailRegex.test(form.email)){submitError.value="Please enter a valid email address.";return;}if(form.phone&&!/^[\d\s+\-()]{7,20}$/.test(form.phone)){submitError.value="Please enter a valid phone number.";return;}submitting.value=true;submitError.value=false
  try{
    await fetch(""https://formspree.io/f/" + useRuntimeConfig().public.formspreeId",{method:"POST",headers:{"Content-Type":"application/json","Accept":"application/json"},body:JSON.stringify({...form,projectType:typeParam.value,source:"full-brief",_gotcha:""})})
    sessionStorage.setItem("brief-submitted","1")
    router.push("/thank-you")
  }catch(e){submitError.value=true;submitting.value=false}
}
useHead({title:"Start a Project — Ermias Mekonnen"})
</script>
<style scoped>
.sap-page{background:#080808;min-height:100vh;display:flex;flex-direction:column}
main{flex:1}
.sap-hero{padding:14rem 4.8rem 6rem;border-bottom:1px solid rgba(255,255,255,0.08)}
.sap-hero__inner{max-width:120rem}
.sap-back{display:inline-flex;align-items:center;gap:0.8rem;font-family:"Lay Grotesk","DM Sans",sans-serif;font-size:1.4rem;color:rgba(255,255,255,0.4);text-decoration:none;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:4rem;transition:color 0.3s}
.sap-back:hover{color:#E1C8B4}
.sap-label{font-family:"Lay Grotesk","DM Sans",sans-serif;font-size:max(1.04vw,1.4rem);color:#E1C8B4;letter-spacing:0.15em;text-transform:uppercase;margin-bottom:2rem}
.sap-heading{font-family:"Sfizia","Playfair Display",serif;font-size:clamp(5rem,10vw,14rem);font-weight:400;color:#ffffff;line-height:0.95;margin:0}
.sap-heading em{font-style:italic;color:#E1C8B4}
.sap-form-section{padding:0 4.8rem 16rem}
.sap-form{max-width:96rem;display:flex;flex-direction:column}
.sap-group{display:grid;grid-template-columns:6rem 1fr;gap:3.2rem;padding:5.6rem 0;border-bottom:1px solid rgba(255,255,255,0.08)}
.sap-group__index{font-family:"Lay Grotesk","DM Sans",sans-serif;font-size:1.2rem;color:rgba(255,255,255,0.2);letter-spacing:0.1em;padding-top:0.4rem}
.sap-group__fields{display:flex;flex-direction:column;gap:0}
.sap-row{display:grid;grid-template-columns:1fr 1fr;gap:4.8rem}
.sap-field{display:flex;flex-direction:column;gap:2rem}
.sap-field__label{font-family:"Lay Grotesk","DM Sans",sans-serif;font-size:max(0.833vw,1.2rem);color:rgba(255,255,255,0.4);letter-spacing:0.12em;text-transform:uppercase}
.sap-optional,.sap-multi{color:rgba(255,255,255,0.2);text-transform:none;letter-spacing:0;font-size:1.1rem}
.sap-field__input,.sap-field__textarea{background:transparent;border:none;border-bottom:1px solid rgba(255,255,255,0.15);color:#ffffff;font-family:"Sfizia","Playfair Display",serif;font-size:clamp(1.8rem,2vw,2.8rem);font-style:italic;padding:1.6rem 0;outline:none;width:100%;resize:none;transition:border-color 0.3s}
.sap-field__input[type="date"]{color-scheme:dark}
.sap-field__input::placeholder,.sap-field__textarea::placeholder{color:rgba(255,255,255,0.15);font-style:italic}
.sap-field__input:focus,.sap-field__textarea:focus{border-bottom-color:#E1C8B4}
.sap-options{display:flex;flex-wrap:wrap;gap:1.2rem;margin-top:0.4rem}
.sap-option{font-family:"Lay Grotesk","DM Sans",sans-serif;font-size:max(0.833vw,1.2rem);color:rgba(255,255,255,0.45);background:transparent;border:1px solid rgba(255,255,255,0.12);border-radius:9999px;padding:1.1rem 2.8rem;cursor:pointer;letter-spacing:0.08em;text-transform:uppercase;transition:all 0.25s cubic-bezier(0.165,0.84,0.44,1)}
.sap-option:hover{color:#ffffff;border-color:rgba(255,255,255,0.35)}
.sap-option.active,.sap-option[aria-pressed="true"]{color:#080808;background:#E1C8B4;border-color:#E1C8B4}
.sap-submit-row{display:flex;align-items:center;gap:4rem;padding:6rem 0 0 6rem}
.sap-submit{display:inline-flex;align-items:center;gap:1.6rem;font-family:"Lay Grotesk","DM Sans",sans-serif;font-size:max(1.04vw,1.4rem);color:#080808;background:#E1C8B4;border:none;border-radius:16px;padding:1.8rem 3.2rem;cursor:pointer;letter-spacing:0.08em;text-transform:uppercase;transition:background 0.3s}
.sap-submit:hover{background:#ffffff}
.sap-submit:hover .sap-submit__arrow{transform:translate(4px,-4px)}
.sap-submit__arrow{display:inline-block;transition:transform 0.3s cubic-bezier(0.165,0.84,0.44,1)}
.sap-submit:disabled{opacity:0.5;cursor:not-allowed}
.sap-note{font-family:"Lay Grotesk","DM Sans",sans-serif;font-size:1.4rem;color:rgba(255,255,255,0.3)}
.sap-error{font-size:1.4rem;color:#ff6b6b;margin-top:2rem;line-height:1.5}
.sap-error a{color:#ff6b6b;text-decoration:underline}
@media(max-width:768px){.sap-hero{padding:12rem 1.6rem 4rem}.sap-form-section{padding:0 1.6rem 10rem}.sap-group{grid-template-columns:1fr;gap:1.6rem}.sap-group__index{display:none}.sap-row{grid-template-columns:1fr;gap:4rem}.sap-submit-row{flex-direction:column;align-items:flex-start;gap:2rem;padding-left:0}}
</style>