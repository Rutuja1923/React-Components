import './Product.css';

function Product(){ 
    return (
        <div className='Product'>
            <div className='img'>
                <img src="./src/assets/react-icon.jpg" alt="react-icon" id = 'icon' />
            </div>
            <div className='heading'>
                <h3 id='title'>Product Title</h3>
                <h5 id='desc'>Product Description</h5>
            </div>
        </div>
    );
}

export default Product;