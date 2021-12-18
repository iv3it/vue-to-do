<template>
  <HomeStatistics />

  <ButtonAddItem />

  <HomeTaskList />
</template>

<script>
// @ is an alias to /src
import ButtonAddItem from '@/components/ButtonAddItem.vue'
import HomeStatistics from '@/components/HomeStatistics.vue'
import HomeTaskList from '@/components/HomeTaskList.vue'

export default {
  name: 'Home',
  components: {
    ButtonAddItem,
    HomeStatistics,
    HomeTaskList
  },
  setup() {
    
    return {
      
    }
  },
}
</script>

<style lang="scss" scoped>

</style>