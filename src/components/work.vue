<template>
    <h1 class="title">Projects</h1>

    <div 
        class="projects-container">
        <div v-for="project in projects"
             :key="project"
             class="box">
            <p>{{ project.title }}</p>
            <p>{{ project.url }}</p>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            projects: [
                {
                title: "title",
                url: "url",
                },
                {
                title: "title",
                url: "url",
                },
                {
                title: "title",
                url: "url",
                },
                {
                title: "title",
                url: "url",
                },
                {
                title: "title",
                url: "url",
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
    font-family: courier;
}

.projects-container {
    /* border: 1px solid blue; */
    max-width: 900px;
    margin: 0 auto 50px auto;
    /* display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap; */
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
    height: 200px;
    width: 200px;
    margin: 10px;
    background-color: grey;
    
}

</style>