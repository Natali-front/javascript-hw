var arr = []
	while(arr.length < 100){
    var randomNumber = Math.floor(Math.random()*100) + 1;
    if(arr.indexOf(randomNumber) > -1) continue;
    arr[arr.length] = randomNumber;
}
console.log(arr); 
