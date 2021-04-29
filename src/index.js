import './sass/main.scss';
import Menu from './menu.hbs'
import lists from './menu.json'

const PriceMenu = document.querySelector('.js-menu');

const MenuCall = CreateMenuCall(lists);
PriceMenu.insertAdjacentHTML('beforeend', MenuCall);
function CreateMenuCall(lists) {
  //return lists.map(Menu).join('');
  return Menu(lists);
 }
//console.log(PriceMenu());
PriceMenu.insertAdjacentHTML('beforeend', MenuCall);
