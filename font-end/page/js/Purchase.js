const $ = (selector) => {
  const elements = document.querySelectorAll(selector);
  return elements.length == 1 ? elements[0] : [...elements];
};

const userList = $(".user-list>ul>li"); //li bên trái

const purchase = $(".purchase>.purchase__e>li"); //li bên phải

const userAccount = $(".user-account"); //tài khoản của tôi

const userAccountChild = $(".user-account_child"); //menu con bên trong tài khoản của tôi

const userAccountChildLi = $(".user-account_child>li"); //li bên trong tài khoản của tôi

const purchaseList = $(".purchase-list"); //hồ sơ của tôi khi click vào hồ sơ

const purchaseLi = $(".purchase-list>li"); //li còn lại của li bên phải

var click = 0;
//khi click vào li bên phải
userList.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    const purchaseC = purchase[index];
    for (let i = 0; i < purchase.length; i++) {
      //khi clik vào li bên phải nào thì xóa class của li còn lại và thay đổi màu chữ
      purchase[i].classList.remove("active-purchase");
      userList[i].style.color = "black";
    }
    //khi click vòa li nào thì thêm class vào để hiện li bên phải
    purchaseC.classList.add("active-purchase");
    //ẩn hồ sơ của tôi
    purchaseList.style.display = "none";
    //click vào li nào bên trái thì bôi màu đỏ
    btn.style.color = "rgb(238, 77, 45)";
    //đóng menu con tài khoản của tôi khi bấm li khác
    userAccountChild.classList.remove("active-user-account");
  });
});
//clik vào tài khoản của tôi
userAccount.addEventListener("click", function () {
  click++;
  if (click === 1) {
    for (let i = 0; i < purchase.length; i++) {
      //xóa toàn bộ li bên phải và chuyển màu li bên trái ko được click thành mầu đen
      purchase[i].classList.remove("active-purchase");
      userList[i].style.color = "black";
    }

    purchaseList.style.display = "block";
    userAccountChildLi[0].style.color = "rgb(238, 77, 45)";
    userAccountChild.classList.add("active-user-account");
  } else if (click === 2) {
    click = 0;
    userAccountChild.classList.remove("active-user-account");
    for (let i = 0; i < userAccountChildLi.length; i++) {
      userAccountChildLi[i].style.color = "black";
    }
    for (let i = 0; i < purchaseLi.length; i++) {
      purchaseLi[i].classList.remove("active-purchase-list");
    }
    purchaseLi[0].classList.add("active-purchase-list");
  }
});

userAccountChildLi.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    const userA = purchaseLi[index];
    for (let i = 0; i < purchaseLi.length; i++) {
      purchaseLi[i].classList.remove("active-purchase-list");
      userAccountChildLi[i].style.color = "black ";
    }
    btn.style.color = "rgb(238, 77, 45)";
    userA.classList.add("active-purchase-list");
  });
});

// const o=$(".user-form_number-phone-list")
// const hi=[`${o.innerHTML}`]
// const hi1=o.innerHTML
// // const j=
// console.log(hi)
// const p=hi1.slice(0, 8)
// console.log(p)
// const k=hi.preplace(-1,`1`)

const receiveCoins = $(".receive-coins_list-header>ul>li");
const receiveCoinsList = $(".receive-coins_list-header_list>ul>li");

receiveCoins.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    const RCL_Index = receiveCoinsList[index];
    for (let i = 0; i < receiveCoins.length; i++) {
      receiveCoins[i].classList.remove("active-rclh");
      receiveCoinsList[i].classList.remove("active-rclh-list");
    }
    btn.classList.add("active-rclh");
    RCL_Index.classList.add("active-rclh-list");
  });
});

const purchaseOrderHeader = $(".purchase-order-header>ul>li");
const purchaseOrderHeaderList = $(".purchase-order-header_list>ul>li");

purchaseOrderHeader.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    const purList = purchaseOrderHeaderList[index];
    for (let i = 0; i < purchaseOrderHeader.length; i++) {
      purchaseOrderHeader[i].classList.remove("active-oder");
      purchaseOrderHeaderList[i].style.display = "none";
    }
    btn.classList.add("active-oder");
    purList.style.display = "block";
  });
});
