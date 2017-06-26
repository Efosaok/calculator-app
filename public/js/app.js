window.onload = ()=>{
let body = document.getElementById("body")
let output = document.getElementById("output");
let buttonOne = document.getElementById("one");
let buttonTwo = document.getElementById("two");
let buttonThree = document.getElementById("three");
let buttonFour = document.getElementById("four");
let buttonFive = document.getElementById("five");
let buttonSix = document.getElementById("six");
let buttonSeven = document.getElementById("seven");
let buttonEight = document.getElementById("eight");
let buttonNine = document.getElementById("nine");
let buttonZero = document.getElementById("zero")
let buttonDot = document.getElementById("dot");
let buttonDivide = document.getElementById("divide");
let buttonMultiply = document.getElementById("multiply");
let buttonAdd = document.getElementById("add");
let buttonSubtract = document.getElementById("subtract");
let buttonClear = document.getElementById("clear");
let buttonDelete = document.getElementById("delete");
let buttonPercent = document.getElementById("percent");
let buttonShift = document.getElementById("shift");
let buttonEqual = document.getElementById("equal");

let deleted = false;
let checkLengthOfOutput = 0;
let checkNumberOfOperators = 0;
let a = "";
let b = "";
let c = "";

const calculate = (a,b,c)=>{
  let digit = [parseFloat(a),parseFloat(b)];
  result = 0

  if (c === "*"){
    result += digit[0] * digit[1]
  }
  else if (c === "+"){
    result += digit[0] + digit[1]
  }
  else if (c === "-"){
    result += digit[0] - digit[1]
  }
  else{
    result += digit[0] / digit[1]
  }
  if(result === 'NaN'){
    return "error"
  }else{
    return result
  }
}

let operator = ""

let numberButtons = [buttonZero,buttonOne,buttonTwo,buttonThree,buttonFour,buttonFive,buttonSix,buttonSeven,buttonEight,buttonNine,buttonDot]
numberButtons.forEach((button)=>{
	button.addEventListener("click",()=>{

	if (checkLengthOfOutput >= 13){
	alert("maximum input reached")
	}else{
	if (deleted === false){
		output.innerHTML = button.value
		deleted = true
		checkLengthOfOutput++
	}
	else{
		output.innerHTML += button.value
		checkLengthOfOutput++
		}
	}
	})
})

let operatorButtons = [buttonMultiply,buttonDivide,buttonAdd,buttonSubtract]
operatorButtons.forEach((opbutton)=>{
	opbutton.addEventListener("click",()=>{
	if (checkLengthOfOutput >= 13){
	alert("maximum input reached")
	output.innerHTML = output.innerHTML.slice(0,12)
	checkLengthOfOutput = 13
		}
		else{
			if (deleted === false){
				output.innerHTML = opbutton.value
				deleted = true
				checkLengthOfOutput++
			}
			else if(checkNumberOfOperators === 1){
				a = output.innerHTML.slice(0,output.innerHTML.indexOf(operator))
				c = operator
				b = output.innerHTML.slice(output.innerHTML.indexOf(operator)+1)
				output.innerHTML = "" + calculate(a,b,c) + opbutton.value
				operator = opbutton.value
			}else{
				checkNumberOfOperators++
				checkLengthOfOutput++
				output.innerHTML += opbutton.value
				operator = opbutton.value
				}
			}
	})
})

buttonPercent.addEventListener("click",()=>{
	if (checkLengthOfOutput >= 13){
		output.innerHTML = output.innerHTML.slice(0,12)
		alert("maximum result to be shown has reached")
		checkLengthOfOutput = 13
	}else{
	if(output.innerHTML.length > 0){
		output.innerHTML = "" + (parseFloat(output.innerHTML)/100)
		checkLengthOfOutput = output.innerHTML.length
	}else{
		output.innerHTML = "type digit first"
		deleted = false
	}
	}
})

buttonEqual.addEventListener("click",()=>{
	if (checkLengthOfOutput >= 13){
		output.innerHTML = output.innerHTML.slice(0,12)
		alert("maximum result to be shown reached")
		checkLengthOfOutput = 13
	}else{
		a = output.innerHTML.slice(0,output.innerHTML.indexOf(operator))
		c = operator
		b = output.innerHTML.slice(output.innerHTML.indexOf(operator)+1)
		checkLengthOfOutput = output.innerHTML.length
		output.innerHTML = "" + calculate(a,b,c)
		checkNumberOfOperators = 0
		}
})

buttonDelete.addEventListener("click",()=>{
	if(output.innerHTML.length > 1){
		output.innerHTML = output.innerHTML.slice(0,output.innerHTML.length -1)
		checkLengthOfOutput -= 1
	}else{
		output.innerHTML = "0"
		deleted = false
		checkLengthOfOutput = 0
	}
})

buttonClear.addEventListener("click",()=>{
	output.innerHTML = "0"
	checkLengthOfOutput = 0
	checkNumberOfOperators = 0
	deleted = false
	a = ""
	b = ""
	c = ""
})


}


