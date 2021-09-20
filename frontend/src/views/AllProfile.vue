<template>
    <div class="listUser">
        <Navbar />
        <li class="listUserCard" v-for="user in users" :key="user.id">
        <v-card class="userCard">
            <v-card-title class="text-h5">{{user.username}}</v-card-title>
            <v-card-subtitle>{{user.department}}</v-card-subtitle>
        </v-card>
        </li>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import { mapGetters } from "vuex";

    export default {
    name: 'AllProfile',

    components: {
        Navbar,
    },
    data(){
        return {
            header: "Liste des utilisateurs",
            users:[],
        }
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
    fetch("http://localhost:3000/api/auth/", request)
        .then((response) => response.json())
        .then((data) => {
            this.users = data
        })
    },
}

</script>

<style lang="scss" scoped>
.listUser{
    display: flex;
    flex-direction: row;
    .listUserCard{
        display: flex;
        flex-wrap: wrap;
        .userCard{
            width: 200px;
            height: 100px;
            margin: 20px;
        }
    }
}

</style>