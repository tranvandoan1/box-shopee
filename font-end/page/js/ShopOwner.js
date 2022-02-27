const $ = (selector) => {
    const elements = document.querySelectorAll(selector);
    return elements.length == 1 ? elements[0] : [...elements];
};

// const navbar = $(".navbar>ul>li");
// const container = $(".container>ul>li");

// navbar.forEach((btn,index) => {
//     const container_=container[index]
//     btn.addEventListener("click",function(){
//         for(var i=0;i<navbar.length;i++){
//             navbar[i].classList.remove("active")
//             container[i].classList.remove("active-container")
//         }
//         if(index==6){
//             index==0
//             console.log("ko")
//         }
//         container_.classList.add("active-container")
//         btn.classList.add("active")
//     })
// });
const slides_page = $(".slides-page");
const slider = $(".slider");
const img = $(".slider>a>img");
console.log(img);
const widthImg = slides_page.offsetWidth * img.length;
slider.style.width = `${widthImg + "px"}`;
for (var i = 0; i < img.length; i++) {
    img[i].style.width = `${slides_page.offsetWidth + "px"}`;
}
console.log(slides_page.offsetWidth)
const next = $(".next");
const prev = $(".prev");
const images_dots = $(".images-dots>ul>li");
var count = 0;
var dem = 0;
images_dots[0].classList.add("acteive-dots");

function slides() {
    if (count >= (img.length - 1) * slides_page.offsetWidth) {
        count = 0;
        slider.style.transition = "ease-in 0s";
        slider.style.transform = `translateX(${-count}px)`;
        if (dem >= img.length - 1) {
            dem = 0;
        }
        for (var i = 0; i < img.length; i++) {
            images_dots[i].classList.remove("acteive-dots");
        }
        images_dots[0].classList.add("acteive-dots");
    } else {
        dem++;
        for (var i = 0; i < img.length; i++) {
            images_dots[i].classList.remove("acteive-dots");
        }

        images_dots[dem].classList.add("acteive-dots");
        // }
        count += slides_page.offsetWidth;
        slider.style.transform = `translateX(${-count}px)`;
        slider.style.transition = "ease-in 1s";
    }
}
setInterval(slides, 10000);
next.addEventListener("click", function() {
    slides();
});
prev.addEventListener("click", function() {
    if (count <= 0) {
        count = (img.length - 1) * slides_page.offsetWidth;
        slider.style.transition = "ease-in 0s";
        slider.style.transform = `translateX(${-count}px)`;
        if (dem <= 0) {
            dem = img.length - 1;
        }
        for (var i = 0; i < img.length; i++) {
            images_dots[i].classList.remove("acteive-dots");
        }
        images_dots[dem].classList.add("acteive-dots");
    } else {
        dem--;
        for (var i = 0; i < img.length; i++) {
            images_dots[i].classList.remove("acteive-dots");
        }
        images_dots[dem].classList.add("acteive-dots");
        // }
        count -= slides_page.offsetWidth;
        slider.style.transform = `translateX(${-count}px)`;
        slider.style.transition = "ease-in 1s";
    }
});