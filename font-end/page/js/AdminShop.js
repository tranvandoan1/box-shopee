const $ = selector => {
    const elements = document.querySelectorAll(selector);
    return elements.length == 1 ? elements[0] : [...elements];
};

const headerAdmin = $(".my-store-hader>ul>li")
const AdminShow = $(".my-store-show>ul>li")
for (let i = 0; i < AdminShow.length; i++) {
    AdminShow[0].style.display = "block"
}
headerAdmin.forEach((btn, index) => {
    btn.addEventListener("click", function() {
        const AdminShowList = AdminShow[index]
        for (let i = 0; i < AdminShow.length; i++) {
            AdminShow[i].style.display = "none"
            headerAdmin[i].classList.remove("active-admin")
        }
        btn.classList.add("active-admin")
        AdminShowList.style.display = "block"
    })
});


const p = $(".row>ul>li>span>p")
const row = $(".row>ul>li>span")
console.log(row)
p.forEach((item, index) => {
    const l = [`${item.innerHTML}`]

    console.log(l)
    const rowC = row[index]
    console.log(item.innerHTML)
    if (item.innerHTML <= 10) {
        rowC.classList.add("sp1")
    } else if (item.innerHTML <= 50) {
        rowC.classList.add("sp2")
    } else if (item.innerHTML <= 70) {
        rowC.classList.add("sp3")

    } else if (item.innerHTML <= 100) {
        rowC.classList.add("sp4")

    }
})

$("#myButton").addEventListener("click", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        alert("hi")
    }
});