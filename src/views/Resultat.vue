<template>
    <div style="text-align: center; margin-top: 15%;">
        <h1><b>Votre score est de {{ totalGoodAnswer }} / 10<br></b></h1>
        <router-link to="/">
            <v-btn>Retourner à l'accueil</v-btn>
        </router-link>
    </div>
</template>

<script>
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
Vue.use(Vuetify)
import router from "../router";
export default {
    name: "resultat",
    data() {
    return {
      totalGoodAnswer: this.$route.query.totalGoodAnswer
    }
}}
</script>