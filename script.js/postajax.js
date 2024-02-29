let ajax = new XMLHttpRequest();



let data = {
    username : 'parsa majd',
    email : 'parsa.majd2002@gmail.com',
}

ajax.open('POST' , 'https://jsonplaceholder.typicode.com/users')
ajax.setRequestHeader('Content-type' , "application/json; charset=UTF-8")

ajax.addEventListener('load' , function() {
    if (this.readyState == XMLHttpRequest.DONE){
        if(this.status == 201){
            console.log('done');
            let data = JSON.parse(this.responseText);
            console.log(data);
        } else {
            console.log(this.status)
        }
    }
})

ajax.send(JSON.stringify(data))