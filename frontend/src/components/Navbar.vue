<template>
  <div class="navbar">

    <v-card class="navCard">
      <v-navigation-drawer permanent right>
        <template v-slot:prepend>
          <img alt="logo groupomania" src="../assets/icon-above-font.png" />
            <v-list-item-content>
              <v-list-item-title class="navUserLog">{{ getUser.username }}</v-list-item-title>
            </v-list-item-content>
        </template>

        <v-divider></v-divider>

        <v-list dense>
          <v-list-item>
            <v-list-item-icon>
              <router-link to="/Wall" class="navLink"><v-icon>mdi-home-city</v-icon></router-link>
            </v-list-item-icon>
            <v-list-item-content>
              <router-link to="/Wall" class="navLink"><v-list-item-title>Accueil</v-list-item-title></router-link>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <router-link to="/myProfile" class="navLink"><v-icon>mdi-account</v-icon></router-link>
            </v-list-item-icon>
            <v-list-item-content>
              <router-link to="/myProfile" class="navLink"><v-list-item-title>Mon profil</v-list-item-title></router-link>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <router-link to="/AllProfile" class="navLink"><v-icon>mdi-account-group</v-icon></router-link>
            </v-list-item-icon>
            <v-list-item-content>
              <router-link to="/AllProfile" class="navLink"><v-list-item-title>Tous les profils</v-list-item-title></router-link>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon class="red" @click="logout()">mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title @click="logout()">Se déconnecter</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Navbar",
  computed: {
    ...mapGetters(["getUser"]),
  
  },
  methods: {
    logout() {
      this.$store.commit("LOGOUT");
      this.$router.push("/");
    },
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  text-align: center;
  max-width: 220px;
  img {
    height: 100px;
    width: 100px;
  }
  .navCard {
    margin: 20px;
  }
  .navLink {
    text-decoration: none;
    color: black;
  }
  .navUserLog{
    padding: 10px;
  }
}
</style>