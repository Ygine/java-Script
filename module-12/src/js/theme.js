const wrapper = document.querySelector('[data-themcontainer]');
const SectionButtons = document.querySelector('.thems_button');
const buttons = document.querySelectorAll('.thems_button > button');
const lokalTheme = localStorage.getItem('theme');

switch (lokalTheme) {
  case null: {
    wrapper.classList.add('default');
    break;
  }
  case 'default': {
    wrapper.classList.add('default');
    break;
  }
  case 'darken': {
    wrapper.classList.add('darken');
    break;
  }
  case 'banana': {
    wrapper.classList.add('banana');
    break;
  }
  case 'cherry': {
    wrapper.classList.add('cherry');
    break;
  }
  case 'blueberry': {
    wrapper.classList.add('blueberry');
    break;
  }
  case 'leaf': {
    wrapper.classList.add('leaf');
    break;
  }
  case 'nightsky': {
    wrapper.classList.add('nightsky');
    break;
  }
}

const handlerSetTheme = e => {
  const btn = e.target;
  const theme = btn.dataset.theme;

  if (btn.nodeName !== 'BUTTON') return;

  buttons.forEach(elem => {
    elem.removeAttribute('disabled');
  });

  wrapper.setAttribute('class', '');
  wrapper.classList.add(`${theme}`);
  btn.setAttribute('disabled', true);

  localStorage.setItem(`theme`, `${theme}`);
};

SectionButtons.addEventListener('click', handlerSetTheme);

// export const setTheme = (function(exports) {
//   var themeChanger = {
//     settings: {
//       wrapper: $('.wrapper'),
//       buttons: $('.controls > button'),
//     },

//     init: function() {
//       var _self = this;
//       this.settings.buttons.on('click', function() {
//         var $node = $(this),
//           theme = $node.data('theme');
//         _self.settings.wrapper.removeClass().addClass('.wrapper ' + theme);
//         _self.settings.buttons.removeAttr('disabled');
//         $node.attr('disabled', true);
//       });
//     },
//   };

//   themeChanger.init();
// })();
