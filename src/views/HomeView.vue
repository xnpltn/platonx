<script setup lang="ts">
import Github from '@/components/icons/Github.vue';
</script>

<template>
  <main>
    <section class="center">
      <div style="text-align: center">
        <p>
          Hi, I am <strong>Platon</strong>
          <span class="phil"> /not a Philosopher tho /.</span><br />
          I like building things and I enjoy programming.<br />
          I am Interested in <strong class="bright">Backend</strong> and
          <strong class="bright">Terminal</strong>
        </p>
        <p>
          I like coding with <strong class="bright">Go(golang)</strong>,
          <strong class="bright">Python</strong>,
          <strong class="bright">JavaScript</strong> and
          <strong class="bright">C</strong><br />
          Currently learning <strong class="bright">Rust</strong><br/>
        </p>
        <p>
          <strong class="bright github"><a href="https://github.com/xnpltn" target="_blank">Github</a></strong>
        </p>
        
      </div>
    </section>
  </main>
</template>

<style scoped>
.bright {
  color: #94a3b8;
  text-decoration: underline;
  filter: brightness(1.2);
}

.phil {
  font-size: smaller;
  color: #334155;
  font-style: italic;
  margin-left: 0.5px;
}

.github:hover{
  color: azure;
}
</style>
