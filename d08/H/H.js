

document.getElementById('learn-more').addEventListener("click",function(){
    let overlay = document.getElementById('banner-overlay');
    if(overlay){
        overlay.remove();
    }
    let titleNode = document.getElementById('title');
    titleNode.innerHTML = "welcome to my flower shop"
    titleNode.style.backgroundColor = 'blue';
    this.innerHTML = "buy flowers";
    this.style.backgroundColor = 'red';
});

let icons = document.getElementsByClassName('icon-imgs');

for(let icon of icons){
    icon.addEventListener('mouseenter',function(){
        this.style.height = "156px";
        this.style.width  = "156px";
    });
    icon.addEventListener('mouseleave',function(){
        this.style.height = "112px";
        this.style.width  = "112px";
    });
}