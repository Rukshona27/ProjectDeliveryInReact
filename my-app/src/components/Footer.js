import React from "react";
import logo from '../img/ellipse.png'
import '../style/Footer.css'
function EndFooter(){
    return(
        <div>
            <hr/>
            <div className="footer">
            <img src={logo} alt="logo"></img>
            <section className="footersection">
                <a className="footerLinkLogo" href="">LOGOS</a>
                <p className="colorGrey footerTextLittle">© ООО СК «АПШЕРОН» <br/> Все права защищены. 2010-2024</p>
                <ul>
                    <li className="footerLink"><a href="">Пользовательское соглашение</a></li>
                    <li className="footerLink"><a href="">Карта сайта</a></li>
                    <li className="footerLink"><a href="">Политика конфиденциальности</a></li>
                </ul>
            </section>
            <p className="footerlink2"><a href="">О ресторане</a></p>
            <p className="footerlink2"><a href="">Условия доставки</a></p>
            <p className="footerlink2"><a href="">Возврат товара</a></p>
            <p className="footerlink2"><a href="">Акции</a></p>
        </div>
        </div>
    )
}
export default EndFooter;