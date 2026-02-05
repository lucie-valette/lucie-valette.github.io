<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

// État pour la modale
const selectedProject = ref(null)
const isModalOpen = ref(false)

const projects = [
  {
    title: "Agenda Fonctionnel",
    type: "Projet Semestre 1",
    tech: "C++ / HTML",
    shortDesc: "Outil de gestion quotidienne en terminal avec export HTML.",
    fullDesc: "Développement d'un outil de gestion quotidienne pour organiser rendez-vous et tâches.",
    context: "Projet scolaire du S1 de BUT Informatique pour répondre au besoin d’un outil de gestion quotidien.",
    objectifs: "Développer mes premières compétences solides en programmation C++.",
    contraintes: "Réaliser un agenda fonctionnel en terminal avec sauvegarde des données.",
    duration: "1 mois",
    team: "Seule",
    role: " - ",
    learned: [
      "Programmation C++ procédurale : fonctions modulaires et structures de données.",
      "Gestion de fichiers (lecture/écriture) pour la persistance des données.",
      "Création de menus interactifs et traitement robuste des entrées utilisateur.",
      "Implémentation complète du système CRUD (Create, Read, Update, Delete)."
    ],
    warning: "* Ce projet a été développé et hébergé sur l’environnement de travail interne de mon ancien IUT, ayant changé d'IUT je n'ai plus accès à mes projets de première année.",
    image: new URL('../assets/agenda_logo.png', import.meta.url).href
  },
  {
    title: "GPS - Calcul d'itinéraire",
    type: "Projet Semestre 2",
    tech: "C++ / Qt Creator",
    shortDesc: "Calcul du chemin le plus rapide entre deux villes (Dijkstra).",
    fullDesc: "Application graphique permettant de calculer l'itinéraire optimal entre plusieurs villes.",
    context: "Projet de fin d'année de première année de BUT Informatique.",
    objectifs: "Maîtriser les algorithmes de graphes et l'interface utilisateur graphique (GUI).",
    contraintes: "Utilisation de la bibliothèque Qt et respect de la complexité algorithmique.",
    duration: "1 mois",
    role: " - ",
    team: "Seule",
    learned: [
      "Implémentation de l'algorithme de Dijkstra en C++.",
      "Développement d'une interface graphique avec Qt Creator.",
      "Programmation Orientée Objet (POO) appliquée à un cas réel.",
      "Modélisation de données géographiques (nœuds et arcs)."
    ],
    warning: "* Ce projet a été développé et hébergé sur l’environnement de travail interne de mon ancien IUT, ayant changé d'IUT je n'ai plus accès à mes projets de première année.",
    image: new URL('../assets/qt_logo.png', import.meta.url).href
  },
  {
    title: "Nuit de l'Info 2025",
    type: "Compétition Nationale",
    tech: "Vue.js / Tailwind",
    shortDesc: "Défi de 15h : Conception d'une plateforme web immersive en une seule nuit.",
    fullDesc: "Participation au célèbre marathon de programmation national (de 21h à 8h). Le sujet 2025 était : Le Village Numérique Résistant : comment les établissements scolaires peuvent tenir tête aux Big Tech.",
    context: "Événement national réunissant étudiants et entreprises partenaires (Sopra Steria, etc.) autour de défis techniques et créatifs.",
    objectifs: "Proposer une expérience utilisateur marquante tout en validant un maximum de 'défis' techniques.",
    contraintes: "Temps limité (15h), fatigue, travail en équipe de 5 et déploiement immédiat.",
    duration: "1 nuit (15h non-stop)",
    team: "Équipe de 5 personnes",
    role: "Développeuse",
    learned: [
      "Développement intensif en Front-end (Vue.js) avec une approche mobile-first.",
      "Collaboration en temps réel sur Git (gestion des conflits sous pression).",
      "Méthodologie agile : répartition flash des rôles (Design, Dev, Content).",
      "Capacité à livrer un produit Minimum Viable (MVP) dans un délai critique."
    ],
    link: "https://site-ndi-2025.fly.dev/",
    image: new URL('../assets/NDI_logo.png', import.meta.url).href
  },
  {
    title: "BotUp",
    type: "Projet Web – Semestre 3",
    tech: "PHP / SQL / JavaScript",
    shortDesc: "Plateforme de démocratie participative",
    fullDesc: "Ce projet consiste en la conception et le développement d’une plateforme web de démocratie participative, permettant à des utilisateurs de créer, gérer et participer à des scrutins en ligne de manière sécurisée.",
    context: "Projet académique axé sur le développement Backend et les bases de données avec la méthode scrum.",
    objectifs: "Apprendre à lier une interface web à une base de données relationnelle (BDD).",
    contraintes: "Sécurisation des sessions, intégrité des données et gestion des droits utilisateurs. Respect des principes SOLID.",
    duration: "1 semestre (projet en cours)",
    role: "Product Owner (PO) et développeuse",
    team: "Équipe de 4 personnes",
    learned: [
      "Architecture Client/Serveur et programmation PHP Backend.",
      "Conception de BDD SQL (Modèle Conceptuel de Données).",
      "Sécurisation des formulaires contre les injections SQL.",
      "Gestion de l'authentification et des sessions utilisateurs."
    ],
    link: "https://webinfo.iutmontp.univ-montp2.fr/~schraders/sae3a-base/web/controleurFrontal.php",
    warning: "* Le site est accessible uniquement via l'Intranet de l'IUT et est en cours de développement.",
    image: new URL('../assets/botup_logo.png', import.meta.url).href
  }
]

onMounted(() => {
  gsap.to(".reveal", {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.15,
    ease: "power2.out"
  })
})

const openProject = (p) => {
  selectedProject.value = p
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  isModalOpen.value = false
  document.body.style.overflow = ''
}
</script>

