// Initialisation des variables
let score=0;
let nbquestion=0;

// Fonction de génération d'une question en mode aléatoire
function rdImage(){
    
    const alea = document.getElementById("alea")
    const randomIndex = Math.floor(Math.random() * tableauImage1.length);
    const answer= document.getElementById("answer")
    const validate= document.getElementById("validate")
    i=randomIndex
    
    const question=tableauImage1[randomIndex]
    alea.src=question.src
    

    answer.hidden=false
    validate.hidden=false
    Start.hidden=true
    

   // Génération de trois réponses aléatoires
   // On modifie à la fois l'attribut label et l'attribut value

    const reponse = document.querySelectorAll('#answer label')
    const reponsevalue=document.querySelectorAll('input[name="reponse"]')
   
    const j =Math.floor(Math.random()*reponse.length);
   
    for (let k=0;k<reponse.length;k++){

        let rdanswer=getrdanswer();
        // On exclue la bonne réponse des possibilités
        if (rdanswer===i){
            rdanswer=getrdanswer();

        }
        else{
        
        reponse[k].innerHTML=tableauMotsTH1[rdanswer]
        reponsevalue[k].value=tableauMotsTH1[rdanswer]
        }
       


    }

// Génération de la bonne réponse sur un emplacement aléatoire
// On modifie à la fois l'attribut label et l'attribut value
    const bonneReponse=reponse[j];
    const bonneReponseValue=reponsevalue[j];
    bonneReponse.innerHTML=tableauMotsTH1[i];
    bonneReponseValue.value=tableauMotsTH1[i];
    
     

    
   
    
    // La fonction retourne la bonne réponse pour pouvoir la comparer à celle de l'utilisateur
   return tableauMotsTH1[i]
   
}
// Fonction bouton Menu
function Menu(){
    document.location.href="index.html"

}
// Fonction Mathématique générant un index aléatoire du tableau
function getrdanswer(){
    return Math.floor(Math.random()*tableauMotsTH1.length)

}


//Fonction qui compare la réponse de l'utilisateur      
function chkAnswer(){
    let Answer=document.querySelectorAll('input[name="reponse"]')
    let slcAnswer="";
    let scorezone=document.getElementById("scorezone")
    // On parcours les boutons pour voir lequel est coché
    for (let k=0;k<Answer.length;k++){
        if(Answer[k].checked){
            slcAnswer=Answer[k].value
            break
        }

    }
    // Si la réponse est correcte
  if(slcAnswer===tableauMotsTH1[i]){
    console.log(slcAnswer)
    score++
    nbquestion++
    Correct.play()
    scorezone.innerHTML=("Your score is "+score+" / "+nbquestion )
    rdImage();
    reset();
  }
  //Sinon
  else{
    Wrong.play()
    nbquestion++
    scorezone.innerHTML=("Your score is "+score+" / "+nbquestion )
    rdImage();
    reset();
  }
}
//fonction qui supprime le boutton coché pour la question suivante
function reset(){
    let Answer=document.querySelectorAll('input[name="reponse"]')
    
    // On parcours les boutons pour voir lequel est coché
    for (let k=0;k<Answer.length;k++){
        if (Answer[k].checked){
            Answer[k].checked=false;

        }
}
}
