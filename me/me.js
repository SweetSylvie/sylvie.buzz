const oneYear = 365.25 * 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
const firstDate = new Date();
const secondDate = new Date(2012, 2, 1);

const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneYear));


function daysBetween(one, another) {
  return Math.round(Math.abs((+one) - (+another))/8.64e7);
}


//document.getElementById("age").innerHTML = "15";

document.getElementById("age").innerHTML = "I am Sylvie, a " + Math.floor(daysBetween(new Date(2012, 2, 1), new Date())/365.25) + " year old transgirl :3";

