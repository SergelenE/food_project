const getAllFood = async () => {
  let res = await fetch("https://dev-api.mstars.mn/api/foods", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
};
const foodbtn = document.querySelector("#start");

//Food class that has properties: category, category_id, image, discount, price, name, stock
class Food {
  constructor(category, category_id, image, discount, price, name, stock) {
    this.category = category;
    this.category_id = category_id;
    this.image =
      "https://mtars-fooddelivery.s3.ap-southeast-1.amazonaws.com" + image;
    this.discount = discount;
    this.price = price;
    this.name = name;
    this.stock = stock;
  }

  //and methods: addProduct(increase stock number), removeProduct(decrease stock number)
  addProduct() {
    this.stock += 1;
  }
  removeProduct() {
    this.stock -= 1;
  }
}
foodbtn.addEventListener("click",()=>{

const foodd = document.querySelector(".foods");

getAllFood().then((e) => {
    foodArr = e.data.map((e) => {
      return new Food(
          e.category,
          e.category_id,
          e.image,
          e.discount,
          e.price,
          e.name,
          e.stock
        );
    });
  
foodArr.map((e) => {
  let card = document.createElement("p");
  card.innerHTML = 
  `<div class="card">
  <img src="${e.image}" alt="" class="mainImg"/>
  <div class="badge">${e.discount}%</div>
  <h2>${e.name}</h2>
  <div class="price">
  <p class="activePrice"> ${new Intl.NumberFormat().format(e.price - (e.price * e.discount) / 100)}₮${" "} </p>
  <strike class="strike-dark">${new Intl.NumberFormat().format(e.price)}₮ </strike>
  </div>
  <div id="${e.name}stock">Stock: ${e.stock} </div>
  <div class="btns">
  <button id="${e.name}+">+</button>
  <button id="${e.name}-">-</button>
  </div>

  </div>`;

  foodd.appendChild(card);

  document.getElementById(`${e.name}+`).addEventListener("click",()=>{
    console.log(e.stock);
    e.addProduct();
    document.getElementById(`${e.name}stock`).innerHTML = `Stock: ${e.stock}`;
  });

  document.getElementById(`${e.name}-`).addEventListener("click",()=>{
    console.log(e.stock);
    e.removeProduct();

    document.getElementById(`${e.name}stock`).innerHTML = `Stock: ${e.stock}`;
  });
});
});
});
  







//create an array foods

//call getAllFoods() then create Food objects and push every Food objects to foods array

//Generate HMTL function
