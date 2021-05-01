import './sass/main.scss';//было
import Menu from './menu.hbs'//разметка элемента меню которая должна получаться по шаблону
import lists from './menu.json'// список в  меню
//popularToggle();
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const MenuList = document.querySelector('.js-menu');//разметка index.html  куда надо ложить меню
const toggle = document.querySelector('#theme-switch-toggle');  //переключатtль
toggle.addEventListener('change', onSwitchToggle); //слушатель переключателя


// localStorage.setItem('theme', JSON.stringify(Theme.LIGHT));
// const saveData = localStorage.getItem('theme');
// const parseData = JSON.parse(saveData);
const bodyList = document.body.classList;

if (localStorage.getItem('theme')==="dark-theme"){
  toggle.checked = true;
   bodyList.add(Theme.DARK);
}

//переключатель день ночь
function onSwitchToggle(event) {
  // console.log(event.currentTarget.checked);
  // console.log(document.body.classList)
  //event.currentTarget.checked=document.body.classList.add(Theme.DARK);
  if (toggle.checked === true)
  {
    bodyList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
    //localStorage.getItem('theme')

      //;

  //localStorage.setItem('theme', JSON.stringify(Theme.DARK));
  }
  else {
    bodyList.remove(Theme.DARK);
    localStorage.removeItem('theme');
 //localStorage.clear('theme');
      //&&
      //localStorage.removeItem('theme');
    // bodyList.add(Theme.LIGHT)

  }
}
// if (localStorage.getItem('theme')==='Theme.DARK'){
//     Toggle.checked=true;
// }


const MenuCall = CreateMenuCall(lists);//функция со списком меню
MenuList.insertAdjacentHTML('beforeend', MenuCall);
function CreateMenuCall(lists) {
  return lists.map(Menu).join('');
}

//вызов localStorage из темной темы



// function popularToggle() {
// if (localStorage.getItem('theme')==="dark-theme"){
//     toggle.checked=true;
// }
// }
//console.log(popularToggle() )


  //localStorage.setItem('theme', JSON.stringify(Theme.DARK));
  //const saveData = localStorage.getItem('theme');

