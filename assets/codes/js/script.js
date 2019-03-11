document.addEventListener('DOMContentLoaded', function () {
  (function(){
    const first = document.getElementById('first'), second = document.getElementById('second'), third = document.getElementById('third'), fourth = document.getElementById("fourth");


    function scrollMagic(element, property, value){
       if (document.documentElement.scrollTop >= element.offsetTop-window.outerHeight/1.7){
        console.log(window.outerHeight/1.5);
        $(element).css("opacity", '1');
  
        $(element).css(property, value||'0px');
      
      }else{
        $(element).css("opacity", '0');
        
        if(property == "transform"){
          
          element.removeAttribute('style');
        }else{
          $(element).css(property,'-100px');
        }
      }
    };
    
    // remove sticky top class on smaller screen size
   
    window.onscroll = ()=>{
   
      scrollMagic(first, "bottom");
      scrollMagic(second, "bottom");
      scrollMagic(third, "bottom");
    
      scrollMagic(fourth, "transform", "scale3d(1,1,1)");
     
  }
})(); 
  });
