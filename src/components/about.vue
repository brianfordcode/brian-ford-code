<template>
<div class="container">
    <img class="my-image" src="../assets/my-image.png" alt="my-image">
    
    <div class="text">
        <h1>About</h1>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aliquam sapiente fuga voluptate deserunt et provident suscipit error unde! Reprehenderit consequuntur voluptatum rerum laudantium. Modi facilis natus repudiandae praesentium delectus! Porro voluptates, aliquam maxime odio sint perferendis veritatis ducimus possimus animi sunt aut nam corporis asperiores et illo. Cumque nobis eos quaerat, tempore laborum aliquid, laudantium ratione autem dignissimos accusantium aliquam eius ullam eaque nesciunt!<br><br>Repudiandae architecto necessitatibus eum non consequatur molestiae dicta sequi voluptatem amet itaque vero assumenda libero repellendus modi eius unde hic provident harum adipisci eos sunt, officia optio minima quasi. Cumque iste esse reprehenderit neque quibusdam.
        </p>
        <div class="links">
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
    justify-content: space-around;
    align-items: flex-start;
    text-align: center;
    padding: 50px 30px 0 30px;
    font-family: 'Courier New', Courier, monospace;
}



.text p {
    padding: 30px;
}

.text {
    display: flex;
    flex-direction: column;
    align-items: center;


}


.links {
    display: flex;
    align-items: center;
    /* border: 1px solid blue; */
    justify-content: space-between;
    width: 40%;
}

.links img {
    cursor: pointer;
    transition: .15s ease-in-out;
    height: 50px;
}

.links img:hover {
    transform: scale(1.1);
}


.my-image {
    width: 400px;
}


</style>