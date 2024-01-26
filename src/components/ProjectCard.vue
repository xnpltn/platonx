<script setup lang="ts">


type Project = {
    name: string
    description: string
}

defineProps({
    project : {
        type: Object,
        required: true
    }
})

</script>

<template>
    <div class="project_card">
        <h3>{{ project.name }}</h3>
        <span>{{ project.description }}</span>
        <p>
            <div class=" stack_Card">
                <span class="stack">html</span>
            </div>
        </p>
    </div>
</template>

<style scoped>
.stack_Card{
    display: flex;
    flex-wrap: wrap;
}

.stack{
    border: 1px solid red;
    padding: 0.1rem;
    font-size: small;
    border-radius: 30%;
}
</style>