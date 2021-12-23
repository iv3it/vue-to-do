<template>
  <section class="statistics">
      <div class="statistics__circle">{{ completedTasks7Days }}</div>
      <div>
        <p class="statistics__text">TASKS DONE<br/>IN THE LAST 7 DAYS</p>
      </div>
  </section>
</template>

<script>
import { toRef, computed } from 'vue';

export default {
  name: 'HomeStatistics',
  props: {
    tasks: Object,
  },
  setup(props) {
    let tasks = toRef(props, 'tasks');

    let lastSevenDays = Date.now() - 7 * 24 * 60 * 60 * 1000;
    const completedTasks7Days = computed(() => tasks.value.filter((task) => task.completed && (task.completedDateUnix > lastSevenDays)).length);

    return {
      completedTasks7Days
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../variables';

.statistics {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: $black;
  padding: 1.5rem;

  &__circle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background-color: $white;
    color: $black;
    font-size: 2rem;
    font-weight: 700;
  }

  &__text {
    color: $white;
    font-size: 1.2rem;
    font-weight: 500;
    padding-left: 2rem;
    margin-bottom: 0;
  }

}
</style>