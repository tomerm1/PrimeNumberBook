const bookDiv = document.getElementById("book");

const inputDiv =  document.getElementById("inputDiv");

const bookSubDiv =  document.getElementById("PN");

const bookTitleDiv =  document.getElementById("TitlePN");

const arrayOfFonts = ["72px","72px","52px","32px","30px"];

let valueOfInput,isPrime = true;

let lastInputValue = "2";
bookDiv.classList.add("hoverr");
setTimeout(function() {
    bookDiv.classList.remove("toggler");
    setTimeout(function() {
        bookDiv.classList.remove("hoverr");
        bookDiv.style.transition = "0.5s";
    }, 850);
    
}, 1000);


function count_digits(n)
{
    // converting number to string using
    // to_string in javascript

    let num = n.toString();

    // calculate the size of string
    return num.length
}
function onlyNumbers(str) {
    return /^[0-9]+$/.test(str);
    
}


function checkPrime(num)
{
    if (num % 2 == 0 && num !== 2)
        return false
    for(let i = 3, s = Math.sqrt(num); i <= s; i+= 2)
            if(num  % i === 0) return false; 
    return num  > 1;
}

function PrimeNumber()
{
    valueOfInput = parseInt(inputDiv.value);
    if (onlyNumbers(inputDiv.value) && inputDiv.value.length <= 5 && !(inputDiv.value.length > 1 && valueOfInput <= 0))
    {
        isPrime = checkPrime(valueOfInput);
        lastInputValue = valueOfInput;
        
    }
    else if ( (inputDiv.value !== "" && !onlyNumbers(inputDiv.value)) || inputDiv.value.length > 5)
        inputDiv.value = lastInputValue;
    else if (inputDiv.value.length > 1 && valueOfInput <= 0)
        inputDiv.value = lastInputValue;
    if (isPrime)
    {
        
        inputDiv.style.fontSize = arrayOfFonts[count_digits(valueOfInput) -1]
        bookTitleDiv.innerText = "Is A";
        bookSubDiv.style.fontSize = "0.6em";
        bookSubDiv.innerText = "Prime Number";
        inputDiv.style.boxShadow = "inset 10px 0 30px rgb(76, 216, 58)";

    }
    else
    {
        inputDiv.style.fontSize = arrayOfFonts[count_digits(valueOfInput) -1]
        bookTitleDiv.innerText = "Is Not";
        bookSubDiv.style.fontSize = "0.56em";
        bookSubDiv.innerText = "A Prime Number";
        inputDiv.style.boxShadow = "inset 10px 0 30px rgb(238, 0, 0)"

    }
    if(inputDiv.value === "" || !onlyNumbers(inputDiv.value))
    {
        inputDiv.value = "";
        bookTitleDiv.innerText = "Is Not";
        bookSubDiv.style.fontSize = "0.56em";
        bookSubDiv.innerText = "A Number";
        inputDiv.style.boxShadow = "inset 10px 0 30px rgb(238, 0, 0)"
    }
        
    
}

inputDiv.addEventListener("input",PrimeNumber);
inputDiv.addEventListener("click",() => {
    inputDiv.value = "";
    bookTitleDiv.innerText = "Is Not";
    bookSubDiv.style.fontSize = "0.56em";
    bookSubDiv.innerText = "A Number";
    inputDiv.style.boxShadow = "inset 10px 0 30px rgb(238, 0, 0)"
    inputDiv.onblur = function() {
        inputDiv.value =  lastInputValue;
        PrimeNumber()
    }
});
        
        
        
        