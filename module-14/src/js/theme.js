import storage from './storage';
const wrapper = document.querySelector('[data-themcontainer]');
const SectionButtons = document.querySelector('.thems_button');
const buttons = document.querySelectorAll('.thems_button > button');
const lokalTheme = storage.load('theme');

const getLocaleTheme = lokalTheme => {
  const myButtons = [...buttons];
  const activeTheme = myButtons.find(btn => lokalTheme === btn.dataset.theme);

  if (activeTheme) {
    const themeName = activeTheme.dataset.theme;
    wrapper.classList.add(themeName);
    return;
  }
  wrapper.classList.add('default');
};

getLocaleTheme(lokalTheme);

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

  storage.save(`theme`, `${theme}`);
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
