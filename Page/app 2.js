const texts = ["All the best for ur study, family, scout, church, and anything else. I hope this year you will be better in every way than before. I miss u so much actually but i know that u're really busy these days.. I just wanna say that you're so cool that you can make it this far. I feel happy and warm inside whenever I think of you and all the time we have spent together. I can't hide my smiles when you text and call me. (I wanna meet you or atleast we talk through Discord). I love that feeling i get when i see your smile. Keep the spirit, okay. Keep being Damai that i know. Rawrr"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === texts,length) {
    count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    
    document.querySelector(".typing").textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0
    }
    setTimeout(type, 50);
}());