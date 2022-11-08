
//User ID
let downLoad = document.querySelector("#downLoad");
let yourName = document.querySelector("#yourName");
let data = "";

downLoad.addEventListener("submit", function(event){
    event.preventDefault();

    if(yourName.value === ""){
        alert("Please enter your first name");
    }else{alert (`Thank you ${yourName.value}, your download will start shortly.`);}

    yourName.value = "";
})


//Sandwich Builder
let sandwichForm = document.querySelector("#sandwichForm");
let ingredients = document.querySelectorAll("#sandwichForm .ingredients");
let sammie = [];

sandwichForm.addEventListener("submit", function(event){
    event.preventDefault();
    for(let i = 0; i<ingredients.length; i++){
        if (ingredients[i].checked === true){
            sammie.push(`${ingredients[i].id}`)
        }
    }let str = sammie.join(", ");
    alert (`Your sandwich will come with ${str}!  That sounds awesome!!`)

    for(let i = 0; i<ingredients.length; i++){
        ingredients[i].checked = false;
        }
})


//Barber's Appointment
let barberForm = document.querySelector("#barberForm");
let date = document.querySelector("#date");
let barberName = document.querySelector("#name");
let longRadio = document.querySelector("#longHair");
let shortRadio = document.querySelector("#shortHair");

barberForm.addEventListener("submit", function(event){
    event.preventDefault();
    if (date.value===""){
        alert("You must select a valid date.  Please try again.");
    }

    if (longRadio.checked === true){
        hairLength = "long";
    }else if (shortRadio.checked === true) 
        {hairLength = "short"; }

   alert(`Haircut scheduled for ${date.value} with ${barberName.value} for ${hairLength} hair.`);
   date.value = "";
   barberName.value = "";
   shortRadio.checked = false;
   longRadio.checked = false;
})


//New Account Form
let newUserForm = document.querySelector("#newUserForm");
let userName = document.querySelector("#userName");
let userEmail = document.querySelector("#email");
let passWord1 = document.querySelector("#password1");
let passWord2 = document.querySelector("#password2");
let accounts = []

newUserForm.addEventListener("submit", function(event){
    event.preventDefault();
    if(passWord1.value !== passWord2.value){
        alert("Your passwords do not match.  Please try again.");
    }else if(passWord1.value.length < 8){
        alert("Your password is too short.  It must be at least 8 charactes.  Please try again.");
    }else if( userName.value.length<4){
        alert("Your user name is to short.  It must be at least 4 characters.  Please try again.");
    }else if(userEmail.value.includes("@")!==true){
        alert("Your email address is invalid, please try again.")
    }else{
    alert(`Your account has been created.  UserID:  ${userName.value} with EMail:  ${userEmail.value}`);

    let newAccount = {};
    newAccount.userID = userName.value;
    newAccount.email = userEmail.value;
    newAccount.password = passWord1.value;
    accounts.push(newAccount)

    userName.value = "";
    userEmail.value = "";
    passWord1.value = "";
    passWord2.value = "";
}
})