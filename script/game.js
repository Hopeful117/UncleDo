function rdImage(){
    const alea = document.getElementById("alea")
    const randomIndex = Math.floor(Math.random() * tableauImage.length);
    const answer= document.getElementById("answer")
    const validate= document.getElementById("validate")
    i=randomIndex
    console.log(i)
    const question=tableauImage[randomIndex]
    alea.src=question.src
    console.log(question)
    console.log(alea.src)

    answer.hidden=false
    validate.hidden=false

    const reponse = document.querySelectorAll('#answer input [type="radio"]')
    for(let j=0;j<reponse.length;j++){


    }
   
    
    
   
   
}

function Menu(){
    document.location.href="index.html"

}