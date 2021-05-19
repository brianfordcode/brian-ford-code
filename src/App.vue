<template>

<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/portfolio">Portfolio</router-link> |
      <router-link to="/contact">Contact</router-link>
    </div>

<div class="container">
  <div class="image">
    <img src="./assets/my-image.png" alt="my-image" class="my-image">
  </div>
  
  <div class="pages">
    <router-view/>
    
  </div>

</div>

  
</template>

<style>

* {
  margin: 0;
  padding: 0;
}

#app {
  background-color: #BBB5C5;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}


</style>

<style scoped>

.container {
  display: flex;
  align-items: center;
}

.image
{
  width: 50%;
}

.pages
{
  width: 50%;
}

.my-image {
  height: 75vh;
  border-radius: 50%;
}

#nav {
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  
  color: #42b983;
}
</style>
