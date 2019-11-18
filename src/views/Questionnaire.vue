<template>
  <div class="question">
    <v-app>
      <v-content>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <h1
                style="margin-bottom: 5%;"
              >Test de {{firstname}} {{lastname}} (appartenant à l'entreprise : {{company}})</h1>
              <v-progress-linear color="light-green darken-4" :value="(10) + this.questionIndex*10"></v-progress-linear>
              <Question :question="questions[am_getQuestionIndex()]"></Question>
              <v-btn
                v-if="this.questions.length > this.questionIndex + 1"
                @click="am_next"
              >Question suivante</v-btn>
              <v-btn v-if="questionIndex > 0" @click="am_prev">Question Précédente</v-btn>
              <v-btn
                v-if="this.questionIndex+1 == this.questions.length"
                @click="am_calcResponse"
              >Terminer le test</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import Vue from "vue";
import Vuetify from "vuetify/lib";
Vue.use(Vuetify);
import Question from "@/components/Question.vue";
// importation de mon fichier JSON comportant mes données (questions et réponses)
import Json from "../assets/data.json";
import router from "../router";

export default {
  name: "question",
  components: {
    Question
  },
  data() {
    return {
      // On met l'index des questions à 0 pour ensuite pouvoir passer à la question suivante ou revenir à une question précédante
      questionIndex: 0,
      score: 0,
      // On précise que les données sont dans le fichier JSON
      questions: Json,
      // On récupère le prénom et le nom de l'utilisateur qui a validé le formulaire de la page d'accueil
      firstname: this.$route.query.firstname,
      lastname: this.$route.query.lastname,
      company: this.$route.query.company
    };
  },
  methods: {
    // Question suivante
    am_next() {
      if (this.questions.length > this.questionIndex) {
        this.questionIndex++;
      }
    },
    // Question précédente
    am_prev() {
      if (this.questionIndex > 0) {
        this.questionIndex--;
      }
    },
    // On parcours et on compare les réponses envoyés par l'utilisateur ainsi que les bonnes réponses prédéfinies dans le fichier JSON
    am_calcResponse() {
      const rightAnswer = this.questions.map(questionIndex => {
        // return questionIndex.userAnswer.map(currentAnswer => {
        //   return questionIndex.goodAnswer.find(currgoodAnswer => {
        //     return (
        //       currgoodAnswer === currentAnswer
        //     );
        //   });
        // });
        let correctQuestion = 0;
        questionIndex.userAnswer.forEach((currAnswer, index) => {
          if (
            questionIndex.goodAnswer[index] == currAnswer
          ) {
            correctQuestion++;
          }
        });
        if (correctQuestion == questionIndex.userAnswer.length) {
          this.score++;
        }
      });
      console.log("Nombre total de bonnes réponses : ", this.score);
      router.push({
        name: "resultat",
        query: {
          score: this.score
        }
      });
    },
    // Index question
    am_getQuestionIndex() {
      return this.questionIndex;
    }
  },
  mounted: function() {},
  created() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.v-btn {
  margin-top: 2vh;
  padding-left: 1vh;
}
</style>