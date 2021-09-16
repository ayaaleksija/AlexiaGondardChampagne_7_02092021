<template>
    <div class="profil"> 
        <div class="navbar"><Navbar /></div>
        <v-form class="form">
            <v-container>
                <v-col class="formValue">
                    <v-col>
                        <v-text-field v-model="user.username" outlined disabled></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field v-model="user.email" outlined disabled></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field v-model="user.department" outlined disabled></v-text-field>
                    </v-col>
                </v-col>
            </v-container> 
            <v-btn class="btnDelete" @click="deleteAccount">Supprimer mon compte<v-icon>mdi-trash-can-outline</v-icon></v-btn>
        </v-form>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import { mapGetters } from "vuex";


export default {
    name: "UserProfil",

    components: {
        Navbar,
    },

    data(){
        return {
            user:{
                email: "",
                username: "",
                department: "",
            },
        }
    },
    computed: {
    ...mapGetters(["getUser"])
    },
    mounted (){
        this.user = this.getUser;
    },
    methods:{
    deleteAccount() {
        const request = {
            method: "DELETE",
            headers: {
            "Content-Type": "application/json",
            authorization: "Bearer " + this.$store.getters.getToken,
            },
        };
        fetch("http://localhost:3000/api/auth/", request)
            .then(() => {
                alert("Votre compte a été supprimé !");
                this.$router.push("/");
            })
            .catch((error) => console.log("impossible d'effacer le profil " + error));
        },
    }
};
</script>

<style lang="scss" scoped>
.profil{
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    .form{
        flex-direction: column;
        text-align: center;
        width: 60%;
        .btnDelete {
            margin-bottom: 20px;
        }
    }
}
</style>