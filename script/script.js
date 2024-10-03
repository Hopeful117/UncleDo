






// Initialisation de la page 


    let boutonSuivant = document.getElementById("next")
    let boutonPrecedent =document.getElementById("previous")
    let English= document.getElementById("English")
    let Thai= document.getElementById("Thai")
    let carte= document.querySelector(".carte")
    
    let sound = document.getElementById("sound")
    
    let i=0;
    let track =0;
    
    let limit=tableauMotsEN1.length-1
  
    function lesson1(){
         i=0;
         sound.setAttribute('onclick','sound1()')
         boutonSuivant.setAttribute('onclick','next1()')
         boutonPrecedent.setAttribute('onclick','previous1()')
        L1.disabled=true;
        L2.disabled= false;
    carte.src=tableauImage1[i].src
        English.innerText=tableauMotsEN1[i]
        Thai.innerText=tableauMotsTH1[i]
        boutonPrecedent.disabled=true;


        
    
         
            
           
           
    
            
         
            
            
                
                
            
        
       // fonction gérant l'affichage de l'image et des valeurs associés précédentes     
      
   

       
    
}
function next1(){
        
       
        
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
    
}

function previous1() {
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
}


   
      
function sound1(){
           
            
    track=son[i];
     track.play();
 }
    
        
        
// fonction gérant l'affichage de l'image et des valeurs associés suivantes

    

       

 
// fonction gérant la lecture des sons après appuis sur le bouton






// fonction gérant le bouton Menu    
function Menu(){
    document.location.href="index.html"

}
