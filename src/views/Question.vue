<template>
  <div class="question">
    <Question v-for="question in questions"></Question>
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
            untitled: "Blablablabla",
            response: [{
              choix1: "lol",
              choix2: "noob",
              choix3: "why not",
            }]
          }]
      }
    },
      methods: {
        
      },
      created() {
        
      },
}
</script>