   const myArr = [];
   for (let i = 0; i <= 9; i++) {
   myArr.push(Math.round(Math.random() * 100) + 1);
   }
   console.log(myArr);
   let result = myArr.reduce((sum, current) => sum + current, 0);
   console.log(result);
   let myNewArr = myArr.map(element => element**2);
   console.log(myNewArr);
   let evenArr = myNewArr.filter((element) => (element % 2 === 0 ));
   console.log(evenArr);
   let newEvenArr = evenArr.map(element => Math.sqrt(element));
   console.log (newEvenArr);
   console.log(newEvenArr.sort((a, b) => b - a));


