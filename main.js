// var welcomeBanner = document.querySelector('.welcome-banner');
// welcomeBanner.addEventListener('click', hideBanner);
//
// function hideBanner(event){
//   if(event.target.classList.contains('close_x_icon')){
//    event.target.parentNode.remove()
//   }
// } Grayson's method for hiding Banner

//HIDE WELCOME BANNER!
document.querySelector('.close_x_icon').addEventListener('click', hideBanner);
var welcomeBanner = document.querySelector('.welcome-banner');
function hideBanner() {
  welcomeBanner.style.display = 'none';
}

// ACTIVE STATES for BUTTONS
var dashboardIcon = document.querySelector('.dashboard_logo');
var transactionsIcon = document.querySelector('.transactions_logo');
var profileIcon = document.querySelector('.profile_logo');

dashboardIcon.addEventListener('click', hideInactiveStateOne);
function hideInactiveStateOne() {

  dashboardIcon.classList.toggle('icon-inactive');

  //transactionsIcon.classList.removeClass('icon-active');

  //profileIcon.classList.removeClass('icon-active');
}

var els = document.getElementsByClassName('icon-active');

dashboardIcon.addEventListener('click', _removeClass);

function _removeClass() {
  while (els[0]) {
    els[1].classList.remove('icon-active');
  }
}

transactionsIcon.addEventListener('click', hideInactiveStateTwo);
function hideInactiveStateTwo() {

  transactionsIcon.classList.toggle('icon-inactive');

  //dashboardIcon.classList.removeClass('icon-active');

  //profileIcon.classList.removeClass('icon-active');
}

profileIcon.addEventListener('click', hideInactiveStateThree);
function hideInactiveStateThree() {

  profileIcon.classList.toggle('icon-inactive');

  //dashboardIcon.classList.removeClass('icon-active');

  //transactionsIcon.classList.removeClass('icon-active');
}

//CHECK THIS CODE OUT: SEE WHAT IT CAN DO:
//function toggleNavigation(element) {
//  element.classList.toggle('open');
//}

//document.getElementById('button').addEventListener('click', function() {
//Array.from(document.getElementsByClassName('navigation')).forEach(toggleNavigation);
//});
//THIS CODE BLOCK IS GOOD! SHOWS ACTIVE STATE ON CLICK
// document.querySelector('.dashboard_logo').addEventListener('click', hideInactiveState);
// function hideInactiveState() {
//   jQuery('.dashboard_logo').removeClass('icon-inactive').addClass('icon-active');
// }

//THIS CODE BLOCK IS GOOD!
//TOGGLES ACTIVE STATE OF ALL BUTTONS
// document.querySelector('.dashboard_logo').addEventListener('click', hideInactiveStateOne);
// var dashboardIcon = document.querySelector('.dashboard_logo');
// function hideInactiveStateOne() {
//   dashboardIcon.classList.toggle('icon-inactive');
// }
//
// document.querySelector('.transactions_logo').addEventListener('click', hideInactiveStateTwo);
// var transactionsIcon = document.querySelector('.transactions_logo');
// function hideInactiveStateTwo() {
//   transactionsIcon.classList.toggle('icon-inactive');
// }
//
// document.querySelector('.profile_logo').addEventListener('click', hideInactiveStateThree);
// var profileIcon = document.querySelector('.profile_logo');
// function hideInactiveStateThree() {
//   profileIcon.classList.toggle('icon-inactive');
// }
