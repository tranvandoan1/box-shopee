const $ = selector => {
    const elements = document.querySelectorAll(selector);
    return elements.length == 1 ? elements[0] : [...elements];
};
// taplet-mobile
const button_mb = $("#button__mb");
const mb = $("#mb");
const mb_display = $("#display__mb");
button_mb.addEventListener("click", function() {
    mb.classList.add("on-off-menu-mb");
    mb_display.classList.add("on__off__menu__mb");
});
window.addEventListener("click", function(e) {
    if (e.target == mb) {
        mb.classList.remove("on-off-menu-mb");
        mb_display.classList.remove("on__off__menu__mb");
    }
});

var dem = 0;
const next = $("#next");
const prev = $("#prev");
console.log(next)
const button = $(".number_slide button");
const img = $(".slides a");
for (let i = 0; i < img.length; i++) {
    img[0].classList.add("imk");
}
for (var i = 0; i < button.length; i++) {
    button[0].classList.add("active");
}

function nextt() {
    dem++;
    if (dem > img.length - 1) {
        dem = 0;
    }
    for (let i = 0; i < img.length; i++) {
        img[i].classList.remove("imk");
    }
    for (var i = 0; i < button.length; i++) {
        button[i].classList.remove("active");
    }
    img[dem].classList.add("imk");
    button[dem].classList.add("active");
}

next.addEventListener("click", function() {
    nextt();
});
prev.addEventListener("click", function() {
    dem--;
    if (dem < 0) {
        dem = img.length - 1;
    }
    for (let i = 0; i < img.length; i++) {
        img[i].classList.remove("imk");
    }
    for (var i = 0; i < button.length; i++) {
        button[i].classList.remove("active");
    }
    img[dem].classList.add("imk");
    button[dem].classList.add("active");
});
setInterval(function() {
    nextt();
}, 8000);
button.forEach((btn, index) => {
    btn.addEventListener("click", function() {
        for (var i = 0; i < button.length; i++) {
            button[i].classList.remove("active");
        }
        for (var i = 0; i < img.length; i++) {
            img[i].classList.remove("imk");
        }
        const imgg = img[index];
        btn.classList.add("active");
        imgg.classList.add("imk");
    });
});

// category

// const slides_page = $(".slides-page");
// const slider = $(".slider");
// const img = $(".slider>a>img");
// console.log(img);
// const widthImg = slides_page.offsetWidth * img.length;
// slider.style.width = `${widthImg + "px"}`;
// for (var i = 0; i < img.length; i++) {
//     img[i].style.width = `${slides_page.offsetWidth + "px"}`;
// }

const cate = $(".cate");
const prev_cate = $("#prev-cate");
const next_cate = $("#next-cate");
const cateSum = $(".list-category ul li");

// const h1 = cateSum[0].offsetWidth * 14
// const koko = h1 / 2
// console.log(koko)

// cate.style.width = `${h1+"px"}`

const cateWidthBox = cateSum[0].offsetWidth / 2;
let cateWidthAllBox = cateWidthBox * 2.8;
let count = 0;
next_cate.addEventListener("click", function() {
    count += cateWidthAllBox;
    if (count > cateWidthAllBox) {
        count = 0;
    }
    cate.style.transform = `translateX(${-count}px)`;
});
prev_cate.addEventListener("click", function() {
    count -= cateWidthAllBox;

    if (count < 0) {
        count = cateWidthAllBox;
    }
    cate.style.transform = `translateX(${-count}px)`;
});

// top search products
const pro = $(".show-products");
const prev_pro = $("#pro-prev");
const next_pro = $("#pro-next");
const proSum = [...$(".show-products ul li")];

const proWidtBox = proSum[0].offsetWidth;
const proWidtAllBox = proWidtBox * proSum.length;
const transition = proWidtAllBox / 2 + proWidtBox / 7;
console.log(proWidtBox / 6 - 10);
let countpro = 0;
next_pro.addEventListener("click", function() {
    countpro += transition;
    if (countpro > transition) {
        countpro = 0;
    }
    pro.style.transform = `translateX(${-countpro}px)`;
});
prev_pro.addEventListener("click", function() {
    countpro -= transition;

    if (countpro < 0) {
        countpro = transition;
    }
    pro.style.transform = `translateX(${-countpro}px)`;
});

// setInterval(function(){
//   count1 += widtOneBox;
//   if (count1 > widtOneBox) {
//     count1 = 0;
//   }
//   pro.style.transform = `translateX(${-count1}px)`;
// },5000)

// flash products

const pro_flash = $(".content-products");
const prev_flash = $("#prev-flash");
const next_flash = $("#next-flash");
const proFlashSum = $(".content-products ul li");

const proFlashWidtBox = proFlashSum[0].offsetWidth;
const proFlashWidtAllBox = proFlashWidtBox * proFlashSum.length;
const proFlashTransition = proFlashWidtAllBox / 2 + proFlashWidtBox / 7;

let countproFlash = 0;
next_flash.addEventListener("click", function() {
    countproFlash += proFlashTransition;
    if (countproFlash > proFlashTransition) {
        countproFlash = 0;
    }
    pro_flash.style.transform = `translateX(${-countproFlash}px)`;
});
prev_flash.addEventListener("click", function() {
    countproFlash -= proFlashTransition;

    if (countproFlash < 0) {
        countproFlash = proFlashTransition;
    }
    pro_flash.style.transform = `translateX(${-countproFlash}px)`;
});

// sticky header
var navbar = $("#navbar");
var sticky = navbar.offsetTop;
window.onscroll = function() {
    if (window.pageYOffset >= sticky) {
        console.log(sticky)
        console.log(window.pageYOffset)
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
};


// countdown time
const time__second = $("#time__second");
const time__minute = $("#time__minute");
const time__hours = $("#time__hours");

time__second.innerHTML = 59;

function setTime() {
    time__hours.innerHTML = 1;

    // giây
    if (time__second.innerHTML <= 60) {
        time__second.innerHTML--;
    }
    // phút
    if (time__second.innerHTML == 00) {
        time__second.innerHTML = 59;
        time__minute.innerHTML--;
    }
    // giờ
    if (time__minute.innerHTML == 00) {
        time__hours.innerHTML--;
        time__minute.innerHTML = 59;
    }
    // nếu giây còn 1 ký tự thì thêm 0 vào
    if (time__second.innerHTML.length != 2) {
        time__second.innerHTML = "0" + time__second.innerHTML;
    }
    // nếu phút còn 1 ký tự thì thêm 0 vào

    if (time__minute.innerHTML.length != 2) {
        time__minute.innerHTML = "0" + time__minute.innerHTML;
    }
    // nếu giờ còn 1 ký tự thì thêm 0 vào

    if (time__hours.innerHTML.length != 2) {
        time__hours.innerHTML = "0" + time__hours.innerHTML;
    }
}

function h() {
    var today = new Date();

    if (today.getHours() != 20) {
        setTime();
    } else if (today.getHours() != 21) {
        setTime();
    }
}
setInterval(h, 1000);

// products
const pro_banner = $(".products-title ul li");
const pro_show = $(".products-show>ul>li");

pro_banner.forEach((btn, index) => {
    btn.addEventListener("click", function() {
        const pro_show_detail = pro_show[index];
        for (var i = 0; i < pro_banner.length; i++) {
            pro_banner[i].classList.remove("activePro");
        }
        for (var i = 0; i < pro_show.length; i++) {
            pro_show[i].classList.remove("pro_show");
        }
        btn.classList.add("activePro");
        pro_show_detail.classList.add("pro_show");
    });
});