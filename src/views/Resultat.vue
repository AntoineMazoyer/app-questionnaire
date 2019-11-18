<template>
    <div style="text-align: center; margin-top: 15%;">
        <h1><b>Votre score est de {{ score }} / 10<br></b></h1>
        <div v-if="score < 5">
            <h1>Malheureusement vous n'avez pas la moyenne et vous n'êtes pas retenu pour rejoindre notre entreprise.</h1>
        </div>
        <div v-if="score > 4">
            <h1>Félicitation ! Vous serez retenu pour la deuxième étape de notre recrutement !</h1>
        </div>
        <router-link to="/">
            <v-btn>Retourner à l'accueil</v-btn>
        </router-link>
    </div>
</template>

<script>
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
Vue.use(Vuetify)
import router from "../router"
export default {
    name: "resultat",
    data() {
    return {
      score: this.$route.query.score
    }
}}
</script>