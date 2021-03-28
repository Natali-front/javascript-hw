var a=[2,3,5];
var b=[2,3,5];
var c=[2,2,3,3,5,6]
var d=[1,2,3]
function checkArrays( arrA, arrB ){
    if(arrA.length !== arrB.length) return false;
    var cA = arrA.slice().sort().join(","); 
    var cB = arrB.slice().sort().join(",");

    return cA===cB;

}
console.log( checkArrays(a,b) );  
console.log( checkArrays(a,c) );  
console.log( checkArrays(a,d) );  