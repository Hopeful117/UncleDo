








    let boutonSuivant = document.getElementById("next")
    let boutonPrecedent =document.getElementById("previous")
    let English= document.getElementById("English")
    let Thai= document.getElementById("Thai")
    let carte= document.querySelector(".carte")
    let i=0;
  
    
    carte.src=tableauImage[i].src
        English.innerText=tableauMotsEN1[i]
        Thai.innerText=tableauMotsTH1[i]
        boutonPrecedent.disabled=true;
    let limit=tableauMotsEN1.length-1
   
      
    
    console.log(carte)
   
        
        


    function next (){
       
        
        if(i===limit){
            boutonSuivant.disabled=true;
            English.innerText=tableauMotsEN1[i]
            Thai.innerText=tableauMotsTH1[i]
            carte.src=tableauImage[i].src
            console.log(i)
            
        }
        else{
            boutonSuivant.disabled=false;
            boutonPrecedent.disabled=false;
            i++
            English.innerText=tableauMotsEN1[i]
        Thai.innerText=tableauMotsTH1[i]
        carte.src=tableauImage[i].src
        }
        
    }

     
        
       
       

        
     
        
        
            
            
        
    
        
  
function precedent(){
        if(i===0){
            boutonPrecedent.disabled=true;
            
            
        }
        else{
            boutonPrecedent.disabled=false;
            
            boutonSuivant.disabled=false;
            i--
            English.innerText=tableauMotsEN1[i]
        Thai.innerText=tableauMotsTH1[i]
        carte.src=tableauImage[i].src
        console.log(i)
        }
    }

       

    // }
// )

function Menu(){
    document.location.href="index.html"

}

function Learn(){
    document.location.href="learn.html"
}
function PlaySound(){
    son[i].play();
}
