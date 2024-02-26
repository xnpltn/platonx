<script setup lang="ts">
import Blogs from "@/composables/useBlogs"
import { RouterLink } from 'vue-router'

</script>

<template>
    <main class="">
        <RouterLink to="/">← back</RouterLink>
        <h1 style="color: #94a3b8; font-size: large; margin-top: 2rem;">Blog</h1>
        <section class="articles_section">
            <article v-for="blog in Blogs" class="article">
                <RouterLink :to="'blog/'+ blog.slug"> <span class="link">{{ blog.title }}</span></RouterLink>
                <p >{{ blog.description }}</p>
                <p class="date">{{ blog.datePublished }}</p>
            </article>
        </section>
    </main>

</template>

<style scoped>
.link{
    font-size: x-large;
}
.articles_section{
    display: flex;
    justify-content: start;
    flex-direction: column;
    gap: 3rem;
    
}

.date{
    color: #78716c;
}

</style>