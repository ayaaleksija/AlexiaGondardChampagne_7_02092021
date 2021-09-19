<template>
    <div class="Comments">
    <Navbar />
    <div class="post-comment">
        <v-card class="post-card" >
            <v-card-title class="title-card">
                <span><img alt="logo groupomania" src="../assets/icon.png"/></span>
                <v-icon class="btnAction">mdi-trash-can-outline</v-icon>
            </v-card-title>
            <v-card-text class="postContent">{{post.content}}</v-card-text>
            <v-card-actions class="footerPost">
                <v-list-item class="grow">
                    <v-list-item-content>
                        <!-- <p class="h6">{{post.username}}</p> -->
                    </v-list-item-content>
                </v-list-item>
            </v-card-actions>
        </v-card>
        <v-container>
            <v-timeline dense clipped>
                <v-timeline-item fill-dot class="white--text mb-12" color="#ea8685" large>
                    <template v-slot:icon>
                        <span></span>
                    </template>
                    <v-text-field v-model="comment.content" hide-details flat label="Postez un commentaire..." solo @keydown.enter="comment">
                        <template v-slot:append>
                            <v-btn class="mx-0" depressed @click="postComment">Comment</v-btn>
                        </template>
                    </v-text-field>
                </v-timeline-item>
                <v-timeline-item v-for="comment in comments" :key="comment.id" class="mb-4" color="grey" icon-color="grey lighten-2" small>
                    <v-row justify="space-between">
                        <v-col> {{comment.User.username}}.</v-col>
                        <v-col> {{comment.content}}.</v-col>
                        <v-col><v-icon v-if="getUser.username == comment.User.username || getUser.isAdmin" @click="deleteComment(comment.id, index)" class="btnAction"> mdi-trash-can-outline </v-icon></v-col>
                    </v-row>
                </v-timeline-item>
            </v-timeline>
        </v-container>
    </div>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import { mapGetters } from "vuex";

export default {
    name: "Comments",

    components: {
        Navbar,
    },

    data() {
        return {
            post:{
                content: "",
            },
            comment:{
                content: "",
            },
            comments: [],
        };
    },
    computed: {
    ...mapGetters(["getUser"], ["getToken"]),
    },
    mounted (){
        const request = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            authorization: "Bearer " + this.$store.getters.getToken,
        },
    };
    fetch(
        "http://localhost:3000/api/posts/" + this.$route.params.PostId , request)
            .then((response) => response.json())
            .then((data) => {
            this.post = data;
        });

        const requestComment = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            authorization: "Bearer " + this.$store.getters.getToken,
        },
    };
    fetch("http://localhost:3000/api/posts/" + this.$route.params.PostId + "/comments", requestComment)
        .then((response) => response.json())
        .then((data) => {
            this.comments = data;
        });
    },
    methods: {
        postComment() {
        const body = JSON.stringify(this.comment)
        const request = {
            method: "POST",
                headers: {
                authorization: "Bearer " + this.$store.getters.getToken,
                "Content-Type": "application/json",
            },
            body: body,
        };
        fetch("http://localhost:3000/api/posts/" + this.$route.params.PostId + "/comments", request)
            .then((response) => response.json())
            .then(() => { 
                this.$router.go("/Comments");
            });
        },
        deleteComment (commentId, index) {
        const request = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                authorization: "Bearer " + this.$store.getters.getToken,
            },
        };
        fetch("http://localhost:3000/api/posts/" + commentId, request )
            .then(() => {
            this.comments.splice(index, 1)
        })
    }
    }
};
</script>

<style lang="scss" scoped>
.Comments{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    text-align: center;
    .post-comment{
        width: 70%;
        .post-card {
            height: 150px;
            margin:20px;
            img {
                height: 30px;
                width: 30px;
                vertical-align: bottom;
            } 
        }
    }
}
.title-card{
    justify-content: space-between;
}
.postContent{
    font-size: large;
    font-weight: bold;
}
</style>