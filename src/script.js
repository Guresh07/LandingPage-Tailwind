const hidden_nav = document.getElementById("hidden-nav")
function handlemenu(){
    hidden_nav.classList.toggle('hidden')
}


let initialLTR = -48*4
let initialRTL = 36*4

function setupIntersectionObserver(element, isLTR, speed){
    const intersectionObserver = new IntersectionObserver(
        (entries)=>{
            entries[0].isIntersecting;
            if(entries[0].isIntersecting){
                document.addEventListener('scroll', scrollHandler)
            }else{
                document.removeEventListener('scroll', scrollHandler)
            }
        }
    )

    function scrollHandler (){
        const  translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed

        totalTranslate = 0
        if(isLTR){
            totalTranslate = translateX + initialLTR
        }else{
            totalTranslate = -(translateX + initialRTL)
        }

       element.style.transform = `translateX(${totalTranslate}px)`
    }
    intersectionObserver.observe(element)
}
const line1 = document.getElementById("line1")
const line2 = document.getElementById("line2")
const line3 = document.getElementById("line3")
const line4 = document.getElementById("line4")


setupIntersectionObserver(line1, true, 0.15)
setupIntersectionObserver(line2, false, 0.15)
setupIntersectionObserver(line3, true, 0.15)
setupIntersectionObserver(line4, true, 0.8)

let title = document.querySelectorAll('#title')
console.log(title)
// for(let i = 1 ; i<= title.length ; i++){
//     let item = document.getElementById(`title-${i}`)
//     item.addEventListener('click',()=>{
//         let data = document.getElementById(`data-${i}`)
//         data.classList.toggle('hidden')
//     })
// }
title.forEach((item)=>{
    item.addEventListener('click',()=>{
        const aria = item.getAttribute('aria-controls')
        const data = document.getElementById(aria)
        data.classList.toggle('hidden')
        item.querySelector('i').classList.toggle('rotate-180')
    })
})


