import { navbar, sidebar } from "../components/navbar.js";
let n = document.getElementById('navbar');




n.innerHTML = navbar();

let b = document.getElementById('box1');
b.innerHTML = sidebar();

let arr = JSON.parse(localStorage.getItem('user_data')) || []

document.getElementById('login').addEventListener('click', function () {
    loginFun();
})

let loginFun = () => {

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    valideUser(arr, email, password)



};


let valideUser = (arr, email, password) => {
    let count = 0;
    console.log(arr.length)
    

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
        if (arr[i].email === email && arr[i].password === password) {
            console.log(arr[i].email, arr[i].password, email, password)
            alert('Login Sucessfully');
            count++;
            break;
        }
    }
    if(arr.length==0){
        alert("Please Signup First")
    }
    else if (count == 0) {
        alert("login Fail")
    }

}
