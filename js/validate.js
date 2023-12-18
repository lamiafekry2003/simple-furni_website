let firName=document.querySelector("#fname")
let lasName=document.querySelector("#lname")
let email=document.querySelector("#email")
let tele=document.querySelector("#tel")
let submitt=document.getElementById("valid")
let error=document.getElementById("error")
let input=document.querySelectorAll("input")
let userIco=document.querySelector("#usernam")
let logo=document.querySelector("#logo")

let getFirstName=localStorage.getItem("firstName");
let getLastName=localStorage.getItem("lastName");
let getUserEmail=localStorage.getItem("email");
let getUserPassword=localStorage.getItem("password")



submitt.addEventListener("click",validate)

function validate(e){
   e.preventDefault()

   let televalue=tele.value;
   let telReg=/\(\d{4}\)\s\d{3}-\d{4}/
   let valiTel=telReg.test(televalue)

   if(firName.value =="" && lasName.value =="" && email.value =="" && tele.value =="" ){
      error.innerHTML="Please Enter Data";
      error.style.backgroundColor="red"
      error.style.padding="10px"
      input.forEach((i)=>{
         i.style.borderColor="red"
      })
      return false
   }else if(valiTel === false){
      error.innerHTML="Please enter vaild Phone Number contain (num) num-num"
      error.style.padding="10px"
      tele.style.borderColor="red"
   }else{
   
      if((getFirstName && getFirstName.trim() === firName.value.trim()) && (getLastName && getLastName.trim()=== lasName.value.trim()) && (getUserEmail && getUserEmail.trim() === email.value.trim()) ){
         error.style.backgroundColor="green"
         error.style.padding="10px"
         error.innerHTML="Login in Successfully"

         localStorage.setItem("phone",tele.value)

        }else{
         error.innerHTML="Please Enter current Data ";
         error.style.backgroundColor="red"
         error.style.padding="10px"
        }

   //  logo.style.display="none";
   //  userIco.innerHTML=localStorage.getItem("firstName")
   //  userIco.style.color="white"
   //  userIco.style.marginTop="20px"

   }
}