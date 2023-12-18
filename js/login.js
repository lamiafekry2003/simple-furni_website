let firName=document.querySelector("#frname")
let lasName=document.querySelector("#laname")
let email=document.querySelector("#emil")
let password=document.querySelector("#password")
let login=document.getElementById("valid")
let error=document.getElementById("error")
let user=document.querySelector("#user")

let getFirstName=localStorage.getItem("firstName");
let getLastName=localStorage.getItem("lastName");
let getUserEmail=localStorage.getItem("email");
let getUserPassword=localStorage.getItem("password")



login.addEventListener("click",check)
function check(e){
    e.preventDefault()
    if(firName.value =="" && lasName.value =="" && email.value =="" && password.value=="" && confirme.value ==""){
        error.innerHTML="Please Enter Data";
        error.style.backgroundColor="red"
        error.style.padding="10px"
        input.forEach((i)=>{
           i.style.borderColor="red"
        })
        return false
    }else{
       if((getFirstName && getFirstName.trim() === firName.value.trim()) && (getLastName && getLastName.trim()=== lasName.value.trim()) && (getUserEmail && getUserEmail.trim() === email.value.trim()) && (getUserPassword && getUserPassword.trim() === password.value.trim())){
        error.style.backgroundColor="green"
        error.style.padding="10px"
        error.innerHTML="Login in Successfully"

        setTimeout(() => {
            window.location="index.html"
        }, 2000);
       user.innerHTML=localStorage.getItem("firstName")
       user.style.color="white"
       user.style.marginTop="-12px"
       }else{
        error.innerHTML="Please Enter current Data ";
        error.style.backgroundColor="red"
        error.style.padding="10px"
       }
    }
}
// logout
let logOutt=document.querySelector("#logout");

logOutt.addEventListener('click',function(){
  localStorage.clear()
  setTimeout(() => {
    window.location="index.html"
  }, 1000);
})
