<template>
  <footer>
    <span>{{new Date().getFullYear()}} &copy; Brian Ford Code</span>
    <a href="https://github.com/brianfordcode/brian-ford-website" target="_blank">This Sites Code</a>

  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>

footer {
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: white;
    padding: 13px;
    background-color: rgb(22, 22, 97);;
}

@media screen and (max-width: 415px) {
  footer {
    flex-direction: column;
  }
  a {
    margin: 10px;
  }
}

a {
  color: white;
  border: 1px solid white;
  text-decoration: none;
  padding: 3px 5px;
  transition: .15s ease-in-out;
}
a:hover {
  transform: scale(1.1);
}

</style>