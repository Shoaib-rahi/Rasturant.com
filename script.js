
// Initialize Lenis
const lenis = new Lenis();

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);






let showcart = document.querySelector("#showCart");
let productLists = document.querySelector("#product-list");
let imgContainer = document.querySelector(".image-container");
let counter = document.querySelector("#count");
let produt = document.querySelector(".product-lists");
function  showCart(){
  showcart.style.right = "0%"
}


function closeMenue(){
  showcart.style.right = "-200%"
}


let flag = true
function menueBar(){
  if(flag){
    productLists.style.height = "100vh";
    flag = false
  }else{
    productLists.style.height = "0";

    flag = true
  }
}




let count = 0
function plusOrder(){
  counter.innerHTML = count++;
  listProducts()
}



function search(){
  let searchForm = document.querySelector("#searc-Food").value.toUpperCase();
  let dishesLists = document.querySelector(".dishes-lists");
  let dish = document.querySelectorAll(".dish");
  let dishName = document.getElementsByTagName("h1");

  for(let i=0;i<dishName.length;i++){
    let match = dish[i].getElementsByTagName("h1")[0];
    if(match){
      let textVal = match.textContent ||match.innerHTML;
      if(textVal.toUpperCase().indexOf(searchForm) > -1){
        dish.style.display = ""
      }else{
        dish.style.display = "none"
      }
    }
  }
}



let Array = [
  {
    image:"images/food4.jpeg",
    title:"Chiken Biryani",
    price:200
  },
  // {
  //   image:"images/food2.jpeg",
  //   title:"Korma salan",
  //   price:300
  // },
  // {
  //   image:"images/food3.jpeg",
  //   title:"Mata Karahi",
  //   price:500
  // },
]

function listProducts(){

Array.map((item) =>{
  let list = document.createElement("li");
list.classList.add("items");
list.innerHTML = `<img src = "${item.image}"/>
<h2>${item.title}</h2> 
<h4>${item.price}</h4>
`;
produt.appendChild(list)
})


}



