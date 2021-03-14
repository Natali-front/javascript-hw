let arr = [10, 20, 30, 50, 235, 3000];
	console.log(arr.filter(num => ['1', '2', '5'].includes(num.toString()[0])));