<template>

<div class="container">
  <img src="./assets/my-image.png" alt="my-image" class="my-image">
  
  <div class="pages">
    <router-view/>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/portfolio">Portfolio</router-link> |
    <router-link to="/contact">Contact</router-link>
  </div>
  </div>
  
  
</div>
  
</template>

<style>

* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #BBB5C5;
  padding: 10% 0;
}

.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.my-image {
  width: auto;
  height: 500px;
  padding-top: 40px;
  border-radius: 50%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding-top: 150px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
