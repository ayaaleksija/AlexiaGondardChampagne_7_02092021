<template>
  <div class="wall">
    <div class="component">
      <Navbar />
      <CreatePost />
    </div>

    <div class="container-card">
      <li class="card" v-for="post in posts" :key="post.id">
        <v-card class="post-card" >
          <v-card-title class="title-card">
            <span><img alt="logo groupomania" src="../assets/icon.png"/></span>
            <v-icon class="btnAction" v-if="getUser.username == post.User.username || getUser.isAdmin" @click="deletePost(post.id, index)">mdi-trash-can-outline</v-icon>
          </v-card-title>

          <v-card-text class="postContent">{{post.content}}</v-card-text>

          <v-card-actions>
            <v-list-item class="grow">
              <v-list-item-content>
                <v-list-item-text class="h6"> {{ post.User.username }}</v-list-item-text>
              </v-list-item-content>

              <v-row align="center" justify="end">
                <v-icon class="commentIcon">mdi-comment-text</v-icon>
              </v-row>
              
              <!-- <div v-for="comment in post.comments" :key="comment.id">OK</div> -->
            </v-list-item>
          </v-card-actions>
        </v-card>
      </li>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import CreatePost from "@/components/CreatePost.vue";
import { mapGetters } from "vuex";

export default {
  name: "Wall",
  components: {
    Navbar,
    CreatePost,
  },

  data() {
    return {
      header: "Posts les plus récents",
      posts: [],
    };
  },
  computed: {
    ...mapGetters(["getUser"]),
  },
  mounted (){
    const request = {
    method: "GET",
    headers: {
      authorization: "Bearer " + this.$store.getters.getToken,
      },
    };
    fetch("http://localhost:3000/api/posts/", request)
      .then((response) => response.json())
      .then((data) => {
        this.posts = data
      })
    
  },
  methods: {
    // getComments(post) {
    //   const request = {
    // method: "GET",
    // headers: {
    //   authorization: "Bearer " + this.$store.getters.getToken,
    //   },
    // };
    // fetch("http://localhost:3000/api/posts/" + post.id + "/comments", request)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     post.comments = data
    //   })
    // },
    deletePost (postId, index) {
      const request = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer " + this.$store.getters.getToken,
        },
      };
      fetch("http://localhost:3000/api/posts/" + postId, request )
        .then(() => {
          this.posts.splice(index, 1)
        })
    }
  }
};
</script>

<style lang="scss" scoped>
.component {
  display: flex;
  flex-direction: row;
}
.wall {
  list-style: none;
  justify-content: center;
  .container-card {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    .card {
      margin: 20px;
      .post-card {
        width: 300px; 
        height: 200px;
        img {
          height: 30px;
          width: 30px;
          vertical-align: bottom;
        }
      }
    }
  }
}
.title-card{
  justify-content: space-between;
}
.postContent{
  font-size: medium;
  font-weight: bold;
  color: black!important;
  height: 50px;

}
</style>