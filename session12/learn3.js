function sumNumber() {
	var number1 , number2;
	number1 = document.getElementById('number1').value;
	number2 = document.getElementById('number2').value;
	if (number1 == ' '){
		document.getElementById('result').innerHTML= "vui lòng điền số đầy đủ";
	}
	if (number2 == ' '){
	document.getElementById('result').innerHTML= "vui lòng điền số đầy đủ";
	}
	document.getElementById('result').innerHTML = parseInt(number1) + parseInt(number2);	
}
function subNumber() {
	var number1 , number2;
	number1 = document.getElementById('number1').value;
	number2 = document.getElementById('number2').value;
	var sub = parseInt(number1) - parseInt(number2);
	document.getElementById('resultSub1').innerHTML = sub;
}
function multiNumber() {
	var number1 , number2;
	number1 = document.getElementById('number1').value;
	number2 = document.getElementById('number2').value;
	document.getElementById('result2').innerHTML = parseInt(number1) * parseInt(number2);	
}
function diviNumber() {
	var number1 , number2;
	number1 = document.getElementById('number1').value;
	number2 = document.getElementById('number2').value;
	document.getElementById('result3').innerHTML = parseInt(number1) / parseInt(number2);	
}