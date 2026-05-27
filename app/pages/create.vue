<script setup lang="ts">
import { ref } from 'vue'
import { X } from 'lucide-vue-next'

const foodOne = ref('')
const foodTwo = ref('')
const description = ref('')
const tags = ref<string[]>([])
const tagInput = ref('')

const handleTagInput = () => {
  if (tagInput.value.includes(',')) {
    const parts = tagInput.value.split(',')
    tagInput.value = parts.pop() || ''
    
    parts.forEach(part => {
      const cleanTag = part.trim()
      if (cleanTag && tags.value.length < 5 && !tags.value.includes(cleanTag)) {
        tags.value.push(cleanTag)
      }
    })
  }
}

const removeTag = (index: number) => {
  tags.value.splice(index, 1)
}

const handleSubmit = () => {
  if (!foodOne.value || !foodTwo.value || !description.value) {
    alert('Please fill out all required fields.')
    return
  }

  // Add any remaining text in tagInput as a tag if valid
  const finalTags = [...tags.value]
  const remainingTag = tagInput.value.trim()
  if (remainingTag && finalTags.length < 5 && !finalTags.includes(remainingTag)) {
    finalTags.push(remainingTag)
  }
  
  const comboData = {
    foodOne: foodOne.value,
    foodTwo: foodTwo.value,
    description: description.value,
    tags: finalTags,
  };

  console.log('New Combo Data:', comboData)

  // Clear form
  foodOne.value = ''
  foodTwo.value = ''
  description.value = ''
  tags.value = []
  tagInput.value = ''
};
</script>

<template>
  <div class="create-page">
    <h1 class="page-title">Create a New Combo</h1>
    <form @submit.prevent="handleSubmit" class="create-form">
      <div class="form-group">
        <label for="foodOne">Food One</label>
        <input
          type="text"
          id="foodOne"
          v-model="foodOne"
          required
        />
      </div>
      <div class="form-group">
        <label for="foodTwo">Food Two</label>
        <input
          type="text"
          id="foodTwo"
          v-model="foodTwo"
          required
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea
          id="description"
          v-model="description"
          rows="4"
          required
        ></textarea>
      </div>
      <div class="form-group">
        <label for="tags">Tags</label>
        <input
          type="text"
          id="tags"
          v-model="tagInput"
          @input="handleTagInput"
          placeholder="Type a tag and press comma"
          :disabled="tags.length >= 5"
        />
        <div class="tags-container" v-if="tags.length > 0">
          <div v-for="(tag, index) in tags" :key="index" class="tag-pill">
            <span class="tag-avatar"></span>
            <span class="tag-text">{{ tag }}</span>
            <span class="remove-tag" @click="removeTag(index)">
              <X :size="14" />
            </span>
          </div>
        </div>
        <small class="tags-hint" v-if="tags.length >= 5">Maximum 5 tags allowed.</small>
      </div>
      <button type="submit" class="btn submit-btn">Create Combo</button>
    </form>
  </div>
</template>

<style scoped>
.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1rem;
}

.tag-pill {
  background-color: #EBD9FC;
  color: #4A0E4E;
  padding: 0.4rem 0.8rem;
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
  border: 1px solid transparent;
}

.tag-pill:hover {
  background-color: #DABDF8;
}

.tag-avatar {
  width: 18px;
  height: 18px;
  background-color: #4A0E4E;
  border-radius: 50%;
  flex-shrink: 0;
}

.tag-text {
  line-height: 1;
}

.remove-tag {
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #4A0E4E;
  opacity: 0.6;
  transition: opacity 0.2s;
  padding: 2px;
}

.remove-tag:hover {
  opacity: 1;
}

.tags-hint {
  display: block;
  margin-top: 0.5rem;
  color: var(--primary-accent-color);
  font-size: 0.8rem;
}
</style>
