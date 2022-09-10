let btnNContContainer = document.querySelector(".about-btn-content");
let btns = document.querySelectorAll(".btn");
let contents = document.querySelectorAll(".content");

// ******FIRST LOGIC, EASY TO USE*****

// adding event listener on the all btns
btns.forEach((btn) => {
  btn.addEventListener("click", (btn) => {
    //removing active class from all the btns first
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    //adding active class on clicked btn
    btn.currentTarget.classList.add("active");

    //targetting current btn id so that same id content can be targetted
    let currbtnId = btn.currentTarget.dataset.id;
    let currContent = document.getElementById(currbtnId);
    //removing active class from all contents
    contents.forEach((content) => {
      content.classList.remove("active");
    });
    //adding active class on the content that has same id to clicked btn
    currContent.classList.add("active");
  });
});

// *******SECOND LOGIC, QUITE HARD***********
btnNContContainer.addEventListener("click", element => {
    //targetting btn id 
    let btnId = element.target.dataset.id;
   
    //targetted current content with btn id
    let currContent = document.getElementById(btnId);
   
    //restricting functionality of event only to btns
    if(btnId){
        //removing active class from all the btns first
        btns.forEach((btn) => {
            btn.classList.remove("active");
        });
        // adding active class on clicked/current btn
        element.target.classList.add("active");
        
        //removing active from all contents
        contents.forEach((content) => {
            content.classList.remove("active");
        });
        //adding active to current content 
        currContent.classList.add("active");
    }
});
