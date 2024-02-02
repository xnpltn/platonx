<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import Blogs from '@/composables/useBlogs';
import NotFoundView from '../NotFoundView.vue';
import {onBeforeMount, ref} from 'vue'
import type  {Ref} from 'vue'
import useMarked from '@/composables/useMarked'

interface BlogItem {
    title: string;
    description: string;
    datePublished: string;
    slug: string;
    article: string
}
const route = useRoute()
const blog: Ref<BlogItem> = ref({title: '', description:'', datePublished:'', slug:'', article: ''})
import Footer from '@/components/Footer.vue';
const {slug} = route.params

onBeforeMount(()=>{
    const foundBlog = Blogs.find(blog => blog.slug == slug)
    if(foundBlog){
        blog.value = foundBlog
        
    }
    
})



</script>
<template>
    <RouterLink to="/blog">← back</RouterLink>
    <div class="articles" v-if="blog.title && blog.description && blog.article">
        <div v-html="useMarked(ref(blog.article)).value"></div>
    </div>
    <Footer v-if="blog.title && blog.description && blog.article"/>
    <NotFoundView v-else/>
</template>


<style scoped>
h1{
    color: white;
}

.articles{
    margin-bottom: 10rem;
}

img{
    width: 20px;
}
</style>