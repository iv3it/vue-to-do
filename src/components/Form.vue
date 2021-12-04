<template>
  <form class="form">
    <div class="mb-5">
      <label for="taskName" class="form__title">Task name</label>
      <input type="text" id="taskName"/>
    </div>
    <div class="mb-5">
      <p class="form__title">Priority</p>
      <div class="container p-0 mx-0">
        <div class="row">
          <div class="col-sm-4 col-12 d-flex justify-content-center">
            <input type="radio" id="priorityLow" name="priority" value="priorityLow" class="form__radio">
            <label for="priorityLow" class="w-100 form__label text-center me-0 mb-sm-0 mb-3">Low</label>
          </div>
          <div class="col-sm-4 col-12 d-flex justify-content-center">
            <input type="radio" id="priorityMedium" name="priority" value="priorityMedium" class="form__radio" checked>
            <label for="priorityMedium" class="w-100 form__label text-center me-0 mb-sm-0 mb-3">Medium</label>
          </div>
          <div class="col-sm-4 col-12 d-flex justify-content-center">
            <input type="radio" id="priorityHigh" name="priority" value="priorityHigh" class="form__radio">
            <label for="priorityHigh" class="w-100 form__label text-center me-0 mb-sm-0 mb-3">High</label>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-5">
      <p class="form__title">Category</p>
      <input type="radio" id="ideas" name="category" value="ideas" class="form__radio" checked>
      <label for="ideas" class="form__label mb-sm-0 mb-3">Ideas</label>

      <input type="radio" id="work" name="category" value="work" class="form__radio">
      <label for="work" class="form__label mb-sm-0 mb-3">Work</label>

      <input type="radio" id="meetings" name="category" value="meetings" class="form__radio">
      <label for="meetings" class="form__label mb-sm-0 mb-3">Meetings</label>

      <input type="radio" id="payment" name="category" value="payment" class="form__radio">
      <label for="payment" class="form__label mb-sm-0 mb-3">Payment</label>

      <input type="radio" id="shopping" name="category" value="shopping" class="form__radio">
      <label for="shopping" class="form__label mb-sm-0 mb-3">Shopping</label>

      <input type="radio" id="other" name="category" value="other" class="form__radio">
      <label for="other" class="form__label mb-sm-0 mb-3">Other</label>
    </div>
    <Button text="Save" class="button--dark button--dark--xl"/>
  </form>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  name: 'Form',
  components: {
    Button,
  }
}
</script>

<style lang="scss" scoped>
@import '../variables';

input {
  border: 1px solid $black;
  border-radius: 4px;
  padding: 0.2rem 0.5rem;
  display: block;
  width: 100%;

  &:focus {
    outline: 1px solid $black;
  }
}

.form {
  &__title {
    position: relative;
    display: block;
    font-size: 1.3rem;
    font-weight: 500;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #1d1d1d;
  }

  &__label {
    border: 1px solid $black;
    padding: 0.4rem 1rem;
    border-radius: 4px;
    margin-right: 1rem;
    transition: 0.2s ease-out;
    cursor: pointer;

    &:hover {
      background-color: lighten($black, 80%);
    }
  }

  &__radio {
    display: none;

    &:checked + .form__label {
      background-color: $black;
      color: $white;
    }
  }
}
</style>