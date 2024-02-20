//  copyright 

document.getElementById("copyright-year").innerHTML = new Date().getFullYear();

const faqs_box = document.querySelectorAll(".Faqs-box");

faqs_box.forEach((item)=>{
   const trigger = item.querySelector(".faqs-header");
   const content = item.querySelector(".faqs-content");
   const icon = trigger.querySelector(".myBtn");
   
      
   trigger.addEventListener("click", ()=>{
    content.classList.toggle("active");
            
    if (content.classList.contains("active")) {
        trigger.style.backgroundColor = "#FA8232";
         icon.src="../homepage/images/Minus.png"
    } else {
         trigger.style.backgroundColor = "";
         icon.src="../homepage/images/Plus.png"; 
    }
   })
})

            /* When the user clicks on the button,
                toggle between hiding and showing the dropdown content */

function myFunction() {
// Toggle visibility of the dropdown
const dropdown = document.getElementById("myDropdown");
dropdown.classList.toggle("show");

// Rotate the arrow
const arrow = document.querySelector(".dropbtn"); 
arrow.style.transform = dropdown.classList.contains("show") ? "rotate(180deg)" : "rotate(0deg)";
}
   
    // rotate usd buttons arrow


function click_USD(){
    
    const dropdown = document.getElementById("myDropdown_USD");
    dropdown.classList.toggle("show");
    const arrowUSD = document.querySelector(".dropbtn_USD");
    arrowUSD.style.transform = dropdown.classList.contains("show") ? "rotate(180deg)" : "rotate(0deg)";
}