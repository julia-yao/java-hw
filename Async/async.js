const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {

        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText);
            callback( undefined, data );
        } else if(request.readyState === 4) {  
            callback('could not fetch data', undefined);
        }
    });

    //設定請求
    request.open('GET',resource );
    request.send();
}

//用callback 傳入函數
getTodos('todos/luigi.json', (err,data)=>{
    console.log(data);
    getTodos('todos/mario.json', (err,data)=>{
        console.log(data);
        
    });
});
