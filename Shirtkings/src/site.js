
var i = 0 ;

$(document).ready(function(){
 

    slideshow();
 
    
});



function slideshow(){
    
    slideImage(i);
    var lastI = $(".slideshow li").length-1;

    if(i < lastI){i++;}
        else{i = 0;}
    function slideImage(){
        
        $(".slideshow li").hide();
        $(".slideshow li").eq(i).show();
    
}
setTimeout(slideshow, 7000);
}

