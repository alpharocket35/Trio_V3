const body=document.body;
const theme=document.getElementById("theme");
const saved=localStorage.getItem("triomegia-theme");
if(saved==="dark") body.classList.add("dark");
function icon(){theme.textContent=body.classList.contains("dark")?"☾":"☀";}
icon();
theme.addEventListener("click",()=>{body.classList.toggle("dark");localStorage.setItem("triomegia-theme",body.classList.contains("dark")?"dark":"light");icon();});
const menu=document.querySelector(".menu"), nav=document.querySelector(".nav");
menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",open);});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(e=>io.observe(e));
const form=document.getElementById("form"), email=document.getElementById("email"), status=document.getElementById("status");
form.addEventListener("submit",e=>{
  e.preventDefault();
  status.textContent="Nous sommes désolés mais cette fonctionnalité n'est pas disponible pour l'instant. A.A.N";
});
document.getElementById("year").textContent=new Date().getFullYear();
const progress=document.querySelector(".progress");
addEventListener("scroll",()=>{const h=document.documentElement;progress.style.width=(scrollY/(h.scrollHeight-innerHeight)*100)+"%";},{passive:true});
