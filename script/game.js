let score=0;
let nbquestion=0;   
function rdImage(){
    const alea = document.getElementById("alea")
    const randomIndex = Math.floor(Math.random() * tableauImage.length);
    const answer= document.getElementById("answer")
    const validate= document.getElementById("validate")
    i=randomIndex
    
    const question=tableauImage[randomIndex]
    alea.src=question.src
    

    answer.hidden=false
    validate.hidden=false
    

   

    const reponse = document.querySelectorAll('#answer label')
    const reponsevalue=document.querySelectorAll('input[name="reponse"]')
   
    const j =Math.floor(Math.random()*reponse.length);
   
    for (let k=0;k<reponse.length;k++){
        let rdanswer=getrdanswer();
        
        reponse[k].innerHTML=tableauMotsTH1[rdanswer]
        reponsevalue[k].value=tableauMotsTH1[rdanswer]
       


    }


    const bonneReponse=reponse[j];
    const bonneReponseValue=reponsevalue[j];
    bonneReponse.innerHTML=tableauMotsTH1[i];
    bonneReponseValue.value=tableauMotsTH1[i];
    
     

    
   
    
    
   return tableauMotsTH1[i]
   
}

function Menu(){
    document.location.href="index.html"

}

function getrdanswer(){
    return Math.floor(Math.random()*tableauMotsTH1.length)

}


        
function chkAnswer(){
    let Answer=document.querySelectorAll('input[name="reponse"]')
    let slcAnswer="";
    let scorezone=document.getElementById("scorezone")
    for (let k=0;k<Answer.length;k++){
        if(Answer[k].checked){
            slcAnswer=Answer[k].value
            break
        }

    }
  if(slcAnswer===tableauMotsTH1[i]){
    console.log(slcAnswer)
    score++
    nbquestion++
    scorezone.innerHTML=("Your score is "+score+" / "+nbquestion )
    rdImage();
  }
  else{
    nbquestion++
    scorezone.innerHTML=("Your score is "+score+" / "+nbquestion )
    rdImage();
  }
}