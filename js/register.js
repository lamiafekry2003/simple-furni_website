let firName=document.querySelector("#frname")
let lasName=document.querySelector("#laname")
let email=document.querySelector("#emil")
let password=document.querySelector("#password")
let confirme=document.querySelector("#confirm")
let submitt=document.getElementById("valid")
let error=document.getElementById("error")
let input=document.querySelectorAll("input")



submitt.addEventListener("click",validate)

function validate(e){
   e.preventDefault()
  
   // validate email
   let emailval=email.value;
   let emailReg=/\w+@\w+.(com|net|yahoo)/ig;
   let valiemail=emailReg.test(emailval)
   
   if(firName.value =="" && lasName.value =="" && email.value =="" && password.value=="" && confirme.value ==""){
      error.innerHTML="Please Enter Data";
      error.style.backgroundColor="red"
      error.style.padding="10px"
      input.forEach((i)=>{
         i.style.borderColor="red"
      })
      return false
   }else if(firName.value.length <2 || firName.value.length >15){
      error.innerHTML="Please insert 5-15 charachter in first name"
      firName.style.borderColor="red"
      error.style.backgroundColor="red"
      error.style.padding="10px"
      return false
   }
   else if(lasName.value.length <2 || lasName.value.length >15){
      error.style.backgroundColor="red"
      error.innerHTML="Please insert 5-15 charachter in last name"
      lasName.style.borderColor="red"
      return false
   }else if(valiemail === false ){
      error.style.backgroundColor="red"
      error.innerHTML="Please enter valid Email contain @ ,not contain space"
      error.style.padding="10px"
      email.style.borderColor="red"
      return false
   }else if(password.value.length<8){
      error.innerHTML="Please enter Atleast 8 charachter";
      error.style.backgroundColor="red"
      password.style.borderColor="red"
      return false;
  }else if(password.value !=confirme.value){
      error.innerHTML="Please enter valid password";
      error.style.backgroundColor="red"
      confirme.style.borderColor="red"
      return false;
   }else{
    //   const data={
    //      firstName : firName.value,
    //      lasName: lasName.value,
    //      email: email.value,
    //      tele: tele.value
    //   }
    localStorage.setItem("firstName",firName.value)
    localStorage.setItem("lastName",lasName.value)
    localStorage.setItem("email",email.value)    
    localStorage.setItem("password",password.value) 
    localStorage.setItem("confirmPass",confirme.value)
    
    error.style.backgroundColor="green"
    error.style.padding="10px"
    error.innerHTML="register succeffuly"

      setTimeout(() => {
         window.location="login.html"
    },2000);
    
    // const stringi=JSON.stringify(data)
    //   localStorage.setItem("userInfo",stringi);

    

   //  logo.style.display="none";
   //  userIco.innerHTML=localStorage.getItem("firstName")
   //  userIco.style.color="white"
   //  userIco.style.marginTop="20px"

   }
}