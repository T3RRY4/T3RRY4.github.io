function show (tutorial) {
	var elem = document.getElementById(tutorial);
	if ( elem )
		elem.style.display = "block";
}

/*function check() {
	if ( calc.answer.value == "4" )
		alert ("Правильно");
	else alert ("Неправильно");
}*/

function check() {
	var a,b,str1,str2;
	a = prompt("Введите любое число","");
	b = 2;
	str1 = "Число " + a + " - чётное";
	str2 = "Число " + a + " - нечётное";
	a%b==0 ? alert(str1) : alert(str2);
}

function msg() {
	var Firstname,str;
	Firstname=prompt("Как вас зовут?","");
	str="Очень приятно," + Firstname + "!";
	alert(str);
}

function writetext() {
	var text = "<h1>" + "Hello world" + "</h1>";
	document.write(text);
}

function registeralert() {
	alert ('Вы успешно зарегистрировались');
	location.href=("index.htm")
}

function test() {
	var a = 4;
	a++;
	alert(a);
}

function ifelse(){
	var a,b,c,end;
	a=850;
	b=851;
	if(a<b){
		c=a;
	}
	else{
		c=b;
	}
	end="Минимальное число - "+c;
	document.write(end);
}

function switchcase() {
	var 
	switch(3){
		case 1: 
	}
}