const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((json) => displayCategories(
     (json.categories)));
    
}

const loadCategoryPlants = () => {
    fetch("https://openapi.programming-hero.com/api/category/${id}")
    .then((res) => res.json())
    .then((json) => displayCategoryPlants(
     (json.categoryPlants)));
    
}
const displayCategoryPlants = (categories) => {
const categoryContainer = document.getElementById("categoryContainer");

for ( category of categories){
 
     const categoryName = 
    `${category.category_name}`
    
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML =
    `
    
    <button class="active:bg-blue-700" id =`;categoryName` >
    ${category.category_name}
   </button>
    `
   
 console.log( categoryName)

 
    
    categoryContainer.append(categoryDiv);
    const categoryBtn = document.getElementById(`${category.id}`);
   
    
    
}
};

loadCategories()

const displayCategories = (categories) => {
const categoryContainer = document.getElementById("categoryContainer");

for ( category of categories){
 
     const categoryName = 
    `${category.category_name}`
    
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML =
    `
    
    <button onClick = "loadPlants()"  >
    ${category.category_name}
   </button>
    `
   


 
    
    categoryContainer.append(categoryDiv);
    const categoryBtn = document.getElementById(`${category.id}`);
   
    
    
}
};

loadCategories()
function getPrice (raw){
    const num = parseFloat(String(raw).replace(/[^0-9.]/g, ''));
    return Number.isNaN(num)? 0 : num;
}


let allPlnats = [];


 
const loadPlants = (category) => {
   let url ="https://openapi.programming-hero.com/api/plants"
    if (category !== "all"){
        
let url = "https://openapi.programming-hero.com/api/category/${id}"
    }

    fetch(url)
    .then((res) => res.json())
    .then((json) => displayPlants(
     (json.plants)));
    
}


fetch("https://openapi.programming-hero.com/api/plant/${id}")
.then((res) => res.json)
 .then((json) => displayPlanDetails(
     (json.categories)));
const displayPlants = (plants) => {
const plantContainer = document.getElementById("plantContainer");
for ( plant of plants){
 
     const priceNum = getPrice(plant.price)
    const plantName = plant.name
    
    
    
    const plantDiv = document.createElement("div");
    plantDiv.className = " border rouded-xl shadow bg-white p-4 hover:shadow-lg transition"
    plantDiv.innerHTML =`
 <img src="${plant.image}" class="h-auto" alt="">
        <button class="font-bold hover:bg-fuchsia-950" onClick= "displayPlantDeatails(${plants.id}) " >${plant.name}</button>
        <p>${plant.description}</p>
        <div class="flex justify-between">
        <button class="bg-green-200 text-green-600 rounded-4xl">${plant.category}</button>
       <p class="font-bold"> ট${plant.price}</p>
      
        </div>
       
         `
         const btn = document.createElement("button");
         btn.textContent ="Add to Cart";
         btn.className = "mt-2 w-full px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-4xl "
        btn.addEventListener("click", ()=> addToCart( plantName, priceNum)
    );
   plantDiv.append(btn)
    plantContainer.append(plantDiv);


}

}
loadPlants()



//CART ARRY
let cart = [];


// ADD TO CART
function addToCart(name, price) {


const item  = {name, price, id:Date.now()};

cart.push(item)
updateCartUi();
}
function removeFromCart(id){
    cart = cart.filter(item =>item.id !== id);
    updateCartUi();
}
function updateCartUi(){
    const cartList =document.getElementById('cart-list');
    cartList.innerHTML ='';
   let  total = 0;
    cart.forEach(item => {
      
        total += item.price;
        console.log(total);
        
        const li =document.createElement("li");
        li.className = "flex justify-between items-center";
        li.innerHTML =`
       <div> <span class="block">${item.name}</span>
         <span>ট${item.price}</span> </div>
        <button class="" onclick=" removeFromCart(${item.id})"><i class="fa-solid fa-xmark"></i></button>
       
        `
        cartList.append(li);
    });
    document.getElementById('total-price').textContent = total.toFixed(2);
   
    
}
;

const displayPlanDetails = (plants) => {
    const modalContainer = document.createElement('div');
    modalContainer.id = "my-modal"
    modalContainer.innerHTML=`
    <!-- Open the modal using ID.showModal() method -->

<dialog id="my_modal_1" class="modal">
  <div class="modal-box">
    <h3 class="text-lg font-bold">${plants.name}</h3>
    <p class="py-4">${plants.description}</p>
     <p class="py-4">${plants.category}</p>
      <p class="py-4">${plants.price}</p>
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>`
document.getElementById("my-modal").displayPlanDetails();
}

 