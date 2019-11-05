<template>
  <div class="accueil">
    <Accueil v-bind="content"></Accueil> 
  </div>
</template>

<script>
// @ is an alias to /src
import Accueil from '@/components/Home.vue'

export default {
  name: 'accueil',
  components: {
    Accueil
    },
      data() {
        return {
          content: {
            title: "Test de sécurité",
            welcome: "Bienvenue dans l'entreprise EEV SAS",
            text : "Avant d'entrer au sein de l'entreprise, il vous est demandé de répondre à un certains nombres de questions.",
            person: {
              firstname: "",
              lastname: "",
              company: ""
            }
          },
        }
      },
      methods: {
        
      },
      created() {
        
      },
}
</script>
