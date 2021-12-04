<template>
  <div class="container">
    <router-link :to="{name: 'Home'}">
      <header>
        <h1 class="title my-3">TO DO</h1>
      </header>
    </router-link>
    <router-view />
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss">
</style>
