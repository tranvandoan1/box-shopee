const $ = (selector) => {
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
// sticky header
var navbar = $("#navbar");
var sticky = navbar.offsetTop;
window.onscroll = function() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
};

// type
const check_type = $(".check-type");
const check_a = $(".type>ul>li>a");
const check_boder = $(".type>ul>li");
const type = $(".type>ul>li");
type.forEach((item, index) => {
    item.addEventListener("click", function() {
        const check__type = check_type[index];
        const check__a = check_a[index];
        const check__boder = check_boder[index];

        function check() {
            for (var i = 0; i < check_type.length; i++) {
                check_type[i].style.display = "none";
                check_a[i].style.color = "black";
                check_boder[i].style.border = "1px solid rgb(233, 233, 233)";
            }
        }
        if (check__type.style.display === "block") {
            check();
        } else {
            check();
            check__type.style.display = "block";
            check__a.style.color = "rgb(238, 77, 45)";
            check__boder.style.border = "1px solid rgb(238, 77, 45)";
        }
    });
});

// size
const check_size = $(".check-size");
const check_a_z = $(".size>ul>li>a");
const check_boder_size = $(".size>ul>li");
const size = $(".size>ul>li");
size.forEach((item, index) => {
    item.addEventListener("click", function() {
        const check__type = check_size[index];
        const check__a_z = check_a_z[index];
        const check__boder_size = check_boder_size[index];

        function check() {
            for (var i = 0; i < check_size.length; i++) {
                check_size[i].style.display = "none";
                check_a_z[i].style.color = "black";
                check_boder_size[i].style.border = "1px solid rgb(233, 233, 233)";
            }
        }
        if (check__type.style.display === "block") {
            check();
        } else {
            check();
            check__type.style.display = "block";
            check__a_z.style.color = "rgb(238, 77, 45)";
            check__boder_size.style.border = "1px solid rgb(238, 77, 45)";
        }
    });
});
// số lượng
const q_minus = $(".q-minus");
const q_add = $(".q-add");
const q_input = $(".q-quantity>input");
q_minus.addEventListener("click", function() {
    if (q_input.value == 0) {
        q_minus.disabled = true;
    } else {
        q_minus.disabled = false;
        q_input.value = parseInt(q_input.value) - 1;
    }
});
q_add.addEventListener("click", function() {
    q_minus.disabled = false;
    q_input.value = parseInt(q_input.value) + 1;
});
//  show ảnh
const img_box = $(".d-img_right>ul>li>img");
const img_boxShow = $(".img-box");

img_box.forEach((img, index) => {
    img.addEventListener("click", function() {
        for (var i = 0; i < img_box.length; i++) {
            img_box[i].style.border = "none";
        }
        img.style.border = "1px solid rgb(238, 77, 45)";

        img_boxShow.innerHTML =
            img_boxShow.src = `<img src="${img.src}"alt=""></div>`;
    });
});

// ẩn hiện show ảnh deatil
const d_img_show = $(".d-img-show");
const d_img = $(".d_img");
const detail_columm_left = $(".detail-columm_left");

detail_columm_left.addEventListener("click", function() {
    d_img_show.classList.add("hh");
    d_img.classList.add("mm");
});
window.addEventListener("click", function(e) {
    if (e.target == d_img_show) {
        d_img_show.classList.remove("hh");
        d_img.classList.remove("mm");
    }
});
// hover hiện ảnh reponsive
const bodyy = $(".shopee__shop");
console.log(bodyy.offsetWidth);
const img_boxx = $(".img-detail_show>.box-img>img");
const img_boxShoww = $(".group-images>.img-detail");
console.log(img_boxx);
if (bodyy)
    img_boxx.forEach((img) => {
        img.addEventListener("click", function() {
            img_boxShoww.innerHTML = `<img src="${img.src}"alt="">`;
        });
    });

