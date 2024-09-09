function rdImage(){
    const alea = document.getElementById("alea")
    const randomIndex = Math.floor(Math.random() * tableauImage.length);
    const answer= document.getElementById("answer")
    i=randomIndex
    console.log(i)
    const question=tableauImage[randomIndex]
    alea.src=question.src
    console.log(question)
    console.log(alea.src)

    answer.hidden=false
   
    
    
   
   
}

function Menu(){
    document.location.href="index.html"

}