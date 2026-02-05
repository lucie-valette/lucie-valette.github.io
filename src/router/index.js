import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component:() => import('@/views/HomeView.vue'),
      meta: {
        title: 'Accueil'
      }
    },
    {
      path: '/formation',
      name: 'formation',
      component: () => import('@/views/Formation.vue'),
      meta: {
        title: 'Formation'
      }
    },
    {
      path: '/competences',
      name: 'competences',
      component: () => import('@/views/Competences.vue'),
      meta: {
        title: 'Compétences'
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/HomeView.vue'),
      meta: {
        title: 'Contact '
      }
    },
    {
      path: '/projets',
      name: 'rpg-setup',
      component: () => import('@/views/Projets.vue'),
      meta: { title: 'Projets scolaire et personnel' }
    },
    {
      path: '/futur',
      name: 'rpg-play',
      component: () => import('@/views/Futur.vue'),
      meta: { title: 'Projet futur' }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
})

export default router
