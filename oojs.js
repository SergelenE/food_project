const getAllFood = async () => {
  return await fetch("https://dev-api.mstars.mn/api/foods", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

class Food {
  constructor(category, category_id, image, discount, price, name, stock) {
    this.category = category;
    this.category_id = category_id;
    this.image =
      "https://mtars-fooddelivery.s3.ap-southeast-1.amazonaws.com/" + image;
    this.discount = discount;
    this.price = price;
    this.name = name;
    this.stock = stock;
  }
  addProduct() {
    this.stock += 1;
    return true;
  }
  removeProduct() {
    this.stock -= 1;
    return true;
  }
}

let foodarray = [];

getAllFood()
  .then((response) => response.json())
  .then((response) => {
    response.data.forEach((e) => {
      foodarray.push(
        new Food(
          e.category,
          e.category_id,
          e.image,
          e.discount,
          e.price,
          e.name,
          e.stock
        )
      );
    });
  });

console.log(foodarray);

setTimeout(() => {
  let div1 = document.createElement("div");

  div1.setAttribute("class", "card");

  let name1 = document.createElement("h2");
  name1.innerHTML = foodarray[0].name;

  div1.appendChild(name1);
  document.querySelector(".foods").appendChild(div1);
}, 1000);

//Food class that has properties: category, category_id, image, discount, price, name, stock
//and methods: addProduct(increase stock number and return true), removeProduct(decrease stock number and return true)

//create an array foods

//call getAllFoods() then create Food objects and push every Food objects to foods array

//Generate HMTL function
