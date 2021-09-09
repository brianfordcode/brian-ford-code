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
    width: 800px;
    margin: 0 auto 50px auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    justify-items: center;
    grid-gap: 20px;
}

.box {
    height: 200px;
    width: 200px;
    background-color: grey;
    
}

</style>