const $ = (selector) => {
  const elements = document.querySelectorAll(selector);
  return elements.length == 1 ? elements[0] : [...elements];
};

const paymentChange = $(".payment_change");
const addAddress = $(".add-address");
const back = $(".back");
const deliveryAddres = $(".delivery-addres");

paymentChange.addEventListener("click", function () {
  addAddress.style.display = "block";
  deliveryAddres.style.display = "none";
});
back.addEventListener("click", function () {
  addAddress.style.display = "none";
  deliveryAddres.style.display = "block";
});

const shopeCoin = $(".shope-coin");
const checkCoin = $(".check__coin");

checkCoin.addEventListener("click", function () {
  if (shopeCoin.style.display === "none") {
    shopeCoin.style.display = "flex";
    checkCoin.classList.add("checkCoin");
  } else {
    checkCoin.classList.remove("checkCoin");
    shopeCoin.style.display = "none";
  }
});

const cityShow = $(".city-show");
const districtShow = $(".district-show");
const wardShow = $(".ward-show");
const cityShowOption = $(".city-show>option");

const endpoint = "https://provinces.open-api.vn/api/?depth=3";

fetch(endpoint)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data)
    const html = data
      .map((btn) => {
        return /*html*/ ` <option value="${btn.code}">${btn.name}</option>`;
      })
      .join("");
      cityShow.innerHTML==html
    console.log(cityShow.innerHTML=html);
    // districtShow.innerHTML = data.map((btn) => {
    //   // return /*html*/ ` <option value="${btn.districts.code}">${btn.districts.name}</option>`;
    //   const districts = btn.districts;
    //   districts.map((btn) => {
    //     // console.log(btn.name)
    //   });
    //   // console.log(btn.districts)
    // });
    // .join("");
    // wardShow.innerHTML = data
    // .map((btn) => {
    //   return /*html*/ ` <option value="${btn.districts.wards.code}">${btn.districts.wards.name}</option>`;
    // })
    // .join("");
  });

console.log(cityShow);
function city() {
  cityShowOption.forEach((element) => {
    element.addEventListener("click", function () {
      console.log(element.innerHTML);
      // console.log("sadd")
    });
  });
}

city();

const shopAddress = $(".shop_address>input");
const cityDistrictWard = $(".city-district-ward");
const faAngleDown = $(".shop_address-icon>.fa-times-circle");
shopAddress.addEventListener("click", function () {
  cityDistrictWard.style.display = "block";
  faAngleDown.style.display = "block";
});

faAngleDown.addEventListener("click", function () {
  cityDistrictWard.style.display = "none";
  faAngleDown.style.display = "none";
});

const cityDistrictWardHeader = $(".city-district-ward_header>ul>li");
const cityDistrictWardShow = $(".city-district-ward_show>ul>li");

cityDistrictWardHeader.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    const cityDistrictWard = cityDistrictWardShow[index];
    // console.log(cityDistrictWard);
    for (var i = 0; i < cityDistrictWardHeader.length; i++) {
      cityDistrictWardHeader[i].classList.remove("active-city-district-ward");
      cityDistrictWardShow[i].classList.remove(
        "active-city-district-ward_show"
      );
    }
    btn.classList.add("active-city-district-ward");
    cityDistrictWard.classList.add("active-city-district-ward_show");
  });
});

const shopeePopupFormHeader = $(".shopee-popup-form__header");
const button = $(".add_address>button");
button.addEventListener("click", function () {
  shopeePopupFormHeader.classList.add("active-shopee-popup-form__header");
});

window.addEventListener("click", function (e) {
  if (e.target == shopeePopupFormHeader) {
    shopeePopupFormHeader.classList.remove("active-shopee-popup-form__header");
  }
});
