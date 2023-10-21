let cartBtn = document.querySelectorAll("#ATC-4");
let NavBar = document.querySelector(".navbar");
let Body = document.querySelector(".body");
let cartIcon = document.querySelector("#cart");
let Cart = document.querySelector(".cartbody");
let cancelBtn = document.querySelector(".cancelButn");
let cartIncrement = document.querySelector("#sup");
let numberOfItems = document.querySelector("#itemNumber");
let itemName = document.querySelectorAll(".itemName");
let Dish = document.querySelectorAll(".dish");
let images = document.getElementsByTagName("img");
let message = document.querySelectorAll(".message");
let buyBTN = document.querySelector(".btn-dark");
let DishArr = Object.values(Dish);

console.log(document.querySelector(".btn-danger"));
let ITN = Object.values(itemName);
let arrCartBtn = Object.values(cartBtn);

window.addEventListener("DOMContentLoaded" , () => {
    let price = document.querySelectorAll(".price");
    let convertPriceToArray = Object.values(price);
    let X = convertPriceToArray.map(item => 
            {item.innerHTML = item.innerHTML.concat("$");
             item.style.color = "red";
            }
    );

    Body.classList.add("cookie");
})

//Cart Body
cartIcon.addEventListener("click" , () => {
         Cart.classList.add("Cart");
         document.querySelector(".Cart").style.display = "block";
})

// Cancel Button
cancelBtn.addEventListener("click" , () => {
                 document.querySelector(".Cart").style.display = "none";
})

//Buy Button
buyBTN.addEventListener("click" , () => {
    document.querySelector(".alrt").style.display = "flex"
    document.querySelector("#cancelAlert").style.top = "0px"
    document.body.style.overflow = "hidden"
});

//Cancel Alert
let cancelAlertBtn = document.querySelectorAll("#cancelAlert");
for(let i = 0; i < cancelAlertBtn.length; i++){
        cancelAlertBtn[i].addEventListener("click" , () => {
        document.querySelector(".alrt").style.display = "none"
        document.body.style.overflow = "visible";
    }) 
}

