<template>
  <button class="button">{{ text }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String
  }
}
</script>

<style lang="scss" scoped>
@import '../variables';

.button {
  cursor: pointer;
  background-color: transparent;
  border: 1px solid $black;
  border-radius: 5px;
  padding: 0.1rem 0.5rem;
  transition: 0.2s ease-out;
  font-weight: 700;

  &:hover {
    color: $white;
    background-color: $black;
  }

  &--dark {
    background-color: $black;
    color: $white;

    &:hover {
      color: $black;
      background-color: $white;
    }

    &--xl {
      padding: 0.7rem 2rem;
    }
  }
}
</style>