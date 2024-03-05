function generateRandomNum(n){
    let arr = new Array(n);
    for(let i=0; i<n; i++) {
        arr[i] = Math.floor(Math.random()*10);
    }
    return arr;
}

function sumArr(arr){
    let sum = 0;
    for(let i of arr){
        sum+=i
    }
    return sum;
}

export {generateRandomNum, sumArr}