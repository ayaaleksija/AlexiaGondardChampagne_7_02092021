<template>
  <div class="wall">
    <div class="component">
      <Navbar />
      <CreatePost />
    </div>

    <div class="container-card">
      <li class="card" v-for="post in posts" :key="post.id">
        <v-card class="post-card" max-width="300" height="200">
          <v-card-title>
            <span class="text-h6 font-weight-light"><img alt="logo groupomania" src="../assets/icon.png"/>Groupomania</span>
          </v-card-title>

          <v-card-text class="text-h5 font-weight-bold">{{post.content}}</v-card-text>

          <v-card-actions>
            <v-list-item class="grow">
              <v-list-item-content>
                <v-list-item-title> {{ post.User.username }}</v-list-item-title>
              </v-list-item-content>

              <v-row align="center" justify="end">
                <v-icon class="mr-1">mdi-comment-text</v-icon>
              </v-row>
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
      img {
        height: 30px;
        width: 30px;
        vertical-align: bottom;
      }
    }
  }
}
</style>