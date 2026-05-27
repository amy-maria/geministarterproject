<script setup lang="ts">
import Avatar from '../components/Avatar.vue'
</script>

<template>
  <div class="preview-page">
    <h1 class="page-title">Component Preview</h1>
    
    <section class="preview-section">
      <h2 class="section-subtitle">Avatar Component</h2>
      <div class="preview-grid">
        <div class="preview-item">
          <p>Primary</p>
          <Avatar initial="AR" bgColor="primary" />
        </div>
        <div class="preview-item">
          <p>Secondary</p>
          <Avatar initial="FS" bgColor="secondary" />
        </div>
        <div class="preview-item">
          <p>Neutral (Default)</p>
          <Avatar initial="GC" />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.preview-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.preview-section {
  background-color: var(--component-bg-color);
  padding: 2rem;
  border-radius: 8px;
  margin-top: 2rem;
}

.section-subtitle {
  color: var(--secondary-accent-color);
  margin-bottom: 1.5rem;
  font-family: 'Lora', serif;
}

.preview-grid {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.preview-item {
  text-align: center;
}

.preview-item p {
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  color: var(--text-color-secondary);
}
</style>
