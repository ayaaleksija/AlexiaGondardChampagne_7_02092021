<template>
  <div class="signup">
    <SignupForm />

    <p class="loginLink">Vous avez déjà un compte? <router-link to="/" class="routerLink">Connectez-vous</router-link></p>

    <Footer />
  </div>
</template>

<script>
import SignupForm from "@/components/SignupForm.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'Signup',
  components: {
    SignupForm,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.loginLink {
  text-align: center;
    margin: 20px;
}
</style>
