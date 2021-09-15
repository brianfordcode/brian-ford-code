<template>

    <h1 class="title"
        v-scrollAnimate="'fadeIn'"
        style="animation-duration: 3s"
     >Projects I Make</h1>
    <div class="projects-container"
         v-scrollAnimate="'fadeIn'"
     >
        <div v-for="(project, index) in projects"
             :key="index"
             class="box"
             @mouseover="showDetails(index)"
             @mouseleave="removeDetails(index)"
             >
             <a :href="`${project.url}`"
                target="_blank"
             >
             <div class="details"
                  v-if="selectedProjectIndex==index"
             >
                <p>{{ project.title }}</p>
                <p>{{ project.kind }}</p>
             </div>
             <img style="height: 200px;"
                  :src="project.screenshot"
                  :alt="project.screenshot"
             >
             </a>
             
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
                url: "#"
                },
                {
                title: "Ram Nami Trading Co.",
                kind: "E-Commerce Website",
                screenshot: require("../assets/projects/ram-nami-screenshot.jpg"),
                url: "#"
                },
                {
                title: "Ford the World",
                kind: "Travel Website",
                screenshot: require("../assets/projects/coming-soon.png"),
                url: "#"
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

@media screen and (max-width: 720px) {
    .projects-container {
        grid-template-columns: 1fr 1fr
    }
}
@media screen and (max-width: 500px) {
    .projects-container {
        grid-template-columns: 1fr
    }
}

.title {
    text-align: center;
    padding: 50px;
}

.box {
    overflow: hidden;
    position: relative;
    height: 200px;
    width: 200px;
    margin: 10px;
    background-color: grey;
    box-shadow: 0px 0px 33px -20px #000000;
    cursor: pointer;
    transition: .15s ease-in-out;
}

.box:hover {
    transform: scale(1.1);
}

.details {
    color: black;
    text-align: center;
    position: absolute;
    background-color: rgba(255,255,255,0.75);
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    animation:  slideIn .45s;
}

@keyframes slideIn {
    from {
        transform: translateY(-100px);
    }
    to {
        transform: translateY(0px);
    }
}


</style>