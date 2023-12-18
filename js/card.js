let box=document.querySelector(".box div")
let bodycard=document.querySelector(".bodycard")
let products=document.querySelector(".empty")
let sup=document.querySelector("sup")

function productDrow(product =[]){
  if(JSON.parse(localStorage.getItem("productItem")).length === 0){
    products.innerHTML="<h1>The Card Is Empty</h1>"
  }
  let productInCard=JSON.parse(localStorage.getItem("productItem")) || product
    let productList=productInCard.map((item)=>{
        return`
                <tr>
                    <td><img src="${item.imgUrl}" alt=""width="100px"></td>
                    <td>${item.id}</td>
                    <td>${item.price}</td>
                    <td>${item.quantity}</td>
                    <td>${item.price}* ${item.quantity}</td>
                    <td>
                    <button type="button" class="btn btn-danger" onclick="removeItemFromCard(${item.id})"><i class="fa-solid fa-minus"></i></button>
                    </td>
                </tr>
        `
    })
    bodycard.innerHTML=productList.join("")
}
productDrow()

function removeItemFromCard(id){
 let productInCard=localStorage.getItem("productItem")
  if(productInCard){
    let items=JSON.parse(productInCard)
    let filterd= items.filter((item)=>item.id !== id)
    localStorage.setItem("productItem",JSON.stringify(filterd))
    productDrow(filterd)

  }
}
