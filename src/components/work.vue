<template>
    <h1 class="title">Projects</h1>

    <div class="projects-container">
        <div v-for="(project, index) in projects"
             :key="index"
             class="box"
             
             @mouseenter="showDetails(index)"
             @mouseleave="showDetails(index)"
             >
             <div :class="{details:true, active: active }" v-if="selectedProjectIndex==index">
                <p>{{ project.title }}</p>
                <p>{{ project.kind }}</p>
             </div>
             <img style="height: 200px;" :src="project.screenshot" :alt="project.screenshot">
        </div>
    </div>

</template>

<script>
export default {

    methods: {
        showDetails(index) {
            this.selectedProjectIndex = index
            this.active = !this.active
        },
    },

    data() {
        return {
            active: false,
            inactive: true,
            selectedProjectIndex: null,
            projects: [
                {
                title: "Portraits by Basundhara",
                kind: "Photography Website",
                screenshot: require("../assets/projects/basu-site-screenshot.jpg")
                },
                {
                title: "Ram Nami Trading Co.",
                kind: "E-Commerce Website",
                screenshot: require("../assets/projects/ram-nami-screenshot.jpg")
                },
            ]
        }
    }
}
</script>

<style scoped>

.title {
    text-align: center;
    padding: 50px;
    font-family: 'Courier New', Courier, monospace;
}

.projects-container {
    /* border: 1px solid blue; */
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
    font-family: 'Courier New', Courier, monospace;
    text-align: center;
    position: absolute;
    background-color: rgba(255,255,255,0.75);
    height: 100%;
    width: 100%;
    margin: 0 auto;
    display: none;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

.active {
    display: flex;
    animation-duration: .15s;
    animation-name: slideIn;
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