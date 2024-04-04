 import '../style/Header.css';
 import React from 'react';
 class Header extends React.Component{
    render(){
        return(
            <div>
                <HeadNav/>
                <hr/>
                <MenuNav/>
                <hr/>
            </div>
        )
    }
 }
 function HeadNav(){
    return(
        <nav className='HeadNav'>
            <a href="#" class="colorWhite logo"><p>LOGOS</p></a>
            <div class="doJustFlex divHead">
                <span class="material-symbols-outlined colorWhite locationOnIcon">location_on</span>
                <input class="inputHead" type="text" placeholder="change this LATER" />
                <span class="material-symbols-outlined colorWhite searchIcon">search</span>
            </div>
            <div class="contacts doJustFlex">
                <span class="material-symbols-outlined colorWhite phoneIcon">phone_in_talk</span>
                <div class="contacts2">
                    <p class="contactTitle colorGrey">Контакты</p>
                    <p class="colorWhite contactTel">+7(916)510-57-59</p>
                </div>
            </div>
                <button class="btnHead">
                    <p class="colorWhite linkBtn" to="/basket">Корзина | num</p>
                </button>
        </nav>
    )
}
    function MenuNav(){
    return(
        <nav class="menu">
            <ul class="UlNone">
                <a href="#"><li class="menuNav colorGrey">Холодные закуски</li></a>
                <a href="#"><li class="menuNav colorGrey">Горячие закуски</li></a>
                <a href="#"><li class="menuNav colorGrey">Супы </li></a>
                <a href="#"><li class="menuNav colorGrey">Рыбные блюда</li></a>
                <a href="#"><li class="menuNav colorGrey">Гриль меню</li></a>
                <a href="#"><li class="menuNav colorGrey">Фирменные блюда</li></a>
                <a href="#"><li class="menuNav colorGrey">Напитки</li></a>
            </ul>
        </nav>
    )
 }
export default Header;