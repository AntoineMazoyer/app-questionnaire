<template>
  <div class="question">
    <Question :question="questions[getQuestionIndex()]"></Question>
    <button v-if="questionIndex > 0" @click="prev">Question Précédente</button>
    <button v-if="this.questions.length > this.questionIndex" @click="next">Question suivante</button>
    <button v-if="questionIndex == questions.id" @click="end">Temriner le questionnaire</button>
  </div>
</template>

<script>
// @ is an alias to /src
import Question from "@/components/Question.vue";
import Json from "../assets/data.json"

export default {
  name: "question",
  components: {
    Question
  },
  data() {
    return {
      questionIndex: 0,
      questions: Json
    };
  },
  methods: {
    next() {
      if (this.questions.length > this.questionIndex) {
        this.questionIndex++;
      }
    },
    prev() {
      if (this.questionIndex > 0) {
        this.questionIndex--;
      }
    },
    end(){
      if (this.questions.length == this.questionIndex){

      }
    },
    getQuestionIndex() {
      return this.questionIndex;
    }
  },
  mounted: function() {
    console.log(this.questions[0])
  },
  created() {}
};
</script>