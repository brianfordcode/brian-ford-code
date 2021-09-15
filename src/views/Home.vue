<template>

  <opening/>
  <about/>
  <work/>
  <tools/>
  <siteFooter/>

</template>

<script>
import opening from "../components/opening.vue"
import about from "../components/about.vue"
import work from "../components/work.vue"
import tools from "../components/tools.vue"
import siteFooter from "../components/footer.vue"

export default {
  name: 'Home',
  components: { opening, about, work, tools, siteFooter }
}
</script>

<style scoped>

</style>