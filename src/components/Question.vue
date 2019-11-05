<template>
  <div class="Question">
    <div class="Questionnaire">
        <div class="Header"><h1>{{question.id}} - {{question.untitled}}</h1></div>
        <div v-for="(test, index) in question.responses" :key="test">
          <input type="checkbox" v-model="question.userAnswer[index]">
          <label>{{test}}</label>
          <br>
        </div>
      <span>{{question.userAnswer}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Question',
  props: ['question'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.Header{
    display: contents;
    background-color: rgb(238, 238, 238);
}

.choice{
    margin-top: 2%;
}

.backcolor{
    background-color: whitesmoke;
}

</style>
