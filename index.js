let inp = document.getElementById("inp");
let block = document.getElementById("block");
let block1 = document.getElementById("block1");
let block2 = document.getElementById("block2");
let text = document.getElementById("text");
let text1 = document.getElementById("text1");
let price = document.getElementById("price")
let price2 = document.getElementById("price1")
let price3 = document.getElementById("price2")


let cost = 1.5;
let cost1 = 3;
let cost2 = 9;
inp.oninput = function(){
   text.innerHTML = 0
   text1.innerHTML = inp.value 
   block.style.width = 20  + "px"
   block1.style.width = 40  + "px"
   block2.style.width = 35 + "px"
    
   if(block.style.width == 20  + "px" || block1.style.width == 40  + "px" || block2.style.width == 35 + "px"){

    block.style.width = inp.value + "px"
    block1.style.width = inp.value + "px"
    block2.style.width = inp.value + "px"

   }

    if(inp.value == 100){
        block2.style.width = 185 + "px"
        block.style.width = 75 + "px"
        block1.style.width = 140  + "px"
        cost = cost + 15
        price.innerHTML =  cost;
        cost1 = cost1 + 30
        price1.innerHTML = cost1++;
        cost2 = cost2 + 90
        price3.innerHTML = cost2++;
    }

    if(inp.value == 0){

        block.style.width = 20 + "px"
        block1.style.width = 40 + "px"
        block2.style.width = 35 + "px"
        price.innerHTML = 1.5
        price1.innerHTML = 3
        price3.innerHTML = 9
        cost = 1.5
        cost1 = 3;
        cost2 = 9; 

    }
}