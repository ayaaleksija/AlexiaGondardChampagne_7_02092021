<template>
  <div class="login">
      <v-form>
        <v-container class="formLog">
          <v-col class="inputLog">
            <v-text-field
              v-model="user.email" label="Email" required>
            </v-text-field>
          </v-col>

          <v-col class="inputLog">
            <v-text-field
              v-model="user.password" label="Mot de passe" required>
            </v-text-field>
          </v-col>
          
        </v-container>
      </v-form>          
      <v-btn class="btnLogin" @click="login"> Me connecter </v-btn>
  </div>
</template>

<script>

export default {
	name: 'LoginForm',
  data(){
    return {
      user:{
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      const request = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.user),
      };
      fetch("http://localhost:3000/api/auth/login", request)
        .then((response) => response.json())
        .then((data) => {
          this.$store.commit('LOGIN', data)
          this.$router.push('Wall');
        });
    },
  },
}
</script>


<style lang="scss" scoped>
.formLog{
  text-align: center;
  width: 50%;
  v-form {
    padding: 5px;
    label {
      color: rgba(0, 0, 0, 0.5);
      margin: 10px;      
    }
  }
}
</style>
