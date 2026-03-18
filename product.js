//side menubar

var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})

var closenav = document.getElementById("close-nav")
closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})

//search functionality

var productcontainer = document.getElementById("product-container")
var search = document.getElementById("search")
var productlist = productcontainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredValue = event.target.value.toUpperCase()

    for(let count=0; count<productlist.length; count++)
        {
          var productname = productlist[count].querySelector("h1").textContent
          if(productname.toUpperCase().indexOf(enteredValue)<0)
          {
            productlist[count].style.display = "none"
          }
    
         else{
            productlist[count].style.display = "block"
          }
         }
    
    
        }










)