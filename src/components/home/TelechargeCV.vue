<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import cvFile from '@/assets/CV_VALETTE_Lucie.pdf'

const cvPath = ref(cvFile)
const isActive = ref(false) // État pour l'ouverture de la carte

gsap.registerPlugin(ScrollTrigger)

const cardRef = ref(null)
const profileSection = ref(null)

// --- CANVAS ANIMATION STATE ---
const canvasRef = ref<HTMLCanvasElement | null>(null)
let ctx: CanvasRenderingContext2D | null = null
let animationFrameId: number
let particles: Particle[] = []

class Particle {
  x: number; y: number; vx: number; vy: number; size: number; alpha: number = 0.2

  constructor(w: number, h: number) {
    this.x = Math.random() * w
    this.y = Math.random() * h
    this.vx = (Math.random() - 0.5) * 0.4
    this.vy = (Math.random() - 0.5) * 0.4
    this.size = Math.random() * 2 + 1
  }

  update(width: number, height: number) {
    this.x += this.vx * 0.1
    this.y += this.vy * 0.1
    if (this.x < 0) this.x = width
    if (this.x > width) this.x = 0
    if (this.y < 0) this.y = height
    if (this.y > height) this.y = 0
  }

  draw() {
    if (!ctx) return
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(255, 183, 197, ${this.alpha})` // Particules teintées rose
    ctx.fill()
  }
}

const initCanvas = () => {
  if (!canvasRef.value) return
  const canvas = canvasRef.value
  ctx = canvas.getContext('2d')
  canvas.width = window.innerWidth
  canvas.height = canvas.parentElement?.clientHeight || 600
  particles = Array.from({ length: 60 }, () => new Particle(canvas.width, canvas.height))
}

const animate = () => {
  if (!ctx || !canvasRef.value) return
  ctx.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height)
  particles.forEach(p => { p.update(canvasRef.value!.width, canvasRef.value!.height); p.draw() })
  animationFrameId = requestAnimationFrame(animate)
}

onMounted(() => {
  initCanvas()
  animate()
  window.addEventListener('resize', initCanvas)

  // Animation d'entrée Reveal
  gsap.to(".reveal", {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out"
  })
})

onUnmounted(() => {
  window.removeEventListener('resize', initCanvas)
  cancelAnimationFrame(animationFrameId)
})
</script>

<template>
  <section id="cv-download" class="cv-presentation" ref="profileSection">
    <canvas ref="canvasRef" class="floating-network-canvas"></canvas>

    <div class="container">
      <div class="cv-header reveal">
        <h2 class="section-title">ACCÈS À MON CV</h2>
        <p class="intro-text">
          Consultez et <strong class="highlight">téléchargez mon profil complet</strong> au format PDF.
        </p>
      </div>

      <div class="cv-card-wrapper reveal">
        <div class="pillar-card"
             :class="{ active: isActive }"
             @mouseenter="isActive = true"
             @mouseleave="isActive = false">

          <div class="pillar-content">
            <div class="cv-summary-area">
              <img src="/src/assets/animal_node.png" alt="animal" class="portrait">
              <h3>CV Valette Lucie</h3>
              <p class="pillar-summary">Format: PDF • Taille: 109ko</p>
            </div>

            <div class="pillar-details">
              <div class="detail-item">
                <strong>Format du fichier</strong>
                <p>Portable Document Format (.pdf)</p>
              </div>
              <div class="detail-item">
                <strong>Dernière mise à jour</strong>
                <p>Octobre 2025</p>
              </div>

              <a :href="cvPath" download="CV_VALETTE_Lucie.pdf" class="download-btn">
                TÉLÉCHARGER LE CV
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cv-presentation {
  position: relative;
  padding: 100px 0;
  min-height: 80vh;
  display: flex;
  align-items: center;
  background: #000000;
  overflow: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 10;
}

.reveal {
  opacity: 0;
  transform: translateY(30px);
}

/* --- EN-TÊTE --- */
.cv-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 3.5rem;
  font-weight: 900;
  color: #ffb7c5; /* Rose Pastel */
  letter-spacing: 4px;
  margin-bottom: 1rem;
}

.intro-text {
  font-size: 1.1rem;
  color: #94a3b8;
}

.highlight {
  color: #9ade9a; /* Vert Pastel */
}

/* --- CARTE --- */
.cv-card-wrapper {
  display: flex;
  justify-content: center;
}

.pillar-card {
  width: 100%;
  max-width: 450px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  backdrop-filter: blur(12px);
  transition: all 0.5s ease;
  overflow: hidden;
}

.pillar-card:hover {
  border-color: #ffb7c5;
  background: rgba(255, 255, 255, 0.04);
  transform: translateY(-5px);
}

.pillar-content {
  padding: 40px;
  text-align: center;
}

.cv-summary-area .portrait {
  width: 120px;
  height: auto;
  margin-bottom: 20px;
  opacity: 0.9;
}

h3 {
  font-size: 1.8rem;
  color: white;
  margin-bottom: 8px;
}

.pillar-summary {
  color: #64748b;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* --- DÉTAILS & BOUTON --- */
.pillar-details {
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.4s ease;
}

.pillar-card:hover .pillar-details,
.pillar-card.active .pillar-details {
  opacity: 1;
  transform: translateY(0);
}

.detail-item {
  margin-bottom: 20px;
}

.detail-item strong {
  display: block;
  color: #ffb7c5;
  font-size: 0.85rem;
  text-transform: uppercase;
  margin-bottom: 5px;
}

.detail-item p {
  color: #cbd5e1;
  font-size: 1rem;
}

.download-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin-top: 10px;
  padding: 14px 28px;
  background: transparent;
  border: 1px solid #9ade9a;
  color: #9ade9a;
  text-decoration: none;
  font-weight: bold;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-family: monospace;
}

.download-btn:hover {
  background: #9ade9a;
  color: #000;
  box-shadow: 0 0 20px rgba(154, 222, 154, 0.3);
}

.floating-network-canvas {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  z-index: 1;
  pointer-events: none;
}

@media (max-width: 768px) {
  .section-title { font-size: 2.2rem; }
  .pillar-card { margin: 0 10px; }
}
</style>
