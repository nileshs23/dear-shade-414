function User_data(n, e, t, d) {
    this.name = n;
    this.email = e;
    this.time = t;
    this.date = d;

}
let data = JSON.parse(localStorage.getItem('user_data')) || []

for (let i = 0; i < data.length; i++) {
    let x = document.getElementById('name')
    x = data[data.length - 1].name;
    document.getElementById('name').innerHTML = x;
}
let user = JSON.parse(localStorage.getItem('updatedata')) || [];
function update_user() {

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let time = document.getElementById('time').value;
    let date = document.getElementById('date').value
    let u1 = new User_data(name, email, time, date)
    console.log(u1)
    user.push(u1);
    localStorage.setItem('updatedata', JSON.stringify(user));
    document.getElementById('name').value = null;
    document.getElementById('email').value = null;
    document.getElementById('time').value = null;
    document.getElementById('date').value = null;

    alert("scuessfull Updated !.")

}
function Image(img) {
    this.image = img;
}
let get_img = [];

let chaneImage = () => {
    let img = document.getElementById('fileimg').value;
    let p = new Image(img)
    get_img.push(p);
    let x = localStorage.setItem('newimage', JSON.stringify(get_img));
}
let a = JSON.parse(localStorage.getItem("newimage")) || [];
let img = document.createElement('img');
img.src = (a[0].image)


document.getElementById('imgurl').append(img)