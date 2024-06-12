function toggleText(id) {
  var text = 
  document.getElementById(id);
  if (text.style.display === "block") {
    text.style.display = "none";
  } else {
  document.querySelectorAll(".image-text").forEach(function(text) {
    text.style.display ="none";
  });
  text.style.display = "block";
  }
}
