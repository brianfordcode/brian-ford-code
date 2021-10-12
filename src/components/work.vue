<template>
<div v-scrollAnimate="'fadeIn'">


    <h1 class="title">Projects I Make</h1>

    <div class="projects-container">
            <div v-for="(project, index) in projects"
                :key="index"
                class="box"
                @mouseover="showDetails(index)"
                @mouseleave="removeDetails(index)"
                >
                <transition name="slide">
                    <div class="details" v-if="selectedProjectIndex==index">
                        <p>{{ project.title }}</p>
                        <p>{{ project.kind }}</p>
                        <a :href="`${project.url}`" target="_blank">Visit Site</a>
                        <a :href="`${project.code}`" target="_blank">View Code</a>
                    </div>
                </transition>
                    <img style="height: 200px;"
                        :src="project.screenshot"
                        :alt="project.screenshot"
                    >
            </div>
    </div>

</div>
    

</template>

<script>
export default {

    methods: {
        showDetails(index) {
            this.selectedProjectIndex = index
        },
        removeDetails() {
            this.selectedProjectIndex = null
        }
    },

    data() {
        return {
            selectedProjectIndex: null,
            projects: [
                {
                title: "Portraits by Basundhara",
                kind: "Photography Website",
                screenshot: require("../assets/projects/basu-site-screenshot.jpg"),
                url: "https://www.portraitsbybasundhara.com",
                code: "https://github.com/brianfordcode/basu-site"
                },
                {
                title: "Ram Nami Trading Co.",
                kind: "E-Commerce Website",
                screenshot: require("../assets/projects/ram-nami-screenshot.jpg"),
                url: "https://ramnamitradingco.netlify.app",
                code: "https://github.com/brianfordcode/ram-nami"
                },
                {
                title: "Brian Ford Film",
                kind: "My Film Website",
                screenshot: require("../assets/projects/film-screenshot.png"),
                url: "https://www.brianfordfilm.com",
                code: "https://github.com/brianfordcode/brian-ford-film"
                },
                {
                title: "Math Exercises",
                kind: "Personal Project of Math Exercises",
                screenshot: require("../assets/projects/math-screenshot.png"),
                url: "https://www.mathexercises.netlify.app/",
                code: "https://github.com/brianfordcode/math-exercises"
                },
            ]
        }
    }
}
</script>

<style scoped>

.projects-container {
    max-width: 900px;
    margin: 0 auto 50px auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    justify-items: center;
    grid-gap: 20px;
}

.title {
    text-align: center;
    padding: 50px;
}

.box {
    overflow: hidden;
    position: relative;
    height: 200px;
    background-color: grey;
    box-shadow: 0px 0px 33px -20px #000000;
    transition: .15s ease-in-out;
    margin-bottom: 30px;
}

.box:hover {
    transform: scale(1.1);
}

.details {
    background-color: rgba(255,255,255,0.75);
    height: 100%;
    width: 100%;
    position: absolute;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    animation:  slideIn .45s;
}

.details a {
    text-decoration: none;
    color: black;
    border: 1px solid black;
    padding: 3px;
    transition: .15s ease-in-out;
}

.details a:hover {
    transform: scale(1.1);
}

@media screen and (max-width: 720px) {
    .title {
        padding-top: 0;
    }
    .projects-container {
        grid-template-columns: 1fr 1fr
    }
}
@media screen and (max-width: 500px) {
    .projects-container {
        grid-template-columns: 1fr
    }
}

@keyframes slideIn {
    from {
        transform: translateY(-100px);
    }
    to {
        transform: translateY(0px);
    }
}

.slide-enter-active,
.slide-leave-active {
    transition: transform 2s;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateY(-100vw);
}


</style>