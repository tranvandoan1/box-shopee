const $ = (selector) => {
    const elements = document.querySelectorAll(selector);
    return elements.length == 1 ? elements[0] : [...elements];
};

const active = $("#active");
const check = $("#check");
var click = 0;
active.forEach((btn, index) => {
    btn.addEventListener("click", function(e) {
        click++;
        if (click === 1) {
            btn.classList.add("active-checkbox");
        } else if (click === 2) {
            click = 0;
            btn.classList.remove("active-checkbox");
        }
    });
});

const pr_prev = $(".pr-prev");
const pr_next = $(".pr-next");
const pr_input = $(".input");
pr_prev.forEach((btn, index) => {
    btn.addEventListener("click", function() {
        const input = pr_input[index];

        if (input.value == 0) {
            btn.disabled = true;
        } else {
            input.value = parseInt(input.value) - 1;
            btn.disabled = false;
        }
    });
});
pr_next.forEach((btn, index) => {
    btn.addEventListener("click", function() {
        const input = pr_input[index];

        if (input.value == 10) {
            btn.disabled = true;
        } else {
            input.value = parseInt(input.value) + 1;
            btn.disabled = false;
        }
    });
});

// type
const prCheckType = $(".pr-check-type");
const prChecA = $(".pr-type ul>li>a");
const prCheckBoder = $(".pr-type ul>li");
const prType = $(".pr-type ul>li");
prType.forEach((item, index) => {
    item.addEventListener("click", function() {
        const checkType = prCheckType[index];
        const checkA = prCheckA[index];
        const checkBoder = prCheckBoder[index];

        function check() {
            for (var i = 0; i < prCheckType.length; i++) {
                prCheckType[i].style.display = "none";
                prCheckA[i].style.color = "black";
                prCheckBoder[i].style.border = "1px solid rgb(233, 233, 233)";
            }
        }
        if (checkType.style.display === "block") {
            check();
        } else {
            check();
            checkType.style.display = "block";
            checkA.style.color = "rgb(238, 77, 45)";
            checkBoder.style.border = "1px solid rgb(238, 77, 45)";
        }
    });
});

// size
const prCheckSize = $(".pr-check-size");
const prCheckA = $(".pr-size ul>li>a");
const prCheckBoderSize = $(".pr-size ul>li");
const pr_size = $(".pr-size ul>li");
pr_size.forEach((item, index) => {
    item.addEventListener("click", function() {
        const checkSize = prCheckSize[index];
        const checkA = prCheckA[index];
        const checkBoder = prCheckBoderSize[index];

        function check() {
            for (var i = 0; i < prCheckSize.length; i++) {
                prCheckSize[i].style.display = "none";
                prCheckA[i].style.color = "black";
                prCheckBoderSize[i].style.border = "1px solid rgb(233, 233, 233)";
            }
        }
        if (checkSize.style.display === "block") {
            check();
        } else {
            check();
            checkSize.style.display = "block";
            checkA.style.color = "rgb(238, 77, 45)";
            checkBoder.style.border = "1px solid rgb(238, 77, 45)";
        }
    });
});

const prFilter = $(".pr-filter");
const prClassify = $(".classify");

prClassify.forEach((btn, index) => {
    btn.addEventListener("click", function() {
        const filter = prFilter[index];
        if (filter.style.display === "block") {
            filter.style.display = "none";
            for (var i = 0; i < prFilter.length; i++) {
                prFilter[i].style.display = "none";
            }

        } else {
            for (var i = 0; i < prFilter.length; i++) {
                prFilter[i].style.display = "none";
            }
            filter.style.display = "block";
        }
    });
});