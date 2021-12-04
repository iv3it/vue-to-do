<template>
  <router-link :to="{ name: 'Add' }">
    <button class="button__add">Add new task</button>
  </router-link>
</template>

<script>
export default {
  name: 'ButtonAddItem',
}
</script>

<style lang="scss" scoped>
@import '../variables';

.button__add {
  position: relative;
  font-size: 1.7rem;
  cursor: pointer;
  background-color: $black;
  color: $white;
  border: none;
  border-radius: 10px;
  padding: 0.5rem;
  transition: 0.2s ease-out;
  width: 100%;
  font-weight: 500;
  margin: 2rem 0;

  &:hover {
    background-color: lighten($black, 10%);
  }
}
</style>