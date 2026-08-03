<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Organisation purement thématique sans notion de niveau
const hardSkills = [
  {
    category: 'Langages Web',
    skills: ['HTML / CSS', 'PHP']
  },
  {
    category: 'Langages Système & Objet',
    skills: ['Python', 'C++', 'Java', 'C', 'Assembleur']
  },
  {
    category: 'Bases de données',
    skills: ['SQL', 'PL / SQL']
  },
  {
    category: 'Frameworks & Scripts',
    skills: ['Symfony', 'Tailwind CSS', 'Bash script']
  }
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
  // Animation d'apparition simple et épurée
  gsap.from(".reveal", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".skills-section",
      start: "top 80%",
    }
  })
})
</script>

<template>
  <section class="skills-section">
    <div class="container">

      <!-- HARD SKILLS -->
      <div class="header-glitch reveal">
        <h2 class="section-title">HARD SKILLS</h2>
        <h3 class="section-subtitle">Langages de programmation & Technologies</h3>
      </div>

      <div class="skills-grid reveal">
        <div v-for="group in hardSkills" :key="group.category" class="skill-category-card">
          <h4 class="category-title">{{ group.category }}</h4>
          <ul class="skills-list">
            <li v-for="skill in group.skills" :key="skill" class="skill-item">
              <span class="bullet"></span>
              {{ skill }}
            </li>
          </ul>
        </div>
      </div>

      <!-- ENVIRONNEMENTS -->
      <div class="env-section reveal">
        <h3 class="section-subtitle">Environnements de développement</h3>
        <div class="envs-container">
          <div v-for="env in environments" :key="env" class="env-tag">
            {{ env }}
          </div>
        </div>
      </div>

      <!-- SOFT SKILLS -->
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
  background: #000000;
  color: #f8fafc;
  min-height: 100vh;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Titres */
.header-glitch {
  text-align: center;
  margin-bottom: 50px;
}

.section-title {
  font-size: 3.5rem;
  font-weight: 900;
  color: #ffb7c5;
  letter-spacing: 4px;
  text-shadow: 0 0 15px rgba(255, 183, 197, 0.3);
  text-transform: uppercase;
  margin-bottom: 10px;
}

.section-subtitle {
  font-size: 1.1rem;
  font-weight: 400;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 30px;
}

/* Hard Skills Cards par Catégorie */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 25px;
  margin-bottom: 80px;
}

.skill-category-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  padding: 25px;
  transition: all 0.3s ease;
}

.skill-category-card:hover {
  transform: translateY(-4px);
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(154, 222, 154, 0.3);
}

.category-title {
  font-size: 1rem;
  font-weight: 700;
  color: #ffb7c5;
  margin-bottom: 20px;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(255, 183, 197, 0.2);
  letter-spacing: 1px;
}

.skills-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #e2e8f0;
  font-size: 0.95rem;
  font-weight: 500;
}

.bullet {
  width: 6px;
  height: 6px;
  background-color: #9ade9a;
  border-radius: 50%;
  box-shadow: 0 0 6px rgba(154, 222, 154, 0.5);
}

/* Environnement Tags */
.env-section {
  margin-bottom: 80px;
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
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(154, 222, 154, 0.2);
  border-radius: 6px;
  color: #cbd5e1;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.env-tag:hover {
  border-color: #9ade9a;
  background: rgba(154, 222, 154, 0.08);
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
  border-left: 3px solid #ffb7c5;
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
