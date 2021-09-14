<template>
  <div class="home">

    <img alt="logo groupomania" src="../assets/icon.png" />
    <h1>Bienvenue sur Groupomania</h1>
    <p>La plateforme où communication est le mot clé!</p>
    
    <LoginForm />

    <p class="signupLink">Vous n'avez pas de compte? <router-link to="/signup" class="routerLink">Inscrivez-vous</router-link></p>
    
    <Footer />
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'
import Footer from '@/components/Footer.vue'

  export default {
    name: 'Home',

    components: {
        LoginForm,
        Footer,
    },
  }
</script>

<style lang="scss" scoped>
.home {
  text-align: center;
}
img {
    height: 100px;
    width: 100px;
  }
.signupLink {
  margin: 20px;
}
</style>
