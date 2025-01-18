function fibonacciMemo(n){
    if (n<=0)return[];
    if (n===1)return[0];
    if (n===2)return[1]; 
    
    let seq=[0,1];
    for (let i=2;i<n;i++){
        seq.push(seq[i-1]+seq[i-2]);
    }

    return seq;
}

console.log(fibonacciIterative(10)); 