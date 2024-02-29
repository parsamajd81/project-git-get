'use strict'
let ajax = new XMLHttpRequest();


ajax.open('GET' , 'https://jsonplaceholder.typicode.com/users1')


ajax.onreadystatechange = function() {
    if (this.readyState== XMLHttpRequest.DONE) { 
        if(this.status ==200) { 
            console.log('done' , this.responseText)
       } else if (this.status ==404) {
        console.log('users not found') 
    }
    }
}

ajax.send();



// let name = ""
//  let userss = ['ali' , 'hsan' , 'reza' , 'parsa']

//     for (let i = 0; i < userss.length; i++) {
        
//         name += `<p>${userss[i]}</p>`
        
//     }

//    document.getElementById('container') 
//    .innerHTML = name




//Get دریافت کردن
//Post ارسال کردن