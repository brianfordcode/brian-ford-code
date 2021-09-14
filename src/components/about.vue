<template>
<div class="container">
    <img
        class="my-image"
        src="../assets/my-image.png"
        alt="my-image"
        v-scrollAnimate="'fadeAndSlideLeft'"
    >
    
    <div
        class="text"
    >
        <h1 v-scrollAnimate="'fadeIn'" style="animation-duration: 2s">About</h1>
        <p v-scrollAnimate="'fadeIn'" style="animation-duration: 2.5s">
        I love being at the intersection of art and logic. Put me on the front lines of anything and I will thrive. I’m a problem solver, a creator and an innovator. Simplicity is at the heart of everything I do.
        <br>
        <br>
        With a background in film production, I know the importance of storytelling and how it can be incorporated into everything we make.
        <br>
        <br>
        In my spare time you will find me travelling, sailing, photography, playing poker and coding the next greatest app.
        </p>
        <button class="resume-btn"
        v-scrollAnimate="'fadeIn'"
        style="animation-duration: 3s"
        >
        Download my Resume
        </button>
        <div class="links"
             v-scrollAnimate="'fadeIn'" style="animation-duration: 3s"
        >
            <a href="#"><img src="https://img.icons8.com/ios-filled/50/000000/github.png"/></a>
            <a href="#"><img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-email-advertising-kiranshastry-solid-kiranshastry-1.png"/></a>
            <a href="#"><img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png"/></a>
        </div>
    </div>
    
</div>
 
</template>

<script>
export default {


}
</script>

<style scoped>

.container {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    text-align: center;
    padding: 50px 50px 0 30px;
    font-family: 'Courier New', Courier, monospace;
    max-width: 1200px;
    margin: 0 auto;
}

.my-image {
    width: 400px;
}

@media screen and (max-width: 720px) {
    .container {
        flex-direction: column;
        align-items: center;
        padding: 50px;
    }
    .text h1 {
        padding-top: 20px;
    }
    .my-image {
        width: 300px;
    }
    
}

.text {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.text h1 {
    padding-bottom: 20px;
}


.links {
    display: flex;
    align-items: center;
    justify-content: space-around;
    /* border: 1px solid blue; */
    width: 50%;
    padding: 20px;
}

.links img {
    cursor: pointer;
    transition: .15s ease-in-out;
    height: 50px;
    /* margin: 20px; */
}

.links img:hover {
    transform: scale(1.1);
}

.resume-btn {
    margin: 20px;
    padding: 10px;
    font-family: 'Courier New', Courier, monospace;
    background-color: white;
    border: 1px solid black;
    outline: none;
    cursor: pointer;
    transition: .15s ease-in-out;
}

.resume-btn:hover {
    transform: scale(1.1);
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