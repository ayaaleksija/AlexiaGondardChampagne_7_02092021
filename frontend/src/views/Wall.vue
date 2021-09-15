<template>
<div class="wall">
  <li class= "card" v-for="post in posts" :key="post.id">
    <v-card class="mx-auto" max-width="400">
      <v-card-title>
        <span class="text-h6 font-weight-light">Groupomania</span>
      </v-card-title>

      <v-card-text class="text-h5 font-weight-bold">{{post.content}}</v-card-text>

      <!-- <v-card-actions>
        <v-list-item class="grow">
          <v-list-item-content>
            <v-list-item-title> {{ post.user.username }}</v-list-item-title>
            <v-list-item-title>{{post.createdAt}}</v-list-item-title>
          </v-list-item-content>

          <v-row align="center" justify="end">
            <v-icon class="mr-1">mdi-comment-text</v-icon>
          </v-row>
        </v-list-item>
       </v-card-actions>-->
    </v-card>
  </li>
</div>
</template>

<script>
export default {
  name: "Wall",

  data () {
    return {
      header : 'Posts les plus récents',
      posts : [
          { content: "premier post ! " },
          { content: "second post ! " },
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
  margin: 10px;
  .card {
    margin: 20px;
  }
}
</style>