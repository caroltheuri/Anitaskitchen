/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var inputtedemail = $("input#email").val();
    var result = (inputtedemail);
    alert("Hey pal you have successfully subscribed to our products with this email:" + result +
      " " + "Welcome");
  });
});
