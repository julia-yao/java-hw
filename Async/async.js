const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    //console.log(request,request.readyState); //條件檢查顯示狀態4 和檢查端點狀態是 Successful responses 200
    if(request.readyState === 4 && request.status === 200){
        console.log(request, request.responseText); //印出json data的資料 
    } else if(request.readyState === 4) {  
        console.log( 'could not fetch the data');
    }
});
//設定請求
request.open('GET','https://jsonplaceholder.typicode.com/todoss/')
//發送請求
request.send();