// js khi reponsive
// type
const check_type_mb = $(".check-type-mb");
const check_a_mb = $(".type-mb>ul>li>a");
const check_boder_mb = $(".type-mb>ul>li");
const type_mb = $(".type-mb>ul>li");
type_mb.forEach((item, index) => {
    item.addEventListener("click", function() {
        const check__type_mb = check_type_mb[index];
        const check__a_mb = check_a_mb[index];
        const check__boder_mb = check_boder_mb[index];

        function check() {
            for (var i = 0; i < check_type_mb.length; i++) {
                check_type_mb[i].style.display = "none";
                check_a_mb[i].style.color = "black";
                check_boder_mb[i].style.border = "1px solid rgb(233, 233, 233)";
            }
        }
        if (check__type_mb.style.display === "block") {
            check();
        } else {
            check();
            check__type_mb.style.display = "block";
            check__a_mb.style.color = "rgb(238, 77, 45)";
            check__boder_mb.style.border = "1px solid rgb(238, 77, 45)";
        }
    });
});

// size
const check_size_mb = $(".check-size-mb");
const check_a_z_mb = $(".size-mb>ul>li>a");
const check_boder_size_mb = $(".size-mb>ul>li");
const size_mb = $(".size-mb>ul>li");
size_mb.forEach((item, index) => {
    item.addEventListener("click", function() {
        const check__type_mb = check_size_mb[index];
        const check__a_z_mb = check_a_z_mb[index];
        const check__boder_size_mb = check_boder_size_mb[index];

        function check() {
            for (var i = 0; i < check_size_mb.length; i++) {
                check_size_mb[i].style.display = "none";
                check_a_z_mb[i].style.color = "black";
                check_boder_size_mb[i].style.border = "1px solid rgb(233, 233, 233)";
            }
        }
        if (check__type_mb.style.display === "block") {
            check();
        } else {
            check();
            check__type_mb.style.display = "block";
            check__a_z_mb.style.color = "rgb(238, 77, 45)";
            check__boder_size_mb.style.border = "1px solid rgb(238, 77, 45)";
        }
    });
});
// số lượng khi reponsive
const q_minus_mb = $(".q-minus-mb");
const q_add_mb = $(".q-add-mb");
const q_input_mb = $(".q-quantity-mb>input");
q_minus_mb.addEventListener("click", function() {
    if (q_input_mb.value == 1) {
        q_minus_mb.disabled = true;
    } else {
        q_minus_mb.disabled = false;
        q_input_mb.value = parseInt(q_input_mb.value) - 1;
    }
});
q_add_mb.addEventListener("click", function() {
    q_minus_mb.disabled = false;
    q_input_mb.value = parseInt(q_input_mb.value) + 1;
});

// kick vào thêm hoặc mua sp thì hiện bằng chọn size và kiểu sản phẩm
const box_cart_mobile = $(".box-cart-mobile");
const addToCart_mobile = $(".addToCart-mobile");
const d_addToCart_mb = $(".d-addToCart-mb");
const addCart_mb = $(".addCart-mb");
const buy_now_mb = $(".buy_now-mb");

function box() {
    box_cart_mobile.classList.add("box-visible");
    addCart_mb.classList.add("addToCart-visible");
    d_addToCart_mb.style.visible = "hidden";
}
addCart_mb.addEventListener("click", function() {
    box();
});
buy_now_mb.addEventListener("click", function() {
    box();
});
window.addEventListener("click", function(e) {
    if (e.target == box_cart_mobile) {
        box_cart_mobile.classList.remove("box-visible");
        addCart_mb.classList.remove("addToCart-visible");
        d_addToCart_mb.style.visible = "visible";
    }
});
// xử lý hiện video ở bình luận
const myVideo = $(".comment-video>.myVideo");
const time_c = $(".c-time");
const view_vieo = $(".view-vieo-img");

myVideo.forEach((video, index) => {
    const time = time_c[index];
    time.innerHTML = "0 :" + Math.round(video.duration);
});
var click = 0
myVideo.forEach((btn, index) => {
    btn.addEventListener("click", function(e) {
        click++
        const view_vieoo = view_vieo[index];
        if (click === 1) {
            view_vieoo.innerHTML = `<video src="${btn.src}" class="ds" autoplay controls type="video/mp4"></video>`;
            view_vieoo.style.width = "350px";
            view_vieoo.style.height = "200px";
        } else if (click === 2) {
            click = 0
            view_vieoo.innerHTML = ``;
            view_vieoo.style.width = "0px";
            view_vieoo.style.height = "0px";
        }
    });
});