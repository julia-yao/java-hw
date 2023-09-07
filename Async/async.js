const getTodos = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        //console.log(request,request.readyState); //條件檢查顯示狀態4 和檢查端點狀態是 Successful responses 200
        if(request.readyState === 4 && request.status === 200){
            callback( undefined, request.responseText);
        } else if(request.readyState === 4) {  
            callback('could not fetch data', undefined);
        }
    });

    //設定請求
    request.open('GET','https://jsonplaceholder.typicode.com/todos/');
    request.send();
}

console.log(1);
console.log(2);
 
//用callback 傳入函數
getTodos((err,data)=>{
    console.log('callback fired');
    if(err){
        console.log(err);
    } else {
        console.log(data);
    }
});

console.log(3);
console.log(4);