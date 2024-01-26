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
        <h3 class="pjorect_card-heading">{{ project.name }}</h3>
        <span style="max-width: 10ch;">{{ project.description }}</span>
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
    justify-content: center;
    gap: 1rem;
}

.stack{
    border: 1px solid red;
    padding: 0.5rem;
    font-size: small;
    border-radius: 30%;
}
.pjorect_card-heading{
    color: #f1f5f9;
    text-transform: capitalize;
}
</style>