<template>
  <section id="profile" class="about-me-nexus" ref="profileSection">
    <canvas ref="canvasRef" class="floating-network-canvas"></canvas>
    <div class="nexus-bg">
      <div class="scanline"></div>
    </div>

    <div class="container">
      <div class="header-glitch">
        <h2 class="section-title">PROFILE PERSONNEL</h2>
      </div>

      <div class="profile-card-container">
        <div class="profile-card" ref="cardRef">
          <div class="content-wrapper">
            <div class="photo-column">
              <div class="profile-photo-placeholder">
                <img src="/src/assets/image_dessin.png" alt="image_dessin" class="portrait" />
              </div>
              <h3 class="name-title">Valette Lucie</h3>
              <div class="simple-divider"></div>
            </div>

            <div class="text-column">
              <h4 class="bio-intro">À propos de moi</h4>

              <p class="bio-text">
                Je suis actuellement étudiante en deuxième année de BUT Informatique, parcours RACDV (Réalisation d’applications : conception, développement, validation).
                Anciennement étudiante en BUT1 Génie Biologique, je me suis rapidement rendu compte que cette voie
                ne me correspondait pas.
              </p>

              <p class="bio-text highlight-text">
                Finalement, c'est en BUT Informatique que j'ai eu une véritable révélation.
                Je me suis immédiatement passionnée pour la logique, la rigueur et la puissance de création qu'offre le développement.
                C'est le Back-End qui m'a le plus captivée : comprendre le fonctionnement interne d'un programme,
                structurer les données, résoudre des problèmes complexes...
              </p>

              <p class="bio-text final-statement">
                L'informatique était bien plus qu'une réorientation : c'était une évidence professionnelle.
                Mon objectif est de poursuivre ma progression dans ce domaine passionnant.
                Vous trouverez sur ce site mes formations, mes compétences techniques ainsi que mes projets,
                illustrant l'alliance de mes passions et de mes ambitions.
              </p>

              <RouterLink to="/projets" class="launch-btn-link">
                <button class="launch-btn">
                  VOIR MES PROJETS <span class="btn-glitch">>></span>
                </button>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const router = useRouter()
const cardRef = ref(null)
const profileSection = ref(null)

const canvasRef = ref<HTMLCanvasElement | null>(null)
let ctx: CanvasRenderingContext2D | null = null
let animationFrameId: number
let particles: Particle[] = []
let width = 0
let height = 0

class Particle {
  x: number; y: number; vx: number; vy: number; size: number; color: string; alpha: number = 0.2

  constructor(w: number, h: number) {
    this.x = Math.random() * w
    this.y = Math.random() * h
    this.vx = (Math.random() - 0.5) * 0.5
    this.vy = (Math.random() - 0.5) * 0.5
    this.size = Math.random() * 2 + 1
    this.color = '255, 255, 255'
  }

  update(width: number, height: number) {
    this.x += this.vx * 0.05
    this.y += this.vy * 0.05
    if (this.x < 0) this.x = width
    if (this.x > width) this.x = 0
    if (this.y < 0) this.y = height
    if (this.y > height) this.y = 0
  }

  draw() {
    if (!ctx) return
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`
    ctx.fill()
  }
}

const initCanvas = () => {
  if (!canvasRef.value || !canvasRef.value.parentElement) return
  const canvas = canvasRef.value
  ctx = canvas.getContext('2d')
  width = canvas.parentElement.clientWidth
  height = canvas.parentElement.clientHeight
  canvas.width = width
  canvas.height = height
  particles = []
  const particleCount = window.innerWidth < 768 ? 40 : 80
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle(width, height))
  }
}

const animate = () => {
  if (!ctx || !canvasRef.value) return
  ctx.clearRect(0, 0, width, height)
  particles.forEach(p => { p.update(width, height); p.draw() })
  animationFrameId = requestAnimationFrame(animate)
}

onMounted(() => {
  initCanvas()
  animate()
  window.addEventListener('resize', initCanvas)

  if (cardRef.value) {
    gsap.from(cardRef.value, {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: profileSection.value,
        start: 'top 80%',
        toggleActions: 'play none none none',
      }
    })
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', initCanvas)
  cancelAnimationFrame(animationFrameId)
})
</script>

<style scoped>
.about-me-nexus {
  padding: 8rem 1rem;
  background: #000000;
  position: relative;
  overflow: hidden;
}

.nexus-bg {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background-image:
    linear-gradient(rgba(144, 238, 144, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(144, 238, 144, 0.05) 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.3;
  pointer-events: none;
}

.scanline {
  background: rgba(255, 192, 203, 0.05); /* Réduit encore plus l'effet */
  position: absolute; top: 0; left: 0; width: 100%; height: 2px;
  animation: scan 12s linear infinite;
}

@keyframes scan {
  0% { top: -10%; }
  100% { top: 110%; }
}

.portrait {
  height: 200px;
  width: auto;
}

.header-glitch { text-align: center; margin-bottom: 6rem; }

.section-title {
  font-size: 4rem;
  font-weight: 900;
  color: var(--pastel-pink);
  letter-spacing: 4px;
  /* Retrait du text-shadow néon */
}

.profile-card-container { display: flex; justify-content: center; padding: 1rem; }

.profile-card {
  width: 100%;
  max-width: 1000px;
  min-height: 550px;
  background: rgba(255, 255, 255, 0.03); /* Fond propre */
  border-radius: 20px;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  /* Retrait du box-shadow néon vert */
}

.content-wrapper {
  position: relative;
  z-index: 20;
  display: flex;
  padding: 3rem;
  gap: 3rem;
}

.photo-column { flex-shrink: 0; width: 300px; text-align: center; }

.name-title {
  font-size: 2.5rem;
  color: white;
  font-weight: 900;
  margin-bottom: 0.5rem;
  /* Retrait du text-shadow rose */
}

.simple-divider {
  width: 60px;
  height: 3px;
  background: var(--pastel-pink);
  margin: 1rem auto;
  /* Retrait de la lueur du divider */
}

.text-column { flex-grow: 1; display: flex; flex-direction: column; }

.bio-intro {
  font-size: 1.8rem;
  color: var(--pastel-pink);
  font-weight: 700;
  margin-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 1rem;
}

.bio-text {
  color: #ccc;
  font-size: 1.05rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.highlight-text {
  color: white;
  background: rgba(154, 222, 154, 0.05);
  padding: 1rem;
  border-left: 5px solid var(--pastel-green);
}

.final-statement { color: white; margin-top: 1.5rem; }

.launch-btn {
  width: 100%;
  max-width: 400px;
  align-self: flex-end;
  margin-top: 2rem;
  padding: 1rem;
  background: transparent;
  border: 1px solid var(--pastel-pink);
  color: var(--pastel-pink);
  font-family: monospace;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  /* Retrait de l'ombre portée */
}

.launch-btn:hover {
  background: var(--pastel-pink);
  color: #000;
}

.floating-network-canvas {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  z-index: 5;
  opacity: 0.5;
  pointer-events: none;
}

@media (max-width: 992px) {
  .content-wrapper { flex-direction: column; padding: 2rem; }
  .photo-column { width: 100%; padding-bottom: 2rem; }
  .launch-btn { max-width: none; align-self: stretch; }
}
</style>
