<template>
  <div>
    <div class="container form-control mt-5">
      <form @submit.prevent class="w-75 mx-auto" action="">
        <my-input
          v-model="comment.name"
          type="text"
          class="form-control mt-3"
          placeholder="Name"
        />
        <input
          v-model="comment.email"
          type="text"
          class="form-control mt-3"
          placeholder="Email"
        />
        <input
          v-model="comment.content"
          type="text"
          class="form-control mt-3"
          placeholder="Content"
        />
        <!-- :value = v-bing:value -->
        <my-button @click="createComment" class="btn btn-primary mt-3 mb-2">
          Add Comment
        </my-button>
      </form>
    </div>
  </div>
</template>

<script>
import MyButton from "./UI/MyButton";
import MyInput from "./UI/myInput.vue";
export default {
  components: {
    MyButton,
    MyInput,
  },
  props: {},
  data() {
    return {
      comment: {
        name: "",
        email: "",
        content: "",
      },
    };
  },
  methods: {
    createComment(e) {
      this.$emit("addComment", this.comment);
      this.comment = {
        name: "",
        email: "",
        content: "",
      };
    },
  },
  watch: {
    comment: {
      handler(newValue) {
        console.log(newValue);
      },
      deep: true
    },
  },
};
</script>

<style></style>
