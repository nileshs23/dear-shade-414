function User_data(n, e, t, d) {
    this.name = n;
    this.email = e;
    this.time = t;
    this.date = d;

}
let data = JSON.parse(localStorage.getItem('user_data')) || []
console.log(data)
for (let i = 0; i < data.length; i++) {
    let x = document.getElementById('h1')
    x = data[data.length - 1].name;
    console.log(x)
    document.getElementById('h1').innerHTML = x;
}
let user = JSON.parse(localStorage.getItem('updatedata')) || [];
function update_user() {

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let time = document.getElementById('time').value;
    let date = document.getElementById('date').value
    let u1 = new User_data(name, email, time, date)
    // console.log(u1)
    user.push(u1);
    localStorage.setItem('updatedata', JSON.stringify(user));
    document.getElementById('h1').innerHTML = name;
    document.getElementById('name').value = null;
    document.getElementById('email').value = null;
    document.getElementById('time').value = null;
    document.getElementById('date').value = null;

    alert("Successfully Updated !.")

}
function Image(img) {
    this.image = img;
}
let get_img = [];

let chaneImage = () => {
    
    let img = document.getElementById('fileimg').value;
   get_img.push(img)
    let div=document.getElementById('div');
    let v=document.createElement('img');
    v.src=img;
div.append(v)
   let ss=document.getElementById('imguri1');
  ss.append(div);
}