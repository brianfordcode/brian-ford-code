<template>
    <router-view/>
</template>

<style>

* {
  margin: 0;
  padding: 0;
  font-family: 'Courier New', Courier, monospace;
}


/* directives */
.fadeAndSlideLeft {
   animation:  slideInLeft 1.5s;
}

@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-100vw);
    }
    to {
        opacity: 1;
        transform: translateX(0px);
    }
}
@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(100vw);
    }
    to {
        opacity: 1;
        transform: translateX(0px);
    }
}

.fadeIn {
    animation-name: fadeIn;
    animation-duration: 2s;
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
