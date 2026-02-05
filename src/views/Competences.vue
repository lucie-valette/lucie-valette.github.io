<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Données techniques
const hardSkills = [
  { name: 'HTML / CSS', level: '90%' },
  { name: 'SQL', level: '85%' },
  { name: 'Python', level: '80%' },
  { name: 'PL / SQL', level: '80%' },
  { name: 'C++', level: '75%' },
  { name: 'Java', level: '75%' },
  { name: 'PHP', level: '70%' },
  { name: 'C', level: '60%' },
  { name: 'Bash script', level: '50%' },
  { name: 'Assembleur', level: '45%' }
]

// Environnements
const environments = [
  'Visual Studio Code', 'IntelliJ', 'CLion', 'PHPStorm',
  'Spyder', 'PhpMyAdmin', 'Oracle', 'Postgresql', 'Qt Creator'
]

// Soft Skills
const softSkills = [
  { name: "Adaptabilité", desc: "Capacité à s'ajuster rapidement à de nouveaux environnements d'apprentissage." },
  { name: "Sens du détail", desc: "Rigueur dans la conception et le développement d'applications." },
  { name: "Autonomie", desc: "Aptitude à mener des projets complexes en solo." },
  { name: "Esprit d'équipe", desc: "Collaboration efficace lors de projets de groupe." }
]

onMounted(() => {
  // Animation des barres de progression
  gsap.utils.toArray('.progress-fill').forEach((bar: any) => {
    const targetWidth = bar.getAttribute('data-width');
    gsap.to(bar, {
      width: targetWidth,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: bar,
        start: "top 95%",
      }
    })
  })

  // Animation d'apparition
  gsap.from(".reveal", {
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.15,
    scrollTrigger: {
      trigger: ".skills-section",
      start: "top 85%",
    }
  })
})
</script>

<template>
  <section class="skills-section">
    <div class="container">

      <div class="header-glitch reveal">
        <h2 class="section-title">HARD SKILLS</h2>
        <h3 class="section-subtitle">Langages de programmation</h3>
      </div>

      <div class="skills-grid reveal">
        <div v-for="skill in hardSkills" :key="skill.name" class="skill-card">
          <div class="skill-info">
            <span class="skill-name">{{ skill.name }}</span>
            <span class="skill-perc">{{ skill.level }}</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill" :data-width="skill.level"></div>
          </div>
        </div>
      </div>

      <div class="env-section reveal">
        <h3 class="section-subtitle">Environnement de développement</h3>
        <div class="envs-container">
          <div v-for="env in environments" :key="env" class="env-tag">
            {{ env }}
          </div>
        </div>
      </div>

      <div class="header-glitch reveal">
        <h2 class="section-title">SOFT SKILLS</h2>
        <div class="soft-grid">
          <div v-for="soft in softSkills" :key="soft.name" class="soft-card">
            <h4 class="soft-name">{{ soft.name }}</h4>
            <p class="soft-desc">{{ soft.desc }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.skills-section {
  padding: 100px 0;
  background: #000000; /* Fond noir pur */
  color: #f8fafc;
  min-height: 100vh;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Titres harmonisés */
.header-glitch {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: 4rem;
  font-weight: 900;
  color: #ffb7c5; /* Rose pastel */
  letter-spacing: 4px;
  text-shadow: 0 0 15px rgba(255, 183, 197, 0.3);
  text-transform: uppercase;
  margin-bottom: 10px;
}

.section-subtitle {
  font-size: 1.2rem;
  font-weight: 400;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 30px;
}

/* Hard Skills Grid */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px 60px;
  margin-bottom: 100px;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.skill-name {
  font-size: 1rem;
  font-weight: 500;
  color: #e2e8f0;
}

.skill-perc {
  font-size: 0.9rem;
  color: #9ade9a; /* Vert pastel */
  font-weight: bold;
}

.progress-track {
  height: 4px; /* Plus fin pour un look plus pro */
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  width: 0%; /* Animé par GSAP */
  background: linear-gradient(90deg, #ffb7c5, #9ade9a); /* Dégradé Rose -> Vert */
  border-radius: 10px;
}

/* Environnement Tags */
.env-section {
  margin-bottom: 100px;
  text-align: center;
}

.envs-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
}

.env-tag {
  padding: 8px 18px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(154, 222, 154, 0.2); /* Bordure verte subtile */
  border-radius: 4px;
  color: #cbd5e1;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.env-tag:hover {
  border-color: #9ade9a;
  background: rgba(154, 222, 154, 0.05);
  transform: translateY(-2px);
}

/* Soft Skills Cards */
.soft-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  margin-top: 40px;
}

.soft-card {
  padding: 25px;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
  border-left: 3px solid #ffb7c5; /* Accent rose */
  text-align: left;
  transition: transform 0.3s ease;
}

.soft-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.04);
}

.soft-name {
  color: #ffb7c5;
  margin-bottom: 12px;
  font-size: 1.1rem;
  font-weight: 700;
}

.soft-desc {
  font-size: 0.9rem;
  color: #94a3b8;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .section-title { font-size: 2.5rem; }
  .skills-grid { grid-template-columns: 1fr; }
}
</style>
