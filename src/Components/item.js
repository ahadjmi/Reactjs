import React from 'react';
import "./style.css";

const  item = ({ title, closeWidget, id }) => {
    return (
        <div className="container-item">
            <button onClick={() => closeWidget(id)}>Close</button>
            {title}
        </div>
    );
}

export default item;