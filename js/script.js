function	evenNumber(a) {
	if (a % 2 == 0) {
		return true

	} else {
		return false
	}
}
console.log(evenNumber(6));


function	rectangle(a, b) {
	return a * b
}
let	rectArea = rectangle(3, 7);
console.log(rectArea);

function	square(a) {
	return a ** 2
}
let	squareArea = square(5);
console.log(squareArea);


let	random = Math.random();
function randomNumbers(){
	random
	return	Math.round(random * 100);
}
console.log(randomNumbers());

const	userArr = [
	{
		name: "giorgi",
		age: 26,
	},
	{
		name: "nino",
		age: 22,
	},
	{
		name: "ani",
		age: 27,
	},
	{
		name: "dato",
		age: 31,
	},
	{
		name: "gia",
		age: 21,
	}
];

let minAge = Math.min(...userArr.map(userArr => userArr.age));
let youngestUser = userArr.filter(userArr => userArr.age == minAge);
console.log(youngestUser);

function getCurrencySymbolFromCode(code){
	if (code == "USD") {
		return  "$";
	} else if (code == "GEL") {
		return "ლ";
	} else if (code == "EUR") {
		return "€";
	} else {
		return  "invalid currency";
	}
};
console.log(getCurrencySymbolFromCode("EUR"))