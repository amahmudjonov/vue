<template>
  <div class="container">
    <!-- <h1>{{ message }}</h1>
        <p>Count: <strong>{{ count }}</strong></p>
        <button class="btn btn-success" v-on:click="increment">Increment</button>
        <button class="btn btn-warning ml-2" @click="decrement">Decrement</button> @ = v-on: -->

    <!-- <div class="comment">
      <div>
        <b>Name: <b>Samar</b></b>
      </div>
      <div>
        <b>Email: <b>Samar</b></b>
      </div>
      <div>
        <b
          >Content:
          <b
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            voluptates amet perspiciatis non nisi aliquid at assumenda
            voluptate. Illum aliquam asperiores deleniti quasi commodi
            cupiditate consectetur ad corrupti! Praesentium, error!</b
          ></b
        >
      </div>
    </div> -->

    <button class="btn btn-warning" @click="fetchComments">
      Fetch Comments
    </button>

    <div class="container d-flex">
      <my-selecet v-model="selectedSort" :options="selectOptions"> </my-selecet>

      <my-input class="form-control" v-model="serachQuery" />
    </div>

    <my-modal v-model:show="modalVisible">
      <comment-form @addComment="createComment" />
    </my-modal>

    <comment-list
      v-if="!isLoading"
      :comments="sortAndSearchComments"
      @remove="removeComment"
    />
    <div v-else>
      <span>Loading...</span>
    </div>

    <div class="page_wrapper">
      <div
        class="btn btn-outline-primary mx-1"
        @click="changePage"
        :class="{'btn btn-primary mx-1 bg-dark': page === pageNum }"
        v-for="pageNum in totalPage"
        :key="pageNum.id"
      >
        {{ pageNum }}
      </div>
    </div>
  </div>
</template>
<script>
import CommentForm from "@/components/CommentForm.vue";
import CommentList from "@/components/CommentList.vue";
import Navbar from "@/components/Navbar.vue";
import mySelecet from "@/components/UI/mySelecet.vue";
import axios from "axios";
import MyInput from "@/components/UI/myInput.vue";
export default {
  /// Exported components *************************************

  components: {
    CommentForm,
    CommentList,
    Navbar,
    mySelecet,
    MyInput,
  },

  /// Data ///////////////////////////////////////////////

  data() {
    return {
      message: "Hello Vue",
      count: 0,
      modalVisible: false,
      comments: [],
      isLoading: false,
      page: 1,
      limit: 50,
      totalPage: 0,
      selectedSort: "",
      selectOptions: [
        { value: "name", name: "Filter by name" },
        { value: "email", name: "Filter by email" },
      ],
      serachQuery: "",
    };
  },

  /// Methods ################################################

  methods: {
    // increment() {
    //   this.count++;
    // },
    // decrement() {
    //   this.count--;
    // },

    createComment(comment) {
      this.comments.push(comment);
      this.modalVisible = false;
    },

    removeComment(comment) {
      this.comments = this.comments.filter((c) => c.id !== comment.id);
    },

    showModal() {
      this.modalVisible = true;
    },

    changePage() {
      this.page = this.page + 1;
      this.fetchComments();
    },

    async fetchComments() {
      try {
        this.isLoading = true;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/comments",
          {
            params: {
              _limit: this.limit,
              _page: this.page,
            },
          }
        );
        this.totalPage = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        console.log(response.data);
        this.comments = response.data;
      } catch (e) {
        console.log(e);
      } finally {
        this.isLoading = false;
      }
    },
  },

  /// Lifecycles $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

  mounted() {
    this.fetchComments();
  },

  // watch: {
  //   selectedSort(newValue){
  //     this.comments.sort((comm1, comm2) => {
  //       if(newValue === 'name'){
  //         return comm1.name.localComapre(comm2.name);
  //       }else if(newValue === 'email'){
  //         return comm1.email.localComapre(comm2.email)
  //       }
  //     })
  //   }
  // }
  computed: {
    filteredComments() {
      return [...this.comments].sort((a, b) => {
        if (this.selectedSort === "name") {
          return a.name.localeCompare(b.name);
        } else if (this.selectedSort === "email") {
          return a.email.localeCompare(b.email);
        }
      });
    },
    sortAndSearchComments() {
      return this.filteredComments.filter((comment) => {
        return (
          comment.name.toLowerCase().includes(this.serachQuery.toLowerCase()) ||
          comment.email.toLowerCase().includes(this.serachQuery.toLowerCase())
        );
      });
    },
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
