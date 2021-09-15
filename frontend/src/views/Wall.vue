<template>

<div class="wall">
  <Navbar />

  <li class= "card" v-for="post in posts" :key="post.id">
    <v-card class="mx-auto" max-width="400">
      <v-card-title>
        <span class="text-h6 font-weight-light">
          <img alt="logo groupomania" src="../assets/icon.png" />Groupomania</span>
      </v-card-title>

      <v-card-text class="text-h5 font-weight-bold">{{post.content}}</v-card-text>

      <v-card-actions>
        <v-list-item class="grow">
          <v-list-item-content>
            <v-list-item-title> {{ post.username }}</v-list-item-title>
            <v-list-item-title>{{post.createdAt}}</v-list-item-title>
          </v-list-item-content>

          <v-row align="center" justify="end">
            <v-icon class="mr-1">mdi-comment-text</v-icon>
          </v-row>
        </v-list-item>
      </v-card-actions>
    </v-card>
  </li>
</div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";


export default {
  name: "Wall",
  components: {
    Navbar,
  },

  data () {
    return {
      header : 'Posts les plus récents',
      posts : [
          {id: "1", username: "Alexia", content: "premier post ! ", date: "20/01/2021" },
          {id: "2", username: "Ligk", content: "second post ! ", date: "20/01/2021"},
      ],
    }
  },
};
</script>

<style lang="scss" scoped>
.wall {
  list-style: none;
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
</style>