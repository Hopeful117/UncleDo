
const tableauMotsEN1 = ["Hello","Yes","No","Please","Thank you","Goodbye","Sorry","Water","Food","Help"];
const tableauMotsTH1 = ["สวัสดี","ใช่","ไม่","โปรด","ขอบคุณ","ลาก่อน","ขอโทษ","น้ำ","อาหาร","ช่วย"];
const tableauImage =  [];
const son = [ new Audio('Sound2/Hello.mp3'),new Audio('Sound2/Yes.mp3'),new Audio('Sound2/No.mp3'),new Audio('Sound2/Please.mp3'),new Audio ('Sound2/Thank.mp3'),
    new Audio('Sound2/Goodbye.mp3'), new Audio ('Sound2/Sorry.mp3'),new Audio ('Sound2/Water.mp3'),new Audio('Sound2/Food.mp3'),new Audio('Sound2/Help.mp3')
];

const imageHello = new Image();
imageHello.src="Images/Carte/hello.jpg"
tableauImage.push(imageHello);

const imageYes = new Image();
imageYes.src = "Images/Carte/Yes2.jpg"
tableauImage.push(imageYes)

const imageNo = new Image();
imageNo.src= "Images/Carte/No.jpg"
tableauImage.push(imageNo)

const imagePlease = new Image();
imagePlease.src ="Images/Carte/Please.jpg"
tableauImage.push(imagePlease)

const imageThank = new Image();
imageThank.src = "Images/Carte/thank.jpg"
tableauImage.push(imageThank)

const ImageBye = new Image();
ImageBye.src = "Images/Carte/Bye.jpg"
tableauImage.push(ImageBye)

const ImageSorry = new Image();
ImageSorry.src = "Images/Carte/Sorry.jpg"
tableauImage.push(ImageSorry)

const ImageWater = new Image();
ImageWater.src= "Images/Carte/Water.jpg"
tableauImage.push(ImageWater)

const ImageFood = new Image();
ImageFood.src ="Images/Carte/Food.jpg"
tableauImage.push(ImageFood)

const ImageHelp = new Image();
ImageHelp.src="Images/Carte/help.jpg"
tableauImage.push(ImageHelp)
