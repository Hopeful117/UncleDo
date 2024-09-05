
const tableauMotsEN1 = ["Hello","Yes","No","Please","Thank you","Goodbye","Sorry","Water","Food","Help"];
const tableauMotsTH1 = ["สวัสดี","ใช่","ไม่","โปรด","ขอบคุณ","ลาก่อน","ขอโทษ","น้ำ","อาหาร","ช่วย"];
const tableauImage =  [];
const son = [ new Audio('Sound/Hello.wav'),new Audio('Sound/Yes.wav'),new Audio('Sound/No.wav'),new Audio('Sound/Please.wav'),new Audio ('Sound/Thank.wav'),
    new Audio('Sound/Bye.wav'), new Audio ('Sound/Sorry.wav'),new Audio ('Sound/Water.wav'),new Audio('Sound/Food.wav'),new Audio('Sound/Help.wav')
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
