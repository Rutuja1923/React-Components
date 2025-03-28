/* eslint-disable react/prop-types */
import './Product.css';

function Product({title, description, image}){ 
    return (
        <div className='Product'>
            <div className='img'>
                <img src={`./src/assets/${image}`} alt="react-icon" id = 'icon' />
            </div>
            <div className='heading'>
                <h3 id='title'>{title}</h3>
                <h5 id='desc'>{description}</h5>
            </div>
        </div>
    );
}

export default Product;