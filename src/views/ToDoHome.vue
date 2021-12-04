<template>
  <HomeStatistics />

  <ButtonAddItem />

  <section class="mb-5">
    <div class="d-flex justify-content-between itemsBox">
      <h2 class="itemsBox__title">Active</h2>
      <Button text="Priority" class="me-3"/>
      <Button text="A-Z"/>
    </div>
    <SectionItem title="Lorem ipsum"/>
  </section>

  <section class="mb-5">
    <div class="d-flex justify-content-between itemsBox">
      <h2 class="itemsBox__title">Completed</h2>
      <Button text="Priority" class="me-3"/>
      <Button text="A-Z"/>
    </div>
    <SectionItem title="Lorem ipsum"/>
  </section>
</template>

<script>
// @ is an alias to /src
import SectionItem from '@/components/SectionItem.vue'
import Button from '@/components/Button.vue'
import ButtonAddItem from '@/components/ButtonAddItem.vue'
import HomeStatistics from '@/components/HomeStatistics.vue'

export default {
  name: 'Home',
  components: {
    SectionItem,
    Button,
    ButtonAddItem,
    HomeStatistics
  }
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
}
</style>