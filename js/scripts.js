$(document).ready(function() {
    var age = parseInt(prompt("Enter your age:"));

    if (age >= 18) {
      $("#voting").show();
    } else if (age === 17) {
      $("#soclose").show();
    } else {
      $("#novote").show();
    }
});
