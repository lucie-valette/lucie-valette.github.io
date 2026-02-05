<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const timelineData = [
  {
    date: "2024 - Présent",
    title: "BUT Informatique",
    location: "IUT de Montpellier",
    description: "Parcours : Réalisation d'applications : conception, développement, validation. Actuellement en deuxième année.",
    current: true
  },
  {
    date: "2023 - 2024",
    title: "BUT Génie Biologique SAB",
    location: "Université d'Avignon",
    description: "Première année de formation en Sciences de l'Aliment et Biotechnologie.",
    current: false
  },
  {
    date: "2022 - 2023",
    title: "Baccalauréat Général",
    location: "Lycée Alphonse Daudet, Tarascon",
    description: "Spécialités Mathématiques et SVT. Obtention du diplôme avec mention.",
    current: false
  }
]

const containerRef = ref(null)

onMounted(() => {
  // Animation d'entrée au chargement (similaire à Compétences)
  gsap.from(".reveal", {
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.15, // Les éléments apparaissent les uns après les autres
    ease: "power2.out"
  })
})
</script>

<template>
  <section ref="containerRef" class="timeline-section">
    <div class="header-glitch reveal">
      <h2 class="section-title">MON PARCOURS</h2>
    </div>

    <div class="timeline-container">
      <div class="main-line"></div>

      <div v-for="(item, index) in timelineData" :key="index" class="timeline-item reveal">
        <div class="dot" :class="{ 'is-current': item.current }"></div>

        <div class="content">
          <span class="date">{{ item.date }}</span>
          <h3>{{ item.title }}</h3>
          <p class="location">{{ item.location }}</p>
          <p class="description">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline-section {
  padding: 100px 20px;
  background: #000000;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.header-glitch {
  text-align: center;
  margin-bottom: 5rem;
}

.section-title {
  font-size: 4rem;
  font-weight: 900;
  color: #ffb7c5;
  letter-spacing: 4px;
  text-shadow: 0 0 15px rgba(255, 183, 197, 0.4);
  text-transform: uppercase;
  margin: 0;
}

.timeline-container {
  position: relative;
  max-width: 800px;
  width: 100%;
  padding-left: 50px;
}

.main-line {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(to bottom, #ffb7c5, #9ade9a);
  border-radius: 2px;
}

.timeline-item {
  position: relative;
  margin-bottom: 70px;
  /* On ne met pas d'opacity 0 ici en CSS pour que ce soit
     visible si le JS met du temps à charger */
}

.dot {
  position: absolute;
  left: -59.5px;
  top: 10px;
  width: 16px;
  height: 16px;
  background: #000;
  border: 3px solid #9ade9a;
  border-radius: 50%;
  z-index: 2;
}

.dot.is-current {
  background: #9ade9a;
  box-shadow: 0 0 15px #9ade9a;
}

.content {
  background: rgba(255, 255, 255, 0.03);
  padding: 25px;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  transition: all 0.4s ease;
}

.content:hover {
  transform: translateX(10px);
  border-color: #9ade9a;
  background: rgba(154, 222, 154, 0.05);
}

.date {
  display: block;
  font-family: 'Courier New', monospace;
  color: #9ade9a;
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 0.9rem;
}

h3 {
  margin: 0;
  font-size: 1.6rem;
  color: #fff;
  font-weight: 700;
}

.location {
  color: #888;
  font-style: italic;
  margin: 8px 0;
  font-size: 0.95rem;
}

.description {
  color: #bbb;
  line-height: 1.6;
  margin-top: 10px;
}

@media (max-width: 768px) {
  .section-title { font-size: 2.2rem; }
  .timeline-container { padding-left: 35px; }
  .dot { left: -42.5px; width: 14px; height: 14px; }
}
</style>
