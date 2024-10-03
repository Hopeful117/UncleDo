const tableauMotsEN2 = ["Morning", "Night","Breakfast","Dinner","Chair","Table","Window","Door","Rain","Sun","Moon","Sky","Bird","Tree","Car","Bus","Mountain","Street","City","Flower"]
const tableauMotsTH2 = ["เช้า","คืน","อาหารเช้า","อาหารเย็น","เก้าอี้","โต๊ะ","หน้าต่าง","ประตู","ฝน","ดวงอาทิตย์","พระจันทร์","ท้องฟ้า","นก","ต้นไม้","รถ","รถบัส","ภูเขา","ถนน","เมือง","ดอกไม้ "       ]
const tableauImage2 = [];
const son2 = [new Audio ('Sound3/Morning.mp3'), new Audio('Sound3/Night.mp3'), new Audio('Sound3/Breakfast.mp3'), new Audio ('Sound3/Dinner.mp3')];

const ImageMorning = new Image();
ImageMorning.src= "Images/Carte2/morning.jpg"
tableauImage2.push(ImageMorning);

const ImageNight = new Image();
ImageNight.src ="Images/Carte2/Night.jpg"
tableauImage2.push(ImageNight);

const ImageBreakfast = new Image();
ImageBreakfast.src = "Images/Carte2/breakfast.jpg"
tableauImage2.push(ImageBreakfast);

const ImageDinner = new Image();
ImageDinner.src = "Images/Carte2/dinner.jpg"
tableauImage2.push(ImageDinner);
