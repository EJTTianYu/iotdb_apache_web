function daohang(e) {
    chapter=e.className;
    section=e.innerText;
    x=document.getElementById("bread_chapter");
    x.innerHTML="<li><a href='#'>"+chapter+"</a></li>"+"<li><a>"+section+"</a></li>"
}