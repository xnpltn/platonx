<script setup lang="ts">
import { RouterLink } from 'vue-router';
defineProps({
    blog: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <article class="blog_card">
            <RouterLink :to="'blog/'+ blog.slug" style="display: block;" class="link"><h3>{{ blog.title }}</h3></RouterLink>
            <span>{{ blog.datePublished }}</span>
    </article>
</template>


<style scoped>
.blog_card{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5rem;
    margin-bottom: 1.5rem;
    padding-left: 5rem;
    padding-right: 5rem;
}

.link{
    font-size: medium;
    color: #94a3b8;
}
</style>