<template>
  <opening/>
  <about/>
  <work/>
  <siteFooter/>
</template>

<script>
import opening from "../components/opening.vue"
import about from "../components/about.vue"
import work from "../components/work.vue"
import siteFooter from "../components/footer.vue"

export default {
  name: 'Home',
  components: { opening, about, work, siteFooter }
}
</script>

<style scoped>

  h1 {
    font-size: 60px;
  }

  p {
    padding-left: 140px;
  }
</style>