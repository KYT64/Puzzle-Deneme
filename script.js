const app=document.getElementById('app');
let step=0;
const screens=[
{t:'Merhaba ✨',b:'Bu sayfaya kadar geldiysen, merak duygun hâlâ kaybolmamış demektir.<br><br>Sana sadece birkaç küçük soru soracağım.',btn:'Başla'},
{t:'❤️ 1. Bulmaca',q:'Ne satın alınırım...<br>Ne zorla kazanılırım...<br>Ama bana zaman verirsen kendiliğimden gelirim.<br><br><b>Ben neyim?</b>',a:['güven']},
{t:'☁️ 2. Bulmaca',q:'İki insanın gerçekten yakınlaşması için ortak ilgi alanlarından daha önemli tek şey nedir?',a:['samimiyet','güven','iletişim','dürüstlük']},
{t:'🏍️',b:'En güzel yol,<br>haritada çizilen değil,<br>birlikte keşfedilen yoldur.',btn:'Devam'},
{t:'☕',b:'Tebrikler.<br><br>Aslında bütün bu sayfanın amacı seni biraz daha yakından tanımak istememdi.<br><br><button onclick="finish()">☕ Bir kahve içer miyiz?</button>'}
];
function render(){
const s=screens[step];
if(s.a){
app.innerHTML=`<h1>${s.t}</h1><p>${s.q}</p><input id=i placeholder='Cevabın'><br><br><button onclick='check()'>Devam</button>`;
}else{
app.innerHTML=`<h1>${s.t}</h1><p>${s.b}</p>${s.btn?'<button id=n>'+s.btn+'</button>':''}`;
const n=document.getElementById('n');
if(n)n.onclick=()=>{step++;render();}
}
}
window.check=()=>{
let v=document.getElementById('i').value.trim().toLowerCase();
if(screens[step].a.includes(v)){step++;render();}
else alert('Çok yakınsın 😊');
}
window.finish=()=>{
app.innerHTML='<h1>❤️</h1><p><b>Söz...</b><br>Kahve güzel olmazsa ikinciyi ben ısmarlarım.<br><br>PS: Bu sayfayı hazırlayan kişinin senden hoşlanma ihtimali %99.8 🤭</p>';
}
document.getElementById('next').onclick=()=>{step=1;render();}
