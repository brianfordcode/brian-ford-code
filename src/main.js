import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App).use(router)


// directives

// FADE AND SLIDE LEFT
const fadeAndSlideLeft= new IntersectionObserver(
    (entries, animatedScrollObserver) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                entry.target.classList.add('fadeAndSlideLeft')
                animatedScrollObserver.unobserve(entry.target)
            }
        })
    }
)
const fadeIn= new IntersectionObserver(
    (entries, animatedScrollObserver) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                entry.target.classList.add('fadeIn')
                animatedScrollObserver.unobserve(entry.target)
            }
        })
    }
)
const fadeAndSlideBottom= new IntersectionObserver(
    (entries, animatedScrollObserver) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                entry.target.classList.add('fadeAndSlideBottom')
                animatedScrollObserver.unobserve(entry.target)
            }
        })
    }
)

app.directive('scrollAnimate', {
    beforeMount: (el, binding) => {
        if (binding.value=="fadeAndSlideLeft") {
            fadeAndSlideLeft.observe(el)
        }
        if (binding.value=="fadeIn") {
            fadeIn.observe(el)
        }
        
    }
})




app.mount('#app')
