import './sass/main.scss';//было
import Menu from './menu.hbs'//разметка элемента меню которая должна получаться по шаблону
import lists from './menu.json'// список в  меню


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const MenuList = document.querySelector('.js-menu');//разметка index.html  куда надо ложить меню
const Toggle = document.querySelector('#theme-switch-toggle');  //переключатtль

Toggle.addEventListener('change', onSwitchToggle); //слушатель переключателя
function onSwitchToggle(event) {
  console.log(event.currentTarget.checked);
  console.log(document.body.classList)
  //event.currentTarget.checked=document.body.classList.add(Theme.DARK);
  if (Toggle.checked === true)
  {document.body.classList.add(Theme.DARK) }
  else {
    document.body.classList.remove(Theme.DARK)
&&
    document.body.classList.add(Theme.LIGHT)
  }
}



const MenuCall = CreateMenuCall(lists);//функция со списком меню
MenuList.insertAdjacentHTML('beforeend', MenuCall);
function CreateMenuCall(lists) {
  return lists.map(Menu).join('');
}


