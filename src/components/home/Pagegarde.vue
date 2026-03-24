<template>
  <section class="hero" ref="heroRef">
    <canvas ref="canvasRef" class="hero__canvas"></canvas>



    <div class="hero__content">
      <div class="hero__text">
        <h1 class="nird-title">Développeuse Web Full Stack</h1>
        <p class="subtitle">Coder l'impossible pour réaliser l'extraordinaire.</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const heroRef = ref<HTMLElement | null>(null)
const canvasRef = ref<HTMLCanvasElement | null>(null)
let ctx: CanvasRenderingContext2D | null = null
let animationFrameId: number
let particles: Particle[] = []

// Configuration
// On garde 40, mais ce sont maintenant 40 particules régulières
const PARTICLE_COUNT = 120
const MOUSE_RADIUS = 150
const REPELL_FORCE = 10
const RETURN_SPEED = 0.02
const FRICTION = 0.90
// Les constantes SNAKE_HITBOX et SNAKE_EMOJI sont supprimées

// Emojis
const emojis = ['🌸']

const mouse = { x: -1000, y: -1000 }
// let pulseTime = 0 // Supprimé car il servait pour la pulsation du serpent

class Particle {
  x: number
  y: number
  baseX: number
  baseY: number
  vx: number
  vy: number
  size: number
  emoji: string
  opacity: number
  density: number
  // isSnake: boolean // Supprimé

  constructor(canvasWidth: number, canvasHeight: number) {
    this.x = Math.random() * canvasWidth
    this.y = Math.random() * canvasHeight
    this.baseX = this.x
    this.baseY = this.y
    this.vx = 0
    this.vy = 0
    // this.isSnake = isSnake // Supprimé
    // Taille normale pour toutes les particules
    this.size = (Math.random() * 10 + 14)
    // Seules les particules normales (fleurs) sont utilisées
    this.emoji = emojis[Math.floor(Math.random() * emojis.length)] || '🌸'
    this.opacity = (Math.random() * 0.5 + 0.3)
    this.density = (Math.random() * 30) + 1
  }

  update(canvasWidth: number, canvasHeight: number) {
    const dx = mouse.x - this.x
    const dy = mouse.y - this.y
    const distance = Math.sqrt(dx * dx + dy * dy)

    if (distance < MOUSE_RADIUS) {
      const force = (MOUSE_RADIUS - distance) / MOUSE_RADIUS
      const directionX = (dx / distance) * force * REPELL_FORCE * -1
      const directionY = (dy / distance) * force * REPELL_FORCE * -1
      this.vx += directionX
      this.vy += directionY
    }

    const homeDx = this.baseX - this.x
    const homeDy = this.baseY - this.y
    this.vx += homeDx * RETURN_SPEED * 0.5
    this.vy += homeDy * RETURN_SPEED * 0.5
    this.vx *= FRICTION
    this.vy *= FRICTION

    this.x += this.vx
    this.y += this.vy

    const padding = this.size
    if (this.x < padding) { this.x = padding; this.vx *= -0.5 }
    if (this.x > canvasWidth - padding) { this.x = canvasWidth - padding; this.vx *= -0.5 }
    if (this.y < padding) { this.y = padding; this.vy *= -0.5 }
    if (this.y > canvasHeight - padding) { this.y = canvasHeight - padding; this.vy *= -0.5 }
  }

  draw(context: CanvasRenderingContext2D) {
    // La logique de pulsation et de glow du serpent a été supprimée
    let displaySize = this.size
    let displayOpacity = this.opacity

    context.font = `${displaySize}px Arial`
    context.globalAlpha = displayOpacity
    context.fillStyle = '#ffffff'
    context.fillText(this.emoji, this.x, this.y)

    // Reset shadow (plus nécessaire, mais pas nuisible)
    context.shadowBlur = 0
    context.globalAlpha = 1
  }
}

const init = () => {
  if (!canvasRef.value) return
  const canvas = canvasRef.value
  ctx = canvas.getContext('2d')
  const resetParticles = () => {
    canvas.width = heroRef.value?.offsetWidth || window.innerWidth
    canvas.height = heroRef.value?.offsetHeight || window.innerHeight
    particles = []
    // Création de toutes les particules régulières (fleurs)
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle(canvas.width, canvas.height))
    }
  }
  window.addEventListener('resize', resetParticles)
  resetParticles()
}

const animate = () => {
  if (!ctx || !canvasRef.value) return
  // pulseTime += 0.016 // L'incrément de pulseTime est supprimé
  ctx.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height)
  particles.forEach(particle => {
    particle.update(canvasRef.value!.width, canvasRef.value!.height)
    particle.draw(ctx!)
  })
  animationFrameId = requestAnimationFrame(animate)
}

const handleMouseMove = (e: MouseEvent) => {
  if (!heroRef.value) return
  const rect = heroRef.value.getBoundingClientRect()
  mouse.x = e.clientX - rect.left
  mouse.y = e.clientY - rect.top

  // La logique pour changer le curseur au survol du serpent est supprimée
  heroRef.value.style.cursor = 'default'
}

const handleMouseLeave = () => {
  mouse.x = -1000
  mouse.y = -1000
}

// La fonction handleClick est maintenant inutile, mais elle peut être laissée
// vide ou supprimée si aucune autre action n'est prévue au clic.
const handleClick = (e: MouseEvent) => {
  // if (!heroRef.value || particles.length === 0) return
  // La logique de redirection vers '/snake' est supprimée.
}

onMounted(() => {
  init()
  animate()
  if (heroRef.value) {
    heroRef.value.addEventListener('mousemove', handleMouseMove)
    heroRef.value.addEventListener('mouseleave', handleMouseLeave)
    heroRef.value.addEventListener('click', handleClick) // Gardé au cas où une future fonctionnalité utilise le clic
  }
})

onUnmounted(() => {
  cancelAnimationFrame(animationFrameId)
  window.removeEventListener('resize', init)
  if (heroRef.value) {
    heroRef.value.removeEventListener('mousemove', handleMouseMove)
    heroRef.value.removeEventListener('mouseleave', handleMouseLeave)
    heroRef.value.removeEventListener('click', handleClick)
  }
})
</script>

<style scoped>
.hero {
  height: 80vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: #000000;
}

.hero__canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}



.hero__content {
  position: relative;
  z-index: 10;
  text-align: center;
  padding: 0 1rem;
  pointer-events: none;
}

@keyframes gentle-shine {
  0% {
    background-position: -250% center;
  }
  100% {
    background-position: 250% center;
  }
}

/* STYLE DE TITRE*/
.nird-title {
  font-size: 6rem;
  font-weight: 900;
  line-height: 1;
  margin: 0;
  letter-spacing: -5px;
  color: white;
}

.subtitle {
  font-size: 1.5rem;
  font-weight: 300;
  color: var(--text-secondary);
  margin-top: 1rem;
  text-transform: uppercase;
  letter-spacing: 4px;

}


.description {
  margin-top: 2rem;
  font-size: 1.1rem;
  color: #888;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 768px) {
  .nird-title {
    font-size: 5rem;
  }

  .subtitle {
    font-size: 1rem;
  }
}
</style>
