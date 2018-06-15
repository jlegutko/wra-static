// Menu
var menuButton = document.getElementById('menuButton');
var menuElement = document.getElementById('menuElement');

// Check Menu Flex Order
function checkMenuElementOrder() {
  return parseInt(window.getComputedStyle(menuElement).getPropertyValue('order'), 10);
}
// Hide Menu Element
function hideMenu() {
  menuElement.classList.remove('navigation--open');
}
// On window load hide menu
window.onload = function() {
  hideMenu();
}
// Hide menu on large screens
window.onresize = function() {
  if (menuElement.classList.contains('navigation--open') && !checkMenuElementOrder()) {
    hideMenu();
  }
}

// Function for toggling menu open and hidden
function toggleMenu() {
  menuElement.classList.toggle('navigation--open');
}
// Fire that function on button click
menuButton.addEventListener('click', toggleMenu);

////////////////////////////////////////////////////////////////////////////////

// Scroll Reveal
window.sr = ScrollReveal({
  duration: 1000,
  origin: 'bottom',
  scale: 1,
  distance: '4rem',
  mobile: false
});

sr.reveal(
  '#showcase1 .showcase__item',
  200
);
sr.reveal(
  '#showcase2 .showcase__item',
  200
);
sr.reveal(
  '#showcase3 .showcase__item',
  200
);
sr.reveal(
  '#showcase4 .showcase__item',
  200
);

sr.reveal(
  '.description'
);

// Smooth Scroll
var scroll = new SmoothScroll(
  'a[href*="#"]:not([class*="lightcase"])',
  {
    speed: 1000,
    updateURL: false,
  }
);



// Lightcase
jQuery(document).ready(function($) {
  $('a[data-rel^=lightcase], .artwork__link, .detail__link').lightcase({
    transition: 'fade',
    showTitle: true,
    showCaption: true,
    maxWidth: 1920,
    maxHeight: 1280,
    overlayOpacity: 0.99,
    overlayBackground: '#ff0000'
  });
  // Scroll Spy
  if ($('body').hasClass('page-home')) {
    var spy = new ScrollSpy('#main', {
      nav: '.years__link',
      className: 'years__link--active'
    });
  };
  if ($('body').hasClass('page-profile')) {
    var spy = new ScrollSpy('#main', {
      nav: '.user__link',
      className: 'user__link--active'
    });
  }
});
