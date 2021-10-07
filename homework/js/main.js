// array
var arr =[1,2,3,4,5,6,7,8,9]
var resArr = []
function countTwo (arr ,resArr) {
    for (var i = 0; i < arr.length; i++) {
        if(arr[i]%2 === 0){
            resArr.push(arr[i])
        }
        
    }
    return resArr
}
console.log(countTwo(arr,resArr))

// calculator

function calculator(firstElement,seccontElement,sign){
    if(sign === '+'){
        return firstElement+seccontElement
    }
    else if (sign === '-'){
        return firstElement-seccontElement
    }
    else if(sign === '*'){
        return firstElement*seccontElement
    }
    else if (sign === '/'){
        return firstElement/seccontElement
    }
    else{
        return undefined
    }
}

console.log(calculator(5,6,'*'))