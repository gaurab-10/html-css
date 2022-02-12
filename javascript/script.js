var topButton= document.getElementById("buttonTop");
  
// on scrolling website it calls the scrollFunctin()
window.onscroll= function(){scrollFunction()}; 

function scrollFunction()
{
    /* first one is for safari and second one for chrome */
    if(document.body.scrollTop >60 || document.documentElement.scrollTop>60) // if we scroll over 60px//
    {  
         buttonTop.style.display = "block";  // displays the go to top button //


    }
    else
    {
        buttonTop.style.display="none";        // hide go to top button // 
    }
}
function goToTop()   
{
    document.body.scrollTop=0;     // redirect us to top of the Research page //
    document.documentElement.scrollTop=0;
}