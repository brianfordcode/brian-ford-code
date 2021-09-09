<template>
    <div class="container">
        <div class="text">
            <p>Hi, my name is <span class="name">Brian Ford</span></p>
            <p>I'm a <span class="fed">Front-End Developer</span></p>
            <button class="btn">See My Work</button>
        </div>
        
    </div>

</template>

<script>
export default {

}
</script>

<style scoped>

.container {
    background-color: rgb(22, 22, 97);
    height: 100vh;
    /* width: 100vw; */
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* overflow: hidden; */
}

.text {
    font-family: 'Courier New', Courier, monospace;
    text-align: right;
    color: white;
    padding: 30px;
}
.name {
    color: red;
    font-size: 50px;
}

.fed {
    font-size: 34px;
}

.btn {
    margin-top: 50px;
    padding: 10px;
    font-family: 'Courier New', Courier, monospace;
    border: none;
    cursor: pointer;
    transition: .15s ease-in-out;
    outline: none;
}
.btn:hover {
    transform: scale(1.1);
}



</style>