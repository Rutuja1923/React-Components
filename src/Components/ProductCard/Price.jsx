
export default function Price({oldPrice, newPrice}){
    return (
        <div id='price'>
            <span><strike>₹ {oldPrice}</strike></span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span>Get it @ ₹ {newPrice}</span>
        </div>
    );
}