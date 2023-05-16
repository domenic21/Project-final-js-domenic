// manipulacion DOM y style de la pagina 


//manipulacion de scroll behavior en el top del html
window.onscroll = function(){
    let pos=document.documentElement.scrollTop;
    let calHeight = document.documentElement.scrollHeight - 
    document.documentElement.clientHeight;
    let scroll = (pos * 100) /calHeight;
    document.getElementById("progress").style.width = `${scroll}%`;
// to top btn
let scrollTopBtn= document.getElementById("scroll-top-btn");
if (pos > 300){
    scrollTopBtn.style.display = "grid";
}else{
    scrollTopBtn.style.display = "none";
}
 scrollTopBtn.addEventListener("click", ()=>{
    document.documentElement.scrollTop = 0;
 })
};