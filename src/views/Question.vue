<template>
  <div class="question">
    <Question v-for="question in questions" :questions="question" v-bind:key="question"></Question>
  </div>
</template>

<script>
// @ is an alias to /src
import Question from '@/components/Question.vue'

export default {
  name: 'question',
  components: {
    Question
    },
      data() {
        return {
          questionIndex: 0,
          questions :[
            {
            id: "1",
            untitled: "Cocher ce que vous aimez !!",
            response: [{
              choix1: "Raclette",
              choix2: "Tartiflette",
              choix3: "Croque Monsieur",
            }]
            },
          {
            id: "2",
            untitled: "Connaissez-vous notre groupe cyberSSE ?",
            response: [{
              choix1: "OUI",
              choix2: "NON",
              choix3: "Peut être",
            }]
          },
          {
            id: "3",
            untitled: "Choisissez votre langage préféré",
            response: [{
              choix1: "SQL",
              choix2: "JAVA",
              choix3: "PHP",
            }]
          }]
      }
    },
        methods: {
          next: function() {
        this.questionIndex++;
        },
          prev: function() {
        this.questionIndex--;
        }
      },
      created() {
        
      },
}
</script>