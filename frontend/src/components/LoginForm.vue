<template>
  <div class="login">
      <v-form v-model="valid">
        <v-container class="formLog">
          <v-col class="inputLog">
            <v-text-field
              v-model="email" :rules="emailRule" :counter="10" label="Email" required>
            </v-text-field>
          </v-col>

          <v-col class="inputLog">
            <v-text-field
              v-model="password" :rules="passwordRules" label="Mot de passe" required>
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

};

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
