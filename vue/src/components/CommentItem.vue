<template>
  <div class="comment">
    <div>
      <div class=""><b>Email: </b> {{ comment.email }}</div>
      <div class=""><b>Content: </b> {{ comment.body }}</div>
      
    </div>
    <div class="d-flex">
      <my-button class="btn btn-danger" @click="$emit('remove', comment)" >Delete</my-button>
      <my-button class="btn btn-success mx-2" @click="$router.push(`/comment/${comment.id}`)" >Open</my-button>
    </div>
  </div>
</template>
<script>

export default {
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.comment {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
