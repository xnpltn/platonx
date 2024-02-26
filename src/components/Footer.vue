<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
    
    <footer>
        <div class="footer">
            <span class="hiden_small">Platon N</span>
            <span class="hiden_small"> &copy; {{ new Date().getFullYear() }}</span>
            <div class="socials">
              <strong class="bright"><a href="https://github.com/xnpltn" target="_blank">Github</a></strong>
              <strong class="bright"><a href="https://github.com/xnpltn" target="_blank">LinkedIn</a></strong>
              <strong class="bright"><a href="https://github.com/xnpltn" target="_blank">X</a></strong>
            </div>
        </div>
    </footer>
</template>


<style scoped>

.footer{
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  place-content: center;
  justify-items: center;
  bottom: 0;
  padding-top: 2rem;
  padding-bottom: 2rem;
  border-top: 1px solid #374151;
  background-color: #111827;
  widows: 100%;
  
}

.hr{
  color: #4b5563;
}
</style>


