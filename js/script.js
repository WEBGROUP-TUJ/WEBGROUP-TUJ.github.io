(function(){
  'use strict';

  class Menu {
    constructor(settings) {
      this.nodeMenu = settings.nodeMenu;
      settings.nodeMenuButton.addEventListener('click', this.toggle.bind(this));
    }

    toggle() {
      return this.nodeMenu.classList.toggle('js-menu_activated');
    }
  }

  let nodeMenu = document.querySelector('body');
  
  new Menu({
    nodeMenu: nodeMenu,
    nodeMenuButton: nodeMenu.querySelector('.js-menu__toggle')
  });
})();

$("header").append("<div class='glitch-window'></div>");
//fill div with clone of real header
$( "h1.glitched" ).clone().appendTo( ".glitch-window" );




// (function(){
//   'use strict';

//   class Menu {
//     constructor(settings) {
//       this.nodeMenu = settings.nodeMenu;
//       settings.nodeMenuButton.addEventListener('click', this.toggle.bind(this));
//       settings.nodeMenuButton.addEventListener('click', this.css("margin-bottom", "100px"));
//     }

//     toggle() {
//       return this.nodeMenu.classList.toggle('js-menu_activated');
//     }
//   }

//   let nodeMenu = document.querySelector('body');
  
//   new Menu({
//     nodeMenu: nodeMenu,
//     nodeMenuButton: nodeMenu.querySelector('.js-menu__toggle')
//   });
// })();

// $(".hamburger__button").click(function () {
//   $(this).css("margin-bottom", "100px");
// })