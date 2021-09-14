<template>
  <div class="signup">
    <img alt="logo groupomania" src="../assets/icon-left-font.png" />

      <v-form v-model="valid">
        <v-container class="formSignup">
          <v-col class="inputSignup">
            <v-text-field
              v-model="email" :rules="emailRule" :counter="10" label="Email" required>
            </v-text-field>
          </v-col>

          <v-col class="inputSignup">
            <v-text-field
              v-model="password" :rules="passwordRules" label="Mot de passe" required>
            </v-text-field>
          </v-col>

          <v-col class="inputSignup">
            <v-text-field
              v-model="passwordConfirmation" :rules="passwordRules" label=" Veuillez confirmer votre mot de passe" required>
            </v-text-field>
          </v-col>

          <v-col class="inputSignup">
            <v-text-field
              v-model="username" :rules="usernameRule" :counter="10" label="Pseudo" required>
            </v-text-field>
          </v-col>

          <v-col class="inputSignup">
            <v-text-field
              v-model="department" :rules="departmentRule" :counter="10" label="Service" required>
            </v-text-field>
          </v-col>

          
        </v-container>
      </v-form>

      
    <v-btn class="btnSignup" @click="signup"> M'inscrire </v-btn>

  </div>
</template>

<script>
export default {
  name: 'SignupForm',

};
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
