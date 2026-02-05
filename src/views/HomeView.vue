<template>
  <div class="home-view">
    <main>
      <Pagegarde />
      <Apropos />
      <TelechargeCv />
    </main>

    <footer>
      <AppFooter />
    </footer>
  </div>
</template>

<script setup lang="ts">
import Pagegarde from '@/components/home/Pagegarde.vue'
import Apropos from '@/components/home/Apropos.vue'
import TelechargeCv from '@/components/home/TelechargeCV.vue'
</script>

<style scoped>
.home-view {
  min-height: 100vh;
  background: var(--bg-dark);
}
</style>
