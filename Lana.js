//hide/show mobile menu hamburger

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


// contact form
console.log('it works');

$(document).ready(function () {
  $('.submit').click(function (event) {
   console.log('clicked')

   var name = $('.name').val()
   var email = $('.email').val()
   var phone = $('.phone').val()
   var message = $('.message').val()

   var statusElm = $('.status')
   statusElm.empty()

   if(email.length > 5 && email.includes('@') && email.includes('.')) {
    statusElm.append('<div>email is valid</div>');
   }
   else{
    statusElm.append('<div>email is invalid</div>');
   }
   
  })
})











