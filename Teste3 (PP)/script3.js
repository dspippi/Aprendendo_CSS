
document.addEventListener('scroll',function(){
    let s = window.scrollY;
    let opacityVal = (s/750.0);
    //console.log(s)
    this.querySelector(".blurred").style.opacity=opacityVal;
})