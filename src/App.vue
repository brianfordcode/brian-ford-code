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
        transform: translateX(0px);
    }
}
@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-500px);
    }
    to {
        opacity: 1;
        transform: translateX(0px);
    }
}
@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(500px);
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
