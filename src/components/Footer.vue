<script setup lang="ts">
import X from "../components/icons/X.vue"
import Linkedin from "../components/icons/Linkedin.vue"
import Github from "../components/icons/Github.vue"

const year = new Date().getFullYear()

</script>

<template>
    <footer>
        <div class="footer">
            <span >Platon N</span>
            <span> Copyright {{ year }}</span>
            <div class="socials">
                <a href="https://github.com/xnpltn" target="_blank" rel="noopener noreferrer"><Github/></a>
                <a href="linkedin.com/in/xnpltn" target="_blank" rel="noopener noreferrer"><Linkedin/></a>
                <a href="https://twitter.com/xnpltn" target="_blank" rel="noopener noreferrer"><X/></a>
            </div>
        </div>
    </footer>
</template>


