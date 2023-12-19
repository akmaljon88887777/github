// jQuery(function($){
// var $navbar = $(".navbar");
// $(window).scroll(function(event){
//   var $current = $(this).scrollTop();
//   if($current > 0){
//     $navbar.addClass("navbar-color")
//   }else{
//     $navbar.removeClass("navbar-color")
//   }
// })
// })







// salom("Akmaljon")
// function salom(ism) {
//   console.log("Salom, " + ism + "!");
// }

// function salom(ism) {
//   console.log("Salom, " + ism + "!");
// }

// function aloqa(ism, telefon) {
//   console.log("Ism: " + ism);
//   console.log("Telefon: " + telefon);
// }

// salom("Akmaljon"); // Salom, John!
// aloqa("Dostonbek", "20080114"); 

function reverseDec(number) {
  const numberStr = String(number)
  const reversedStr = numberStr.split('').reverse().join('')
  return Number(reversedStr)
}