<template>
    <div class="container">
        <img class="left-bracket" src="../assets/brackets/left-bracket.png" alt="left-bracket">
        <div class="text">
            <p>Hi, my name is <span class="name">Brian Ford</span></p>
            <p>I'm a <span class="fed">Front-End Developer</span></p>
            <button @click="handleClick" class="btn">See More</button>
        </div>
        <img class="right-bracket" src="../assets/brackets/right-bracket.png" alt="right-bracket">
        
    </div>

</template>

<script>

export default {
    
    methods: {
        handleClick() {

            this.windowHeight = window.innerHeight

            const scrollOptions = {
                top: this.windowHeight,
                behavior: "smooth",
            }
        
            window.scroll(scrollOptions)


        }
    },
    data() {
        return {
            windowHeight: 0
        }
    }
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
    overflow: hidden;
}

.left-bracket {
    animation: slideInLeft 1s;
}

.right-bracket {
    animation: slideInRight 1s;
}

.text {
    font-family: 'Courier New', Courier, monospace;
    text-align: right;
    color: white;
    padding: 30px;
    animation: fadeIn 2s;
}
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
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
    -webkit-appearance: none;
}
.btn:hover {
    transform: scale(1.1);
}

@media screen and (max-width: 500px) {
    .left-bracket,
    .right-bracket,
    .btn {
        display: none;
    }
}



</style>