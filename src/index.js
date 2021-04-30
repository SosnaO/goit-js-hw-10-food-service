import './sass/main.scss';//было
import Menu from './menu.hbs'//разметка элемента меню которая должна получаться по шаблону
import lists from './menu.json'// список в  меню

const MenuList = document.querySelector('.js-menu');//разметка index.html  куда надо ложить меню
//console.log(PriceMenu);
const MenuCall = CreateMenuCall(lists);//функция со списком меню
MenuList.insertAdjacentHTML('beforeend', MenuCall);
function CreateMenuCall(lists) {
  return lists.map(Menu).join('');
}
