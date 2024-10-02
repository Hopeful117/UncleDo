






// Initialisation de la page 


    let boutonSuivant = document.getElementById("next")
    let boutonPrecedent =document.getElementById("previous")
    let English= document.getElementById("English")
    let Thai= document.getElementById("Thai")
    let carte= document.querySelector(".carte")
    document.getElementById("next")
    document.getElementById("previous")
    document.getElementById("sound")
    
    let i=0;
    let track =0;
    
    let limit=tableauMotsEN1.length-1
  
    function lesson1(){
         i=0;
         track=son[i];
        L1.disabled=true;
        L2.disabled= false;
    carte.src=tableauImage1[i].src
        English.innerText=tableauMotsEN1[i]
        Thai.innerText=tableauMotsTH1[i]
        boutonPrecedent.disabled=true;
next.addEventListener ("click",()=>{
        
       
        
            if(i===limit){
                boutonSuivant.disabled=true;
                English.innerText=tableauMotsEN1[i]
                Thai.innerText=tableauMotsTH1[i]
                carte.src=tableauImage1[i].src
                console.log(i)
                
            }
            else{
                boutonSuivant.disabled=false;
                boutonPrecedent.disabled=false;
                i++
                English.innerText=tableauMotsEN1[i]
            Thai.innerText=tableauMotsTH1[i]
            carte.src=tableauImage1[i].src
            }
            
        })
    
         
            
           
           
    
            
         
            
            
                
                
            
        
       // fonction gérant l'affichage de l'image et des valeurs associés précédentes     
      
   previous.addEventListener("click",()=>{
            if(i===0){
                boutonPrecedent.disabled=true;
                
                
            }
            else{
                boutonPrecedent.disabled=false;
                
                boutonSuivant.disabled=false;
                i--
                English.innerText=tableauMotsEN1[i]
            Thai.innerText=tableauMotsTH1[i]
            carte.src=tableauImage1[i].src
            console.log(i)
            }
        })

        sound.addEventListener("click",()=>{
           track=son[i];
            track.play();
        })
    
}


   
      
    
    
        
        
// fonction gérant l'affichage de l'image et des valeurs associés suivantes

    

       

 
// fonction gérant la lecture des sons après appuis sur le bouton






// fonction gérant le bouton Menu    
function Menu(){
    document.location.href="index.html"

}
