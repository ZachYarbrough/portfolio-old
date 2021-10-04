const modal1 = document.getElementById("project1Modal");
const modal2 = document.getElementById("project2Modal");
const modal3 = document.getElementById("project3Modal");
const modal4 = document.getElementById("project4Modal");
const modal5 = document.getElementById("project5Modal");

// Get the button that opens the modal
const btn1 = document.getElementById("project1");
const btn2 = document.getElementById("project2");
const btn3 = document.getElementById("project3");
const btn4 = document.getElementById("project4");
const btn5 = document.getElementById("project5");

// Get the <span> element that closes the modal
const span1 = document.getElementsByClassName("close")[0];
const span2 = document.getElementsByClassName("close")[1];
const span3 = document.getElementsByClassName("close")[2];
const span4 = document.getElementsByClassName("close")[3];
const span5 = document.getElementsByClassName("close")[4];

// When the user clicks on the button, open the modal 
btn1.onclick = function() {
  modal1.style.display = "block";
}

btn2.onclick = function() {
  modal2.style.display = "block";
}

btn3.onclick = function() {
  modal3.style.display = "block";
}

btn4.onclick = function() {
  modal4.style.display = "block";
}

btn5.onclick = function() {
  modal5.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

span3.onclick = function() {
  modal3.style.display = "none";
}

span4.onclick = function() {
  modal4.style.display = "none";
}

span5.onclick = function() {
  modal5.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }

  if (event.target == modal2) {
    modal2.style.display = "none";
  }

  if (event.target == modal3) {
    modal3.style.display = "none";
  }

  if (event.target == modal4) {
    modal4.style.display = "none";
  }

  if (event.target == modal5) {
    modal5.style.display = "none";
  }
}