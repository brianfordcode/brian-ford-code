<template>

<!-- RESUME MODAL -->
<transition name="slide">
    <div class="modal" v-if="modalShow">
        <div class="modal-content">
            <div class="close" @click="modalShow=false">&#215;</div>
            <iframe src="https://docs.google.com/document/d/e/2PACX-1vQIIcbNc9sB2DAXgDy64UXVftspwUJw9Z39tXP64bOnBMwyGXx5hnOubx9bpR63nk6COnng_ttRlF7w/pub?embedded=true" />
        </div>
    </div>
</transition>

<div class="container">
    <img
        class="my-image"
        src="../assets/my-image.png"
        alt="my-image"
        v-scrollAnimate="'slideInLeft'"
    >
    <div
        class="text"
        v-scrollAnimate="'fadeIn'"
    >
        <h1 >About Me</h1>
        <p>
        I love being at the intersection of art and logic. Put me on the front lines of anything and I will thrive. I’m a problem solver, a creator and an innovator. Simplicity is at the heart of everything I do.
        <br>
        <br>
        With a background in film production, I know the importance of storytelling and how it can be incorporated into everything we make.
        <br>
        <br>
        When I'm not coding the next greatest app, you will find me travelling, sailing, doing photography, playing poker or writing screenplays.
        </p>
        
        <div class="links">
            <button class="resume-btn" @click="showResume">See my Resume</button>
            <a href="https://github.com/brianfordcode" target="_blank"><img src="https://img.icons8.com/ios-filled/50/000000/github.png"/></a>
            <a href="mailto:brianfordcode@gmail.com" target="_blank"><img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-email-advertising-kiranshastry-solid-kiranshastry-1.png"/></a>
        </div>
    </div>
</div>

</template>

<script>

export default {
    methods: {
        showResume() {
            window.innerWidth > 900 ? this.modalShow = true : window.open("https://docs.google.com/document/d/e/2PACX-1vQIIcbNc9sB2DAXgDy64UXVftspwUJw9Z39tXP64bOnBMwyGXx5hnOubx9bpR63nk6COnng_ttRlF7w/pub", '_blank');
        }
    },
    data() {
        return {
            modalShow: false,
        }
    }

}
</script>

<style scoped>

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 30px 50px 0 50px;
    max-width: 1200px;
    margin: 0 auto;
}

.my-image {
    width: 400px;
}

.text {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 100px;
    height: 100%;
}

.text h1 {
    padding: 20px;
}

.links {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 20px;
}

.links img {
    cursor: pointer;
    transition: .15s ease-in-out;
    height: 50px;
    margin: 0 10px;
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


/* MODAL */
.modal {
    border: none;
    position: absolute;
    z-index: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
}

.modal-content {
    position: relative;
    margin-top: 30px;
    overflow-x: hidden;
    box-shadow: 0px 0px 33px -20px #000000;
    height: 920px;
    background-color: white;
    overflow-y: hidden;
}

iframe {
    border: none;
    width: 900px;
    height: 1020px;
    overflow-y: hidden;
    
}

.close {
    width: 100%;
    text-align: right;
    position: absolute;
    transform: translateX(-20px);
    font-size: 75px;
    cursor: pointer;
    z-index: 1000000;
}

.slide-enter-active,
.slide-leave-active {
    transition: opacity .25s;
}

.slide-enter-from,
.slide-leave-to {
    opacity: 0;
}

@media screen and (max-width: 760px) {
    .container {
        flex-direction: column;
        align-items: center;
        padding: 50px 50px 30px 50px;
    }
    .text h1 {
        padding-top: 20px;
    }
    .my-image {
        width: 350px;
    }
}

</style>