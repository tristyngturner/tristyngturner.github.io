
const input = $('#input'), // input/output button
  numbers = $('.numbers div'), // number buttons
  operators = $('.operators div'), // operator buttons
  result = $('#result'), // equal button
  clear = $('#clear'); // clear button

let resultDisplayed = false; // flag to keep an eye on what output is displayed

  let numArray = [];
  let opsArray = [];

numbers.click((event) => {
  let number = event.target.innerHTML;
  if(number == 'C' || number == '.') {
    return;
  }
  
  numArray.push(number)
  newArray = numArray.join("");
  console.log(newArray);
  // console.log(numArray);
  // input.append(numArray.join(""));
  calcScreen(newArray);
});
//juan used arrow function which means you have to pass in the event for the parament and use event.target.innerhtml
 
operators.click((event) => {
  opsArray.push(event.target.innerHTML)
  console.log(opsArray)
  //This is my way, Juans is above
  // if(opsArray == 0) {
  //   opsArray.push(this.innerHTML);
  //   console.log(opsArray)
  //   calcScreen(opsArray);
  // } else {
  //   alert("You can only choose one operation! Next number please")
  // }
});

clear.click(() => {
  numArray = [];
  opsArray = [];
  console.log(numArray);
  console.log(opsArray);
})

result.click(() => {
  let operationResult = 0;

  numArray.forEach((current, index) => {
    if(opsArray[index] != 'undefinded') {
console.log()
    }
  })
})

function calcScreen(text) {
  $("#input").append(text);
}


  