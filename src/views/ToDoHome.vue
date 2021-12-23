<template>
  <HomeStatistics :tasks="tasks"/>

  <ButtonAddItem />

  <HomeTaskList :tasks="tasks" />
</template>

<script>
import HomeStatistics from '@/components/HomeStatistics.vue'
import ButtonAddItem from '@/components/ButtonAddItem.vue'
import HomeTaskList from '@/components/HomeTaskList.vue'
import { onTasksUpdated } from '@/firebase'
import { ref } from 'vue';

export default {
  name: 'ToDoHome',
  components: {
    HomeStatistics,
    ButtonAddItem,
    HomeTaskList,
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
    
    return {
      tasks,
    }
  },
}
</script>

<style lang="scss" scoped>

</style>