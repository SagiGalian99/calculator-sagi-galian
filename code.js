var expresion = "";
function addNumber(number){
    if (number == "c1") expresion = expresion.slice(0, -1);
    else if (number == "c"){
        document.getElementById("result").innerHTML = 0;
        expresion = "";
    } 
    else{
        expresion += number;
    }
    document.getElementById("show").innerHTML = expresion;
}

const numbers = ['1','2','3','4','5','6','7','8','9','0','.'];
function equal(){
    document.getElementById("show").innerHTML = "";

    currentPart = 1;
    numberOfcals = 0;
    var part1 = "";
    var cal = "";
    var part2 = "";

    for (let i = 0; i < expresion.length; i ++){
        if (expresion[i] in numbers){
            if (currentPart == 1) part1 += expresion[i];
            if (currentPart == 2) part2 += expresion[i]
        }
        if (expresion[i] == "x" || expresion[i] == "/" || expresion[i] == "+" || expresion[i] == "-"){
            cal = expresion[i];
            currentPart ++;
            numberOfcals ++;
        }
    }
    if(cal == "x"){
        document.getElementById("result").innerHTML = Number(part1) * Number(part2);
        document.getElementById("result").style.color = "black";
    }
    if(cal == "/"){
        document.getElementById("result").innerHTML = Number(part1) / Number(part2);
        document.getElementById("result").style.color = "black";
    }
    if(cal == "-"){
        document.getElementById("result").innerHTML = Number(part1) - Number(part2);
        document.getElementById("result").style.color = "black";
    }
    if(cal == "+"){
        document.getElementById("result").innerHTML = Number(part1) + Number(part2);
        document.getElementById("result").style.color = "black";
    }
    if (numberOfcals > 1){
        document.getElementById("result").innerHTML = "Too much calculation marks";
        document.getElementById("result").style.color = "red";
    } 

    expresion = "";
}