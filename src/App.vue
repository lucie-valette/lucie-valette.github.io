<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import AppHeader from '@/components/Header.vue'
import AppFooter from '@/components/Footer.vue'
import { NConfigProvider } from 'naive-ui'
import MagicCursor from '@/components/MagicCursor.vue'

const route = useRoute()
</script>

<template>
  <div class="app-layout">
    <n-config-provider>
      <AppHeader v-if="!route.meta.hideHeader" />
      <MagicCursor />
      <main class="main-content">
        <RouterView />
      </main>
      <AppFooter />
    </n-config-provider>
  </div>
</template>


<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}

* {
  cursor: none !important;
}
</style>
