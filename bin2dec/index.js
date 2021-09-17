let binaryInput = document.querySelector("#binInput");
let decimal = document.querySelector(".output");
let button = document.querySelector("button");

button.addEventListener('click', binToDec);

function binToDec(){
  let userInput = binaryInput.value;
  if (userInput === '') {
    decimal.textContent = 'Input field cant be empty';
  }

  for(i=0;i<userInput.length;i++) {
    if (userInput[i] > 1 || isNaN(userInput[i])) {
      decimal.textContent = 'Values other than 0 or 1 have been entered';
    } else if (userInput.length <= 8) {
      let text = 'Decimal equivalent of ' + userInput + ' is: ';
      decimal.textContent = text + parseInt(userInput, 2);
    } else {
      decimal.textContent = 'Enter binary number not more than eight digits';
    }
    binaryInput.value = '';
  }
}

