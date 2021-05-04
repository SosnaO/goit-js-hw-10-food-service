import './sass/main.scss';
import Menu from './menu.hbs'
import lists from './menu.json'

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const MenuList = document.querySelector('.js-menu');
const toggle = document.querySelector('#theme-switch-toggle');
const bodyList = document.body.classList;
const MenuCall = CreateMenuCall(lists);

toggle.addEventListener('change', onSwitchToggle);
// if (localStorage.getItem('theme') === ' ') {
//   //toggle.checked = true;
//   bodyList.add(Theme.LIGHT);
// }
if (localStorage.getItem('theme') === Theme.DARK) {
  toggle.checked = true;
  bodyList.add(Theme.DARK);
}
else {bodyList.add(Theme.LIGHT); }

function onSwitchToggle(event) {
   if (toggle.checked === true)
   {
    bodyList.remove(Theme.LIGHT);
    bodyList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
      }
  else {
     bodyList.remove(Theme.DARK);
     bodyList.add(Theme.LIGHT);
    localStorage.removeItem('theme');
   }
}

MenuList.insertAdjacentHTML('beforeend', MenuCall);
function CreateMenuCall(lists) {
  return lists.map(Menu).join('');
}
