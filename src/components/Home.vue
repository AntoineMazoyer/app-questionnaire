<template>
  <div class="Accueil">
    <div class="Header"><h1>{{ title }}</h1></div>
    <div class="Welcome"><h4>{{ welcome }}</h4></div>
    <div class="Content"><p>{{ text }}</p></div>
    <input class="champs" v-model="person.firstname" placeholder="Entrer votre prénom">
    <input class="champs" v-model="person.lastname" placeholder="Entrer votre nom">
    <input class="champs" v-model="person.company" placeholder="Entrer le nom de l'entreprise">
  </div>
</template>

<script>
export default {
  name: 'Accueil',
  props: {
    title: String,
    welcome: String,
    text: String,
      person: {
              firstname: String,
              lastname: String,
              company: String
              }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Accueil{
  text-align: center;
  display: grid;
    grid-template-areas:
     "header"
     "welcome"
     "content"
}

 @media only screen and (min-width: 600px)  {
    .wrapper {

        grid-template-columns: 20% auto;
        grid-template-areas:
	    	  "header   header"
	        "welcome  welcome"
	        "content  content"
	    }
    }

.Header{
  grid-area: header;
  background-color: rgb(211, 211, 211);
}

.Welcome{
  grid-area: welcome;
  background-color: whitesmoke;
}

.Content{
  grid-area: content;
  background-color: whitesmoke;
}

.champs{
  width: 20%;
  justify-self: center;
}
</style>
