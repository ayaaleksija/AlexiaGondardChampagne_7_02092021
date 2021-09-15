<template>
  <div class="signup">
    <SignupForm />

    <p class="loginLink">Vous avez déjà un compte? <router-link to="/" class="routerLink">Connectez-vous</router-link></p>

  </div>
</template>

<script>
import SignupForm from "@/components/SignupForm.vue";

export default {
  name: 'Signup',
  components: {
    SignupForm,
  },
};
</script>

<style lang="scss" scoped>
.loginLink {
  text-align: center;
    margin: 20px;
}
</style>
