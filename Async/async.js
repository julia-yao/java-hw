const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    //console.log(request,request.readyState); //顯示狀態4 
    if(request.readyState === 4){
        console.log(request.responseText); //印出json data的資料 
    }
})

//設定請求
request.open('GET','https://jsonplaceholder.typicode.com/todos/')
//發送請求
request.send();