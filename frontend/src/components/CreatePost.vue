<template>
  <div class="createPost">

    <v-container>
      <v-textarea v-model="post.content" :rules="contentRules" class="content" color="black" label="Quoi de neuf...?"></v-textarea> 
        <div class="attachIcon">
        <v-row>
          <v-file-input v-model="post.attachment" type ="file" accept="image/png, image/jpeg, image/bmp, image/gif"></v-file-input>
          <v-btn class="btnPost" elevation="2" large @click="postContent">Publier</v-btn>
        </v-row>
        </div>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CreatePost",

  data() {
    return {
      post: {
        content: "",
        attachment: [],
      },
      contentRules: [
        (v) => !!v || "Votre post ne peut être vide",
        (v) =>
          v.length <= 140 ||
          "Votre post doit comporter moins de 140 caractères",
      ],
    };
  },
  computed: {
    ...mapGetters(["getToken"], ["getUser"]),
  },
  methods: {
    postContent() {
      const newPost = new FormData();
        newPost.append("content",this.post.content);
        newPost.append("attachment", this.post.attachment);

      const request = {
        method: "POST",
        headers: {
          authorization: "Bearer " + this.$store.getters.getToken,
        },
        body: newPost,
      };
      fetch("http://localhost:3000/api/posts", request)
        .then((response) => response.json())
        .then(() => {
          this.$router.go();
        })
        .catch((er) => {
          console.log(er);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.createPost {
  width: 75%;
  margin-top: 20px;
  text-align: center;
  .content {
    background-color: #ea8685;
    color: black; 
    padding: 20px;
  }
}
.btnPost {
  margin: 20px;
}


@media (min-width: 320px) and (max-width: 426px) {
    .createPost{
        width: 400px;
    }
}
</style>
