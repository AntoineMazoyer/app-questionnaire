<template>
  <div class="home">
    <div id="app">
      <v-app>
        <v-content>
          <v-container fluid fill-height>
            <v-layout align-center justify-center>
              <v-flex xs12 sm8 md4>
                <div class="Header"><h1>{{ title }}</h1></div>
                <div class="Welcome"><h2>{{ welcome }}</h2></div>
                <div class="Content"><p>{{ text }}</p></div>
                <v-card class="elevation-8">
                  <v-toolbar color="primary" dark flat>
                    <v-toolbar-title>Remplissez ce formulaire avant d'accéder au questionnaire</v-toolbar-title>
                    </v-toolbar>
                      <v-card-text>
                        <v-form v-model="valid">
                          <v-row>
                          <v-icon>mdi-account</v-icon>
                          <v-text-field
                            v-model="form.firstname"
                            :rules="condition"
                            label="Prénom"
                            required
                            >
                          </v-text-field>
                          </v-row>

                          <v-row>
                          <v-icon>mdi-account</v-icon>
                          <v-text-field
                            v-model="form.lastname"
                            :rules="condition"
                            label="Nom"
                            required
                            >
                          </v-text-field>
                          </v-row>
                          
                          <v-row>
                          <v-icon>mdi-domain</v-icon>
                          <v-text-field
                            v-model="form.company"
                            :rules="condition"
                            label="Intitulé Entreprise"
                            required
                            >
                          </v-text-field>
                          </v-row>
                        </v-form>
                      </v-card-text>
                      <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn @click="am_Submitted" color="success" :disabled="!valid">Accéder au questionnaire</v-btn>
                      </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-content>
      </v-app>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import router from "../router";
Vue.use(Vuetify)
export default {
  name: 'Home',
  props: {
    title: String,
    welcome: String,
    text: String,
  },
  data() {
      return {
        form: {
          firstname: "",
          lastname: "",
          company: "",
        },
        valid: true,
        condition: [
        v => !!v || "Ce champs a besoin d'être complété",
        ],
      }
  },
  methods: {
  //on vérifie que l'utilisateur a bien entré tous les champs du formulaire avant de passer au questionnaire
  am_Submitted() {
    if(this.form.firstname != "" && this.form.lastname != "" && this.form.company != ""){
        router.replace({
          name: 'questionnaire',
          query: {
            firstname: this.form.firstname,
            lastname: this.form.lastname,
            company: this.form.company
          }
        })
    }
  }
},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Header{
  background-color: rgb(211, 211, 211);
  text-align: center
}

.Welcome{
  background-color: whitesmoke;
}

.Content{
  background-color: whitesmoke;
}

.champs{
  width: 20%;
  justify-self: center;
}

.v-input{
  margin-left: 1vh
}
</style>