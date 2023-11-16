let mailList = [
    "mario@gmail.com",
    "lugi@gmail.com",
    "barry@gmail.com",
    "franco@gmail.com",
    "giulio@gmail.com"
];
let mailInput = document.querySelector("#mail-input");
let btn = document.querySelector("#btn");
let mailAccessStatus = document.querySelector("#mail-access-status");
let isMailFound = false;

btn.addEventListener("click", (e) => {
    e.preventDefault();
    for(let i = 0; i < mailList.length; i++){
        if( mailInput.value === mailList[i]){
            isMailFound = true;
        }
    }

    mailInput.value = "";
    console.log(isMailFound);

    if(isMailFound === true) {
        mailAccessStatus.textContent = "Access allowed!";
    }
    else{
        mailAccessStatus.textContent = "Access denied!";
    }
});