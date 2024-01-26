<script setup lang="ts">
import Footer from "../components/Footer.vue"
import ProjectCard from "@/components/ProjectCard.vue";
import BlogCard from "@/components/BlogCard.vue";



</script>

<template>
  <main>
    <section class="center">
        <div style="text-align: center;">
          <p>
          Hi, I am <strong class="bright">Platon</strong>😎.<br/>
          I like building things and I enjoy programming.
        </p>
        <p>
          I am Interested in <strong class="bright">Machine Learning</strong>, <strong class="bright">Backend</strong> and building <strong class="bright">Terminal Applications.</strong>
        </p>
      </div>
    </section>

    <h2 class="title">Projects</h2>
    <section class="center projects">
      <ProjectCard :project="{name: 'Porject 1', description: 'Decription 1'}"/>
    </section>

    <h2 class="title">Blog</h2>
    <section class="articles">
      <BlogCard :blog="{title: 'Title', date:'33/13/2050'}"/>
    </section>
  </main>
  <Footer/>
</template>

<style scoped>
.bright{
  color: #f1f5f9;
}
</style>