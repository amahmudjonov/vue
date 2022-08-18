<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <my-button @click="showModal" class="btn btn-primary"
      >Add comment</my-button
    >

    <my-button class="btn btn-light mx-1" @click="$router.push('/')">Home</my-button>

    <my-button
      class="btn btn-light border mx-1"
      @click="$router.push('/comment')"
      to="/comment"
      >Comments</my-button
    >
    <my-button
      class="btn btn-light border mx-1"
      @click="$router.push('/about')"
      to="/about"
      >About</my-button
    >

    <slot></slot>
  </nav>
</template>

<script>
import mySelecet from "./UI/mySelecet.vue";
import MyButton from './UI/MyButton.vue';
export default {
  components: { mySelecet, MyButton },
  props: {
    showModal: {
      type: Function,
    },
    selectedSort: {
      type: Function,
    },
    selectOptions: {
      type: Array,
    },
  }
};
</script>
