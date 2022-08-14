let allimg = document.querySelector('#all');
let appimg = document.querySelector('#app');
let cardimg = document.querySelector('#card');
let webimg = document.querySelector('#web');


var all = [
    {img:"./Image/Portfolie-img/1.jpg"},
    {img:"./Image/Portfolie-img/2.jpg"},
    {img:"./Image/Portfolie-img/3.jpg"},
    {img:"./Image/Portfolie-img/4.jpg"},
    {img:"./Image/Portfolie-img/5.jpg"},
    {img:"./Image/Portfolie-img/6.jpg"},
    {img:"./Image/Portfolie-img/7.jpg"},
    {img:"./Image/Portfolie-img/8.jpg"},
    {img:"./Image/Portfolie-img/9.jpg"}

];
var app = [
    {img:"./Image/Portfolie-img/1.jpg"},
    {img:"./Image/Portfolie-img/6.jpg"},
   {img:"./Image/Portfolie-img/2.jpg"},
   {img:"./Image/Portfolie-img/3.jpg"},
];
var card = [
    {img:"./Image/Portfolie-img/2.jpg"},
    {img:"./Image/Portfolie-img/6.jpg"},
    {img:"./Image/Portfolie-img/7.jpg"}

];
var web = [
    {img:"./Image/Portfolie-img/3.jpg"},
    {img:"./Image/Portfolie-img/5.jpg"},
];

function portfolie(work){
    var output = ''
    for (let i = 0; i< work.length; i++){
     output +=
     `<div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 mt-5">
     <div class="print-img">
     <img src = "${work[i]["img"]}" alt="" width="100%">
        </div> 
 </div>`;
document.querySelector("#portfolie-img").innerHTML = output
}};
portfolie(all)

allimg.addEventListener('click', () =>{
   portfolie(all)
  });
  appimg.addEventListener('click', () =>{
    portfolie(app)
   });
   webimg.addEventListener('click', () =>{
    portfolie(web)
   });
   cardimg.addEventListener('click', () =>{
    portfolie(card)
   });

  console.log("nav");