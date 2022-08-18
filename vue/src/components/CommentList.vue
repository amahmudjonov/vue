<template>
  <div v-if="comments.length > 0">
    <h3>Comments</h3>
    <transition-group name="list">
      <comment-item
        class="comment"
        v-for="comment in comments"
        v-bind:key="comment.id"
        :comment="comment"
        @remove="$emit('remove', comment)"
      >
      </comment-item>
    </transition-group>
  </div>
  <div v-else>
    <h2>no comments</h2>
  </div>
</template>

<script>
import CommentItem from "./CommentItem.vue";
export default {
  components: {
    CommentItem,
  },
  props: {
    comments: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.comment {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
}
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>
