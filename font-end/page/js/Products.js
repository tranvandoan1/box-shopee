// all pro
const $ = (selector) => {
  const elements = document.querySelectorAll(selector);
  return elements.length == 1 ? elements[0] : [...elements];
};
const all_pro = $(".all-products>.products-title_show>ul>li");
console.log(all_pro);
const products_title_show = $(".products-title_show ul");
console.log(products_title_show);

const paging_prev = $(".paging-prev");
const paging_next = $(".paging-next");

let perPage = 12;
let currentPage = 1;
let start = 0;
let end = perPage;

function listPro() {
  const pro = all_pro.filter((item, index) => {
    if (index >= start && index < end) {
      return item;
    }
  });
  // //   products_title_show.innerHTML=pro
  //   const hio=pro.map((item,index)=>{
  //       return /*html*/ `${item +index}`
  //   })
  return (products_title_show.innerHTML = pro);
  //  return pro
}

console.log(listPro());

paging_prev.addEventListener("click", function () {
  console.log("jhi");
});
paging_next.addEventListener("click", function () {
  if (
    start >= all_pro.length - perPage &&
    end >= all_pro.length - perPage * 2
  ) {
    start = 0;
    end = perPage;
    console.log("hi");
  } else {
    start += perPage;
    end += perPage;
  }

  listPro();
  console.log(listPro());
  console.log(start);
  console.log(end);
});
for (var i = 0; i < listPro(); i++) {
  console.log(i);
}
// function getCurrentPage(currentPage){
//     start=(currentPage-1)*perPage;
//     end=currentPage*perPage

// }
// console.log(getCurrentPage(currentPage));
// ListProo()
// const totalPage=Math.ceil(products.length/perPage)
// $("#next").addEventListener("click",function(){
//            currentPage++;

//         if(currentPage>totalPage){
//             currentPage=totalPage
//         }
//         getCurrentPage(currentPage)

//         ListProo()
//         deletePro()
//         uploadPro()

//     })
// $("#prev").addEventListener("click",function(){
//         currentPage--;

//         if(currentPage<=1){
//             currentPage=1
//          }

//         getCurrentPage(currentPage)
//         ListProo()
//         deletePro()
//         uploadPro()

//  })

// //  list số trang

// function listPage(){
//     let html =''
//     html+=/*html*/ ` <li class="page-item active"><a class="page-link" >${1}</a></li>`
//     for(var i=2;i<=totalPage;i++){
//         html+=/*html*/ ` <li class="page-item"><a class="page-link" >${i}</a></li>`
//     }
//         $("#number-page").innerHTML=html
// }
// listPage()

// function phantrang(){
//     const cupage=$("#number-page li")
//     if(Array.isArray($(".delete_pro i"))){
//         cupage.forEach((btn,index)=>{
//             btn.addEventListener("click",function(){
//                 let value=index+1;
//                 currentPage=value;
//                 for(let i=0;i<cupage.length;i++){
//                     cupage[i].classList.remove("active")
//                 }
//                 btn.classList.add("active")
//                 getCurrentPage(currentPage)
//                 ListProo()
//             })
//         })
//     }else{
//         ////
//     }
// }
// phantrang()
// sticky header
var navbar = $("#navbar");
console.log(navbar);
var sticky = navbar.offsetTop;
window.onscroll = function () {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};
