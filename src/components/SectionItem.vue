<template>
  <div class="d-flex justify-content-between align-items-center mb-3 item">
    <div class="d-flex">
      <input type="checkbox" />
      <div class="ms-3">
        <p class="item__title">{{ title }}</p>
        <p class="item__subtitle">Added: 21.11.2021</p>
      </div>
    </div>
    <router-link :to="{ name: 'Edit', params: { id: id } }">
      <Button text="Edit" class="button button--dark"/>
    </router-link>
    <div class="priority-label" :class="'priority-label--' + priority"></div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  name: 'SectionItem',
  props: {
    title: String,
    id: String,
    priority: String,
  },
  components: {
    Button,
  },
  setup(props) {
    
    return {
      
    }
  }
}
</script>

<style scoped lang="scss">
@import '../variables';

.priority-label {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  border-right: 0.9rem solid transparent;

  &--low {
    border-top: 0.9rem solid $green;
  }

  &--medium {
    border-top: 0.9rem solid $yellow;
  }

  &--high {
    border-top: 0.9rem solid $red;
  }
}
.item {
  position: relative;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  box-shadow: 0px 0px 5px 0px rgba(210, 210, 210, 1);
  border-radius: 4px;

  &__title {
    font-size: 1.1rem;
    font-weight: 500;
    margin-bottom: 0;
  }

  &__subtitle {
    font-size: 0.7rem;
    font-weight: 500;
    font-style: italic;
    margin-bottom: 0;
  }
}
</style>
