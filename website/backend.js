numbers = false;
symbols = false;

function characterValue(){

    var val = document.getElementById("Characters").value;
    document.getElementsByClassName("Characters-value")[0].innerHTML = val;
    generatePassword()

}

function checkChange(type){

    if (type === "numbers"){
        numbers = !numbers;
    }
    else{
        symbols = !symbols;
    }
    generatePassword()
}

function generatePassword(){

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const nums = "0123456789";
    const syms = "!@#$%^&*()+=.?/<>][{}";
    var val = document.getElementById("Characters").value;

    let use = chars;
    if (numbers) use+= nums;
    if (symbols) use+= syms;

    let output = "";
    for (let i = 0; i < val; i++) {
        output += use[Math.floor(Math.random() * use.length)];
    }
    
    document.getElementsByClassName("generated-password")[0].innerHTML = output;

}

function copy() {
    const text = document.getElementsByClassName("generated-password")[0].innerHTML;
    navigator.clipboard.writeText(text);
}
