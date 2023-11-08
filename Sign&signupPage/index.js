
var modal = document.getElementById('id1');
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var modal = document.getElementById('id01');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function validateForm() {
  let x = document.forms["myForm"]["email"]["password"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}