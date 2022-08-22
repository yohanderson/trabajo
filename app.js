var teclas = {
    UP: 38,
    DOWN: 40
};
var typingEffect = new Typed(".multiText",{
    strings : ["coder","youtuber","designer"],
    loop : true,
    typeSpeed : 100,
    backSpeed : 60,
    backDelay : 1500
});

const section = new fullpage('#sections',{
    
});

document.addEventListener("keydown", changeSection);

function changeSection(){

    switch(evento.keyCode)  
    {
        case teclas.UP:
            console.log();
            break;
        case teclas.DOWN:
            console.log();
            break; 
    }

};