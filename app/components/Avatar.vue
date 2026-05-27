<script setup lang="ts">
interface Props {
  initial: string
  bgColor?: 'primary' | 'secondary' | 'neutral'
}

withDefaults(defineProps<Props>(), {
  bgColor: 'neutral'
})
</script>

<template>
  <div class="avatar" :class="`bg-${bgColor}`">
    <span class="initial">{{ initial }}</span>
  </div>
</template>
