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

if (localStorage.getItem('theme') === Theme.DARK) {
  toggle.checked = true;
   bodyList.add(Theme.DARK);
}

function onSwitchToggle(event) {
   if (toggle.checked === true)
  {
    bodyList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
      }
  else {
    bodyList.remove(Theme.DARK);
    localStorage.removeItem('theme');
   }
}

MenuList.insertAdjacentHTML('beforeend', MenuCall);
function CreateMenuCall(lists) {
  return lists.map(Menu).join('');
}
