$(document).ready(function() {
  $("form").submit(function(e){
    e.preventDefault();
    $(".flash").css("color", "#d01543");
    $(".flash").css("display", "block");
    $(".flash")[0].setAttribute("title", "error message");

    var ps = $("#ps").val()
    var cn = $("#cn").val()
    var msg = ""

    if (ps === "") {
      msg = "Password is required."
    } else if (ps !== cn) {
      msg = "Sorry, your password and confirmation do not match."
    } else if (ps.length <= 4) {
      msg = "Password must be greater than 4 characters."
    } else if (ps.length <= 5) {
      msg = "Sorry, password must be greater than 5 characters."
    } else if (ps.length <= 6) {
      msg = "For your security, password must be greater than 6 characters."
    } else if (ps.length > 16) {
      msg = "Password cannot be longer than 16 characters."
    } else if (!ps.match(/[a-z]/i)) {
      msg = "Password must contain alpha characters."
    } else if (!ps.match(/[a-z]/)) {
      msg = "Password must contain at least one lower-case letter."
    } else if (!ps.match(/[A-Z]/)) {
      msg = "Password must contain at least one capital letter."
    } else if (!ps.match(/[0-9]/)) {
      msg = "Password must contain at least one number."
    } else if (!ps.match(/[!@#$%^&*]/)) {
      msg = "Password must contain at least one special character: ! @ # $ % ^ & *."
    } else if (ps.match(/[^a-zA-Z0-9!@#$%^&*]/)) {
      var badIndex = ps.search(/[^a-zA-Z0-9!@#$%^&*]/)
      msg = "Sorry, password has an invalid character: " + ps[badIndex]
    } else if (ps.match(/([A-Za-z0-9])\1{1}/)) {
      msg = "Password cannot contain repeating alpha-numeric characters."
    } else if (ps.match(/([a-zA-Z0-9]).*?\1/)) {
      msg = "Password cannot contain duplicated alpha-numeric characters."
    } else if (ps.match(/([a-zA-Z0-9]).*?\1/)) {
      msg = "Password cannot contain duplicated alpha-numeric characters."
    } else if (!ps[0].match(/[!@#$%^&*]/)) {
      msg = "Required to start password with special character"
    } else if (ps[2] !== "C") {
      msg = "The third character of your password must be a capital C."
    } else if (ps[ps.length-1] !== "2") {
      msg = "The last character of your password must be the number 2."
    } else if (!ps.match(/d/)) {
      msg = "Password must contain the lower-case letter d."
    } else if (!ps.match(/1983/)) {
      msg = "Required that password contain year of birth of popular actress Kate Mara."
    } else if (!ps.match(/Doha/)) {
      msg = "Password must contain name of the capital and largest city of Qatar."
    } else {
      $(".flash").css("color", "#316767");
      $(".flash")[0].setAttribute("title", "success message");
      msg = "Great! Your registration is complete."
    }

    $(".flash h1").html(msg);
    return false;
  })
});
