<script setup lang="ts">
import type { Component } from 'vue';

defineProps<{
  icon: Component;
  title: string;
  description: string;
}>();
</script>

<template>
  <div class="feature-card">
    <component :is="icon" :size="48" class="feature-icon" />
    <h3 class="feature-title">{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<style scoped>
.feature-card {
  background-color: var(--component-bg-color);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  flex-basis: 300px;
}

.feature-title {
  font-size: 1.3rem;
  color: var(--secondary-accent-color);
  margin-bottom: 1rem;
}

.feature-icon {
  color: var(--primary-accent-color);
  margin-bottom: 1.5rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
