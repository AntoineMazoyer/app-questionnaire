<template>
  <div class="Question">
    <div class="Questionnaire">
        <div class="Header"><h1>{{questions.id}} - {{questions.untitled}}</h1></div>
        <div class="backcolor">
            <!-- v-model="checkedChoice" -->
              <p>{{questions.response}}</p>
            <!-- <div class="choicelist"><span>Choix coché(s): {{checkedChoice}}</span></div> -->
        </div>
    </div>
    <button>Question suivante</button>
  </div>
</template>

<script>
export default {
  name: 'Question',
  props: ['questions']
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
