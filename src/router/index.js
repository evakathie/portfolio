import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/pages/Home.vue'
import LegalNotice from '@/views/pages/LegalNotice.vue'
import ProjectPage from '@/views/ProjectPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/legal-notice',
    component: LegalNotice,
  },
  {
    path: '/projects/:slug',
    name: 'Project',
    component: ProjectPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior(to, from, savedPosition) {
    // Back/forward browser navigation
    if (savedPosition) {
      return savedPosition
    }

    // Always scroll to top on route change
    return { top: 0 }
  },
})

export default router