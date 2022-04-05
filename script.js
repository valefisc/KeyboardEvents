
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const ol = document.querySelector('ol');

let secretKey = letters[Math.floor(Math.random() * 26)];
console.log("Secret key = " + secretKey);

document.body.addEventListener('keyup', function (event){
    let chosenKey = event.key;
    console.log(chosenKey);
   
    if (chosenKey === secretKey){
        const h3 = document.createElement('h3');
        h3.textContent = "SECRET KEY PRESSED " + secretKey;
        ol.appendChild(h3);
        secretKey = letters[Math.floor(Math.random() * 26)];
        console.log("Secret key = " + secretKey);
    }
})

