<script setup lang="ts">
import ProjectCard from "@/components/ProjectCard.vue";
import BlogCard from "@/components/BlogCard.vue";
import Footer from "@/components/Footer.vue"
import Blogs from '@/composables/useBlogs';
import Projects from "@/composables/useProjects";



</script>

<template>
  <main>
    <section class="center">
        <div style="text-align: center;">
          <p>
          Hi, I am <strong class="bright">Platon</strong>.<br/>
          I like building things and I enjoy programming.
        </p>
        <p>
          I am Interested in <strong class="bright">Backend</strong>, <strong class="bright">Machine Learning</strong> and building <strong class="bright">Terminal Applications.</strong>
        </p>
        <p>I like coding with <strong class="bright">Go(golang)</strong>, <strong class="bright">Python</strong>, <strong class="bright">JavaScript</strong> and <strong class="bright">C</strong> </p>
      </div>
    </section>

    <h2 class="title" align="center">Projects</h2>
    <section class="center projects">
      <ProjectCard v-for="project in Projects" :project="project"/>
    </section>

    <h2 class="title" align="center">Blog</h2>
    <section class="articles">
      <BlogCard v-for="blog in Blogs" :blog="blog" :key="blog.id"/>
    </section>
  </main>
  <Footer/>
</template>

<style scoped>
.bright{
  color: #94a3b8;
  text-decoration: underline;
  filter: brightness(1.2);
}
</style>