<template>
  <div class="d-flex justify-content-between align-items-center item">
    <div class="d-flex">
      <input type="checkbox" />
      <div class="ms-3">
        <p class="item__title">{{ title }}</p>
        <p class="item__subtitle">Added: 21.11.2021</p>
      </div>
    </div>
    <router-link :to="{ name: 'Edit' }">
      <Button text="Edit" class="button button--dark"/>
    </router-link>
    <div class="priority-label"></div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  name: 'SectionItem',
  props: {
    title: String
  },
  components: {
    Button,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../variables';

.priority-label {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  border-top: 0.9rem solid $red;
  border-right: 0.9rem solid transparent;
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
