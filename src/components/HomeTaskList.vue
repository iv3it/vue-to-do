<template>
  <section class="mb-5">
    <div class="d-flex justify-content-between itemsBox">
      <h2 class="itemsBox__title">Active</h2>
      <Button text="Priority" class="me-3"/>
      <Button text="A-Z"/>
    </div>

    <transition-group class="itemsBox__list" tag="ul" name="list" appear>
      <li v-for="task in activeTasks" :key="task.id">
        <SectionItem :title="task.title" :id="task.id" :priority="task.priority" :completed="task.completed"/>
      </li>
    </transition-group>
  </section>

  <section class="mb-5">
    <div class="d-flex justify-content-between itemsBox">
      <h2 class="itemsBox__title">Completed</h2>
      <Button text="Priority" class="me-3"/>
      <Button text="A-Z"/>
    </div>
    <transition-group class="itemsBox__list" tag="ul" name="list" appear>
      <li v-for="task in completedTasks" :key="task.id">
        <SectionItem :title="task.title" :id="task.id" :priority="task.priority" :completed="task.completed"/>
      </li>
    </transition-group>
  </section>
</template>

<script>
import SectionItem from '@/components/SectionItem.vue'
import Button from '@/components/Button.vue'
import { onTasksUpdated } from '@/firebase'
import { ref, computed } from 'vue';

export default {
  name: 'HomeTaskList',
  components: {
    SectionItem,
    Button,
  },
  setup() {
    let tasks = ref([]);

    let onSnapshot = (snapshot) => {
      tasks.value = [];
      snapshot.docs.forEach((doc) => {
        tasks.value.push({...doc.data(), id: doc.id})
      })
    }

    onTasksUpdated(onSnapshot);
    
    const activeTasks = computed(() => tasks.value.filter((task) => !task.completed));
    const completedTasks = computed(() => tasks.value.filter((task) => task.completed));

    return {
      tasks, activeTasks, completedTasks
    }
  },
}
</script>

<style lang="scss" scoped>

@import '../variables';

.itemsBox {
  padding-bottom: 1rem;
  border-bottom: 1px solid $black;
  margin-bottom: 1rem;

  &__title {
    font-size: 1.3rem;
    font-weight: 500;
    width: 100%;
    margin-bottom: 0;
  }

  &__list {
    position: relative;
    list-style-type: none;
    padding-left: 0;
  }
}

// Animations

.list-move {
  transition: all 0.3s ease-in-out;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-enter-active,
.list-leave-active {
  transition: all 0.6s ease;
}

.list-leave-active {
  position: absolute;
  width: 100%;
}
</style>