document.addEventListener('DOMContentLoaded', function() {
	var checkPageButton = document.getElementById("buttonclick");
    checkPageButton.addEventListener("click", function() {

	window.open("chrome-extension://aomhfinkmfglnblgjgoapmkhpmffccaf/eventPage.html");
	
    chrome.runtime.getBackgroundPage;
	},false);
}, false); 