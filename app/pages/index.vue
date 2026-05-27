<script setup lang="ts">
import { BookOpen, Users, Star } from 'lucide-vue-next'
import marmiteImage from '../assets/kenailuj-english-breakfast-2150514_1920.jpg'
import chocolateImage from '../assets/birgl-chocolate-4536570_1920.jpg'
import strawberryImage from '../assets/rosinas-strawberry-4529640_1920.jpg'

const features = [
  {
    icon: BookOpen,
    title: 'Discover new flavours',
    description: 'Explore a world of unexpected taste sensations and find your next favorite meal.'
  },
  {
    icon: Users,
    title: 'Join the community',
    description: 'Connect with fellow food enthusiasts, share your own creations, and get feedback.'
  },
  {
    icon: Star,
    title: 'Rate and review',
    description: 'Help others by rating and reviewing combinations, and climb the leaderboard.'
  }
]

const recentCombos = [
  {
    title: 'Marmite & Cheese',
    description: 'A classic savory delight, loved by many.',
    tags: ['Savory', 'Classic'],
    image: marmiteImage
  },
  {
    title: 'Maltesers & Salt & Vinegar Crisps',
    description: 'An unexpected sweet and salty crunch.',
    tags: ['Sweet', 'Salty', 'Crunchy'],
    image: chocolateImage
  },
  {
    title: 'Strawberries & Black Pepper',
    description: 'A surprising burst of sweet and spicy.',
    tags: ['Fruity', 'Spicy'],
    image: strawberryImage
  }
]
</script>

<template>
  <div>
    <div class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">The perfect pair for your plate.</h1>
        <p class="hero-subtitle">
          Find the weirdest and most wonderful food combinations, recommended by
          our community of food lovers.
        </p>
        <div class="search-container">
          <input
            type="text"
            class="search-input"
            placeholder="e.g. marmite and cheese"
          />
          <button class="search-button">Search</button>
        </div>
      </div>
    </div>
    <section class="features-section">
      <FeatureCard
        v-for="feature in features"
        :key="feature.title"
        :icon="feature.icon"
        :title="feature.title"
        :description="feature.description"
      />
    </section>

    <section class="recent-combos-section">
      <h2 class="section-title">Recent Combo's</h2>
      <div class="combo-grid">
        <ComboCard
          v-for="combo in recentCombos"
          :key="combo.title"
          :title="combo.title"
          :description="combo.description"
          :tags="combo.tags"
          :image="combo.image"
        />
      </div>
    </section>
  </div>
</template>