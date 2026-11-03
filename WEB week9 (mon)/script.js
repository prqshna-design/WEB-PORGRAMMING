
const demoButton = document.getElementById("demoButton");
const demoMessage = document.getElementById("demoMessage");

if (demoButton && demoMessage) {
  demoButton.addEventListener("click", function () {
    demoMessage.textContent =
      "Success! Your deferred JavaScript file is working correctly.";
  });
}
