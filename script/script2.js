






// Initialisation de la page 








function lesson2(){
    i=0;
    
    L1.disabled=false;
    L2.disabled=true;
    track=son2[i]

carte.src=tableauImage2[i].src
    English.innerText=tableauMotsEN2[i]
    Thai.innerText=tableauMotsTH2[i]
    boutonPrecedent.disabled=true;
next.addEventListener ("click",()=>{
    
   
    
        if(i===limit){
            boutonSuivant.disabled=true;
            English.innerText=tableauMotsEN2[i]
            Thai.innerText=tableauMotsTH2[i]
            carte.src=tableauImage2[i].src
            console.log(i)
            
        }
        else{
            boutonSuivant.disabled=false;
            boutonPrecedent.disabled=false;
            i++
            English.innerText=tableauMotsEN2[i]
        Thai.innerText=tableauMotsTH2[i]
        carte.src=tableauImage2[i].src
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
            English.innerText=tableauMotsEN2[i]
        Thai.innerText=tableauMotsTH2[i]
        carte.src=tableauImage2[i].src
        console.log(i)
        }
    })
    sound.addEventListener("click",()=>{
        track=son2[i]
        track.play();
    })

}



  


    
    

function Menu(){
document.location.href="index.html"

}
