import React from "react";
import '../style/AsideMain.css';
class AsideMain extends React.Component{
    render(){
        return(
           <div>
            <First/>
           <Second/>
           </div>
        )
    }
}
function First(){
    return(
        <div class="aboutUs doJustFlex2">
        <section class="abUs1">
          <h3 class="colorWhite titleAUs">НАШЕ КАФЕ</h3>
          <p class="colorWhite textAUs colorGrey">Мы расположены в одном из самых живописных мест города — на берегу реки, это ваш оазис в черте города, куда можно сбежать от шумного и пыльного мегаполиса. Мы, действительно уникальные, ведь все продумано до мелочей: проект построен из дикого закарпатского сруба, камин в основном зале ресторана и панорамные окна с видом на реку, уютные беседки на берегу реки и лучшая видовая террасса, шатер с посадкой на 200 человек, сказочный детский домик и бассейн.</p>
          <button type="button" class="btnAUs">ПОСМОТРЕТЬ МЕНЮ</button>
        </section>
        <section class="abUs2 doJustFlex2">
          <aside>
            <div class="block1">
              <a href="">Свежайшие продукты</a>
            </div>
            <div class="block2">
              <a href="">Лучшие повора</a>
            </div>
          </aside>
          <aside class="block34">
            <div class="block3">
              <a href="">Быстрая доставка</a>
            </div>
            <div class="block4">
              <a href="">Свежайшие продукты</a>
            </div>
          </aside>
        </section>
      </div>
    )
}
function Second(){
    return(
        <div class="backgroundAppeal">
      <div class="contactsForAppeal">
        <h1 class="colorWhite titleAUs">КОНТАКТЫ</h1>
        <hr/>
        <div class="adress doJustFlex2">
          <span class="locationOnIcon material-symbols-outlined colorWhite">location_on</span>
          <section>
            <p class="colorGrey">Наш адрес:</p>
            <p class="colorWhite">МО, городской округ Красногорск, село Ильинкое, Экспериментальная улица, 10</p>
          </section>
        </div>
        <div class="mail doJustFlex2">
          <span class="mainIcon material-symbols-outlined colorWhite">mail</span>
          <section>
            <p class="colorGrey">Наша почта:</p>
            <p class="colorWhite">auto.wash@gmail.com</p>
          </section>
        </div>
        <hr/>
        <section className="doJustFlex">
          <button type="button" className="btnAUs2">ЗАБРОНИРОВАТЬ СТОЛ</button>
          <div>
            <p className="phone">+7 (917) 510-57-59</p>
            <p className="colorGrey">Звоните или оставляйте заявку </p>
          </div>
        </section>
        <p>Мы в соц сетях:</p>
      </div>
    </div>
    )
}
export default AsideMain;