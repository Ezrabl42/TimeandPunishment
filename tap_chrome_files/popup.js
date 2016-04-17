document.addEventListener('DOMContentLoaded', function() {
  console.log("hi");
  var checkPageButton = document.getElementById('buttonclick');
  checkPageButton.addEventListener('click', function() {
  console.log("clicked");

      d = document;
      var phoneNumber = d.getElementById("phone_value").value;
      var time = d.getElementById("timer_value").value;
      chrome.runtime.getBackgroundPage;

  }, false);
}, false);