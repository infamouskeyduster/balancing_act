// var welcomeBanner = document.querySelector('.welcome-banner');
// welcomeBanner.addEventListener('click', hideBanner);
//
// function hideBanner(event){
//   if(event.target.classList.contains('close_x_icon')){
//    event.target.parentNode.remove()
//   }
// } Grayson's method for hiding Banner

document.querySelector('.close_x_icon').addEventListener('click', hideBanner)
var welcomeBanner = document.querySelector('.welcome-banner');
function hideBanner(){
  welcomeBanner.style.display = 'none';
}
