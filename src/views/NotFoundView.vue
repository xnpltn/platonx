<script setup lang="ts">
import Footer from "@/components/Footer.vue"
</script>
<template>
    <main>
        <div class="centered_container">
            <div class="centered">
                <h1>Not Found LOL😂</h1>
                <NotFound/>
            </div>
        </div>
    </main>
    <Footer/>
</template>

<style scoped>

.centered_container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}

.centered{
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
}

</style>