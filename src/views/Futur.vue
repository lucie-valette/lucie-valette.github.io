<script setup lang="ts">
// Plus besoin de la logique de souris ici, elle est gérée par ton composant global
</script>

<template>
  <div class="future-root">

    <div class="bg-particles">
      <div v-for="n in 12" :key="n" class="bg-dot"></div>
    </div>

    <section class="future-section">
      <div class="container">

        <div class="header-content">
          <h2 class="section-title ">Projet Futur</h2>
          <p class="section-subtitle">Mon ambition après le BUT Informatique</p>
        </div>

        <div class="future-grid">
          <div class="future-card group">
            <div class="card-glow"></div>
            <div class="icon-box">
              <img src="/src/assets/clap_logo.png" alt="Logo Clap" class="card-icon-img" />
            </div>
            <h3>École d'Ingénieur</h3>
            <p>
              Mon objectif principal est d'intégrer une
              <span class="highlight-pink">école d'ingénieur</span> pour approfondir mes bagages techniques
              et acquérir une vision stratégique des systèmes.
            </p>
          </div>

          <div class="future-card group">
            <div class="card-glow"></div>
            <div class="icon-box">
              <img src="/src/assets/surprise_logo.png" alt="Logo surprise" class="card-icon-img" />
            </div>
            <h3>Spécialisation Big Data</h3>
            <p>
              Le monde des données me fascine. Je m'oriente vers le
              <span class="highlight-green">Big Data</span> pour apprendre à structurer et valoriser
              des volumes massifs d'informations.
            </p>
          </div>

          <div class="future-card full-width group">
            <div class="card-glow"></div>
            <div class="icon-box">
              <img src="/src/assets/blush_logo.png" alt="Logo blush" class="card-icon-img" />
            </div>
            <h3>Une Curiosité Sans Limite</h3>
            <p>
              Je suis animée par une passion pour la découverte. Qu'il s'agisse de nouvelles technos
              ou de concepts théoriques, <span class="highlight-gradient">j'aime tout apprendre et tout comprendre</span>.
              Chaque sujet m'enthousiasme.
            </p>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<style scoped>
/* --- CONFIGURATION DU ROOT --- */
.future-root {
  background: radial-gradient(circle at center, #0d0d1a, #050508);
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

/* --- FOND ANIMÉ --- */
.bg-particles { position: absolute; inset: 0; pointer-events: none; }
.bg-dot {
  position: absolute;
  width: 2px; height: 2px;
  background: white;
  opacity: 0.15;
  border-radius: 50%;
  animation: float-up linear infinite;
}
.bg-dot:nth-child(even) { background: #f472b6; }
.bg-dot:nth-child(odd) { background: #34d399; }

@keyframes float-up {
  from { transform: translateY(100vh); opacity: 0; }
  50% { opacity: 0.2; }
  to { transform: translateY(-10vh); opacity: 0; }
}

/* Positions aléatoires pour les points de fond */
.bg-dot:nth-child(1) { left: 10%; animation-duration: 20s; }
.bg-dot:nth-child(2) { left: 25%; animation-duration: 25s; }
.bg-dot:nth-child(3) { left: 45%; animation-duration: 18s; }
.bg-dot:nth-child(4) { left: 70%; animation-duration: 22s; }
.bg-dot:nth-child(5) { left: 90%; animation-duration: 28s; }

/* --- CONTENU --- */
.future-section { padding: 80px 0; position: relative; z-index: 10; }
.container { max-width: 1000px; margin: 0 auto; padding: 0 20px; }

.header-content { text-align: center; margin-bottom: 60px; }
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

.card-icon-img {
  width: 100px;   /* Ajuste la taille selon tes besoins */
  height: auto;
  object-fit: contain;
}

.icon-box {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Aligné à gauche comme ton titre */
}


.section-subtitle {
  font-size: 1.2rem;
  font-weight: 400;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 30px;
}

/* --- GRILLE ET CARTES --- */
.future-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 30px; }

.future-card {
  position: relative;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 40px;
  border-radius: 30px;
  transition: all 0.4s ease;
  overflow: hidden;
}

.future-card:hover {
  transform: translateY(-10px);
  border-color: #f472b6;
  background: rgba(255, 255, 255, 0.05);
}

.card-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(244, 114, 182, 0.1), transparent 70%);
  opacity: 0;
  transition: opacity 0.3s;
}
.future-card:hover .card-glow { opacity: 1; }

.icon-box { font-size: 3.5rem; margin-bottom: 20px; display: block; }
h3 { font-size: 1.6rem; color: #fff; margin-bottom: 15px; }
p { color: #94a3b8; line-height: 1.8; font-size: 1.05rem; }

.highlight-pink { color: #f472b6; font-weight: bold; }
.highlight-green { color: #34d399; font-weight: bold; }
.highlight-gradient {
  background: linear-gradient(to right, #f472b6, #34d399);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
}

.full-width { grid-column: span 2; text-align: center; }

@media (max-width: 768px) {
  .future-grid { grid-template-columns: 1fr; }
  .full-width { grid-column: span 1; }
  .section-title { font-size: 2.2rem; }
}
</style>
