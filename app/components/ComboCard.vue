<script setup lang="ts">
defineProps<{
  title: string
  description: string
  tags: string[]
  image?: string
}>()
</script>

<template>
  <div class="combo-card">
    <div v-if="image" class="combo-image-container">
      <img :src="image" :alt="title" class="combo-image" />
    </div>
    <div class="combo-content">
      <h4 class="combo-title">{{ title }}</h4>
      <p class="combo-description">{{ description }}</p>
      <div class="combo-tags">
        <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.combo-card {
  background-color: var(--component-bg-color);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex-basis: 300px;
  text-align: left;
  transition: transform 0.2s ease-in-out;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.combo-card:hover {
  transform: translateY(-5px);
}

.combo-image-container {
  width: 100%;
  height: 180px;
  overflow: hidden;
}

.combo-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.combo-content {
  padding: 1.5rem;
}

.combo-title {
  font-size: 1.4rem;
  color: var(--primary-accent-color);
  margin-bottom: 0.5rem;
}

.combo-description {
  font-size: 0.95rem;
  color: var(--text-color-secondary);
  margin-bottom: 1rem;
}

.combo-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background-color: rgba(134, 229, 255, 0.2);
  color: var(--secondary-accent-color);
  padding: 0.3rem 0.7rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
}
</style>

