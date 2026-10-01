const data=[
{id:1,title:"Gaura-Nitai in Festive Purple",tag:"A little piece of Mayapur",price:4999,img:"assets/gaura-nitai-purple.jpg",type:"deities"},
{id:2,title:"Narasimha Brass Deity",tag:"Crafted with care and devotion",price:3999,img:"assets/narsimha-brass.jpg",type:"deities"},
{id:3,title:"Gaura-Nitai Blue Collection",tag:"Traditional beauty from Mayapur",price:4499,img:"assets/gaura-nitai-blue.jpg",type:"deities"},
{id:4,title:"Gaura-Nitai Yellow Collection",tag:"From Mayapur to your home",price:4499,img:"assets/gaura-nitai-yellow.jpg",type:"deities"},
{id:5,title:"Gaura-Nitai Deity Set",tag:"Handcrafted for your devotional space",price:4999,img:"assets/gaura-nitai-set.jpg",type:"deities"},
{id:6,title:"Festive Deity Dress",tag:"Detailed devotional attire",price:1499,img:"assets/gaura-nitai-purple.jpg",type:"dresses"}
];
let cart=JSON.parse(localStorage.getItem("mhs")||"[]");const money=n=>"₹"+n.toLocaleString("en-IN");
function posts(){document.querySelector("#posts").innerHTML=data.slice(0,6).map(p=>`<article class="post"><div class="post-media"><img src="${p.img}" alt="${p.title}"><div class="post-meta"><span>@mayapurpoojabox</span><span>♡</span></div></div><div class="post-info"><h3>${p.title}</h3><p>“${p.tag}.”</p><div class="post-bottom"><b>${money(p.price)}</b><a href="#shop">View product →</a></div></div></article>`).join("")}
function products(f="all"){document.querySelector("#products").innerHTML=data.filter(p=>f==="all"||p.type===f).map(p=>`<article class="product"><div class="product-media"><img src="${p.img}" alt="${p.title}"><button onclick="add(${p.id})">+</button></div><h3>${p.title}</h3><p>${p.tag}</p><p class="price">${money(p.price)}</p></article>`).join("")}
function add(id){cart.push(data.find(p=>p.id===id));localStorage.setItem("mhs",JSON.stringify(cart));renderCart();openCart()}
function remove(i){cart.splice(i,1);localStorage.setItem("mhs",JSON.stringify(cart));renderCart()}
function renderCart(){document.querySelector("#count").textContent=cart.length;document.querySelector("#items").innerHTML=cart.length?cart.map((p,i)=>`<div class="cartline"><img src="${p.img}"><div><strong>${p.title}</strong><small>${money(p.price)}</small></div><button onclick="remove(${i})">×</button></div>`).join(""):"<p style='color:#77685e'>Your bag is empty.</p>";let t=cart.reduce((s,p)=>s+p.price,0);document.querySelector("#total").textContent=money(t);document.querySelector("#order").href="https://wa.me/919547231074?text="+encodeURIComponent("Hare Krishna! I would like to enquire about: "+cart.map(p=>p.title).join(", ")+". Please share availability and shipping details.")}
function openCart(){cartEl.classList.add("open");overlay.classList.add("show")}function closeCart(){cartEl.classList.remove("open");overlay.classList.remove("show")}
const cartEl=document.querySelector("#cart"),overlay=document.querySelector("#overlay");
document.querySelectorAll(".filters button").forEach(b=>b.onclick=()=>{document.querySelectorAll(".filters button").forEach(x=>x.classList.remove("active"));b.classList.add("active");products(b.dataset.f)});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");io.unobserve(e.target)}}),{threshold:.1});document.querySelectorAll(".reveal").forEach(x=>io.observe(x));
window.addEventListener("pointermove",e=>{const c=document.querySelector(".cursor");c.style.left=e.clientX+"px";c.style.top=e.clientY+"px"},{passive:true});
posts();products();renderCart();
document.querySelectorAll("video").forEach(v=>v.addEventListener("error",()=>v.closest(".video-frame").classList.add("video-missing")));
