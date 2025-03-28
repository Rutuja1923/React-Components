/* eslint-disable react/prop-types */
export default function Price({oldPrice, newPrice}){
    return (
        <div id='price'>
            <span>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span>{newPrice}</span>
        </div>
    );
}