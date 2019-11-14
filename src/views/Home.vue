<template>
  <div class="home">
    <Home v-bind="content"></Home> 
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'

export default {
  name: 'home',
  components: {
    Home
    },
      data() {
        return {
          content: {
            title: "Test de sécurité",
            welcome: "Bienvenue dans l'entreprise EEV SAS",
            text : "Avant d'intégrer notre entreprise, il vous est demandé de répondre à un certains nombre de questions et d'obtenir un certains nombre de bonnes réponses.",
          },
        }
      },
      methods: {
        
      },
      created() {
        
      },
}
</script>
