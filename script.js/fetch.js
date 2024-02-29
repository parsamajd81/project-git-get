


function apigetrepos(username) {
    // let username = `parsamajd81`

fetch(`https://api.github.com/users/${username}/repos`)
.then(Response => Response.json())
.then(data => {
    console.log(data )
    display(data)
})
.catch(err => {
    console.log('کاربری یافت نشد' , err)
})}




function apisubmit() {
    let username1 = document.getElementById("username") 
    .value
    console.log(username1)
    apigetrepos(username1)
}




function display(list) {

    let data = ""
    

    for (let i = 0; i < list.length; i++) {
        data += `<p>${list[i].id}</p>`
        data += `<p>${list[i].name}</p>`
    }
   console.log("display" , data)
   document.getElementById('container') 
   .innerHTML = data
    
}



 