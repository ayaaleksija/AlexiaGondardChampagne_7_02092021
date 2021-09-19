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

          <v-card-actions class="footerPost">
            <v-list-item class="grow">
              <v-list-item-content>
                <p class="h6"> {{ post.User.username }}</p>
              </v-list-item-content>
              <router-link :to="{name: 'Comments', params: {PostId: post.id} }"><v-icon class="commentIcon">mdi-comment-text</v-icon></router-link>
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
    ...mapGetters(["getUser"], ["getToken"]),
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
        width: 400px; 
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
  color: black!important;;
  height: 75px;
}
.grow{
  justify-content: space-between;
}

a {
  text-decoration: none;
}

@media (min-width: 320px) and (max-width: 426px) {
  .component{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>