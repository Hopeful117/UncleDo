function rdImage(){
    const alea = document.getElementById("alea")
    const randomIndex = Math.floor(Math.random() * tableauImage.length);
    const answer= document.getElementById("answer")
    const validate= document.getElementById("validate")
    i=randomIndex
    score=0;
   
    const question=tableauImage[randomIndex]
    alea.src=question.src
    

    answer.hidden=false
    validate.hidden=false
    scorezone.hidden=false
    
   

    const reponse = document.querySelectorAll('#answer label')
   
    const j =Math.floor(Math.random()*reponse.length);
   
    for (let k=0;k<reponse.length;k++){
        let rdanswer=getrdanswer();
        
        reponse[k].innerHTML=tableauMotsTH1[rdanswer]
       


    }


    const bonneReponse=reponse[j];
    
    bonneReponse.innerHTML=tableauMotsTH1[i];
    
     

    
   
    
    
   
   
}

function Menu(){
    document.location.href="index.html"

}

function getrdanswer(){
    return Math.floor(Math.random()*tableauMotsTH1.length)

}


        
