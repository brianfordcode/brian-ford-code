<template>
  <footer>
    <span> 2021 &copy; Brian Ford Code</span>
    <a href="#">This Sites Code</a>

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
    font-family: 'Courier New', Courier, monospace;
    padding: 10px;
    background-color: rgb(22, 22, 97);;
}

@media screen and (max-width: 400px) {
  footer {
    flex-direction: column;
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