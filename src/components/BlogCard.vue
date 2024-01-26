<script setup lang="ts">
defineProps({
    blog: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <article class="blog_card">
            <a href="/blog/" style="display: block;">{{ blog.title }}</a>
            <span>{{ blog.date }}</span>
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
</style>