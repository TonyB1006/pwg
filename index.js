const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let newPassword = document.getElementById("new-password");
newPassword.textContent = ""

let clickBtn = document.getElementById("click-btn");
clickBtn.addEventListener("click", function() {
    getPassword();
})

function getPassword() {
    newPassword.textContent = "";
    for (let i = 0; i < 10; i++) {
        let randomChar = Math.floor(Math.random() * characters.length);
        newPassword.textContent += characters[randomChar];
    }
}

