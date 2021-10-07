// array
var arr =[1,2,3,4,5,6,7,8,9];
var resArr = [];
function countTwo (arr ,resArr) {
    for (var i = 0; i < arr.length; i++) {
        if(arr[i]%2 === 0){
            resArr.push(arr[i]);
        }
        
    }
    return resArr;
}

// array find
function findElement (array, element){
    for (var i = 0; i < arr.length; i++) {
        if(array[i]===element){
            return element;
        }
    }
}

function findElementResult(result){
    if(result === undefined){
        return "bele element yoxdur"
    }
    else{
        return result;
    }
}

console.log(findElementResult(findElement(arr,5))); 

// calculator

function calculator(firstElement,seccontElement,operator){
    if(operator === '+'){
        return firstElement+seccontElement;
    }
    else if (operator === '-'){
        return firstElement-seccontElement;
    }
    else if(operator === '*'){
        return firstElement*seccontElement;
    }
    else if (operator === '/'){
        return firstElement/seccontElement;
    }
    else{
        return undefined;
    }
}

console.log(calculator(5,6,'+'));