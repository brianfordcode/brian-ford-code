<template>
    <router-view/>
</template>

<style>

* {
  margin: 0;
  padding: 0;
}


</style>

<style>

* {
  margin: 0;
  padding: 0;
}

/* directives */
.fadeAndSlideLeft {
   animation:  slideIn 2s;
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(-500px);
    }
    to {
        opacity: 1;
        transform: translateY(0px);
    }
}

.fadeIn {
    animation-name: fadeIn;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>
