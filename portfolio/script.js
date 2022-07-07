 
 
let theme= localStorage.getItem('theme')
if(theme==null)
{
    setTheme('light')

}

else{
    setTheme(theme)

}

 let themeDOts = document.getElementsByClassName("theme-dot")
 for(var i=0; themeDOts.length>i;i++){
themeDOts[i].addEventListener('click',function() {
   let mode =this.dataset.mode
    console.log('option click: ',mode)
     
    setTheme(mode)

})
 }




function setTheme(mode){
if (mode=='light'){
    document.getElementById('theme-style').href='default.css'
}
if (mode=='blue'){
    document.getElementById('theme-style').href='blue.css'
}
if (mode=='green'){
    document.getElementById('theme-style').href='green.css'
}
if (mode=='purple'){
    document.getElementById('theme-style').href='purple.css'
}

localStorage.setItem('theme',mode )
}
 
$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    })
    });


    var typed = new Typed(".typing", {
        strings: ["Developer", "Programmer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    