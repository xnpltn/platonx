import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '@/views/BlogView.vue'
import NotFoundView from "@/views/NotFoundView.vue"
import Blog from '@/views/blog/Blog.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/blog',
      name: 'blogs',
      component: BlogView
    },
    {
      path: '/blog/:slug',
      name: 'blog',
      component: Blog
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: NotFoundView
    }
  ]
})

export default router
