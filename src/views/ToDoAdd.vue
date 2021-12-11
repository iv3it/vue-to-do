<template>
  <h2 class="text-center">Add a new task</h2>
  <FormAdd />
</template>

<script>
import FormAdd from '@/components/FormAdd.vue'

export default {
  components: {
    FormAdd,
  }
}
</script>

<style lang="scss" scoped>
@import '../variables';

</style>