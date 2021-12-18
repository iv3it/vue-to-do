<template>
  <h2 class="text-center">Edit task</h2>
  <Suspense>
    <FormEdit :id="taskId"/>
  </Suspense>
</template>

<script>
import FormEdit from '@/components/FormEdit.vue'

export default {
  components: {
    FormEdit,
  },
  props: {
    id: String
  },
  setup(props) {
    let taskId = props.id;

    return {
      taskId
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../variables';

</style>