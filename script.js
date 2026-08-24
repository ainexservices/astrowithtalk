document.addEventListener("DOMContentLoaded",function(){
const year=document.getElementById("year");
if(year) year.textContent=new Date().getFullYear();

document.querySelectorAll("a").forEach(function(link){
link.addEventListener("click",function(){
this.style.opacity=".82";
setTimeout(()=>this.style.opacity="",140);
});
});
});