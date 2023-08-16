var NavPhone = document.getElementById("NavPhone")
var Page_1 = document.getElementById("Main")

function Open_Close(){
   
   if(NavPhone.style.display == "none"){
       NavPhone.style.display = "block"
   }
   else{
       NavPhone.style.display = "none"
       Page_1.style.display = "block"
   }
}

window.addEventListener("load" , ()=>{

   NavPhone.style.display = "none"

})
