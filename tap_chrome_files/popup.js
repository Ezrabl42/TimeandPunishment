
document.addEventListener('DOMContentLoaded', function() {
  console.log("hi");
  var checkPageButton = document.getElementById('buttonclick');
  checkPageButton.addEventListener('click', function() {
console.log("clicked");

      console.log("found tab");
      d = document;
      var f = d.createElement('form');
      var phoneNumber = "+1" + d.getElementById("phone_value").value;
      var time = d.getElementById("timer_value").value;

console.log("time",time);
console.log("phoneNumber", phoneNumber);

  }, false);
}, false);
