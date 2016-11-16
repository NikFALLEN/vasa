// $(function(){
// $('button').on('click', function(event){
//   event.preventDefault();
//   $.ajax({
//     url:'http://gs-class.com/name.php',
//     method:'GET',
//     data:{
//       name: $('input[name="name"]').val()
 //      }
 //    });
 //  });
 // });



// $(function(){
// $('button').on('click', function(event){
// 	 event.preventDefault();
// 	  $.ajax({
// 	    url:'http://gs-class.com/age.php',
// 		method:'put',
// 	    data:{
		    
// 		  age: $('input[type="number"]').val()
// 		}
//     });
//   });
// })




// $(function(){

//  $('button').on('click', function(event){
//   event.preventDefault();
//   $.ajax({
//     url:'http://gs-class.com/form.php',
//     method:'post',
//     data:{
//       login: $('input[type="text"]').val(),
//       password: $('input[type="password"]').val()
      
// }
//     });
//   });
//  });

function myFunction() {

var email = document.getElementById("email").value;
var password = document.getElementById("password").value;


var dataString = '&email1=' + email + '&password1=' + password;
if (email == '' || password == '') {
alert("Please Fill All Fields");
} else {

$.ajax({
type: "POST",
url: 'http://gs-class.com/auth.php',
data:{
      email: $('input[type="text"]').val(),
      password: $('input[type="password"]').val()
}
});
}
return false;
}
$(function(){


 $('button').on('click', function(event){
  event.preventDefault();
  $.ajax({
    url:'http://gs-class.com/auth.php',
    method:'post',
    data:{
      email: $('input[type="text"]').val(),
      password: $('input[type="password"]').val()
      
}
    });
  });
 });



