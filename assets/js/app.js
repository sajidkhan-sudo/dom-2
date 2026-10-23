const cl = console.log;

let getId = document.getElementById("info");

let classNames = getId.className;
cl(classNames, typeof classNames);


getId.className = "demo1 demo2";

cl(getId , typeof getId);

let username = document.getElementById("username");
let userval = username.value;
cl(userval);

username.value = "beingsajidkhan";



// write css in js >>>>>>>>>>>>

username.style.backgroundColor = "#34495e";
username.style.color = "#e4f1fe";
username.style.padding = "20px";
username.style.borderRadius = "8px";

getId.style.backgroundColor = "#45171d"
getId.style.color = 'white'
getId.style.borderRadius = "9px red"
getId.style.height = "10%"
getId.style.padding = "10px"



// Attributes >>>>>>>>>

let imginfo = document.getElementById("imginfo")

let getAttr = imginfo.getAttribute('src');

// to SetAttributes >>>>>>>>>>>

let newimg = `https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D`;

imginfo.setAttribute("src", newimg)
imginfo.setAttribute('title', 'Porsche')


