// message for null
let myfinput = document.querySelector(".cv-form input[type='text']");



// change gender

let myspans= document.querySelectorAll(".cv-form .type span ");
myspans.forEach(span => {
    span.addEventListener("click", (e) => {
        // remove active class from elments and active class to the target element
        HandleActiveClass(e);
        
    })

    
    
});

// change marital status
let myspansb =document.querySelectorAll(".cv-form .type-b span ");
myspansb.forEach(span => {
    span.addEventListener("click", (e) => {
        // remove active class from elments and active class to the target element
        HandleActiveClass(e);
        
    })
})

// check the constraints
let mycheckinp= document.querySelector(".cv-form input[type='checkbox']");
let myhidesection=document.querySelector(".cv-form .hideingsection");

mycheckinp.onclick = function(e){
    myhidesection.classList.toggle("active");
}


// open login menu

let mybtn =document.querySelector("#CV .start button");

mybtn.onclick = function(e){
  // Create OverLay
  let mypopupoverlay = document.createElement("div");
  // create class for overlay
  mypopupoverlay.className="popup-overlay";
  // add overlay to document
  document.body.appendChild(mypopupoverlay);
  // Create PopUp For login button
  let loginmenu = document.createElement("div");
  // Give login Class
  loginmenu.className = "Pop-up";
  
  // create login menu content

 let myfdiv=document.createElement("div");
 myfdiv.className="f-div";
 
  
   
   
   let myimg=document.createElement("img");
   myimg.src="img/logo.svg";
   myimg.className="PopUp-Img";
   myfdiv.appendChild(myimg);

   let mytext1=document.createElement("h3");
   let mytext1content = document.createTextNode("انشاء حساب");
   mytext1.className="Pop-H";
   mytext1.appendChild(mytext1content);
   myfdiv.appendChild(mytext1);

   loginmenu.appendChild(myfdiv);

   let mysdiv=document.createElement("div");
   mysdiv.className="s-div";

   let mytext2=document.createElement("h3");
   let mytext2content = document.createTextNode("تسجيل دخول");
   mytext2.className="Pop-H2";
   mytext2.appendChild(mytext2content);
   mysdiv.appendChild(mytext2);
   
   let myicondiv=document.createElement("div");
   myicondiv.className="icon-div";

   let myicon1=document.createElement("i");
   myicon1.className="fab fa-apple fa-2x";
   
   
   let myicon2=document.createElement("i");
   myicon2.className="fab fa-google fa-2x";

   myicondiv.appendChild(myicon1);
   myicondiv.appendChild(myicon2);

   mysdiv.appendChild(myicondiv);

   loginmenu.appendChild(mysdiv);
   
   let myform=document.createElement("form");

   let mythdiv=document.createElement("div");
   mythdiv.className="form-row";
   let myithdivcol=document.createElement("div");
   myithdivcol.className="col";
   
   let input1=document.createElement("input");
   input1.type="email";
   input1.placeholder="البريد الاليكترونى";
   

   
   let input2=document.createElement("input");
   input2.type="password";
   input2.placeholder="كلمة المرور";

   let myh=document.createElement("h4");
   let mytext=document.createTextNode(" نسيت كلمة المرور؟");
   myh.appendChild(mytext);


   myithdivcol.appendChild(input1);
   myithdivcol.appendChild(input2);
   myithdivcol.appendChild(myh);

   mythdiv.appendChild(myithdivcol);
   
   myform.appendChild(mythdiv);
   loginmenu.appendChild(myform);

   let myfthdiv=document.createElement("div");
   myfthdiv.className="fth-div";

   let mytext3=document.createElement("h2");
   let mytext3content = document.createTextNode("انشاء حساب");
   mytext3.className="PopUp-t";
   mytext3.appendChild(mytext3content);

   myfthdiv.appendChild(mytext3);

   let mytext4=document.createElement("h3");
   let mytext4content = document.createTextNode("دخول");
   mytext4.className="Pop-H4";
   mytext4.appendChild(mytext4content);

   myfthdiv.appendChild(mytext4);

   loginmenu.appendChild(myfthdiv);

                let myButton = document.createElement("span");
                myButton.className= "PopUp-Btn";
                let BtnText = document.createTextNode("X");
                myButton.appendChild(BtnText);

                loginmenu.appendChild(myButton);

    
//    loginmenu.appendChild(mysdiv);
  // add ImgPopUp to document
  document.body.appendChild(loginmenu);

  

}
document.addEventListener('click', function (e) {
    if (e.target.className === "PopUp-Btn")
    {
        // remove ImgPopUp
        e.target.parentElement.remove();
        
        
        // remove OverLay from docuement
         
        document.querySelector(".popup-overlay").remove();

    }
});

function HandleActiveClass(ev) {
    ev.target.parentElement.querySelectorAll(".active").forEach(ele => {
        ele.classList.remove("active");
    });
    // add active class on the target element
    ev.target.classList.add("active");
} 