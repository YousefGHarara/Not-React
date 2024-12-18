

let div = document.querySelector("div");

let section = document.querySelector("section");


document.addEventListener("mousemove", function(e) {
  // console.log(e.pageX);
  // console.log(e.pageY);
  div.offsetLeft = 700; 

  

  console.log("offsetLeft : " + div.offsetLeft);
  console.log("offsetTop : " + div.offsetTop);
  console.log("offsetHeight : " + div.offsetHeight);
  console.log("offsetWidth : " + div.offsetWidth);
  console.log("offsetParent : " + div.offsetParent);
  console.log(div.offsetParent);
  console.log("*".repeat(50));
  console.log( "e.pageX  " + e.pageX);
  console.log( "e.pageY  " + e.pageY);

})