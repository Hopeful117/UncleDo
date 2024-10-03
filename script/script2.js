






// Initialisation de la page 








function lesson2(){
    i=0;
    
    L1.disabled=false;
    L2.disabled=true;
    track=0;
    boutonSuivant.setAttribute('onclick','next2()')
    boutonPrecedent.setAttribute('onclick','previous2()')
    sound.setAttribute('onclick','sound2()')

carte.src=tableauImage2[i].src
    English.innerText=tableauMotsEN2[i]
    Thai.innerText=tableauMotsTH2[i]
    boutonPrecedent.disabled=true;


   

     
        
       
       

        
     
        
        
            
            
        
    
   // fonction gérant l'affichage de l'image et des valeurs associés précédentes     
  

   

}

function next2(){
    
   
    
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
    
}

function previous2(){
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
}



  

function sound2(){
        
    track=son2[i]
    track.play();
}
    
    