<template>
  <section class="projects-section">
    <div class="container">

      <div class="header-glitch reveal">
        <h2 class="section-title">MES PROJETS</h2>
      </div>

      <div class="projects-grid">
        <div
          v-for="project in projects"
          :key="project.title"
          class="project-card reveal"
          @click="openProject(project)"
        >
          <div class="card-img" :style="{ backgroundImage: `url(${project.image})` }"></div>
          <div class="card-content">
            <div class="tech-tag">{{ project.tech }}</div>
            <h3>{{ project.title }}</h3>
            <p class="desc">{{ project.shortDesc }}</p>
            <button class="more-btn">Détails du projet +</button>
          </div>
        </div>
      </div>
    </div>

    <Transition name="fade">
      <div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
        <div class="modal-content">
          <button class="close-btn" @click="closeModal">✕</button>

          <div class="modal-header-img" :style="{ backgroundImage: `url(${selectedProject.image})` }"></div>

          <div class="modal-text">
            <span class="modal-tech">{{ selectedProject.tech }}</span>
            <h2 class="modal-title">{{ selectedProject.title }}</h2>

            <div class="info-row">
              <span><strong>Durée:</strong> {{ selectedProject.duration }}</span>
              <span><strong>Organisation:</strong> {{ selectedProject.team }}</span>
              <span><strong>Rôle:</strong> {{ selectedProject.role }}</span>
            </div>

            <div class="action-zone">
              <a v-if="selectedProject.link" :href="selectedProject.link" target="_blank" class="ndi-button">
                Voir le site en direct →
              </a>
              <p v-if="selectedProject.warning" class="warning-text">{{ selectedProject.warning }}</p>
            </div>

            <div class="detail-block">
              <h4>Description</h4>
              <p>{{ selectedProject.fullDesc }}</p>
            </div>

            <div class="detail-block">
              <h4>Contexte & Objectifs</h4>
              <p>{{ selectedProject.context }}</p>
              <p class="objectives-italic"><em>{{ selectedProject.objectifs }}</em></p>
            </div>

            <div class="detail-block">
              <h4>Ce que j'ai appris</h4>
              <ul class="learned-list">
                <li v-for="item in selectedProject.learned" :key="item">{{ item }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.projects-section {
  padding: 100px 0;
  background: #000000;
  color: white;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* --- ANIMATION REVEAL --- */
.reveal {
  opacity: 0;
  transform: translateY(30px);
}

.section-title {
  font-size: 4rem;
  font-weight: 900;
  color: #ffb7c5;
  text-align: center;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 5rem;
  text-shadow: 0 0 15px rgba(255, 183, 197, 0.3);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
}

.project-card {
  background: rgba(255, 255, 255, 0.02);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  cursor: pointer;
  transition: all 0.4s ease;
  overflow: hidden;
}

.project-card:hover {
  border-color: #9ade9a;
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.04);
}

.card-img {
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: rgba(255, 255, 255, 0.01);
  margin: 10px;
}

.card-content { padding: 25px; }
.tech-tag { color: #9ade9a; font-size: 0.8rem; font-weight: bold; margin-bottom: 10px; text-transform: uppercase; }
h3 { font-size: 1.5rem; margin-bottom: 10px; color: #fff; }
.desc { color: #94a3b8; font-size: 0.95rem; line-height: 1.5; }
.more-btn { background: none; border: none; color: #ffb7c5; font-weight: bold; cursor: pointer; margin-top: 15px; }

/* --- MODALE STYLE --- */
.modal-overlay {
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(8px);
  display: flex; align-items: center; justify-content: center;
  z-index: 2000; padding: 20px;
}

.modal-content {
  background: #0a0a0a;
  width: 100%; max-width: 850px; max-height: 90vh;
  border-radius: 24px; overflow-y: auto;
  position: relative; border: 1px solid rgba(255,255,255,0.1);
}

.close-btn {
  position: absolute; top: 20px; right: 20px;
  background: #fff; color: #000; border: none;
  width: 35px; height: 35px; border-radius: 50%;
  font-weight: bold; cursor: pointer; z-index: 10;
}

.modal-header-img {
  width: 100%; height: 300px;
  background-size: contain; background-repeat: no-repeat;
  background-position: center; background-color: #111;
}

.modal-text { padding: 40px; }
.modal-title { font-size: 2.5rem; color: #fff; margin-bottom: 20px; }
.modal-tech { color: #9ade9a; font-weight: bold; text-transform: uppercase; }

.info-row {
  display: flex; flex-wrap: wrap; gap: 30px;
  margin: 20px 0; padding: 20px 0;
  border-top: 1px solid rgba(255,255,255,0.05);
  border-bottom: 1px solid rgba(255,255,255,0.05);
  color: #cbd5e1;
}

.info-row strong { color: #ffb7c5; }

.ndi-button {
  display: inline-block; padding: 12px 24px;
  border: 1px solid #9ade9a; color: #9ade9a;
  text-decoration: none; border-radius: 8px; font-weight: bold;
}

.warning-text { color: #fca5a5; font-size: 0.85rem; font-style: italic; margin-top: 15px; }

.detail-block { margin-bottom: 30px; }
h4 { color: #ffb7c5; margin-bottom: 12px; text-transform: uppercase; }
.objectives-italic { color: #94a3b8; border-left: 2px solid #9ade9a; padding-left: 15px; }

.learned-list { list-style: none; padding-left: 0; }
.learned-list li::before { content: "→ "; color: #9ade9a; }
.learned-list li { margin-bottom: 8px; color: #94a3b8; }

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@media (max-width: 768px) {
  .section-title { font-size: 2.5rem; }
  .modal-text { padding: 25px; }
}
</style>
