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
         icon.src="./images/Minus.png"
    } else {
         trigger.style.backgroundColor = "";
         icon.src="./images/Plus.png"; 
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
    const arrow = document.querySelector("#dropbtn_arrow"); 
    arrow.style.transform =dropdown.classList.contains("show") ? "rotate(180deg)" : "rotate(0deg)";
}
   
    // rotate usd buttons arrow


function click_USD(){
    
    const dropdown_USD = document.getElementById("myDropdown_USD");
    dropdown_USD.classList.toggle("show");
        //  rotate arrow
    const arrow_usd = document.querySelector("#dropbtn_arrow_usd");
    console.log(arrow_usd);
    arrow_usd.style.transform = dropdown_USD.classList.contains("show") ? "rotate(180deg)" : "rotate(0deg)";
};


// fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(json => console.log(json));

// fetch('https://jsonplaceholder.typicode.com/photos')
//        .then(resp => resp.json())
//        .then(json => console.log(json));

// fetch('https://weatherdbi.herokuapp.com/data/weather/tbilisi')
//       .then(resp => resp.json())
//       .then(json => console.log(json));


    //   const getUsers =  () => {
    //         const ul = document.querySelector('ul');
    //         const users =  fetch('https://jsonplaceholder.typicode.com/users')
    //              .then(resp => resp.json())
    //              .then(json => console.log(json))
                    
    //         users.forEach(user => {
    //             const li = document.createElement('li');
    //             li.innerText = `${user.name} ${user.phone}`;
    //             ul.appendChild(li);
    //         });
       
    // }
    
    // getUsers();

