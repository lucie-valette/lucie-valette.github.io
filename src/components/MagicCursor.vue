<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const mouseX = ref(-100);
const mouseY = ref(-100);
const sparkles = ref<{ id: number; x: number; y: number; size: number; color: string }[]>([]);
let sparkleId = 0;

const updateMouse = (e: MouseEvent) => {
  mouseX.value = e.clientX;
  mouseY.value = e.clientY;

  const id = sparkleId++;
  const newSparkle = {
    id,
    x: e.clientX,
    y: e.clientY,
    size: Math.random() * 6 + 3,
    // Variations de rose pour la traînée (Sakura)
    color: Math.random() > 0.5 ? '#FFB7C5' : '#FFC0CB'
  };

  sparkles.value.push(newSparkle);

  setTimeout(() => {
    sparkles.value = sparkles.value.filter(s => s.id !== id);
  }, 800);
};

onMounted(() => {
  window.addEventListener('mousemove', updateMouse);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', updateMouse);
});
</script>

<template>
  <div class="cursor-container">
    <div class="sakura-cursor" :style="{ left: mouseX + 'px', top: mouseY + 'px' }">
      🌸
    </div>

    <div
      v-for="sparkle in sparkles"
      :key="sparkle.id"
      class="sparkle-dot"
      :style="{
        left: sparkle.x + 'px',
        top: sparkle.y + 'px',
        width: sparkle.size + 'px',
        height: sparkle.size + 'px',
        backgroundColor: sparkle.color,
        boxShadow: `0 0 12px ${sparkle.color}`
      }"
    ></div>
  </div>
</template>

<style scoped>
.cursor-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 99999;
}

.sakura-cursor {
  position: fixed;
  pointer-events: none;
  font-size: 28px; /* Un peu plus grand pour bien voir la fleur */
  transform: translate(-50%, -50%);
  filter: drop-shadow(0 0 8px #FFB7C5); /* Halo rose clair */
  transition: transform 0.05s ease-out;
}

.sparkle-dot {
  position: fixed;
  pointer-events: none;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: fall-fade 0.8s ease-out forwards;
}

@keyframes fall-fade {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% {
    /* La traînée tombe légèrement comme une pétale qui chute */
    transform: translate(-50%, 40px) scale(0);
    opacity: 0;
  }
}
</style>
