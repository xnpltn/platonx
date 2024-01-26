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
          Hire there, I am <strong>Platon</strong>😎.<br/>
          I like building things and I enjoy programming.
        </p>
        <p>
          I am Interested in Machine Learning, Backend and building Terminal Applications.
        </p>
      </div>
    </section>

    <h2 class="title">Projects</h2>
    <section class="projects">
      <ProjectCard :project="{name: 'porject1', description: 'Description 1'}"/>
      <ProjectCard :project="{name: 'porject1', description: 'Description 1'}"/>
      <ProjectCard :project="{name: 'porject1', description: 'Description 1'}"/>
      <ProjectCard :project="{name: 'porject1', description: 'Description 1'}"/>
      <ProjectCard :project="{name: 'porject1', description: 'Description 1'}"/>
      <ProjectCard :project="{name: 'porject1', description: 'Description 1'}"/>
      <ProjectCard :project="{name: 'porject1', description: 'Description 1'}"/>
    </section>

    <h2 class="title">Blog</h2>
    <section class="articles">
      <BlogCard :blog="{title: 'Title', date:'33/13/2050'}"/>
      <BlogCard :blog="{title: 'Title', date:'33/13/2050'}"/>
      <BlogCard :blog="{title: 'Title', date:'33/13/2050'}"/>
      <BlogCard :blog="{title: 'Title', date:'33/13/2050'}"/>
      <BlogCard :blog="{title: 'Title', date:'33/13/2050'}"/>
      <BlogCard :blog="{title: 'Title', date:'33/13/2050'}"/>
    </section>
  </main>
  <Footer/>
</template>