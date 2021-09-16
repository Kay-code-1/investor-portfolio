document.getElementById("symbol-lookup").addEventListener("click", () => {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
