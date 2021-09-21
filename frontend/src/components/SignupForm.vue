<template>
  <div class="signup">
    <img alt="logo groupomania" src="../assets/icon-left-font.png" />

      <v-form>
        <v-container class="formSignup">
          <v-col class="inputSignup">
            <v-text-field
              v-model="user.email" label="Email" required>
            </v-text-field>
          </v-col>

          <v-col class="inputSignup">
            <v-text-field
              v-model="user.password" type="password" label="Mot de passe" required>
            </v-text-field>
          </v-col>

          <v-col class="inputSignup">
            <v-text-field
              type="password" label=" Veuillez confirmer votre mot de passe" required>
              <button class="unmask" type="button" title="Mask/Unmask password to check content">Unmask</button>
            </v-text-field>
          </v-col>

          <v-col class="inputSignup">
            <v-text-field
              v-model="user.username" label="Username" required>
            </v-text-field>
          </v-col>

          <v-col class="inputSignup">
            <v-text-field
              v-model="user.department" label="Service" required>
            </v-text-field>
          </v-col>

          
        </v-container>
      </v-form>

      
    <v-btn class="btnSignup" elevation="2" @click="signup"> M'inscrire </v-btn>

  </div>
</template>

<script>
export default {
  name: 'SignupForm',

  data(){
    return {
      user:{
        email: "",
        password: "",
        username: "",
        department: "",
      },
    };
  },
  methods: {
    signup() {
      const request = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.user),
      };
      fetch("http://localhost:3000/api/auth/signup/", request)
        .then((response) => response.json())
        .then(() => {
          alert('Votre compte a bien été créé!')
          this.$router.push('/');
        });
    },
  },
}
</script>

<style lang="scss" scoped>
.signup{
  text-align: center;
}
img {
  height: 200px;
  width: 200px;
}

.formSignup{
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
