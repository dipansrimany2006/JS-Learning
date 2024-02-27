//acess the div or the boxes
let box = document.querySelectorAll(".box");
//.querySelectorAll() method make the elments in an array formation and we can acess them in a loop, and do all type of array operations
let idx = 1;
for (box of box) {
  box.innerText = `Find Unique value ${idx}`;
  idx++;
}