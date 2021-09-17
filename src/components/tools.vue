<template>
<div v-scrollAnimate="'fadeIn'">

  <h1>Tools I Use</h1>
  <div class="logos">
      <img src="../assets/tools/html-js-css.png" alt="html-js-css">
      <img src="../assets/tools/vue.png" alt="vue">
      <img src="../assets/tools/sass.png" alt="sass">
      <img src="../assets/tools/bootstrap.png" alt="bootstrap">
      <img src="../assets/tools/webpack.png" alt="webpack">
      <img src="../assets/tools/adobe-creative-cloud.png" alt="adobe-creative-cloud">
      <img src="../assets/tools/firebase.png" alt="firebase">
      <img src="../assets/tools/github.png" alt="github">
  </div>

</div>

</template>

<script>
export default {

}
</script>

<style scoped>

h1 {
    text-align: center;
    padding: 30px;
}

.logos {
    max-width: 900px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    justify-items: center;
    grid-gap: 20px;
    padding-bottom: 50px;
}
@media screen and (max-width: 720px) {
    .logos {
        grid-template-columns: 1fr 1fr
    }
}
@media screen and (max-width: 500px) {
    .logos {
        grid-template-columns: 1fr
    }
}

img {
    padding: 0 30px 30px 30px;
    height: 75px;
}



</style>