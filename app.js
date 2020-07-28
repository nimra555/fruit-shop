
let priceofApple = 10;
let priceofBanana = 12;
let priceofMango = 15;
let totalAmount =  0;
let quantityOfApple = 0; 
let quantityOfBanana = 0;
let quantityOfMango = 0;
let appleTotalcost = 0;
let bananaTotalcost = 0;
let mangoTotalcost = 0;
let fullQuantity = 0;

function userInput(){
    let inputElement = document.querySelector("input").value;
    console.log(inputElement);
    if(inputElement === ""){
        alert("Enter your budget");
    }
    
    let inputItem = document.querySelector("#input-item");
    inputItem.innerHTML = "Your Price: " +  inputElement;

}

function addInputApple(){
   let num = document.querySelector("#num1");
   console.log(num);
    num.innerHTML  = ++quantityOfApple;
    appleTotalcost = quantityOfApple * priceofApple;
    console.log("apple cost " + appleTotalcost);  
    totalElement(); 
    balanceAmount();
    totalQuantity();
}

function SubtractInputApple(){
    
    let num = document.querySelector("#num1");
   console.log(num);
    num.innerHTML  = --quantityOfApple ;
    appleTotalcost= quantityOfApple * priceofApple;
    console.log(appleTotalcost);
    totalElement(); 
    balanceAmount();
    totalQuantity();
    if(quantityOfApple == 0){
        alert("quantity is zero");
    } 
}


function addInputBanana(){
    let num2 = document.querySelector("#num2");
    console.log(num2);
     num2.innerHTML  = ++quantityOfBanana ;
     bananaTotalcost = quantityOfBanana * priceofBanana;
     console.log(bananaTotalcost);
     totalElement(); 
     balanceAmount();
     totalQuantity();
 }
  
function SubtractInputBanana(){
     
    let num2 = document.querySelector("#num2");
    console.log(num2);
    num2.innerHTML  = --quantityOfBanana ;
    bananaTotalcost = quantityOfBanana * priceofBanana;
    console.log(bananaTotalcost); 
    totalElement(); 
    balanceAmount();
    totalQuantity();
    if(quantityOfBanana == 0){
         alert("quantity is zero");
    } 
}


 function addInputMango(){
    let num3 = document.querySelector("#num3");
    console.log(num3);
     num3.innerHTML  = ++quantityOfMango ;
     mangoTotalcost = quantityOfMango * priceofMango;
     console.log(mangoTotalcost);
     totalElement();
     balanceAmount(); 
     totalQuantity();  
 }


 function SubtractInputMango(){
     
     let num3 = document.querySelector("#num3");
    console.log(num3);
     num3.innerHTML  = --quantityOfMango ;
     mangoTotalcost = quantityOfMango * priceofMango;
     console.log(mangoTotalcost);
     totalElement(); 
     balanceAmount();
     totalQuantity();
     if(quantityOfMango == 0){
         alert("quantity is zero");
     } 
 }
 
 function totalElement(){ 
   let totalNumber = document.querySelector("#total");
   console.log(totalNumber);

   totalAmount = appleTotalcost+ bananaTotalcost + mangoTotalcost; 
   totalNumber.innerHTML ="Total: " + totalAmount;
   console.log(total);
   
   let inputElement = document.querySelector("input").value;

   if(totalAmount > inputElement){
        alert("you can't select more than your amount");

    }
    else{
        console.log("you can select");
    }
}

function balanceAmount(){
    let inputElement =  document.querySelector("input").value;
   let balance = document.querySelector("#balance");
   balance.innerHTML ="Balance: " + (inputElement - totalAmount);
   console.log(balance);
}

function totalQuantity(){
    let  tQuantity = document.querySelector('#total-quantity');

    fullQuantity = (quantityOfApple+quantityOfBanana+quantityOfMango);
    console.log(fullQuantity);
    tQuantity.innerHTML = "Quantity of Fruits: " + fullQuantity;
}