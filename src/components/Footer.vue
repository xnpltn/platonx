<script setup lang="ts">
import X from "../components/icons/X.vue"
import Linkedin from "../components/icons/Linkedin.vue"
import Github from "../components/icons/Github.vue"

const year = new Date().getFullYear()

</script>

<template>
    
    <footer>
        <div class="footer">
            
            <span class="hiden_small">Platon N</span>
            <span class="hiden_small"> &copy; {{ year }}</span>
            <div class="socials">
                <a href="https://github.com/xnpltn" target="_blank" rel="noopener noreferrer"><Github/></a>
                <a href="https://linkedin.com/in/xnpltn" target="_blank" rel="noopener noreferrer"><Linkedin/></a>
                <a href="https://twitter.com/xnpltn" target="_blank" rel="noopener noreferrer"><X/></a>
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
  /* position: fixed; */
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


