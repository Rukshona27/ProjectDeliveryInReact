import React from "react";
import '../style/Main.css';
class Main extends React.Component{
    render(){
        return(
            <div>
                <TitleFood title={'ХОЛОДНЫЕ ЗАКУСКИ'}/>
                <div className=" wrapper2">
                    <ItemProduct/>
                    <ItemProduct/>
                    <ItemProduct/>
                </div>
                <hr/>
                <TitleFood title={'ГОРЯЧИЕ ЗАКУСКИ'}/>
                <div className=" wrapper2">
                    <ItemProduct/>
                    <ItemProduct/>
                    <ItemProduct/>
                </div>
                <hr/>
                <TitleFood title={'МЯСНЫЕ БЛЮДА'}/>
                <div className=" wrapper2">
                    <ItemProduct/>
                    <ItemProduct/>
                    <ItemProduct/>
                </div>
            </div>
            
        )
    }
}
function TitleFood({title}){
    return(
        <div class="titleApp doJustFlex">
            <span class="lineVertical"></span>
            <h1 class="titleName colorWhite">{title}</h1>
        </div>
    )
}
class ItemProduct extends React.Component{
    render(){
        return(
            <div class="products colorWhite">
            <img />
            <div class="doJustFlex pWeight" >
                <h4 class="elem">name</h4>
                <p class="textSizeHalf elem">weight</p>
            </div>
            <p class="textSizeHalf elem">description</p>
            <div class="doJustFlex flexBetween">
                <p class="elem">price ₽</p>
                <button type="button" class="btnMainB colorWhite doJustFlex flexAround">B корзинy <span class="material-symbols-outlined shoppingIcon">shopping_cart</span></button>
                {/* <button type="button" class="plus btnMain colorWhite">+</button>
                <button type="button" class="minus btnMain colorWhite">-</button> */}
            </div>
    </div>
        )
    }
}
export default Main;