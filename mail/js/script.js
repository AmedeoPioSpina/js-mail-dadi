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

btn.addEventListener("click", (e) => {
    e.preventDefault();
    for(let i = 0; i < mailList.length; i++){
        if( mailInput.value === mailList[i]){
            mailInput.value = "";
            mailAccessStatus.textContent = "Access allowed!";
            break;
        }
        else if( i === mailList.length - 1 && mailList[mailList.length - 1 ] !== mailInput.value ){
            mailInput.value = "";
            mailAccessStatus.textContent = "Access denied!";
        }
    }
});