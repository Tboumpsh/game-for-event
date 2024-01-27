let grand = document.querySelector(".grandparent");
let bro = document.querySelector(".grandparentB");
grand.addEventListener('mouseleave' , ()=>{
  grand.classList.add('out')
  grand.style.backgroundColor = ' rgb(33 71 62)';
  grand.textContent = "🥲  OMG"
})

grand.addEventListener('mouseenter' , ()=>{
  grand.style.backgroundColor = '  rgb(59, 90, 28)';
  grand.textContent = "🫡  HEY"
})
bro.addEventListener('mouseleave' , ()=>{
  bro.classList.add('PUSH')
  bro.style.backgroundColor = '  rgb(248, 115, 183)';
  bro.textContent = "SEE ME PLEASE 🫠"
})
bro.addEventListener('mouseenter' , ()=>{
  bro.style.backgroundColor = ' #E91E63';
  bro.textContent = "HEEE 😎"
})

// let parent = document.querySelector(".parent");
// let child = document.querySelector(".child");

// grand.addEventListener("click", (e) => {
//   console.log("grandparent");
// });
// parent.addEventListener("click", (e) => {
//   console.log("parent");
// });
// child.addEventListener("click", (e) => {
//   console.log("child");
// });
// grand.addEventListener("pointerdown", e => {
//     console.log(e);
//     const dot = document.createElement('div')
//     dot.classList.add('point')
//     dot.id = e.pointerId
//     positionDot(e , dot)
//     document.body.append(dot)
//   });

//   function positionDot(e , dot){
//     dot.style.width = `${e.width * 2}px`
//     dot.style.height = `${e.height * 2}px`
//     dot.style.left = `${e.pageX}px`
//     dot.style.top = `${e.pageY}px`
//   }
// let myArray = [2, 5, 10, 8, 9, 1, 6, 7, 4, 3];

// for (let i = 0; i < myArray.length - 1; i++) {
//   for (let j = 0; j < myArray.length - i - 1; j++) {
//     if (myArray[j] > myArray[j + 1]) {
//       let temp = myArray[j];
//       myArray[j] = myArray[j + 1];
//       myArray[j + 1] = temp;
//     }
//   }
// }

// console.log(myArray);

console.log(2 + 2); 
console.log(5 + 5 );
console.log(bro);
