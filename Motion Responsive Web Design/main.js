/*For Hamburger*/
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }

  var y = document.getElementById("my-nav-icon");
  if (y.className === "nav-icon") {
    y.className += " responsive-nav";
  } else {
    y.className = "nav-icon";
  }
}
