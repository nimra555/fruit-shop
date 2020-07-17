function userInput(){
    let inputElement = document.querySelector("input").value;
    console.log(inputElement);
    var inputItem = document.querySelector("#input-item");
    inputItem.innerHTML = "Your Price: " +  inputElement;
}
let pApple = 10;
let pBanana = 12;
let pMango = 15;
let totalAmount =  0;
let quantityOfApple = 0; 
let quantityOfBanana = 0;
let quantityOfMango = 0;
let appleTotalcost = 0;
let bananaTotalcost = 0;
let mangoTotalcost = 0;


function addInputApple(){
   let num = document.querySelector("#num1");
   console.log(num);
    num.innerHTML  = ++quantityOfApple ;
    appleTotalcost = quantityOfApple * pApple;
    console.log("apple cost " + appleTotalcost);  
     totalElement(); 
     balanceAmount();
}

function SubtractInputApple(){
    
    let num = document.querySelector("#num1");
   console.log(num);
    num.innerHTML  = --quantityOfApple ;
    appleTotalcost= quantityOfApple * pApple;
    console.log(appleTotalcost);
    totalElement(); 
    balanceAmount();
    if(quantityOfApple == 0){
        alert("quantity is zero");
    } 
}


function addInputBanana(){
    let num2 = document.querySelector("#num2");
    console.log(num2);
     num2.innerHTML  = ++quantityOfBanana ;
     bananaTotalcost = quantityOfBanana * pBanana;
     console.log(bananaTotalcost);
     totalElement(); 
     balanceAmount();
 }
  
function SubtractInputBanana(){
     
    let num2 = document.querySelector("#num2");
    console.log(num2);
    num2.innerHTML  = --quantityOfBanana ;
    bananaTotalcost = quantityOfBanana * pBanana;
    console.log(bananaTotalcost); 
    totalElement(); 
    balanceAmount();
    if(quantityOfBanana == 0){
         alert("quantity is zero");
    } 
}


 function addInputMango(){
    let num3 = document.querySelector("#num3");
    console.log(num3);
     num3.innerHTML  = ++quantityOfMango ;
     mangoTotalcost = quantityOfMango * pMango;
     console.log(mangoTotalcost);
     totalElement();
     balanceAmount(); 
       
 }


 function SubtractInputMango(){
     
     let num3 = document.querySelector("#num3");
    console.log(num3);
     num3.innerHTML  = --quantityOfMango ;
     mangoTotalcost = quantityOfMango * pMango;
     console.log(mangoTotalcost);
     totalElement(); 
     balanceAmount();
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
    let inputElement = document.querySelector("input").value;
   let balance = document.querySelector("#balance");
   balance.innerHTML ="Balance: " + (inputElement - totalAmount);
   console.log(balance);
}