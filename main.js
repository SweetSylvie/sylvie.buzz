
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function showStuff(className) {
  document.querySelectorAll("." + className).forEach(element => {
    element.style.display = "block";
  });
}

function hideStuff(className) {
  document.querySelectorAll("." + className).forEach(element => {
    element.style.display = "none";
  });
}

function acknowledgeDesktop() {
    hideStuff("overlay");
    document.cookie = "acknowledgeDesktop=true"; 
}

// WORKS :D
if(document.cookie == ""){
    console.log("cookie is not present")
    if (window.innerWidth * 1.4 < window.innerHeight || window.innerHeight < 700) {
        showStuff("overlay");
    }
}
