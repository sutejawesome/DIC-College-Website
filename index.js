function validateForm() {
  let name = document.forms["query_form"]["name"].value;
  if (name == "") {
    alert("Please enter a name");
  }
  else{
    alert("Not a valid name")
  }

  var e_mailRegex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let email= document.query_form.email.value;
  if (email.match(e_mailRegex)) {
    alert("Valid email address!");
}
else{
  alert("Not valid email adress")
}

var contact_regex = /^\d{10}$/;
  let contactNo = document.query_form.contact_number.value;
  if(contactNo.match(contact_regex)){
    alert("Valid phone number");
  }
  else{
    alert("Not a valid phone num")
  }

  let query = document.forms["query_form"]["query"].value;
  if (query == "") {
    alert("Please enter your query");
  }
  else{
    alert("Your query is received")
  }
}

// var faq = document.getElementsByClassName("faq");
// var i;
// for (i = 0; i < faq.length; i++) {
//     faq[i].addEventListener("click", function () {
//         /* Toggle between adding and removing the "active" class,
//         to highlight the button that controls the panel */
//         this.classList.toggle("active");
//         /* Toggle between hiding and showing the active panel */
//         var body = this.nextElementSibling;
//         if (body.style.display === "block") {
//             body.style.display = "none";
//         } else {
//             body.style.display = "block";
//         }
//     });
// }
var x1;
function faq_pg1() {
  x1 = document.getElementById('faq1');
  if (x1.style.display === "none") {
    x1.style.display = "block";
    x2.style.display="none"
    x3.style.display="none"
    x4.style.display="none"
    x5.style.display="none"

  } else {
    x1.style.display = "none";
  }
}
var x2;
function faq_pg2() {
  x2 = document.getElementById('faq2');
  if (x2.style.display === "none") {
    x2.style.display = "block";
      x1.style.display = "none";
      x3.style.display = "none";
      x4.style.display="none"
      x5.style.display="none"
  } else {
    x2.style.display = "none";
  }
}

var x3;
function faq_pg3() {
  x3 = document.getElementById('faq3');
  if (x3.style.display === "none") {
    x3.style.display = "block";
      x1.style.display = "none";
      x2.style.display = "none"
      x4.style.display="none"
      x5.style.display="none"
  } else {
    x3.style.display = "none";
  }
}

var x4;
function faq_pg4() {
  x4 = document.getElementById('faq4');
  if (x4.style.display === "none") {
    x4.style.display = "block";
      x1.style.display = "none";
      x2.style.display = "none"
      x3.style.display="none"
      x5.style.display="none"
  } else {
    x4.style.display = "none";
  }
}

var x5;
function faq_pg5() {
  x5 = document.getElementById('faq5');
  if (x5.style.display === "none") {
    x5.style.display = "block";
      x1.style.display = "none";
      x2.style.display = "none"
      x3.style.display="none"
      x4.style.display="none"
  } else {
    x5.style.display = "none";
  }
}

let rev = 0;
carousel(rev);

function previousReview() {
    rev = rev - 1;
    carousel(rev);
}

function nextReview() {
    rev = rev + 1;
    carousel(rev);
}

function carousel(review) {
    let reviews = document
        .getElementsByClassName("review_content");

    if (review >= reviews.length) {
        review = 0;
        rev = 0;
    }
    if (review < 0) {
        review = reviews.length - 1;
        rev = reviews.length - 1;
    }
    for (let i = 0; i < reviews.length; i++) {
        reviews[i].style.display = "none";
    }
    reviews[review].style.display = "block";
}

let today = new Date();
let expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000);

function setCookie() {
    let username = document.getElementById("username");
    let year = document.getElementById("year");
    let roll = document.getElementById("rollno");
    document.cookie = "username=" + username.value + ";path=/" + ";expires=" + expiry.toUTCString();
    document.cookie = "year=" + year.value + ";path=/" + ";expires=" + expiry.toUTCString();
    window.localStorage.setItem("roll", roll.value);
}
