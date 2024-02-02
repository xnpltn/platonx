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
        <a :href="project.link" target="_blank" rel="noopener noreferrer"><h3 class="pjorect_card-heading">{{ project.name }}</h3></a>
        <span style="max-width: 10ch;">{{ project.description }}</span>
        <p>
            <div class=" stack_Card">
                <span class="stack" v-for="stack in project.stack" :key="project.id">{{stack}}</span>
            </div>
        </p>
    </div>
</template>

<style scoped>
.stack_Card{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
}

.stack{
    border: 1px solid #94a3b8;
    padding: 0.5rem;
    font-size: small;
    border-radius: 3%;
}
.pjorect_card-heading{
    color: #f1f5f9;
    text-transform: capitalize;
    text-decoration: underline;
}
</style>