//Adding a click handler to every cart icon to add item to cart
function AddToCART() {
    arrCartBtn.map(item => {
        item.addEventListener("click" , () => {
        //Create a div tag to contain items that are added to the cart
        let createCartItem = document.createElement("div");
        createCartItem.classList.add("cartItem")
    
        //Create a div tag for every item added to the cart
        let createCartItemContent = document.createElement("div");
        createCartItemContent.classList.add("itemPrice")
        
        //Item Name tag
        let cartItemName = document.createElement("p");
        cartItemName.innerHTML = item.parentElement.firstElementChild.innerHTML;

        //Item Price tag
        let cartItemPrice = document.createElement("p");
        cartItemPrice.classList.add("item_Price");
        cartItemPrice.innerHTML = item.parentElement.firstElementChild.nextElementSibling.innerHTML;
        cartItemPrice.style.color = "red";
        let convertPriceValToNumber = Number(cartItemPrice.innerHTML.replace("$" , ""));

        //Item Units/Quantity tag
        let cartItemUnits = document.createElement("input");
        cartItemUnits.classList.add("units");
        cartItemUnits.type = "number";
        cartItemUnits.value = 1;      
        let convertCartItemUnitsToNumber = Number(cartItemUnits.value);

        //Item Image tag
        let itemImage = document.createElement("img"); 
        itemImage.src = item.parentElement.parentElement.firstElementChild.src

        //Create a delete button to remove added items
        let removeItemBtn = document.createElement("button");
        removeItemBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                                    </svg>`;
        removeItemBtn.classList.add("removeBtn");
        
        //Append every created tag to their respective item Div tag called 'createCartItemContent'
        createCartItemContent.appendChild(cartItemName);
        createCartItemContent.appendChild(cartItemPrice);
        createCartItemContent.appendChild(cartItemUnits);

        //Append every created tag to the overall Div tag called 'createCartItem'
        createCartItem.appendChild(itemImage);
        createCartItem.appendChild(createCartItemContent);
        createCartItem.appendChild(removeItemBtn);

        //Append the Div tag called 'createCartItem' to its container tag called 'cartItemsBody' which is in the cart 
        document.querySelector(".cartItemsBody").appendChild(createCartItem)

        //Add a click event to the delete button
        removeItemBtn.addEventListener("click" , () => {
                    document.querySelector(".cartItemsBody").removeChild(createCartItem)
                    
                    //Reducing Cart Items to show number on the cart icon
                    numberOfItems.innerHTML--; 
                    if(numberOfItems.innerHTML === "0"){
                        cartIncrement.style.display = "none";
                    }
                    let B = removeItemBtn.parentElement.firstElementChild.nextElementSibling.firstElementChild.innerHTML;
                    let Item_Name = item.parentElement.firstElementChild.innerHTML;
                    let messageText = item.parentElement.parentElement.lastElementChild
 
                    if(B === Item_Name){
                         messageText.style.display = "none";
                         console.log();
                    }

                    if(removeItemBtn.onclick = true){
                        document.querySelector(".totalPrice").innerHTML = document.querySelector(".totalPrice").innerHTML.replace("$" ,"") - Number(removeItemBtn.parentElement.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.innerHTML.replace("$" , ""));
                        console.log(typeof Number(removeItemBtn.parentElement.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.innerHTML.replace("$" , "")))
                    }
                    
        })  

        //Increasing Cart Items to show number on the cart icon
        numberOfItems.innerHTML++; 
        cartIncrement.style.display = "block";

        //Select every tag with unit class
        let units = document.querySelectorAll(".units")
        //Convert Units to an array
        let convertedUnits = Object.values(units);

        //Creating a message to tell us when an item is already added to the cart
        let Item_Name = item.parentElement.firstElementChild.innerHTML;
        let messageText = item.parentElement.parentElement.lastElementChild

              if(item.onclick = true){  
                let C = document.createElement("p");
                
                let c_node = document.createTextNode(Item_Name + " " + "is added") 
                C.classList.add("alrt_message");
                
                C.appendChild(c_node);
                document.querySelector(".header").appendChild(C);

                setTimeout(() => {
                     C.style.display = "none";   
                },3000)
              }
      
        
        function updatePrice() {
            let totalPrice = document.querySelector(".totalPrice");
            let eachItemPrice = document.querySelectorAll(".item_Price");

            let H = Object.values(eachItemPrice);

            let sum = 0;
            for(let x = 0; x < H.length; x++){
                         var J = Number(H[x].innerHTML.replace("$" , ""));
                         sum += J;
                         totalPrice.innerHTML = sum;
                         console.log(sum);
                         document.querySelector(".totalPrice").innerHTML += ("$");
            };

            convertedUnits.map(units => {
                units.addEventListener("change" , () => {
                      cartItemPrice.innerHTML = (convertPriceValToNumber * cartItemUnits.value) + "$";
    
                      if(cartItemUnits.value <= 0){
                         cartItemPrice.innerHTML = "0$";
                      }
                      
                      let sum = 0;
                      for(let x = 0; x < H.length; x++){
                             var J = Number(H[x].innerHTML.replace("$" , ""));
                             sum += J;
                             totalPrice.innerHTML = sum;
                             document.querySelector(".totalPrice").innerHTML += ("$");
                      };
                      
                })
            });
        }
        updatePrice();
            
    });
})
}
AddToCART();


let products = document.querySelectorAll(".details");
let convertProductsToArray = Object.values(products);
convertProductsToArray.map(item => {
         item.addEventListener("click" , () => {
            let details = document.createElement('div');
            details.classList.add("product-details");

            let moreDetails = document.createElement('div');
            moreDetails.classList.add("moreDetails");

            let aboutTheProduct = document.createElement('div');
            aboutTheProduct.classList.add("about_product");

            let product_details = document.createElement("p");
            product_details.classList.add("prod_det")
            product_details.innerHTML = "Full Details" + '</br>' + "Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor"
            
            let cancelBtn = document.createElement("button");
            cancelBtn.classList.add("cancelButn");
            cancelBtn.innerHTML = "&times";
            cancelBtn.style.color = "black";
            cancelBtn.style.cursor = "pointer";
            cancelBtn.style.backgroundColor = "rgb(255, 153, 116)"

            cancelBtn.addEventListener("click" , () => {
                 Body.removeChild(details);
                 document.body.style.overflow = "visible";

            }); 
            
            let img = document.createElement("img");
            img.src = item.parentElement.firstElementChild.src;

            let about = document.createElement("h5");
            about.innerHTML = "Product Name:" + " " + item.parentElement.firstElementChild.nextElementSibling.firstElementChild.innerHTML;
            about.innerHTML += " " + item.parentElement.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.innerHTML;
            
            let starIcon = document.querySelectorAll(".star-icon");
            for(let v = 0; v < starIcon.length; v++){
                starIcon[v];
            }

            img.style.width = "300px";
            img.style.height = "300px";
            about.style.width = "300px";
            about.style.display = "flex";
            about.style.marginTop = "0px";
            about.style.justifyContent = "space-between";
            about.style.color = "Black";

            let addToCartBtn = document.createElement("button");
            addToCartBtn.classList.add("btn-danger");
            addToCartBtn.style.display = "block";
            addToCartBtn.setAttribute("id" , "ATC-4");
         
            addToCartBtn.innerHTML = "Add to Cart";

            document.body.style.overflow = "hidden";
            moreDetails.appendChild(img);
            moreDetails.appendChild(addToCartBtn)

            aboutTheProduct.appendChild(about);
            aboutTheProduct.appendChild(product_details);

            details.appendChild(aboutTheProduct);
            details.appendChild(moreDetails);
            details.appendChild(aboutTheProduct);
            details.appendChild(cancelBtn)
            Body.appendChild(details);

            console.log("HI");
         })


});

