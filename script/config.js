//déclaration des Mots,sons et images
const tableauMotsEN1 = ["Hello","Yes","No","Please","Thank you","Goodbye","Sorry","Water","Food","Help","Family","Friend","Animal","House","School","Happy","Sad","Cold","Hot","Love"];
const tableauMotsTH1 = ["สวัสดี","ใช่","ไม่","โปรด","ขอบคุณ","ลาก่อน","ขอโทษ","น้ำ","อาหาร","ช่วย","ครอบครัว","เพื่อน","สัตว์ ","บ้าน ","โรงเรียน","มีความสุข","เศร้า ","หนาว","ร้อน","รัก"];
const tableauImage1 =  [];
const son = [ new Audio('Sound2/Hello.mp3'),new Audio('Sound2/Yes.mp3'),new Audio('Sound2/No.mp3'),new Audio('Sound2/Please.mp3'),new Audio ('Sound2/Thank.mp3'),
    new Audio('Sound2/Goodbye.mp3'), new Audio ('Sound2/Sorry.mp3'),new Audio ('Sound2/Water.mp3'),new Audio('Sound2/Food.mp3'),new Audio('Sound2/Help.mp3'),new Audio ('Sound2/family.mp3'),
new Audio('Sound2/friend.mp3'), new Audio ('Sound2/Animal.mp3')];

const imageHello = new Image();
imageHello.src="Images/Carte/hello.jpg"
tableauImage1.push(imageHello);

const imageYes = new Image();
imageYes.src = "Images/Carte/Yes2.jpg"
tableauImage1.push(imageYes)

const imageNo = new Image();
imageNo.src= "Images/Carte/No.jpg"
tableauImage1.push(imageNo)

const imagePlease = new Image();
imagePlease.src ="Images/Carte/Please.jpg"
tableauImage1.push(imagePlease)

const imageThank = new Image();
imageThank.src = "Images/Carte/thank.jpg"
tableauImage1.push(imageThank)

const ImageBye = new Image();
ImageBye.src = "Images/Carte/Bye.jpg"
tableauImage1.push(ImageBye)

const ImageSorry = new Image();
ImageSorry.src = "Images/Carte/Sorry.jpg"
tableauImage1.push(ImageSorry)

const ImageWater = new Image();
ImageWater.src= "Images/Carte/Water.jpg"
tableauImage1.push(ImageWater)

const ImageFood = new Image();
ImageFood.src ="Images/Carte/Food.jpg"
tableauImage1.push(ImageFood)

const ImageHelp = new Image(); 
ImageHelp.src="Images/Carte/help.jpg"
tableauImage1.push(ImageHelp)

const ImageFamily = new Image();
ImageFamily.src= "Images/Carte/family.jpg"
tableauImage1.push(ImageFamily)

const ImageFriend = new Image();
ImageFriend.src= "Images/Carte/friend.jpg"
tableauImage1.push(ImageFriend)

const ImageAnimal = new Image();
ImageAnimal.src="Images/Carte/Animal.jpg"
tableauImage1.push(ImageAnimal)

const Correct = new Audio('Soundeffect/correct.mp3');
const Wrong = new Audio ('Soundeffect/wrong.mp3');

