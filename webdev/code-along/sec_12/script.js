// This returns an array of buttons
var button = document.getElementsByTagName("button");

// Writing just "button" instead of "button[0]" will result in error
// because of the array return in previous line
button[0].addEventListener("click", function(){
  console.log("CLICK!!!");
})