let bodyColors = [
  "#a8d530",
  "#42aaff",
  "#f3d55b",
  "#ff4f51",
  "#904ae8",
  "#ffa711",
];
let faces = [
    "face-0.png",
    "face-1.png",
    "face-2.png",
    "face-3.png",
    "face-4.png",
    "face-5.png",
]
 let bnts = document.querySelectorAll("button")
 let face = document.querySelector("#face")
 let indexNumb = 0 


bnts[0].addEventListener('click', (even)=>{
    indexNumb = (indexNumb+1)%faces.length
 face.src=faces[indexNumb]

})

bnts[1].addEventListener('click', (even)=>{
    indexNumb = (indexNumb+1)%bodyColors.length
    document.documentElement.style.setProperty(`--color-character`,bodyColors[indexNumb]) 
console.log(indexNumb);

})

bnts[2].addEventListener('click', (even)=>{
    indexNumb = (indexNumb+1)%bodyColors.length
    document.documentElement.style.setProperty(`--color-horns`,bodyColors[indexNumb]) 
    console.log(indexNumb);
    

})
bnts[3].addEventListener('click', (even)=>{
    indexNumb = (indexNumb+1)%bodyColors.length
    document.documentElement.style.setProperty(`--color-tail`,bodyColors[indexNumb]) 

})


