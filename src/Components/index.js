import React from 'react';
import "./style.css";
//import Items from "./item";

const  index = ({ activeItem, closeWidget }) => {
    return (
        <div className="container">
            {activeItem.map((item) => {
                //console.log(item.comp);
                return (
                    <div className="item-contnr">
                        <div>{item.title}</div>
                        <div>
                            {React.cloneElement(item.comp, {closeWidget, title: item.title, id: item.id }) }
                        </div>
                    </div>
                    
                )//<> {item.comp} </>;
            })}
        </div>
    );
}

export default index;