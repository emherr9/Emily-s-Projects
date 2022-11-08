let items=[];
let purchasedItems=[];


function full() { 
   clear();
    for(i=0;i<items.length;i++){
        let item=items[i]
        let li=document.createElement("li");
        if (purchasedItems.includes(item)){
            li.style.textDecoration="line-through"
        }
        
        li.appendChild(document.createTextNode(item));
        document.getElementById("List").appendChild(li);
        console.log(item)
    }
}

function crossOut(element){
    if (element.style.textDecoration==="line-through"){
        element.style.textDecoration=""
        let index= purchasedItems[purchasedItems.indexOf(element)]
        let left=purchasedItems.slice(0,index)
        let right=purchasedItems.slice(index+1)

    }
    else if (element.style.textDecoration===""){
        element.style.textDecoration="line-through"
        purchasedItems.push(element.innerHTML)
    }
    
   }



function add() {
    let newItem=prompt("Add Item Here!")
    let ul =document.getElementById("List");
    let li= document.createElement("li");
    li.setAttribute("onclick","crossOut(this)");
    li.appendChild(document.createTextNode(newItem));
    ul.appendChild(li);
    items.push(newItem)
}


function purchase(){

    clear()
    for(i=0;i<purchasedItems.length;i++){
        let purchaseItem=purchasedItems[i]
        let li=document.createElement("li")
        li.appendChild(document.createTextNode(purchaseItem))
        li.style.textDecoration="line-through"
        document.getElementById("List").appendChild(li)
        
    }

}


function clear(){
    let items= document.getElementById("List");
    console.log(items);

   while (items.firstChild){
    items.removeChild(items.firstChild)
   }
}

function left(){
    clear()
    for(i=0;i<items.length;i++){
        let item=items[i]
        console.log([items])
        console.log([purchasedItems])
        if(!purchasedItems.includes(item)){
            let li=document.createElement("li")
            li.appendChild(document.createTextNode(item))
            document.getElementById("List").appendChild(li)
        }

    }
}